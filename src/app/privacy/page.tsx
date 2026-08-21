import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnerShowcaseMarquee from "@/components/PartnerShowcaseMarquee";

export const metadata: Metadata = {
  title: "Privacy Policy | Lilhawkers Sports Management",
  description: "Privacy Policy for Lilhawkers Sports Management Private Limited.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--color-dark)] text-[var(--color-text)]">
      <Navbar />

      <section className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">
          Legal
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-[var(--font-heading)] text-white mt-2 mb-8">
          Privacy Policy
        </h1>

        <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-6 text-sm text-[var(--color-text-secondary)] leading-relaxed">
          <p>
            This Privacy Policy describes how <strong>Lilhawkers Sports Management Private Limited</strong> (&quot;Lilhawkers&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and safeguards information collected through our website and institutional demo booking services.
          </p>

          <h2 className="text-lg font-bold text-white font-[var(--font-heading)] pt-4">
            1. Information We Collect
          </h2>
          <p>
            When you submit a demonstration booking or contact inquiry on behalf of an institution (such as a school, club, sports training centre, or community), we collect:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Organisation Name and Type</li>
            <li>Contact Person Name</li>
            <li>Official Phone Number and Email Address</li>
            <li>Target Age Group(s) of interest</li>
            <li>Preferred Location / City</li>
            <li>Any optional notes or program requirements provided in the message field</li>
          </ul>

          <h2 className="text-lg font-bold text-white font-[var(--font-heading)] pt-4">
            2. How We Use Your Information
          </h2>
          <p>
            The collected information is solely used to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Coordinate, schedule, and execute demonstration sports curriculum sessions.</li>
            <li>Communicate with institutional representatives regarding program structure and customized delivery proposals.</li>
            <li>Provide follow-up evaluation and customer support.</li>
          </ul>

          <h2 className="text-lg font-bold text-white font-[var(--font-heading)] pt-4">
            3. Data Protection and Security
          </h2>
          <p>
            We implement strict technical and organizational safeguards to protect institutional contact information against unauthorized access, loss, or disclosure. We do not sell, rent, or trade your contact information with third-party marketers.
          </p>

          <h2 className="text-lg font-bold text-white font-[var(--font-heading)] pt-4">
            4. Contact Information & Data Protection Office
          </h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to request data updates/removal, please contact us at:
          </p>
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5 text-xs">
            <p className="font-bold text-white">Lilhawkers Sports Management Private Limited</p>
            <p className="text-zinc-300">
              📍 <strong>Registered Office:</strong> First Floor, Besides Sadar Thana, Delhi Rohtak Corridor, opp. Metro pillar no 830, Bahadurgarh, DELHI NCR 124507
            </p>
            <p className="text-zinc-300">
              📞 <strong>Phone:</strong> <a href="tel:+918168226462" className="text-[var(--color-primary)] font-semibold hover:underline">+91 81682 26462</a>
            </p>
            <p className="text-zinc-300">
              ✉ <strong>Email:</strong> <a href="mailto:info@lilhawkers.com" className="text-[var(--color-primary)] font-semibold hover:underline">info@lilhawkers.com</a>
            </p>
            <p className="text-zinc-400 font-mono text-[11px] pt-1">
              CIN: U92419HR2019PTC083938 • Reg. No: 83938
            </p>
          </div>

          <div className="pt-4 border-t border-white/5 text-xs text-white/50">
            Lilhawkers Sports Management Private Limited • CIN: U92419HR2019PTC083938 • Incorporated 03 December 2019 • Last Updated: August 2026
          </div>
        </div>
      </section>

      {/* 22-Card Partner Showcase Marquee */}
      <section className="py-12 border-t border-white/5 bg-[#080a09] relative overflow-hidden">
        <PartnerShowcaseMarquee />
      </section>

      <Footer />
    </main>
  );
}
