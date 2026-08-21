"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  {
    num: "01",
    href: "/about",
    label: "About Us",
    sub: "Philosophy, team & structured mission",
    icon: "🏛️",
  },
  {
    num: "02",
    href: "/programs",
    label: "Programs & System",
    sub: "4-stage physical development pipeline",
    icon: "⚡",
  },
  {
    num: "03",
    href: "/partners",
    label: "Partners & Why Us",
    sub: "Schools, clubs, centres & 22 showcases",
    icon: "🤝",
  },
  {
    num: "04",
    href: "/contact",
    label: "Contact & Demo",
    sub: "Schedule institutional presentation",
    icon: "📅",
  },
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
          ? "bg-white/95 backdrop-blur-md py-2.5 shadow-sm border-b border-slate-200/80"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Official Brand Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative w-13 h-13 sm:w-15 sm:h-15 rounded-2xl bg-white border border-slate-200/80 p-1.5 flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105 group-hover:border-[var(--color-primary)]/50 group-hover:shadow-[0_4px_20px_rgba(5,150,105,0.15)] shrink-0">
            <Image
              src="/icon.png"
              alt="Lilhawkers Emblem"
              width={56}
              height={56}
              className="w-full h-full object-contain drop-shadow-sm"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-[var(--font-heading)] text-lg sm:text-xl font-black tracking-tight text-slate-900 group-hover:text-[var(--color-primary)] transition-colors leading-none">
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

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.slice(0, 3).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-primary)] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary text-sm">
            <span>Book Free Demo</span>
          </Link>
        </div>

        {/* Mobile Modern Hamburger Trigger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden relative w-11 h-11 flex items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-800 active:scale-95 transition-all hover:bg-slate-50 shadow-sm"
          aria-label="Open Navigation Menu"
          aria-expanded={mobileOpen}
        >
          <div className="flex flex-col items-end gap-1.5 w-5">
            <span className="block h-0.5 w-5 bg-slate-800 rounded-full transition-all" />
            <span className="block h-0.5 w-3.5 bg-[var(--color-primary)] rounded-full transition-all" />
            <span className="block h-0.5 w-5 bg-slate-800 rounded-full transition-all" />
          </div>
        </button>
      </div>

      {/* Mobile Drawer Backdrop Overlay */}
      <div
        onClick={() => setMobileOpen(false)}
        className={`lg:hidden fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Premium Slide-over Drawer (Right Side) */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-50 w-[88vw] max-w-[360px] bg-white border-l border-slate-200 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out transform ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 p-1 flex items-center justify-center">
              <Image src="/icon.png" alt="Logo" width={28} height={28} className="object-contain" />
            </div>
            <div>
              <span className="font-bold text-slate-900 text-xs block leading-none">LILHAWKERS</span>
              <span className="text-[8px] text-[var(--color-primary)] font-bold uppercase tracking-wider block mt-0.5">
                Sports Management
              </span>
            </div>
          </div>

          <button
            onClick={() => setMobileOpen(false)}
            className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-200 flex items-center justify-center text-sm font-bold active:scale-95 transition-all"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <div className="p-4 flex-1 overflow-y-auto space-y-2">
          <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[var(--color-primary)] px-2 block mb-2">
            Navigation Menu
          </span>

          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-[var(--color-primary)]/40 hover:bg-emerald-50/50 active:scale-[0.98] transition-all group"
            >
              <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-sm shrink-0 group-hover:scale-110 transition-transform shadow-xs">
                {item.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[var(--color-primary)] transition-colors">
                    {item.label}
                  </h4>
                  <span className="text-[9px] font-mono text-slate-400 font-bold">
                    {item.num}
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 truncate mt-0.5">
                  {item.sub}
                </p>
              </div>
            </Link>
          ))}

          {/* Primary CTA in Drawer */}
          <div className="pt-3">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary text-xs w-full py-3 justify-center shadow-md shadow-[var(--color-primary)]/20"
            >
              <span>Book Free Demo Session →</span>
            </Link>
          </div>
        </div>

        {/* Drawer Footer Contact Bar */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/70 space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-slate-500 uppercase font-semibold">WhatsApp</span>
            <a
              href="tel:+918168226462"
              className="font-bold text-slate-900 hover:text-[var(--color-primary)] transition-colors text-[11px]"
            >
              +91 81682 26462
            </a>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-slate-500 uppercase font-semibold">Calling Line</span>
            <a
              href="tel:+918950546462"
              className="font-bold text-slate-900 hover:text-[var(--color-primary)] transition-colors text-[11px]"
            >
              +91 89505 46462
            </a>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-slate-500 uppercase font-semibold">Email</span>
            <a
              href="mailto:info@lilhawkers.com"
              className="text-slate-600 hover:text-slate-900 transition-colors text-[11px]"
            >
              info@lilhawkers.com
            </a>
          </div>
          <div className="pt-1 text-[9px] text-slate-400 text-center leading-tight">
            Bahadurgarh, Delhi NCR 124507 &bull; Reg. 2019
          </div>
        </div>
      </div>
    </nav>
  );
}
