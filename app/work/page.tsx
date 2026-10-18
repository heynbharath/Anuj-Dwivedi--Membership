"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import VerificationNotice from "@/components/VerificationNotice";
import EvidenceModule from "@/components/EvidenceModule";
import { VERIFIED_PROJECTS } from "@/lib/config";
import { ExternalLink, Github, Filter, Code2, Sparkles } from "lucide-react";

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "AI & ML", "Web & Cloud", "Automation", "Philosophy & Media"];

  const filteredProjects =
    selectedCategory === "All"
      ? VERIFIED_PROJECTS
      : VERIFIED_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-white text-navy-950 py-12 sm:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <VerificationNotice status="verified" label="Authentic Code & Systems" />
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-navy-950 leading-[1.08]">
            Selected Work & Projects.
          </h1>
          <p className="mt-3 text-base text-slate-600 font-light max-w-xl">
            Every project listed here is backed by publicly accessible code, active web deployments, or documented technical research.
          </p>
        </div>

        {/* GitHub Proof Engine Section */}
        <EvidenceModule />

        {/* Category Filters */}
        <div className="border-t border-slate-200 pt-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-xs uppercase font-mono text-gold-700 font-bold">
              <Filter className="w-4 h-4" />
              <span>Filter Systems by Domain</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-navy-950 text-white font-bold shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:text-navy-950 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-gold-500/60 transition-all flex flex-col justify-between group space-y-4 shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="px-2.5 py-0.5 rounded-full bg-gold-50 text-gold-700 font-mono font-bold border border-gold-200">
                      {proj.category}
                    </span>
                    <span className="text-[10px] text-slate-400 uppercase font-mono">
                      {proj.linkType === "live_demo" ? "Live Webapp" : "GitHub Repo"}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-navy-950 group-hover:text-gold-700 transition-colors">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed min-h-[44px]">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] text-slate-600 px-2 py-0.5 rounded bg-white border border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={proj.verifiedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs text-gold-700 hover:text-gold-900 font-bold transition-colors"
                  >
                    <span>
                      {proj.linkType === "live_demo" ? "Open Live Application" : "Inspect GitHub Code"}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
