import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import VerificationNotice from "@/components/VerificationNotice";
import CardDisplay from "@/components/CardDisplay";
import InfographicOctopusArms from "@/components/InfographicOctopusArms";
import InfographicProcessFlow from "@/components/InfographicProcessFlow";
import { OCTOPUS_TANK_CONFIG, SITE_CONFIG } from "@/lib/config";
import {
  Calendar,
  Users,
  Award,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Octopus Tank 2026 | Campus Startup Pitch Initiative",
  description:
    "8 Arms. Infinite Ideas. Pitch. Compete. Launch. Dayananda Sagar University School of Engineering startup pitching event co-hosted by Anuj Dwivedi and Circle13.",
};

export default function OctopusTankPage() {
  return (
    <div className="bg-white text-navy-950 py-12 sm:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Event Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <VerificationNotice
                status="supplied_proposal"
                label="Source Event Proposal Docket"
              />
              <span className="text-[11px] font-mono text-gold-700 px-2 py-0.5 rounded bg-gold-50 border border-gold-300 font-bold">
                {OCTOPUS_TANK_CONFIG.status}
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-navy-950 leading-[1.08]">
              OCTOPUS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-amber-600 to-blue-600">
                TANK 2026
              </span>
            </h1>

            <p className="text-base sm:text-lg font-serif text-gold-700 font-bold">
              {OCTOPUS_TANK_CONFIG.tagline}
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              A premier campus startup-pitching competition proposed for <strong>{OCTOPUS_TANK_CONFIG.institution}</strong>. Combining a 2-hour pitch workshop with live multi-domain pitching in front of industry judges.
            </p>

            {/* Quick Metrics from Poster */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center text-xs">
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-0.5">
                <span className="text-slate-400 text-[10px] uppercase font-mono">Date</span>
                <div className="font-bold text-navy-950">{OCTOPUS_TANK_CONFIG.dateText}</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-0.5">
                <span className="text-slate-400 text-[10px] uppercase font-mono">Team Fee</span>
                <div className="font-bold text-gold-600">₹{OCTOPUS_TANK_CONFIG.teamFeeINR}</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-0.5">
                <span className="text-slate-400 text-[10px] uppercase font-mono">Team Size</span>
                <div className="font-bold text-navy-950">{OCTOPUS_TANK_CONFIG.teamSizeText}</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-0.5">
                <span className="text-slate-400 text-[10px] uppercase font-mono">Target</span>
                <div className="font-bold text-navy-950">{OCTOPUS_TANK_CONFIG.teamTarget} Teams</div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact?type=octopus_tank"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-7 py-3.5 rounded-xl bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950 transition-colors shadow-md"
              >
                <span>Enquire Regarding Event Participation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Official Poster Exhibit */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 p-3 shadow-xl">
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-white">
              <Image
                src="/images/octopus-tank-2026.png"
                alt="Octopus Tank 2026 Dayananda Sagar University School of Engineering Poster"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="pt-2 text-[10px] text-center text-slate-500 font-mono">
              Source Exhibit: Official Octopus Tank 2026 Concept Poster
            </div>
          </div>
        </div>

        {/* 8 Thematic Arms Infographic */}
        <section className="space-y-6 border-t border-slate-200 pt-12">
          <SectionHeader
            eyebrow="CROSS-DOMAIN INNOVATION"
            title="The 8 Innovation Arms"
            subtitle="Thematic challenges testing multidisciplinary engineering, AI pipelines, and commercial viability."
          />
          <InfographicOctopusArms />
        </section>

        {/* Co-Hosts Representation */}
        <section className="space-y-6 border-t border-slate-200 pt-12">
          <SectionHeader
            eyebrow="EVENT LEADERSHIP"
            title="Co-Hosted by Circle13 & Tempete Club"
            subtitle="Venture design, technical evaluation, and student innovation coalition."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OCTOPUS_TANK_CONFIG.coHosts.map((host, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-gold-100 border border-gold-300 flex items-center justify-center text-gold-800 font-bold mx-auto text-base font-serif">
                  {host.name[0]}
                </div>
                <h3 className="font-serif text-lg font-bold text-navy-950 pt-2">
                  {host.name}
                </h3>
                <div className="text-xs font-mono text-gold-700 font-bold">
                  {host.affiliation}
                </div>
                <p className="text-xs text-slate-500">
                  {host.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* The 10 Recognition Cards System */}
        <section className="space-y-6 border-t border-slate-200 pt-12">
          <SectionHeader
            eyebrow="MERIT AWARDS"
            title="The 10 Recognition Cards"
            subtitle="Gold (80%, 70%, 60% discounts), Silver (50%/40%), and Bronze (30%/20%) against the ₹75,000 anchor."
          />
          <CardDisplay />
        </section>

        {/* Master Plan Infographic Exhibit */}
        <section className="space-y-6 border-t border-slate-200 pt-12">
          <SectionHeader
            eyebrow="THE MASTER PLAN EXHIBIT"
            title="Teach. Judge. Reward. Convert."
            subtitle="Original blueprint for the 2-hour session, recognition cards, and Circle13 advisory route."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <h3 className="font-serif text-2xl font-bold text-navy-950">
                The 2-Hour Intensive Session Flow
              </h3>
              <ol className="list-decimal pl-5 space-y-2 text-slate-700">
                <li><strong>Enter with authority:</strong> Command the room and establish engineering depth.</li>
                <li><strong>Teach what matters:</strong> Deconstruct the gap between hobby code and viable architecture.</li>
                <li><strong>Hold the room:</strong> Demonstrate what structured mentorship unlocks.</li>
                <li><strong>Judge the pitches:</strong> Evaluate student teams with rigor and constructive critique.</li>
                <li><strong>Hand out the cards:</strong> Award the 10 earned recognition cards on stage.</li>
              </ol>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                <strong>Circle13 Management Route:</strong> &ldquo;My team manages my time. Bookings and payment collection route through Circle13 management.&rdquo;
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 p-3 shadow-xl">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-white">
                <Image
                  src="/images/anuj-dwivedi-masterplan.png"
                  alt="Anuj Dwivedi Master Plan Infographic"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="pt-2 text-[10px] text-center text-slate-500 font-mono">
                Source Exhibit: Anuj Dwivedi Master Plan Infographic
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
