import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import VerificationNotice from "@/components/VerificationNotice";
import CardDisplay from "@/components/CardDisplay";
import { OCTOPUS_TANK_CONFIG, SITE_CONFIG } from "@/lib/config";
import {
  Calendar,
  Users,
  Award,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Octopus Tank 2026 | Campus Startup Pitch Initiative",
  description:
    "8 Arms. Infinite Ideas. Pitch. Compete. Launch. Dayananda Sagar University School of Engineering startup pitching event co-hosted by Anuj Dwivedi and Circle13.",
};

export default function OctopusTankPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-20">
      {/* Event Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <VerificationNotice
              status="supplied_proposal"
              label="Source Event Proposal Docket"
            />
            <span className="text-[11px] font-mono text-gold-400 px-2 py-0.5 rounded bg-gold-500/10 border border-gold-500/30">
              {OCTOPUS_TANK_CONFIG.status}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ivory-100 tracking-tight leading-[1.08]">
            OCTOPUS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-blue-500">
              TANK 2026
            </span>
          </h1>

          <p className="text-lg sm:text-xl font-serif text-gold-400 font-bold">
            {OCTOPUS_TANK_CONFIG.tagline}
          </p>

          <p className="text-xs sm:text-sm text-silver-300 leading-relaxed font-light">
            A premier student startup-pitching competition proposed for <strong>{OCTOPUS_TANK_CONFIG.institution}</strong>. Combining a 2-hour high-impact pitch workshop with live multi-domain startup pitching in front of industry practitioners.
          </p>

          {/* Key Event Metrics from Source Poster */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center text-xs">
            <div className="p-3 rounded-lg bg-navy-950 border border-white/5 space-y-1">
              <span className="text-slate-400 text-[10px] uppercase font-mono">Date</span>
              <div className="font-bold text-ivory-100">{OCTOPUS_TANK_CONFIG.dateText}</div>
            </div>
            <div className="p-3 rounded-lg bg-navy-950 border border-white/5 space-y-1">
              <span className="text-slate-400 text-[10px] uppercase font-mono">Team Fee</span>
              <div className="font-bold text-gold-400">₹{OCTOPUS_TANK_CONFIG.teamFeeINR} / team</div>
            </div>
            <div className="p-3 rounded-lg bg-navy-950 border border-white/5 space-y-1">
              <span className="text-slate-400 text-[10px] uppercase font-mono">Team Size</span>
              <div className="font-bold text-ivory-100">{OCTOPUS_TANK_CONFIG.teamSizeText}</div>
            </div>
            <div className="p-3 rounded-lg bg-navy-950 border border-white/5 space-y-1">
              <span className="text-slate-400 text-[10px] uppercase font-mono">Target</span>
              <div className="font-bold text-ivory-100">{OCTOPUS_TANK_CONFIG.teamTarget} Teams</div>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact?type=octopus_tank"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-wider font-bold px-7 py-3.5 rounded bg-gold-500 text-navy-950 hover:bg-gold-400 transition-colors"
            >
              <span>Enquire Regarding Participation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Poster Visual Presentation */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-navy-950 p-4 shadow-2xl">
          <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden">
            <Image
              src="/images/octopus-tank-2026.png"
              alt="Octopus Tank 2026 Dayananda Sagar University School of Engineering Poster"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="pt-3 text-[11px] text-center text-slate-400">
            Source Artifact: Official Octopus Tank 2026 Event Concept Visual
          </div>
        </div>
      </div>

      {/* The 8 Thematic Arms */}
      <section className="space-y-8 border-t border-white/10 pt-16">
        <SectionHeader
          eyebrow="THEMATIC DOMAINS"
          title="The 8 Innovation Arms"
          subtitle="Cross-domain challenges designed to test multidisciplinary student engineering and commercial viability."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OCTOPUS_TANK_CONFIG.thematicArms.map((arm) => (
            <div
              key={arm.id}
              className="p-6 rounded-xl bg-navy-950 border border-white/10 hover:border-gold-500/40 transition-all space-y-3"
            >
              <div className="text-xs font-mono font-bold text-gold-500">
                ARM {arm.number}
              </div>
              <h3 className="font-serif text-lg font-bold text-ivory-100">
                {arm.title}
              </h3>
              <p className="text-xs text-gold-400 font-medium">
                {arm.subtitle}
              </p>
              <p className="text-xs text-silver-400 leading-relaxed">
                {arm.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Co-Hosts Representation */}
      <section className="space-y-8 border-t border-white/10 pt-16">
        <SectionHeader
          eyebrow="ORGANISING COALITION"
          title="Co-Hosted by Circle13 & Tempete Club"
          subtitle="Combining venture thinking, technical evaluation, and event operations."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OCTOPUS_TANK_CONFIG.coHosts.map((host, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-navy-950 border border-white/10 space-y-2 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 font-bold mx-auto text-base font-serif">
                {host.name[0]}
              </div>
              <h3 className="font-serif text-lg font-bold text-ivory-100 pt-2">
                {host.name}
              </h3>
              <div className="text-xs font-mono text-gold-400 font-semibold">
                {host.affiliation}
              </div>
              <p className="text-xs text-silver-400">
                {host.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* The Master Plan Infographic & Logic */}
      <section className="space-y-8 border-t border-white/10 pt-16">
        <SectionHeader
          eyebrow="THE MASTER PLAN"
          title="Teach. Judge. Reward. Convert."
          subtitle="Inspect the supplied Octopus Tank session and consultancy conversion blueprint."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 text-xs sm:text-sm text-silver-400 leading-relaxed">
            <h3 className="font-serif text-2xl font-bold text-ivory-100">
              The 2-Hour Intensive Session Architecture
            </h3>
            <ol className="list-decimal pl-5 space-y-2 text-silver-300">
              <li><strong>Enter with authority:</strong> Command the room and establish engineering credibility.</li>
              <li><strong>Teach what matters:</strong> Deconstruct the difference between hobby coding and viable startup architecture.</li>
              <li><strong>Hold the room, create desire:</strong> Show builders what structured execution unlocks.</li>
              <li><strong>Judge the pitches:</strong> Evaluate live student presentations with rigor and constructive critique.</li>
              <li><strong>Hand out the cards:</strong> Award the 10 earned recognition cards on stage.</li>
            </ol>
            <p className="pt-2 text-slate-400">
              <em>&ldquo;Recognition creates earned access. Management converts access into a paid commitment.&rdquo;</em>
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-navy-950 p-4 shadow-2xl">
            <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden">
              <Image
                src="/images/anuj-dwivedi-masterplan.png"
                alt="Anuj Dwivedi Master Plan Infographic"
                fill
                className="object-contain"
              />
            </div>
            <div className="pt-3 text-[11px] text-center text-slate-400">
              Source Artifact: Master Plan Infographic (Session, Cards, & Advisory Route)
            </div>
          </div>
        </div>
      </section>

      {/* The 10 Recognition Cards Display */}
      <section className="space-y-8 border-t border-white/10 pt-16">
        <SectionHeader
          eyebrow="CARD RECOGNITION SYSTEM"
          title="The 10 Earned Recognition Cards"
          subtitle="Only 3 Gold Cards. The remaining 7 cards are Silver and Bronze. Discounts apply specifically to the 30-Day Premium Mentorship anchor."
        />
        <CardDisplay />
      </section>
    </div>
  );
}
