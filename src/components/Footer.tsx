import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-black/40">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      {/* Pre-footer Callout: Let's Build Your Sports Program */}
      <div className="border-b border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="glass-card rounded-2xl p-8 sm:p-10 border border-white/10 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-[var(--font-heading)] text-white mb-3">
              Let&apos;s Build Your <span className="gradient-text">Sports Program</span>
            </h3>
            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-6 leading-relaxed">
              Whether you&apos;re a school looking to strengthen your sports curriculum, a club building a junior pathway, or a community organisation wanting to get more children active — we&apos;d like to understand your goals and show you how a Lilhawkers program could work for you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                <span>Book a Free Demo Session</span>
              </Link>
              <a
                href="mailto:info@lilhawkers.com"
                className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white text-sm font-semibold border border-white/10 transition-colors"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-gradient-end)] flex items-center justify-center font-bold text-black text-lg">
                LH
              </div>
              <div>
                <p className="font-[var(--font-heading)] text-base font-bold text-white">
                  LILHAWKERS
                </p>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
                  Sports Management
                </p>
              </div>
            </Link>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
              Structured Sports Development for Every Stage of Growth.
            </p>
            <p className="text-xs text-[var(--color-text-secondary)]/60 font-mono">
              CIN: U92419HR2019PTC083938
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[var(--font-heading)] text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/programs", label: "3-Stage Programs" },
                { href: "/#approach", label: "Our Approach" },
                { href: "/#how-it-works", label: "How It Works" },
                { href: "/#partners", label: "Who We Partner With" },
                { href: "/#why-us", label: "Why Lilhawkers" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-[var(--font-heading)] text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Development Stages
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Stage 01: Foundation (Pre-Primary)", href: "/programs" },
                { label: "Stage 02: Development (Primary)", href: "/programs" },
                { label: "Stage 03: Performance (Secondary)", href: "/programs" },
                { label: "Custom Institutional Modules", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Demo */}
          <div>
            <h4 className="font-[var(--font-heading)] text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[var(--color-text-secondary)]">
              <div className="flex items-center gap-2.5">
                <span className="text-[var(--color-primary)]">✉</span>
                <span>info@lilhawkers.com</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-[var(--color-primary)]">📍</span>
                <span>Haryana, India</span>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-6 text-sm font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors"
            >
              Book a Free Demo Session →
            </Link>
          </div>
        </div>

        {/* Bottom Bar with Legal Links */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-[var(--color-text-secondary)]/60 text-center sm:text-left">
            © {currentYear} Lilhawkers Sports Management Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-[var(--color-text-secondary)]/70">
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
