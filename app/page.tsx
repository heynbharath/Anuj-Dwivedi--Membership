"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sparkles, Check, Layers, ShieldCheck } from "lucide-react";
import OctopusStage from "@/components/OctopusStage";
import { OCTOPUS_TANK_GOOGLE_FORM_URL, MEMBERSHIP_TIERS } from "@/lib/config";

export default function HomePage() {
  return (
    <div className="bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white">
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="pt-8 sm:pt-14 pb-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Institutional Crest & Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <img
              src="/octopus-assets/dsu-logo.png"
              alt="Dayananda Sagar University crest"
              className="w-10 h-10 object-contain rounded-full shadow-2xs"
            />
            <div className="text-left">
              <span className="block text-xs font-semibold text-neutral-900 leading-tight">
                Dayananda Sagar University
              </span>
              <span className="block text-[11px] text-neutral-500 font-mono">
                School of Engineering
              </span>
            </div>
          </div>

          {/* Event Status Pill */}
          <div className="inline-flex items-center gap-2 border border-neutral-200/90 rounded-full px-3.5 py-1 text-[11px] font-mono text-neutral-700 bg-neutral-50/70">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>31 OCT 2026 · DSU SCHOOL OF ENGINEERING</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-semibold tracking-tight text-neutral-950 leading-[1.05]">
            Eight arms.
            <br />
            Infinite ideas.
          </h1>

          {/* Supporting Lead */}
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto font-normal leading-relaxed">
            The premier startup pitch competition for B.Tech and M.Tech students. Learn how to pitch defensible ideas in a two-hour workshop, then step on stage live.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={OCTOPUS_TANK_GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-black text-white text-sm font-semibold hover:bg-neutral-800 transition-all duration-150 shadow-xs"
            >
              <span>Apply to Pitch (Google Form)</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </a>
            <a
              href="#membership"
              className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg border border-neutral-200 text-neutral-800 text-sm font-medium hover:bg-neutral-50 hover:border-neutral-300 transition-all"
            >
              <span>Explore Membership</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
            </a>
          </div>

          {/* Tagline & 4-color Rule */}
          <div className="pt-3 flex flex-col items-center gap-2">
            <span className="font-mono text-xs text-neutral-400 tracking-[0.2em] uppercase">
              Pitch. Compete. Launch.
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
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
          <div className="p-6 sm:p-8 flex flex-col justify-center">
            <span className="font-mono text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight">
              31 OCT
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 mt-1">
              Event Date, 2026
            </span>
          </div>
          <div className="p-6 sm:p-8 flex flex-col justify-center">
            <span className="font-mono text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight">
              8
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 mt-1">
              Focus Domains
            </span>
          </div>
          <div className="p-6 sm:p-8 flex flex-col justify-center">
            <span className="font-mono text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight">
              2–4
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 mt-1">
              Members Per Team
            </span>
          </div>
          <div className="p-6 sm:p-8 flex flex-col justify-center">
            <span className="font-mono text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight">
              50
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 mt-1">
              Team Target
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          THE 8 DOMAINS SECTION
      ========================================================= */}
      <section id="domains" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
              Domains
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-neutral-950">
              Pitch across eight frontiers
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Every arm of the octopus represents an engineering and venture discipline. Select the territory where your idea solves a real problem.
            </p>
          </div>

          {/* 3-Column Layout: Left Cards | Central Floating Octopus | Right Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left 4 Domains */}
            <div className="lg:col-span-4 space-y-3">
              <div className="p-4 rounded-xl border border-neutral-200/80 bg-neutral-50/40 hover:bg-white hover:border-neutral-300 transition-all">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">AI &amp; Data</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Autonomous agents, foundation model applications, and inference pipelines.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-neutral-200/80 bg-neutral-50/40 hover:bg-white hover:border-neutral-300 transition-all">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">Robotics &amp; IoT</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Connected hardware, intelligent embedded systems, and telemetry.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-neutral-200/80 bg-neutral-50/40 hover:bg-white hover:border-neutral-300 transition-all">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">Sustainability</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Clean energy software, resource monitoring, and circular infrastructure.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-neutral-200/80 bg-neutral-50/40 hover:bg-white hover:border-neutral-300 transition-all">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">Business &amp; Legal Tech</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  SaaS tooling, intelligent compliance, and workflow automation.
                </p>
              </div>
            </div>

            {/* Middle Stage: Floating Octopus */}
            <div className="lg:col-span-4 flex items-center justify-center py-4">
              <div className="w-full max-w-[340px]">
                <OctopusStage clip="float" />
              </div>
            </div>

            {/* Right 4 Domains */}
            <div className="lg:col-span-4 space-y-3">
              <div className="p-4 rounded-xl border border-neutral-200/80 bg-neutral-50/40 hover:bg-white hover:border-neutral-300 transition-all">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">Cybersecurity</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Zero-trust systems, privacy preserving compute, and vulnerability defense.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-neutral-200/80 bg-neutral-50/40 hover:bg-white hover:border-neutral-300 transition-all">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">Engineering Design</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Rapid prototyping, computational mechanics, and hardware architecture.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-neutral-200/80 bg-neutral-50/40 hover:bg-white hover:border-neutral-300 transition-all">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">Aero &amp; Mobility</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Unmanned flight software, EV systems, and urban mobility logistics.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-neutral-200/80 bg-neutral-50/40 hover:bg-white hover:border-neutral-300 transition-all">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">MedTech</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Diagnostic assistive devices, bio-sensing, and digital healthcare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FORMAT & TIMELINE SECTION
      ========================================================= */}
      <section id="format" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-100 bg-neutral-50/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 3 Steps */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                The Format
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-neutral-950">
                Learn the pitch. Then take the stage.
              </h2>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-[56px_1fr] gap-4 pt-4 border-t border-neutral-200">
                <span className="font-mono text-xs text-neutral-400 font-medium pt-1">
                  01
                </span>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-neutral-900">
                    Two-Hour Pitch Workshop
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Before stepping on stage, every team participates in a rigorous 2-hour masterclass breaking down pitch structure, technical validation, and judge psychology.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[56px_1fr] gap-4 pt-4 border-t border-neutral-200">
                <span className="font-mono text-xs text-neutral-400 font-medium pt-1">
                  02
                </span>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-neutral-900">
                    Live Pitch Competition
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Teams pitch live in their chosen domain before senior engineers, founders, and advisors. Defend your technical architecture and commercial logic.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[56px_1fr] gap-4 pt-4 border-t border-neutral-200">
                <span className="font-mono text-xs text-neutral-400 font-medium pt-1">
                  03
                </span>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-neutral-900">
                    Launch &amp; Backing
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Winning teams receive cash prizes, internship placements, ongoing mentorship, and access to the private builder network.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Window Card with Swaying Octopus */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100 text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
                </div>
                <span>octopus / live stage</span>
              </div>

              <div className="py-2">
                <OctopusStage clip="wave" />
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>8 Domains</span>
                <span>2-Hour Workshop</span>
                <span>1 Stage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PERKS STRIP
      ========================================================= */}
      <section id="perks" className="py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
              Outcomes
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-semibold tracking-tight text-neutral-950">
              What winning teams take away
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50/50 space-y-3">
              <span className="font-mono text-xs text-neutral-400">01</span>
              <h3 className="text-base font-semibold text-neutral-950">Cash Prizes</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Direct monetary rewards awarded to top-performing teams across domains to fund early prototypes.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50/50 space-y-3">
              <span className="font-mono text-xs text-neutral-400">02</span>
              <h3 className="text-base font-semibold text-neutral-950">Internship Roles</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Exclusive fast-track internship interviews with partner technology ventures and ecosystem companies.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50/50 space-y-3">
              <span className="font-mono text-xs text-neutral-400">03</span>
              <h3 className="text-base font-semibold text-neutral-950">Structured Mentorship</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Four dedicated milestone sprints with seasoned advisors to turn raw pitch into functional product.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50/50 space-y-3">
              <span className="font-mono text-xs text-neutral-400">04</span>
              <h3 className="text-base font-semibold text-neutral-950">Venture Guidance</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Ongoing guidance on architecture, company registration, and incubator applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          THE MEMBERSHIP SECTION (Clean, Minimal, Structured)
      ========================================================= */}
      <section id="membership" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
              Continuous Engagement
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-neutral-950">
              The Membership
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              For engineers, technical founders, and builders who value deep signal over superficial hype. Stay close to production architectures, codebases, and private teardowns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tier 1: The Library */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-7 flex flex-col justify-between space-y-6 hover:border-neutral-300 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Tier 01
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-neutral-100 text-neutral-700">
                    Foundations
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-950">The Library</h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    Curated technical architectures &amp; digests.
                  </p>
                </div>
                <div className="pt-2 border-t border-neutral-100 space-y-2.5 text-xs text-neutral-600">
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                    <span>Curated technical notes &amp; model inference breakdowns</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                    <span>Problem validation and pitch preparation worksheets</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                    <span>Private release digests of AI engineering tools</span>
                  </div>
                </div>
              </div>

              <Link
                href="/membership#the-library"
                className="w-full text-center py-2.5 rounded-lg border border-neutral-200 text-xs font-semibold text-neutral-800 hover:bg-neutral-50 transition-all"
              >
                Request Access
              </Link>
            </div>

            {/* Tier 2: The Builder (Anchor) */}
            <div className="rounded-2xl border-2 border-black bg-white p-7 flex flex-col justify-between space-y-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Tier 02
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-black text-white">
                    Recommended
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-950">The Builder</h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    Structured pathways &amp; live teardowns.
                  </p>
                </div>
                <div className="pt-2 border-t border-neutral-100 space-y-2.5 text-xs text-neutral-600">
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                    <span>Everything included in The Library</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                    <span>Structured roadmap across agentic AI and pipelines</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                    <span>Monthly closed-door group technical teardowns</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                    <span>Builder collective discussion &amp; architecture review</span>
                  </div>
                </div>
              </div>

              <Link
                href="/membership#the-builder"
                className="w-full text-center py-2.5 rounded-lg bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-all shadow-xs"
              >
                Join Builder Waitlist
              </Link>
            </div>

            {/* Tier 3: The Inner Circle */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-7 flex flex-col justify-between space-y-6 hover:border-neutral-300 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Tier 03
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-neutral-100 text-neutral-700">
                    Selective Cohort
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-950">The Inner Circle</h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    Direct strategic proximity &amp; advisory.
                  </p>
                </div>
                <div className="pt-2 border-t border-neutral-100 space-y-2.5 text-xs text-neutral-600">
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                    <span>Everything included in The Builder</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                    <span>Private 1:1 system architecture stress-testing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                    <span>Pitch rehearsal &amp; narrative stress-testing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-neutral-900 shrink-0 mt-0.5" />
                    <span>Strictly capped cohort size by review</span>
                  </div>
                </div>
              </div>

              <Link
                href="/membership#the-inner-circle"
                className="w-full text-center py-2.5 rounded-lg border border-neutral-200 text-xs font-semibold text-neutral-800 hover:bg-neutral-50 transition-all"
              >
                Request Consideration
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          THE ETHOS / MYSTERY (Quiet Authority, Minimal Copy)
      ========================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-100 bg-neutral-50/40">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-400">
            Ethos &amp; Direction
          </span>
          <blockquote className="text-2xl sm:text-3xl font-sans font-medium text-neutral-900 tracking-tight leading-snug">
            &ldquo;Builders do not buy hours. They buy clarity, direction, and execution transformation.&rdquo;
          </blockquote>
          <p className="text-sm text-neutral-500 max-w-xl mx-auto leading-relaxed">
            Led by Anuj Dwivedi (Founder, Tempete Club) in partnership with DSU School of Engineering. High-leverage advisory, quiet engineering discipline, and real-world execution.
          </p>
          <div className="pt-2 flex justify-center">
            <Link
              href="/about"
              className="text-xs font-mono font-medium text-neutral-700 hover:text-black inline-flex items-center gap-1.5"
            >
              <span>Read the full manifesto</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          APPLICATION & CLOSING ARENA (Eyes Animation)
      ========================================================= */}
      <section id="apply" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50/60 p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Glowing Eyes Octopus Stage */}
            <div className="md:col-span-5 flex justify-center">
              <div className="w-full max-w-[280px]">
                <OctopusStage clip="eyes" />
              </div>
            </div>

            {/* Right: Registration Copy & Google Form CTA */}
            <div className="md:col-span-7 space-y-5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                Team Registration
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-neutral-950">
                Register your team
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                Teams register through the official application form. Open exclusively to DSU School of Engineering students (B.Tech &amp; M.Tech). 2 to 4 members per team. Select your domain, outline your concept, and step into the tank.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={OCTOPUS_TANK_GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-black text-white text-sm font-semibold hover:bg-neutral-800 transition-all shadow-xs"
                >
                  <span>Open Application Form</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70" />
                </a>
                <span className="font-mono text-xs text-neutral-400">
                  ₹299 RSVP fee asked inside form
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ ACCORDION (Clean, Minimal, No Clutter)
      ========================================================= */}
      <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 border-t border-neutral-100">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
              Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-semibold tracking-tight text-neutral-950">
              Frequently asked questions
            </h2>
          </div>

          <div className="border-t border-neutral-200 divide-y divide-neutral-200 text-sm">
            <details className="group py-4.5">
              <summary className="list-none cursor-pointer flex justify-between items-center font-medium text-neutral-900 group-hover:text-black">
                <span>Who can take part in Octopus Tank 2026?</span>
                <span className="font-mono text-neutral-400 group-open:rotate-45 transition-transform text-lg leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-neutral-600 text-xs sm:text-sm leading-relaxed pr-6">
                Students of Dayananda Sagar University School of Engineering only, across all B.Tech and M.Tech branches.
              </p>
            </details>

            <details className="group py-4.5">
              <summary className="list-none cursor-pointer flex justify-between items-center font-medium text-neutral-900 group-hover:text-black">
                <span>How many members can be on a team?</span>
                <span className="font-mono text-neutral-400 group-open:rotate-45 transition-transform text-lg leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-neutral-600 text-xs sm:text-sm leading-relaxed pr-6">
                Each team must consist of 2 to 4 members. Cross-branch teams within the School of Engineering are welcomed and encouraged.
              </p>
            </details>

            <details className="group py-4.5">
              <summary className="list-none cursor-pointer flex justify-between items-center font-medium text-neutral-900 group-hover:text-black">
                <span>What is the registration fee?</span>
                <span className="font-mono text-neutral-400 group-open:rotate-45 transition-transform text-lg leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-neutral-600 text-xs sm:text-sm leading-relaxed pr-6">
                There is a nominal per-team RSVP fee of ₹299. It is asked for only when your team submits details through the official Google Form.
              </p>
            </details>

            <details className="group py-4.5">
              <summary className="list-none cursor-pointer flex justify-between items-center font-medium text-neutral-900 group-hover:text-black">
                <span>What happens during the event?</span>
                <span className="font-mono text-neutral-400 group-open:rotate-45 transition-transform text-lg leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-neutral-600 text-xs sm:text-sm leading-relaxed pr-6">
                The day begins with a mandatory 2-hour pitch workshop teaching presentation clarity, story structure, and technical defensibility. Following the workshop, teams pitch live in their selected domain before the judging panel.
              </p>
            </details>

            <details className="group py-4.5">
              <summary className="list-none cursor-pointer flex justify-between items-center font-medium text-neutral-900 group-hover:text-black">
                <span>How do we register?</span>
                <span className="font-mono text-neutral-400 group-open:rotate-45 transition-transform text-lg leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-neutral-600 text-xs sm:text-sm leading-relaxed pr-6">
                Submit your team information directly through the{" "}
                <a
                  href={OCTOPUS_TANK_GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-black underline underline-offset-2"
                >
                  official Google Form application link
                </a>
                .
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
