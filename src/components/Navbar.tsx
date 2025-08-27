'use client';
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="flex h-14 items-center justify-between pl-2 pr-8">
        {/* Logo links back to home */}
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-48">
            <Image
              src="/beyond-logo.png"
              alt="Beyond Utilities Logo"
              fill
              priority
              sizes="192px"                 // avoid Next.js 'fill' warning
              className="object-contain hover:opacity-80"
            />
          </div>
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/schedule" className="font-bold hover:underline">Schedule</Link>
          <Link href="/about" className="font-bold hover:underline">About</Link>
          <Link href="/faq" className="font-bold hover:underline">Q&amp;A</Link>

          {/* ---- Auth (Memberstack) ---- */}
          {/* Logged OUT */}
          <div data-ms-content="!members" className="flex items-center gap-3">
            <button
              type="button"
              data-ms-modal="auth"
              data-ms-tab="login"
              className="font-bold hover:underline"
            >
              Sign in
            </button>
            <button
              type="button"
              data-ms-modal="auth"
              data-ms-tab="signup"
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Create account
            </button>
          </div>

          {/* Logged IN */}
          <div data-ms-content="members" className="flex items-center gap-3">
            <Link href="/account" className="font-bold hover:underline">My account</Link>
            <button
              type="button"
              data-ms-action="logout"
              className="rounded-lg border px-3 py-2 hover:bg-black/5"
            >
              Log out
            </button>
          </div>

          {/* Extra CTA to your signup page */}
          <Link
            href="/signup"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}