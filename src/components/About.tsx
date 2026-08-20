"use client";

import RevealWrapper from "./RevealWrapper";

export default function About() {
  return (
    <RevealWrapper>
      <section id="about" className="section-padding relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-primary)]/3 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="reveal-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                  Who We Are
                </span>
              </div>

              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                We Design the{" "}
                <span className="gradient-text">System.</span>
                <br />
                Partners Deliver the{" "}
                <span className="gradient-text">Experience.</span>
              </h2>

              <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                <p>
                  Lilhawkers Sports Management Pvt. Ltd. is a sports-program
                  development and delivery company. We are not a sports academy
                  in the traditional sense — we design structured,
                  age-appropriate sports development systems and implement them
                  through the schools, clubs, training centres and communities we
                  partner with.
                </p>
                <p>
                  Most organisations that want to offer sport to children face
                  the same gap: they have the space, the interest and the
                  participants, but not a structured, progressive curriculum that
                  develops children appropriately at each stage of growth.
                  Handing a child a ball and asking them to “just play” doesn’t
                  build anything systematically.
                </p>
                <p className="text-white font-medium">
                  Lilhawkers closes that gap. We design the program, provide the
                  materials and structure, train and support the trainers who
                  deliver it, implement it through our partner organisations,
                  evaluate the results, and continuously refine the program based
                  on what we learn — so participation keeps growing and
                  development keeps improving.
                </p>
              </div>
            </div>

            {/* Right - Visual Card */}
            <div className="reveal-right">
              <div className="glass-card rounded-2xl p-8 sm:p-10">
                <h3 className="font-[var(--font-heading)] text-xl font-semibold text-white mb-6">
                  Lilhawkers closes that gap
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      icon: "🎯",
                      title: "Design the Program",
                      desc: "Structured, age-appropriate curricula built from scratch",
                    },
                    {
                      icon: "📋",
                      title: "Provide Materials & Structure",
                      desc: "Complete guidelines for consistent delivery",
                    },
                    {
                      icon: "👨‍🏫",
                      title: "Train the Trainers",
                      desc: "Supporting those who deliver on the ground",
                    },
                    {
                      icon: "🏢",
                      title: "Implement Through Partners",
                      desc: "Schools, clubs, centres and communities",
                    },
                    {
                      icon: "📊",
                      title: "Evaluate Results",
                      desc: "Measuring actual development, not just attendance",
                    },
                    {
                      icon: "🔄",
                      title: "Continuously Refine",
                      desc: "Programs evolve based on real outcomes",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 group cursor-default"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-primary)]/20 transition-colors text-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white group-hover:text-[var(--color-primary)] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </RevealWrapper>
  );
}
