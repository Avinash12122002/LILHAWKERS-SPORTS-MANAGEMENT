"use client";

import RevealWrapper from "./RevealWrapper";

const steps = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Design",
    desc: "We determine the activities, sequence, difficulty level, age suitability and skill progression for each program.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Materials & Structure",
    desc: "Every program comes with structured guidelines and materials so it can be delivered consistently.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Trainer Support",
    desc: "We train and support the trainers who deliver our programs on the ground, so every session follows the same structured approach.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Implementation",
    desc: "Programs are implemented through our partner schools, clubs, centres and communities.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Evaluation",
    desc: "We assess whether the program is actually producing development, using structured evaluation indicators.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Improvement",
    desc: "Based on results, activities are added, removed, simplified, made more challenging, or rearranged.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Expansion",
    desc: "Proven programs are extended to reach more participants and more partner organisations.",
  },
];

export default function HowItWorks() {
  return (
    <RevealWrapper>
      <section
        id="how-it-works"
        className="section-padding relative overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse at 30% 50%, rgba(0, 229, 255, 0.05) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 50%, rgba(0, 200, 83, 0.05) 0%, transparent 50%),
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
                How Our Programs Work
              </span>
            </div>
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3">
              Behind Every Program: <br className="hidden sm:inline" />
              <span className="gradient-text">A Complete Delivery System</span>
            </h2>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-[var(--color-text-secondary)]">
              Lilhawkers doesn&apos;t simply send a coach with a lesson plan. We
              build and manage the full program lifecycle.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="reveal glass-card rounded-xl p-6 group"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-gradient-end)]/20 flex items-center justify-center text-[var(--color-primary)] shrink-0 group-hover:from-[var(--color-primary)]/30 group-hover:to-[var(--color-gradient-end)]/30 transition-all">
                    {step.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold text-[var(--color-primary)]/60 uppercase tracking-wider">
                        Step {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-[var(--font-heading)] text-base font-semibold text-white mb-1.5 group-hover:text-[var(--color-primary)] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cycle Visual */}
          <div className="reveal">
            <div className="glass-card rounded-2xl p-6 sm:p-8 text-center">
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                The continuous improvement cycle:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {[
                  "Program",
                  "Delivery",
                  "Measurement",
                  "Evaluation",
                  "Modification",
                  "Improved Program",
                ].map((label, i) => (
                  <div key={label} className="flex items-center gap-2 sm:gap-3">
                    <span className="px-3 py-1.5 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs sm:text-sm font-medium border border-[var(--color-primary)]/20 whitespace-nowrap">
                      {label}
                    </span>
                    {i < 5 && (
                      <svg
                        className="w-4 h-4 text-[var(--color-primary)]/40 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] mt-4">
                Our programs keep getting{" "}
                <span className="text-[var(--color-primary)] font-medium">
                  better
                </span>
                , not just repeated.
              </p>
            </div>
          </div>
        </div>
      </section>
    </RevealWrapper>
  );
}
