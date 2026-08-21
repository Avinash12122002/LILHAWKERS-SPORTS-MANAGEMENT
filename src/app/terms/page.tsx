import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnerShowcaseMarquee from "@/components/PartnerShowcaseMarquee";

export const metadata: Metadata = {
  title: "Terms & Conditions | Lilhawkers Sports Management Pvt. Ltd.",
  description: "Official Terms and Conditions governing the use of Lilhawkers Sports Management website, demonstration booking requests, curriculum delivery frameworks, and institutional B2B partnerships.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <Navbar />

      <section className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs uppercase tracking-widest text-[var(--color-primary)] font-bold">
            Institutional Agreement &amp; Website Use
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-[var(--font-heading)] text-slate-900 mt-2">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Effective Date: August 2026 &bull; Lilhawkers Sports Management Private Limited (CIN: U92419HR2019PTC083938)
          </p>
        </div>

        <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-200 bg-white space-y-8 text-sm text-slate-600 leading-relaxed shadow-xl">
          {/* Preamble */}
          <div className="space-y-3 pb-6 border-b border-slate-100">
            <p>
              Welcome to the official portal of <strong className="text-slate-900">Lilhawkers Sports Management Private Limited</strong> (&quot;Lilhawkers&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement between you—whether individually or as an authorized representative of a school, educational institution, sports club, training academy, or community body (&quot;Partner&quot;, &quot;Client&quot;, &quot;Institution&quot;, or &quot;User&quot;)—and Lilhawkers Sports Management Pvt. Ltd.
            </p>
            <p>
              By accessing our website (<a href="https://lilhawkers.com" className="text-[var(--color-primary)] font-bold hover:underline">https://lilhawkers.com</a>), requesting a demonstration curriculum session, or engaging in any institutional collaboration, you acknowledge that you have read, understood, and agreed to be bound by these Terms.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-[var(--font-heading)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">1.</span> Scope of Institutional B2B Services
            </h2>
            <p>
              Lilhawkers operates as a specialized sports management, physical education curriculum development, and athletic coaching company. Our services include, but are not limited to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Comprehensive K–12 physical literacy and structured progressive sports curricula.</li>
              <li>Deployment of certified, background-verified sports coaches, physical educators, and program managers.</li>
              <li>Six-stage lifelong physical development systems across Foundation, Primary, Teens, Adult, Longevity, and Vitality cohorts.</li>
              <li>Adaptive athletic evaluations, functional movement screenings (FMS), and student fitness report generation.</li>
              <li>Sports tournament organisation, grassroots leagues, equipment provisioning, and facility management consulting.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-[var(--font-heading)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">2.</span> Demonstration Bookings &amp; Service Engagement
            </h2>
            <p>
              Free demonstration sessions requested through our website allow institutions to experience our coaching methodology and curriculum delivery firsthand:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong className="text-slate-900">Scheduling &amp; Feasibility:</strong> Demonstration requests are subject to coach availability, institutional verification, and geographic feasibility. Submission of a form does not guarantee immediate scheduling.
              </li>
              <li>
                <strong className="text-slate-900">Non-Binding Nature:</strong> A demonstration request or on-ground trial does not constitute a full service contract. Formal implementation requires the execution of a separate written Service Level Agreement (SLA) or Memorandum of Understanding (MOU) outlining commercial terms, scope, and duration.
              </li>
              <li>
                <strong className="text-slate-900">Authority to Book:</strong> The individual submitting a demo request warrants that they have the requisite authority from their respective institution to invite Lilhawkers personnel onto the premises.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-[var(--font-heading)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">3.</span> Participant Health, Safety &amp; On-Ground Supervision
            </h2>
            <p>
              The health, well-being, and physical safety of all participants are paramount:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong className="text-slate-900">Physical Suitability:</strong> The Partner Institution is responsible for ensuring that all participating students or athletes are physically fit to engage in structured sports activities and have cleared applicable internal medical checks.
              </li>
              <li>
                <strong className="text-slate-900">Institutional Faculty Presence:</strong> Partner institutions must ensure that a designated teacher, sports coordinator, or authorized staff member is present during on-campus training sessions.
              </li>
              <li>
                <strong className="text-slate-900">Safety Protocols:</strong> Lilhawkers instructors adhere strictly to age-appropriate progressive warmups, injury-prevention drills, and hydration intervals.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-[var(--font-heading)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">4.</span> Proprietary Intellectual Property Rights
            </h2>
            <p>
              All materials, frameworks, lesson plans, visual emblems, software, and pedagogical content are the exclusive intellectual property of Lilhawkers Sports Management Private Limited:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong className="text-slate-900">Curriculum Frameworks:</strong> The Six-Stage Development Matrix, 7-Step Delivery System, drill cards, and training manuals are protected under Indian Copyright and Trademark laws.
              </li>
              <li>
                <strong className="text-slate-900">Prohibited Actions:</strong> Partner institutions and users may not copy, reverse-engineer, record, publish, distribute, or commercially exploit Lilhawkers pedagogical materials to third parties without prior written consent.
              </li>
              <li>
                <strong className="text-slate-900">Trademarks:</strong> &quot;LILHAWKERS&quot;, the Lilhawkers emblem, and &quot;Learn &bull; Play &bull; Grow&quot; are proprietary trademarks of the Company.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-[var(--font-heading)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">5.</span> Limitation of Liability &amp; Force Majeure
            </h2>
            <p>
              To the maximum extent permitted by applicable Indian law:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                Lilhawkers shall not be liable for any indirect, incidental, punitive, or consequential damages resulting from website unavailability, server interruptions, or third-party telecommunication failures.
              </li>
              <li>
                Neither party shall be held liable for delays or non-performance caused by circumstances beyond reasonable control, including adverse weather events, natural disasters, epidemics, government orders, civic strikes, or facility closures (Force Majeure).
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 font-[var(--font-heading)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">6.</span> Governing Law &amp; Dispute Resolution
            </h2>
            <p>
              These Terms shall be governed by, construed, and enforced in accordance with the laws of the <strong>Republic of India</strong>.
            </p>
            <p>
              Any disputes, controversies, or claims arising out of or in connection with these Terms, website usage, or commercial engagements shall first be resolved through good-faith mutual negotiations. If unresolved, they shall be subject to the exclusive jurisdiction of the competent courts in <strong>Haryana / Delhi NCR, India</strong>.
            </p>
          </div>

          {/* Section 7 */}
          <div className="space-y-3 pt-2">
            <h2 className="text-lg font-bold text-slate-900 font-[var(--font-heading)] flex items-center gap-2">
              <span className="text-[var(--color-primary)]">7.</span> Corporate Identity &amp; Official Communications
            </h2>
            <p>
              For formal legal notices, institutional inquiries, or contractual communication, please reach our registered office:
            </p>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-700">
              <p className="font-bold text-slate-900 text-sm">
                Lilhawkers Sports Management Private Limited
              </p>
              <p>
                🏢 <strong>Corporate Identity Number (CIN):</strong> <span className="font-mono text-[var(--color-primary)] font-bold">U92419HR2019PTC083938</span> (Registration No: 83938)
              </p>
              <p>
                📍 <strong>Registered Office:</strong> First Floor, Besides Sadar Thana, Delhi Rohtak Corridor, opp. Metro pillar no 830, Bahadurgarh, DELHI NCR 124507
              </p>
              <p>
                📞 <strong>Direct Phone:</strong> <a href="tel:+918168226462" className="text-slate-900 font-bold hover:text-[var(--color-primary)] transition-colors">+91 81682 26462</a> (WhatsApp) &bull; <a href="tel:+918950546462" className="text-slate-900 font-bold hover:text-[var(--color-primary)] transition-colors">+91 89505 46462</a> (Calling Helpline)
              </p>
              <p>
                ✉ <strong>Official Correspondence:</strong> <a href="mailto:info@lilhawkers.com" className="text-slate-900 font-bold hover:text-[var(--color-primary)] transition-colors">info@lilhawkers.com</a>
              </p>
              <p className="text-[10px] text-slate-500 pt-1">
                Incorporated under the Companies Act, 2013 &bull; Registered with Registrar of Companies (RoC-Delhi/Haryana)
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
