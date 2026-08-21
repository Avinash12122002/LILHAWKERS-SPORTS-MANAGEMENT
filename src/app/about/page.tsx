import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnerShowcaseMarquee from "@/components/PartnerShowcaseMarquee";

export const metadata: Metadata = {
  title: "About Us | Lilhawkers Sports Management Pvt. Ltd.",
  description: "Learn about Lilhawkers Sports Management Pvt. Ltd. — incorporated in 2019 to deliver structured, progressive sports development systems for schools, clubs, and communities.",
};

const demographyPrograms = [
  {
    icon: "👶",
    title: "Children & Youth Development",
    ageRange: "Ages 3 – 20 Years",
    tagline: "Building Physical Foundations & Competitive Pathways",
    color: "from-emerald-500 to-green-600",
    bgAccent: "rgba(5, 150, 105, 0.05)",
    borderAccent: "hover:border-[var(--color-primary)]/50",
    features: [
      "Movement balance, spatial awareness & motor coordination",
      "Multi-sport exploration without premature single-sport burnout",
      "Progressive skill development matched to physical growth stages",
      "Structured competitive pathways for aspiring student athletes",
    ],
  },
  {
    icon: "💼",
    title: "Professionals & Young Adults",
    ageRange: "Ages 20 – 35 Years",
    tagline: "Functional Conditioning & Recreational Sports Leagues",
    color: "from-blue-600 to-indigo-600",
    bgAccent: "rgba(2, 132, 199, 0.05)",
    borderAccent: "hover:border-blue-500/50",
    features: [
      "High-intensity functional conditioning & metabolic resistance",
      "Adult recreational leagues (Badminton, Football, Pickleball)",
      "Postural realignment & mobility for desk-bound professionals",
      "Active workplace stress reduction and structured wellness cohorts",
    ],
  },
  {
    icon: "🏃",
    title: "Adults & Middle-Aged Fitness",
    ageRange: "Ages 35 – 60 Years",
    tagline: "Joint Mobility, Cardiovascular Health & Low-Impact Sports",
    color: "from-teal-600 to-cyan-600",
    bgAccent: "rgba(13, 148, 136, 0.05)",
    borderAccent: "hover:border-teal-500/50",
    features: [
      "Joint preservation routines & progressive functional mobility",
      "Low-impact sports leagues (Pickleball, Masters Swimming, Badminton)",
      "Progressive resistance to prevent sarcopenia & preserve bone density",
      "Cardiometabolic health maintenance and active lifestyle protocols",
    ],
  },
  {
    icon: "🌟",
    title: "Seniors & Golden Age Community",
    ageRange: "Ages 60+ Years",
    tagline: "Dynamic Balance Restoration, Fall Prevention & Social Sports",
    color: "from-rose-600 to-pink-600",
    bgAccent: "rgba(225, 29, 72, 0.05)",
    borderAccent: "hover:border-rose-500/50",
    features: [
      "Dynamic equilibrium & vestibular balance for fall prevention",
      "Gentle resistance band conditioning & isometric stability",
      "Low-barrier social sports (Walking football, soft bocce, light table tennis)",
      "Inter-generational community sporting days and active wellness circles",
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-50 text-[var(--color-primary)] border border-emerald-200 mb-4">
              About Lilhawkers
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-[var(--font-heading)] text-slate-900 tracking-tight leading-tight">
              We Design the <span className="gradient-text">System.</span> <br />
              Partners Deliver the <span className="gradient-text">Experience.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              Structured sports development programs built to take participants from their first movements to lifelong athletic competence, multi-sport agility, and active health.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative & Corporate Info Section */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-900">Lilhawkers Sports Management Pvt. Ltd.</strong> is a private company incorporated in 2019 as a sports management company. We identify ourselves as a sports-program development and delivery company. We are not a sports academy in the traditional sense — we design structured, age-appropriate sports development systems and implement them through the schools, clubs, training centres and residential communities we partner with.
                </p>
                <p>
                  Most organisations that want to offer sport face the same gap: they have the space, the interest and the participants, but not a structured, progressive curriculum tailored appropriately for each stage of growth — from young children taking their first athletic steps to middle-aged adults and senior community members. Handing participants a ball and asking them to “just play” doesn’t build lasting athletic ability or lifelong fitness habits systematically.
                </p>
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-slate-800 leading-relaxed shadow-xs">
                  <p>
                    <strong className="text-[var(--color-primary)] font-bold">Lilhawkers closes that gap.</strong> We design age-specific and gender-inclusive programs, provide materials and structure, train and support the trainers who deliver it, implement it through our partner organisations, evaluate the results, and continuously refine the program based on what we learn — so participation keeps growing and development keeps improving.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                  <span className="text-lg font-bold text-slate-900 font-[var(--font-heading)] block">B2B Partner</span>
                  <span className="text-xs text-slate-500 mt-0.5 block">Operating Model</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                  <span className="text-lg font-bold text-[var(--color-primary)] font-[var(--font-heading)] block">All Ages</span>
                  <span className="text-xs text-slate-500 mt-0.5 block">Ages 3 to 60+</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-center shadow-xs">
                  <span className="text-lg font-bold text-[var(--color-gradient-end)] font-[var(--font-heading)] block">All Genders</span>
                  <span className="text-xs text-slate-500 mt-0.5 block">Inclusive Reach</span>
                </div>
              </div>
            </div>

            {/* Right Verified MCA Corporate Credentials Card */}
            <div className="lg:col-span-5">
              <div className="glass-card p-7 sm:p-8 rounded-3xl border border-slate-200 bg-white relative overflow-hidden shadow-md">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-[var(--font-heading)]">
                      Company Information
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full font-bold">
                    MCA Verified • Active
                  </span>
                </div>

                <dl className="space-y-4 text-xs sm:text-sm">
                  <div className="pb-3 border-b border-slate-100">
                    <dt className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                      Legal Name
                    </dt>
                    <dd className="text-slate-900 font-bold text-xs sm:text-sm mt-0.5">
                      LILHAWKERS SPORTS MANAGEMENT PRIVATE LIMITED
                    </dd>
                  </div>

                  <div className="pb-3 border-b border-slate-100">
                    <dt className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                      Corporate Identification Number (CIN)
                    </dt>
                    <dd className="text-[var(--color-primary)] font-mono font-bold text-xs sm:text-sm mt-0.5">
                      U92419HR2019PTC083938
                    </dd>
                  </div>

                  <div className="pb-3 border-b border-slate-100">
                    <dt className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                      Registration Number
                    </dt>
                    <dd className="text-slate-900 font-mono font-medium text-xs sm:text-sm mt-0.5">
                      83938
                    </dd>
                  </div>

                  <div className="pb-3 border-b border-slate-100">
                    <dt className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                      Date of Incorporation
                    </dt>
                    <dd className="text-slate-900 font-medium text-xs sm:text-sm mt-0.5">
                      03 December 2019
                    </dd>
                  </div>

                  <div>
                    <dt className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold">
                      Company Category / Class
                    </dt>
                    <dd className="text-slate-900 font-medium text-xs sm:text-sm mt-0.5">
                      Private Limited Company • Non-govt company
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifespan Demography Spectrum Cards */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] mb-2 block">
              Lifespan Sports Development
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-[var(--font-heading)] text-slate-900">
              Four Core Age &amp; Demographic Spectrums
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Every demographic cohort requires dedicated biomechanical progression, motivation triggers, and safety guardrails.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {demographyPrograms.map((prog) => (
              <div
                key={prog.title}
                className="glass-card p-6 rounded-3xl border border-slate-200 flex flex-col justify-between hover:border-[var(--color-primary)]/50 hover:shadow-xl transition-all duration-300 group bg-white"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${prog.bgAccent}, transparent 70%), #ffffff`,
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-xl group-hover:scale-110 transition-transform shadow-xs">
                      {prog.icon}
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                      {prog.ageRange}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-[var(--font-heading)] mb-1.5 group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                    {prog.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mb-4 leading-snug">
                    {prog.tagline}
                  </p>

                  <ul className="space-y-2 text-xs text-slate-600">
                    {prog.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0 mt-1.5" />
                        <span className="leading-snug group-hover:text-slate-900 transition-colors">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 22-Card Partner Showcase Marquee */}
      <section className="py-14 border-t border-slate-200 bg-slate-50/70 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-primary)] font-bold block">
            Institutional Deployments &bull; North India
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-[var(--font-heading)] mt-0.5">
            Trusted Across Schools, Clubs, Training Centres &amp; Communities
          </h3>
        </div>

        <PartnerShowcaseMarquee />
      </section>

      {/* CTA Footer Banner */}
      <section className="py-20 border-t border-slate-200 text-center relative bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-[var(--font-heading)] text-slate-900 mb-4">
            Partner With Lilhawkers Today
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mb-8">
            Let us design, deliver, and continuously evaluate a high-impact sports development program for your organisation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              <span>Book a Free Demo Session</span>
            </Link>
            <Link
              href="/programs"
              className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-sm font-bold border border-slate-200 shadow-xs transition-colors"
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
