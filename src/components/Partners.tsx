import Link from "next/link";
import RevealWrapper from "./RevealWrapper";
import PartnerShowcaseMarquee from "./PartnerShowcaseMarquee";

const partners = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Private Schools",
    desc: "To deliver structured PE and physical literacy curricula",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Sports Clubs",
    desc: "To build a systematic athlete development pathway",
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

interface PartnersProps {
  showMarquee?: boolean;
}

export default function Partners({ showMarquee = true }: PartnersProps) {
  return (
    <RevealWrapper>
      <section id="partners" className="section-padding relative overflow-hidden bg-slate-50/60 border-t border-slate-200/80">
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-[var(--color-primary)]/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-10 reveal">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-primary)]">
                Who We Partner With
              </span>
            </div>
            <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Who We <span className="gradient-text">Partner With</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              We partner with organisations that want to offer their participants
              a structured sports development experience.
            </p>
          </div>

          {/* Partner Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
            {partners.map((partner, i) => (
              <div
                key={partner.title}
                className="reveal glass-card rounded-2xl p-7 group text-center border border-slate-200 bg-white shadow-xs hover:shadow-lg transition-all"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[var(--color-primary)] mx-auto mb-5 group-hover:scale-110 group-hover:bg-emerald-100/60 transition-all duration-300">
                  {partner.icon}
                </div>
                <h3 className="font-[var(--font-heading)] text-lg font-bold text-slate-900 mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {partner.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 22-Card Alternating Partner Showcase Marquee */}
          {showMarquee && (
            <div className="my-14">
              <div className="mb-6 px-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-primary)] font-bold block">
                  Institutional Deployments &bull; North India
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-[var(--font-heading)] mt-0.5">
                  Trusted Across Schools, Clubs, Training Centres &amp; Communities
                </h3>
              </div>

              <PartnerShowcaseMarquee />
            </div>
          )}

          {/* CTA callout */}
          <div className="reveal text-center">
            <div className="glass-card rounded-3xl p-8 sm:p-10 max-w-3xl mx-auto border border-slate-200 shadow-md bg-white">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If your organisation has the space and the participants but not a
                structured sports curriculum,{" "}
                <span className="text-slate-900 font-bold">
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
