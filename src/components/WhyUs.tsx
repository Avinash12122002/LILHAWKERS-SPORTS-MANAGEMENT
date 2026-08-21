"use client";

import RevealWrapper from "./RevealWrapper";

const reasons = [
  {
    title: "A Ready-to-Implement System",
    desc: "A ready-to-implement system — not a blank slate. Programs, materials and trainer guidelines are already built.",
    icon: "🚀",
  },
  {
    title: "Age-Appropriate Progression",
    desc: "Every stage is designed around what children can and should be developing at that age.",
    icon: "📈",
  },
  {
    title: "Skill-by-Skill Development",
    desc: "Sports are broken into their component skills and built up progressively, not taught all at once.",
    icon: "🎯",
  },
  {
    title: "Evaluation Built In",
    desc: "We measure whether participants are actually developing, not just attending.",
    icon: "📊",
  },
  {
    title: "Continuous Improvement",
    desc: "Programs evolve based on real results, not left unchanged year after year.",
    icon: "🔄",
  },
  {
    title: "Participation-First Philosophy",
    desc: "Our goal is to get more children involved in sport and help them discover what they enjoy, with a pathway toward more advanced training for those who want to go further.",
    icon: "🏆",
  },
];

export default function WhyUs() {
  return (
    <RevealWrapper>
      <section
        id="why-us"
        className="section-padding relative overflow-hidden bg-white border-t border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-10 reveal">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-primary)]">
                Why Choose Us
              </span>
            </div>
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-3 text-slate-900">
              Why Organisations Choose{" "}
              <span className="gradient-text">Lilhawkers</span>
            </h2>
          </div>

          {/* Reasons Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className="reveal glass-card rounded-2xl p-7 group border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-[var(--color-primary)]/40 transition-all duration-300"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform shadow-xs">
                  {reason.icon}
                </div>
                <h3 className="font-[var(--font-heading)] text-lg font-bold text-slate-900 mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RevealWrapper>
  );
}
