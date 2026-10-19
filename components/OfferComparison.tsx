"use client";

import React from "react";
import Link from "next/link";
import { formatINR } from "@/lib/utils";
import { Check, X, ArrowRight, Award, Users, ShieldCheck } from "lucide-react";

export default function OfferComparison() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-lg">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[760px]">
          <thead>
            <tr className="border-b border-slate-200 bg-warmIvory/60">
              <th className="p-5 font-serif text-sm font-bold text-navy-950 w-1/4">
                Engagement Attribute
              </th>
              <th className="p-5 font-serif text-base font-bold text-navy-950 w-1/4 border-l border-slate-200">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold-700 block font-bold">
                  Route A
                </span>
                <span>Team Consultancy Entry</span>
                <div className="font-sans font-bold text-lg text-navy-950 mt-1">
                  ₹15,000 <span className="text-xs font-normal text-slate-500">total</span>
                </div>
              </th>
              <th className="p-5 font-serif text-base font-bold text-navy-950 w-1/4 border-l border-slate-200">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-700 block font-bold">
                  Route B
                </span>
                <span>Individual Bronze Route</span>
                <div className="font-sans font-bold text-lg text-navy-950 mt-1">
                  ₹12,000 <span className="text-xs font-normal text-slate-500">base</span>
                </div>
              </th>
              <th className="p-5 font-serif text-base font-bold text-white w-1/4 border-l border-gold-500/60 bg-navy-950">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 block font-bold">
                  Route C (Anchor)
                </span>
                <span>Premium Anchor Mentorship</span>
                <div className="font-sans font-bold text-lg text-gold-400 mt-1">
                  ₹75,000 <span className="text-xs font-normal text-slate-400">anchor</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
            {/* Target Audience */}
            <tr className="hover:bg-slate-50/60">
              <td className="p-4 font-mono font-bold text-navy-950 uppercase text-[11px]">
                Target Audience
              </td>
              <td className="p-4 border-l border-slate-200">
                Teams of up to 5 people working toward a shared technical objective.
              </td>
              <td className="p-4 border-l border-slate-200">
                Highly interested individual builders seeking personal execution direction.
              </td>
              <td className="p-4 border-l border-slate-200 bg-slate-900/5 font-medium text-navy-950">
                High-ambition builders and flagship teams preparing for serious launch.
              </td>
            </tr>

            {/* Per-Head Cost Equivalent */}
            <tr className="hover:bg-slate-50/60">
              <td className="p-4 font-mono font-bold text-navy-950 uppercase text-[11px]">
                Per-Head Equivalent
              </td>
              <td className="p-4 border-l border-slate-200">
                <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  ₹3,000 each
                </span>{" "}
                (when team of 5 is full)
              </td>
              <td className="p-4 border-l border-slate-200 font-mono">
                ₹12,000 (or ₹8,400–₹9,600 with Bronze pass)
              </td>
              <td className="p-4 border-l border-slate-200 bg-slate-900/5 font-mono">
                ₹15,000 to ₹30,000 with Gold card
              </td>
            </tr>

            {/* Engagement Window */}
            <tr className="hover:bg-slate-50/60">
              <td className="p-4 font-mono font-bold text-navy-950 uppercase text-[11px]">
                Engagement Window
              </td>
              <td className="p-4 border-l border-slate-200">
                Single structured intensive group consultation session.
              </td>
              <td className="p-4 border-l border-slate-200">
                1-on-1 personalized advisory session.
              </td>
              <td className="p-4 border-l border-slate-200 bg-slate-900/5 font-bold text-navy-950">
                30-day continuous intensive mentorship.
              </td>
            </tr>

            {/* Core Deliverable */}
            <tr className="hover:bg-slate-50/60">
              <td className="p-4 font-mono font-bold text-navy-950 uppercase text-[11px]">
                Primary Deliverable
              </td>
              <td className="p-4 border-l border-slate-200">
                Team architectural review, pitch stress-testing, sprint roadmap.
              </td>
              <td className="p-4 border-l border-slate-200">
                Personalized technical stack diagnosis and hypothesis validation.
              </td>
              <td className="p-4 border-l border-slate-200 bg-slate-900/5">
                Weekly strategic milestones, deep architecture audits, accountability.
              </td>
            </tr>

            {/* Token Discount Eligibility */}
            <tr className="hover:bg-slate-50/60">
              <td className="p-4 font-mono font-bold text-navy-950 uppercase text-[11px]">
                Recognition Token Eligibility
              </td>
              <td className="p-4 border-l border-slate-200 text-slate-500">
                Stand-alone flat team rate. Does not require token.
              </td>
              <td className="p-4 border-l border-slate-200 text-amber-900 font-medium">
                Associated with Bronze Token (Individual Interest Pass).
              </td>
              <td className="p-4 border-l border-slate-200 bg-slate-900/5 text-gold-800 font-bold">
                Gold Cards (80%, 70%, 60%) & Silver Cards (50%/40%) redeemable.
              </td>
            </tr>

            {/* Onboarding & Management */}
            <tr className="hover:bg-slate-50/60">
              <td className="p-4 font-mono font-bold text-navy-950 uppercase text-[11px]">
                Onboarding Routing
              </td>
              <td className="p-4 border-l border-slate-200">
                Circle13 Management desk schedules upon team intake review.
              </td>
              <td className="p-4 border-l border-slate-200">
                Circle13 Management schedules individual session.
              </td>
              <td className="p-4 border-l border-slate-200 bg-slate-900/5">
                Circle13 Management confirms cohort onboarding & weekly slots.
              </td>
            </tr>

            {/* Document Ceremony */}
            <tr className="hover:bg-slate-50/60">
              <td className="p-4 font-mono font-bold text-navy-950 uppercase text-[11px]">
                Associated Document
              </td>
              <td className="p-4 border-l border-slate-200">
                Black Agreement / Team Offer Letter
              </td>
              <td className="p-4 border-l border-slate-200">
                Bronze Interest Pass Letter
              </td>
              <td className="p-4 border-l border-slate-200 bg-slate-900/5 font-semibold text-navy-950">
                Gold Agreement / Formal Offer Letter
              </td>
            </tr>

            {/* Action Row */}
            <tr className="bg-slate-50">
              <td className="p-5 font-mono text-[11px] text-slate-400">
                Select Pathway
              </td>
              <td className="p-5 border-l border-slate-200">
                <Link
                  href="/book?route=route-a"
                  className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950 transition-colors shadow-sm"
                >
                  <span>Select Route A</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </td>
              <td className="p-5 border-l border-slate-200">
                <Link
                  href="/book?route=route-b"
                  className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl bg-amber-900 text-white hover:bg-amber-800 transition-colors shadow-sm"
                >
                  <span>Select Route B</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </td>
              <td className="p-5 border-l border-slate-200 bg-navy-950">
                <Link
                  href="/book?route=route-c"
                  className="inline-flex items-center space-x-1.5 text-xs font-mono font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl bg-gold-500 text-navy-950 hover:bg-gold-400 transition-colors shadow-sm"
                >
                  <span>Select Route C</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="p-4 bg-warmIvory/60 border-t border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="font-mono text-[11px]">
          Source: Octopus Tank Offer Structure (Image 1). Pricing represents proposed structure.
        </span>
        <span className="text-[11px] text-slate-500">
          Booking requests route via Circle13 management.
        </span>
      </div>
    </div>
  );
}
