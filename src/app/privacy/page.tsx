import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnerShowcaseMarquee from "@/components/PartnerShowcaseMarquee";

export const metadata: Metadata = {
  title: "Privacy Policy | Lilhawkers Sports Management Pvt. Ltd.",
  description: "Official Privacy Policy of Lilhawkers Sports Management Private Limited — outlining data protection, institutional partner confidentiality, student safety safeguards, and DPDP compliance.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[var(--color-dark)] text-[var(--color-text)]">
      <Navbar />

      <section className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-bold">
            Corporate Governance &amp; Data Protection
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[var(--font-heading)] text-white mt-2">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] mt-2">
            Effective Date: August 2026 &bull; Lilhawkers Sports Management Private Limited (CIN: U92419HR2019PTC083938)
          </p>
        </div>

        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/10 space-y-8 text-sm text-[var(--color-text-secondary)] leading-relaxed shadow-2xl">
          {/* Preamble */}
          <div className="space-y-3 pb-6 border-b border-white/10">
            <p>
              <strong>Lilhawkers Sports Management Private Limited</strong> (&quot;Lilhawkers&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to respecting and protecting the privacy and personal data of institutional representatives, school leaders, club administrators, community directors, and website visitors.
            </p>
            <p>
              This Privacy Policy explains how we collect, process, store, and safeguard institutional and personal information when you access our website (<a href="https://lilhawkers.com" className="text-[var(--color-primary)] hover:underline">https://lilhawkers.com</a>), submit a demonstration booking request, or engage in institutional partnerships. We comply with applicable Indian laws, including the <strong>Information Technology Act, 2000</strong>, the <strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong>, and the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white font-[var(--font-heading)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">1.</span> Information We Collect
            </h2>
            <p>
              We collect information strictly necessary to communicate, schedule on-ground sports demonstrations, and deliver tailored sports education systems:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-white">Institutional Details:</strong> Organisation name, organisation category (Private School, Sports Club, Sports Training Centre, Community Organisation), campus location/city, and sports infrastructure facilities.
              </li>
              <li>
                <strong className="text-white">Authorized Contact Person:</strong> Full name, official designation/role (e.g., Principal, Sports Director, Trustee, Secretary), verified mobile telephone number, and official email address.
              </li>
              <li>
                <strong className="text-white">Program Scope Requirements:</strong> Selected target developmental age-stages (Foundation 3–6 yrs, Primary 7–12 yrs, Teens 13–20 yrs, Adult 20–35 yrs, Longevity 35–60 yrs, Vitality 60+ yrs), cohort size estimates, and custom requirements stated in the inquiry note.
              </li>
              <li>
                <strong className="text-white">Technical &amp; Log Data:</strong> Standard server logs, IP addresses, browser types, and device telemetry automatically captured to ensure website security, load balancing, and form delivery integrity.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white font-[var(--font-heading)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">2.</span> Purpose and Legal Basis of Data Use
            </h2>
            <p>
              The information you provide is processed exclusively for legitimate business and sports education delivery purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>To evaluate, schedule, and execute introductory sports curriculum demonstrations at your institutional premises.</li>
              <li>To prepare customized sports management proposals, physical literacy frameworks, and operational fee estimates.</li>
              <li>To assign certified sports coaches, coordinators, and sports science evaluators to your institution.</li>
              <li>To provide ongoing administrative support, curriculum evaluation reports, and operational notices.</li>
              <li>To verify the authenticity of institutional inquiries and prevent automated spam or fraudulent submissions.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white font-[var(--font-heading)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">3.</span> Minor &amp; Student Athlete Data Safeguards
            </h2>
            <p>
              Our website is strictly intended for institutional representatives, administrators, coaches, and adult decision-makers. We do not knowingly solicit or collect personal identifiable information directly from children under 18 years of age through our website forms.
            </p>
            <p>
              During on-ground physical demonstrations or curriculum implementations at partner schools and academies, all student participation is conducted under the direct supervision of institutional faculty and parental consent obtained through the respective school or club. Any physical fitness metrics or biomechanical evaluations generated during training remain confidential to the institution and the participant&apos;s legal guardians.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white font-[var(--font-heading)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">4.</span> Non-Disclosure &amp; Information Sharing Policy
            </h2>
            <p>
              <strong className="text-white">We never sell, rent, lease, or monetize your contact or institutional information to third-party advertisers or telemarketers.</strong>
            </p>
            <p>Information may only be disclosed under the following strictly controlled circumstances:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong className="text-white">Internal Operations:</strong> To our authorized coaches, operations directors, and curriculum coordinators who need the data to conduct your demo or manage your sports program.
              </li>
              <li>
                <strong className="text-white">Technical Infrastructure:</strong> To trusted cloud infrastructure providers (e.g., MongoDB Atlas, Vercel) bound by strict confidentiality and data protection agreements.
              </li>
              <li>
                <strong className="text-white">Statutory &amp; Legal Compliance:</strong> If mandated by law, court order, regulatory requirement, or government authority under Indian jurisdiction.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white font-[var(--font-heading)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">5.</span> Data Security &amp; Storage Architecture
            </h2>
            <p>
              We maintain rigorous technical, administrative, and physical security safeguards to prevent unauthorized access, alteration, disclosure, or destruction of stored data:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>All web traffic is encrypted end-to-end using <strong>256-bit TLS/SSL encryption (HTTPS)</strong>.</li>
              <li>Database records are stored in secure cloud clusters with role-based access control (RBAC), environment isolation, and at-rest encryption.</li>
              <li>Administrative dashboard access requires encrypted authentication and session token verification.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-white font-[var(--font-heading)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">6.</span> Data Retention &amp; Institutional Rights
            </h2>
            <p>
              We retain institutional demo requests and partnership records for as long as necessary to maintain active service relationships and comply with statutory corporate, accounting, and tax obligations under the Companies Act, 2013.
            </p>
            <p>
              Institutional representatives retain the right to review, update, rectify, or request the deletion of their contact records from our active prospective database by sending an email to <a href="mailto:info@lilhawkers.com" className="text-[var(--color-primary)] font-semibold hover:underline">info@lilhawkers.com</a>.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-3 pt-2">
            <h2 className="text-lg font-bold text-white font-[var(--font-heading)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">7.</span> Grievance Officer &amp; Corporate Contact
            </h2>
            <p>
              In accordance with the Information Technology Act, 2000 and rules made thereunder, any privacy queries, grievance notices, or data-handling questions may be directed to our Corporate Data Desk:
            </p>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs text-zinc-300">
              <p className="font-bold text-white text-sm">
                Lilhawkers Sports Management Private Limited
              </p>
              <p>
                🏢 <strong>Corporate Identity Number (CIN):</strong> <span className="font-mono text-[var(--color-primary)] font-bold">U92419HR2019PTC083938</span> (Reg. No: 83938)
              </p>
              <p>
                📍 <strong>Registered Office:</strong> First Floor, Besides Sadar Thana, Delhi Rohtak Corridor, opp. Metro pillar no 830, Bahadurgarh, DELHI NCR 124507
              </p>
              <p>
                📞 <strong>Direct Phone / WhatsApp:</strong> <a href="tel:+918168226462" className="text-white font-bold hover:text-[var(--color-primary)] transition-colors">+91 81682 26462</a>
              </p>
              <p>
                ✉ <strong>Official Correspondence:</strong> <a href="mailto:info@lilhawkers.com" className="text-white font-bold hover:text-[var(--color-primary)] transition-colors">info@lilhawkers.com</a>
              </p>
              <p className="text-[10px] text-zinc-500 pt-1">
                Incorporated under the Companies Act, 2013 &bull; Registered Registrar of Companies: RoC-Delhi/Haryana
              </p>
            </div>
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
