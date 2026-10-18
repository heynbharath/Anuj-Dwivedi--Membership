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
  Sparkles,
  ArrowRight,
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
    <div className="bg-white text-navy-950 py-12 sm:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <VerificationNotice
            status="supplied_proposal"
            label="Institutional RFP Portal"
          />
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08]">
            Institutional Programmes & Judging.
          </h1>
          <p className="text-base text-slate-600 font-light">
            Hands-on AI workshops, pitch bootcamps, and hackathon evaluation for engineering universities and incubation centers.
          </p>
        </div>

        {/* Audience Chips */}
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
              className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-navy-950 hover:border-gold-400 transition-colors"
            >
              {aud}
            </div>
          ))}
        </div>

        {/* Programmes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programmes.map((p, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-gold-500/50 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold-700 font-bold px-2.5 py-1 rounded-full bg-gold-50 border border-gold-300 inline-block">
                  {p.badge}
                </span>
                <h3 className="font-serif text-2xl font-bold text-navy-950">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 text-xs text-slate-700">
                <strong className="text-gold-700">Deliverable:</strong> {p.outcomes}
              </div>
            </div>
          ))}
        </div>

        {/* RFP Form */}
        <section className="rounded-3xl p-8 sm:p-12 bg-navy-950 text-white border border-gold-500/40 space-y-8 shadow-2xl">
          <div className="max-w-xl space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 font-bold">
              FORMAL REQUEST FOR PROPOSAL
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Institutional Engagement Inquiry
            </h2>
            <p className="text-xs text-slate-300">
              Submit your event specifications. Circle13 management will prepare a docket and connect to confirm details.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
              <h3 className="font-serif text-xl font-bold">Institutional Inquiry Logged</h3>
              <p className="text-xs text-slate-300">
                A coordinator will reach out at <strong>{email}</strong> within 24-48 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  placeholder="Institution / Organization Name *"
                  className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-white/10 text-white text-xs focus:outline-none focus:border-gold-500"
                />
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Coordinator / Faculty Name *"
                  className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-white/10 text-white text-xs focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Work Email Address *"
                  className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-white/10 text-white text-xs focus:outline-none focus:border-gold-500"
                />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Contact Phone Number *"
                  className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-white/10 text-white text-xs focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <select
                  value={programmeCategory}
                  onChange={(e) => setProgrammeCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-white/10 text-white text-xs focus:outline-none focus:border-gold-500"
                >
                  <option value="AI and Generative AI Workshops">AI & GenAI Workshop</option>
                  <option value="Startup Pitch Preparation">Startup Pitch Prep</option>
                  <option value="Hackathon Judging and Evaluation">Hackathon Evaluation</option>
                  <option value="Octopus Tank Campus Model">Octopus Tank Format</option>
                </select>

                <select
                  value={audienceSize}
                  onChange={(e) => setAudienceSize(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-white/10 text-white text-xs focus:outline-none focus:border-gold-500"
                >
                  <option value="Under 50 attendees">Under 50 attendees</option>
                  <option value="50-100 attendees">50-100 attendees</option>
                  <option value="100-250 attendees">100-250 attendees</option>
                  <option value="250+ attendees">250+ attendees</option>
                </select>

                <input
                  type="text"
                  value={targetDate}
                  onChange={(e) => setTargetDate(e.target.value)}
                  placeholder="Target Date / Semester"
                  className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-white/10 text-white text-xs focus:outline-none focus:border-gold-500"
                />
              </div>

              <textarea
                rows={2}
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                placeholder="Specific lab infrastructure or event context..."
                className="w-full px-4 py-3 rounded-xl bg-navy-900 border border-white/10 text-white text-xs focus:outline-none focus:border-gold-500"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-8 py-3.5 rounded-xl bg-gold-500 text-navy-950 hover:bg-gold-400 transition-colors shadow-md"
              >
                <span>{isSubmitting ? "Transmitting..." : "Request Proposal"}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}
