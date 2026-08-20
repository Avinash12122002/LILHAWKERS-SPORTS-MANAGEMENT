import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Lilhawkers Sports Management",
  description: "Learn about Lilhawkers Sports Management Pvt. Ltd. — developing structured sports development pathways for schools, clubs, coaching centres and communities.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--color-dark)] text-[var(--color-text)]">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[var(--color-primary)]/15 to-[var(--color-gradient-end)]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 mb-4">
              About Lilhawkers
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold font-[var(--font-heading)] text-white tracking-tight leading-tight">
              We Don&apos;t Just Coach a Sport. <br />
              <span className="gradient-text">We Build the Pathway.</span>
            </h1>
            <p className="mt-6 text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Lilhawkers Sports Management Pvt. Ltd. is a sports-program development and delivery company.
              We are not a traditional sports academy — we design, implement, and continuously improve structured sports development systems for institutional partners.
            </p>
          </div>
        </div>
      </section>

      {/* Core Mission & Philosophy */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold font-[var(--font-heading)] text-white">
                Redefining Youth Sports Development
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
                Traditional coaching often focuses on short-term drills or single-sport specialisation too early.
                Lilhawkers takes a long-term, progressive approach — designing age-appropriate pathways that guide participants from fundamental motor skills to sport-specific excellence.
              </p>
              <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
                We partner directly with <strong>private schools, sports clubs, coaching centres, and communities</strong> to deliver turnkey, scientifically structured curriculum complete with trainer training, structured materials, and continuous evaluation.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="glass-card p-4 rounded-xl border border-white/5">
                  <span className="text-2xl font-extrabold text-[var(--color-primary)] font-[var(--font-heading)]">B2B</span>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1">Institutional Sports Partner</p>
                </div>
                <div className="glass-card p-4 rounded-xl border border-white/5">
                  <span className="text-2xl font-extrabold text-[var(--color-gradient-end)] font-[var(--font-heading)]">3-Stage</span>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1">Progressive Development Model</p>
                </div>
              </div>
            </div>

            {/* Corporate Information Card */}
            <div className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)]/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-lg font-bold font-[var(--font-heading)] text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                Company Information
              </h3>

              <dl className="space-y-4 text-xs sm:text-sm">
                <div className="pb-3 border-b border-white/5">
                  <dt className="text-[11px] uppercase tracking-wider text-[var(--color-text-secondary)] font-semibold">
                    Legal Name
                  </dt>
                  <dd className="text-white font-medium mt-0.5">
                    LILHAWKERS SPORTS MANAGEMENT PRIVATE LIMITED
                  </dd>
                </div>

                <div className="pb-3 border-b border-white/5">
                  <dt className="text-[11px] uppercase tracking-wider text-[var(--color-text-secondary)] font-semibold">
                    Corporate Identification Number (CIN)
                  </dt>
                  <dd className="text-[var(--color-primary)] font-mono font-medium mt-0.5">
                    U92419HR2019PTC083938
                  </dd>
                </div>

                <div className="pb-3 border-b border-white/5">
                  <dt className="text-[11px] uppercase tracking-wider text-[var(--color-text-secondary)] font-semibold">
                    Registration Number
                  </dt>
                  <dd className="text-white font-mono font-medium mt-0.5">
                    83938
                  </dd>
                </div>

                <div className="pb-3 border-b border-white/5">
                  <dt className="text-[11px] uppercase tracking-wider text-[var(--color-text-secondary)] font-semibold">
                    Date of Incorporation
                  </dt>
                  <dd className="text-white font-medium mt-0.5">
                    03 December 2019
                  </dd>
                </div>

                <div>
                  <dt className="text-[11px] uppercase tracking-wider text-[var(--color-text-secondary)] font-semibold">
                    Company Category / Class
                  </dt>
                  <dd className="text-white font-medium mt-0.5">
                    Private Limited Company • Non-govt company
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/5 text-center relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-[var(--font-heading)] text-white mb-4">
            Bring Structured Sports to Your Organisation
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-text-secondary)] max-w-xl mx-auto mb-8">
            Experience our curriculum in action with a free demonstration session for your school, club, or community.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              <span>Book a Free Demo</span>
            </Link>
            <Link href="/programs" className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white text-sm font-semibold border border-white/10 transition-colors">
              Explore 3-Stage Programs →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
