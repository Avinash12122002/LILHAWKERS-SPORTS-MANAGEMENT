"use client";

import { useState } from "react";
import RevealWrapper from "./RevealWrapper";

const ageGroups = [
  "Foundation (3-6 yrs)",
  "Exposure (7-9 yrs)",
  "Skill Development (10-12 yrs)",
  "Sport-Specific (13-16 yrs)",
  "Competitive & Beyond (17+ yrs)",
];

const orgTypes = [
  "Private School",
  "Sports Club",
  "Sports Training Centre",
  "Community Organisation",
  "Other",
];

export default function DemoForm() {
  const [formData, setFormData] = useState({
    organisationName: "",
    organisationType: "",
    contactName: "",
    phone: "",
    email: "",
    ageGroups: [] as string[],
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ageGroupError, setAgeGroupError] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    // Contact name: only allow letters, spaces, and dots
    if (name === "contactName") {
      const filtered = value.replace(/[^a-zA-Z\s.]/g, "");
      setFormData((prev) => ({ ...prev, [name]: filtered }));
      return;
    }

    // Phone: only allow digits, spaces, hyphens, and leading +
    if (name === "phone") {
      const filtered = value.replace(/[^0-9+\s-]/g, "");
      setFormData((prev) => ({ ...prev, [name]: filtered }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAgeGroup = (group: string) => {
    setAgeGroupError(false);
    setFormData((prev) => {
      const exists = prev.ageGroups.includes(group);
      return {
        ...prev,
        ageGroups: exists
          ? prev.ageGroups.filter((g) => g !== group)
          : [...prev.ageGroups, group],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    // Validate at least one age group is selected
    if (formData.ageGroups.length === 0) {
      setAgeGroupError(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const contentType = res.headers.get("content-type") || "";
      if (!contentType.includes("application/json")) {
        throw new Error("Unable to connect to the demo registration server. Please verify your internet connection or contact us directly at contact@lilhawkers.com.");
      }

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.error || "Failed to submit demo request.");
      }

      setSubmissionId(result.submissionId || null);
      setSubmitted(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setServerError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="demo" className="section-padding relative overflow-hidden bg-slate-50/80">
        <div className="max-w-2xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-slate-200 bg-white shadow-xl">
            <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-6 shadow-xs">
              <svg
                className="w-10 h-10 text-[var(--color-primary)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="font-[var(--font-heading)] text-2xl font-extrabold text-slate-900 mb-3">
              Demo Request Submitted!
            </h3>
            {submissionId && (
              <div className="inline-block px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-[var(--color-primary)] mb-4">
                Reference ID: {submissionId.replace(/^(DEMO-|LH-)/, "")}
              </div>
            )}
            <p className="text-slate-600 mb-6 leading-relaxed text-sm">
              Thank you for your interest. Our team will reach out to you within
              24 hours to schedule your free demo session.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setSubmissionId(null);
                setFormData({
                  organisationName: "",
                  organisationType: "",
                  contactName: "",
                  phone: "",
                  email: "",
                  ageGroups: [],
                  location: "",
                  message: "",
                });
              }}
              className="btn-outline text-sm"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <RevealWrapper>
      <section
        id="demo"
        className="section-padding relative overflow-hidden bg-slate-50/70 border-t border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Info */}
            <div className="reveal-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-primary)]">
                  See It For Yourself
                </span>
              </div>

              <h2 className="font-[var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 text-slate-900">
                Book a{" "}
                <span className="gradient-text">Free Demo</span>{" "}
                Session
              </h2>

              <p className="text-slate-600 leading-relaxed mb-8 text-base">
                The best way to understand a Lilhawkers program is to see it in
                action. We conduct free demonstration sessions for schools,
                clubs, training centres and community organisations — showing
                you exactly what a program looks like for your
                participants&apos; age group, which skills it develops, how it
                progresses, and how we measure results.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "See the program in action for your age group",
                  "Understand which skills it develops",
                  "Learn how progression works",
                  "See how we measure results",
                  "No obligation — just a clear look at what structured sports development looks like",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-[var(--color-primary)]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="glass-card rounded-2xl p-6 border border-slate-200 bg-white shadow-xs">
                <p className="text-sm text-slate-600 italic">
                  &ldquo;There&apos;s no obligation — just a clear look at what
                  structured sports development actually looks like, delivered
                  for your organisation.&rdquo;
                </p>
              </div>
            </div>

            {/* Right - Form */}
            <div className="reveal-right">
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-3xl p-6 sm:p-9 space-y-5 border border-slate-200 bg-white shadow-xl"
              >
                <h3 className="font-[var(--font-heading)] text-xl font-bold text-slate-900 mb-2">
                  Demo Request Form
                </h3>

                {serverError && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
                    <svg className="w-4 h-4 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">{serverError}</span>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="organisationName"
                    id="organisationName-label"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                  >
                    Organisation Name *
                  </label>
                  <input
                    id="organisationName"
                    type="text"
                    name="organisationName"
                    aria-labelledby="organisationName-label"
                    aria-required="true"
                    value={formData.organisationName}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter your organisation name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="organisationType"
                    id="organisationType-label"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                  >
                    Organisation Type *
                  </label>
                  <select
                    id="organisationType"
                    name="organisationType"
                    aria-label="Organisation Type"
                    aria-labelledby="organisationType-label"
                    aria-required="true"
                    value={formData.organisationType}
                    onChange={handleChange}
                    required
                    className="form-input appearance-none cursor-pointer bg-white text-slate-900"
                  >
                    <option value="" disabled>
                      Select type
                    </option>
                    {orgTypes.map((type) => (
                      <option key={type} value={type} className="bg-white text-slate-900">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contactName"
                      id="contactName-label"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Contact Person *
                    </label>
                    <input
                      id="contactName"
                      type="text"
                      name="contactName"
                      aria-labelledby="contactName-label"
                      aria-required="true"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                      pattern="[a-zA-Z\s.]+"
                      title="Please enter letters only"
                      className="form-input"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      id="phone-label"
                      className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      aria-labelledby="phone-label"
                      aria-required="true"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="[+]?[0-9\s\-]{10,15}"
                      minLength={10}
                      maxLength={15}
                      title="Please enter a valid phone number (10-15 digits)"
                      className="form-input"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    id="email-label"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    aria-labelledby="email-label"
                    aria-required="true"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="email@organisation.com"
                  />
                </div>

                <div role="group" aria-labelledby="age-groups-label">
                  <label
                    id="age-groups-label"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                  >
                    Age Group(s) of Interest *
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {ageGroups.map((group) => (
                      <button
                        key={group}
                        type="button"
                        aria-pressed={formData.ageGroups.includes(group)}
                        onClick={() => handleAgeGroup(group)}
                        className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-200 cursor-pointer ${
                          formData.ageGroups.includes(group)
                            ? "bg-emerald-50 border-emerald-600 text-emerald-800 shadow-xs ring-1 ring-emerald-600/30"
                            : ageGroupError
                            ? "bg-red-50 border-red-300 text-slate-600 hover:border-red-500"
                            : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300"
                        }`}
                      >
                        {group}
                      </button>
                    ))}
                  </div>
                  {ageGroupError && (
                    <p className="text-xs text-red-600 mt-2 flex items-center gap-1.5 font-medium" role="alert">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Please select at least one age group
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="location"
                    id="location-label"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                  >
                    Preferred Location / City *
                  </label>
                  <input
                    id="location"
                    type="text"
                    name="location"
                    aria-labelledby="location-label"
                    aria-required="true"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="City name (e.g. Delhi, Gurugram, Rohtak)"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    id="message-label"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                  >
                    Message{" "}
                    <span className="text-slate-400 font-normal normal-case tracking-normal">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    aria-labelledby="message-label"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="form-input resize-none"
                    placeholder="Tell us about your campus, facility, or student count..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center text-base py-4 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-600/25"
                >
                  <span className="flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        BOOK YOUR FREE DEMO
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </RevealWrapper>
  );
}
