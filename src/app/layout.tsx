import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Beyond Utilities',
  description: 'Helping high school students choose their path.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-12">{children}</main>
      </body>
    </html>
  );
}