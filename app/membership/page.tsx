"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import VerificationNotice from "@/components/VerificationNotice";
import { MEMBERSHIP_TIERS } from "@/lib/config";
import {
  Check,
  X as CloseIcon,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Info,
  Send,
} from "lucide-react";

export default function MembershipPage() {
  const [selectedTier, setSelectedTier] = useState<string>("the-builder");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [learningGoals, setLearningGoals] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/app/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "membership",
          name: fullName,
          email,
          message: learningGoals,
          selectedTier,
        }),
      });

      setFormSubmitted(true);
    } catch (err) {
      console.error(err);
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-20">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <VerificationNotice
          status="proposed_copy"
          label="Proposed Membership Model"
        />
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ivory-100 tracking-tight leading-[1.1]">
          Stay close to the work.
        </h1>
        <p className="text-base sm:text-lg text-silver-300 font-light leading-relaxed">
          An ongoing relationship with selected technical learning material, structured roadmaps, and member benefits as they become available.
        </p>
      </div>

      {/* Psychological Comparison: Engagement vs Membership */}
      <div className="p-8 rounded-2xl bg-navy-900/40 border border-white/10 space-y-6">
        <h2 className="font-serif text-2xl font-bold text-ivory-100">
          Understanding the Difference
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed text-silver-400">
          <div className="p-5 rounded-xl bg-navy-950 border border-white/5 space-y-2">
            <span className="text-gold-400 font-mono font-bold uppercase">
              1. One-Time Advisory
            </span>
            <h3 className="font-serif text-sm font-bold text-ivory-100">
              Personal Consultancy
            </h3>
            <p>
              A focused, single-objective intervention designed to resolve an urgent system architecture or pitch narrative dilemma.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-navy-950 border border-gold-500/30 space-y-2">
            <span className="text-gold-400 font-mono font-bold uppercase">
              2. Recurring Relationship
            </span>
            <h3 className="font-serif text-sm font-bold text-ivory-100">
              Membership Tiers
            </h3>
            <p>
              Continuous access to curated educational repositories, framework updates, practical templates, and community discussion pathways.
            </p>
          </div>
          <div className="p-5 rounded-xl bg-navy-950 border border-white/5 space-y-2">
            <span className="text-gold-400 font-mono font-bold uppercase">
              3. High-Touch Sprint
            </span>
            <h3 className="font-serif text-sm font-bold text-ivory-100">
              Premium Mentorship
            </h3>
            <p>
              An intensive 4-session or 30-day cohort partnership focused on launch readiness and deep execution accountability.
            </p>
          </div>
        </div>
      </div>

      {/* Proposed Tiers */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl font-bold text-ivory-100">
              Configurable Membership Tiers
            </h2>
            <p className="text-xs text-silver-400 mt-1">
              * Tiers are currently in finalisation with Anuj. Prices and launch availability will be announced to registered members first.
            </p>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded bg-navy-900 border border-gold-500/30 text-gold-400">
            Membership Status: In Finalisation
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {MEMBERSHIP_TIERS.map((tier) => {
            const isFeatured = tier.tierLevel === 2;

            return (
              <div
                key={tier.id}
                className={`rounded-2xl p-8 flex flex-col justify-between border transition-all ${
                  isFeatured
                    ? "bg-gradient-to-b from-navy-900 to-navy-950 border-gold-500 shadow-xl shadow-gold-500/10"
                    : "bg-navy-950 border-white/10"
                }`}
              >
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-gold-500 uppercase tracking-widest font-bold">
                        LEVEL 0{tier.tierLevel}
                      </span>
                      {tier.badge && (
                        <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-gold-500 text-navy-950">
                          {tier.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-ivory-100 mt-2">
                      {tier.name}
                    </h3>
                    <p className="text-xs text-silver-400 mt-1">
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Pricing Status Notice */}
                  <div className="p-4 rounded-lg bg-black/40 border border-white/5 text-xs space-y-1">
                    <span className="text-slate-400 uppercase font-mono text-[10px]">
                      Pricing Schedule
                    </span>
                    <div className="text-sm font-semibold text-gold-400">
                      Pricing Being Finalised
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      Register interest below for founding member recognition.
                    </p>
                  </div>

                  {/* Positioning */}
                  <p className="text-xs text-silver-300 leading-relaxed font-light">
                    {tier.positioning}
                  </p>

                  {/* Included Benefits */}
                  <div className="space-y-2">
                    <h4 className="text-[11px] uppercase font-bold tracking-wider text-emerald-400">
                      Included In Tier
                    </h4>
                    <ul className="space-y-2 text-xs text-silver-400">
                      {tier.includedBenefits.map((inc, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Excluded Benefits */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <h4 className="text-[11px] uppercase font-bold tracking-wider text-slate-400">
                      Excluded In Tier
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-400">
                      {tier.excludedBenefits.map((exc, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CloseIcon className="w-3.5 h-3.5 text-rose-500/60 shrink-0 mt-0.5" />
                          <span>{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-white/5">
                  <button
                    onClick={() => {
                      setSelectedTier(tier.id);
                      const el = document.getElementById("membership-interest-form");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`w-full py-3 px-4 rounded text-xs uppercase tracking-wider font-bold transition-colors ${
                      isFeatured
                        ? "bg-gold-500 text-navy-950 hover:bg-gold-400"
                        : "border border-gold-500/60 bg-gold-500/10 text-gold-400 hover:bg-gold-500 hover:text-navy-950"
                    }`}
                  >
                    Register Tier Interest
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interest Registration Form */}
      <section
        id="membership-interest-form"
        className="rounded-2xl p-8 sm:p-12 bg-navy-950 border border-gold-500/40 space-y-8 scroll-mt-28"
      >
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-500">
            EARLY REGISTRATION
          </span>
          <h2 className="font-serif text-3xl font-bold text-ivory-100">
            Register Early Interest in Membership
          </h2>
          <p className="text-xs sm:text-sm text-silver-400 leading-relaxed">
            Be notified when Anuj finalises curriculum access, workshop schedules, and member slots. No payment required at this stage.
          </p>
        </div>

        {formSubmitted ? (
          <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
            <Check className="w-10 h-10 text-emerald-400 mx-auto" />
            <h3 className="font-serif text-2xl font-bold text-ivory-100">
              Interest Successfully Registered
            </h3>
            <p className="text-xs sm:text-sm text-silver-300 max-w-md mx-auto">
              Thank you for registering. Circle13 management will contact you at <strong>{email}</strong> once membership admissions open.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-silver-300">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded bg-navy-900 border border-white/10 text-ivory-100 text-xs focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-silver-300">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full px-4 py-3 rounded bg-navy-900 border border-white/10 text-ivory-100 text-xs focus:outline-none focus:border-gold-500"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-silver-300">
                Selected Membership Tier
              </label>
              <select
                value={selectedTier}
                onChange={(e) => setSelectedTier(e.target.value)}
                className="w-full px-4 py-3 rounded bg-navy-900 border border-white/10 text-ivory-100 text-xs focus:outline-none focus:border-gold-500"
              >
                {MEMBERSHIP_TIERS.map((tier) => (
                  <option key={tier.id} value={tier.id}>
                    Level {tier.tierLevel}: {tier.name} — {tier.tagline}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-silver-300">
                What are you currently building or learning?
              </label>
              <textarea
                rows={3}
                value={learningGoals}
                onChange={(e) => setLearningGoals(e.target.value)}
                placeholder="Share your current project, tech stack, or the primary question you want answered..."
                className="w-full px-4 py-3 rounded bg-navy-900 border border-white/10 text-ivory-100 text-xs focus:outline-none focus:border-gold-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-8 py-4 rounded bg-gold-500 text-navy-950 hover:bg-gold-400 transition-colors"
            >
              <span>{isSubmitting ? "Registering..." : "Submit Interest Registration"}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
