"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SignUp() {
  // --- Smooth scroll helpers ---
  const [showSkip, setShowSkip] = useState(true);

  function scrollToPayment() {
    const el = document.getElementById("tallyBox");
    if (!el) return;

    // First, align the Tally box to the top of the viewport
    el.scrollIntoView({ behavior: "smooth", block: "start" });

    // Then nudge a bit further down so the payment section is more in view
    setTimeout(() => {
      window.scrollBy({ top: 150, behavior: "smooth" }); // tweak 150 to taste
    }, 400); // small delay so the first smooth scroll finishes
  }

  // Auto-scroll if user lands with /signup#pay or /signup?pay=1
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.location.hash === "#pay" || window.location.search.includes("pay=1")) {
      // slight delay so layout is ready before scrolling
      setTimeout(() => scrollToPayment(), 120);
    }

    // Hide the skip pill when the form area is in view
    const onScroll = () => {
      const tally = document.getElementById("tallyBox");
      if (!tally) return;
      const rect = tally.getBoundingClientRect();
      // When the top of the tally box enters the viewport, hide the pill
      setShowSkip(rect.top > window.innerHeight * 0.55);
    };

    onScroll(); // run once on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="space-y-10 pb-12">
      {/* ---------- HEADER ---------- */}
      <section className="text-center px-4 pt-6">
        <div className="bg-blue-50 rounded-xl px-4 py-2 max-w-4xl mx-auto shadow-sm">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug">
            Take the Next Step towards{" "}
            <span className="text-blue-600"> a better post-secondary experience</span>
          </h1>
        </div>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mt-3">
          Join with the <strong>Launch Special</strong> and get access to all live sessions,
          invites, and recordings.
        </p>
      </section>

      {/* ---------- HOW IT WORKS + SIGNUP ---------- */}
      <section className="px-2">
        <div className="relative mx-auto max-w-6xl rounded-3xl overflow-hidden border bg-white/80 backdrop-blur shadow-sm">
          {/* Accent top bar */}
          <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500" />

          <div className="grid gap-8 p-6 md:p-10 md:grid-cols-5">
            {/* LEFT: expanded info + Launch Special card pinned to bottom */}
            <div className="md:col-span-2">
              <div className="flex h-full flex-col">
                {/* Expanded concise content */}
                <div className="space-y-5 leading-relaxed">
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    How it works
                  </h2>

                  <p className="text-slate-700">
                    Beyond Utilities makes it simple to join live, online sessions with current
                    university students. You’ll get clear invites, reminders, and access to
                    recordings — all from home.
                  </p>

                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm mb-1">Before each event</h3>
                    <ul className="list-disc pl-5 text-slate-700 space-y-1 text-sm">
                      <li>Invite links emailed <strong>1 day before</strong></li>
                      <li>Reminders sent on the morning of the event</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm mb-1">After each event</h3>
                    <ul className="list-disc pl-5 text-slate-700 space-y-1 text-sm">
                      <li>Full recording access — revisit anytime</li>
                      <li>Follow-up notes and resources when applicable</li>
                    </ul>
                  </div>

                  <Link
                    href="/schedule"
                    className="inline-block underline text-blue-600 text-sm"
                  >
                    View full schedule →
                  </Link>
                </div>

                {/* Launch Special compact card — bottom-left */}
                <div className="mt-auto pt-6">
                  <div className="relative overflow-hidden rounded-2xl border bg-white/90 backdrop-blur shadow-sm max-w-sm">
                    {/* mini gradient bar */}
                    <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500" />
                    <div className="p-5 space-y-4">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold text-slate-900">Launch Special</h3>
                        <p className="text-sm text-slate-600">
                          Access to all live events, Q&amp;A, and recordings.
                        </p>
                      </div>

                      {/* price */}
                      <div className="rounded-xl border bg-white p-4 text-center shadow-sm">
                        <div className="text-3xl font-bold text-slate-900">
                          $50 <span className="text-base font-medium text-slate-500">CAD</span>
                        </div>
                        <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                          <span>Launch pricing</span>
                          <span>•</span>
                          <span>Limited time</span>
                        </div>
                      </div>

                      {/* quick points */}
                      <ul className="text-sm text-slate-700 space-y-1">
                        <li>• 27 live hours</li>
                        <li>• Email invites + calendar links</li>
                        <li>• Recording access</li>
                      </ul>

                      <p className="text-[11px] leading-4 text-slate-500">
                        🔒 Secure payments handled by Tally (SSL encrypted)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Tally form — still the focus */}
            <div className="md:col-span-3">
              <div
                id="tallyBox"
                className="h-[80vh] md:h-[84vh] rounded-2xl overflow-hidden border bg-white"
              >
                <iframe
                  src="https://tally.so/r/w292Oj?transparentBackground=1&hideTitle=1"
                  className="w-full h-full"
                  frameBorder="0"
                  title="Registration"
                  allow="payment *; clipboard-write *; fullscreen *"
                />
              </div>
              <p className="text-xs text-slate-500 mt-3 text-center">
                Having trouble? Email{" "}
                <a
                  className="underline text-blue-600"
                  href="mailto:beyondutilitiescanada@gmail.com"
                >
                  beyondutilitiescanada@gmail.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating "Skip to payment" pill — appears at top, hides when tally is in view */}
      {showSkip && (
        <button
          onClick={() => scrollToPayment()}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 text-white px-5 py-2 shadow-lg hover:bg-blue-700 transition"
        >
          Skip to payment ↓
        </button>
      )}
    </main>
  );
}
