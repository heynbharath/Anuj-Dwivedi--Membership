"use client";

import React, { useState } from "react";
import Image from "next/image";
import { DOCUMENT_TEMPLATES, IMAGE_ASSETS } from "@/lib/config";
import ImageLightbox from "@/components/ImageLightbox";
import VeerbhogyaLogo from "@/components/VeerbhogyaLogo";
import {
  FileText,
  ShieldCheck,
  Edit3,
  RotateCcw,
  ZoomIn,
  Check,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export default function AgreementPreview() {
  const [selectedDocId, setSelectedDocId] = useState<string>("gold-agreement");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState(IMAGE_ASSETS.offerLetterStationery.src);
  const [lightboxTitle, setLightboxTitle] = useState(IMAGE_ASSETS.offerLetterStationery.title);

  // Editable preview fields
  const currentTemplate =
    DOCUMENT_TEMPLATES.find((d) => d.id === selectedDocId) ||
    DOCUMENT_TEMPLATES[0];

  const [recipientName, setRecipientName] = useState(
    currentTemplate.sampleFields.recipientName
  );
  const [teamName, setTeamName] = useState(
    currentTemplate.sampleFields.teamName
  );
  const [recognitionCategory, setRecognitionCategory] = useState(
    currentTemplate.sampleFields.recognitionCategory
  );
  const [offerTitle, setOfferTitle] = useState(
    currentTemplate.sampleFields.offerTitle
  );
  const [offerDetails, setOfferDetails] = useState(
    currentTemplate.sampleFields.offerDetails
  );
  const [serialNumber, setSerialNumber] = useState(
    currentTemplate.sampleFields.serialNumber
  );
  const [validUntil, setValidUntil] = useState(
    currentTemplate.sampleFields.validUntil
  );
  const [signatory, setSignatory] = useState(
    currentTemplate.sampleFields.approvedSignatory
  );

  // Sync state when switching template
  const handleSelectTemplate = (templateId: string) => {
    setSelectedDocId(templateId);
    const tmpl = DOCUMENT_TEMPLATES.find((d) => d.id === templateId);
    if (tmpl) {
      setRecipientName(tmpl.sampleFields.recipientName);
      setTeamName(tmpl.sampleFields.teamName);
      setRecognitionCategory(tmpl.sampleFields.recognitionCategory);
      setOfferTitle(tmpl.sampleFields.offerTitle);
      setOfferDetails(tmpl.sampleFields.offerDetails);
      setSerialNumber(tmpl.sampleFields.serialNumber);
      setValidUntil(tmpl.sampleFields.validUntil);
      setSignatory(tmpl.sampleFields.approvedSignatory);
    }
  };

  const isBlackAgreement = selectedDocId === "black-agreement";
  const isGoldAgreement = selectedDocId === "gold-agreement";
  const isOfferLetter = selectedDocId === "formal-offer-letter";
  const isEnvelope = selectedDocId === "branded-envelope";
  const isFolder = selectedDocId === "presentation-folder";

  return (
    <div className="space-y-8">
      {/* Document Selector Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-100 max-w-3xl mx-auto border border-slate-200">
        {DOCUMENT_TEMPLATES.map((tmpl) => {
          const isActive = tmpl.id === selectedDocId;
          return (
            <button
              key={tmpl.id}
              onClick={() => handleSelectTemplate(tmpl.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                isActive
                  ? "bg-navy-950 text-white shadow-md ring-1 ring-gold-500/40"
                  : "text-slate-600 hover:text-navy-950 hover:bg-white/80"
              }`}
            >
              {tmpl.title}
            </button>
          );
        })}
      </div>

      {/* Main Preview Container with Split Column: Live Document Preview on Left, Live Editor & Context on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Live Document HTML Rendering (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center">
          {/* Document Frame */}
          <div
            className={`w-full max-w-2xl rounded-2xl p-8 sm:p-12 relative shadow-2xl border transition-all duration-300 ${
              isBlackAgreement
                ? "bg-[#101114] text-white border-gold-500/70 shadow-gold-950/20"
                : isGoldAgreement
                ? "bg-[#FAF7F0] text-navy-950 border-gold-500 shadow-gold-500/10"
                : isFolder
                ? "bg-[#0D0F13] text-white border-slate-700"
                : "bg-white text-navy-950 border-slate-300"
            }`}
          >
            {/* Watermark notice */}
            <div className="absolute top-3 right-4 text-[9px] font-mono tracking-widest uppercase opacity-40 pointer-events-none">
              ILLUSTRATIVE DESIGN PREVIEW • NOT AUTHORISED
            </div>

            {/* Ornamental Gold Corner Borders for Gold & Offer Letter */}
            {(isGoldAgreement || isOfferLetter) && (
              <>
                <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-gold-500/80 pointer-events-none" />
                <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-gold-500/80 pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-gold-500/80 pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-gold-500/80 pointer-events-none" />
              </>
            )}

            {/* Document Header with Archzos Emblem */}
            <div className="text-center space-y-2 pb-6 border-b border-current/10">
              <div className="w-16 h-16 mx-auto flex items-center justify-center">
                <VeerbhogyaLogo
                  variant={isBlackAgreement ? "symbol_white_gold" : "symbol_color"}
                  size={52}
                  title="Veerbhogya Vasundhara Insignia"
                />
              </div>
              <div className="text-[11px] font-mono tracking-[0.25em] uppercase font-bold text-gold-600">
                ARCHZOS TECHNOLOGIES PVT LTD
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
                {currentTemplate.title.toUpperCase()}
              </h2>
              <div className="text-[10px] uppercase font-mono tracking-wider opacity-70">
                People • Ideas • Possibilities • A Brighter Tomorrow Together
              </div>
            </div>

            {/* Document Body */}
            <div className="py-6 space-y-5 text-xs sm:text-sm leading-relaxed">
              <p
                className={`italic leading-relaxed ${
                  isBlackAgreement ? "text-slate-300" : "text-slate-600"
                }`}
              >
                &ldquo;We are pleased to extend this offer in recognition of your
                valuable contribution and exceptional potential. We look forward
                to achieving greater milestones together.&rdquo;
              </p>

              {/* Structured Metadata Grid */}
              <div
                className={`p-5 rounded-xl border space-y-2.5 font-mono text-xs ${
                  isBlackAgreement
                    ? "bg-black/50 border-gold-500/30 text-slate-200"
                    : "bg-warmIvory/60 border-gold-300/50 text-navy-950"
                }`}
              >
                <div className="grid grid-cols-3 gap-2 border-b border-current/10 pb-1.5">
                  <span className="text-slate-400 uppercase text-[10px]">
                    Recipient Name:
                  </span>
                  <span className="col-span-2 font-bold font-serif text-sm">
                    {recipientName || "—"}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 border-b border-current/10 pb-1.5">
                  <span className="text-slate-400 uppercase text-[10px]">
                    Team Name:
                  </span>
                  <span className="col-span-2 font-semibold">
                    {teamName || "—"}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 border-b border-current/10 pb-1.5">
                  <span className="text-slate-400 uppercase text-[10px]">
                    Recognition Category:
                  </span>
                  <span className="col-span-2 text-gold-600 font-bold">
                    {recognitionCategory || "—"}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 border-b border-current/10 pb-1.5">
                  <span className="text-slate-400 uppercase text-[10px]">
                    Offer Title:
                  </span>
                  <span className="col-span-2 font-bold">
                    {offerTitle || "—"}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 border-b border-current/10 pb-1.5">
                  <span className="text-slate-400 uppercase text-[10px]">
                    Offer Details:
                  </span>
                  <span className="col-span-2 text-xs font-sans">
                    {offerDetails || "—"}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 border-b border-current/10 pb-1.5">
                  <span className="text-slate-400 uppercase text-[10px]">
                    Serial Number:
                  </span>
                  <span className="col-span-2 font-bold tracking-widest text-emerald-600">
                    {serialNumber || "—"}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <span className="text-slate-400 uppercase text-[10px]">
                    Valid Until:
                  </span>
                  <span className="col-span-2">{validUntil || "—"}</span>
                </div>
              </div>
            </div>

            {/* Document Signature & Seal Section */}
            <div className="pt-6 border-t border-current/10 grid grid-cols-2 gap-4 items-end">
              {/* Signature Line */}
              <div className="space-y-1">
                <div
                  className="font-serif italic text-xl font-bold tracking-wider"
                  style={{ color: "#C9A04A" }}
                >
                  Anuj Dwivedi
                </div>
                <div className="w-36 h-[1.5px] bg-gold-500/70" />
                <div className="text-[11px] font-bold text-navy-950 dark:text-white pt-1">
                  {signatory}
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  Authorized Signatory
                </div>
              </div>

              {/* Authentic Archzos Veerbhogya Seal Stamp */}
              <div className="flex justify-end">
                <div className="w-20 h-20 rounded-full border-2 border-gold-500/80 p-1 flex flex-col items-center justify-center text-center shadow-inner bg-gold-50/20">
                  <VeerbhogyaLogo variant="symbol_gold" size={24} title="Archzos Veerbhogya Seal" />
                  <div className="text-[6px] font-mono tracking-widest text-gold-700 uppercase mt-0.5 font-bold">
                    ARCHZOS
                  </div>
                  <div className="text-[5px] font-mono text-slate-400">
                    PVT LTD
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <span className="text-[11px] font-mono text-slate-500">
              Interactive HTML Document Render • Exact visual styling mirrors
              Image 3 & Image 1
            </span>
          </div>
        </div>

        {/* Right Column: Live Customizer & Reference Details (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Visual Reference Banner */}
          <div className="p-5 rounded-2xl bg-warmIvory/60 border border-gold-300 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gold-800">
                Visual Reference Image 3
              </span>
              <button
                onClick={() => {
                  setLightboxSrc(IMAGE_ASSETS.offerLetterStationery.src);
                  setLightboxTitle(IMAGE_ASSETS.offerLetterStationery.title);
                  setLightboxOpen(true);
                }}
                className="inline-flex items-center space-x-1 text-xs font-mono font-bold text-gold-700 hover:text-gold-900"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Enlarge Original</span>
              </button>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              {currentTemplate.headline}. {currentTemplate.description}
            </p>
            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-2 border-t border-gold-300/60">
              <div>
                <span className="text-slate-400 block text-[9px] uppercase">
                  Paper Stock:
                </span>
                <span className="font-semibold text-navy-950">
                  {currentTemplate.paperStock}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block text-[9px] uppercase">
                  Seal Method:
                </span>
                <span className="font-semibold text-navy-950">
                  {currentTemplate.sealType}
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Live Editor Form */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center space-x-2">
                <Edit3 className="w-4 h-4 text-gold-600" />
                <h4 className="font-serif text-base font-bold text-navy-950">
                  Preview Customizer
                </h4>
              </div>
              <button
                type="button"
                onClick={() => handleSelectTemplate(selectedDocId)}
                className="inline-flex items-center space-x-1 text-[11px] font-mono text-slate-500 hover:text-navy-950"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Fields</span>
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">
                  Recipient Name
                </label>
                <input
                  type="text"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-navy-950 focus:outline-none focus:border-gold-500 text-xs"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">
                  Team Name
                </label>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-navy-950 focus:outline-none focus:border-gold-500 text-xs"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">
                  Recognition Category
                </label>
                <input
                  type="text"
                  value={recognitionCategory}
                  onChange={(e) => setRecognitionCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-navy-950 focus:outline-none focus:border-gold-500 text-xs"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">
                  Offer Title
                </label>
                <input
                  type="text"
                  value={offerTitle}
                  onChange={(e) => setOfferTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-navy-950 focus:outline-none focus:border-gold-500 text-xs"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">
                  Serial Number Slot
                </label>
                <input
                  type="text"
                  value={serialNumber}
                  onChange={(e) => setSerialNumber(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-navy-950 font-mono text-xs focus:outline-none focus:border-gold-500"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">
                  Valid Until
                </label>
                <input
                  type="text"
                  value={validUntil}
                  onChange={(e) => setValidUntil(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-navy-950 text-xs focus:outline-none focus:border-gold-500"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  alert(
                    "PREVIEW DOCUMENT DESIGN: This is an illustrative brand preview. Physical or digital issuance requires final agreement approval and corporate authorization."
                  );
                }}
                className="w-full py-3 rounded-xl bg-navy-950 text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-gold-500 hover:text-navy-950 transition-colors shadow-sm"
              >
                PREVIEW DOCUMENT DESIGN
              </button>
            </div>
          </div>

          {/* Legal / Authorization Disclaimer Notice */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
            <div className="flex items-center space-x-1.5 text-navy-950 font-bold">
              <ShieldCheck className="w-4 h-4 text-gold-600 shrink-0" />
              <span>Design Status & Authorisation Notice:</span>
            </div>
            <p className="leading-relaxed">
              {currentTemplate.disclaimer}
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox for inspecting original visual reference */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={lightboxSrc}
        imageAlt={lightboxTitle}
        title={lightboxTitle}
        caption="Official stationery and agreement concepts from supplied user references."
      />
    </div>
  );
}
