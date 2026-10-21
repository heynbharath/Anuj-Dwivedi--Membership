import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { OCTOPUS_TANK_GOOGLE_FORM_URL } from "@/lib/config";

export const metadata = {
  title: "Manifesto | Anuj Dwivedi",
  description: "Think clearly. Build intentionally. Less noise, pure execution.",
};

export default function AboutPage() {
  return (
    <div className="bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white py-14 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Eyebrow */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 border border-neutral-200 rounded-full px-3 py-0.5 text-[11px] font-mono text-neutral-600 bg-neutral-50">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span>MANIFESTO &amp; ETHOS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-sans font-semibold tracking-tight text-neutral-950 leading-[1.05]">
            Think clearly.
            <br />
            Build intentionally.
          </h1>
        </div>

        {/* Core Principles */}
        <div className="space-y-8 text-neutral-600 text-base sm:text-lg leading-relaxed font-normal">
          <p className="text-xl sm:text-2xl text-neutral-950 font-medium leading-snug">
            Knowing how to build is table stakes. The scarce discipline is knowing what to build, what to discard, and how to execute without noise.
          </p>

          <p>
            Most teams waste months solving imaginary problems with overly complex stacks. We focus on structural clarity: rigorous problem diagnosis, defensible technical architecture, and tight feedback loops that convert raw ambition into operational reality.
          </p>

          <p>
            Through initiatives like <strong className="text-black font-semibold">Octopus Tank 2026</strong> and our private <strong className="text-black font-semibold">Membership</strong> cohorts, we work alongside engineers, student founders, and builders who care about uncompromised craft.
          </p>
        </div>

        {/* 4 Pillars Monospace Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-100">
          <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50/50 space-y-2">
            <span className="font-mono text-xs text-neutral-400">01 / TEACH</span>
            <h3 className="text-base font-semibold text-neutral-950">Ground Up Fundamentals</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Strip away buzzwords. Focus on architectural tradeoffs, real latency constraints, and operational mechanics.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50/50 space-y-2">
            <span className="font-mono text-xs text-neutral-400">02 / JUDGE</span>
            <h3 className="text-base font-semibold text-neutral-950">Stress-Test Assumptions</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Evaluate defensibility, technical viability, and market logic before burning weeks of blind development.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50/50 space-y-2">
            <span className="font-mono text-xs text-neutral-400">03 / REWARD</span>
            <h3 className="text-base font-semibold text-neutral-950">Earned Recognition</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Back builders who demonstrate discipline and potential through prizes, capital, and real mentorship.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50/50 space-y-2">
            <span className="font-mono text-xs text-neutral-400">04 / CONVERT</span>
            <h3 className="text-base font-semibold text-neutral-950">Relentless Momentum</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Turn raw ambition into launch-ready software, accountable milestones, and measurable customer traction.
            </p>
          </div>
        </div>

        {/* Pathways Out */}
        <div className="pt-8 border-t border-neutral-200 flex flex-wrap items-center gap-4">
          <a
            href={OCTOPUS_TANK_GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-all shadow-xs"
          >
            <span>Apply to Pitch at Octopus Tank</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <Link
            href="/membership"
            className="inline-flex items-center gap-2 h-11 px-5 rounded-lg border border-neutral-200 text-neutral-800 text-xs font-medium hover:bg-neutral-50 transition-all"
          >
            <span>Explore Membership Tiers</span>
            <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
          </Link>
        </div>
      </div>
    </div>
  );
}
