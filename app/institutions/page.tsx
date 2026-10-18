"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import VerificationNotice from "@/components/VerificationNotice";
import { SITE_CONFIG } from "@/lib/config";
import {
  Building2,
  Users,
  GraduationCap,
  Award,
  Calendar,
  Send,
  CheckCircle2,
  FileText,
  Sparkles,
} from "lucide-react";

export default function InstitutionsPage() {
  const [institution, setInstitution] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [programmeCategory, setProgrammeCategory] = useState("AI and Generative AI Workshops");
  const [audienceSize, setAudienceSize] = useState("50-100 attendees");
  const [targetDate, setTargetDate] = useState("");
  const [requirements, setRequirements] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const programmes = [
    {
      title: "AI & Generative AI Workshops",
      badge: "Hands-on Engineering",
      description: "Interactive masterclasses moving past simple prompt engineering into real LLM architectures, function calling, agent loops, and vector retrieval mechanics.",
      outcomes: "Students build functional prototypes and gain architectural intuition.",
    },
    {
      title: "Startup Pitch Preparation",
      badge: "Defensibility & Clarity",
      description: "High-intensity bootcamps teaching technical teams how to articulate problem validation, market viability, unit economics, and competitive defensibility without fluff.",
      outcomes: "Engineering teams learn to present with commercial clarity and structural confidence.",
    },
    {
      title: "Hackathon Evaluation & Pitch Judging",
      badge: "Rigorous Evaluation",
      description: "Objective, technical judging for university and developer hackathons. Evaluation covers architecture validity, technical difficulty, execution grit, and pitch clarity.",
      outcomes: "Fair, transparent evaluation that gives participants actionable technical feedback.",
    },
    {
      title: "The Octopus Tank Campus Model",
      badge: "End-to-End Program",
      description: "Turnkey multi-arm campus pitching competition structured around 'Teach, Judge, Reward, Convert' with multi-tier recognition cards for top student teams.",
      outcomes: "Catalyzes real entrepreneurial momentum across multidisciplinary engineering departments.",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/app/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "institutional",
          name: contactName,
          email,
          phone,
          organization: institution,
          proposedDate: targetDate,
          message: `Category: ${programmeCategory} | Audience: ${audienceSize} | Requirements: ${requirements}`,
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-20">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <VerificationNotice
          status="supplied_proposal"
          label="Institutional Capability & RFP Portal"
        />
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ivory-100 tracking-tight leading-[1.1]">
          Institutional Programmes & Judging.
        </h1>
        <p className="text-base sm:text-lg text-silver-300 font-light leading-relaxed">
          High-impact AI workshops, pitch bootcamps, and hackathon evaluation for engineering universities, incubation centers, and student founder communities.
        </p>
      </div>

      {/* Target Audiences */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
        {[
          "University Departments",
          "Student E-Cells",
          "Hackathon Organizers",
          "Incubation Hubs",
          "Developer Societies",
          "Corporate Innovation",
        ].map((aud, i) => (
          <div
            key={i}
            className="p-3.5 rounded-lg bg-navy-950 border border-white/5 text-[11px] font-semibold text-silver-400 hover:text-gold-400 hover:border-gold-500/30 transition-colors"
          >
            {aud}
          </div>
        ))}
      </div>

      {/* Programmes Grid */}
      <section className="space-y-8">
        <SectionHeader
          eyebrow="CURRICULA & FORMATS"
          title="Campus & Ecosystem Offerings"
          subtitle="Every institutional engagement is designed to bridge the gap between academic curriculum and high-velocity engineering reality."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programmes.map((p, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-navy-950 border border-white/10 hover:border-gold-500/40 transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold-500 font-bold px-2.5 py-1 rounded bg-gold-500/10 border border-gold-500/20 inline-block">
                  {p.badge}
                </span>
                <h3 className="font-serif text-2xl font-bold text-ivory-100">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-silver-400 leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 text-xs text-silver-300">
                <strong className="text-gold-400">Target Outcome:</strong> {p.outcomes}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RFP / Proposal Request Form */}
      <section
        id="rfp-form"
        className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-navy-900 to-navy-950 border border-gold-500/40 space-y-8 shadow-2xl"
      >
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-bold">
            REQUEST A FORMAL PROPOSAL
          </span>
          <h2 className="font-serif text-3xl font-bold text-ivory-100">
            Institutional Engagement Inquiry
          </h2>
          <p className="text-xs sm:text-sm text-silver-400 leading-relaxed">
            Submit your event parameters below. Circle13 management will prepare a tailored capability docket and connect to finalize schedule, honorarium, and logistics.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <h3 className="font-serif text-2xl font-bold text-ivory-100">
              Institutional RFP Received
            </h3>
            <p className="text-xs sm:text-sm text-silver-300 max-w-md mx-auto">
              Our management desk has logged your institutional inquiry for <strong>{institution}</strong>. A coordinator will contact you at <strong>{email}</strong> within 24-48 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-silver-300">
                  Institution / Organization Name *
                </label>
                <input
                  type="text"
                  required
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  placeholder="e.g. Dayananda Sagar University School of Engg"
                  className="w-full px-4 py-3 rounded bg-navy-900 border border-white/10 text-ivory-100 text-xs focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-silver-300">
                  Coordinator / Faculty In-Charge Name *
                </label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Prof. / Dr. / Organizer Name"
                  className="w-full px-4 py-3 rounded bg-navy-900 border border-white/10 text-ivory-100 text-xs focus:outline-none focus:border-gold-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-silver-300">
                  Institutional / Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="coordinator@university.edu"
                  className="w-full px-4 py-3 rounded bg-navy-900 border border-white/10 text-ivory-100 text-xs focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-silver-300">
                  Contact Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded bg-navy-900 border border-white/10 text-ivory-100 text-xs focus:outline-none focus:border-gold-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-silver-300">
                  Programme Category
                </label>
                <select
                  value={programmeCategory}
                  onChange={(e) => setProgrammeCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded bg-navy-900 border border-white/10 text-ivory-100 text-xs focus:outline-none focus:border-gold-500"
                >
                  <option value="AI and Generative AI Workshops">AI & Generative AI Workshop</option>
                  <option value="Startup Pitch Preparation">Startup Pitch Preparation</option>
                  <option value="Hackathon Judging and Evaluation">Hackathon Evaluation & Judging</option>
                  <option value="Octopus Tank Campus Model">Octopus Tank Format Integration</option>
                  <option value="Keynote Address">Keynote Address</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-silver-300">
                  Estimated Audience Size
                </label>
                <select
                  value={audienceSize}
                  onChange={(e) => setAudienceSize(e.target.value)}
                  className="w-full px-4 py-3 rounded bg-navy-900 border border-white/10 text-ivory-100 text-xs focus:outline-none focus:border-gold-500"
                >
                  <option value="Under 50 attendees">Under 50 attendees</option>
                  <option value="50-100 attendees">50-100 attendees</option>
                  <option value="100-250 attendees">100-250 attendees</option>
                  <option value="250+ attendees">250+ attendees</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-silver-300">
                  Target Date / Semester
                </label>
                <input
                  type="text"
                  value={targetDate}
                  onChange={(e) => setTargetDate(e.target.value)}
                  placeholder="e.g. October 2026 or Q1 2027"
                  className="w-full px-4 py-3 rounded bg-navy-900 border border-white/10 text-ivory-100 text-xs focus:outline-none focus:border-gold-500"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-silver-300">
                Event Context & Specific Requirements
              </label>
              <textarea
                rows={3}
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                placeholder="Details regarding technical infrastructure, student background, lab setups, or event theme..."
                className="w-full px-4 py-3 rounded bg-navy-900 border border-white/10 text-ivory-100 text-xs focus:outline-none focus:border-gold-500"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-8 py-4 rounded bg-gold-500 text-navy-950 hover:bg-gold-400 transition-colors shadow-lg"
              >
                <span>{isSubmitting ? "Transmitting RFP..." : "Request Institutional Proposal"}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </section>
    </div>
  );
}
