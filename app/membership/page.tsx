"use client";

import React, { useState } from "react";
import { Check, ArrowRight, ShieldCheck, Sparkles, Send } from "lucide-react";

export default function MembershipPage() {
  const [selectedTier, setSelectedTier] = useState<string>("the-builder");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "membership",
          name: fullName,
          email,
          message: note,
          selectedTier,
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 border border-neutral-200 rounded-full px-3 py-0.5 text-[11px] font-mono text-neutral-600 bg-neutral-50">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span>MEMBERSHIP TIERS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-sans font-semibold tracking-tight text-neutral-950 leading-[1.05]">
            Stay close to the frontier.
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            Continuous access to production AI blueprints, architectural reviews, live teardowns, and high-signal builder networks.
          </p>
        </div>

        {/* The 3 Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tier 1 */}
          <div
            id="the-library"
            className={`rounded-2xl border p-8 flex flex-col justify-between space-y-6 transition-all ${
              selectedTier === "the-library"
                ? "border-black bg-neutral-50/40 shadow-xs"
                : "border-neutral-200 bg-white hover:border-neutral-300"
            }`}
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                  Tier 01
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-neutral-100 text-neutral-700">
                  Foundations
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-neutral-950">The Library</h3>
                <p className="text-xs text-neutral-500 mt-1">
                  Curated technical architectures &amp; digests.
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100 space-y-3 text-xs text-neutral-600">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>Curated technical notes &amp; model inference breakdowns</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>Problem validation and pitch preparation worksheets</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>Private release digests of AI engineering tools</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>Eligible community open releases and updates</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedTier("the-library")}
              className={`w-full py-2.5 rounded-lg text-xs font-semibold transition-all ${
                selectedTier === "the-library"
                  ? "bg-black text-white"
                  : "border border-neutral-200 text-neutral-800 hover:bg-neutral-50"
              }`}
            >
              {selectedTier === "the-library" ? "Selected Tier" : "Select The Library"}
            </button>
          </div>

          {/* Tier 2: The Builder (Anchor) */}
          <div
            id="the-builder"
            className={`rounded-2xl border-2 p-8 flex flex-col justify-between space-y-6 transition-all ${
              selectedTier === "the-builder"
                ? "border-black bg-white shadow-md ring-1 ring-black/5"
                : "border-black/70 bg-white"
            }`}
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                  Tier 02
                </span>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-black text-white">
                  Most Popular
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-neutral-950">The Builder</h3>
                <p className="text-xs text-neutral-500 mt-1">
                  Structured learning &amp; closed-door teardowns.
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100 space-y-3 text-xs text-neutral-600">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span className="font-medium text-neutral-900">Everything in The Library</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>Structured roadmaps across AI frameworks and agents</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>Monthly closed-door group system teardowns</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>Access to builder discussion threads &amp; project critique</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>Preferential seating for special masterclasses</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedTier("the-builder")}
              className={`w-full py-2.5 rounded-lg text-xs font-semibold transition-all ${
                selectedTier === "the-builder"
                  ? "bg-black text-white"
                  : "border border-neutral-200 text-neutral-800 hover:bg-neutral-50"
              }`}
            >
              {selectedTier === "the-builder" ? "Selected Tier" : "Select The Builder"}
            </button>
          </div>

          {/* Tier 3: Inner Circle */}
          <div
            id="the-inner-circle"
            className={`rounded-2xl border p-8 flex flex-col justify-between space-y-6 transition-all ${
              selectedTier === "the-inner-circle"
                ? "border-black bg-neutral-50/40 shadow-xs"
                : "border-neutral-200 bg-white hover:border-neutral-300"
            }`}
          >
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                  Tier 03
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-neutral-100 text-neutral-700">
                  Selective
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-neutral-950">The Inner Circle</h3>
                <p className="text-xs text-neutral-500 mt-1">
                  High strategic proximity &amp; 1:1 advisory.
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100 space-y-3 text-xs text-neutral-600">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span className="font-medium text-neutral-900">Everything in The Builder</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>1:1 private system architecture stress-testing</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>Direct pitch narrative critique and positioning audit</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>Closed-door roundtable reviews with lead advisors</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>Strictly capped cohort size by application</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedTier("the-inner-circle")}
              className={`w-full py-2.5 rounded-lg text-xs font-semibold transition-all ${
                selectedTier === "the-inner-circle"
                  ? "bg-black text-white"
                  : "border border-neutral-200 text-neutral-800 hover:bg-neutral-50"
              }`}
            >
              {selectedTier === "the-inner-circle" ? "Selected Tier" : "Select Inner Circle"}
            </button>
          </div>
        </div>

        {/* Minimalist Interest Registration */}
        <div className="max-w-2xl mx-auto rounded-2xl border border-neutral-200 bg-neutral-50/50 p-8 space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
              Enrolment Inquiry
            </span>
            <h2 className="text-2xl font-semibold text-neutral-950">
              Apply for {selectedTier === "the-library" ? "The Library" : selectedTier === "the-builder" ? "The Builder" : "The Inner Circle"}
            </h2>
            <p className="text-xs text-neutral-500">
              Submit your details to request cohort availability or register priority interest.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-xl bg-white border border-neutral-200 text-center space-y-2">
              <span className="font-mono text-xs font-semibold text-black uppercase tracking-wider">
                Application Received
              </span>
              <p className="text-sm text-neutral-600">
                Thank you. We have logged your interest for this tier. You will receive next steps and cohort updates directly via email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your name"
                    className="w-full h-10 px-3.5 rounded-lg border border-neutral-200 bg-white text-sm focus:border-black focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full h-10 px-3.5 rounded-lg border border-neutral-200 bg-white text-sm focus:border-black focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  What are you currently building or aiming to learn? (Optional)
                </label>
                <textarea
                  rows={3}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Brief note about your background, project, or goals..."
                  className="w-full p-3 rounded-lg border border-neutral-200 bg-white text-sm focus:border-black focus:outline-hidden"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-11 rounded-lg bg-black text-white text-sm font-semibold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2"
              >
                <span>{loading ? "Submitting..." : "Submit Registration of Interest"}</span>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
