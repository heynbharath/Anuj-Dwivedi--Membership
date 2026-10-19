"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import VerificationNotice from "@/components/VerificationNotice";
import RecognitionTokenCard from "@/components/RecognitionTokenCard";
import InfographicOctopusArms from "@/components/InfographicOctopusArms";
import InfographicProcessFlow from "@/components/InfographicProcessFlow";
import ImageLightbox from "@/components/ImageLightbox";
import BookingCTA from "@/components/BookingCTA";
import {
  OCTOPUS_TANK_CONFIG,
  SITE_CONFIG,
  COMMERCIAL_OFFER_ROUTES,
  TOKEN_DESIGNS,
  IMAGE_ASSETS,
  MASTER_MANUAL_CONFIG,
} from "@/lib/config";
import { formatINR } from "@/lib/utils";
import {
  Calendar,
  Users,
  Award,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ZoomIn,
  Building,
  Briefcase,
  FileText,
  HelpCircle,
  Layers,
  Scale,
  Compass,
  AlertTriangle,
  XCircle,
  Clock,
  ListOrdered,
  ChevronDown,
} from "lucide-react";

export default function OctopusTankPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeLightbox, setActiveLightbox] = useState<{
    isOpen: boolean;
    src: string;
    alt: string;
    title: string;
    caption: string;
  }>({
    isOpen: false,
    src: "",
    alt: "",
    title: "",
    caption: "",
  });

  const openLightbox = (
    src: string,
    alt: string,
    title: string,
    caption: string
  ) => {
    setActiveLightbox({
      isOpen: true,
      src,
      alt,
      title,
      caption,
    });
  };

  return (
    <div className="bg-white text-navy-950 py-12 sm:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* =========================================================
            EVENT HERO & POSTER
        ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <VerificationNotice
                status="supplied_proposal"
                label="Event Concept & Proposal Docket"
              />
              <span className="text-[11px] font-mono text-gold-700 px-2.5 py-0.5 rounded-full bg-gold-50 border border-gold-300 font-bold">
                {OCTOPUS_TANK_CONFIG.status}
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-navy-950 leading-[1.08]">
              OCTOPUS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-amber-600 to-blue-600">
                TANK 2026
              </span>
            </h1>

            <p className="text-base sm:text-lg font-serif text-gold-700 font-bold">
              {OCTOPUS_TANK_CONFIG.tagline}
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              A premier campus startup-pitching competition proposed for{" "}
              <strong>{OCTOPUS_TANK_CONFIG.institution}</strong>. Combining an
              intensive 2-hour pitch masterclass with live multi-domain pitching
              across 8 innovation arms in front of industry judges.
            </p>

            {/* Quick Metrics from Poster */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center text-xs">
              <div className="p-3.5 rounded-2xl bg-warmIvory/60 border border-gold-300 space-y-0.5">
                <span className="text-slate-500 text-[10px] uppercase font-mono font-bold">
                  Target Date
                </span>
                <div className="font-bold text-navy-950">
                  {OCTOPUS_TANK_CONFIG.dateText}
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-warmIvory/60 border border-gold-300 space-y-0.5">
                <span className="text-slate-500 text-[10px] uppercase font-mono font-bold">
                  Proposed Team Fee
                </span>
                <div className="font-bold text-gold-700">
                  ₹{OCTOPUS_TANK_CONFIG.teamFeeINR}
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-warmIvory/60 border border-gold-300 space-y-0.5">
                <span className="text-slate-500 text-[10px] uppercase font-mono font-bold">
                  Team Size
                </span>
                <div className="font-bold text-navy-950">
                  {OCTOPUS_TANK_CONFIG.teamSizeText}
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-warmIvory/60 border border-gold-300 space-y-0.5">
                <span className="text-slate-500 text-[10px] uppercase font-mono font-bold">
                  Capacity Target
                </span>
                <div className="font-bold text-navy-950">
                  {OCTOPUS_TANK_CONFIG.teamTarget} Teams
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/book?route=route-a"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-7 py-3.5 rounded-xl bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950 transition-colors shadow-md"
              >
                <span>Enquire Regarding Event Pitching</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() =>
                  openLightbox(
                    "/images/octopus-tank-2026.png",
                    "Octopus Tank 2026 Official Concept Poster",
                    "Octopus Tank 2026 Concept Poster",
                    "Official concept poster prepared for Dayananda Sagar University School of Engineering."
                  )
                }
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-6 py-3.5 rounded-xl border border-slate-300 text-navy-950 hover:bg-slate-50 transition-colors"
              >
                <ZoomIn className="w-4 h-4 text-slate-500" />
                <span>Enlarge Poster</span>
              </button>
            </div>
          </div>

          {/* Official Poster Exhibit */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 p-3 shadow-xl">
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-white">
              <Image
                src="/images/octopus-tank-2026.png"
                alt="Octopus Tank 2026 Dayananda Sagar University School of Engineering Poster"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="pt-2 flex items-center justify-between text-[10px] text-slate-500 font-mono px-1">
              <span>Source: DSU Proposal Docket</span>
              <button
                onClick={() =>
                  openLightbox(
                    "/images/octopus-tank-2026.png",
                    "Octopus Tank 2026 Poster",
                    "Octopus Tank 2026 Poster",
                    "Dayananda Sagar University School of Engineering proposal."
                  )
                }
                className="text-gold-700 font-bold hover:underline"
              >
                Click to Enlarge
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================
            LEGAL & OPERATIONAL ENTITY SEPARATION (CRUCIAL REQUIREMENT)
        ========================================================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-warmIvory/60 border border-gold-300 space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-gold-800">
              STRUCTURAL INTEGRITY & GOVERNANCE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Distinct Operational & Brand Entities
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              To maintain academic, commercial, and operational clarity, the
              initiatives presented on this platform are distinctly defined and
              not merged into a single commercial or legal entity:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-xs">
            {/* Entity A */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <span className="w-6 h-6 rounded-full bg-red-100 text-red-800 border border-red-300 flex items-center justify-center font-bold font-mono text-[11px]">
                A
              </span>
              <h4 className="font-serif font-bold text-navy-950 text-sm">
                Student Pitching Competition
              </h4>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Octopus Tank 2026: Campus event for Dayananda Sagar University
                students testing multidisciplinary engineering and pitches.
              </p>
            </div>

            {/* Entity B */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <span className="w-6 h-6 rounded-full bg-gold-100 text-gold-900 border border-gold-300 flex items-center justify-center font-bold font-mono text-[11px]">
                B
              </span>
              <h4 className="font-serif font-bold text-navy-950 text-sm">
                Recognition-Token Programme
              </h4>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                The 10-card architecture (3 Gold, multiple Silver/Bronze)
                awarding merit and unlocking defined advisory gateways.
              </p>
            </div>

            {/* Entity C */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-900 border border-blue-300 flex items-center justify-center font-bold font-mono text-[11px]">
                C
              </span>
              <h4 className="font-serif font-bold text-navy-950 text-sm">
                Personal Advisory & Mentorship
              </h4>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Anuj Dwivedi&apos;s independent technical consultancy and 30-day
                premium mentorship engagements (Routes A, B, and C).
              </p>
            </div>

            {/* Entity D */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-900 border border-amber-300 flex items-center justify-center font-bold font-mono text-[11px]">
                D
              </span>
              <h4 className="font-serif font-bold text-navy-950 text-sm">
                Archzos Technologies Branding
              </h4>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Corporate identity, formal offer letters, agreements, stationery,
                and seal concepts as visual design proposals.
              </p>
            </div>

            {/* Entity E */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 flex items-center justify-center font-bold font-mono text-[11px]">
                E
              </span>
              <h4 className="font-serif font-bold text-navy-950 text-sm">
                Circle13 Management
              </h4>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Platform architecture & operational infrastructure. Coordinates
                intake, bookings, and verified onboarding for advisory routes.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            THE 3 GATES & 2-HOUR SESSION LOGIC (Image 1 Infographic)
        ========================================================= */}
        <section className="space-y-8 border-t border-slate-200 pt-16">
          <SectionHeader
            eyebrow="SESSION ARCHITECTURE"
            title="The 3 Gates & The 2-Hour Intensive Session"
            subtitle="The operational methodology from the master manual: Three criteria before proceeding, followed by a high-impact five-step live session."
          />

          {/* The 3 Gates */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-gold-700 bg-gold-50 px-2 py-0.5 rounded border border-gold-300">
                  Gate 1
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase">
                  Psychology
                </span>
              </div>
              <h4 className="font-serif text-xl font-bold text-navy-950">
                1. Expose Friction
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>&ldquo;Is there a real friction worth removing?&rdquo;</strong>
                <br />
                Builders often feel ungrounded in pitch presence and business
                clarity. The session exposes the real gap and creates demand for
                rigorous execution.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-gold-700 bg-gold-50 px-2 py-0.5 rounded border border-gold-300">
                  Gate 2
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase">
                  Economics
                </span>
              </div>
              <h4 className="font-serif text-xl font-bold text-navy-950">
                2. Positive Return
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>&ldquo;Does the return exceed the cost?&rdquo;</strong>
                <br />
                Offers must create net-positive contribution. Team routes lower
                the per-head barrier (flat ₹15,000 for up to 5 members; ₹3,000/head at 5) to make
                guidance justifiable.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-gold-700 bg-gold-50 px-2 py-0.5 rounded border border-gold-300">
                  Gate 3
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase">
                  Distribution
                </span>
              </div>
              <h4 className="font-serif text-xl font-bold text-navy-950">
                3. Widen Access
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>&ldquo;Can the signal reach more builders?&rdquo;</strong>
                <br />
                Cards create earned scarcity, while individual and team routes
                widen distribution. Circle13 management converts access into
                structured onboarding.
              </p>
            </div>
          </div>

          {/* 5-Step Session Flow */}
          <div className="p-7 rounded-3xl bg-navy-950 text-white border border-gold-500/40 shadow-xl space-y-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 font-bold">
                THE 2-HOUR SESSION BLUEPRINT
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">
                Five Sequential Room Stages
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-xs">
              {MASTER_MANUAL_CONFIG.sessionStages.map((stage) => (
                <div key={stage.step} className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1.5">
                  <span className="font-mono text-gold-400 font-bold">{stage.step}</span>
                  <div className="font-serif text-sm font-bold text-white">
                    {stage.title}
                  </div>
                  <div className="text-[10px] font-mono text-gold-300 uppercase">
                    {stage.tagline}
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            6-STEP COMMAND MAP (Master Manual Page 2)
        ========================================================= */}
        <section className="space-y-6 border-t border-slate-200 pt-16">
          <SectionHeader
            eyebrow="OPERATIONAL DISCIPLINE"
            title="The 6-Step Command Map"
            subtitle="The structured protocol from page 2 of the management manual converting pitch scrutiny into signed commitments."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MASTER_MANUAL_CONFIG.commandMap.map((cmd) => (
              <div
                key={cmd.step}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-gold-400 transition-all space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-full bg-navy-950 text-gold-400 font-mono text-xs font-bold flex items-center justify-center">
                      {cmd.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      Step {cmd.step} of 6
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-navy-950">
                    {cmd.action}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cmd.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            5-QUESTION DIAGNOSTIC (Master Manual Page 12)
        ========================================================= */}
        <section className="p-8 sm:p-10 rounded-3xl bg-warmIvory/60 border border-gold-300 space-y-6">
          <div>
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-gold-800">
              QUALIFICATION PROTOCOL
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 mt-1">
              The 5-Question Diagnostic Framework
            </h3>
            <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
              Before an offer is proposed, Anuj and the management desk apply this five-step diagnostic
              to separate real implementation appetite from casual interest:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {MASTER_MANUAL_CONFIG.diagnosticQuestions.map((diag) => (
              <div
                key={diag.number}
                className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2"
              >
                <span className="font-mono text-xs font-bold text-gold-700 bg-gold-50 border border-gold-300 px-2 py-0.5 rounded">
                  Q{diag.number}
                </span>
                <div className="font-serif font-bold text-sm text-navy-950">
                  {diag.question}
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">
                  {diag.purpose}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            NON-NEGOTIABLES: APPROVED PRACTICES VS PROHIBITED SHORTCUTS
        ========================================================= */}
        <section className="space-y-6 border-t border-slate-200 pt-16">
          <SectionHeader
            eyebrow="OPERATIONAL GUARDRAILS"
            title="The Non-Negotiables Table"
            subtitle="Standard ethical, commercial, and legal guardrails from page 14 of the Octopus Tank manual."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Approved Practices */}
            <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50/50 border border-emerald-300 space-y-4">
              <div className="flex items-center space-x-2 text-emerald-900 font-bold font-serif text-lg">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>10 Approved Practices</span>
              </div>
              <ul className="space-y-2 text-xs text-emerald-950">
                {MASTER_MANUAL_CONFIG.nonNegotiables.approvedPractices.map((pra, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-emerald-700 font-mono font-bold mt-0.5">✓</span>
                    <span>{pra}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Prohibited Shortcuts */}
            <div className="p-6 sm:p-8 rounded-3xl bg-red-50/50 border border-red-300 space-y-4">
              <div className="flex items-center space-x-2 text-red-900 font-serif text-lg font-bold">
                <XCircle className="w-5 h-5 text-red-600 shrink-0" />
                <span>10 Prohibited Shortcuts (Strictly Forbidden)</span>
              </div>
              <ul className="space-y-2 text-xs text-red-950">
                {MASTER_MANUAL_CONFIG.nonNegotiables.prohibitedShortcuts.map((sho, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-red-600 font-mono font-bold mt-0.5">✕</span>
                    <span>{sho}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================
            8 THEMATIC ARMS
        ========================================================= */}
        <section className="space-y-6 border-t border-slate-200 pt-16">
          <SectionHeader
            eyebrow="CROSS-DOMAIN INNOVATION"
            title="The 8 Innovation Arms"
            subtitle="Thematic challenges testing multidisciplinary engineering, AI pipelines, and commercial viability."
          />
          <InfographicOctopusArms />
        </section>

        {/* =========================================================
            THE 10-CARD RECOGNITION ARCHITECTURE & TABLE
        ========================================================= */}
        <section className="space-y-8 border-t border-slate-200 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <SectionHeader
              eyebrow="RECOGNITION ARCHITECTURE"
              title="The 10 Recognition Cards Breakdown"
              subtitle="Exactly 3 Gold Cards and 7 Silver/Bronze Cards from the master infographic."
              className="mb-0"
            />
            <button
              onClick={() =>
                openLightbox(
                  IMAGE_ASSETS.offerStructure.src,
                  IMAGE_ASSETS.offerStructure.alt,
                  IMAGE_ASSETS.offerStructure.title,
                  IMAGE_ASSETS.offerStructure.caption
                )
              }
              className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold uppercase tracking-wider px-4 py-2 rounded-xl bg-warmIvory border border-gold-400 text-gold-900 hover:bg-gold-100 transition-colors shrink-0 shadow-xs"
            >
              <ZoomIn className="w-3.5 h-3.5 text-gold-700" />
              <span>Inspect Image 1 Infographic</span>
            </button>
          </div>

          {/* Infographic Table from Image 1 */}
          <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-md">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-navy-950 text-white font-mono text-[11px] uppercase tracking-wider">
                  <th className="p-4">Card Category</th>
                  <th className="p-4">Who Gets It</th>
                  <th className="p-4">Discount</th>
                  <th className="p-4">Payable Fee</th>
                  <th className="p-4">Applicable Route</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-slate-700">
                <tr className="bg-gold-50/50 hover:bg-gold-50">
                  <td className="p-4 font-bold text-gold-900">Gold Card #1</td>
                  <td className="p-4">1st Place Champion</td>
                  <td className="p-4 font-bold text-emerald-700">80% Off</td>
                  <td className="p-4 font-serif font-bold text-navy-950 text-sm">
                    ₹15,000
                  </td>
                  <td className="p-4">Team Route / 30-Day Mentorship</td>
                </tr>
                <tr className="bg-gold-50/30 hover:bg-gold-50">
                  <td className="p-4 font-bold text-gold-900">Gold Card #2</td>
                  <td className="p-4">2nd Place Finalist</td>
                  <td className="p-4 font-bold text-emerald-700">70% Off</td>
                  <td className="p-4 font-serif font-bold text-navy-950 text-sm">
                    ₹22,500
                  </td>
                  <td className="p-4">Team Route / 30-Day Mentorship</td>
                </tr>
                <tr className="bg-gold-50/10 hover:bg-gold-50">
                  <td className="p-4 font-bold text-gold-900">Gold Card #3</td>
                  <td className="p-4">3rd Place Podium</td>
                  <td className="p-4 font-bold text-emerald-700">60% Off</td>
                  <td className="p-4 font-serif font-bold text-navy-950 text-sm">
                    ₹30,000
                  </td>
                  <td className="p-4">Team Route / 30-Day Mentorship</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-slate-800">
                    Silver Cards (Multiple)
                  </td>
                  <td className="p-4">Standout ideas Anuj personally likes</td>
                  <td className="p-4 font-bold text-slate-700">50% or 40% Off</td>
                  <td className="p-4 font-serif font-bold text-navy-950 text-sm">
                    ₹37,500 or ₹45,000
                  </td>
                  <td className="p-4">Team Route</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-amber-900">
                    Bronze Cards (Multiple)
                  </td>
                  <td className="p-4">Highly interested individual builders</td>
                  <td className="p-4 font-bold text-amber-800">30% or 20% Off</td>
                  <td className="p-4 font-serif font-bold text-navy-950 text-sm">
                    ₹8,400 or ₹9,600
                  </td>
                  <td className="p-4">Individual Route (based on ₹12,000 route)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-500 font-mono text-center">
            Gold is rank-based (3 podium spots). Silver is personally selected. Bronze is the individual-interest pathway.
          </p>
        </section>

        {/* =========================================================
            10 QUICK REFERENCE FAQS (Master Manual Page 20)
        ========================================================= */}
        <section className="space-y-6 border-t border-slate-200 pt-16">
          <SectionHeader
            eyebrow="COMMERCIAL CLARITY"
            title="10 Core Reference Questions"
            subtitle="Straight answers from page 20 of the management manual covering pricing, limits, and team rules."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MASTER_MANUAL_CONFIG.quickReferenceFaqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-white p-5 space-y-2 hover:border-gold-400 transition-colors shadow-xs"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full text-left font-serif font-bold text-sm sm:text-base text-navy-950 flex items-center justify-between gap-2"
                  >
                    <span>{faq.q}</span>
                    <span className="text-xs font-mono text-gold-700 shrink-0 font-bold">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {faq.a}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Booking CTA */}
        <BookingCTA
          headline="Ready to participate in Octopus Tank?"
          supportingText="Submit an enquiry regarding team participation, sponsorship, or institutional hosting with Circle13 management."
        />
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={activeLightbox.isOpen}
        onClose={() =>
          setActiveLightbox((prev) => ({ ...prev, isOpen: false }))
        }
        imageSrc={activeLightbox.src}
        imageAlt={activeLightbox.alt}
        title={activeLightbox.title}
        caption={activeLightbox.caption}
      />
    </div>
  );
}
