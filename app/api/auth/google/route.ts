import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { cookies } from "next/headers";
import { getAuthUrl } from "@/lib/google";
import { z } from "zod";

const providerSchema = z.enum(["gmail", "google_calendar"]);

export async function GET(request: NextRequest) {
  //verify auth
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
  //get the provider from the request
  const providerParam = request.nextUrl.searchParams.get("provider");
  const validation = providerSchema.safeParse(providerParam);
  
  if (!validation.success) {
    return NextResponse.json({ error: "Invalid provider" }, { status: 400 });
  }
  
  const provider = validation.data;
  //generate CSRF token
  const state = Buffer.from(
    JSON.stringify({ nonce: crypto.randomUUID(), provider }),
  ).toString("base64");
  //store state in Http-only cookie for validation
  const cookieStore = await cookies();
  cookieStore.set("google_oauth_state", state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 10, // 10 minutes
    path: "/",
    sameSite: "lax",
  });

  const authUrl = getAuthUrl(provider, state);
  //redirect to Google OAuth URL with state
  return NextResponse.redirect(authUrl);
}