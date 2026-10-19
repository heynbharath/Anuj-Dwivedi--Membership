"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SEALS_AND_SIGNING_CONFIG, IMAGE_ASSETS } from "@/lib/config";
import ImageLightbox from "@/components/ImageLightbox";
import {
  ShieldCheck,
  ZoomIn,
  PenTool,
  CheckCircle2,
  FileCheck2,
  Sparkles,
} from "lucide-react";

export default function SealGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div className="space-y-10">
      {/* 4 Seals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SEALS_AND_SIGNING_CONFIG.seals.map((seal) => {
          const isGold = seal.sealType === "gold_ink";
          const isBlue = seal.sealType === "blue_ink";
          const isEmboss = seal.sealType === "blind_emboss";
          const isWax = seal.sealType === "ceremonial_wax";

          return (
            <div
              key={seal.id}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-gold-400 transition-all duration-300 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-4 text-center">
                {/* Visual Seal Stamp Mockup */}
                <div className="relative w-28 h-28 mx-auto flex items-center justify-center">
                  {isWax ? (
                    // Wax Seal Style Mockup
                    <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-red-700 via-red-800 to-red-950 p-2 shadow-lg flex items-center justify-center border-4 border-red-900 ring-2 ring-red-600/40">
                      <div className="w-16 h-16 rounded-full border border-red-400/40 flex flex-col items-center justify-center text-gold-300 font-serif font-bold text-center">
                        <span className="text-[14px]">V</span>
                        <span className="text-[6px] font-mono tracking-widest text-gold-200 uppercase">
                          ARCHZOS
                        </span>
                      </div>
                    </div>
                  ) : isEmboss ? (
                    // Blind Emboss Dry Seal
                    <div className="w-24 h-24 rounded-full bg-ivory-100 border border-slate-300 shadow-inner flex items-center justify-center p-2">
                      <div className="w-18 h-18 rounded-full border border-dashed border-slate-400/60 flex flex-col items-center justify-center text-slate-500 font-serif font-bold">
                        <span className="text-[14px] opacity-60">V</span>
                        <span className="text-[6px] font-mono tracking-widest uppercase opacity-70">
                          DRY EMBOSS
                        </span>
                      </div>
                    </div>
                  ) : isBlue ? (
                    // Blue Ink Seal
                    <div className="w-24 h-24 rounded-full border-2 border-[#152D50] p-1.5 flex items-center justify-center shadow-xs bg-blue-50/20">
                      <div className="w-18 h-18 rounded-full border border-[#152D50] flex flex-col items-center justify-center text-[#152D50] font-serif font-bold">
                        <span className="text-[14px]">V</span>
                        <span className="text-[6px] font-mono tracking-widest uppercase">
                          ARCHZOS
                        </span>
                        <span className="text-[5px] font-mono">PVT LTD</span>
                      </div>
                    </div>
                  ) : (
                    // Gold Ink Seal
                    <div className="w-24 h-24 rounded-full border-2 border-gold-500 p-1.5 flex items-center justify-center shadow-xs bg-gold-50/30">
                      <div className="w-18 h-18 rounded-full border border-gold-500 flex flex-col items-center justify-center text-gold-700 font-serif font-bold">
                        <span className="text-[14px]">V</span>
                        <span className="text-[6px] font-mono tracking-widest uppercase text-gold-800">
                          ARCHZOS
                        </span>
                        <span className="text-[5px] font-mono text-gold-600">
                          PVT LTD
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Seal Name & Description */}
                <div>
                  <h4 className="font-serif text-lg font-bold text-navy-950">
                    {seal.name}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {seal.description}
                  </p>
                </div>
              </div>

              {/* Application Details */}
              <div className="pt-3 border-t border-slate-100 text-xs space-y-1">
                <span className="text-[10px] uppercase font-mono font-bold text-gold-700 block">
                  Designated Application:
                </span>
                <p className="text-slate-600 text-[11px] leading-snug">
                  {seal.application}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Signing Pen & Usage Guidelines Strip */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Signing Pen Specification */}
        <div className="lg:col-span-5 p-7 rounded-3xl bg-navy-950 text-white border border-gold-500/60 shadow-xl flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-1.5 text-[10px] font-mono uppercase tracking-widest text-gold-400 font-bold px-2.5 py-0.5 rounded-full bg-gold-500/20 border border-gold-400/30">
              <PenTool className="w-3.5 h-3.5" />
              <span>SIGNING AUTHORITY</span>
            </div>

            <h3 className="font-serif text-2xl font-bold">
              {SEALS_AND_SIGNING_CONFIG.signingPen.model}
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed">
              {SEALS_AND_SIGNING_CONFIG.signingPen.description}
            </p>

            <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-1 text-xs">
              <span className="text-[10px] uppercase font-mono text-gold-300 font-bold">
                Company Standard:
              </span>
              <p className="text-slate-300 text-[11px]">
                {SEALS_AND_SIGNING_CONFIG.signingPen.standard}
              </p>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <span className="text-[11px] font-mono text-slate-400">
              Ink: {SEALS_AND_SIGNING_CONFIG.signingPen.inkColor}
            </span>
            <button
              onClick={() => setLightboxOpen(true)}
              className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold text-gold-400 hover:text-gold-300"
            >
              <ZoomIn className="w-3.5 h-3.5" />
              <span>Inspect Image 4</span>
            </button>
          </div>
        </div>

        {/* Right: 4 Usage Guidelines */}
        <div className="lg:col-span-7 p-7 rounded-3xl bg-warmIvory/60 border border-gold-300/80 shadow-sm flex flex-col justify-between space-y-5">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold-800 font-bold">
                OFFICIAL PROTOCOL
              </span>
              <span className="text-[10px] font-mono text-slate-500">
                Four Execution Rules
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-navy-950">
              Standard Document Signing Guidelines
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SEALS_AND_SIGNING_CONFIG.usageGuidelines.map((guide) => (
              <div
                key={guide.step}
                className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-1.5"
              >
                <div className="flex items-center space-x-2">
                  <span className="w-5 h-5 rounded-full bg-gold-100 text-gold-900 border border-gold-300 flex items-center justify-center font-mono text-[10px] font-bold">
                    {guide.step}
                  </span>
                  <h4 className="font-serif text-sm font-bold text-navy-950">
                    {guide.title}
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {guide.description}
                </p>
              </div>
            ))}
          </div>

          {/* Legal / Authenticity Notice */}
          <div className="p-3.5 rounded-xl bg-white/80 border border-slate-200 text-xs text-slate-500 leading-relaxed">
            <strong>Proposed Brand Design Notice:</strong> These seals and
            signing applications are visual identity concepts supplied in
            Image 4. They do not constitute legally registered company seals or
            officially executed corporate filings until formal corporate
            authorization is confirmed.
          </div>
        </div>
      </div>

      {/* Lightbox for Image 4 */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={IMAGE_ASSETS.officialSealSigning.src}
        imageAlt={IMAGE_ASSETS.officialSealSigning.title}
        title={IMAGE_ASSETS.officialSealSigning.title}
        caption={IMAGE_ASSETS.officialSealSigning.caption}
      />
    </div>
  );
}
