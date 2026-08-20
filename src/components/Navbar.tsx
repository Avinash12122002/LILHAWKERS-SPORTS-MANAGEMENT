"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#approach", label: "Approach" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#partners", label: "Partners" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/programs", label: "Programs" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-xl py-3 shadow-lg shadow-black/40 border-b border-white/5"
          : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-gradient-end)] flex items-center justify-center font-bold text-black text-lg transition-transform group-hover:scale-110 group-hover:rotate-3">
            LH
          </div>
          <div className="flex flex-col">
            <span className="font-[var(--font-heading)] text-lg font-bold tracking-tight text-white">
              LILHAWKERS
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)] leading-none">
              Sports Management
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
