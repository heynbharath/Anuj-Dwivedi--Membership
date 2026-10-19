"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

interface BookingCTAProps {
  headline?: string;
  supportingText?: string;
}

export default function BookingCTA({
  headline = "Find the right engagement.",
  supportingText = "Whether you are a student team preparing for Octopus Tank, an individual builder seeking architectural clarity, or an institution hosting a premier event, explore our structured pathways.",
}: BookingCTAProps) {
  return (
    <div className="rounded-3xl p-8 sm:p-14 bg-navy-950 text-white border border-gold-500/40 text-center relative overflow-hidden shadow-2xl">
      {/* Decorative background ambient glows */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-gold-400/10 blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto space-y-6 relative z-10">
        <div className="inline-flex items-center space-x-2 text-[10px] uppercase font-mono tracking-[0.25em] text-gold-400 font-bold px-3 py-1 rounded-full bg-white/5 border border-gold-500/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ANUJ DWIVEDI × ARCHZOS TECHNOLOGIES</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight tracking-tight">
          {headline}
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 font-light max-w-lg mx-auto leading-relaxed">
          {supportingText}
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/offers"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-wider font-bold px-8 py-4 rounded-xl bg-gold-500 text-navy-950 hover:bg-gold-400 transition-colors shadow-lg"
          >
            <span>Explore Offers</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/book"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-wider font-bold px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors"
          >
            <span>Request an Enquiry</span>
            <MessageSquare className="w-4 h-4 text-gold-400" />
          </Link>
        </div>

        <div className="pt-4 flex items-center justify-center space-x-2 text-[11px] font-mono text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-gold-500" />
          <span>Bookings & portfolio coordinated strictly via {SITE_CONFIG.management.entity}</span>
        </div>
      </div>
    </div>
  );
}
