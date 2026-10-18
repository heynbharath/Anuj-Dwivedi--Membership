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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
      {/* Header */}
      <div>
        <div className="flex items-center space-x-2 mb-3">
          <VerificationNotice status="verified" label="Authentic Code & Systems" />
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ivory-100 tracking-tight">
          Selected Work & Projects.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-silver-400 font-light max-w-2xl leading-relaxed">
          Every project listed here is backed by publicly accessible code, active web deployments, or documented technical research. Click through to inspect the source.
        </p>
      </div>

      {/* GitHub Proof Engine Section */}
      <EvidenceModule />

      {/* Interactive Category Filter */}
      <div className="border-t border-white/10 pt-12 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs uppercase font-mono text-gold-400 tracking-wider">
            <Filter className="w-4 h-4" />
            <span>Filter Systems by Domain</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-full transition-all ${
                  selectedCategory === cat
                    ? "bg-gold-500 text-navy-950 font-bold shadow-md shadow-gold-500/10"
                    : "bg-navy-900 text-silver-400 hover:text-ivory-100 border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Filtered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="p-6 rounded-xl bg-navy-950 border border-white/10 hover:border-gold-500/40 transition-all flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-gold-500/10 text-gold-400 font-mono border border-gold-500/20">
                    {proj.category}
                  </span>
                  <span className="text-[10px] text-slate-500 uppercase font-mono">
                    {proj.linkType === "live_demo" ? "Live Interactive" : "Public Repo"}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-ivory-100 group-hover:text-gold-400 transition-colors">
                  {proj.title}
                </h3>

                <p className="text-xs text-silver-400 leading-relaxed min-h-[48px]">
                  {proj.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] text-slate-400 px-2 py-0.5 rounded bg-navy-900 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.verifiedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-gold-400 hover:text-gold-300 font-semibold transition-colors"
                >
                  <span>
                    {proj.linkType === "live_demo" ? "Open Live Demo" : "Inspect GitHub Repository"}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
