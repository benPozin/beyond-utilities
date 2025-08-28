"use client";

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type Logo = { src: string; alt: string };

export default function UniScroller({
  logos,
  speedSec = 25,
  pauseOnHover = true,
}: {
  logos: Logo[];
  speedSec?: number;
  pauseOnHover?: boolean;
}) {
  const [paused, setPaused] = useState(false);
  const loopLogos = useMemo(() => [...logos, ...logos], [logos]);

  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      {...(pauseOnHover && { onMouseEnter: () => setPaused(true), onMouseLeave: () => setPaused(false) })}
      aria-label="Ontario universities"
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent" />

      {/* Scrolling track */}
      <div
        className="track flex w-max items-center gap-3 md:gap-4"
        style={{ animationPlayState: paused || reduced ? "paused" : "running", animationDuration: `${speedSec}s` }}
      >
        {loopLogos.map((logo, i) => (
          <Link
            key={`${logo.src}-${i}`}
            href="/schedule"
            className="card group shrink-0 rounded-lg border border-slate-200 bg-white px-4 py-3 transition-shadow cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
          >
            <div className="relative h-24 w-48 md:h-28 md:w-56">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="224px"
                className="object-contain transition-transform will-change-transform group-hover:scale-[1.08]"
                priority={i < 6}
              />
            </div>
          </Link>
        ))}
      </div>

      {/* Styles */}
      <style jsx>{`
        .track {
          animation-name: marquee-x;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes marquee-x {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .card:hover {
          animation: hover-bounce 420ms ease-out;
          box-shadow: 0 12px 28px -14px rgba(0, 0, 0, 0.2);
        }
        @keyframes hover-bounce {
          0% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
          70% {
            transform: translateY(-3px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}