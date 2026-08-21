"use client";

import Link from "next/link";
import RevealWrapper from "./RevealWrapper";

const sixStages = [
  {
    number: "01",
    title: "Foundation",
    subtitle: "Ages 3 – 6 Years",
    audience: "Early Childhood",
    tagline: "Movement balance, coordination & basic motor control",
    gradient: "from-emerald-500 to-green-600",
    bgGlow: "rgba(5, 150, 105, 0.05)",
    skills: [
      "Movement and dynamic balance",
      "Coordination, dodging & agility",
      "Body control and spatial confidence",
      "Hand-eye and foot-eye tracking",
    ],
  },
  {
    number: "02",
    title: "Development",
    subtitle: "Ages 7 – 12 Years",
    audience: "Growing Kids",
    tagline: "Exposure, multi-sport agility & fundamental skill-building",
    gradient: "from-teal-500 to-cyan-600",
    bgGlow: "rgba(13, 148, 136, 0.05)",
    skills: [
      "Multi-sport rotational exposure",
      "Building fundamental sport skills",
      "Discovering natural athletic affinities",
      "Teamwork, fair play & tactical basics",
    ],
  },
  {
    number: "03",
    title: "Performance",
    subtitle: "Ages 13 – 20 Years",
    audience: "Teens & Athletes",
    tagline: "Structured sport-specific conditioning & match excellence",
    gradient: "from-cyan-600 to-sky-700",
    bgGlow: "rgba(2, 132, 199, 0.05)",
    skills: [
      "Sport-specific technical training",
      "Strength, speed & plyometric power",
      "Game-reading & tactical strategy",
      "Competitive match representation",
    ],
  },
  {
    number: "04",
    title: "Professional Mastery & Conditioning",
    subtitle: "Ages 20 – 35 Years",
    audience: "Young Adults",
    tagline: "High-intensity functional fitness & corporate/recreational leagues",
    gradient: "from-blue-600 to-indigo-600",
    bgGlow: "rgba(37, 99, 235, 0.05)",
    skills: [
      "Functional metabolic conditioning",
      "Adult competitive leagues (Badminton, Football)",
      "Core stability & rotational strength",
      "Active workplace stress reduction",
    ],
  },
  {
    number: "05",
    title: "Longevity & Mobility",
    subtitle: "Ages 35 – 60 Years",
    audience: "Middle-Aged Adults",
    tagline: "Joint preservation, flexibility & low-impact competitive sports",
    gradient: "from-amber-500 to-orange-600",
    bgGlow: "rgba(217, 119, 6, 0.05)",
    skills: [
      "Joint preservation & range of motion",
      "Low-impact sports (Pickleball, Masters Swimming)",
      "Preventing sarcopenia & bone loss",
      "Functional posture & lower back health",
    ],
  },
  {
    number: "06",
    title: "Vitality & Wellness",
    subtitle: "Ages 60+ Years",
    audience: "Seniors & Golden Age",
    tagline: "Fall prevention, posture restoration & community sports",
    gradient: "from-rose-500 to-pink-600",
    bgGlow: "rgba(225, 29, 72, 0.05)",
    skills: [
      "Vestibular balance & fall prevention",
      "Gentle resistance & gait enhancement",
      "Social recreational lawn games",
      "Cognitive-motor coordination drills",
    ],
  },
];

export default function Stages() {
  return (
    <RevealWrapper>
      <section id="stages" className="section-padding relative overflow-hidden bg-white">
        {/* Background */}
        <div className="absolute left-0 top-0 w-[400px] h-[400px] rounded-full bg-[var(--color-primary)]/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto reveal">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-primary)]">
                Six-Stage Lifespan Model
              </span>
            </div>
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-3 text-slate-900">
              One Structured Pathway. <br />
              <span className="gradient-text">Six Stages</span> of Lifelong Growth.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Every stage is scientifically designed around what participants should be developing at that specific age and physical maturity level.
            </p>
          </div>

          {/* 6 Stage Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sixStages.map((stage) => (
              <div
                key={stage.number}
                className="reveal stage-card glass-card rounded-2xl p-7 group flex flex-col justify-between border border-slate-200 shadow-sm hover:shadow-xl hover:border-[var(--color-primary)]/40 transition-all"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${stage.bgGlow}, transparent 70%), #ffffff`,
                }}
              >
                <div>
                  {/* Stage number & badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-4xl font-[var(--font-heading)] font-black bg-gradient-to-br ${stage.gradient} bg-clip-text text-transparent`}
                    >
                      {stage.number}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                      {stage.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <span className="text-[11px] uppercase tracking-wider text-[var(--color-primary)] font-bold block mb-1">
                    {stage.audience}
                  </span>
                  <h3 className="font-[var(--font-heading)] text-xl font-bold text-slate-900 mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    Stage {stage.number}: {stage.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium mb-5 leading-relaxed">
                    {stage.tagline}
                  </p>

                  {/* Skills List */}
                  <ul className="space-y-2 text-xs text-slate-600">
                    {stage.skills.map((skill) => (
                      <li key={skill} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0 mt-1" />
                        <span className="leading-snug">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 text-[11px] font-medium">Adaptable Body Protocol</span>
                  <Link
                    href="/programs"
                    className="text-[var(--color-primary)] font-bold hover:underline flex items-center gap-1"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout to Programs Interactive Engine */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200 text-center reveal flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md bg-emerald-50/40">
            <div className="text-left">
              <h3 className="text-lg font-bold text-slate-900 font-[var(--font-heading)]">
                Dynamic Body Somatotype &amp; Physical Assessment Engine
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Explore how sports managers adapt drills for overweight, lean, joint-sensitive, and athletic participants across all stages.
              </p>
            </div>
            <Link href="/programs" className="btn-primary shrink-0">
              <span>Launch Adaptive Evaluator →</span>
            </Link>
          </div>
        </div>
      </section>
    </RevealWrapper>
  );
}
