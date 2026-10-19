"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  DOCUMENT_TEMPLATES,
  SEALS_AND_SIGNING_CONFIG,
  STATIONERY_SHOWCASE_ITEMS,
  IMAGE_ASSETS,
  SITE_CONFIG,
} from "@/lib/config";
import SectionHeader from "@/components/SectionHeader";
import VerificationNotice from "@/components/VerificationNotice";
import AgreementPreview from "@/components/AgreementPreview";
import SealGallery from "@/components/SealGallery";
import ImageLightbox from "@/components/ImageLightbox";
import BookingCTA from "@/components/BookingCTA";
import {
  FileText,
  ShieldCheck,
  ZoomIn,
  PenTool,
  Award,
  Layers,
  ArrowRight,
  Sparkles,
  Package,
  Stamp,
  CheckCircle2,
  Lock,
} from "lucide-react";

export default function AgreementsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
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

  const filteredShowcaseItems =
    selectedCategory === "all"
      ? STATIONERY_SHOWCASE_ITEMS
      : STATIONERY_SHOWCASE_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-white text-navy-950 py-12 sm:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono font-bold">
              <FileText className="w-3.5 h-3.5 text-gold-600" />
              <span>ARCHZOS TECHNOLOGIES DOCUMENT ARCHITECTURE</span>
            </div>
            <VerificationNotice
              status="supplied_proposal"
              label="Visual Concepts From Images 3 & 4"
            />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-navy-950 leading-[1.08]">
            Agreements, Stationery & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-amber-600 to-yellow-600">
              The Official Signing System
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            A unified design system turning recognition into concrete commitments.
            Explore interactive concepts for the Gold Agreement, Black Agreement,
            Formal Offer Letter, corporate envelope, obsidian presentation folder,
            and the 4-seal signing system.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() =>
                openLightbox(
                  IMAGE_ASSETS.offerLetterStationery.src,
                  IMAGE_ASSETS.offerLetterStationery.alt,
                  IMAGE_ASSETS.offerLetterStationery.title,
                  IMAGE_ASSETS.offerLetterStationery.caption
                )
              }
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-xl bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950 transition-colors shadow-sm"
            >
              <ZoomIn className="w-4 h-4" />
              <span>Inspect Image 3 (Stationery Suite)</span>
            </button>
            <button
              onClick={() =>
                openLightbox(
                  IMAGE_ASSETS.officialSealSigning.src,
                  IMAGE_ASSETS.officialSealSigning.alt,
                  IMAGE_ASSETS.officialSealSigning.title,
                  IMAGE_ASSETS.officialSealSigning.caption
                )
              }
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-xl border border-gold-400 bg-white text-navy-950 hover:bg-gold-50 transition-colors"
            >
              <PenTool className="w-4 h-4 text-gold-600" />
              <span>Inspect Image 4 (Seal & Signing System)</span>
            </button>
          </div>
        </div>

        {/* Mandatory Governance Notice */}
        <div className="p-5 rounded-2xl bg-warmIvory/70 border-2 border-gold-400 text-xs text-slate-800 leading-relaxed space-y-2 shadow-xs">
          <div className="flex items-center space-x-2 text-navy-950 font-bold text-sm">
            <ShieldCheck className="w-4 h-4 text-gold-700 shrink-0" />
            <span>Document Status & Authorisation Notice:</span>
          </div>
          <p className="font-medium text-slate-900">
            &ldquo;Illustrative design concept. Final terms, signatures, and company authorisation must be approved before any document is issued.&rdquo;
          </p>
          <p className="text-[11px] text-slate-600">
            Document designs presented on this page are proposed brand identity concepts based on user-supplied reference materials. They do not constitute legally registered corporate seals, officially executed commercial contracts, or binding commitments until formally authorized by Archzos Technologies Pvt Ltd and signed by authorized company officers.
          </p>
        </div>

        {/* =========================================================
            SECTION 1: THE 12-ITEM COMPLETE STATIONERY & BRAND GALLERY
        ========================================================= */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <SectionHeader
              eyebrow="OFFICIAL REFERENCE SUITE"
              title="12 Document & Stationery Artifacts"
              subtitle="All 12 design items from the supplied reference materials, categorized by application with material specifications and high-resolution inspection."
              className="mb-0"
            />
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 shrink-0">
              {[
                { id: "all", label: "All 12 Items" },
                { id: "stationery", label: "Stationery" },
                { id: "agreement", label: "Agreements" },
                { id: "packaging", label: "Packaging" },
                { id: "seal", label: "Seals & Signing" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    selectedCategory === tab.id
                      ? "bg-navy-950 text-white shadow-xs"
                      : "text-slate-600 hover:text-navy-950 hover:bg-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredShowcaseItems.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-gold-400 transition-all flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-6 space-y-4">
                  {/* Category Chip & Lightbox Trigger */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-warmIvory text-gold-900 border border-gold-300">
                      {item.category}
                    </span>
                    <button
                      onClick={() =>
                        openLightbox(
                          item.imageSrc,
                          item.imageAlt,
                          item.title,
                          `${item.headline} • ${item.notice}`
                        )
                      }
                      className="p-1.5 rounded-lg bg-slate-50 hover:bg-gold-100 text-slate-500 hover:text-gold-900 transition-colors"
                      title="Inspect Reference"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-navy-950 group-hover:text-gold-700 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono text-gold-800 font-bold mt-0.5">
                      {item.headline}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Craft Specifications */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs">
                    <div className="text-[10px] font-mono uppercase font-bold text-slate-400">
                      Craft Specifications:
                    </div>
                    <ul className="space-y-1 text-slate-600 text-[11px]">
                      {item.specifications.map((spec, i) => (
                        <li key={i} className="flex items-start space-x-1.5">
                          <span className="text-gold-600 font-bold">•</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Notice */}
                <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 text-[10px] font-mono text-slate-500">
                  Concept Reference • Requires Company Approval
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            SECTION 2: INTERACTIVE LIVE DOCUMENT PREVIEW & EDITOR
        ========================================================= */}
        <section className="space-y-6 border-t border-slate-200 pt-16">
          <SectionHeader
            eyebrow="LIVE DOCUMENT PREVIEW & CUSTOMIZATION"
            title="Interactive Agreement & Letter Suite"
            subtitle="Switch between the Gold Agreement, Black Agreement, Formal Offer Letter, Branded Envelope, and Black Presentation Folder. Test live customization in real time with Anuj Dwivedi as company signatory."
          />
          <AgreementPreview />
        </section>

        {/* =========================================================
            SECTION 3: THE 4-SEAL ARCHITECTURE
        ========================================================= */}
        <section className="space-y-6 border-t border-slate-200 pt-16">
          <SectionHeader
            eyebrow="OFFICIAL SEAL & SIGNING SYSTEM"
            title="The 4-Seal Architecture"
            subtitle="Gold ink, blue ink, blind emboss, and ceremonial wax seal standards from Image 4, accompanied by gold fountain-pen signing protocol."
          />
          <SealGallery />
        </section>

        {/* =========================================================
            SECTION 4: DIGITAL PDF ISSUANCE & LEGAL BOUNDARIES
        ========================================================= */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-200 pt-16">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-3">
            <div className="flex items-center space-x-2 text-navy-950 font-bold text-sm">
              <FileText className="w-4 h-4 text-gold-600" />
              <span>Digital PDF Issuance Architecture Readiness</span>
            </div>
            <p className="leading-relaxed">
              The platform architecture has been structured to support dynamic PDF
              generation using modern SVG vector stamps and high-dpi typography.
              Physical certificate generation and digital PDF downloads will be
              unlocked upon formal authorization by Archzos Technologies Pvt Ltd.
            </p>
            <div className="text-[11px] font-mono text-slate-500">
              Rendering engine: HTML-to-print vector pipeline with anti-counterfeit micro-rules.
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-warmIvory/60 border border-gold-300 text-xs text-slate-700 space-y-3">
            <div className="flex items-center space-x-2 text-navy-950 font-bold text-sm">
              <Lock className="w-4 h-4 text-gold-700" />
              <span>Signatory & Commercial Authorization Boundary</span>
            </div>
            <p className="leading-relaxed">
              All commercial documents issued under the Archzos Technologies brand
              are signed solely by Anuj Dwivedi (Founder). N. Bharath (CEO, Circle13)
              oversees digital platform architecture and operational infrastructure,
              and is not a legal signatory for Archzos corporate obligations.
            </p>
            <div className="text-[11px] font-mono text-gold-800 font-bold">
              Archzos Technologies Pvt Ltd • Bangalore, India
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <BookingCTA
          headline="Questions regarding offer agreements?"
          supportingText="If you hold an earned token or wish to establish a formal advisory arrangement, contact Circle13 management for onboarding."
        />
      </div>

      {/* Reusable Lightbox */}
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
