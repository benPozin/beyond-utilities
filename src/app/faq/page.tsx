import Link from "next/link";

export default function Page() {
  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-semibold">
          Your Questions, Answered Live
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Got questions about our events, schedules, or how Beyond Utilities works?
          Join our live Google Meet and get answers directly from the organizer.
        </p>
      </header>

      <div className="rounded-xl border p-6 space-y-4">
        <div className="space-y-1">
          <p className="text-sm uppercase tracking-wide text-muted-foreground">Next session</p>
          <p className="text-lg font-medium">Thursday, September 18 @ 7:00 PM EST</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {/* Primary action — reuse home page button style */}
          <a
            href="https://calendar.google.com/calendar/u/0/share?slt=1AQOvs_UF05ewFPkeBbuT_DOufIlw7kZ6dHT55I8VMedt6_h0XyT4vF4WiS4hiIdhdocAy0CXJuLhTA&pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-5 py-3 bg-blue-600 text-white hover:bg-blue-700"
          >
            Sign Up for the Live Q&amp;A
          </a>
          {/* Optional: link to /signup as a secondary path */}
          <Link
            href="/signup"
            className="rounded-lg px-5 py-3 border hover:bg-black/5"
          >
            Register on our Site
          </Link>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Can’t Make It? Send Us Your Questions</h2>
        <p className="text-muted-foreground">
          We’ll make sure you get answers, just send your questions to{" "}
          <a
            className="text-blue-600 underline"
            href="mailto:beyondutilitiescanada@gmail.com?subject=QUESTIONS%20-%20Q%26A"
          >
            beyondutilitiescanada@gmail.com
          </a>{" "}
          with the subject line <strong>QUESTIONS - Q&amp;A</strong>.
        </p>
      </div>
    </section>
  );
}