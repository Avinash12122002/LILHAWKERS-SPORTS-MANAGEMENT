import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoForm from "@/components/DemoForm";
import PartnerShowcaseMarquee from "@/components/PartnerShowcaseMarquee";

export const metadata: Metadata = {
  title: "Book a Free Demo & Contact Us | Lilhawkers Sports Management",
  description: "Schedule a free demonstration sports development session for your school, club, sports training centre or community. Call +91 81682 26462 or visit our office in Bahadurgarh, Delhi NCR.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Navbar />

      {/* Top Banner & Quick Contacts */}
      <section className="pt-32 pb-6 relative overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-emerald-500/10 to-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-50 text-[var(--color-primary)] border border-emerald-200 mb-3">
              Institutional Partnership &amp; Enquiries
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[var(--font-heading)] text-slate-900 tracking-tight leading-tight">
              Let&apos;s Build the <span className="gradient-text">Pathway</span> Together
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Whether you are a private school, sports club, sports training centre, or community organiser, we would love to connect.
            </p>
          </div>

          {/* 4 Contact Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
            {/* Phone Card */}
            <div className="glass-card p-5 rounded-2xl border border-slate-200 bg-white text-center flex flex-col justify-between hover:border-[var(--color-primary)]/40 hover:shadow-lg transition-all group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[var(--color-primary)] flex items-center justify-center mx-auto mb-3 text-lg font-bold group-hover:scale-110 transition-transform shadow-xs">
                  📞
                </div>
                <h3 className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                  Call / WhatsApp
                </h3>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-100">
                <a
                  href="tel:+918168226462"
                  className="text-sm font-bold text-slate-900 hover:text-[var(--color-primary)] transition-colors block"
                >
                  +91 81682 26462
                </a>
                <span className="text-[10px] text-[var(--color-primary)] font-bold block mt-0.5">
                  Mon – Sat &bull; 9 AM – 7 PM
                </span>
              </div>
            </div>

            {/* Email Card */}
            <div className="glass-card p-5 rounded-2xl border border-slate-200 bg-white text-center flex flex-col justify-between hover:border-[var(--color-primary)]/40 hover:shadow-lg transition-all group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3 text-lg font-bold group-hover:scale-110 transition-transform shadow-xs">
                  ✉
                </div>
                <h3 className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                  Email Us
                </h3>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-100">
                <a
                  href="mailto:info@lilhawkers.com"
                  className="text-sm font-bold text-slate-900 hover:text-[var(--color-primary)] transition-colors block truncate"
                >
                  info@lilhawkers.com
                </a>
                <span className="text-[10px] text-slate-500 font-medium block mt-0.5">
                  Quick Institutional Support
                </span>
              </div>
            </div>

            {/* Office Address Card */}
            <div className="glass-card p-5 rounded-2xl border border-slate-200 bg-white text-center flex flex-col justify-between hover:border-[var(--color-primary)]/40 hover:shadow-lg transition-all group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mx-auto mb-3 text-lg font-bold group-hover:scale-110 transition-transform shadow-xs">
                  📍
                </div>
                <h3 className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                  Corporate Office
                </h3>
              </div>
              <div className="mt-2 pt-2 border-t border-slate-100 text-left">
                <p className="text-[11px] font-medium text-slate-700 leading-snug">
                  First Floor, Besides Sadar Thana, Delhi Rohtak Corridor, opp. Metro pillar no 830, Bahadurgarh, DELHI NCR 124507
                </p>
              </div>
            </div>

            {/* Registration Card */}
            <div className="glass-card p-5 rounded-2xl border border-slate-200 bg-white text-center flex flex-col justify-between hover:border-[var(--color-primary)]/40 hover:shadow-lg transition-all group">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-3 text-lg font-bold group-hover:scale-110 transition-transform shadow-xs">
                  🏛
                </div>
                <h3 className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                  Company Identity
                </h3>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-100">
                <p className="text-[11px] font-mono font-bold text-[var(--color-primary)]">
                  CIN: U92419HR2019PTC083938
                </p>
                <span className="text-[10px] text-slate-500 font-medium block mt-0.5">
                  MCA Verified Pvt. Ltd. (Est. 2019)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 22-Card Partner Showcase Marquee */}
      <section className="py-10 border-y border-slate-200 bg-slate-50/70 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-primary)] font-bold block">
            Institutional Deployments &bull; North India
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-[var(--font-heading)] mt-0.5">
            Partnered With Top Schools, Clubs &amp; Training Centres
          </h3>
        </div>

        <PartnerShowcaseMarquee />
      </section>

      {/* Main Full-Width Demo Form Section */}
      <DemoForm />

      <Footer />
    </main>
  );
}
