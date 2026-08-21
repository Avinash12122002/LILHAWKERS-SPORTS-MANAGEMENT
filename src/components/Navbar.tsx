"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs & System" },
  { href: "/partners", label: "Partners & Why Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 py-2.5 shadow-lg shadow-black/40 border-b border-white/10"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Official Brand Logo */}
        <Link href="/" className="flex items-center gap-3.5 group relative z-50">
          <div className="relative w-14 h-14 sm:w-15 sm:h-15 rounded-2xl bg-white/[0.05] border border-white/15 p-1.5 flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:border-[var(--color-primary)]/50 group-hover:shadow-[0_0_25px_rgba(0,200,83,0.35)] shrink-0">
            <Image
              src="/icon.png"
              alt="Lilhawkers Emblem"
              width={56}
              height={56}
              className="w-full h-full object-contain drop-shadow-md"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-[var(--font-heading)] text-lg sm:text-xl font-black tracking-tight text-white group-hover:text-[var(--color-primary)] transition-colors leading-none">
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

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-[var(--color-text-secondary)] hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[var(--color-primary)] after:to-[var(--color-gradient-end)] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary text-sm">
            <span>Book Free Demo</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 active:scale-95 transition-transform"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <div className="flex flex-col gap-1.5 w-5">
            <span
              className={`block h-0.5 bg-white rounded-full transition-transform duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white rounded-full transition-opacity duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white rounded-full transition-transform duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Lightweight, High-Performance Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-[#070908] transition-all duration-300 flex flex-col justify-between p-6 pt-28 ${
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center flex-1 gap-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-[var(--font-heading)] font-bold text-white hover:text-[var(--color-primary)] transition-colors py-2 px-6 rounded-xl hover:bg-white/5 active:scale-95"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary text-base w-full max-w-xs mt-4 py-3.5 justify-center"
          >
            <span>Book Free Demo</span>
          </Link>
        </div>

        {/* Mobile Menu Footer Info */}
        <div className="pt-6 border-t border-white/10 text-center text-xs text-zinc-400 space-y-1">
          <p className="font-semibold text-white">Lilhawkers Sports Management</p>
          <p>📞 +91 81682 26462 &bull; ✉ info@lilhawkers.com</p>
        </div>
      </div>
    </nav>
  );
}
