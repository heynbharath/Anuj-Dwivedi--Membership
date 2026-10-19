"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  DOCUMENT_TEMPLATES,
  SEALS_AND_SIGNING_CONFIG,
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
} from "lucide-react";

export default function AgreementsPage() {
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

        {/* Legal & Status Notice */}
        <div className="p-5 rounded-2xl bg-warmIvory/60 border border-gold-300 text-xs text-slate-700 leading-relaxed space-y-1.5 shadow-xs">
          <div className="flex items-center space-x-2 text-navy-950 font-bold text-sm">
            <ShieldCheck className="w-4 h-4 text-gold-700 shrink-0" />
            <span>Document Status & Authorisation Notice:</span>
          </div>
          <p>
            Document designs presented on this page are proposed brand identity
            concepts based on user-supplied reference images. They do not constitute
            legally registered corporate seals, officially executed commercial
            contracts, or binding commitments until formally authorized by the
            company and counter-signed by authorized representatives.
          </p>
        </div>

        {/* Section 1: Interactive Document Previews */}
        <section className="space-y-6">
          <SectionHeader
            eyebrow="LIVE DOCUMENT PREVIEW"
            title="Interactive Agreement & Letter Suite"
            subtitle="Switch between the Gold Agreement, Black Agreement, Formal Offer Letter, Branded Envelope, and Black Presentation Folder. Test live customization in real time."
          />
          <AgreementPreview />
        </section>

        {/* Section 2: Seals & Signing System Gallery */}
        <section className="space-y-6 border-t border-slate-200 pt-16">
          <SectionHeader
            eyebrow="OFFICIAL SEAL & SIGNING SYSTEM"
            title="The 4-Seal Architecture"
            subtitle="Gold ink, blue ink, blind emboss, and ceremonial wax seal standards from Image 4, accompanied by gold fountain-pen signing protocol."
          />
          <SealGallery />
        </section>

        {/* Section 3: Document Suite Reference Cards */}
        <section className="space-y-6 border-t border-slate-200 pt-16">
          <SectionHeader
            eyebrow="PHYSICAL CRAFT SPECIFICATIONS"
            title="The 5 Document Formats"
            subtitle="Detailed material, paper stock, and finish parameters for physical production."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOCUMENT_TEMPLATES.map((tmpl) => (
              <div
                key={tmpl.id}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-gold-400 transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-warmIvory text-gold-800 border border-gold-300">
                      {tmpl.type.replace("_", " ")}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      Concept
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-navy-950">
                    {tmpl.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tmpl.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-400 block">
                        Paper Stock:
                      </span>
                      <span className="font-semibold text-navy-950">
                        {tmpl.paperStock}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-400 block">
                        Seal Finish:
                      </span>
                      <span className="font-semibold text-navy-950">
                        {tmpl.sealType}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <p className="text-[11px] text-slate-400 font-mono italic">
                    Serial No. tracked via Circle13 registry.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Future PDF Generation Architecture Note */}
        <section className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
          <div className="flex items-center space-x-2 text-navy-950 font-bold text-sm">
            <FileText className="w-4 h-4 text-gold-600" />
            <span>Digital PDF Issuance Architecture Readiness</span>
          </div>
          <p>
            The platform architecture has been structured to support dynamic PDF
            generation using modern SVG vector stamps and high-dpi typography.
            Physical certificate generation and digital PDF downloads will be
            unlocked upon formal authorization by Archzos Technologies Pvt Ltd.
          </p>
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
