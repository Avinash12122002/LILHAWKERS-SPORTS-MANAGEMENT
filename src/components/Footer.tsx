import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-100/90 text-slate-800">
      {/* Top Accent Divider Glow */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent" />

      {/* Pre-footer Callout: Let's Build Your Sports Program */}
      <div className="border-b border-slate-200 bg-emerald-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-200 bg-white text-center max-w-4xl mx-auto shadow-md">
            <h3 className="text-xl sm:text-2xl font-extrabold font-[var(--font-heading)] text-slate-900 mb-2">
              Let&apos;s Build Your <span className="gradient-text">Sports Program</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto mb-5 leading-relaxed">
              Whether you&apos;re a school looking to strengthen your sports curriculum, a club building a junior pathway, or a community organisation wanting to get more participants active — we&apos;d like to understand your goals and show you how a Lilhawkers program could work for you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="btn-primary text-xs sm:text-sm px-6 py-2.5">
                <span>Book a Free Demo Session</span>
              </Link>
              <a
                href="tel:+918168226462"
                className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold border border-slate-200 shadow-xs transition-colors inline-flex items-center gap-2"
              >
                <span>📞</span>
                <span>Call +91 81682 26462</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Contacts Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3.5 group inline-flex">
              <div className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-white border border-slate-200 p-1.5 flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-[var(--color-primary)]/50 shrink-0">
                <Image
                  src="/icon.png"
                  alt="Lilhawkers Emblem"
                  width={52}
                  height={52}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-[var(--font-heading)] text-base font-black tracking-tight text-slate-900 group-hover:text-[var(--color-primary)] transition-colors leading-none">
                  LILHAWKERS
                </span>
                <span className="text-[7.5px] font-bold uppercase tracking-[0.06em] text-[var(--color-primary)] mt-1 leading-tight whitespace-nowrap">
                  Sports Management Pvt. Ltd.
                </span>
                <span className="text-[7px] font-semibold tracking-[0.14em] text-slate-500 uppercase mt-0.5 leading-tight">
                  Learn &bull; Play &bull; Grow
                </span>
              </div>
            </Link>
            <p className="text-xs text-slate-600 leading-relaxed">
              Structured Sports Development for Every Stage of Growth. We build the progressive pathway from foundational movement to lifelong active fitness.
            </p>

            <div className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-200">
              <div className="flex items-center gap-2">
                <span className="text-[var(--color-primary)] font-bold text-xs">📞</span>
                <a href="tel:+918168226462" className="text-slate-900 hover:text-[var(--color-primary)] transition-colors font-bold">
                  +91 81682 26462
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[var(--color-primary)] font-bold text-xs">✉</span>
                <a href="mailto:info@lilhawkers.com" className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                  info@lilhawkers.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[var(--color-primary)] font-bold text-xs mt-0.5">📍</span>
                <span className="text-slate-700 leading-snug">
                  First Floor, Besides Sadar Thana, Delhi Rohtak Corridor, opp. Metro pillar no 830, Bahadurgarh, DELHI NCR 124507
                </span>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] hover:underline transition-colors pt-1"
            >
              Book a Free Demo Session →
            </Link>
          </div>

          {/* Navigation Column (2 cols) */}
          <div className="md:col-span-2">
            <h4 className="font-[var(--font-heading)] text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { href: "/about", label: "About Us" },
                { href: "/programs", label: "Programs & System" },
                { href: "/partners", label: "Partners & Why Us" },
                { href: "/contact", label: "Book Free Demo" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-[var(--color-primary)] font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compact Verified Company Information Card (5 cols) */}
          <div className="md:col-span-5">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 relative overflow-hidden shadow-sm">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                  <h4 className="font-[var(--font-heading)] text-[11px] font-bold uppercase tracking-wider text-slate-900">
                    Company Information
                  </h4>
                </div>
                <span className="text-[9px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                  MCA Verified • Active
                </span>
              </div>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2 text-[11px]">
                <div className="sm:col-span-2 pb-1.5 border-b border-slate-100">
                  <dt className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold">
                    Legal Name
                  </dt>
                  <dd className="text-slate-900 font-bold text-[11px] mt-0.5 truncate" title="LILHAWKERS SPORTS MANAGEMENT PRIVATE LIMITED">
                    LILHAWKERS SPORTS MANAGEMENT PVT. LTD.
                  </dd>
                </div>

                <div className="pb-1.5 border-b border-slate-100">
                  <dt className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold">
                    CIN
                  </dt>
                  <dd className="font-mono text-[var(--color-primary)] font-bold text-[10px] mt-0.5">
                    U92419HR2019PTC083938
                  </dd>
                </div>

                <div className="pb-1.5 border-b border-slate-100">
                  <dt className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold">
                    Reg. Number
                  </dt>
                  <dd className="text-slate-900 font-mono font-medium text-[10px] mt-0.5">
                    83938
                  </dd>
                </div>

                <div>
                  <dt className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold">
                    Incorporated
                  </dt>
                  <dd className="text-slate-900 font-medium text-[10px] mt-0.5">
                    03 December 2019
                  </dd>
                </div>

                <div>
                  <dt className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold">
                    Category / Class
                  </dt>
                  <dd className="text-slate-900 font-medium text-[10px] mt-0.5 truncate">
                    Private Limited Company
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Legal Links */}
        <div className="py-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            &copy; {currentYear} Lilhawkers Sports Management Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-slate-600 font-medium">
            <Link
              href="/privacy"
              className="hover:text-[var(--color-primary)] transition-colors underline-offset-4 hover:underline"
              aria-label="View Privacy Policy"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-300" aria-hidden="true">&bull;</span>
            <Link
              href="/terms"
              className="hover:text-[var(--color-primary)] transition-colors underline-offset-4 hover:underline"
              aria-label="View Terms and Conditions"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
