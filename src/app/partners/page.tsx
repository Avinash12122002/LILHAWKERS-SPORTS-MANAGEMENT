import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";

export const metadata: Metadata = {
  title: "Partners & Why Us | Lilhawkers Sports Management",
  description: "Explore who we partner with — private schools, sports clubs, sports training centres, and communities — and why organisations choose Lilhawkers as their turnkey sports development partner.",
};

const reasons = [
  {
    title: "A Ready-to-Implement System",
    desc: "A ready-to-implement system — not a blank slate. Programs, materials, and trainer guidelines are already built and tested.",
    icon: "🚀",
  },
  {
    title: "Age-Appropriate Progression",
    desc: "Every stage is calibrated around what participants can and should be developing at that physiological growth window.",
    icon: "📈",
  },
  {
    title: "Skill-by-Skill Development",
    desc: "Sports are broken into component biomechanical skills and built progressively, preventing premature burnout.",
    icon: "🎯",
  },
  {
    title: "Evaluation Built In",
    desc: "We measure whether participants are actually developing physical competence, dynamic balance, and stamina — not just attendance.",
    icon: "📊",
  },
  {
    title: "Continuous Improvement",
    desc: "Curricula evolve continuously based on real-world outcomes and coach feedback, not left unchanged year after year.",
    icon: "🔄",
  },
  {
    title: "Participation-First Philosophy",
    desc: "Our goal is to get more participants actively involved in sport, discover what they love, and build competitive athletic representation.",
    icon: "🏆",
  },
];

const deliverables = [
  {
    icon: "🏫",
    title: "Seamless Integration",
    desc: "Embed our progressive matrix directly into school physical education blocks or after-school sports academies with zero operational friction.",
  },
  {
    icon: "🏟️",
    title: "Facility & Space Optimization",
    desc: "Maximize the utilization and participant throughput of existing sports infrastructure with structured multi-sport scheduling.",
  },
  {
    icon: "📈",
    title: "Tangible Progress Reports",
    desc: "Deliver clear physical evaluation reports to parents, participants, and institution directors to demonstrate real athletic growth.",
  },
];

export default function PartnersAndWhyUsPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-emerald-500/10 to-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-50 text-[var(--color-primary)] border border-emerald-200 mb-4">
              Institutional Partnerships &amp; Differentiators
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-[var(--font-heading)] text-slate-900 tracking-tight leading-[1.15]">
              Partners &amp; Why <span className="gradient-text">Lilhawkers.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              We design and operate age-appropriate sports systems implemented directly through private schools, sports clubs, sports training centres, and residential communities looking for structured, turnkey sporting outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: Who We Partner With & Partner Showcase Marquee */}
      <Partners showMarquee={true} />

      {/* SECTION 2: Why Organisations Choose Lilhawkers (Unified Block) */}
      <section className="py-20 border-t border-slate-200 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          {/* Main Section Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-sky-50 text-sky-700 border border-sky-200 mb-3">
              Core Differentiators &amp; Deliverables
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[var(--font-heading)] text-slate-900 tracking-tight">
              Why Organisations Choose <span className="gradient-text">Lilhawkers</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              We don&apos;t just deliver ad-hoc coaching sessions. We engineer turnkey systems that build long-term athletic capability and institutional pride.
            </p>
          </div>

          {/* Part A: 6 Core Differentiator Cards */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Core Program Advantages:
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="glass-card rounded-3xl p-7 group border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[var(--color-primary)]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform shadow-xs">
                      {reason.icon}
                    </div>
                    <h4 className="font-[var(--font-heading)] text-lg font-bold text-slate-900 mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                      {reason.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Part B: 3 Institutional Execution & Deliverable Cards */}
          <div className="pt-10 border-t border-slate-200">
            <div className="mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Institutional Execution &amp; Deliverables:
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {deliverables.map((item) => (
                <div
                  key={item.title}
                  className="glass-card p-7 rounded-3xl border border-slate-200 bg-white hover:border-sky-400 hover:shadow-xl transition-all duration-300"
                >
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h4 className="text-lg font-bold text-slate-900 font-[var(--font-heading)] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-20 border-t border-slate-200 text-center relative bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-[var(--font-heading)] text-slate-900 mb-4">
            Bring a Structured Program to Your Venue
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mb-8">
            Experience our curriculum in action with a free demonstration session for your organisation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              <span>Book a Free Demo Session</span>
            </Link>
            <Link
              href="/programs"
              className="px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-800 text-sm font-bold border border-slate-200 shadow-xs transition-colors"
            >
              Explore 6-Stage Programs →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
