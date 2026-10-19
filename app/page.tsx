"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SITE_CONFIG,
  COMMERCIAL_OFFER_ROUTES,
  TOKEN_DESIGNS,
  PROCESS_FIVE_STEPS,
  IMAGE_ASSETS,
  PRICING_HARMONIZATION_NOTE,
  MASTER_MANUAL_CONFIG,
  RECOGNITION_RULES_CONFIG,
  STATIONERY_SHOWCASE_ITEMS,
} from "@/lib/config";
import SectionHeader from "@/components/SectionHeader";
import VerificationNotice from "@/components/VerificationNotice";
import OfferCard from "@/components/OfferCard";
import RecognitionTokenCard from "@/components/RecognitionTokenCard";
import ImageLightbox from "@/components/ImageLightbox";
import AgreementPreview from "@/components/AgreementPreview";
import SealGallery from "@/components/SealGallery";
import VeerbhogyaLogo from "@/components/VeerbhogyaLogo";
import BookingCTA from "@/components/BookingCTA";
import PhotographicProof from "@/components/PhotographicProof";
import EvidenceModule from "@/components/EvidenceModule";
import InfographicPillars from "@/components/InfographicPillars";
import InfographicProcessFlow from "@/components/InfographicProcessFlow";
import InfographicOctopusArms from "@/components/InfographicOctopusArms";
import InteractiveMotionGraphic from "@/components/InteractiveMotionGraphic";
import EnquiryForm from "@/components/EnquiryForm";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Award,
  FileText,
  ShieldCheck,
  CheckCircle2,
  ZoomIn,
  Layers,
  Users,
  Compass,
  Code2,
  Check,
  Lock,
  Clock,
  HelpCircle,
} from "lucide-react";

