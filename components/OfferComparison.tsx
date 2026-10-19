"use client";

import React from "react";
import Link from "next/link";
import { formatINR } from "@/lib/utils";
import { Check, X, ArrowRight, Award, Users, ShieldCheck, AlertCircle } from "lucide-react";

export default function OfferComparison() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-xl">
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
                  ₹15,000 <span className="text-xs font-normal text-slate-500">total for team</span>
                </div>
              </th>
              <th className="p-5 font-serif text-base font-bold text-navy-950 w-1/4 border-l border-slate-200">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-700 block font-bold">
                  Route B
                </span>
                <span>Individual Bronze Route</span>
                <div className="font-sans font-bold text-lg text-navy-950 mt-1">
                  ₹12,000 <span className="text-xs font-normal text-slate-500">individual base</span>
                </div>
              </th>
              <th className="p-5 font-serif text-base font-bold text-white w-1/4 border-l border-gold-500/60 bg-navy-950">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 block font-bold">
                  Route C (Anchor)
                </span>
                <span>Premium Anchor Mentorship</span>
                <div className="font-sans font-bold text-lg text-gold-400 mt-1">
                  ₹75,000 <span className="text-xs font-normal text-slate-400">anchor / 30 days</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
            {/* Approval Status */}
            <tr className="hover:bg-slate-50/60">
              <td className="p-4 font-mono font-bold text-navy-950 uppercase text-[11px]">
                Commercial Status
              </td>
              <td className="p-4 border-l border-slate-200">
                <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-50 text-amber-900 border border-amber-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Awaiting Approval (Planning Term)</span>
                </span>
              </td>
              <td className="p-4 border-l border-slate-200">
                <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-50 text-amber-900 border border-amber-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Awaiting Approval (Planning Term)</span>
                </span>
              </td>
              <td className="p-4 border-l border-slate-200 bg-slate-900/5">
                <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-50 text-amber-900 border border-amber-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Awaiting Approval (Planning Term)</span>
                </span>
              </td>
            </tr>

            {/* Target Audience */}
            <tr className="hover:bg-slate-50/60">
              <td className="p-4 font-mono font-bold text-navy-950 uppercase text-[11px]">
                Target Audience
              </td>
              <td className="p-4 border-l border-slate-200">
                Teams of up to 5 people working toward a shared technical or pitch milestone.
              </td>
              <td className="p-4 border-l border-slate-200">
                Individual builders and students seeking direct personal execution direction.
              </td>
              <td className="p-4 border-l border-slate-200 bg-slate-900/5 font-medium text-navy-950">
                High-ambition builders and flagship teams preparing for serious launch or scrutiny.
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
                (when 5-member team is full). Total remains ₹15,000 for 2, 3, or 4 members.
              </td>
              <td className="p-4 border-l border-slate-200 font-mono">
                ₹12,000 individual rate (or ₹8,400–₹9,600 with confirmed Bronze discount).
              </td>
              <td className="p-4 border-l border-slate-200 bg-slate-900/5 font-mono">
                ₹15,000, ₹22,500, or ₹30,000 with judged Gold cards.
              </td>
            </tr>

            {/* Delivery Format */}
            <tr className="hover:bg-slate-50/60">
              <td className="p-4 font-mono font-bold text-navy-950 uppercase text-[11px]">
                Delivery Format
              </td>
              <td className="p-4 border-l border-slate-200">
                Private team-exclusive consultation session (online or in Bangalore).
              </td>
              <td className="p-4 border-l border-slate-200">
                Explicit individual format. Consensual; never silently replaced with group.
              </td>
              <td className="p-4 border-l border-slate-200 bg-slate-900/5 font-bold text-navy-950">
                30-day intensive hybrid mentorship with scheduled weekly review checkpoints.
              </td>
            </tr>

            {/* Core Deliverable */}
            <tr className="hover:bg-slate-50/60">
              <td className="p-4 font-mono font-bold text-navy-950 uppercase text-[11px]">
                Primary Deliverable
              </td>
              <td className="p-4 border-l border-slate-200">
                Team architectural review, pitch stress-testing, sprint backlog roadmap.
              </td>
              <td className="p-4 border-l border-slate-200">
                Personalized technical stack diagnosis and hypothesis validation rubric.
              </td>
              <td className="p-4 border-l border-slate-200 bg-slate-900/5">
                Weekly strategic milestones, deep architecture audits, accountability checkpoints.
              </td>
            </tr>

            {/* Token Discount Eligibility */}
            <tr className="hover:bg-slate-50/60">
              <td className="p-4 font-mono font-bold text-navy-950 uppercase text-[11px]">
                Token Eligibility
              </td>
              <td className="p-4 border-l border-slate-200 text-slate-500">
                Stand-alone flat team rate. Does not require token.
              </td>
              <td className="p-4 border-l border-slate-200 text-amber-900 font-medium">
                Associated with Bronze Token (Individual Interest Pass).
              </td>
              <td className="p-4 border-l border-slate-200 bg-slate-900/5 text-gold-800 font-bold">
                Gold Cards (80%, 70%, 60%) & Silver Cards (50%/40%) redeemable against anchor.
              </td>
            </tr>

            {/* Non-Negotiable Boundaries */}
            <tr className="hover:bg-slate-50/60">
              <td className="p-4 font-mono font-bold text-navy-950 uppercase text-[11px]">
                Governance Boundaries
              </td>
              <td className="p-4 border-l border-slate-200">
                Up to 5 people only. No improvised extra seats without corporate authorization.
              </td>
              <td className="p-4 border-l border-slate-200">
                Do not mistake ₹12,000 individual entry for daily personal hour without approved capacity.
              </td>
              <td className="p-4 border-l border-slate-200 bg-slate-900/5">
                No guaranteed financial results, VC meetings, or employment promises.
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
                Circle13 Management schedules individual session upon fit review.
              </td>
              <td className="p-4 border-l border-slate-200 bg-slate-900/5">
                Circle13 Management confirms monthly cohort availability & milestones.
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
          Source: Archzos Technologies Master Manual (19 Oct 2026) & Octopus Tank Infographic.
        </span>
        <span className="text-[11px] text-slate-500">
          Enquiries coordinated via Circle13 management desk.
        </span>
      </div>
    </div>
  );
}
