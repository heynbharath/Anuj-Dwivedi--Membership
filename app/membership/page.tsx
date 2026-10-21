"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, ArrowUpRight, Award, ShieldCheck, Clock } from "lucide-react";
import FAQSection from "@/components/FAQSection";
import { OCTOPUS_TANK_GOOGLE_FORM_URL } from "@/lib/config";

export default function MembershipPage() {
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
          formType: "direct_mentorship_enrollment",
          name: fullName,
          email,
          message: note,
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
            <span>OFFICIAL MENTORSHIP &amp; SUBSIDY SCHEDULE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-sans font-semibold tracking-tight text-neutral-950 leading-[1.04]">
            30 Days of Mentorship.
            <br />
            1 Hour Daily.
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
            Led by <strong className="text-neutral-900 font-semibold">Anuj Dwivedi</strong> (Founder, Archzos Technologies Pvt Ltd). An intensive 30-day cohort covering artificial intelligence system architecture, startup pitching, and executive presence.
          </p>
        </div>

        {/* Mentor Profile Banner (YC Product Credibility Style) */}
        <div className="rounded-3xl border border-neutral-200 bg-neutral-50/60 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white shadow-md shrink-0 bg-neutral-100">
              <Image
                src="/images/anuj-headshot.png"
                alt="Anuj Dwivedi - Founder, Archzos Technologies"
                fill
                className="object-cover object-center"
                priority
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
            <div className="p-4 rounded-xl bg-white border border-neutral-200 text-xs font-mono text-neutral-700 space-y-1 w-full md:w-auto shadow-2xs">
              <span className="text-[10px] uppercase text-neutral-400 block font-semibold">
                Daily Format
              </span>
              <span className="font-semibold text-neutral-950 block text-sm">1 Hour Daily (30 Days)</span>
              <span className="text-neutral-500 block text-[11px]">Online or offline in Bangalore by arrangement</span>
            </div>
          </div>
        </div>

        {/* The Two Structured Pathways (Competition Subsidized vs Direct) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Track A: Octopus Tank Competition Subsidies */}
          <div className="lg:col-span-7 rounded-3xl border-2 border-black bg-neutral-50/50 p-7 sm:p-9 flex flex-col justify-between space-y-6 shadow-sm">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-black text-white uppercase tracking-wider">
                  Competition Track · Octopus Tank
                </span>
                <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 font-medium">
                  Up to 80% Sponsored Subsidies
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-neutral-950">
                  Earn Mentorship by Winning Octopus Tank
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1.5 leading-relaxed">
                  Teams pitching on 31 October 2026 at DSU School of Engineering compete for sponsored 30-day mentorship subsidies awarded upon live judging.
                </p>
              </div>

              {/* Subsidies Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {/* 1st Place Box */}
                <div className="p-5 rounded-2xl bg-white border border-blue-200 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-blue-600 uppercase">
                      1st Place Award
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold">
                      80% OFF
                    </span>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-sans text-3xl font-bold text-neutral-950">
                        ₹15,000
                      </span>
                      <span className="text-xs text-neutral-400 line-through font-mono">
                        ₹75,000
                      </span>
                    </div>
                    <span className="block text-[11px] font-mono text-emerald-600 mt-0.5">
                      Save ₹60,000 upon win
                    </span>
                  </div>
                  <ul className="text-xs text-neutral-600 space-y-1.5 pt-2 border-t border-neutral-100">
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>30 Days of 1:1 Mentorship</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>1 hr daily (online/offline)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>Separate cash prize eligible</span>
                    </li>
                  </ul>
                </div>

                {/* 2nd Place Box */}
                <div className="p-5 rounded-2xl bg-white border border-red-200 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-red-600 uppercase">
                      2nd Place Award
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-50 text-red-700 font-bold">
                      70% OFF
                    </span>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-sans text-3xl font-bold text-neutral-950">
                        ₹22,500
                      </span>
                      <span className="text-xs text-neutral-400 line-through font-mono">
                        ₹75,000
                      </span>
                    </div>
                    <span className="block text-[11px] font-mono text-emerald-600 mt-0.5">
                      Save ₹52,500 upon win
                    </span>
                  </div>
                  <ul className="text-xs text-neutral-600 space-y-1.5 pt-2 border-t border-neutral-100">
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span>30 Days of 1:1 Mentorship</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span>1 hr daily (online/offline)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span>Separate cash prize eligible</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-[11px] font-mono text-neutral-500 pt-1">
                * 3rd Place offer to be announced on Demo Day. Optional paid mentorship; cash prizes awarded separately.
              </div>
            </div>

            {/* The Working Google Form CTA Button */}
            <div className="pt-2 space-y-2">
              <a
                href={OCTOPUS_TANK_GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 rounded-xl bg-black hover:bg-neutral-800 text-white flex items-center justify-center gap-2 font-semibold text-xs transition-all shadow-xs"
              >
                <span>Apply for Octopus Tank 2026 (Google Form)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <span className="block text-center text-[11px] font-mono text-neutral-500">
                ₹299 RSVP fee per team · 2–4 members · DSU School of Engineering
              </span>
            </div>
          </div>

          {/* Track B: Direct Cohort Enrollment (Standard Rate) */}
          <div className="lg:col-span-5 rounded-3xl border border-neutral-200 bg-white p-7 sm:p-9 flex flex-col justify-between space-y-6 shadow-xs">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-neutral-100 text-neutral-700 uppercase tracking-wider">
                  Direct Cohort Rate
                </span>
                <span className="text-xs font-mono text-neutral-400">Non-Competition</span>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-neutral-950">
                  Direct Cohort Enrollment
                </h3>
                <p className="text-xs text-neutral-500 mt-1">
                  For builders wanting immediate 1:1 advisory without competing.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-1">
                <span className="text-[10px] font-mono uppercase text-neutral-400 block font-semibold">
                  Standard Programme Fee
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-sans text-4xl font-bold text-neutral-950">
                    ₹75,000
                  </span>
                  <span className="text-xs text-neutral-500 font-mono">/ 30 days</span>
                </div>
                <span className="text-[11px] text-neutral-500 block">
                  30 daily sessions • Online or offline in Bangalore
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-neutral-700">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>Daily 1-hour session directly with Anuj Dwivedi</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>AI architecture audit, latency &amp; model inference review</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>Pitch deck narrative stress-testing &amp; storytelling</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>Executive presence, tone, and professional polish</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#direct-enrollment-form"
                className="w-full h-12 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-900 flex items-center justify-center gap-2 font-semibold text-xs transition-all shadow-2xs"
              >
                <span>Inquire for Direct Cohort Enrollment</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Direct Cohort Booking Form */}
        <div id="direct-enrollment-form" className="max-w-2xl mx-auto rounded-3xl border border-neutral-200 bg-neutral-50/60 p-8 sm:p-10 space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
              Direct Cohort Intake
            </span>
            <h2 className="text-2xl font-semibold text-neutral-950">
              Inquire for 30-Day Mentorship
            </h2>
            <p className="text-xs text-neutral-500">
              Submit your inquiry to lock calendar scheduling for the 30-Day Mentorship with Anuj Dwivedi.
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

        {/* Polished YC-Style FAQ Accordion */}
        <FAQSection />
      </div>
    </div>
  );
}
