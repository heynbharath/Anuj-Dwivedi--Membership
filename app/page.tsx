"use client";

import React from "react";
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
  MessageCircle,
  Lightbulb,
  Compass,
  Code2,
  Layers,
  Cpu,
} from "lucide-react";
import OctopusStage from "@/components/OctopusStage";
import FAQSection from "@/components/FAQSection";
import InfographicDomainsArena from "@/components/InfographicDomainsArena";
import TheMindsBehind from "@/components/TheMindsBehind";
import {
  OCTOPUS_TANK_GOOGLE_FORM_URL,
  SITE_CONFIG,
} from "@/lib/config";

export default function HomePage() {
  return (
    <div className="bg-white text-neutral-900 selection:bg-black selection:text-white">
      {/* =========================================================
          HERO SECTION (High-Octane YC / Linear Aesthetic)
      ========================================================= */}
      <section className="pt-10 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Institutional Eyebrow & Live Registration Badge */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 border border-neutral-200/90 rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-mono text-neutral-800 bg-white/95 backdrop-blur-xs shadow-xs hover:border-neutral-300 transition-all">
              {/* DSU SOE */}
              <div className="inline-flex items-center gap-2">
                <img
                  src="/octopus-assets/dsu-logo.png"
                  alt="DSU Crest"
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-contain shrink-0"
                />
                <span className="font-semibold text-neutral-950">DSU School of Engg</span>
              </div>

              <span className="text-neutral-300 font-light">×</span>

              {/* Tempête AI Club */}
              <div className="inline-flex items-center gap-2">
                <Image
                  src="/images/tempete/tempete-icon-color.svg"
                  alt="Tempête AI Club"
                  width={28}
                  height={28}
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain rounded-md shrink-0 shadow-2xs"
                />
                <span className="font-semibold text-neutral-950">Tempête AI Club</span>
              </div>

              <span className="text-neutral-300 font-light">×</span>

              {/* Archzos Technologies */}
              <div className="inline-flex items-center gap-2">
                <Image
                  src="/images/archzos-logo.png"
                  alt="Archzos Logo"
                  width={28}
                  height={28}
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain shrink-0"
                />
                <span className="font-semibold text-neutral-950">Archzos</span>
              </div>

              <span className="text-neutral-300 font-light">×</span>

              {/* Circle13 Platform */}
              <div className="inline-flex items-center gap-2">
                <Image
                  src="/images/circle13-logo-transparent.png"
                  alt="Circle13 Logo"
                  width={28}
                  height={28}
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain shrink-0"
                />
                <span className="font-semibold text-neutral-950">Circle13</span>
              </div>
            </div>

            {/* Date Badge */}
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-mono font-medium text-emerald-800 bg-emerald-50 border border-emerald-200/90 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
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
            The flagship startup pitch competition for B.Tech &amp; M.Tech engineering students, presented by <strong className="text-neutral-950 font-semibold">Tempête AI Club</strong> &amp; <strong className="text-neutral-950 font-semibold">DSU School of Engineering</strong>, with keynote mentorship by <strong className="text-neutral-950 font-semibold">Archzos Technologies</strong> and venture platform architecture co-hosted by <strong className="text-neutral-950 font-semibold">Circle13</strong>.
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
              href="#domains"
              className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg border border-neutral-200 text-neutral-800 text-xs font-medium hover:bg-neutral-50 hover:border-neutral-300 transition-all shadow-2xs"
            >
              <span>Explore 8 Domains &amp; Infographics</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
            </a>
            <a
              href="#leadership"
              className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg bg-neutral-100 text-neutral-800 text-xs font-medium hover:bg-neutral-200 transition-all"
            >
              <span>Meet The Minds</span>
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
              Live Stage Demo Day, 2026
            </span>
          </div>
          <div className="p-6 sm:p-8">
            <span className="font-mono text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight">
              8
            </span>
            <span className="block font-mono text-[11px] uppercase tracking-wider text-neutral-500 mt-1">
              Frontier Engineering Domains
            </span>
          </div>
          <div className="p-6 sm:p-8">
            <span className="font-mono text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight">
              2–4
            </span>
            <span className="block font-mono text-[11px] uppercase tracking-wider text-neutral-500 mt-1">
              Engineers Per Pitch Team
            </span>
          </div>
          <div className="p-6 sm:p-8">
            <span className="font-mono text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight">
              1:1 ADVISORY
            </span>
            <span className="block font-mono text-[11px] uppercase tracking-wider text-neutral-500 mt-1">
              Archzos &amp; Circle13 Incubation
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          THE FOUR PILLARS / COMPETITION BLUEPRINT INFOGRAPHIC
      ========================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-100 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                THE COMPETITION LIFECYCLE
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-neutral-950">
                From Raw Ambition to Production-Ready Architecture
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Octopus Tank is not another generic college slide presentation. It is an intentional engineering accelerator designed to stress-test your system design, uncover fatal bottlenecks, and turn working prototypes into venture-backed platforms.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-neutral-200 bg-neutral-50 text-xs font-mono text-neutral-700">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>4-Stage Venture Blueprint</span>
            </div>
          </div>

          {/* 4 Pillars Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-neutral-50/70 border border-neutral-200 hover:border-neutral-300 transition-all flex flex-col justify-between space-y-4 shadow-2xs">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-black text-white font-mono text-xs font-bold flex items-center justify-center">
                    01
                  </span>
                  <Compass className="w-4 h-4 text-neutral-500" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-950">
                  TEACH
                </h3>
                <span className="block text-[11px] font-mono text-blue-600 font-semibold">
                  Conceptual Engineering Rigor
                </span>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Strip away superficial buzzwords. Prioritize data ingest pipelines, latency budgets, hardware fail-safes, and fundamental mechanics before writing production code.
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-200 text-[11px] font-mono text-neutral-500">
                Outcome: Validated problem-solution fit.
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-neutral-50/70 border border-neutral-200 hover:border-neutral-300 transition-all flex flex-col justify-between space-y-4 shadow-2xs">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-black text-white font-mono text-xs font-bold flex items-center justify-center">
                    02
                  </span>
                  <Cpu className="w-4 h-4 text-neutral-500" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-950">
                  BUILD
                </h3>
                <span className="block text-[11px] font-mono text-amber-600 font-semibold">
                  Rapid Prototype Synthesis
                </span>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Assemble functioning code, microcontrollers, CAD assemblies, or fine-tuned model inference loops. Live executing bits and atoms beat 50 slide decks every single time.
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-200 text-[11px] font-mono text-neutral-500">
                Outcome: Tangible, demonstrable prototype.
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-neutral-50/70 border border-neutral-200 hover:border-neutral-300 transition-all flex flex-col justify-between space-y-4 shadow-2xs">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-black text-white font-mono text-xs font-bold flex items-center justify-center">
                    03
                  </span>
                  <Target className="w-4 h-4 text-neutral-500" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-950">
                  JUDGE
                </h3>
                <span className="block text-[11px] font-mono text-red-600 font-semibold">
                  Live Stage Cross-Examination
                </span>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Step into the tank on 31 October 2026. Deliver a 5-minute pitch followed by 3 minutes of aggressive architectural scrutiny by Anuj Dwivedi and the expert panel.
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-200 text-[11px] font-mono text-neutral-500">
                Outcome: Battle-tested defensibility.
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-neutral-50/70 border border-neutral-200 hover:border-neutral-300 transition-all flex flex-col justify-between space-y-4 shadow-2xs">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-xl bg-black text-white font-mono text-xs font-bold flex items-center justify-center">
                    04
                  </span>
                  <Award className="w-4 h-4 text-neutral-500" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-950">
                  LAUNCH
                </h3>
                <span className="block text-[11px] font-mono text-emerald-600 font-semibold">
                  Mentorship &amp; Platform Incubation
                </span>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Winning teams receive 1:1 advisory with Archzos Technologies and venture systems backing by Circle13, connecting campus projects directly to angel networks and industry pilots.
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-200 text-[11px] font-mono text-neutral-500">
                Outcome: Institutional and commercial backing.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MASTER INFOGRAPHIC ARENA: ALL 8 DOMAINS & DEEP DETAILS
      ========================================================= */}
      <InfographicDomainsArena />

      {/* =========================================================
          APPLICATION ARENA (Eyes Animation & Quick Registration)
      ========================================================= */}
      <section id="apply" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-100 bg-neutral-50/40">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-xs">
            <div className="md:col-span-5 flex justify-center">
              <div className="w-full max-w-[280px]">
                <OctopusStage clip="eyes" />
              </div>
            </div>

            <div className="md:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>OFFICIAL APPLICATION FORM LIVE</span>
              </div>
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
                <span className="font-mono text-xs text-neutral-500">
                  ₹299 / team RSVP · 2–4 members · DSU Campus
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          THE MINDS BEHIND OCTOPUS TANK: ANUJ, BHARATH & AKHIL (IN THE LAST)
      ========================================================= */}
      <TheMindsBehind />

      {/* =========================================================
          POLISHED YC-STYLE FAQ ACCORDION (NO 75K/15K PRICING)
      ========================================================= */}
      <FAQSection />
    </div>
  );
}
