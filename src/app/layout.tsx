import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import MemberstackLoader from '@/components/MemberstackLoader';

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
          src="https://api.memberstack.io/static/memberstack.js?"
          strategy="beforeInteractive"
          data-memberstack-id="app_cmeoo2t0w006i0xwo8ttr7xy9"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <MemberstackLoader />
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-12">{children}</main>
      </body>
    </html>
  );
}