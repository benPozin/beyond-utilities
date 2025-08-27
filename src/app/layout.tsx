import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';

const MS_ID = process.env.NEXT_PUBLIC_MS_APP_ID || 'app_cmeoo2t0w006i0xwo8ttr7xy9';
const MS_SRC = process.env.NEXT_PUBLIC_MS_SCRIPT_SRC || 'https://api.memberstack.io/static/memberstack.js?';

export const metadata: Metadata = {
  title: 'Beyond Utilities',
  description: 'Helping high school students choose their path.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="memberstack"
          src={MS_SRC}
          strategy="beforeInteractive"
          data-memberstack-id={MS_ID}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-12">{children}</main>
      </body>
    </html>
  );
}