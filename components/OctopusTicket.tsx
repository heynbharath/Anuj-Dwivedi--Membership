"use client";

import React, { useState } from "react";
import VeerbhogyaLogo, { VEERBHOGYA_COLORS } from "@/components/VeerbhogyaLogo";
import {
  Sparkles,
  ShieldCheck,
  QrCode,
  Printer,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Users,
  Award,
  Layers,
} from "lucide-react";

interface OctopusTicketProps {
  teamName?: string;
  ticketId?: string;
  trackArm?: string;
  className?: string;
}

export type TicketTier = "pitch_pass" | "gold_podium" | "bronze_individual";

export default function OctopusTicket({
  teamName = "TEAM NEURALFORGE",
  ticketId = "OCT-2026-0842",
  trackArm = "Arm 03: Applied AI & Intelligent Systems",
  className = "",
}: OctopusTicketProps) {
  const [tier, setTier] = useState<TicketTier>("pitch_pass");
  const [isCopied, setIsCopied] = useState(false);

  const tierDetails = {
    pitch_pass: {
      label: "Official Stage Pitch Pass",
      subline: "DSU Campus Pitching & Masterclass Access",
      price: "₹299 Total",
      priceSub: "Per Team (Up to 5 Builders)",
      sealVariant: "token_seal_gold" as const,
      borderAccent: "border-gold-500/50",
      badgeBg: "bg-gold-500/10 text-gold-400 border-gold-500/30",
      gateAccess: "Auditorium Main Floor + Live Pitch Stage",
      accentColor: "#C88932",
    },
    gold_podium: {
      label: "Gold Card Recipient VIP Pass",
      subline: "Top-3 Podium Finalist Delegation",
      price: "Earned Merit",
      priceSub: "Unlocks 60% – 80% Advisory Subsidies",
      sealVariant: "token_seal_gold" as const,
      borderAccent: "border-amber-400/70",
      badgeBg: "bg-amber-400/20 text-amber-300 border-amber-400/50",
      gateAccess: "Executive Backstage + Advisory Gateway",
      accentColor: "#E5C66E",
    },
    bronze_individual: {
      label: "Bronze Individual Access Pass",
      subline: "Individual Builder Route Pathway",
      price: "Direct Access",
      priceSub: "Unlocks Route B Implementation Advisory",
      sealVariant: "token_seal_bronze" as const,
      borderAccent: "border-amber-700/60",
      badgeBg: "bg-amber-800/20 text-amber-300 border-amber-700/40",
      gateAccess: "Masterclass Access + 1-on-1 Review",
      accentColor: "#A96F43",
    },
  };

  const current = tierDetails[tier];

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleCopySerial = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(`${ticketId}-${tier.toUpperCase()}`);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Tier Selector Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-200">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold mr-1">
            Pass Type:
          </span>
          <button
            onClick={() => setTier("pitch_pass")}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
              tier === "pitch_pass"
                ? "bg-navy-950 text-white shadow-md border border-gold-500"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-transparent"
            }`}
          >
            Team Pitch Pass (₹299)
          </button>
          <button
            onClick={() => setTier("gold_podium")}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
              tier === "gold_podium"
                ? "bg-gold-500 text-navy-950 shadow-md border border-gold-600"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-transparent"
            }`}
          >
            Gold Podium Pass (Top 3)
          </button>
          <button
            onClick={() => setTier("bronze_individual")}
            className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
              tier === "bronze_individual"
                ? "bg-amber-900 text-amber-100 shadow-md border border-amber-700"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-transparent"
            }`}
          >
            Bronze Individual Pass
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handleCopySerial}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-mono font-medium transition-colors"
            title="Copy authentication serial"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
            <span>{isCopied ? "Serial Copied!" : "Copy Serial"}</span>
          </button>
          <button
            onClick={handlePrint}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-mono font-medium transition-colors"
            title="Print Pass"
          >
            <Printer className="w-3.5 h-3.5 text-slate-600" />
            <span>Print Pass</span>
          </button>
        </div>
      </div>

      {/* Luxury Physical/Digital Boarding Ticket */}
      <div className="relative mx-auto max-w-4xl bg-[#101114] text-white rounded-3xl shadow-2xl border border-gold-500/40 overflow-hidden font-sans">
        {/* Subtle Watermark Guilloché Background */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 opacity-5 pointer-events-none">
          <VeerbhogyaLogo variant="symbol_gold" width={384} height={260} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 relative">
          {/* Main Ticket Body (Left 8 Cols) */}
          <div className="lg:col-span-8 p-6 sm:p-8 space-y-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-dashed border-gold-500/30 relative">
            {/* Top Notch Cutouts (Classic Ticket Visual) */}
            <div className="hidden lg:block absolute -top-3 -right-3 w-6 h-6 rounded-full bg-white border border-gold-500/40 z-20" />
            <div className="hidden lg:block absolute -bottom-3 -right-3 w-6 h-6 rounded-full bg-white border border-gold-500/40 z-20" />

            {/* Header: Institution & Brand Mark */}
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                  <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase font-bold">
                    DAYANANDA SAGAR UNIVERSITY • SCHOOL OF ENGINEERING
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">
                  OCTOPUS TANK 2026
                </h3>
                <p className="text-[11px] font-mono text-slate-400">
                  {current.label} • {current.subline}
                </p>
              </div>

              {/* Veerbhogya Authentic Insignia */}
              <div className="shrink-0 p-2 rounded-2xl bg-black/60 border border-gold-500/40 shadow-inner flex flex-col items-center">
                <VeerbhogyaLogo variant={current.sealVariant} width={52} height={52} />
                <span className="text-[8px] font-mono uppercase tracking-widest text-gold-300 mt-1 font-bold">
                  Veerbhogya
                </span>
              </div>
            </div>

            {/* Ticket Credentials Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-mono text-slate-400 font-bold">
                  Registered Team
                </span>
                <div className="font-serif font-bold text-sm text-gold-200">
                  {teamName}
                </div>
                <span className="text-[10px] font-mono text-slate-500">
                  Max 5 Builders
                </span>
              </div>

              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-mono text-slate-400 font-bold">
                  Thematic Arm
                </span>
                <div className="font-serif font-bold text-xs text-white">
                  {trackArm}
                </div>
                <span className="text-[10px] font-mono text-slate-500">
                  Stage Allocation 03
                </span>
              </div>

              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-mono text-slate-400 font-bold">
                  Entry Tariff
                </span>
                <div className="font-serif font-bold text-sm text-emerald-400">
                  {current.price}
                </div>
                <span className="text-[10px] font-mono text-slate-500">
                  {current.priceSub}
                </span>
              </div>

              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-mono text-slate-400 font-bold">
                  Date & Timeline
                </span>
                <div className="font-mono text-xs font-medium text-slate-200 flex items-center space-x-1">
                  <Calendar className="w-3 h-3 text-gold-400" />
                  <span>MAY 2026</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">
                  09:00 AM – 06:00 PM IST
                </span>
              </div>

              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-mono text-slate-400 font-bold">
                  Host Venue
                </span>
                <div className="font-mono text-xs font-medium text-slate-200 flex items-center space-x-1">
                  <MapPin className="w-3 h-3 text-gold-400" />
                  <span>Main Auditorium</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">
                  DSU Bengaluru Campus
                </span>
              </div>

              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-mono text-slate-400 font-bold">
                  Floor Clearance
                </span>
                <div className="font-mono text-xs font-medium text-gold-300">
                  {current.gateAccess}
                </div>
                <span className="text-[10px] font-mono text-slate-500">
                  3 Gates Qualified
                </span>
              </div>
            </div>

            {/* Bottom Security Strip */}
            <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between text-[10px] font-mono text-slate-400 gap-2">
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gold-300">
                  SERIAL: {ticketId}
                </span>
                <span>• ARCHZOS TECH × DSU VERIFIED</span>
              </div>
              <div className="text-slate-500">
                Coordinated via Circle13 Operations
              </div>
            </div>
          </div>

          {/* Right Tear-Off Stub (Right 4 Cols) */}
          <div className="lg:col-span-4 p-6 sm:p-7 bg-[#16181d] space-y-5 flex flex-col justify-between relative">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono uppercase tracking-widest text-gold-400 font-bold">
                  TEAR-OFF STUB
                </span>
                <span className="text-[9px] font-mono text-slate-500 uppercase">
                  GATE SCRUTINY
                </span>
              </div>

              <div className="text-center py-2 px-3 rounded-xl bg-black/50 border border-white/10 space-y-1">
                <div className="text-[10px] font-mono text-slate-400 uppercase">
                  PITCH PASS
                </div>
                <div className="font-serif font-bold text-base text-gold-300">
                  {tier === "pitch_pass"
                    ? "TEAM PASS"
                    : tier === "gold_podium"
                    ? "VIP GOLD"
                    : "BRONZE PASS"}
                </div>
                <div className="text-[9px] font-mono text-slate-400">
                  DSU-SOE-2026
                </div>
              </div>
            </div>

            {/* High-Fidelity Vector Barcode */}
            <div className="space-y-1.5 py-1">
              <div className="flex items-center justify-center space-x-[2px] h-12 bg-white px-3 py-1.5 rounded-lg shadow-inner">
                {/* SVG Barcode pattern simulating authentic code-128 */}
                {[
                  3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 4, 2, 2, 1, 3, 2, 4,
                  1, 2, 3, 1, 4, 1, 2, 3, 2, 1, 4, 1, 3, 2, 1, 4, 2, 1, 3, 2,
                ].map((w, idx) => (
                  <span
                    key={idx}
                    className="h-full bg-navy-950 inline-block"
                    style={{ width: `${w}px` }}
                  />
                ))}
              </div>
              <div className="text-center font-mono text-[9px] text-slate-400 tracking-widest">
                *{ticketId}-{tier.toUpperCase()}*
              </div>
            </div>

            {/* Stub Footer Notice */}
            <div className="space-y-1 text-center">
              <div className="flex items-center justify-center space-x-1 text-[9px] font-mono text-gold-400">
                <ShieldCheck className="w-3 h-3 text-gold-500" />
                <span>Veerbhogya Authenticated</span>
              </div>
              <p className="text-[8px] font-mono text-slate-500 leading-tight">
                Admit bearer + team upon presenting valid DSU photo identification at Hall A.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
