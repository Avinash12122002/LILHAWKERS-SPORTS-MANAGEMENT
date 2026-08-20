"use client";

import RevealWrapper from "./RevealWrapper";

const stages = [
  {
    number: "01",
    title: "Foundation",
    subtitle: "Pre-Primary",
    tagline: "Building the physical foundations first",
    gradient: "from-emerald-400 to-green-500",
    bgGlow: "rgba(16, 185, 129, 0.08)",
    skills: [
      "Movement and balance",
      "Coordination and agility",
      "Body control and confidence",
      "Basic movement patterns",
      "Hand-eye and foot-eye coordination",
    ],
  },
  {
    number: "02",
    title: "Development",
    subtitle: "Primary",
    tagline: "Exposure, participation and skill-building",
    gradient: "from-teal-400 to-cyan-500",
    bgGlow: "rgba(20, 184, 166, 0.08)",
    skills: [
      "Exposure to multiple sporting activities",
      "Building fundamental sporting skills, one at a time",
      "Discovering which sports children enjoy and show ability in",
      "Encouraging participation and sporting interest — not early specialisation",
    ],
  },
  {
    number: "03",
    title: "Performance",
    subtitle: "Secondary",
    tagline: "Structured, sport-specific development",
    gradient: "from-cyan-400 to-sky-500",
    bgGlow: "rgba(6, 182, 212, 0.08)",
    skills: [
      "Sport-specific training",
      "Advanced skill development and structured progression",
      "Performance-related development",
      "Preparation for more serious sporting participation",
    ],
  },
];

export default function Stages() {
  return (
    <RevealWrapper>
      <section id="stages" className="section-padding relative overflow-hidden">
        {/* Background */}
        <div className="absolute left-0 top-0 w-[400px] h-[400px] rounded-full bg-[var(--color-gradient-end)]/3 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-10 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                Three-Stage Program Model
              </span>
            </div>
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-3">
              One Pathway.{" "}
              <span className="gradient-text">Three Stages</span> of Growth.
            </h2>
            <p className="max-w-xl mx-auto text-sm sm:text-base text-[var(--color-text-secondary)]">
              Each stage is designed around what children can and should be
              developing at that age.
            </p>
          </div>

          {/* Stage Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {stages.map((stage, i) => (
              <div
                key={stage.number}
                className="reveal stage-card glass-card rounded-2xl p-8 group"
                style={{
                  animationDelay: `${i * 0.15}s`,
                  background: `radial-gradient(ellipse at 50% 0%, ${stage.bgGlow}, transparent 70%), rgba(17, 17, 17, 0.8)`,
                }}
              >
                {/* Stage number & badge */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`text-5xl font-[var(--font-heading)] font-black bg-gradient-to-br ${stage.gradient} bg-clip-text text-transparent opacity-60 group-hover:opacity-100 transition-opacity`}
                  >
                    {stage.number}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-[var(--color-text-secondary)] border border-white/10">
                    {stage.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-[var(--font-heading)] text-2xl font-bold text-white mb-2">
                  Stage {stage.number}: {stage.title}
                </h3>
                <p className="text-sm text-[var(--color-primary)] font-medium mb-6">
                  {stage.tagline}
                </p>

                {/* Skills List */}
                <ul className="space-y-3">
                  {stage.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-3 group/item">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0 group-hover/item:scale-150 transition-transform" />
                      <span className="text-sm text-[var(--color-text-secondary)] leading-relaxed group-hover/item:text-white transition-colors">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RevealWrapper>
  );
}
