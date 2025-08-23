import Link from 'next/link';
import Reveal from '../components/Reveal';
import Image from 'next/image';

const CtaPrimary =
  "rounded-lg px-5 py-3 bg-blue-600 text-white hover:bg-blue-700";
const CtaSecondary =
  "rounded-lg px-5 py-3 border hover:bg-black/5";

const logos = [
  { src: "/logos/uwaterloo.png", alt: "Waterloo" },
  { src: "/logos/queens.png", alt: "Queen's" },
  { src: "/logos/laurier.png", alt: "Laurier" },
  { src: "/logos/western.png", alt: "Western" },
  { src: "/logos/guelph.png", alt: "Guelph" },
];

export default function Home() {
  return (
    <div className="space-y-20">
      {/* ---------------- HERO ---------------- */}
<section className="flex flex-col items-center text-center gap-2 pt-6 pb-2">
  <div className="bg-blue-50 rounded-xl px-4 py-0 max-w-4xl mx-auto shadow-sm">
    <h1 className="text-3xl md:text-5xl font-bold leading-snug">
      Helping high school students{" "}
      <span className="text-blue-600">choose the right path</span>{" "}
      after graduation
    </h1>
  </div>

  <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mt-2">
    Get guidance and clarity exploring post-secondary options, from the comfort of your home.
    Join a learning experience that will <em>actually</em> prepare you for university.
  </p>

  <div className="flex flex-wrap gap-3 justify-center mt-3">
    <Link href="/signup" className={CtaPrimary}>Join now</Link>
    <Link href="/schedule" className={CtaSecondary}>View schedule</Link>
  </div>
</section>
      {/* ---------------- REAL ADVICE + LOGOS ---------------- */}
      <section className="space-y-6">
      <Reveal>
        <div className="space-y-2 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Real advice from real university students.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear honest experiences from students across Ontario’s major universities. No scripts. No marketing. Just the truth.
          </p>
        </div>
      </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {logos.map((logo) => (
              <div
                key={logo.src}
                className="h-32 rounded-md border bg-[linear-gradient(135deg,rgba(0,0,0,0.04),rgba(0,0,0,0.02))] flex items-center justify-center p-2"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={80}
                  className="object-contain max-h-26 w-auto"
                />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-wrap gap-3">
            <Link href="/signup" className={CtaPrimary}>Join now</Link>
            <Link href="/schedule" className={CtaSecondary}>See upcoming events</Link>
          </div>
        </Reveal>
      </section>

      {/* ---------------- WHY BU MATTERS / TESTIMONIALS (flashier) ---------------- */}
      <section className="space-y-8">
      <Reveal>
        <div className="mx-auto max-w-6xl px-2 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Why Beyond Utilities is Important
          </h2>
        </div>
      </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Candid, student-led panels across majors & universities",
              "Clarity on programs, workloads, campus life, and outcomes",
              "Low‑pressure format with Q&A and honest discussion",
              "Recordings for registrants so you can revisit anytime",
            ].map((text, i) => (
              <div
                key={i}
                className="
                  group overflow-hidden rounded-2xl border bg-white/80 backdrop-blur
                  shadow-sm transition-all
                  hover:shadow-lg hover:-translate-y-0.5
                "
              >
                {/* gradient accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500" />
                <div className="p-6">
                  <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

      {/* ---------------- VIDEO SECTION ---------------- */}
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <section className="space-y-4 w-full max-w-3xl">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-semibold">
            Beyond Utilities: Learn More About the Program
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This will be a short video from Ryan explaining the program.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="aspect-video w-full rounded-xl border overflow-hidden bg-black/5">
            <video
              className="w-full h-full object-cover"
              controls
              preload="metadata"
            >
              <source src="/videos/beyond-utilities.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/signup" className={CtaPrimary}>Join now</Link>
            <Link href="/schedule" className={CtaSecondary}>View schedule</Link>
          </div>
        </Reveal>
      </section>
    </div>

        <Reveal delay={0.2}>
          <div className="mx-auto max-w-6xl space-y-4">
            <div className="rounded-2xl border bg-white/80 backdrop-blur p-6 shadow-sm">
              <p className="text-sm text-muted-foreground">
                Testimonials from people: <em>TBA</em>
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/signup" className={CtaPrimary}>Join now</Link>
              <Link href="/schedule" className={CtaSecondary}>See upcoming events</Link>
            </div>
          </div>
        </Reveal>
      </section>

{/* ---------------- FOOTER ---------------- */}
  <footer className="border-t pt-8 mt-12">
        <div className="grid sm:grid-cols-2 gap-6 text-sm text-slate-600">
          <div className="space-y-1">
            <h3 className="font-semibold text-slate-800">Stay in the loop</h3>
            <p>Check the latest schedule and register for sessions.</p>
            <Link href="/schedule" className="underline text-blue-600">
              View schedule →
            </Link>
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold text-slate-800">Questions?</h3>
            <p>
              Join our live Q&amp;A or email us at{" "}
              <a
                className="underline text-blue-600"
                href="mailto:beyondutilitiescanada@gmail.com"
              >
                beyondutilitiescanada@gmail.com
              </a>
              .
            </p>
            <a
              href="https://calendar.google.com/calendar/u/0/share?slt=1AQOvs_UF05ewFPkeBbuT_DOufIlw7kZ6dHT55I8VMedt6_h0XyT4vF4WiS4hiIdhdocAy0CXJuLhTA&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              Join the live Q&amp;A →
            </a>
          </div>
        </div>

        <div className="mt-6 text-xs text-slate-400 text-center">
          © {new Date().getFullYear()} Beyond Utilities. All rights reserved.
        </div>
  </footer>
</div>
  );
}