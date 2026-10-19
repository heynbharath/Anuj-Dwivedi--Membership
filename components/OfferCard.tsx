"use client";

import React from "react";
import Link from "next/link";
import { OfferPathway, UnifiedOffer } from "@/types";
import { formatINR } from "@/lib/utils";
import { ArrowRight, Check, Users, Sparkles, ShieldCheck, Award, Clock } from "lucide-react";

interface OfferCardProps {
  offer: OfferPathway | UnifiedOffer;
  highlighted?: boolean;
}

export default function OfferCard({ offer, highlighted = false }: OfferCardProps) {
  const isTeam = offer.routeKey === "route-a";
  const isBronze = offer.routeKey === "route-b";
  const isAnchor = offer.routeKey === "route-c";

  // Title & Name normalization
  const title = "title" in offer ? offer.title : offer.name;
  const status = offer.status || ("approvalStatus" in offer ? "awaiting_approval" : "draft");
  const statusLabel =
    offer.statusLabel ||
    (status === "approved"
      ? "Confirmed Offer"
      : status === "awaiting_approval"
      ? "Awaiting Approval"
      : "Draft Proposal");

  const ctaLink =
    "ctaLink" in offer && offer.ctaLink
      ? offer.ctaLink
      : `/book?route=${offer.routeKey || "route-a"}`;

  return (
    <div
      className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between border transition-all duration-300 relative overflow-hidden ${
        highlighted || isAnchor
          ? "bg-navy-950 text-white border-gold-500 shadow-2xl ring-1 ring-gold-500/40"
          : isBronze
          ? "bg-white text-navy-950 border-amber-800/40 shadow-md hover:shadow-xl hover:border-amber-700"
          : "bg-white text-navy-950 border-slate-200 shadow-sm hover:shadow-lg hover:border-gold-400"
      }`}
    >
      {/* Decorative ambient gradient */}
      <div
        className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16 opacity-30 ${
          isAnchor
            ? "bg-gold-500"
            : isBronze
            ? "bg-amber-600"
            : "bg-gold-400"
        }`}
      />

      <div className="space-y-6 relative z-10">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span
            className={`text-[10px] font-mono uppercase tracking-widest font-bold px-3 py-1 rounded-full border shadow-xs ${
              isAnchor
                ? "bg-gold-500/20 text-gold-300 border-gold-400/40"
                : isBronze
                ? "bg-amber-50 text-amber-900 border-amber-300"
                : "bg-gold-50 text-gold-800 border-gold-300"
            }`}
          >
            {offer.badge}
          </span>

          <span
            className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border font-bold flex items-center space-x-1 ${
              status === "approved"
                ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                : status === "awaiting_approval"
                ? "bg-amber-50 text-amber-900 border-amber-300"
                : "bg-slate-100 text-slate-600 border-slate-200"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                status === "approved"
                  ? "bg-emerald-500"
                  : status === "awaiting_approval"
                  ? "bg-amber-500"
                  : "bg-slate-400"
              }`}
            />
            <span>{statusLabel}</span>
          </span>
        </div>

        {/* Title and Headline */}
        <div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
            {title}
          </h3>
          <p
            className={`text-xs sm:text-sm mt-2 leading-relaxed ${
              isAnchor ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {offer.headline}
          </p>
        </div>

        {/* Pricing Box */}
        <div
          className={`p-5 rounded-2xl border ${
            isAnchor
              ? "bg-black/50 border-gold-500/40"
              : isBronze
              ? "bg-[#FAF5F0] border-amber-200"
              : "bg-warmIvory/60 border-gold-300/60"
          }`}
        >
          <div className="flex items-baseline justify-between">
            <span
              className={`text-[10px] uppercase font-mono font-bold tracking-wider ${
                isAnchor ? "text-gold-300" : "text-gold-800"
              }`}
            >
              {status === "approved" ? "Confirmed Price" : "Reference Planning Rate"}
            </span>
            {isTeam && (
              <span className="text-[10px] font-mono text-slate-500">
                Up to {offer.teamMaxMembers || 5} people
              </span>
            )}
          </div>

          <div className="flex items-baseline gap-2 mt-1">
            <span className="font-serif text-3xl sm:text-4xl font-bold">
              {offer.referencePriceINR ? formatINR(offer.referencePriceINR) : "Custom Quote"}
            </span>
            <span
              className={`text-xs font-mono ${
                isAnchor ? "text-slate-400" : "text-slate-500"
              }`}
            >
              {isTeam ? "total team fee" : isAnchor ? "/ 30 days" : "per participant"}
            </span>
          </div>

          {/* Per person economics if team route */}
          {isTeam && (
            <div className="mt-3 pt-2.5 border-t border-slate-200/60 space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 font-mono text-[11px]">
                  At full 5-member team:
                </span>
                <span className="font-bold font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[11px]">
                  ₹3,000 each
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-mono leading-tight">
                Flat total for team; smaller teams (2–4) may join at the same ₹15,000 total.
              </p>
            </div>
          )}

          {/* Bronze Route clarification */}
          {isBronze && (
            <div className="mt-2.5 pt-2 border-t border-amber-200/80 text-[11px] text-amber-900 font-medium">
              Individual engagement associated with Bronze recognition. Exact eligibility requires confirmation.
            </div>
          )}

          {/* Anchor Card Discount indicator if route C */}
          {isAnchor && (
            <div className="mt-2.5 pt-2 border-t border-white/10 text-[11px] text-gold-300 flex items-center space-x-1.5">
              <Award className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>Redeemable with Gold (80%/70%/60%) & Silver (50%/40%) cards</span>
            </div>
          )}
        </div>

        {/* Target Audience */}
        <div className="space-y-1">
          <div
            className={`text-[10px] uppercase font-mono font-bold tracking-wider ${
              isAnchor ? "text-gold-400" : "text-gold-800"
            }`}
          >
            Target Builder Profile:
          </div>
          <p
            className={`text-xs ${
              isAnchor ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {"targetAudience" in offer ? offer.targetAudience : offer.audience}
          </p>
        </div>

        {/* Focus Areas */}
        <div className="space-y-2">
          <div
            className={`text-[11px] font-bold uppercase tracking-wider ${
              isAnchor ? "text-gold-400" : "text-gold-800"
            }`}
          >
            Core Focus Areas:
          </div>
          <ul className="space-y-2 text-xs">
            {offer.focusAreas.map((item, i) => (
              <li key={i} className="flex items-start space-x-2">
                <Check
                  className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                    isAnchor ? "text-gold-400" : "text-gold-600"
                  }`}
                />
                <span
                  className={isAnchor ? "text-slate-300" : "text-slate-700"}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Notice & Scope Boundaries */}
        <div
          className={`p-3.5 rounded-xl text-[11px] leading-relaxed border ${
            isAnchor
              ? "bg-white/5 border-white/10 text-slate-300"
              : "bg-slate-50 border-slate-200 text-slate-600"
          }`}
        >
          <span className="font-bold">Governance Notice: </span>
          {offer.eligibilityNotice}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="pt-6 mt-6 border-t border-current/10 relative z-10">
        <Link
          href={ctaLink}
          className={`w-full inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-wider font-bold py-3.5 rounded-xl transition-all shadow-md ${
            isAnchor
              ? "bg-gold-500 text-navy-950 hover:bg-gold-400 hover:shadow-gold-500/20"
              : isBronze
              ? "bg-amber-900 text-white hover:bg-amber-800"
              : "bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950"
          }`}
        >
          <span>{offer.ctaText || "Request Engagement"}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <p
          className={`text-[10px] text-center font-mono mt-2.5 ${
            isAnchor ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {offer.managementNote || "Onboarding coordinated via Circle13 management desk."}
        </p>
      </div>
    </div>
  );
}
