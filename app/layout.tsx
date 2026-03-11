import type { Metadata } from "next";
import {  Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { shadcn } from "@clerk/ui/themes";



const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Flow AI",
  description: "Flow AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ theme: shadcn }}>
      <html lang="en" className={montserrat.variable}>
        <body className="antialiased min-h-screen flex flex-col">
          
          <div className="flex-1 flex flex-col">
            {children}
          </div>
          
        </body>
      </html>
    </ClerkProvider>
  );
}
