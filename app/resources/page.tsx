"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import VerificationNotice from "@/components/VerificationNotice";
import { EDITORIAL_ARTICLES } from "@/lib/config";
import {
  BookOpen,
  CheckSquare,
  FileText,
  Lightbulb,
  ArrowRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState<"checklists" | "essays">("checklists");
  const [pitchChecklist, setPitchChecklist] = useState<{ [key: string]: boolean }>({
    problem: false,
    alternative: false,
    metric: false,
    architecture: false,
    unitEcon: false,
    ask: false,
  });

  const toggleCheck = (key: string) => {
    setPitchChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white text-navy-950 py-12 sm:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-2">
          <VerificationNotice
            status="proposed_copy"
            label="Practical Frameworks"
          />
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08]">
            Resources & Frameworks.
          </h1>
          <p className="text-base text-slate-600 font-light">
            Interactive checklists and open architectural worksheets designed to help builders make clearer decisions.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-slate-200 space-x-6 text-xs uppercase font-mono font-bold tracking-wider">
          <button
            onClick={() => setActiveTab("checklists")}
            className={`pb-3 transition-colors flex items-center space-x-2 ${
              activeTab === "checklists"
                ? "text-gold-700 border-b-2 border-gold-600"
                : "text-slate-500 hover:text-navy-950"
            }`}
          >
            <CheckSquare className="w-4 h-4" />
            <span>Interactive Checklists</span>
          </button>
          <button
            onClick={() => setActiveTab("essays")}
            className={`pb-3 transition-colors flex items-center space-x-2 ${
              activeTab === "essays"
                ? "text-gold-700 border-b-2 border-gold-600"
                : "text-slate-500 hover:text-navy-950"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Editorial Essays</span>
          </button>
        </div>

        {/* TAB 1: INTERACTIVE CHECKLISTS & WORKSHEETS (LEAST TEXT, HIGH INFOGRAPHICS) */}
        {activeTab === "checklists" && (
          <div className="space-y-10 animate-fadeIn">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold-700 font-bold">
                  WORKSHEET 01
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
                  The Technical Startup Pitch Checklist
                </h2>
                <p className="text-xs text-slate-500">
                  Click to verify each question before presenting to investors or Octopus Tank judges.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    key: "problem",
                    title: "1. Problem Stated Without Tech Jargon",
                    desc: "Can you state the customer pain in 1 sentence without mentioning AI, LLMs, or algorithms?",
                  },
                  {
                    key: "alternative",
                    title: "2. Current Workaround Identified",
                    desc: "What exact manual tool or spreadsheet are customers currently using instead?",
                  },
                  {
                    key: "metric",
                    title: "3. Measurable Validation Point",
                    desc: "Do you have evidence from at least 5 target users proving the problem exists?",
                  },
                  {
                    key: "architecture",
                    title: "4. Architecture Defensibility",
                    desc: "If an incumbent wraps the same model tomorrow, what is your unfair advantage?",
                  },
                  {
                    key: "unitEcon",
                    title: "5. Inference & Compute Realism",
                    desc: "Do you understand token costs, GPU overhead, and API rate constraints as volume scales?",
                  },
                  {
                    key: "ask",
                    title: "6. Specific Milestone Ask",
                    desc: "Are you asking for specific pilot intros or review, rather than vague support?",
                  },
                ].map((item) => (
                  <div
                    key={item.key}
                    onClick={() => toggleCheck(item.key)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start space-x-3 ${
                      pitchChecklist[item.key]
                        ? "bg-gold-50/80 border-gold-400 shadow-sm"
                        : "bg-white border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md border mt-0.5 flex items-center justify-center shrink-0 ${
                        pitchChecklist[item.key]
                          ? "bg-gold-500 border-gold-500 text-navy-950 font-bold text-xs"
                          : "border-slate-300"
                      }`}
                    >
                      {pitchChecklist[item.key] && "✓"}
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-bold text-navy-950">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-xs font-medium text-slate-600">
                Score:{" "}
                <strong className="text-gold-700 font-bold font-mono">
                  {Object.values(pitchChecklist).filter(Boolean).length} of 6
                </strong>{" "}
                verified. Consider personal consultancy if you scored below 4.
              </div>
            </div>

            {/* AI Framework */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-gold-700 font-bold">
                FRAMEWORK 02
              </span>
              <h3 className="font-serif text-2xl font-bold text-navy-950">
                3 Questions Before Adopting an AI Pipeline
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs text-slate-600">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-sm">
                  <strong className="text-navy-950 block">1. Can a Heuristic Do It?</strong>
                  If regex, SQL, or rules achieve 85% accuracy, do not add an expensive non-deterministic LLM.
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-sm">
                  <strong className="text-navy-950 block">2. How Will You Catch Errors?</strong>
                  Always build schema validation and deterministic assertions around generative outputs.
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1 shadow-sm">
                  <strong className="text-navy-950 block">3. What Is The Failure Mode?</strong>
                  When the model hallucinates, does the system degrade gracefully or trigger silent data corruption?
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ESSAYS */}
        {activeTab === "essays" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
            {EDITORIAL_ARTICLES.map((art) => (
              <div
                key={art.slug}
                className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-gold-500/50 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-gold-700 font-bold uppercase">
                      {art.category}
                    </span>
                    <span className="text-slate-400">{art.readingTime}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-navy-950 leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 text-[10px] text-slate-400 font-mono">
                  {art.publishedDate}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
