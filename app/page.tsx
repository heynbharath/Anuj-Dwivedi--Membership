"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Check,
  Award,
  Calendar,
  Users,
  Target,
  Clock,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import OctopusStage from "@/components/OctopusStage";
import {
  OCTOPUS_TANK_GOOGLE_FORM_URL,
  WINNERS_MENTORSHIP_CONFIG,
} from "@/lib/config";

export default function HomePage() {
  const [pricingMode, setPricingMode] = useState<"competition" | "standard">("competition");

  return (
    <div className="bg-white text-neutral-900 selection:bg-black selection:text-white">
      {/* =========================================================
          HERO SECTION (YC Startup Aesthetic)
      ========================================================= */}
      <section className="pt-10 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Institutional Eyebrow */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 border border-neutral-200/90 rounded-full px-3 py-1 text-[11px] font-mono text-neutral-700 bg-neutral-50/80 shadow-2xs">
              <img
                src="/octopus-assets/dsu-logo.png"
                alt="DSU Crest"
                className="w-4 h-4 rounded-full object-contain"
              />
              <span className="font-semibold text-neutral-900">DSU School of Engineering</span>
              <span className="text-neutral-400">×</span>
              <span className="text-neutral-600">Archzos Technologies</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium text-emerald-800 bg-emerald-50 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>31 OCT 2026 · REGISTRATIONS OPEN</span>
            </div>
          </div>

          {/* Main Display Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-semibold tracking-tight text-neutral-950 leading-[1.04]">
            Eight arms.
            <br />
            Infinite ideas.
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto font-normal leading-relaxed">
            The flagship startup pitch competition for B.Tech &amp; M.Tech engineering students. Learn to pitch defensible products in a 2-hour masterclass, then compete live for <strong className="text-neutral-950 font-semibold">30 days of daily 1:1 mentorship</strong> by Archzos Technologies.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={OCTOPUS_TANK_GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-all duration-150 shadow-xs"
            >
              <span>Apply to Pitch (Google Form)</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
            <a
              href="#mentorship-pricing"
              className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg border border-neutral-200 text-neutral-800 text-xs font-medium hover:bg-neutral-50 hover:border-neutral-300 transition-all"
            >
              <span>Explore 30-Day Mentorship &amp; Tiers</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
            </a>
          </div>

          {/* Tagline & Subtle 4-color Bar */}
          <div className="pt-2 flex flex-col items-center gap-2">
            <span className="font-mono text-xs text-neutral-400 tracking-[0.2em] uppercase">
              Pitch. Build. Launch.
            </span>
            <div className="flex w-24 h-0.5 rounded-full overflow-hidden">
              <span className="flex-1 bg-blue-500" />
              <span className="flex-1 bg-red-500" />
              <span className="flex-1 bg-amber-400" />
              <span className="flex-1 bg-emerald-500" />
            </div>
          </div>

          {/* Animated Hero Octopus */}
          <div className="pt-4 max-w-xl mx-auto">
            <OctopusStage clip="hero" />
          </div>
        </div>
      </section>

      {/* =========================================================
          KEY STATS STRIP
      ========================================================= */}
      <section className="border-b border-neutral-200 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-neutral-200 text-center md:text-left">
          <div className="p-6 sm:p-8">
            <span className="font-mono text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight">
              31 OCT
            </span>
            <span className="block font-mono text-[11px] uppercase tracking-wider text-neutral-500 mt-1">
              Event Date, 2026
            </span>
          </div>
          <div className="p-6 sm:p-8">
            <span className="font-mono text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight">
              8
            </span>
            <span className="block font-mono text-[11px] uppercase tracking-wider text-neutral-500 mt-1">
              Engineering Domains
            </span>
          </div>
          <div className="p-6 sm:p-8">
            <span className="font-mono text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight">
              2–4
            </span>
            <span className="block font-mono text-[11px] uppercase tracking-wider text-neutral-500 mt-1">
              Members Per Team
            </span>
          </div>
          <div className="p-6 sm:p-8">
            <span className="font-mono text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight">
              80% OFF
            </span>
            <span className="block font-mono text-[11px] uppercase tracking-wider text-neutral-500 mt-1">
              Winner Mentorship Subsidy
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOUNDER & ADVISOR SPOTLIGHT (Featuring Anuj Dwivedi)
      ========================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-100 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                Lead Mentor &amp; Keynote Advisor
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-neutral-950">
                Led by Anuj Dwivedi
              </h2>
              <p className="text-neutral-600 text-sm max-w-xl">
                Founder of Archzos Technologies Pvt Ltd. Specialist in artificial intelligence engineering, high-stakes startup pitching, and professional executive presence.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-200 bg-neutral-50 text-xs font-mono text-neutral-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>30 Days of Mentorship · 1 Hour Daily</span>
            </div>
          </div>

          {/* Visual Showcase: High-Res Portrait + Real Stage Proof */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* Main Portrait Card */}
            <div className="md:col-span-5 rounded-2xl border border-neutral-200 bg-neutral-50/50 p-6 flex flex-col justify-between space-y-6">
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200/80">
                <Image
                  src="/images/anuj-prof-3.png"
                  alt="Anuj Dwivedi - Founder, Archzos Technologies"
                  fill
                  className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-xs text-white text-[10px] font-mono font-medium">
                  Anuj Dwivedi
                </div>
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-white/95 backdrop-blur-xs border border-neutral-200/60 shadow-xs space-y-0.5">
                  <span className="block text-xs font-semibold text-neutral-950">
                    Founder, Archzos Technologies Pvt Ltd
                  </span>
                  <span className="block text-[11px] text-neutral-500 font-mono">
                    AI Systems • Pitching • Professional Presence
                  </span>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs text-neutral-600">
                <blockquote className="font-serif italic text-sm text-neutral-800 leading-snug">
                  &ldquo;Builders do not buy hours. They buy clarity, defensibility, and unshakeable execution momentum.&rdquo;
                </blockquote>
                <p className="text-[11px] text-neutral-500 leading-relaxed">
                  Through Archzos Technologies and Octopus Tank, Anuj works 1:1 with ambitious engineering teams to validate AI pipelines, refine pitch defensibility, and build launch-ready products.
                </p>
              </div>
            </div>

            {/* Right Column: Keynote Stage & Workshop Live Action */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-6">
              {/* Keynote Card */}
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50/30 p-6 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
                  <span className="inline-flex items-center gap-1.5 font-medium text-neutral-900">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Keynote Address &amp; Hackathon Judging
                  </span>
                  <span>Bangalore Stage</span>
                </div>
                <div className="relative aspect-[16/8] w-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-200">
                  <Image
                    src="/images/anuj-keynote.png"
                    alt="Anuj Dwivedi Keynote on Live Stage"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 text-white">
                    <span className="text-[10px] font-mono text-neutral-300 block uppercase tracking-wider">
                      Live Keynote
                    </span>
                    <span className="text-sm font-semibold">
                      Artificial Intelligence &amp; Venture Engineering
                    </span>
                  </div>
                </div>
              </div>

              {/* Live Workshop Interaction Card */}
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50/30 p-6 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
                  <span className="inline-flex items-center gap-1.5 font-medium text-neutral-900">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    Engineering Masterclass &amp; Student Mentorship
                  </span>
                  <span>Campus Cohort</span>
                </div>
                <div className="relative aspect-[16/8] w-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-200">
                  <Image
                    src="/images/anuj-workshop-event-opt.jpg"
                    alt="Anuj Dwivedi leading hands-on technical workshop"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 text-white">
                    <span className="text-[10px] font-mono text-neutral-300 block uppercase tracking-wider">
                      Direct Mentorship
                    </span>
                    <span className="text-sm font-semibold">
                      Teaching Founders to Build Intentionally
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          THE 8 DOMAINS ARENA (Tasteful Octopus Assets)
      ========================================================= */}
      <section id="domains" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-100 bg-neutral-50/20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
              Competition Arenas
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-neutral-950">
              Pitch across eight frontiers
            </h2>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Every arm of the octopus represents a technical frontier. Choose the arena where your prototype solves a high-impact problem.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left 4 Domains */}
            <div className="lg:col-span-4 space-y-3">
              <div className="p-4.5 rounded-xl border border-neutral-200/90 bg-white hover:border-neutral-400 transition-all shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">AI &amp; Data</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Autonomous agents, LLM pipelines, and production inference.
                </p>
              </div>

              <div className="p-4.5 rounded-xl border border-neutral-200/90 bg-white hover:border-neutral-400 transition-all shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">Robotics &amp; IoT</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Connected devices, sensor arrays, and embedded automation.
                </p>
              </div>

              <div className="p-4.5 rounded-xl border border-neutral-200/90 bg-white hover:border-neutral-400 transition-all shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">Sustainability</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Clean energy tech, grid optimization, and carbon intelligence.
                </p>
              </div>

              <div className="p-4.5 rounded-xl border border-neutral-200/90 bg-white hover:border-neutral-400 transition-all shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">Business &amp; Legal Tech</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Workflow intelligence, enterprise SaaS, and compliance tech.
                </p>
              </div>
            </div>

            {/* Central Stage: Floating Octopus */}
            <div className="lg:col-span-4 flex items-center justify-center py-4">
              <div className="w-full max-w-[320px]">
                <OctopusStage clip="float" />
              </div>
            </div>

            {/* Right 4 Domains */}
            <div className="lg:col-span-4 space-y-3">
              <div className="p-4.5 rounded-xl border border-neutral-200/90 bg-white hover:border-neutral-400 transition-all shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">Cybersecurity</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Zero-trust infrastructure, encryption, and threat defense.
                </p>
              </div>

              <div className="p-4.5 rounded-xl border border-neutral-200/90 bg-white hover:border-neutral-400 transition-all shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">Engineering Design</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Rapid hardware prototyping, mechatronics, and physical compute.
                </p>
              </div>

              <div className="p-4.5 rounded-xl border border-neutral-200/90 bg-white hover:border-neutral-400 transition-all shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">Aero &amp; Mobility</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Autonomous aerial systems, telemetry, and electric transit.
                </p>
              </div>

              <div className="p-4.5 rounded-xl border border-neutral-200/90 bg-white hover:border-neutral-400 transition-all shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">MedTech</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Clinical diagnostic aids, health sensors, and bio-hardware.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WINNERS' MENTORSHIP & MEMBERSHIP PRICING (YC Product Style)
      ========================================================= */}
      <section id="mentorship-pricing" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                Official Programme &amp; Pricing
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-neutral-950">
                30 Days of Mentorship.
                <br />
                1 Hour Daily.
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                Standard programme fee: <strong className="text-neutral-900 font-semibold">₹75,000</strong>. Competition winners earn massive subsidies (up to 80% off). Mentorship provided directly by Archzos Technologies.
              </p>
            </div>

            {/* Pricing Mode Toggle */}
            <div className="inline-flex p-1 rounded-xl bg-neutral-100 border border-neutral-200 text-xs font-mono">
              <button
                type="button"
                onClick={() => setPricingMode("competition")}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  pricingMode === "competition"
                    ? "bg-white text-black font-semibold shadow-2xs"
                    : "text-neutral-500 hover:text-black"
                }`}
              >
                Octopus Tank Subsidies
              </button>
              <button
                type="button"
                onClick={() => setPricingMode("standard")}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  pricingMode === "standard"
                    ? "bg-white text-black font-semibold shadow-2xs"
                    : "text-neutral-500 hover:text-black"
                }`}
              >
                Direct Enrollment
              </button>
            </div>
          </div>

          {/* Pricing Grid (YC High-Converting Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* Card 1: 1st Place Winner Offer */}
            <div className="rounded-2xl border-2 border-blue-600/80 bg-white p-7 flex flex-col justify-between space-y-6 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-600 text-white font-mono text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                1st Place Award
              </div>

              <div className="space-y-5 pt-1">
                <div>
                  <span className="font-mono text-xs uppercase text-blue-600 font-bold tracking-wider">
                    80% Winner Subsidy
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
                    Save ₹60,000 upon competition win
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
                    <span>1 hour daily (online or offline by arrangement)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Focus on AI systems, pitch coaching &amp; executive presence</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Full code review, model optimization &amp; architecture audit</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Separate cash prize eligibility included</span>
                  </div>
                </div>
              </div>

              <a
                href={OCTOPUS_TANK_GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-center text-xs font-semibold transition-all shadow-xs inline-flex items-center justify-center gap-1.5"
              >
                <span>Apply to Pitch for 1st Place</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 2: 2nd Place Winner Offer */}
            <div className="rounded-2xl border-2 border-red-500/80 bg-white p-7 flex flex-col justify-between space-y-6 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white font-mono text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                2nd Place Award
              </div>

              <div className="space-y-5 pt-1">
                <div>
                  <span className="font-mono text-xs uppercase text-red-600 font-bold tracking-wider">
                    70% Winner Subsidy
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
                    Save ₹52,500 upon competition win
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
                    <span>1 hour daily (online or offline by arrangement)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>Focus on AI systems, pitch coaching &amp; executive presence</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>Deck restructuring, investor narrative &amp; founder polish</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>Separate cash prize eligibility included</span>
                  </div>
                </div>
              </div>

              <a
                href={OCTOPUS_TANK_GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-center text-xs font-semibold transition-all shadow-xs inline-flex items-center justify-center gap-1.5"
              >
                <span>Apply to Pitch for 2nd Place</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 3: Standard Builder Enrollment / Inner Circle */}
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-7 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div>
                  <span className="font-mono text-xs uppercase text-neutral-500 font-bold tracking-wider">
                    Direct Cohort Enrollment
                  </span>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="font-sans text-4xl sm:text-5xl font-bold text-neutral-950">
                      ₹75,000
                    </span>
                    <span className="text-xs text-neutral-500 font-mono">/ month</span>
                  </div>
                  <span className="inline-block font-mono text-xs text-neutral-500 mt-1">
                    Standard non-subsidized programme rate
                  </span>
                </div>

                <div className="pt-3 border-t border-neutral-200 space-y-2.5 text-xs text-neutral-700">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                    <span>Full 30-day intensive: 1 hour daily direct guidance</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                    <span>Online or offline in Bangalore by arrangement</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                    <span>Architectural review, LLM stack analysis &amp; security</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                    <span>Dedicated roadmap &amp; ongoing founder advisory channel</span>
                  </div>
                </div>
              </div>

              <Link
                href="/membership"
                className="w-full py-2.5 rounded-lg border border-neutral-300 bg-white hover:bg-neutral-100 text-center text-xs font-semibold text-neutral-900 transition-all shadow-2xs"
              >
                Inquire for Direct Enrollment
              </Link>
            </div>
          </div>

          <div className="pt-2 text-center text-xs font-mono text-neutral-400">
            * Third-place offer to be announced. Optional paid mentorship • Cash prizes separate • Redeem anytime; scheduling by agreement.
          </div>
        </div>
      </section>

      {/* =========================================================
          APPLICATION ARENA (Eyes Animation)
      ========================================================= */}
      <section id="apply" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-100 bg-neutral-50/40">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-xs">
            <div className="md:col-span-5 flex justify-center">
              <div className="w-full max-w-[280px]">
                <OctopusStage clip="eyes" />
              </div>
            </div>

            <div className="md:col-span-7 space-y-5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                Team Application
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-neutral-950">
                Ready to step into the tank?
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Open exclusively to DSU School of Engineering students (B.Tech &amp; M.Tech). Teams consist of 2 to 4 members. RSVP fee is ₹299 per team, processed directly inside the official Google Form.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={OCTOPUS_TANK_GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-all shadow-xs"
                >
                  <span>Open Official Application Form</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                </a>
                <span className="font-mono text-xs text-neutral-400">
                  ₹299 / team RSVP
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ ACCORDION
      ========================================================= */}
      <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
              Questions &amp; Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-semibold tracking-tight text-neutral-950">
              Frequently asked questions
            </h2>
          </div>

          <div className="border-t border-neutral-200 divide-y divide-neutral-200 text-sm">
            <details className="group py-4.5">
              <summary className="list-none cursor-pointer flex justify-between items-center font-medium text-neutral-900 group-hover:text-black">
                <span>Who is eligible to participate?</span>
                <span className="font-mono text-neutral-400 group-open:rotate-45 transition-transform text-lg leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-neutral-600 text-xs sm:text-sm leading-relaxed pr-6">
                Students of Dayananda Sagar University School of Engineering only, across all B.Tech and M.Tech programmes and branches.
              </p>
            </details>

            <details className="group py-4.5">
              <summary className="list-none cursor-pointer flex justify-between items-center font-medium text-neutral-900 group-hover:text-black">
                <span>What are the mentorship subsidies for winners?</span>
                <span className="font-mono text-neutral-400 group-open:rotate-45 transition-transform text-lg leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-neutral-600 text-xs sm:text-sm leading-relaxed pr-6">
                The standard fee for 30 Days of Mentorship with Anuj Dwivedi (Archzos Technologies) is ₹75,000. 1st Place winners receive 80% OFF (Pay ₹15,000, Save ₹60,000). 2nd Place winners receive 70% OFF (Pay ₹22,500, Save ₹52,500). Cash prizes are awarded separately.
              </p>
            </details>

            <details className="group py-4.5">
              <summary className="list-none cursor-pointer flex justify-between items-center font-medium text-neutral-900 group-hover:text-black">
                <span>How are the 30 days of mentorship structured?</span>
                <span className="font-mono text-neutral-400 group-open:rotate-45 transition-transform text-lg leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-neutral-600 text-xs sm:text-sm leading-relaxed pr-6">
                1 hour daily sessions (online or offline in Bangalore by arrangement), covering AI technical architecture, pitch deck stress-testing, and professional executive presence.
              </p>
            </details>

            <details className="group py-4.5">
              <summary className="list-none cursor-pointer flex justify-between items-center font-medium text-neutral-900 group-hover:text-black">
                <span>What is the team size and registration fee?</span>
                <span className="font-mono text-neutral-400 group-open:rotate-45 transition-transform text-lg leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-neutral-600 text-xs sm:text-sm leading-relaxed pr-6">
                Teams consist of 2 to 4 members. The per-team RSVP fee is ₹299, requested directly when submitting the Google Form.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
