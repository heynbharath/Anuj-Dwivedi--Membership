"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/lib/config";
import { BookOpen, Scale, Award, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function InfographicPillars() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: "teach",
      step: "01",
      icon: BookOpen,
      label: "TEACH",
      tagline: "Build Core Foundations",
      summary: "Strip away superficial buzzwords. Focus on system mechanics, data pipelines, and architectural tradeoffs.",
      metric: "90% Reduction in Theoretical Fluff",
      highlight: "Engineering intuition before implementation.",
      color: "from-blue-500/20 to-indigo-500/5",
      border: "border-blue-500/30",
    },
    {
      id: "judge",
      step: "02",
      icon: Scale,
      label: "JUDGE",
      tagline: "Critical Problem Stress-Test",
      summary: "Rigorous evaluation of product assumptions, code durability, unit economics, and competitive defensibility.",
      metric: "Objective Stage Evaluation",
      highlight: "Expose hidden fatal assumptions in minutes.",
      color: "from-amber-500/20 to-orange-500/5",
      border: "border-amber-500/30",
    },
    {
      id: "reward",
      step: "03",
      icon: Award,
      label: "REWARD",
      tagline: "Recognise Earned Merit",
      summary: "Award 10 physical Gold, Silver & Bronze recognition cards to high-grit student teams at Octopus Tank.",
      metric: "10 Merit Cards per Cohort",
      highlight: "Merit creates earned access.",
      color: "from-yellow-500/20 to-amber-500/5",
      border: "border-gold-500/40",
    },
    {
      id: "convert",
      step: "04",
      icon: ArrowRight,
      label: "CONVERT",
      tagline: "Disciplined Execution Lock",
      summary: "Transition evaluated potential into 4-session or 30-day structured execution programmes via Circle13 management.",
      metric: "Circle13 Managed Onboarding",
      highlight: "Convert recognition into measurable progress.",
      color: "from-emerald-500/20 to-teal-500/5",
      border: "border-emerald-500/30",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Visual Step Connectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pillars.map((p, idx) => {
          const Icon = p.icon;
          const isSelected = activeTab === idx;

          return (
            <div
              key={p.id}
              onClick={() => setActiveTab(idx)}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 relative border ${
                isSelected
                  ? "bg-navy-950 text-white border-gold-500 shadow-xl scale-[1.02]"
                  : "bg-white text-navy-950 border-slate-200/80 hover:border-gold-500/40 hover:shadow-md"
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-current/10">
                <span className="font-mono text-xs uppercase tracking-widest font-bold text-gold-600">
                  STEP {p.step}
                </span>
                <Icon className={`w-5 h-5 ${isSelected ? "text-gold-400" : "text-gold-600"}`} />
              </div>

              <h3 className="font-serif text-2xl font-bold mt-3">
                {p.label}
              </h3>
              <p className={`text-xs font-semibold mt-1 ${isSelected ? "text-gold-300" : "text-slate-600"}`}>
                {p.tagline}
              </p>

              <div className="mt-4 pt-3 border-t border-current/10 text-[11px] font-mono">
                {p.metric}
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Pillar Detailed Infographic Spotlight */}
      <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center space-x-2 text-xs font-mono uppercase text-gold-600 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pillar 0{activeTab + 1}: {pillars[activeTab].label} Architecture</span>
          </div>
          <h4 className="font-serif text-2xl font-bold text-navy-950">
            {pillars[activeTab].highlight}
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {pillars[activeTab].summary}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm shrink-0 min-w-[240px] text-center space-y-1.5">
          <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-bold">
            Key Execution Anchor
          </span>
          <div className="font-serif text-xl font-bold text-gold-600">
            {pillars[activeTab].metric}
          </div>
          <p className="text-[11px] text-slate-500">
            {activeTab === 2 ? "Decoupled from paid services" : "Systematic review cadence"}
          </p>
        </div>
      </div>
    </div>
  );
}
