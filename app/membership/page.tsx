"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, ArrowUpRight, Sparkles, ShieldCheck, Clock, Award } from "lucide-react";
import { OCTOPUS_TANK_GOOGLE_FORM_URL, WINNERS_MENTORSHIP_CONFIG } from "@/lib/config";

export default function MembershipPage() {
  const [activePlan, setActivePlan] = useState<"first-place" | "second-place" | "standard">("first-place");
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
          formType: "mentorship_membership",
          name: fullName,
          email,
          message: note,
          plan: activePlan,
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
    <div className="bg-white text-neutral-900 selection:bg-black selection:text-white py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 border border-neutral-200 rounded-full px-3 py-0.5 text-[11px] font-mono text-neutral-600 bg-neutral-50 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span>CONFIRMED PROGRAMME &amp; SUBSIDY SCHEDULE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-sans font-semibold tracking-tight text-neutral-950 leading-[1.04]">
            30 Days of Mentorship.
            <br />
            1 Hour Daily.
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            Led by <strong className="text-neutral-900 font-semibold">Anuj Dwivedi</strong> (Founder, Archzos Technologies Pvt Ltd). An immersive 30-day intensive covering artificial intelligence architectures, venture pitching, and professional executive presence.
          </p>
        </div>

        {/* Mentor Profile Banner (YC Product Credibility Style) */}
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50/60 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0">
              <Image
                src="/images/anuj-prof-3.png"
                alt="Anuj Dwivedi"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-950">
                  Anuj Dwivedi
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-black text-white">
                  Lead Mentor
                </span>
              </div>
              <p className="text-xs font-medium text-neutral-600">
                Founder, Archzos Technologies Pvt Ltd
              </p>
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-neutral-500 pt-0.5">
                <span>AI Systems</span>
                <span>•</span>
                <span>Startup Pitching</span>
                <span>•</span>
                <span>Professional Presence</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="p-3 rounded-xl bg-white border border-neutral-200 text-xs font-mono text-neutral-700 space-y-0.5 w-full md:w-auto">
              <span className="text-[10px] uppercase text-neutral-400 block font-semibold">
                Daily Format
              </span>
              <span className="font-semibold text-neutral-950">1 Hour Daily (30 Days)</span>
              <span className="text-neutral-500 block text-[10px]">Online or offline by arrangement</span>
            </div>
          </div>
        </div>

        {/* The 3 Core Pricing Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Tier 1: 1st Place Winner */}
          <div
            onClick={() => setActivePlan("first-place")}
            className={`cursor-pointer rounded-2xl border-2 p-7 flex flex-col justify-between space-y-6 transition-all relative overflow-hidden ${
              activePlan === "first-place"
                ? "border-blue-600 bg-white shadow-md ring-2 ring-blue-600/10"
                : "border-neutral-200 bg-white hover:border-neutral-300"
            }`}
          >
            <div className="absolute top-0 right-0 bg-blue-600 text-white font-mono text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
              1st Place Award
            </div>

            <div className="space-y-5 pt-1">
              <div>
                <span className="font-mono text-xs uppercase text-blue-600 font-bold tracking-wider">
                  80% Subsidy
                </span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="font-sans text-4xl sm:text-5xl font-bold text-neutral-950">
                    ₹15,000
                  </span>
                  <span className="text-sm text-neutral-400 line-through font-mono">
                    ₹75,000
                  </span>
                </div>
                <span className="inline-block font-mono text-xs text-emerald-600 font-medium mt-1">
                  Save ₹60,000
                </span>
              </div>

              <div className="pt-3 border-t border-neutral-100 space-y-2.5 text-xs text-neutral-700">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="font-semibold text-neutral-900">
                    30 Days of 1:1 Mentorship with Anuj Dwivedi
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>1 hour daily sessions (online or offline by agreement)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>AI Architecture review, LLM pipelines &amp; inference</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Pitch deck stress-testing &amp; venture defensibility</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Redeemable anytime; separate cash prize eligible</span>
                </div>
              </div>
            </div>

            <a
              href={OCTOPUS_TANK_GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-center text-xs font-semibold transition-all shadow-xs inline-flex items-center justify-center gap-1"
            >
              <span>Apply for Octopus Tank</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Tier 2: 2nd Place Winner */}
          <div
            onClick={() => setActivePlan("second-place")}
            className={`cursor-pointer rounded-2xl border-2 p-7 flex flex-col justify-between space-y-6 transition-all relative overflow-hidden ${
              activePlan === "second-place"
                ? "border-red-500 bg-white shadow-md ring-2 ring-red-500/10"
                : "border-neutral-200 bg-white hover:border-neutral-300"
            }`}
          >
            <div className="absolute top-0 right-0 bg-red-500 text-white font-mono text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
              2nd Place Award
            </div>

            <div className="space-y-5 pt-1">
              <div>
                <span className="font-mono text-xs uppercase text-red-600 font-bold tracking-wider">
                  70% Subsidy
                </span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="font-sans text-4xl sm:text-5xl font-bold text-neutral-950">
                    ₹22,500
                  </span>
                  <span className="text-sm text-neutral-400 line-through font-mono">
                    ₹75,000
                  </span>
                </div>
                <span className="inline-block font-mono text-xs text-emerald-600 font-medium mt-1">
                  Save ₹52,500
                </span>
              </div>

              <div className="pt-3 border-t border-neutral-100 space-y-2.5 text-xs text-neutral-700">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span className="font-semibold text-neutral-900">
                    30 Days of 1:1 Mentorship with Anuj Dwivedi
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>1 hour daily sessions (online or offline by agreement)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Executive presence &amp; startup storytelling</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Full technical roadmap &amp; launch checkpoints</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>Redeemable anytime; separate cash prize eligible</span>
                </div>
              </div>
            </div>

            <a
              href={OCTOPUS_TANK_GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-center text-xs font-semibold transition-all shadow-xs inline-flex items-center justify-center gap-1"
            >
              <span>Apply for Octopus Tank</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Tier 3: Standard Direct Rate */}
          <div
            onClick={() => setActivePlan("standard")}
            className={`cursor-pointer rounded-2xl border-2 p-7 flex flex-col justify-between space-y-6 transition-all ${
              activePlan === "standard"
                ? "border-black bg-white shadow-md ring-2 ring-black/10"
                : "border-neutral-200 bg-neutral-50/50 hover:border-neutral-300"
            }`}
          >
            <div className="space-y-5">
              <div>
                <span className="font-mono text-xs uppercase text-neutral-500 font-bold tracking-wider">
                  Direct Enrollment
                </span>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="font-sans text-4xl sm:text-5xl font-bold text-neutral-950">
                    ₹75,000
                  </span>
                  <span className="text-xs text-neutral-500 font-mono">/ 30 days</span>
                </div>
                <span className="inline-block font-mono text-xs text-neutral-500 mt-1">
                  Standard programme fee
                </span>
              </div>

              <div className="pt-3 border-t border-neutral-200 space-y-2.5 text-xs text-neutral-700">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                  <span className="font-semibold text-neutral-900">
                    Full 30-Day Intensive Cohort
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                  <span>1 hour daily direct guidance with Anuj</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                  <span>Custom engineering curriculum for your startup</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                  <span>Weekly milestone tracking &amp; code reviews</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                  <span>Scheduled by mutual calendar availability</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="w-full py-2.5 rounded-lg bg-black text-white text-center text-xs font-semibold hover:bg-neutral-800 transition-all shadow-xs"
            >
              Inquire for Cohort Booking
            </button>
          </div>
        </div>

        {/* Cohort Application / Booking Form */}
        <div className="max-w-2xl mx-auto rounded-2xl border border-neutral-200 bg-neutral-50/60 p-8 space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
              Selected:{" "}
              {activePlan === "first-place"
                ? "1st Place Winner Subsidy (₹15,000)"
                : activePlan === "second-place"
                ? "2nd Place Winner Subsidy (₹22,500)"
                : "Standard Direct Enrollment (₹75,000)"}
            </span>
            <h2 className="text-2xl font-semibold text-neutral-950">
              Apply or Inquire for 30-Day Mentorship
            </h2>
            <p className="text-xs text-neutral-500">
              Submit your inquiry to lock calendar scheduling or confirm competition award redemption.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 rounded-xl bg-white border border-neutral-200 text-center space-y-2">
              <span className="font-mono text-xs font-semibold text-black uppercase tracking-wider">
                Inquiry Logged
              </span>
              <p className="text-sm text-neutral-600">
                Thank you. We have received your inquiry for the 30-Day Mentorship Programme. You will receive scheduling instructions at your email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full name"
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
                  Project or Startup Overview
                </label>
                <textarea
                  rows={3}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Tell us what you're building, whether you're participating in Octopus Tank, or your technical requirements..."
                  className="w-full p-3 rounded-lg border border-neutral-200 bg-white text-sm focus:border-black focus:outline-hidden"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-11 rounded-lg bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2"
              >
                <span>{loading ? "Submitting..." : "Submit Mentorship Inquiry"}</span>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
