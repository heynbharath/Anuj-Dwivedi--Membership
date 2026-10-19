"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TokenDesign } from "@/types";
import VeerbhogyaLogo from "@/components/VeerbhogyaLogo";
import {
  Award,
  Sparkles,
  ShieldCheck,
  RotateCcw,
  ZoomIn,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface RecognitionTokenCardProps {
  token: TokenDesign;
  onOpenPreview?: () => void;
}

export default function RecognitionTokenCard({
  token,
  onOpenPreview,
}: RecognitionTokenCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const isGold = token.tier === "GOLD";
  const isSilver = token.tier === "SILVER";
  const isBronze = token.tier === "BRONZE";
  const isCardBack = token.tier === "CARD_BACK";

  return (
    <div className="flex flex-col rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-gold-400/80 transition-all duration-300 overflow-hidden group">
      {/* Visual Token Render Frame */}
      <div
        className={`relative aspect-[3/4] p-5 sm:p-6 flex flex-col justify-between overflow-hidden bg-gradient-to-b ${token.colorScheme.bg} border-b ${token.colorScheme.border}`}
      >
        {/* Subtle decorative background watermark */}
        <div className="absolute inset-0 bg-light-dots opacity-40 pointer-events-none" />

        {/* Ambient metallic sheen */}
        <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-gradient-to-br from-white/70 to-transparent blur-xl pointer-events-none" />

        {/* Card Header */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center space-x-1.5">
            <span
              className={`text-[10px] font-mono font-bold tracking-widest px-2.5 py-0.5 rounded-full uppercase border shadow-xs ${token.colorScheme.badgeBg}`}
            >
              {token.tier} TOKEN
            </span>
          </div>

          <button
            type="button"
            onClick={() => setIsFlipped(!isFlipped)}
            className="inline-flex items-center space-x-1 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-white/80 hover:bg-white text-navy-950 border border-slate-300 shadow-xs transition-colors"
            title="Flip to view card reverse"
          >
            <RotateCcw className="w-3 h-3 text-gold-700" />
            <span>{isFlipped ? "View Front" : "View Back"}</span>
          </button>
        </div>

        {/* Front or Back Interactive Display */}
        {!isFlipped ? (
          <div className="relative z-10 my-auto text-center space-y-3 py-4">
            {/* Authentic Veerbhogya Insignia Seal */}
            <div className="w-16 h-16 mx-auto relative flex items-center justify-center">
              <VeerbhogyaLogo
                variant={
                  isGold
                    ? "token_seal_gold"
                    : isSilver
                    ? "token_seal_silver"
                    : isBronze
                    ? "token_seal_bronze"
                    : "token_seal_gold"
                }
                size={58}
                title={`${token.title} - Veerbhogya Insignia`}
              />
            </div>

            {/* Emblem / Rank Callout */}
            <div className="space-y-1">
              <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-slate-500 uppercase">
                ARCHZOS TECHNOLOGIES
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-navy-950">
                {token.title}
              </h4>
              <div className="inline-block text-[11px] font-mono font-bold tracking-wider px-3 py-0.5 rounded bg-black/5 text-navy-950 border border-slate-200">
                {token.accessStatus}
              </div>
            </div>

            {/* Laurel & Mountain Aesthetic Note */}
            <div className="text-[11px] text-slate-500 italic max-w-xs mx-auto leading-relaxed px-2">
              &ldquo;{token.visualDescription}&rdquo;
            </div>
          </div>
        ) : (
          /* Back of Token View */
          <div className="relative z-10 my-auto text-center space-y-3 py-4 bg-white/90 p-4 rounded-2xl border border-slate-200 backdrop-blur-xs">
            <div className="w-10 h-10 mx-auto relative flex items-center justify-center">
              <VeerbhogyaLogo
                variant={
                  isGold
                    ? "symbol_gold"
                    : isSilver
                    ? "symbol_silver"
                    : isBronze
                    ? "symbol_bronze"
                    : "symbol_color"
                }
                size={36}
                title="Veerbhogya Vasundhara"
              />
            </div>
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
              Card Reverse Specification
            </div>
            <div className="font-serif text-base font-bold text-navy-950">
              AWARDED BY ANUJ DWIVEDI
            </div>
            <div className="text-[11px] font-mono text-gold-700 font-bold">
              ARCHZOS TECHNOLOGIES PVT LTD
            </div>

            {/* Serial Number Field */}
            <div className="mt-3 p-2.5 rounded-xl bg-slate-50 border border-dashed border-slate-300 text-left">
              <div className="text-[9px] uppercase font-mono text-slate-400">
                SERIAL NO. (AUTHENTICATION SLOT)
              </div>
              <div className="font-mono text-xs font-bold text-navy-950 tracking-widest mt-0.5">
                ARC-2026-XXXX
              </div>
            </div>

            <div className="text-[10px] text-slate-500 font-mono">
              Official Founder Signature & Stamped Seal applied at ceremony.
            </div>
          </div>
        )}

        {/* Card Frame Footer */}
        <div className="relative z-10 flex items-center justify-between text-xs pt-3 border-t border-slate-200/60">
          <span className="text-[10px] font-mono text-slate-500">
            {token.category}
          </span>
          {onOpenPreview && (
            <button
              onClick={onOpenPreview}
              className="inline-flex items-center space-x-1 text-[11px] font-mono font-bold text-gold-700 hover:text-gold-900 group-hover:underline"
            >
              <ZoomIn className="w-3.5 h-3.5" />
              <span>Inspect Reference</span>
            </button>
          )}
        </div>
      </div>

      {/* Card Content & Operational Explanation */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {token.applicableDiscount && (
            <div className="p-3 rounded-xl bg-gold-50/70 border border-gold-300/80 text-xs">
              <span className="font-bold text-gold-900 block font-mono text-[11px] uppercase">
                Applicable Recognition Value:
              </span>
              <span className="text-gold-800 font-medium">
                {token.applicableDiscount}
              </span>
            </div>
          )}

          <div className="space-y-1">
            <div className="text-[10px] uppercase font-mono font-bold text-slate-400">
              What This Represents:
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {token.description}
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-[10px] uppercase font-mono font-bold text-slate-400">
              Eligibility & Allocation:
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {token.recipientEligibility}
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-[10px] uppercase font-mono font-bold text-slate-400">
              Next Action For Recipient:
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              {token.actionNext}
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            href={`/recognition#${token.id}`}
            className="inline-flex items-center space-x-1 text-xs font-mono font-bold uppercase tracking-wider text-navy-950 hover:text-gold-700"
          >
            <span>Token Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <span className="text-[10px] font-mono text-slate-400">
            {token.applicableOfferId === "premium-anchor-mentorship-pathway"
              ? "Mentorship Anchor"
              : token.applicableOfferId === "individual-bronze-route"
              ? "Individual Route"
              : "Universal Token"}
          </span>
        </div>
      </div>
    </div>
  );
}
