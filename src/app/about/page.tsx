import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      {/* Left: Text */}
      <div className="space-y-6 mt-4">
        <h1 className="text-3xl font-semibold md:text-center">About</h1>

        <p className="indent-8 md:indent-12 leading-7">
          Hi, I’m <strong>Ryan Usprech</strong>, the founder of <strong>Beyond Utilities</strong>. I’m currently a student at
          <strong> Wilfrid Laurier University</strong>, where I initially pursued <strong>Communication Studies</strong> before
          discovering my passion for <strong>Economics</strong>. That switch wasn’t just about changing majors, it was about
          following what truly excites me and understanding how real‑world decisions, opportunities, and choices shape our futures.
        </p>

        <p className="indent-8 md:indent-12 leading-7">
          My journey through different fields of study has given me a unique perspective on the challenges high school students face
          when trying to figure out their post‑secondary paths. I know firsthand how overwhelming it can feel to choose a program, a
          university, or even just the right way to explore your interests. That’s why I started <strong>Beyond Utilities </strong>
          to provide honest, firsthand insight from current university students so others don’t have to navigate these decisions alone.
        </p>

        <p className="indent-8 md:indent-12 leading-7">
          Beyond academics, I’ve always been passionate about <strong>connecting people with opportunities</strong> and creating
          experiences that make complicated decisions simpler. Whether it’s running virtual events, hosting Q&amp;A sessions, or
          sharing my own journey, my goal is to give students and their families the clarity, confidence, and tools they need to make
          informed choices about their future.
        </p>

        <p className="indent-8 md:indent-12 leading-7">
          I’m excited to keep growing <strong>Beyond Utilities</strong> and helping more students across Ontario discover what
          they’re truly passionate about.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="/signup"
            className="rounded-lg px-5 py-3 bg-blue-600 text-white hover:bg-blue-700"
          >
            Join Now
          </Link>
          <div className="flex items-center gap-2">
            <span>Contact us at:</span>
            <a
              className="text-blue-600 underline"
              href="mailto:beyondutilitiescanada@gmail.com"
            >
              beyondutilitiescanada@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Right: Image */}
      <div className="flex justify-center">
        <Image
          src="/ryan.jpg"
          alt="Ryan"
          width={500}
          height={520}
          className="rounded-lg object-cover shadow-sm"
        />
      </div>
    </div>
  );
}