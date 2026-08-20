import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/15 bg-[#050706] shadow-[0_-20px_50px_rgba(0,0,0,0.9)]">
      {/* Top Accent Divider Glow */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--color-primary)]/60 to-transparent" />

      {/* Pre-footer Callout: Let's Build Your Sports Program */}
      <div className="border-b border-white/5 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 text-center max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-extrabold font-[var(--font-heading)] text-white mb-2">
              Let&apos;s Build Your <span className="gradient-text">Sports Program</span>
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-5 leading-relaxed">
              Whether you&apos;re a school looking to strengthen your sports curriculum, a club building a junior pathway, or a community organisation wanting to get more participants active — we&apos;d like to understand your goals and show you how a Lilhawkers program could work for you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="btn-primary text-xs sm:text-sm px-6 py-2.5">
                <span>Book a Free Demo Session</span>
              </Link>
              <a
                href="mailto:info@lilhawkers.com"
                className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold border border-white/10 transition-colors"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid (Clean Proportions) */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Contacts Column (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3.5 group inline-flex">
              <div className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white/[0.05] border border-white/15 p-1.5 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:border-[var(--color-primary)]/50 shrink-0">
                <Image
                  src="/icon.png"
                  alt="Lilhawkers Emblem"
                  width={52}
                  height={52}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-[var(--font-heading)] text-base font-black tracking-tight text-white group-hover:text-[var(--color-primary)] transition-colors leading-none">
                  LILHAWKERS
                </span>
                <span className="text-[7.5px] font-bold uppercase tracking-[0.06em] text-[var(--color-primary)] mt-1 leading-tight whitespace-nowrap">
                  Sports Management Pvt. Ltd.
                </span>
                <span className="text-[7px] font-semibold tracking-[0.14em] text-[var(--color-text-secondary)] uppercase mt-0.5 leading-tight">
                  Learn &bull; Play &bull; Grow
                </span>
              </div>
            </Link>
            <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
              Structured Sports Development for Every Stage of Growth. We build the progressive pathway from foundational movement to lifelong active fitness.
            </p>

            <div className="space-y-1.5 text-xs text-[var(--color-text-secondary)] pt-2 border-t border-white/5">
              <div className="flex items-center gap-2">
                <span className="text-[var(--color-primary)] font-bold text-xs">✉</span>
                <a href="mailto:info@lilhawkers.com" className="hover:text-white transition-colors">
                  info@lilhawkers.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--color-primary)] font-bold text-xs">📍</span>
                <span>Haryana, India</span>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] hover:text-white transition-colors"
            >
              Book a Free Demo Session →
            </Link>
          </div>

          {/* Navigation Column (3 cols) */}
          <div className="md:col-span-3">
            <h4 className="font-[var(--font-heading)] text-[11px] font-bold text-white uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { href: "/about", label: "About Us" },
                { href: "/programs", label: "Programs & Delivery System" },
                { href: "/partners", label: "Partners & Why Lilhawkers" },
                { href: "/contact", label: "Book a Demo Session" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compact Verified Company Information Card (5 cols) */}
          <div className="md:col-span-5">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 relative overflow-hidden shadow-lg">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                  <h4 className="font-[var(--font-heading)] text-[11px] font-bold uppercase tracking-wider text-white">
                    Company Information
                  </h4>
                </div>
                <span className="text-[9px] font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full font-semibold">
                  MCA Verified • Active
                </span>
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2 text-[11px]">
                <div className="sm:col-span-2 pb-1.5 border-b border-white/5">
                  <dt className="text-[9px] uppercase tracking-wider text-[var(--color-text-secondary)] font-semibold">
                    Legal Name
                  </dt>
                  <dd className="text-white font-semibold text-[11px] mt-0.5 truncate" title="LILHAWKERS SPORTS MANAGEMENT PRIVATE LIMITED">
                    LILHAWKERS SPORTS MANAGEMENT PVT. LTD.
                  </dd>
                </div>

                <div className="pb-1.5 border-b border-white/5">
                  <dt className="text-[9px] uppercase tracking-wider text-[var(--color-text-secondary)] font-semibold">
                    CIN
                  </dt>
                  <dd className="font-mono text-[var(--color-primary)] font-bold text-[10px] mt-0.5">
                    U92419HR2019PTC083938
                  </dd>
                </div>

                <div className="pb-1.5 border-b border-white/5">
                  <dt className="text-[9px] uppercase tracking-wider text-[var(--color-text-secondary)] font-semibold">
                    Reg. Number
                  </dt>
                  <dd className="text-white font-mono font-medium text-[10px] mt-0.5">
                    83938
                  </dd>
                </div>

                <div>
                  <dt className="text-[9px] uppercase tracking-wider text-[var(--color-text-secondary)] font-semibold">
                    Incorporated
                  </dt>
                  <dd className="text-white font-medium text-[10px] mt-0.5">
                    03 December 2019
                  </dd>
                </div>

                <div>
                  <dt className="text-[9px] uppercase tracking-wider text-[var(--color-text-secondary)] font-semibold">
                    Category / Class
                  </dt>
                  <dd className="text-white font-medium text-[10px] mt-0.5 truncate">
                    Private Limited Company
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Legal Links */}
        <div className="py-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
          <p className="text-[var(--color-text-secondary)]/60 text-center sm:text-left">
            © {currentYear} Lilhawkers Sports Management Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-[var(--color-text-secondary)]/70">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
