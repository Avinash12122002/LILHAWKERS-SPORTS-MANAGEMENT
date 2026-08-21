import Link from "next/link";
import RevealWrapper from "./RevealWrapper";
import PartnerShowcaseMarquee from "./PartnerShowcaseMarquee";

const partners = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Private Schools",
    desc: "As a structured PE / co-curricular sports program",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    title: "Sports Clubs",
    desc: "To strengthen junior development pathways",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Sports Training Centres",
    desc: "To formalise age-based development programs",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Communities",
    desc: "To increase youth sports participation with real structure",
  },
];

export default function Partners() {
  return (
    <RevealWrapper>
      <section id="partners" className="section-padding relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-[var(--color-primary)]/3 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-10 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                Who We Partner With
              </span>
            </div>
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Who We <span className="gradient-text">Partner With</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              We partner with organisations that want to offer their participants
              a structured sports development experience.
            </p>
          </div>

          {/* Partner Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
            {partners.map((partner, i) => (
              <div
                key={partner.title}
                className="reveal glass-card rounded-xl p-7 group text-center"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary)]/15 to-[var(--color-gradient-end)]/15 flex items-center justify-center text-[var(--color-primary)] mx-auto mb-5 group-hover:scale-110 group-hover:from-[var(--color-primary)]/25 group-hover:to-[var(--color-gradient-end)]/25 transition-all duration-300">
                  {partner.icon}
                </div>
                <h3 className="font-[var(--font-heading)] text-lg font-semibold text-white mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {partner.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 22-Card Alternating Partner Showcase Marquee */}
          <div className="my-14">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 px-1">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-primary)] font-bold block">
                  Institutional Deployments &bull; North India
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-[var(--font-heading)] mt-0.5">
                  Trusted Across Schools, Clubs, Training Centres &amp; Communities
                </h3>
              </div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                22 Active Partner Showcases
              </span>
            </div>

            <PartnerShowcaseMarquee />
          </div>

          {/* CTA callout */}
          <div className="reveal text-center">
            <div className="glass-card rounded-2xl p-8 sm:p-10 max-w-3xl mx-auto">
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
                If your organisation has the space and the participants but not a
                structured sports curriculum,{" "}
                <span className="text-white font-semibold">
                  that&apos;s exactly the gap we fill.
                </span>
              </p>
              <Link href="/contact" className="btn-primary">
                <span>Partner With Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </RevealWrapper>
  );
}
