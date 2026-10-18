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
      await fetch("/app/api/enquiry", {
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
    <div className="bg-white text-navy-950 py-12 sm:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <VerificationNotice
            status="proposed_copy"
            label="Membership Model"
          />
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08]">
            Stay close to the work.
          </h1>
          <p className="text-base text-slate-600 font-light">
            Continuous access to curated educational repositories, framework updates, practical templates, and community pathways.
          </p>
        </div>

        {/* Psychological Comparison Bar (Least Text, High Infographics) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-gold-700 font-mono font-bold text-[10px] uppercase">
              1. One-Time Advisory
            </span>
            <h3 className="font-serif text-base font-bold text-navy-950">
              Personal Consultancy
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Targeted single-objective evaluation session to resolve an immediate engineering or pitch dilemma.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border-2 border-gold-400 shadow-md space-y-2">
            <span className="text-gold-700 font-mono font-bold text-[10px] uppercase">
              2. Recurring Relationship
            </span>
            <h3 className="font-serif text-base font-bold text-navy-950">
              Membership Tiers
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Ongoing access to selected technical learning material, roadmaps, and eligible member updates.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-navy-950 text-white border border-slate-800 space-y-2">
            <span className="text-gold-400 font-mono font-bold text-[10px] uppercase">
              3. High-Touch Sprint
            </span>
            <h3 className="font-serif text-base font-bold text-white">
              Premium Mentorship
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              4-session or 30-day intensive cohort partnership focused on launch readiness and deep execution accountability.
            </p>
          </div>
        </div>

        {/* Tiers Grid on White */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Membership Tiers (In Finalisation)
            </h2>
            <span className="text-xs font-mono text-gold-700 font-bold">
              * Pricing & benefits being finalised with Anuj
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {MEMBERSHIP_TIERS.map((tier) => {
              const isFeatured = tier.tierLevel === 2;

              return (
                <div
                  key={tier.id}
                  className={`rounded-3xl p-7 flex flex-col justify-between border transition-all ${
                    isFeatured
                      ? "bg-slate-50 border-2 border-gold-500 shadow-lg"
                      : "bg-white border-slate-200 shadow-sm"
                  }`}
                >
                  <div className="space-y-5">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-gold-700 uppercase tracking-widest font-bold">
                          LEVEL 0{tier.tierLevel}
                        </span>
                        {tier.badge && (
                          <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-gold-100 text-gold-900 border border-gold-300">
                            {tier.badge}
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-navy-950 mt-1">
                        {tier.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {tier.tagline}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-xs space-y-0.5">
                      <span className="text-slate-400 uppercase font-mono text-[10px]">
                        Pricing Status
                      </span>
                      <div className="text-sm font-bold text-gold-700">
                        Details Being Finalised
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {tier.positioning}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-[10px] uppercase font-bold tracking-wider text-emerald-700">
                        Included In Tier
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {tier.includedBenefits.map((inc, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <Check className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200">
                    <button
                      onClick={() => {
                        setSelectedTier(tier.id);
                        document.getElementById("membership-form")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className={`w-full py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-bold transition-colors ${
                        isFeatured
                          ? "bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950"
                          : "border border-slate-300 text-navy-950 hover:bg-slate-100"
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

        {/* Interest Form */}
        <section
          id="membership-form"
          className="rounded-3xl p-8 sm:p-10 bg-slate-50 border border-slate-200 space-y-6 scroll-mt-28"
        >
          <div className="max-w-xl space-y-1.5">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gold-700 font-bold">
              EARLY ACCESS
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Register Early Interest
            </h2>
            <p className="text-xs text-slate-500">
              Receive founding member notification when curriculum access and member cohorts open.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
              <Check className="w-8 h-8 text-emerald-600 mx-auto" />
              <h3 className="font-serif text-xl font-bold text-navy-950">
                Interest Registered
              </h3>
              <p className="text-xs text-slate-600">
                Circle13 management will contact you at <strong>{email}</strong> once admissions open.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your Name *"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy-950 text-xs focus:outline-none focus:border-gold-500"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address *"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy-950 text-xs focus:outline-none focus:border-gold-500"
                />
              </div>

              <select
                value={selectedTier}
                onChange={(e) => setSelectedTier(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy-950 text-xs focus:outline-none focus:border-gold-500"
              >
                {MEMBERSHIP_TIERS.map((tier) => (
                  <option key={tier.id} value={tier.id}>
                    Level {tier.tierLevel}: {tier.name} — {tier.tagline}
                  </option>
                ))}
              </select>

              <textarea
                rows={2}
                value={learningGoals}
                onChange={(e) => setLearningGoals(e.target.value)}
                placeholder="What are you currently building or learning?"
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy-950 text-xs focus:outline-none focus:border-gold-500"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-7 py-3.5 rounded-xl bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950 transition-colors shadow-md"
              >
                <span>{isSubmitting ? "Registering..." : "Submit Interest Registration"}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}
