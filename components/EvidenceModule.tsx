import React from "react";
import { GITHUB_PROOF_CONFIG, VERIFIED_PROJECTS } from "@/lib/config";
import { Github, ExternalLink, Code2, Layers, CheckCircle2, AlertCircle } from "lucide-react";
import VerificationNotice from "@/components/VerificationNotice";

export default function EvidenceModule() {
  const isRepoConnected = GITHUB_PROOF_CONFIG.isVerifiedAndActive && GITHUB_PROOF_CONFIG.metricValue !== null;

  return (
    <div className="space-y-12">
      {/* Configurable GitHub Metric Module */}
      {isRepoConnected ? (
        <div className="p-8 rounded-xl bg-navy-950 border border-gold-500/40 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-gold-400 font-semibold">
            <Github className="w-4 h-4" />
            <span>Verified GitHub Repository Evidence</span>
          </div>
          <div className="text-5xl sm:text-6xl font-serif font-bold text-ivory-100">
            {GITHUB_PROOF_CONFIG.metricValue?.toLocaleString()}
          </div>
          <p className="text-sm text-silver-300 max-w-lg mx-auto">
            {GITHUB_PROOF_CONFIG.metricDescription} ({GITHUB_PROOF_CONFIG.verifiedMetric})
          </p>
          {GITHUB_PROOF_CONFIG.repositoryUrl && (
            <a
              href={GITHUB_PROOF_CONFIG.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs text-gold-400 hover:underline pt-2"
            >
              <span>Inspect Source Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          <div className="text-[11px] text-slate-500">
            Last verified: {GITHUB_PROOF_CONFIG.lastUpdatedDate} | Source: {GITHUB_PROOF_CONFIG.dataSource}
          </div>
        </div>
      ) : (
        <div className="p-6 rounded-xl bg-navy-900/60 border border-white/5 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <Github className="w-4 h-4 text-silver-400" />
              <span>GitHub Evidence Module Status</span>
            </div>
            <VerificationNotice
              status="awaiting_confirmation"
              label="Repository Integration Pending"
            />
          </div>
          <p className="text-xs text-silver-400 leading-relaxed">
            The platform architecture is prepared to connect a verified repository (tracking feedback records or submission entries) once authenticated by Anuj. Per our strict accuracy standards, unverified metrics and assumed statistics are never rendered as verified counts.
          </p>
          <div className="pt-2 text-xs flex items-center space-x-2 text-slate-400">
            <span>Primary Profile:</span>
            <a
              href={`https://github.com/${GITHUB_PROOF_CONFIG.repositoryOwner}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:underline inline-flex items-center space-x-1"
            >
              <span>github.com/{GITHUB_PROOF_CONFIG.repositoryOwner}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}

      {/* Verified Real Projects Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-serif text-2xl font-bold text-ivory-100">
              Selected Working Code & Public Systems
            </h3>
            <p className="text-xs text-silver-400 mt-1">
              Every project below is an authentic repository or active deployment built and documented by Anuj.
            </p>
          </div>
          <VerificationNotice status="verified" label="100% Attributable Work" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {VERIFIED_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="p-5 rounded-lg bg-navy-950/80 border border-white/10 hover:border-gold-500/30 transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-navy-800 text-gold-400 font-mono">
                    {proj.category}
                  </span>
                  <span className="text-slate-500 text-[10px] uppercase font-mono">
                    {proj.linkType === "live_demo" ? "Live Webapp" : "Source Code"}
                  </span>
                </div>

                <h4 className="font-serif text-base font-bold text-ivory-100 group-hover:text-gold-400 transition-colors">
                  {proj.title}
                </h4>

                <p className="text-xs text-silver-400 line-clamp-3 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-slate-400 px-1.5 py-0.5 rounded bg-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.verifiedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-gold-400 font-medium hover:text-gold-300 transition-colors"
                >
                  <span>{proj.linkType === "live_demo" ? "Launch Application" : "View Code on GitHub"}</span>
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
