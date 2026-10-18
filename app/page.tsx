import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SITE_CONFIG,
  SERVICES_CATALOGUE,
  OCTOPUS_TANK_CONFIG,
  MEMBERSHIP_TIERS,
} from "@/lib/config";
import { formatINR } from "@/lib/utils";
import SectionHeader from "@/components/SectionHeader";
import VerificationNotice from "@/components/VerificationNotice";
import EvidenceModule from "@/components/EvidenceModule";
import CardDisplay from "@/components/CardDisplay";
import InfographicPillars from "@/components/InfographicPillars";
import InfographicOctopusArms from "@/components/InfographicOctopusArms";
import InfographicProcessFlow from "@/components/InfographicProcessFlow";
import InfographicArchitectureStack from "@/components/InfographicArchitectureStack";
import PhotographicProof from "@/components/PhotographicProof";
import InteractiveMotionGraphic from "@/components/InteractiveMotionGraphic";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Cpu,
  Layers,
  Sparkles,
  Users,
  Building,
  BookOpen,
  Target,
  ShieldCheck,
  Award,
  Mic,
  Presentation,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-white text-navy-950 space-y-20 sm:space-y-28 pb-16">
      {/* =========================================================
          HERO SECTION: WHITE BG + KEYNOTE PODIUM PHOTO + LEAST TEXT
      ========================================================= */}
      <section className="relative pt-6 pb-14 px-4 sm:px-6 lg:px-8 bg-light-grid overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Punchy Headline & CTAs (Least Text) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow Chip */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-gold-300 bg-gold-50/80 text-gold-800 text-[11px] font-mono font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>AI ENGINEERING • PITCH DEFENSIBILITY • EXECUTION</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-navy-950 leading-[1.08]">
              Knowledge is everywhere. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-amber-600 to-yellow-600">
                Clarity is the advantage.
              </span>
            </h1>

            {/* Punchy Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
              Practical guidance for engineers and founders across AI architecture, startup pitching, and execution discipline.
            </p>

            {/* Quick Metrics Infographic Row */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-[10px] uppercase font-mono font-bold text-gold-600">
                  Engineering
                </div>
                <div className="font-bold text-sm text-navy-950 mt-0.5">
                  AI & ML Systems
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-[10px] uppercase font-mono font-bold text-gold-600">
                  Defensibility
                </div>
                <div className="font-bold text-sm text-navy-950 mt-0.5">
                  Pitch & Strategy
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-[10px] uppercase font-mono font-bold text-gold-600">
                  Accountability
                </div>
                <div className="font-bold text-sm text-navy-950 mt-0.5">
                  30-Day Velocity
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-wider font-bold px-8 py-4 rounded-xl bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950 transition-all duration-200 shadow-lg shadow-navy-950/10"
              >
                <span>Find Your Engagement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/work"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-wider font-bold px-7 py-4 rounded-xl border border-slate-300 text-navy-950 hover:bg-slate-50 transition-all duration-200"
              >
                <span>Inspect Verified Code</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </Link>
            </div>

            {/* Trust Desk Notice */}
            <div className="pt-1 flex items-center space-x-3 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="font-mono text-[11px]">
                Coordinated strictly via <strong>Circle13 Management</strong>
              </span>
            </div>
          </div>

          {/* Right Column: Hero Keynote Photograph Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Gold Ambient Ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-gold-400 via-amber-200 to-gold-500 rounded-3xl blur-xl opacity-30 transform -rotate-2" />

              <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-2xl p-3 sm:p-4">
                {/* 16:11 Aspect Frame fitting the 1024x681 Keynote Podium Image */}
                <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-slate-900 border border-gold-400/40 group">
                  <Image
                    src="/images/anuj-keynote.png"
                    alt="Anuj Dwivedi speaking at keynote podium with microphone in black suit and sunglasses"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    priority
                  />

                  {/* Gradient Vignette for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-black/20 pointer-events-none" />

                  {/* Live Speaking Status Pill */}
                  <div className="absolute top-3 left-3 flex items-center space-x-2">
                    <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-navy-950/90 backdrop-blur-md text-white border border-gold-400/50 text-[10px] font-mono font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>KEYNOTE STAGE</span>
                    </span>
                  </div>

                  {/* Bottom Text Pill on Image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white pointer-events-none">
                    <div>
                      <div className="text-[10px] uppercase font-mono text-gold-300 font-bold">
                        Bangalore Keynote Address
                      </div>
                      <div className="font-serif text-sm sm:text-base font-bold">
                        Anuj Dwivedi
                      </div>
                    </div>
                    <div className="text-[10px] font-mono text-slate-200 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">
                      Verified Podium
                    </div>
                  </div>
                </div>

                {/* Identity Strip Below Image */}
                <div className="pt-3 pb-1 px-1 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-base font-bold text-navy-950">
                      Anuj Dwivedi
                    </h3>
                    <p className="text-[11px] text-slate-500 font-mono">
                      Founder, Archzos • AI Engineer & Speaker
                    </p>
                  </div>
                  <VerificationNotice status="verified" label="Authentic Evidence" />
                </div>
              </div>

              {/* Floating Stat Chip */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-gold-300 p-2.5 sm:p-3 rounded-2xl shadow-xl flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gold-50 border border-gold-300 flex items-center justify-center text-gold-700 font-bold text-sm">
                  ★
                </div>
                <div className="text-xs">
                  <div className="font-bold text-navy-950">Bangalore, India</div>
                  <div className="text-[10px] text-slate-500 font-mono">Circle13 Exclusive</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          AUTHENTIC PHOTOGRAPHIC PROOF STRIP (USER REQUEST)
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeader
          eyebrow="STAGE & LAB EVIDENCE"
          title="Commanding The Room Across Every Format"
          subtitle="Direct photographic record of Anuj's keynote addresses, university engineering masterclasses, and technical architecture practice."
        />
        <PhotographicProof />
      </section>

      {/* =========================================================
          INFOGRAPHIC SECTION 1: THE 4-PILLAR FRAMEWORK
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="OPERATIONAL ARCHITECTURE"
          title="Teach. Judge. Reward. Convert."
          subtitle="The four-part execution methodology from the master plan. Move from raw understanding to verified stage results."
        />
        <InfographicPillars />
      </section>

      {/* =========================================================
          INFOGRAPHIC SECTION 2: 2-HOUR SESSION BLUEPRINT
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="SESSION BLUEPRINT"
          title="The 2-Hour Intensive Session Flow"
          subtitle="How Anuj commands the room, audits architectures, evaluates live pitches, and hands out recognition cards."
        />
        <InfographicProcessFlow />
      </section>

      {/* =========================================================
          INFOGRAPHIC SECTION 3: THE AI SYSTEMS STACK
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="TECHNICAL SPECIFICATION"
          title="The 4-Layer AI Systems Engineering Stack"
          subtitle="From vector data pipelines and inference optimization to agentic loops and defensible commercial production."
        />
        <InfographicArchitectureStack />
      </section>

      {/* =========================================================
          INFOGRAPHIC SECTION 4: OCTOPUS TANK 8-ARMS
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <SectionHeader
            eyebrow="CAMPUS INITIATIVE • DSU"
            title="Octopus Tank 2026: 8 Innovation Arms"
            subtitle="8 Arms. Infinite Ideas. Pitch. Compete. Launch. Proposed student pitching competition with 50 team limit."
            className="mb-0"
          />
          <Link
            href="/octopus-tank"
            className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold uppercase tracking-wider text-gold-700 hover:text-gold-900 shrink-0"
          >
            <span>View Event Docket</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <InfographicOctopusArms />
      </section>

      {/* =========================================================
          INFOGRAPHIC SECTION 5: THE 10 RECOGNITION CARDS
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="MERIT RECOGNITION"
          title="The 10 Earned Recognition Cards"
          subtitle="Only 3 Gold Cards (80%, 70%, 60% discounts). 7 Silver & Bronze cards. Applies to the 30-Day Premium Mentorship anchor."
        />
        <CardDisplay />
      </section>

      {/* =========================================================
          SECTION 6: SIGNATURE ADVISORY OFFERS (CONCISE & VISUAL)
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="COMMERCIAL ENGAGEMENTS"
          title="Direct Advisory & Mentorship"
          subtitle="Clear scopes, transparent reference pricing, and structured expectations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SERVICES_CATALOGUE.filter((s) => s.id !== "institutional-programmes").map(
            (service) => {
              const isAnchor = service.id === "thirty-day-premium-mentorship";

              return (
                <div
                  key={service.id}
                  className={`rounded-3xl p-7 flex flex-col justify-between border transition-all duration-300 ${
                    isAnchor
                      ? "bg-navy-950 text-white border-gold-500 shadow-xl"
                      : "bg-white text-navy-950 border-slate-200 shadow-sm hover:shadow-md hover:border-gold-400"
                  }`}
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-gold-600">
                        {service.eyebrow}
                      </span>
                      {service.badge && (
                        <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full ${
                          isAnchor ? "bg-gold-500 text-navy-950" : "bg-gold-100 text-gold-900 border border-gold-300"
                        }`}>
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl font-bold">
                        {service.title}
                      </h3>
                      <p className={`text-xs mt-1 leading-relaxed ${isAnchor ? "text-slate-300" : "text-slate-500"}`}>
                        {service.headline}
                      </p>
                    </div>

                    {/* Price Tag Box */}
                    <div className={`p-4 rounded-2xl border ${isAnchor ? "bg-black/40 border-white/10" : "bg-slate-50 border-slate-200"}`}>
                      <div className="text-[10px] uppercase font-mono text-slate-400">
                        Reference Price
                      </div>
                      <div className="font-serif text-3xl font-bold mt-0.5">
                        {service.referencePriceINR ? formatINR(service.referencePriceINR) : "Custom RFP"}
                      </div>
                      <p className="text-[10px] text-slate-400 mt-1">
                        {service.priceNote}
                      </p>
                    </div>

                    {/* Inclusions (Least Text, Bullet Points) */}
                    <div className="space-y-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-gold-600">
                        Key Inclusions:
                      </div>
                      <ul className="space-y-1.5 text-xs">
                        {service.included.slice(0, 4).map((inc, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <Check className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                            <span className={isAnchor ? "text-slate-300" : "text-slate-600"}>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-current/10">
                    <Link
                      href={`/book?service=${service.id}`}
                      className={`w-full inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-wider font-bold py-3.5 rounded-xl transition-all ${
                        isAnchor
                          ? "bg-gold-500 text-navy-950 hover:bg-gold-400"
                          : "bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950"
                      }`}
                    >
                      <span>{service.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </section>

      {/* =========================================================
          SECTION 7: VERIFIED CODE & PUBLIC REPOSITORIES
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="EVIDENCE FIRST"
          title="Look at the work. Then decide."
          subtitle="Direct links to genuine GitHub repositories and active deployments built by Anuj."
        />
        <EvidenceModule />
      </section>

      {/* =========================================================
          HIGH GRAPHICS MOTION GRAPHIC SECTION AT END (USER REQUEST)
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeader
          eyebrow="INTERACTIVE VISUAL EXPERIENCE"
          title="Algorithmic Velocity in Motion"
          subtitle="Interactive real-time kinetic motion engine. Switch modes between 8-Arm Wave, Neural Mesh, and Orbital Core."
        />
        <InteractiveMotionGraphic />
      </section>

      {/* =========================================================
          FINAL HIGH-CONTRAST CONVERSION CALL-TO-ACTION
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="rounded-3xl p-8 sm:p-14 bg-navy-950 text-white border border-gold-500/40 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-5">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-gold-400 font-bold">
              EXECUTION READY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
              Start with the challenge in front of you.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-light max-w-lg mx-auto">
              Bring your codebase, architecture, or pitch deck. Explore available engagements or submit an inquiry to Circle13 management.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-wider font-bold px-8 py-4 rounded-xl bg-gold-500 text-navy-950 hover:bg-gold-400 transition-colors shadow-lg"
              >
                <span>Book an Advisory Engagement</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/institutions"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-wider font-bold px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors"
              >
                <span>Campus & Corporate RFP</span>
                <ArrowUpRight className="w-4 h-4 text-slate-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
