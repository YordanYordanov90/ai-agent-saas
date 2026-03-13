import type { Metadata } from "next";
import {  Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { shadcn } from "@clerk/ui/themes";
import { Toaster } from "sonner";



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
          <Toaster 
            position="bottom-right" 
            toastOptions={{
              style: {
                background: 'oklch(0.15 0.02 280)',
                border: '1px solid oklch(0.3 0.02 280)',
                color: '#eae2b7',
              },
            }}
          />
          <div className="flex-1 flex flex-col">
            {children}
          </div>
          
        </body>
      </html>
    </ClerkProvider>
  );
}