export default function HomePage() {
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
    <div className="bg-white text-navy-950 space-y-20 sm:space-y-28 pb-16">
      {/* =========================================================
          SECTION A: PREMIUM HERO (Warm Ivory, Obsidian, Gold Identity)
      ========================================================= */}
      <section className="relative pt-6 pb-16 px-4 sm:px-6 lg:px-8 bg-light-grid overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Brand, Headline, & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Associated Brand & Programme Eyebrow */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-gold-400 bg-gold-50/90 text-gold-900 text-[11px] font-mono font-bold uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-gold-600" />
                <span>
                  {SITE_CONFIG.brandName} × {SITE_CONFIG.associatedBrand}
                </span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200 font-bold">
                {SITE_CONFIG.programmeName}
              </span>
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-navy-950 text-white text-[10px] font-mono font-bold border border-gold-500/40 shadow-xs">
                <VeerbhogyaLogo variant="symbol_gold" width={16} height={11} />
                <span className="text-gold-300 tracking-wider">VEERBHOGYA</span>
              </div>
            </div>

            {/* Main Required Headline (Section 4) */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-navy-950 leading-[1.08]">
              Ideas deserve more than applause. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-amber-600 to-yellow-600">
                They deserve a path forward.
              </span>
            </h1>

            {/* Required Supporting Copy (Section 4) */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
              Explore the Octopus Tank recognition programme, professional
              engagements, and structured guidance around ideas, technical
              learning, and execution.
            </p>

            {/* Three Pillars Summary Infographic Chips */}
            <div className="grid grid-cols-3 gap-3 pt-1 max-w-lg">
              <div className="p-3.5 rounded-2xl bg-warmIvory/60 border border-gold-300/70">
                <div className="text-[10px] uppercase font-mono font-bold text-gold-800">
                  Gate 01
                </div>
                <div className="font-bold text-xs sm:text-sm text-navy-950 mt-0.5 font-serif">
                  Psychology
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  Expose Friction
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-warmIvory/60 border border-gold-300/70">
                <div className="text-[10px] uppercase font-mono font-bold text-gold-800">
                  Gate 02
                </div>
                <div className="font-bold text-xs sm:text-sm text-navy-950 mt-0.5 font-serif">
                  Economics
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  Positive Return
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-warmIvory/60 border border-gold-300/70">
                <div className="text-[10px] uppercase font-mono font-bold text-gold-800">
                  Gate 03
                </div>
                <div className="font-bold text-xs sm:text-sm text-navy-950 mt-0.5 font-serif">
                  Distribution
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5">
                  Widen Access
                </div>
              </div>
            </div>

            {/* Required Action Buttons (Section 4) */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/offers"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-wider font-bold px-8 py-4 rounded-xl bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950 transition-all duration-200 shadow-lg shadow-navy-950/10"
              >
                <span>EXPLORE ENGAGEMENTS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/recognition"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-wider font-bold px-7 py-4 rounded-xl border border-gold-400 bg-white text-navy-950 hover:bg-gold-50 transition-all duration-200 shadow-sm"
              >
                <Award className="w-4 h-4 text-gold-600" />
                <span>DISCOVER RECOGNITION</span>
              </Link>
            </div>

            {/* Trust Desk Notice */}
            <div className="pt-1 flex items-center space-x-3 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="font-mono text-[11px]">
                Coordinated strictly via <strong>{SITE_CONFIG.management.entity}</strong> (Platform Architecture & Operations)
              </span>
            </div>
          </div>

          {/* Right Column: Hero Keynote Photograph Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Gold Ambient Ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-gold-400 via-amber-200 to-gold-500 rounded-3xl blur-xl opacity-30 transform -rotate-2" />

              <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-2xl p-3 sm:p-4">
                {/* 16:11 Aspect Frame fitting Keynote Podium Image */}
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
                      Verified Stage
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
                  <div className="text-[10px] text-slate-500 font-mono">Circle13 Operational Desk</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION B: VERIFIED PROFESSIONAL BACKGROUND
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeader
          eyebrow="VERIFIED PROFESSIONAL DOSSIER"
          title="Commanding The Room Across Every Format"
          subtitle="Direct photographic record and background of Anuj Dwivedi: keynote addresses, university engineering masterclasses, and technical architecture practice."
        />
        <PhotographicProof />
      </section>

      {/* =========================================================
          SECTION C: WORK, PROJECTS, AND TECHNICAL CREDIBILITY
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeader
          eyebrow="EVIDENCE FIRST"
          title="Look at the work. Then decide."
          subtitle="Direct links to genuine GitHub repositories and active deployments built by Anuj Dwivedi. Zero unverified metrics."
        />
        <EvidenceModule />

        {/* Kinetic Motion Graphic Preview */}
        <div className="pt-8">
          <SectionHeader
            eyebrow="INTERACTIVE ALGORITHMIC ENGINE"
            title="Algorithmic Velocity in Motion"
            subtitle="Interactive real-time kinetic motion engine demonstrating multi-arm coordination and neural topology."
          />
          <InteractiveMotionGraphic />
        </div>
      </section>

      {/* =========================================================
          SECTION D: CONSULTANCY AND MENTORSHIP PATHWAYS
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <SectionHeader
            eyebrow="COMMERCIAL ARCHITECTURE"
            title="Choose the route that fits your next move."
            subtitle="Three distinct pathways from the master infographic: Team Consultancy, Individual Engagement, and Anchor Mentorship."
            className="mb-0"
          />
          <Link
            href="/offers"
            className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold uppercase tracking-wider text-gold-700 hover:text-gold-900 shrink-0"
          >
            <span>View Full Offer Comparison</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Pricing Harmonization & Owner Review Alert Notice */}
        <div className="p-4 rounded-2xl bg-warmIvory/60 border border-gold-300 text-xs text-slate-700 leading-relaxed flex items-start space-x-3">
          <ShieldCheck className="w-4 h-4 text-gold-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-navy-950">
              Commercial Pricing Transparency & Alignment Notice:
            </span>
            <p>{PRICING_HARMONIZATION_NOTE.notice}</p>
          </div>
        </div>

        {/* The Three Pathways Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {COMMERCIAL_OFFER_ROUTES.map((offer) => (
            <OfferCard
              key={offer.id}
              offer={offer}
              highlighted={offer.routeKey === "route-c"}
            />
          ))}
        </div>
      </section>

      {/* =========================================================
          SECTION E: OCTOPUS TANK INTRODUCTION
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
            <span>View Full Event Docket</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <InfographicOctopusArms />
      </section>

      {/* =========================================================
          SECTION F: RECOGNITION-TOKEN GALLERY PREVIEW
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <SectionHeader
            eyebrow="RECOGNITION ARCHITECTURE"
            title="Recognition that opens a defined next step."
            subtitle="Official visual identity from Image 2: Gold tokens (1st, 2nd, 3rd place), Silver token (Selected by Anuj), Bronze token (Individual Interest Pass), and universal reverse face."
            className="mb-0"
          />
          <button
            onClick={() =>
              openLightbox(
                IMAGE_ASSETS.recognitionTokens.src,
                IMAGE_ASSETS.recognitionTokens.alt,
                IMAGE_ASSETS.recognitionTokens.title,
                IMAGE_ASSETS.recognitionTokens.caption
              )
            }
            className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold uppercase tracking-wider px-4 py-2 rounded-xl bg-warmIvory border border-gold-400 text-gold-900 hover:bg-gold-100 transition-colors shrink-0 shadow-xs"
          >
            <ZoomIn className="w-3.5 h-3.5 text-gold-700" />
            <span>Inspect High-Res Tokens (Image 2)</span>
          </button>
        </div>

        {/* 6 Token Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOKEN_DESIGNS.map((token) => (
            <RecognitionTokenCard
              key={token.id}
              token={token}
              onOpenPreview={() =>
                openLightbox(
                  IMAGE_ASSETS.recognitionTokens.src,
                  token.title,
                  token.title,
                  `${token.category} • ${token.recipientEligibility} • ${token.visualDescription}`
                )
              }
            />
          ))}
        </div>

        {/* Recognition Policy Notice */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
          <div className="flex items-center space-x-2 text-navy-950 font-bold">
            <Award className="w-4 h-4 text-gold-600" />
            <span>Merit Token & Commercial Independence Policy (10-Card Cap):</span>
          </div>
          <p>
            • Tokens are awarded based on stage performance, technical curiosity, or individual drive. Exactly 10 physical cards are issued per edition ({RECOGNITION_RULES_CONFIG.goldCount} Gold, {RECOGNITION_RULES_CONFIG.silverCount} Silver, {RECOGNITION_RULES_CONFIG.bronzeCount} Bronze).
          </p>
          <p>
            • A recognition token does not guarantee commercial purchase or investment, nor is purchasing consultancy a prerequisite for competition recognition.
          </p>
        </div>
      </section>

      {/* =========================================================
          SECTION G: HOW THE PROGRAMME WORKS (Command Map)
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeader
          eyebrow="OPERATIONAL FLOW"
          title="From evaluation to engagement."
          subtitle="The structured workflow translating pitch evaluation into verified advisory milestones."
        />

        <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
          {MASTER_MANUAL_CONFIG.commandMap.map((cmd) => (
            <div
              key={cmd.step}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-gold-400 hover:shadow-md transition-all space-y-3 relative flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-6 h-6 rounded-full bg-navy-950 text-gold-400 font-mono text-xs font-bold flex items-center justify-center">
                    {cmd.step}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Step {cmd.step}
                  </span>
                </div>
                <h4 className="font-serif text-sm font-bold text-navy-950">
                  {cmd.action}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {cmd.detail}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center text-[10px] font-mono text-slate-400">
                <span>Verified Protocol</span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 text-center">
          <strong>Process Clarity:</strong> Recognition signifies demonstrated capability. Moving to a paid engagement is strictly voluntary and governed by agreed scope and mutual scheduling.
        </div>
      </section>

      {/* =========================================================
          SECTION H: DOCUMENT AND STATIONERY SHOWCASE
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <SectionHeader
            eyebrow="STATIONERY & AGREEMENTS"
            title="Every offer deserves clarity."
            subtitle="Concepts from Images 3 & 4: Gold agreement, Black agreement, formal offer letter, company-branded envelope, presentation folder, and the 4-seal signing system."
            className="mb-0"
          />
          <Link
            href="/agreements"
            className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold uppercase tracking-wider text-gold-700 hover:text-gold-900 shrink-0"
          >
            <span>View Full 12-Item Suite</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mandatory Governance Notice */}
        <div className="p-4 rounded-2xl bg-warmIvory/70 border border-gold-300 text-xs text-slate-800 leading-relaxed flex items-start space-x-3 shadow-xs">
          <ShieldCheck className="w-4 h-4 text-gold-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-navy-950">
              Illustrative Design Concept Notice:
            </span>{" "}
            &ldquo;Illustrative design concept. Final terms, signatures, and company authorisation must be approved before any document is issued.&rdquo;
          </div>
        </div>

        {/* Interactive Agreement Preview Component */}
        <AgreementPreview />

        {/* Seal Gallery Component */}
        <div className="pt-8">
          <SectionHeader
            eyebrow="OFFICIAL SEAL SYSTEM"
            title="A consistent identity across every document."
            subtitle="The four seal concepts from Image 4: Gold ink seal, blue ink seal, blind emboss, and ceremonial wax seal."
          />
          <SealGallery />
        </div>
      </section>

      {/* =========================================================
          SECTION I: ENQUIRY AND BOOKING SECTION
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 space-y-8">
        <SectionHeader
          eyebrow="COMMERCIAL INTAKE"
          title="Find the right engagement."
          subtitle="Select from 7 distinct categories. Track your request across 4 transparent lifecycle states from intake to formal onboarding."
        />
        <EnquiryForm isCompact={false} />
      </section>

      {/* Reusable Image Lightbox Modal */}
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
