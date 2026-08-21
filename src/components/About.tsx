"use client";

import RevealWrapper from "./RevealWrapper";

const demographyPrograms = [
  {
    icon: "👶",
    title: "Children & Youth Development",
    ageRange: "Ages 3 – 20 Years",
    tagline: "Building Physical Foundations & Competitive Pathways",
    color: "from-emerald-600 to-green-600",
    bgAccent: "rgba(5, 150, 105, 0.06)",
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
    bgAccent: "rgba(2, 132, 199, 0.06)",
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
    bgAccent: "rgba(13, 148, 136, 0.06)",
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
    bgAccent: "rgba(225, 29, 72, 0.06)",
    borderAccent: "hover:border-rose-500/50",
    features: [
      "Dynamic equilibrium & vestibular balance for fall prevention",
      "Gentle resistance band conditioning & isometric stability",
      "Low-barrier social sports (Walking football, soft bocce, light table tennis)",
      "Inter-generational community sporting days and active wellness circles",
    ],
  },
];

const lifecycleSteps = [
  {
    icon: "🎯",
    title: "Design the Program",
    desc: "Structured, age-appropriate curricula built from first principles.",
  },
  {
    icon: "📋",
    title: "Provide Materials & Structure",
    desc: "Lesson plans, equipment recommendations, evaluation rubrics.",
  },
  {
    icon: "🎓",
    title: "Train & Support the Trainers",
    desc: "Direct coach development and continuous pedagogical guidance.",
  },
  {
    icon: "🤝",
    title: "Implement with Partners",
    desc: "Turnkey delivery directly inside partner schools and venues.",
  },
  {
    icon: "📊",
    title: "Evaluate & Learn",
    desc: "Objective physical testing, benchmark tracking, and progress metrics.",
  },
  {
    icon: "🔄",
    title: "Continuously Refine",
    desc: "Data-driven curriculum evolution every single term.",
  },
];

