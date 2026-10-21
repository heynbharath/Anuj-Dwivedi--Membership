"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ArrowUpRight } from "lucide-react";
import { OCTOPUS_TANK_GOOGLE_FORM_URL } from "@/lib/config";

export default function MentorshipPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const sessions = [
    {
      number: "01",
      title: "DIAGNOSE",
      objective: "Map the current technical baseline.",
      details: "Audit existing code, system design, and customer assumptions. Isolate the core bottleneck.",
    },
    {
      number: "02",
      title: "PRIORITISE",
      objective: "Eliminate vanity tasks; lock milestones.",
      details: "Define high-leverage validation tests and operational sprint goals for the upcoming iteration.",
    },
    {
      number: "03",
      title: "REVIEW",
      objective: "Critique live implementation.",
      details: "Code, model evaluation, or pitch audit. Test what worked, fix failed assumptions, and recalibrate.",
    },
    {
      number: "04",
      title: "PLAN",
      objective: "Autonomous execution roadmap.",
      details: "Final system documentation, scalable roadmap, and autonomous milestones without ongoing handholding.",
    },
  ];

  return (
    <div className="bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 border border-neutral-200 rounded-full px-3 py-0.5 text-[11px] font-mono text-neutral-600 bg-neutral-50">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span>ADVISORY &amp; SPRINTS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-sans font-semibold tracking-tight text-neutral-950 leading-[1.05]">
            Engineering advisory.
            <br />
            No guesswork.
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            High-leverage technical evaluation, architecture audits, and execution milestones for builders and early-stage teams.
          </p>
        </div>

        {/* 3 Advisory Formats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl border border-neutral-200 bg-neutral-50/50 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs text-neutral-400 uppercase">Format 01</span>
              <h3 className="text-xl font-semibold text-neutral-950">Architecture Advisory</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Single high-leverage evaluation session to diagnose bottlenecks, stress-test your AI pipeline, or audit system design.
              </p>
            </div>
            <Link
              href="/contact"
              className="py-2.5 rounded-lg border border-neutral-200 text-center text-xs font-semibold text-neutral-800 hover:bg-neutral-100 transition-all"
            >
              Inquire for Advisory
            </Link>
          </div>

          <div className="p-7 rounded-2xl border-2 border-black bg-white flex flex-col justify-between space-y-6 shadow-xs">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-neutral-400 uppercase">Format 02</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-black text-white">4 Sessions</span>
              </div>
              <h3 className="text-xl font-semibold text-neutral-950">Milestone Sprint</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Four structured sessions moving from diagnosis to autonomous execution. Weekly code reviews, milestone tracking, and pitch prep.
              </p>
            </div>
            <Link
              href="/contact"
              className="py-2.5 rounded-lg bg-black text-center text-xs font-semibold text-white hover:bg-neutral-800 transition-all"
            >
              Apply for 4-Session Sprint
            </Link>
          </div>

          <div className="p-7 rounded-2xl border border-neutral-200 bg-neutral-50/50 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs text-neutral-400 uppercase">Format 03</span>
              <h3 className="text-xl font-semibold text-neutral-950">30-Day Intensive</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                An immersive month-long sprint providing continuous technical oversight, deck rehearsal, and execution discipline before launch.
              </p>
            </div>
            <Link
              href="/contact"
              className="py-2.5 rounded-lg border border-neutral-200 text-center text-xs font-semibold text-neutral-800 hover:bg-neutral-100 transition-all"
            >
              Request Cohort Spot
            </Link>
          </div>
        </div>

        {/* 4 Steps Timeline */}
        <div className="space-y-8 pt-8 border-t border-neutral-100">
          <div className="space-y-2">
            <span className="font-mono text-xs text-neutral-400 uppercase">Sprint Framework</span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-950">
              The 4-Milestone Pathway
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sessions.map((s) => (
              <div key={s.number} className="p-6 rounded-xl border border-neutral-200 bg-white space-y-2">
                <span className="font-mono text-xs text-neutral-400">{s.number}</span>
                <h3 className="text-base font-semibold text-neutral-950">{s.title}</h3>
                <p className="text-xs font-medium text-neutral-800">{s.objective}</p>
                <p className="text-xs text-neutral-500 leading-relaxed pt-1">{s.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50/70 p-8 sm:p-12 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-950">
            Have an upcoming build or pitch?
          </h2>
          <p className="text-sm text-neutral-600 max-w-lg mx-auto">
            Whether preparing for Octopus Tank 2026 or launching an autonomous AI system, step into a structured advisory engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href={OCTOPUS_TANK_GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-lg bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-all"
            >
              <span>Apply for Octopus Tank 2026</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-lg border border-neutral-200 text-neutral-800 text-xs font-medium hover:bg-neutral-50 transition-all"
            >
              <span>View Membership Tiers</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
