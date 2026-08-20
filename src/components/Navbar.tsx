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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-xl py-2.5 shadow-lg shadow-black/40 border-b border-white/5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Official Brand Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span
              className={`block h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
            />
            <span
              className={`block h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""
                }`}
            />
            <span
              className={`block h-0.5 bg-white rounded transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-[var(--color-dark)]/95 backdrop-blur-xl transition-all duration-500 ${mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-[var(--font-heading)] font-semibold text-white hover:text-[var(--color-primary)] transition-all duration-300"
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary mt-4"
          >
            <span>Book Free Demo</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
