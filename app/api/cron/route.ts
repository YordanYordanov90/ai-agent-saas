import { NextRequest, NextResponse } from "next/server";
import { getUsersWithAgentEnabled } from "@/db/queries";
import { runAgent } from "@/lib/agent";

export async function GET(request: NextRequest) {
  // Verify cron secret for security
  const authHeader = request.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const results = [];
    const eligibleUsers = await getUsersWithAgentEnabled();

    for (const { userId } of eligibleUsers) {
      try {
        const result = await runAgent(userId);
        results.push({
          userId: userId,
          status: result.status,
          summary: result.summary,
        });
      } catch (error) {
        console.error(`Failed to run agent for user ${userId}:`, error);
        results.push({
          userId: userId,
          status: "failed",
          summary: error instanceof Error ? error.message : "Unknown error",
        });
      }
    }

    return NextResponse.json({
      success: true,
      processedCount: results.length,
      results,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Cron job failed:", error);
    return NextResponse.json(
      {
        error: "Cron job failed",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// Support POST as well for flexibility
export async function POST(request: NextRequest) {
  return GET(request);
}
