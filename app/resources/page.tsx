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
  const [activeTab, setActiveTab] = useState<"essays" | "checklists">("essays");
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <VerificationNotice
          status="proposed_copy"
          label="Editorial Perspectives & Frameworks"
        />
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ivory-100 tracking-tight leading-[1.1]">
          Resources & Frameworks.
        </h1>
        <p className="text-base sm:text-lg text-silver-300 font-light leading-relaxed">
          Open frameworks, editorial perspectives on technical judgment, and interactive checklists designed to help builders make clearer decisions.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/10 space-x-6 text-sm">
        <button
          onClick={() => setActiveTab("essays")}
          className={`pb-3 font-semibold transition-colors flex items-center space-x-2 ${
            activeTab === "essays"
              ? "text-gold-400 border-b-2 border-gold-500"
              : "text-silver-400 hover:text-ivory-100"
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Editorial Essays</span>
        </button>
        <button
          onClick={() => setActiveTab("checklists")}
          className={`pb-3 font-semibold transition-colors flex items-center space-x-2 ${
            activeTab === "checklists"
              ? "text-gold-400 border-b-2 border-gold-500"
              : "text-silver-400 hover:text-ivory-100"
          }`}
        >
          <CheckSquare className="w-4 h-4" />
          <span>Interactive Checklists & Worksheets</span>
        </button>
      </div>

      {/* TAB 1: ESSAYS */}
      {activeTab === "essays" && (
        <div className="space-y-12 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EDITORIAL_ARTICLES.map((art) => (
              <div
                key={art.slug}
                className="p-8 rounded-2xl bg-navy-950 border border-white/10 hover:border-gold-500/40 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-gold-500 uppercase tracking-wider font-bold">
                      {art.category}
                    </span>
                    <span className="text-slate-500">{art.readingTime}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-ivory-100 leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-silver-400 leading-relaxed font-light">
                    {art.excerpt}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/5">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold">
                      Core Principles:
                    </span>
                    <ul className="space-y-1.5 text-xs text-silver-300">
                      {art.takeaways.map((t, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-gold-400 font-bold">•</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 text-[11px] text-slate-500">
                  {art.publishedDate}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: INTERACTIVE CHECKLISTS & WORKSHEETS */}
      {activeTab === "checklists" && (
        <div className="space-y-12 animate-fadeIn">
          {/* Pitch Preparation Checklist */}
          <div className="p-8 rounded-2xl bg-navy-950 border border-gold-500/30 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-gold-500 font-bold">
                PRACTICAL WORKSHEET 01
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-100">
                The Technical Startup Pitch Checklist
              </h2>
              <p className="text-xs sm:text-sm text-silver-400 leading-relaxed">
                Before presenting to investors or Octopus Tank judges, ensure each question below has a clear, defensible answer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  key: "problem",
                  title: "1. Problem Stated Without Tech Jargon",
                  desc: "Can you describe the friction in plain English without mentioning AI, LLMs, or algorithms in the first sentence?",
                },
                {
                  key: "alternative",
                  title: "2. The Current Workaround Identified",
                  desc: "What exact spreadsheet, manual task, or alternative tool are users utilizing right now to solve this?",
                },
                {
                  key: "metric",
                  title: "3. Measurable Validation Point",
                  desc: "Do you have evidence from at least 5 target users or benchmark datasets proving the pain exists?",
                },
                {
                  key: "architecture",
                  title: "4. Architecture Defensibility",
                  desc: "If an incumbent copies your exact model or API wrapper tomorrow, what is your unfair technical advantage?",
                },
                {
                  key: "unitEcon",
                  title: "5. Inference & Compute Realism",
                  desc: "Do you understand token costs, GPU inference overhead, or API rate constraints as query volume scales?",
                },
                {
                  key: "ask",
                  title: "6. Specific Milestone Ask",
                  desc: "Are you asking for specific pilot introductions or technical review, rather than vague support?",
                },
              ].map((item) => (
                <div
                  key={item.key}
                  onClick={() => toggleCheck(item.key)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start space-x-3 ${
                    pitchChecklist[item.key]
                      ? "bg-gold-500/10 border-gold-500/50"
                      : "bg-navy-900 border-white/5 hover:border-white/20"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded border mt-0.5 flex items-center justify-center shrink-0 ${
                      pitchChecklist[item.key]
                        ? "bg-gold-500 border-gold-500 text-navy-950 font-bold"
                        : "border-slate-500"
                    }`}
                  >
                    {pitchChecklist[item.key] && "✓"}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-semibold text-ivory-100">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-silver-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-xs text-silver-400">
              Score:{" "}
              <strong className="text-gold-400">
                {Object.values(pitchChecklist).filter(Boolean).length} of 6
              </strong>{" "}
              elements verified. If you scored under 4, consider exploring personal consultancy or 1:1 mentorship before presenting.
            </div>
          </div>

          {/* AI Project Planning Framework */}
          <div className="p-8 rounded-2xl bg-navy-950 border border-white/10 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-500 font-bold">
              FRAMEWORK 02
            </span>
            <h3 className="font-serif text-2xl font-bold text-ivory-100">
              3 Questions Before Adopting an AI Pipeline
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-xs text-silver-400 leading-relaxed">
              <div className="space-y-2 p-4 rounded-lg bg-navy-900">
                <strong className="text-ivory-100 block">Q1: Can a Deterministic Heuristic Do It?</strong>
                If a regular expression, SQL query, or simple decision tree can achieve 85% accuracy, do not introduce an expensive non-deterministic LLM pipeline.
              </div>
              <div className="space-y-2 p-4 rounded-lg bg-navy-900">
                <strong className="text-ivory-100 block">Q2: How Will You Detect Hallucinations?</strong>
                Every generative architecture must include verification bounds: schema validation, grounded citations, or deterministic evaluation assertions.
              </div>
              <div className="space-y-2 p-4 rounded-lg bg-navy-900">
                <strong className="text-ivory-100 block">Q3: What Is The Failure Mode?</strong>
                When the model produces erroneous output, does the application degrade gracefully, or does it trigger silent data corruption?
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
