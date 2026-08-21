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
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Navbar />

      <section className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-bold">
            Corporate Governance &amp; Data Protection
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[var(--font-heading)] text-slate-900 mt-2">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Effective Date: August 2026 &bull; Lilhawkers Sports Management Private Limited (CIN: U92419HR2019PTC083938)
          </p>
        </div>

        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-200 bg-white space-y-8 text-sm text-slate-600 leading-relaxed shadow-xl">
          {/* Preamble */}
          <div className="space-y-3 pb-6 border-b border-slate-100">
            <p>
              <strong className="text-slate-900">Lilhawkers Sports Management Private Limited</strong> (&quot;Lilhawkers&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to respecting and protecting the privacy and personal data of institutional representatives, school leaders, club administrators, community directors, and website visitors.
            </p>
            <p>
              This Privacy Policy explains how we collect, process, store, and safeguard institutional and personal information when you access our website (<a href="https://lilhawkers.com" className="text-[var(--color-primary)] font-bold hover:underline">https://lilhawkers.com</a>), submit a demonstration booking request, or engage in institutional partnerships. We comply with applicable Indian laws, including the <strong>Information Technology Act, 2000</strong>, the <strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong>, and the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-[var(--font-heading)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">1.</span> Information We Collect
            </h2>
            <p>
              We collect information strictly necessary to communicate, schedule on-ground sports demonstrations, and deliver tailored sports education systems:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-slate-900">Institutional Details:</strong> Organisation name, organisation category (Private School, Sports Club, Sports Training Centre, Community Organisation), campus location/city, and sports infrastructure facilities.
              </li>
              <li>
                <strong className="text-slate-900">Authorized Contact Person:</strong> Full name, official designation/role (e.g., Principal, Sports Director, Trustee, Secretary), verified mobile telephone number, and official email address.
              </li>
              <li>
                <strong className="text-slate-900">Program Scope Requirements:</strong> Selected target developmental age-stages (Foundation 3–6 yrs, Primary 7–12 yrs, Teens 13–20 yrs, Adult 20–35 yrs, Longevity 35–60 yrs, Vitality 60+ yrs), cohort size estimates, and custom requirements stated in the inquiry note.
              </li>
              <li>
                <strong className="text-slate-900">Technical &amp; Log Data:</strong> Standard server logs, IP addresses, browser types, and device telemetry automatically captured to ensure website security, load balancing, and form delivery integrity.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-[var(--font-heading)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">2.</span> Purpose and Legal Basis for Processing
            </h2>
            <p>
              Lilhawkers processes collected information solely for legitimate B2B sports management operations:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Facilitating direct communication with educational institutions, sports academies, and residential communities.</li>
              <li>Scheduling, confirming, and conducting on-campus free demonstration sessions by certified coaches.</li>
              <li>Drafting customized athletic curricula, staffing plans, and commercial proposals based on institutional needs.</li>
              <li>Providing ongoing student progress reports, athletic evaluations, and curriculum updates under active institutional service agreements.</li>
              <li>Ensuring compliance with statutory, accounting, tax, and corporate filing obligations under Indian law.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-[var(--font-heading)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">3.</span> Minor &amp; Student Athlete Data Safeguards
            </h2>
            <p>
              Our public website is strictly intended for institutional representatives, administrators, coaches, educators, and adult participants. We do not knowingly solicit or collect personal identifiable information directly from minors (children under the age of 18) via our online portal.
            </p>
            <p>
              During on-ground school and club deployments, all student athletic assessments, fitness index cards, and progress metrics are conducted strictly with the consent and oversight of the respective partner institution or parental guardians, adhering to strict data confidentiality and child safety standards.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-[var(--font-heading)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">4.</span> Non-Disclosure &amp; Information Sharing Policy
            </h2>
            <p>
              Lilhawkers maintains a zero-tolerance policy against commercial data trading:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>We <strong className="text-slate-900">never sell, rent, lease, or trade</strong> institutional contact lists or inquiry data with third-party marketing agencies, advertisers, or telemarketers.</li>
              <li>Information is accessed strictly by authorized Lilhawkers curriculum directors, operations managers, and assigned senior coaching staff on a need-to-know basis.</li>
              <li>Data may be disclosed only when mandatory under applicable Indian legal processes, court orders, or official regulatory requests by lawful authorities.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-[var(--font-heading)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">5.</span> Data Security &amp; Encryption Architecture
            </h2>
            <p>
              We implement industry-standard administrative, physical, and technical safeguards:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>All web traffic and form submissions are encrypted in transit using 256-bit TLS/SSL encryption.</li>
              <li>Demo submissions and administrative databases are hosted in secure, isolated cloud clusters with multi-layered authentication and role-based access control (RBAC).</li>
              <li>Routine security audits, vulnerability assessments, and strict session management protect against unauthorized access.</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-[var(--font-heading)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">6.</span> Data Retention &amp; Institutional Rights
            </h2>
            <p>
              We retain institutional inquiry data for as long as necessary to service your request or fulfill active contract terms. You hold the right to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Request access to the contact information on file for your institution.</li>
              <li>Request correction or rectification of outdated contact person or facility details.</li>
              <li>Request permanent deletion of your inquiry record from our active outreach database by writing to <a href="mailto:info@lilhawkers.com" className="text-[var(--color-primary)] font-bold hover:underline">info@lilhawkers.com</a>.</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="space-y-3 pt-2">
            <h2 className="text-lg font-bold text-slate-900 font-[var(--font-heading)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">7.</span> Grievance Redressal &amp; Corporate Desk
            </h2>
            <p>
              For privacy-related inquiries, data requests, or formal communications, please contact our designated corporate desk:
            </p>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700">
              <p className="font-bold text-slate-900 text-sm">
                Lilhawkers Sports Management Private Limited
              </p>
              <p>
                🏢 <strong>CIN:</strong> <span className="font-mono text-[var(--color-primary)] font-bold">U92419HR2019PTC083938</span> (Registration No: 83938)
              </p>
              <p>
                📍 <strong>Registered Office:</strong> First Floor, Besides Sadar Thana, Delhi Rohtak Corridor, opp. Metro pillar no 830, Bahadurgarh, DELHI NCR 124507
              </p>
              <p>
                📞 <strong>Direct Phone:</strong> <a href="tel:+918168226462" className="text-slate-900 font-bold hover:text-[var(--color-primary)] transition-colors">+91 81682 26462</a>
              </p>
              <p>
                ✉ <strong>Email:</strong> <a href="mailto:info@lilhawkers.com" className="text-slate-900 font-bold hover:text-[var(--color-primary)] transition-colors">info@lilhawkers.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 22-Card Partner Showcase Marquee */}
      <section className="py-12 border-t border-slate-200 bg-slate-50 relative overflow-hidden">
        <PartnerShowcaseMarquee />
      </section>

      <Footer />
    </main>
  );
}
