"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  TOKEN_DESIGNS,
  SAMPLE_TOKEN_RECORDS,
  IMAGE_ASSETS,
  SITE_CONFIG,
  RECOGNITION_RULES_CONFIG,
} from "@/lib/config";
import SectionHeader from "@/components/SectionHeader";
import VerificationNotice from "@/components/VerificationNotice";
import ImageLightbox from "@/components/ImageLightbox";
import RecognitionTokenCard from "@/components/RecognitionTokenCard";
import BookingCTA from "@/components/BookingCTA";
import VeerbhogyaLogo from "@/components/VeerbhogyaLogo";
import {
  Award,
  ShieldCheck,
  RotateCcw,
  ZoomIn,
  Search,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  FileText,
  Lock,
} from "lucide-react";

export default function RecognitionPage() {
  const [selectedTokenKey, setSelectedTokenKey] = useState<string>("gold-1");
  const [cardBackMode, setCardBackMode] = useState<boolean>(false);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const activeToken =
    TOKEN_DESIGNS.find((t) => t.rankKey === selectedTokenKey) ||
    TOKEN_DESIGNS[0];

  const filteredTokens = TOKEN_DESIGNS.filter(
    (t) =>
      t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white text-navy-950 py-12 sm:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Strip */}
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono font-bold">
              <Award className="w-3.5 h-3.5 text-gold-600" />
              <span>ARCHZOS TECHNOLOGIES RECOGNITION ARCHITECTURE</span>
            </div>
            <VerificationNotice
              status="supplied_proposal"
              label="Visual Identity From Image 2"
            />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-navy-950 leading-[1.08]">
            Recognition Tokens & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-amber-600 to-yellow-600">
              Paths That Lead Further
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Ten official recognition tokens designed to convert stage performance
            into structured advisory access. Conferred by Anuj Dwivedi at
            Octopus Tank to reward engineering rigor, problem defensibility, and
            exceptional building appetite.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => setLightboxOpen(true)}
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-xl bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950 transition-colors shadow-sm"
            >
              <ZoomIn className="w-4 h-4" />
              <span>Enlarge Original Token Reference (Image 2)</span>
            </button>
            <Link
              href="/offers"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-xl border border-slate-300 text-navy-950 hover:bg-slate-50 transition-colors"
            >
              <span>Explore Associated Commercial Offers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Interactive Token Inspection Suite */}
        <section className="p-6 sm:p-10 rounded-3xl bg-warmIvory/60 border border-gold-300 space-y-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gold-300/60 pb-6">
            <div>
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-gold-800">
                INTERACTIVE TOKEN VIEWER
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 mt-1">
                Inspect Token Anatomy & Reverse Face
              </h2>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setCardBackMode(!cardBackMode)}
                className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-white border border-gold-400 text-xs font-mono font-bold text-navy-950 hover:bg-gold-50 shadow-xs"
              >
                <RotateCcw className="w-3.5 h-3.5 text-gold-600" />
                <span>{cardBackMode ? "Show Card Front" : "Show Card Back"}</span>
              </button>
            </div>
          </div>

          {/* Token Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            {TOKEN_DESIGNS.map((token) => {
              const isSelected = selectedTokenKey === token.rankKey;
              return (
                <button
                  key={token.id}
                  onClick={() => {
                    setSelectedTokenKey(token.rankKey);
                    setCardBackMode(false);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all ${
                    isSelected
                      ? "bg-navy-950 text-white shadow-md ring-2 ring-gold-500/40"
                      : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
                  }`}
                >
                  {token.title.split("—")[0]}
                </button>
              );
            })}
          </div>

          {/* Split Detail Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Token Card Left (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-3xl overflow-hidden border-2 border-gold-500 shadow-2xl relative bg-white">
                <div
                  className={`aspect-[3/4] p-6 flex flex-col justify-between bg-gradient-to-b ${activeToken.colorScheme.bg}`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border ${activeToken.colorScheme.badgeBg}`}
                    >
                      {activeToken.tier} TOKEN
                    </span>
                    <span className="text-[10px] font-mono font-bold text-slate-500">
                      {cardBackMode ? "REVERSE FACE" : "OBVERSE FACE"}
                    </span>
                  </div>

                  {!cardBackMode ? (
                    <div className="text-center my-auto space-y-3">
                      <div className="w-20 h-20 mx-auto flex items-center justify-center">
                        <VeerbhogyaLogo
                          variant={
                            activeToken.tier === "GOLD"
                              ? "token_seal_gold"
                              : activeToken.tier === "SILVER"
                              ? "token_seal_silver"
                              : activeToken.tier === "BRONZE"
                              ? "token_seal_bronze"
                              : "token_seal_gold"
                          }
                          size={76}
                          title={`${activeToken.title} - Veerbhogya Insignia`}
                        />
                      </div>
                      <div className="space-y-1">
                        <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-slate-500 uppercase">
                          ARCHZOS TECHNOLOGIES
                        </div>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
                          {activeToken.title}
                        </h3>
                        <div className="inline-block text-xs font-mono font-bold tracking-wider px-3 py-1 rounded bg-black/5 text-navy-950 border border-slate-200">
                          {activeToken.accessStatus}
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 italic px-4">
                        &ldquo;{activeToken.visualDescription}&rdquo;
                      </p>
                    </div>
                  ) : (
                    <div className="text-center my-auto space-y-3 bg-white/90 p-5 rounded-2xl border border-gold-300 shadow-sm backdrop-blur-xs">
                      <div className="w-12 h-12 mx-auto flex items-center justify-center">
                        <VeerbhogyaLogo
                          variant={
                            activeToken.tier === "GOLD"
                              ? "symbol_gold"
                              : activeToken.tier === "SILVER"
                              ? "symbol_silver"
                              : activeToken.tier === "BRONZE"
                              ? "symbol_bronze"
                              : "symbol_color"
                          }
                          size={46}
                          title="Veerbhogya Vasundhara"
                        />
                      </div>
                      <div className="text-[10px] uppercase font-mono text-slate-400">
                        Official Back Specification
                      </div>
                      <div className="font-serif text-lg font-bold text-navy-950">
                        AWARDED BY ANUJ DWIVEDI
                      </div>
                      <div className="text-xs font-mono text-gold-700 font-bold">
                        ARCHZOS TECHNOLOGIES PVT LTD
                      </div>
                      <div className="my-3 p-3 rounded-xl bg-slate-50 border border-dashed border-slate-300 text-left">
                        <div className="text-[9px] uppercase font-mono text-slate-400">
                          SERIAL NO. (AUTHENTICATION SLOT)
                        </div>
                        <div className="font-mono text-sm font-bold text-navy-950 tracking-widest mt-0.5">
                          ARC-2026-XXXX
                        </div>
                      </div>
                      <p className="text-[10px] text-slate-500 font-mono">
                        Physical metallic gold signature line & official stamp.
                      </p>
                    </div>
                  )}

                  <div className="text-center text-[10px] font-mono text-slate-400 pt-3 border-t border-slate-200">
                    Archzos Technologies Pvt Ltd • Recognition Architecture
                  </div>
                </div>
              </div>
            </div>

            {/* Token Meaning & Operational Context Right (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-mono text-gold-800 font-bold uppercase tracking-widest">
                  {activeToken.category}
                </span>
                <h3 className="font-serif text-3xl font-bold text-navy-950">
                  {activeToken.title}
                </h3>
                <p className="text-xs font-mono text-slate-500">
                  Visual Treatment: {activeToken.visualDescription}
                </p>
              </div>

              {activeToken.applicableDiscount && (
                <div className="p-4 rounded-2xl bg-gold-50 border border-gold-400 text-xs space-y-1">
                  <span className="font-bold text-gold-900 block font-mono text-xs uppercase">
                    Commercial Value & Merit Discount:
                  </span>
                  <p className="text-gold-950 text-sm font-semibold">
                    {activeToken.applicableDiscount}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                  <span className="font-mono font-bold text-slate-400 uppercase text-[10px]">
                    What This Represents
                  </span>
                  <p className="text-slate-700 leading-relaxed">
                    {activeToken.description}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                  <span className="font-mono font-bold text-slate-400 uppercase text-[10px]">
                    Eligibility & Award Criteria
                  </span>
                  <p className="text-slate-700 leading-relaxed">
                    {activeToken.recipientEligibility}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1 text-xs">
                <span className="font-mono font-bold text-gold-800 uppercase text-[10px]">
                  What the Recipient Can Do Next
                </span>
                <p className="text-slate-700 leading-relaxed font-medium">
                  {activeToken.actionNext}
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/book"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-6 py-3.5 rounded-xl bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950 transition-colors shadow-md"
                >
                  <span>Submit Token for Scheduling</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/agreements"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-6 py-3.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-white transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-gold-600" />
                  <span>Preview Associated Agreement</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            10-CARD PROGRAMME ALLOCATION & STRICT CAP (Section 6)
        ========================================================= */}
        <section className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-gold-700">
                OFFICIAL RECOGNITION QUOTA
              </span>
              <h3 className="font-serif text-2xl font-bold text-navy-950 mt-1">
                Strict 10-Card Allocation Structure
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Each edition of Octopus Tank is capped at exactly {RECOGNITION_RULES_CONFIG.totalCardsPerEdition} physical cards to protect authentic scarcity.
              </p>
            </div>
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-gold-100 border border-gold-300 text-gold-900 font-mono text-xs font-bold">
              <Award className="w-4 h-4 text-gold-700" />
              <span>Strict Quota: Exactly 10 Cards</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-5 rounded-2xl bg-white border border-gold-300 space-y-2 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-gold-800 bg-gold-50 px-2 py-0.5 rounded border border-gold-300">
                  {RECOGNITION_RULES_CONFIG.goldCount} Gold Cards
                </span>
                <span className="text-[10px] font-mono text-slate-400">Podium Finishes</span>
              </div>
              <h4 className="font-serif font-bold text-navy-950 text-base">
                1st, 2nd & 3rd Place Teams
              </h4>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Awarded solely based on panel-judged stage competition. Strictly 3 cards per edition: 1st Place (Champion), 2nd Place (Finalist), and 3rd Place (Podium).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-300 space-y-2 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-300">
                  {RECOGNITION_RULES_CONFIG.silverCount} Silver Cards
                </span>
                <span className="text-[10px] font-mono text-slate-400">Discretionary</span>
              </div>
              <h4 className="font-serif font-bold text-navy-950 text-base">
                Selected By Anuj
              </h4>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Conferred on standout teams or ideas Anuj personally finds compelling for architecture, curiosity, and defensible technology.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-amber-300 space-y-2 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-300">
                  {RECOGNITION_RULES_CONFIG.bronzeCount} Bronze Cards
                </span>
                <span className="text-[10px] font-mono text-slate-400">Individual Route</span>
              </div>
              <h4 className="font-serif font-bold text-navy-950 text-base">
                Individual Interest Pass
              </h4>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Reserved for high-appetite individual builders seeking architectural direction and private guidance.
              </p>
            </div>
          </div>

          {/* Non-guarantee notice */}
          <div className="p-4 rounded-xl bg-warmIvory/60 border border-gold-300 text-xs text-slate-700 space-y-1">
            <div className="flex items-center space-x-1.5 font-bold text-navy-950">
              <ShieldCheck className="w-4 h-4 text-gold-700 shrink-0" />
              <span>Commercial Independence & Non-Guarantee Boundary:</span>
            </div>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Receiving a recognition token does not automatically guarantee venture capital funding, guaranteed commercial discounts, or mandatory paid engagement. Discounts and commercial terms are valid only when formally set out in a written offer issued by Archzos Technologies and accepted during Circle13 onboarding.
            </p>
          </div>
        </section>

        {/* All Tokens Visual Grid */}
        <section className="space-y-6">
          <SectionHeader
            eyebrow="COMPLETE TOKEN SUITE"
            title="The 10 Recognition Cards Architecture"
            subtitle="Explore each individual token category. Click any card to inspect or toggle between front and back specifications."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOKEN_DESIGNS.map((token) => (
              <RecognitionTokenCard
                key={token.id}
                token={token}
                onOpenPreview={() => setLightboxOpen(true)}
              />
            ))}
          </div>
        </section>

        {/* Future Token Records Schema & Architectural Readiness (Strictly No Fake Claims) */}
        <section className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-gold-700">
                AUTHENTICATION FRAMEWORK
              </span>
              <h3 className="font-serif text-2xl font-bold text-navy-950 mt-1">
                Configurable Token Records Architecture
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Prepared structural registry for tracking token issuance, serial
                numbers, and redemption status without exposing private recipient data.
              </p>
            </div>

            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-mono">
              <Lock className="w-3.5 h-3.5 text-slate-500" />
              <span>Private Data Safeguarded</span>
            </div>
          </div>

          {/* Sample Illustrative Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-xs">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 bg-warmIvory/60 font-mono text-[11px] text-navy-950 font-bold uppercase">
                  <th className="p-3.5">Token ID</th>
                  <th className="p-3.5">Category</th>
                  <th className="p-3.5">Recipient / Team</th>
                  <th className="p-3.5">Issue Date</th>
                  <th className="p-3.5">Validity</th>
                  <th className="p-3.5">Applicable Route</th>
                  <th className="p-3.5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono text-slate-700">
                {SAMPLE_TOKEN_RECORDS.map((rec) => (
                  <tr key={rec.tokenId} className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-gold-800">
                      {rec.tokenId}
                    </td>
                    <td className="p-3.5">{rec.category}</td>
                    <td className="p-3.5 font-sans">
                      <span className="font-semibold text-navy-950">
                        {rec.recipientName}
                      </span>
                      {rec.teamName && (
                        <span className="block text-[11px] text-slate-500">
                          {rec.teamName}
                        </span>
                      )}
                    </td>
                    <td className="p-3.5">{rec.issueDate}</td>
                    <td className="p-3.5">{rec.validityDate}</td>
                    <td className="p-3.5 font-sans">{rec.applicableOffer}</td>
                    <td className="p-3.5">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-100 text-amber-900 border border-amber-300">
                        {rec.redemptionStatus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 leading-relaxed space-y-1">
            <div className="flex items-center space-x-1.5 font-bold text-navy-950">
              <ShieldCheck className="w-4 h-4 text-gold-600 shrink-0" />
              <span>Authenticity & Privacy Notice:</span>
            </div>
            <p>
              The records above represent illustrative sample structures for the
              platform database. No real recipient serial numbers or private contact
              records are published. Verification is handled strictly through
              Circle13 management during formal onboarding.
            </p>
          </div>
        </section>

        {/* Booking CTA */}
        <BookingCTA
          headline="Have an inquiry regarding recognition?"
          supportingText="If you have participated in an event or hold an interest pass, connect with Circle13 management to verify eligibility or schedule your advisory route."
        />
      </div>

      {/* Lightbox for Image 2 */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={IMAGE_ASSETS.recognitionTokens.src}
        imageAlt={IMAGE_ASSETS.recognitionTokens.title}
        title={IMAGE_ASSETS.recognitionTokens.title}
        caption={IMAGE_ASSETS.recognitionTokens.caption}
      />
    </div>
  );
}
