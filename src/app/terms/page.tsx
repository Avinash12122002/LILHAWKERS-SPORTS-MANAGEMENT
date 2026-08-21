import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnerShowcaseMarquee from "@/components/PartnerShowcaseMarquee";

export const metadata: Metadata = {
  title: "Terms & Conditions | Lilhawkers Sports Management",
  description: "Terms and Conditions for Lilhawkers Sports Management Private Limited.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-dark)] text-[var(--color-text)]">
      <Navbar />

      <section className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-semibold">
          Legal
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold font-[var(--font-heading)] text-white mt-2 mb-8">
          Terms & Conditions
        </h1>

        <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-6 text-sm text-[var(--color-text-secondary)] leading-relaxed">
          <p>
            Welcome to the website of <strong>Lilhawkers Sports Management Private Limited</strong> (&quot;Lilhawkers&quot;). By accessing our website or requesting program demonstrations, you agree to comply with and be bound by the following terms.
          </p>

          <h2 className="text-lg font-bold text-white font-[var(--font-heading)] pt-4">
            1. Institutional Scope of Services
          </h2>
          <p>
            Lilhawkers provides B2B sports-program curriculum development, coach training, structured sports materials, and physical education management systems for private schools, sports clubs, sports training centres, and communities.
          </p>

          <h2 className="text-lg font-bold text-white font-[var(--font-heading)] pt-4">
            2. Demonstration Sessions
          </h2>
          <p>
            Free demonstration sessions requested through our website are subject to scheduling availability and geographic feasibility. Submitting a demo request does not create a binding service agreement until formal engagement terms are agreed upon in writing between Lilhawkers and the partner organisation.
          </p>

          <h2 className="text-lg font-bold text-white font-[var(--font-heading)] pt-4">
            3. Intellectual Property
          </h2>
          <p>
            All sports curriculum frameworks, six-stage developmental models, training manuals, pedagogical materials, logos, and website content are the exclusive intellectual property of Lilhawkers Sports Management Private Limited. Unauthorized duplication, redistribution, or resale is strictly prohibited.
          </p>

          <h2 className="text-lg font-bold text-white font-[var(--font-heading)] pt-4">
            4. Corporate Entity & Jurisdiction
          </h2>
          <p>
            Lilhawkers Sports Management Private Limited is incorporated under the Companies Act, 2013 (CIN: U92419HR2019PTC083938). Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the competent courts in Haryana, India.
          </p>

          <div className="pt-6 border-t border-white/5 text-xs text-white/50">
            Lilhawkers Sports Management Private Limited • CIN: U92419HR2019PTC083938 • Last Updated: August 2026
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