export default function About() {
  return (
    <RevealWrapper>
      <section id="about" className="section-padding relative overflow-hidden bg-white">
        {/* Ambient Glow Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-primary)]/5 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-[450px] h-[450px] rounded-full bg-[var(--color-gradient-end)]/5 blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-16">
          {/* Main 2-Column Overview (Left: ~70% / 8 cols, Right: ~30% / 4 cols) */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Content Column (70% Width / 8 cols) */}
            <div className="lg:col-span-8 reveal-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-primary)]">
                  Who We Are
                </span>
              </div>

              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] text-slate-900">
                We Design the <span className="gradient-text">System.</span>
                <br />
                Partners Deliver the <span className="gradient-text">Experience.</span>
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-900">Lilhawkers Sports Management Pvt. Ltd.</strong> is a private company incorporated in 2019 as a sports management company. We identify ourselves as a sports-program development and delivery company. We are not a sports academy in the traditional sense — we design structured, age-appropriate sports development systems and implement them through the schools, clubs, training centres and residential communities we partner with.
                </p>
                <p>
                  Most organisations that want to offer sport face the same gap: they have the space, the interest and the participants, but not a structured, progressive curriculum tailored appropriately for each stage of growth — from young children taking their first athletic steps to Professionals &amp; Young Adults and middle-aged adults to senior community members. Handing participants a ball and asking them to “just play” doesn’t build lasting athletic ability or lifelong fitness habits systematically.
                </p>
                <p className="text-slate-900 font-medium bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100/80">
                  Lilhawkers closes that gap. We design age-specific and gender-inclusive programs, provide materials and structure, train and support the trainers who deliver it, implement it through our partner organisations, evaluate the results, and continuously refine the program based on what we learn — so participation keeps growing and development keeps improving.
                </p>
              </div>

              {/* 4 Demographic Programs Overview Cards within Left Column */}
              <div className="pt-4 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                    Structured Development Spectrum
                  </h3>
                  <span className="text-xs text-[var(--color-primary)] font-semibold">
                    All Generations &amp; Genders
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3.5">
                  {demographyPrograms.map((prog) => (
                    <div
                      key={prog.title}
                      className="glass-card p-5 rounded-2xl border border-slate-200 flex flex-col justify-between hover:border-[var(--color-primary)]/40 transition-all duration-300 group"
                      style={{
                        background: `radial-gradient(ellipse at 50% 0%, ${prog.bgAccent}, transparent 70%), #ffffff`,
                      }}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2.5">
                          <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-base group-hover:scale-110 transition-transform">
                            {prog.icon}
                          </div>
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                            {prog.ageRange}
                          </span>
                        </div>

                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-[var(--font-heading)] mb-1 group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                          {prog.title}
                        </h4>
                        <p className="text-[10px] text-slate-500 mb-2.5 leading-tight font-medium">
                          {prog.tagline}
                        </p>

                        <ul className="space-y-1 text-[10px] text-slate-600">
                          {prog.features.slice(0, 3).map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] shrink-0 mt-1" />
                              <span className="leading-tight group-hover:text-slate-900 transition-colors">
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
            </div>

            {/* Right Column: Turnkey Lifecycle & MCA Info (30% Width / 4 cols) */}
            <div className="lg:col-span-4 reveal-right space-y-6">
              {/* 6-Step Turnkey Delivery System */}
              <div className="glass-card rounded-2xl p-5 sm:p-6 border border-slate-200 relative overflow-hidden">
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
                  <h3 className="font-[var(--font-heading)] text-base font-bold text-slate-900">
                    Delivery System
                  </h3>
                  <span className="text-[9px] font-mono text-[var(--color-primary)] bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                    Turnkey Operating Model
                  </span>
                </div>

                <div className="space-y-3">
                  {lifecycleSteps.map((step, idx) => (
                    <div key={step.title} className="flex items-start gap-3 group">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-xs shrink-0 group-hover:scale-110 transition-transform">
                        {step.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-mono text-[var(--color-primary)] font-bold">
                            0{idx + 1}.
                          </span>
                          <h4 className="text-xs font-bold text-slate-900 group-hover:text-[var(--color-primary)] transition-colors leading-tight">
                            {step.title}
                          </h4>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified MCA Company Information Card */}
              <div className="glass-card rounded-2xl p-5 sm:p-6 border border-slate-200 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
                    <h3 className="font-[var(--font-heading)] text-sm font-bold uppercase tracking-wider text-slate-900">
                      Company Information
                    </h3>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                    MCA Verified • Active
                  </span>
                </div>

                <dl className="grid grid-cols-2 gap-3 text-xs">
                  <div className="col-span-2 pb-2 border-b border-slate-100">
                    <dt className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                      Legal Name
                    </dt>
                    <dd className="text-slate-900 font-bold text-xs mt-0.5">
                      LILHAWKERS SPORTS MANAGEMENT PVT. LTD.
                    </dd>
                  </div>

                  <div className="pb-2 border-b border-slate-100">
                    <dt className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                      CIN
                    </dt>
                    <dd className="font-mono text-[var(--color-primary)] font-bold text-[11px] mt-0.5">
                      U92419HR2019PTC083938
                    </dd>
                  </div>

                  <div className="pb-2 border-b border-slate-100">
                    <dt className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                      Registration No.
                    </dt>
                    <dd className="text-slate-900 font-mono font-medium text-xs mt-0.5">
                      83938
                    </dd>
                  </div>

                  <div>
                    <dt className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                      Incorporation Date
                    </dt>
                    <dd className="text-slate-900 font-medium text-xs mt-0.5">
                      03 December 2019
                    </dd>
                  </div>

                  <div>
                    <dt className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                      Company Category
                    </dt>
                    <dd className="text-slate-900 font-medium text-xs mt-0.5">
                      Private Limited
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealWrapper>
  );
}
