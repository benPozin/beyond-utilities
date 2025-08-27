// src/app/signup/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    Memberstack?: { onReady: () => Promise<any> };
  }
}

const PRICE_ID =
  process.env.NEXT_PUBLIC_MS_PRICE_ID ?? "prc_early-bird-bundle-qt6o0ozd";

export default function SignupPage() {
  const [msReady, setMsReady] = useState(false);
  const priceLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // 1) Set the colon-keyed attribute after mount (JSX won't allow it)
    priceLinkRef.current?.setAttribute("data-ms-price:add", PRICE_ID);

    // 2) Wait for Memberstack to be ready (works on localhost)
    let t: any;
    const tryReady = () => {
      const ms = window.Memberstack;
      if (ms?.onReady) {
        ms.onReady().then(() => setMsReady(true));
        return true;
      }
      return false;
    };
    if (!tryReady()) t = setInterval(() => tryReady() && clearInterval(t), 100);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="mx-auto max-w-3xl space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Join Beyond Utilities</h1>
        <p className="text-muted-foreground">Create an account and check out.</p>
      </header>

      {/* Logged OUT */}
      <div data-ms-content="!members" className="space-y-6">
        <div className="space-y-3">
          {/* Use the canonical modal trigger */}
          <a
            href="#"
            data-ms-modal="auth"
            data-ms-tab="signup"
            aria-disabled={!msReady}
            className="inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 disabled:opacity-60"
          >
            Create account
          </a>
          <p className="text-sm text-muted-foreground">
            Already have one?{" "}
            <a
              href="#"
              data-ms-modal="auth"
              data-ms-tab="login"
              className="underline"
            >
              Sign in
            </a>
          </p>
        </div>

        {/* Checkout */}
        <div className="rounded-lg border p-4">
          <h2 className="text-lg font-medium mb-2">Early Bird Bundle</h2>
          <a
            href="#"
            ref={priceLinkRef}
            className="inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
          >
            Buy Now
          </a>
          <p className="mt-2 text-xs text-muted-foreground">
            This opens Stripe Checkout via Memberstack.
          </p>
        </div>
      </div>

      {/* Logged IN */}
      <div data-ms-content="members" className="space-y-4 rounded-lg border p-4">
        <p>
          Signed in as <span data-ms-member="email"></span>.
        </p>
        <a
          href="#"
          data-ms-action="customer-portal"
          className="inline-flex rounded-lg border px-4 py-2 hover:bg-black/5"
        >
          Manage billing
        </a>
        <div>
          <button type="button" data-ms-action="logout" className="underline">
            Log out
          </button>
        </div>
      </div>
    </main>
  );
}