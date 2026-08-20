"use client";

import RevealWrapper from "./RevealWrapper";

export default function Approach() {
  return (
    <RevealWrapper>
      <section
        id="approach"
        className="section-padding relative overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse at 50% 0%, rgba(0, 200, 83, 0.06) 0%, transparent 60%),
            var(--color-dark)
          `,
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-10 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gradient-end)]" />
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                Our Approach
              </span>
            </div>
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              A Structured{" "}
              <span className="gradient-text">Pathway,</span>
              <br />
              Not Just Activities
            </h2>
            <p className="max-w-3xl mx-auto text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed mb-3">
              Every Lilhawkers program starts from a simple question: what should a child of
              this age actually be developing, in what sequence, at what level of
              difficulty — and how do we know it&apos;s working?
            </p>
            <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[var(--color-text-secondary)]/80">
              That question shapes everything we build. Instead of generic sport sessions, our programs are structured around a clear progression:
            </p>
          </div>

          {/* Progression Flow */}
          <div className="reveal">
            <div className="glass-card rounded-2xl p-6 sm:p-8 mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-0">
                {[
                  {
                    stage: "01",
                    title: "Foundation",
                    desc: "Physical fundamentals, movement & balance",
                    color: "from-emerald-400 to-emerald-600",
                  },
                  {
                    stage: "02",
                    title: "Exposure",
                    desc: "Introduction to multiple sporting activities",
                    color: "from-teal-400 to-teal-600",
                  },
                  {
                    stage: "03",
                    title: "Skill Development",
                    desc: "Building fundamental sporting skills progressively",
                    color: "from-cyan-400 to-cyan-600",
                  },
                  {
                    stage: "04",
                    title: "Sport-Specific",
                    desc: "Advanced, structured sport-specific training",
                    color: "from-sky-400 to-sky-600",
                  },
                ].map((item, i) => (
                  <div key={item.stage} className="relative group">
                    <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-white/[0.03] transition-all duration-300">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-lg font-bold mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                      >
                        {item.stage}
                      </div>
                      <h3 className="font-[var(--font-heading)] text-base font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Arrow connector */}
                    {i < 3 && (
                      <div className="hidden lg:flex absolute top-1/2 -right-2 -translate-y-1/2 z-10">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-[var(--color-primary)]/40"
                        >
                          <path
                            d="M9 5l7 7-7 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Key Principle */}
          <div className="reveal text-center">
            <div className="glass-card inline-block rounded-xl px-8 py-4">
              <p className="text-sm text-[var(--color-text-secondary)]">
                <span className="text-[var(--color-primary)] font-semibold">
                  This progression runs across three stages
                </span>
                , matched to age and developmental need.
              </p>
            </div>
          </div>
        </div>
      </section>
    </RevealWrapper>
  );
}
