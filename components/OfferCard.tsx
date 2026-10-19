"use client";

import React from "react";
import Link from "next/link";
import { OfferPathway } from "@/types";
import { formatINR } from "@/lib/utils";
import { ArrowRight, Check, Users, Sparkles, ShieldAlert, Award } from "lucide-react";

interface OfferCardProps {
  offer: OfferPathway;
  highlighted?: boolean;
}

export default function OfferCard({ offer, highlighted = false }: OfferCardProps) {
  const isTeam = offer.routeKey === "route-a";
  const isBronze = offer.routeKey === "route-b";
  const isAnchor = offer.routeKey === "route-c";

  return (
    <div
      className={`rounded-3xl p-7 flex flex-col justify-between border transition-all duration-300 relative overflow-hidden ${
        highlighted || isAnchor
          ? "bg-navy-950 text-white border-gold-500 shadow-2xl ring-1 ring-gold-500/30"
          : isBronze
          ? "bg-white text-navy-950 border-amber-800/40 shadow-md hover:shadow-xl hover:border-amber-700"
          : "bg-white text-navy-950 border-slate-200 shadow-sm hover:shadow-lg hover:border-gold-400"
      }`}
    >
      {/* Decorative ambient gradient */}
      <div
        className={`absolute top-0 right-0 w-44 h-44 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16 opacity-30 ${
          isAnchor
            ? "bg-gold-500"
            : isBronze
            ? "bg-amber-600"
            : "bg-gold-400"
        }`}
      />

      <div className="space-y-5 relative z-10">
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2">
          <span
            className={`text-[10px] font-mono uppercase tracking-widest font-bold px-2.5 py-1 rounded-full border ${
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
            className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
              isAnchor
                ? "bg-black/50 text-slate-300 border-white/10"
                : "bg-slate-50 text-slate-600 border-slate-200"
            }`}
          >
            {offer.approvalStatus === "proposed_infographic_v2"
              ? "Infographic V2 Ref"
              : "Review Required"}
          </span>
        </div>

        {/* Title and Headline */}
        <div>
          <h3 className="font-serif text-2xl font-bold tracking-tight">
            {offer.name}
          </h3>
          <p
            className={`text-xs mt-1.5 leading-relaxed ${
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
              className={`text-[10px] uppercase font-mono font-bold ${
                isAnchor ? "text-gold-300" : "text-gold-800"
              }`}
            >
              Reference Investment
            </span>
            {isTeam && (
              <span className="text-[10px] font-mono text-slate-500">
                Up to {offer.teamMaxMembers} people
              </span>
            )}
          </div>

          <div className="flex items-baseline gap-2 mt-1">
            <span className="font-serif text-3xl font-bold">
              {formatINR(offer.referencePriceINR)}
            </span>
            <span
              className={`text-xs font-mono ${
                isAnchor ? "text-slate-400" : "text-slate-500"
              }`}
            >
              {isTeam ? "total for team" : isAnchor ? "/ 30 days" : "individual"}
            </span>
          </div>

          {/* Per person economics if team route */}
          {isTeam && offer.perPersonEquivalentINR && (
            <div className="mt-2 pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-mono text-[11px]">
                At full 5-member team:
              </span>
              <span className="font-bold font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[11px]">
                ₹{offer.perPersonEquivalentINR.toLocaleString("en-IN")} each
              </span>
            </div>
          )}

          {/* Bronze Discount indicator if route B */}
          {isBronze && (
            <div className="mt-2 pt-2 border-t border-amber-200/80 text-[11px] text-amber-900 font-medium">
              Bronze pass holders may qualify for 20% to 30% reduction (₹8,400 – ₹9,600).
            </div>
          )}

          {/* Anchor Card Discount indicator if route C */}
          {isAnchor && (
            <div className="mt-2 pt-2 border-t border-white/10 text-[11px] text-gold-300 flex items-center space-x-1.5">
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
            {offer.audience}
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

        {/* Notice */}
        <div
          className={`p-3 rounded-xl text-[11px] leading-relaxed border ${
            isAnchor
              ? "bg-white/5 border-white/10 text-slate-300"
              : "bg-slate-50 border-slate-200 text-slate-600"
          }`}
        >
          <span className="font-bold">Notice: </span>
          {offer.eligibilityNotice}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="pt-6 mt-6 border-t border-current/10 relative z-10">
        <Link
          href={`/book?route=${offer.routeKey}`}
          className={`w-full inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-wider font-bold py-3.5 rounded-xl transition-all shadow-md ${
            isAnchor
              ? "bg-gold-500 text-navy-950 hover:bg-gold-400 hover:shadow-gold-500/20"
              : isBronze
              ? "bg-amber-900 text-white hover:bg-amber-800"
              : "bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950"
          }`}
        >
          <span>{offer.ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <p
          className={`text-[10px] text-center font-mono mt-2 ${
            isAnchor ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {offer.managementNote}
        </p>
      </div>
    </div>
  );
}
