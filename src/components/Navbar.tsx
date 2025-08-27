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
              className="object-contain hover:opacity-80"
            />
          </div>
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/schedule" className="font-bold hover:underline">
            Schedule
          </Link>
          <Link href="/about" className="font-bold hover:underline">
            About
          </Link>
          <Link href="/faq" className="font-bold hover:underline">
            Q&amp;A
          </Link>

          {/* ---- Auth (Memberstack) ---- */}
          {/* Shown to visitors (logged OUT) */}
          <div data-ms-content="!members" className="flex items-center gap-3">
            <a data-ms-modal="login" className="font-bold hover:underline cursor-pointer">
              Sign in
            </a>
            <a
              data-ms-modal="signup"
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Create account
            </a>
          </div>

          {/* Shown to logged IN members */}
          <div data-ms-content="members" className="flex items-center gap-3">
            <Link href="/account" className="font-bold hover:underline">
              My account
            </Link>
            <a
              data-ms-action="logout"
              className="rounded-lg border px-3 py-2 hover:bg-black/5 cursor-pointer"
            >
              Log out
            </a>
          </div>

          {/* Keep your existing Sign Up CTA (checkout page we’ll wire in Step 2) */}
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