// src/app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beyond Utilities",
  description: "Helping high school students choose their path.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Memberstack v2 */}
        <Script
          id="memberstack"
          src="https://api.memberstack.com/static/memberstack.js?custom" // ← important
          strategy="afterInteractive"
          data-memberstack-id="app_cmeoo2t0w006i0xwo8ttr7xy9" // your Test App ID
          crossOrigin="anonymous"
        />
        {/* If you use CSP headers, ensure:
            script-src https://api.memberstack.com 'self' ...;
            connect-src https://api.memberstack.com 'self' ...; */}
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-12">{children}</main>
      </body>
    </html>
  );
}
