import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sports Programs & 3-Stage Pathway | Lilhawkers",
  description: "Explore the Lilhawkers 3-Stage Sports Development Model: Foundation (Pre-Primary), Development (Primary), and Performance (Secondary).",
};

const stages = [
  {
    number: "01",
    name: "Foundation",
    age: "Pre-Primary",
    badgeColor: "text-[var(--color-primary)] border-[var(--color-primary)]/30 bg-[var(--color-primary)]/10",
    description: "Developing fundamental movement competence and physical confidence through joyful, structured play.",
    focusAreas: [
      "Movement Fundamentals",
      "Balance & Spatial Awareness",
      "Body Control & Agility",
      "Hand-Eye Coordination",
      "Foot-Eye Coordination",
      "Confidence & Social Engagement",
    ],
    outcomes: "Children develop robust neuromuscular coordination and a positive early relationship with physical activity.",
  },
  {
    number: "02",
    name: "Development",
    age: "Primary",
    badgeColor: "text-[var(--color-gradient-mid)] border-[var(--color-gradient-mid)]/30 bg-[var(--color-gradient-mid)]/10",
    description: "Multi-sport exploration and fundamental skill acquisition while avoiding premature single-sport specialisation.",
    focusAreas: [
      "Multi-Sport Exploration",
      "Fundamental Sport Skills (Passing, Catching, Striking)",
      "Discovering Personal Interests & Abilities",
      "Broad Participation & Team Play",
      "Rules & Tactical Basics",
      "Active Injury Prevention Habits",
    ],
    outcomes: "Participants discover their natural athletic affinities while building well-rounded athletic foundations.",
  },
  {
    number: "03",
    name: "Performance",
    age: "Secondary",
    badgeColor: "text-[var(--color-gradient-end)] border-[var(--color-gradient-end)]/30 bg-[var(--color-gradient-end)]/10",
    description: "Sport-specific tactical training, advanced skill development, and structured performance progression.",
    focusAreas: [
      "Sport-Specific Technical Coaching",
      "Advanced Tactical & Strategic Understanding",
      "Performance Conditioning & Agility",
      "Competitive Mindset & Resilience",
      "Structured Progress Tracking",
      "Pathway toward Competitive / Serious Sports",
    ],
    outcomes: "Athletes are prepared for competitive inter-school, club, and higher-tier sporting representation.",
  },
];

const pathwaySteps = [
  { step: "01", title: "Foundation", desc: "Motor skills, balance, and spatial awareness." },
  { step: "02", title: "Exposure", desc: "Multi-sport exploration and discovery of athletic interest." },
  { step: "03", title: "Skill Development", desc: "Core athletic competencies and technique mastery." },
  { step: "04", title: "Sport-Specific", desc: "Advanced training for competitive excellence." },
];

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-dark)] text-[var(--color-text)]">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[var(--color-gradient-mid)]/15 to-[var(--color-primary)]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 mb-4">
              Structured Sports Programs
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-[var(--font-heading)] text-white tracking-tight leading-tight">
              A Scientifically Structured Pathway <br />
              <span className="gradient-text">For Every Stage of Growth</span>
            </h1>
            <p className="mt-6 text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Designed around child development principles, our 3-stage curriculum ensures every participant builds confidence, multi-sport agility, and performance capabilities step-by-step.
            </p>
          </div>
        </div>
      </section>

      {/* 4-Step Development Pathway Visual */}
      <section className="py-12 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold font-[var(--font-heading)] text-white text-center mb-10">
            The Lilhawkers Progression Continuum
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pathwaySteps.map((p, idx) => (
              <div key={p.step} className="glass-card p-5 rounded-2xl border border-white/5 relative">
                <div className="text-xs font-mono text-[var(--color-primary)] font-bold mb-1">
                  STEP {p.step}
                </div>
                <h3 className="text-lg font-bold text-white font-[var(--font-heading)]">
                  {p.title}
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                  {p.desc}
                </p>
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 text-white/30 text-xs font-bold">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 Detailed Stage Cards */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {stages.map((stage) => (
            <div
              key={stage.number}
              className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                <div className="space-y-4 max-w-xl">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white/40">
                      STAGE {stage.number}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${stage.badgeColor}`}>
                      {stage.age}
                    </span>
                  </div>
                  <h3 className="text-3xl font-extrabold font-[var(--font-heading)] text-white">
                    {stage.name} Stage
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
                    {stage.description}
                  </p>
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-white/90">
                    <strong className="text-white block mb-1">Key Developmental Outcome:</strong>
                    {stage.outcomes}
                  </div>
                </div>

                {/* Focus Areas List */}
                <div className="lg:w-96 space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)]">
                    Curriculum Focus Areas
                  </h4>
                  <ul className="space-y-2">
                    {stage.focusAreas.map((area) => (
                      <li
                        key={area}
                        className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs sm:text-sm font-medium text-white flex items-center gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/5 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-[var(--font-heading)] text-white mb-4">
            Ready to Implement a Structured Sports Curriculum?
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] mb-8">
            Book a complimentary trial demonstration session for your school, club, or coaching facility.
          </p>
          <Link href="/contact" className="btn-primary">
            <span>Book a Free Demo Session</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
