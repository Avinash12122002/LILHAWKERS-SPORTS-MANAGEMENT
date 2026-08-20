"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = hero.getBoundingClientRect();
      const x = ((clientX - left) / width) * 100;
      const y = ((clientY - top) / height) * 100;
      hero.style.setProperty("--mouse-x", `${x}%`);
      hero.style.setProperty("--mouse-y", `${y}%`);
    };

    hero.addEventListener("mousemove", handleMouseMove);
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay"
      style={{
        background: `
          radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 30%), rgba(0, 200, 83, 0.12) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(0, 229, 255, 0.08) 0%, transparent 40%),
          radial-gradient(circle at 20% 80%, rgba(0, 200, 83, 0.06) 0%, transparent 40%),
          var(--color-dark)
        `,
      }}
    >
      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[15%] left-[10%] w-72 h-72 rounded-full bg-[var(--color-primary)]/5 blur-3xl animate-float" />
        <div
          className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-[var(--color-gradient-end)]/5 blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-[40%] right-[25%] w-48 h-48 rounded-full bg-[var(--color-primary)]/3 blur-2xl animate-float"
          style={{ animationDelay: "0.8s" }}
        />

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-28 sm:pt-24">
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
          <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
            Structured Sports Development
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="animate-fade-in-up font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6"
          style={{ animationDelay: "0.15s" }}
        >
          Building the{" "}
          <span className="gradient-text">Pathway</span>
          <br />
          for Every Stage of Growth
        </h1>

        {/* Subheading */}
        <p
          className="animate-fade-in-up max-w-3xl mx-auto text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-4"
          style={{ animationDelay: "0.3s" }}
        >
          Lilhawkers designs, delivers and continuously improves structured
          sports development programs — built to take children and young people
          from their very first movements to sport-specific performance
          training.
        </p>

        <p
          className="animate-fade-in-up text-sm sm:text-base text-[var(--color-primary)] font-medium mb-10"
          style={{ animationDelay: "0.35s" }}
        >
          We don&apos;t just coach a sport. We build the pathway.
        </p>

        {/* CTA Buttons */}
        <div
          className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
          style={{ animationDelay: "0.45s" }}
        >
          <Link href="/contact" className="btn-primary text-base px-8 py-4 animate-pulse-glow">
            <span className="flex items-center gap-2 font-semibold">
              BOOK A FREE DEMO SESSION
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </Link>
          <Link
            href="/about"
            className="btn-outline text-base"
            aria-label="Learn more about Lilhawkers sports management and philosophy"
          >
            Explore Our Approach
          </Link>
        </div>

        <p
          className="animate-fade-in-up text-xs sm:text-sm text-[var(--color-text-secondary)]/80 max-w-2xl mx-auto"
          style={{ animationDelay: "0.5s" }}
        >
          For private schools, sports clubs, sports training centres and communities looking to bring a structured, progressive sports program to their participants.
        </p>

        {/* Pathway visual preview */}
        <div
          className="animate-fade-in-up mt-12 mb-20 flex items-center justify-center gap-2 sm:gap-4 flex-wrap"
          style={{ animationDelay: "0.6s" }}
        >
          {["Foundation", "Exposure", "Skill Development", "Sport-Specific"].map(
            (stage, i) => (
              <div key={stage} className="flex items-center gap-2 sm:gap-4">
                <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg glass text-xs sm:text-sm font-medium text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-colors cursor-default">
                  {stage}
                </div>
                {i < 3 && (
                  <svg
                    className="w-4 h-4 text-[var(--color-primary)]/50 shrink-0 hidden sm:block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </div>
            )
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "1s" }}>
        <a href="#about" className="flex flex-col items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors">
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
