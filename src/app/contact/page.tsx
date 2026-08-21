import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoForm from "@/components/DemoForm";

export const metadata: Metadata = {
  title: "Book a Free Demo & Contact Us | Lilhawkers Sports Management",
  description: "Schedule a free demonstration sports development session for your school, club, sports training centre or community. Call +91 81682 26462 or visit our office in Bahadurgarh, Delhi NCR.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--color-dark)] text-[var(--color-text)]">
      <Navbar />

      {/* Top Banner & Quick Contacts */}
      <section className="pt-32 pb-6 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[var(--color-primary)]/15 to-[var(--color-gradient-end)]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 mb-3">
              Institutional Partnership & Enquiries
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[var(--font-heading)] text-white tracking-tight leading-tight">
              Let&apos;s Build the <span className="gradient-text">Pathway</span> Together
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
              Whether you are a private school, sports club, sports training centre, or community organiser, we would love to connect.
            </p>
          </div>

          {/* 4 Contact Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
            {/* Phone Card */}
            <div className="glass-card p-5 rounded-2xl border border-white/10 text-center flex flex-col justify-between hover:border-[var(--color-primary)]/40 transition-all group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/15 text-[var(--color-primary)] flex items-center justify-center mx-auto mb-3 text-lg font-bold group-hover:scale-110 transition-transform">
                  📞
                </div>
                <h3 className="text-xs uppercase tracking-wider text-[var(--color-text-secondary)] font-semibold">
                  Call / WhatsApp
                </h3>
              </div>
              <div className="mt-3 pt-2 border-t border-white/5">
                <a
                  href="tel:+918168226462"
                  className="text-sm font-bold text-white hover:text-[var(--color-primary)] transition-colors block"
                >
                  +91 81682 26462
                </a>
                <span className="text-[10px] text-[var(--color-primary)] font-medium block mt-0.5">
                  Mon – Sat &bull; 9 AM – 7 PM
                </span>
              </div>
            </div>

            {/* Email Card */}
            <div className="glass-card p-5 rounded-2xl border border-white/10 text-center flex flex-col justify-between hover:border-[var(--color-primary)]/40 transition-all group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center mx-auto mb-3 text-lg font-bold group-hover:scale-110 transition-transform">
                  ✉
                </div>
                <h3 className="text-xs uppercase tracking-wider text-[var(--color-text-secondary)] font-semibold">
                  Email Us
                </h3>
              </div>
              <div className="mt-3 pt-2 border-t border-white/5">
                <a
                  href="mailto:info@lilhawkers.com"
                  className="text-sm font-semibold text-white hover:text-[var(--color-primary)] transition-colors block truncate"
                >
                  info@lilhawkers.com
                </a>
                <span className="text-[10px] text-zinc-400 font-medium block mt-0.5">
                  Quick Institutional Support
                </span>
              </div>
            </div>

            {/* Office Address Card */}
            <div className="glass-card p-5 rounded-2xl border border-white/10 text-center flex flex-col justify-between hover:border-[var(--color-primary)]/40 transition-all group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[var(--color-gradient-end)]/15 text-[var(--color-gradient-end)] flex items-center justify-center mx-auto mb-3 text-lg font-bold group-hover:scale-110 transition-transform">
                  📍
                </div>
                <h3 className="text-xs uppercase tracking-wider text-[var(--color-text-secondary)] font-semibold">
                  Corporate Office
                </h3>
              </div>
              <div className="mt-2 pt-2 border-t border-white/5 text-left">
                <p className="text-[11px] font-medium text-white/90 leading-snug">
                  First Floor, Besides Sadar Thana, Delhi Rohtak Corridor, opp. Metro pillar no 830, Bahadurgarh, DELHI NCR 124507
                </p>
              </div>
            </div>

            {/* Registration Card */}
            <div className="glass-card p-5 rounded-2xl border border-white/10 text-center flex flex-col justify-between hover:border-[var(--color-primary)]/40 transition-all group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center mx-auto mb-3 text-lg font-bold group-hover:scale-110 transition-transform">
                  🏛
                </div>
                <h3 className="text-xs uppercase tracking-wider text-[var(--color-text-secondary)] font-semibold">
                  Company Identity
                </h3>
              </div>
              <div className="mt-3 pt-2 border-t border-white/5">
                <p className="text-[11px] font-mono font-bold text-[var(--color-primary)]">
                  CIN: U92419HR2019PTC083938
                </p>
                <span className="text-[10px] text-zinc-400 font-medium block mt-0.5">
                  MCA Verified Pvt. Ltd. (Est. 2019)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Full-Width Demo Form Section */}
      <DemoForm />

      <Footer />
    </main>
  );
}
