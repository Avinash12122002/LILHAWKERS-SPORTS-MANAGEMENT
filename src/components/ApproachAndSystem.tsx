"use client";

import { useState } from "react";
import RevealWrapper from "./RevealWrapper";

const progressionStages = [
  {
    stage: "01",
    title: "Foundation",
    desc: "Physical fundamentals, movement coordination & balance",
    color: "from-emerald-400 to-emerald-600",
  },
  {
    stage: "02",
    title: "Exposure",
    desc: "Multi-sport exploration without premature specialization",
    color: "from-teal-400 to-teal-600",
  },
  {
    stage: "03",
    title: "Skill Development",
    desc: "Building fundamental sporting techniques progressively",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    stage: "04",
    title: "Sport-Specific",
    desc: "Advanced tactical training & competitive pathways",
    color: "from-sky-400 to-sky-600",
  },
];

const deliverySteps = [
  {
    step: "01",
    title: "Design",
    subtitle: "Curriculum Architecture",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    desc: "We determine the exact activities, sequence, difficulty level, and skill progression calibrated for every age group.",
  },
  {
    step: "02",
    title: "Materials & Structure",
    subtitle: "Complete Toolkits",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    desc: "Every program is supplied with standardized equipment guidelines, session manuals, and drill documentation.",
  },
  {
    step: "03",
    title: "Trainer Support",
    subtitle: "Coach Enablement",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    desc: "We train and mentor coaches on the ground so every session is delivered with high consistency and scientific fidelity.",
  },
  {
    step: "04",
    title: "Implementation",
    subtitle: "Partner Delivery",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    desc: "Turnkey operational delivery directly through partner schools, clubs, sports centres, and residential townships.",
  },
  {
    step: "05",
    title: "Evaluation",
    subtitle: "Data & Metrics",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    desc: "We assess tangible physical improvements, motor coordination metrics, and body composition changes.",
  },
  {
    step: "06",
    title: "Continuous Refinement",
    subtitle: "Adaptive Feedback",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    desc: "Based on results, pathways are simplified, intensified, or rearranged to match participant growth curves.",
  },
  {
    step: "07",
    title: "Expansion",
    subtitle: "Scaling Impact",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    desc: "Proven, data-backed models are seamlessly scaled across additional cohorts, age brackets, and partner branches.",
  },
];

export default function ApproachAndSystem() {
  const [activeTab, setActiveTab] = useState<"philosophy" | "system">("philosophy");

  return (
    <RevealWrapper>
      <section
        id="approach"
        className="section-padding relative overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse at 50% 0%, rgba(0, 200, 83, 0.07) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 60%, rgba(0, 229, 255, 0.05) 0%, transparent 50%),
            var(--color-dark)
          `,
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10 space-y-16">
          {/* Unified Section Header */}
          <div className="text-center max-w-3xl mx-auto reveal">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--color-gradient-end)] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-gradient-end)]">
                Our Approach & Delivery System
              </span>
            </div>

            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
              A Structured <span className="gradient-text">Pathway.</span> <br />
              A Turnkey <span className="gradient-text">Operating System.</span>
            </h2>

            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
              Every Lilhawkers program combines scientific progression with an institutional delivery framework — taking participants seamlessly from foundational movement to lifelong sports mastery.
            </p>

            {/* Interactive Mode Toggle */}
            <div className="mt-8 inline-flex p-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setActiveTab("philosophy")}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === "philosophy"
                    ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-gradient-mid)] text-black shadow-lg"
                    : "text-[var(--color-text-secondary)] hover:text-white"
                }`}
              >
                1. Scientific Progression Model
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("system")}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === "system"
                    ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-gradient-mid)] text-black shadow-lg"
                    : "text-[var(--color-text-secondary)] hover:text-white"
                }`}
              >
                2. Complete 7-Step Delivery System
              </button>
            </div>
          </div>

          {/* View 1: Scientific Progression Flow */}
          <div className={`space-y-10 transition-opacity duration-300 ${activeTab === "philosophy" ? "block opacity-100" : "hidden opacity-0"}`}>
            <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
              <div className="max-w-2xl mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                  Progression Continuum
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-[var(--font-heading)] mt-1">
                  What to develop, in what sequence, and at what difficulty
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                  Instead of generic sport sessions or premature single-sport drills, participants follow a structured four-stage physical development pipeline.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {progressionStages.map((item, i) => (
                  <div
                    key={item.stage}
                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[var(--color-primary)]/40 hover:bg-white/[0.04] transition-all duration-300 relative group flex flex-col justify-between"
                  >
                    <div>
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-base font-bold mb-5 shadow-lg group-hover:scale-110 transition-transform`}
                      >
                        {item.stage}
                      </div>
                      <h4 className="font-[var(--font-heading)] text-lg font-bold text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[var(--color-text-secondary)]">
                      <span>Phase {i + 1} of 4</span>
                      <span className="text-[var(--color-primary)] font-semibold">Structured →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* View 2: Complete 7-Step Delivery System */}
          <div className={`space-y-10 transition-opacity duration-300 ${activeTab === "system" ? "block opacity-100" : "hidden opacity-0"}`}>
            <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-gradient-end)]">
                    Turnkey Operations
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-[var(--font-heading)] mt-1">
                    Behind Every Program: A Complete Delivery System
                  </h3>
                </div>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 text-[var(--color-primary)] border border-[var(--color-primary)]/20">
                  Institutional Standard
                </span>
              </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {deliverySteps.map((step) => (
                    <div
                      key={step.step}
                      className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[var(--color-primary)]/40 hover:bg-white/[0.04] transition-all duration-300 group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-[var(--color-primary)] flex items-center justify-center group-hover:scale-110 transition-transform">
                            {step.icon}
                          </div>
                          <span className="text-xs font-mono font-bold text-[var(--color-text-secondary)]/60">
                            STEP {step.step}
                          </span>
                        </div>

                        <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-primary)] block">
                          {step.subtitle}
                        </span>
                        <h4 className="text-base font-bold text-white font-[var(--font-heading)] mt-0.5 mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                          {step.title}
                        </h4>
                        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>
      </section>
    </RevealWrapper>
  );
}
