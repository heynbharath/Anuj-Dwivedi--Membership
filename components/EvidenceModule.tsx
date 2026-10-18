import React from "react";
import { GITHUB_PROOF_CONFIG, VERIFIED_PROJECTS } from "@/lib/config";
import { Github, ExternalLink, Code2, Layers, CheckCircle2 } from "lucide-react";
import VerificationNotice from "@/components/VerificationNotice";

export default function EvidenceModule() {
  const isRepoConnected = GITHUB_PROOF_CONFIG.isVerifiedAndActive && GITHUB_PROOF_CONFIG.metricValue !== null;

  return (
    <div className="space-y-10">
      {/* Configurable GitHub Metric Module */}
      {isRepoConnected ? (
        <div className="p-8 rounded-3xl bg-slate-50 border border-gold-500/40 text-center space-y-4 shadow-sm">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-gold-700 font-semibold font-mono">
            <Github className="w-4 h-4" />
            <span>Verified GitHub Repository Evidence</span>
          </div>
          <div className="text-5xl sm:text-6xl font-serif font-bold text-navy-950">
            {GITHUB_PROOF_CONFIG.metricValue?.toLocaleString()}
          </div>
          <p className="text-sm text-slate-600 max-w-lg mx-auto">
            {GITHUB_PROOF_CONFIG.metricDescription} ({GITHUB_PROOF_CONFIG.verifiedMetric})
          </p>
          {GITHUB_PROOF_CONFIG.repositoryUrl && (
            <a
              href={GITHUB_PROOF_CONFIG.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs text-gold-700 hover:underline pt-2 font-medium"
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
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-navy-950">
              <Github className="w-4 h-4 text-slate-700" />
              <span>Evidence Engine Status</span>
            </div>
            <p className="text-xs text-slate-600 max-w-xl">
              Configurable GitHub proof module is online. Unverified numbers remain hidden per strict accuracy protocol until the ~2,000 feedback repository is authenticated.
            </p>
          </div>
          <div className="shrink-0 flex items-center space-x-3">
            <VerificationNotice
              status="awaiting_confirmation"
              label="Repo Integration Pending"
            />
            <a
              href={`https://github.com/${GITHUB_PROOF_CONFIG.repositoryOwner}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-xs text-gold-700 hover:underline font-mono font-bold"
            >
              <span>github.com/{GITHUB_PROOF_CONFIG.repositoryOwner}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}

      {/* Verified Real Projects Grid on White Background */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-serif text-2xl font-bold text-navy-950">
              Public Repositories & Working Code
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Authentic systems built and open-sourced by Anuj Dwivedi.
            </p>
          </div>
          <VerificationNotice status="verified" label="100% Attributable Work" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {VERIFIED_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-gold-500/60 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="px-2.5 py-0.5 rounded-full bg-gold-50 text-gold-700 font-mono font-semibold border border-gold-200">
                    {proj.category}
                  </span>
                  <span className="text-slate-400 text-[10px] uppercase font-mono">
                    {proj.linkType === "live_demo" ? "Live Webapp" : "Source Code"}
                  </span>
                </div>

                <h4 className="font-serif text-lg font-bold text-navy-950 group-hover:text-gold-600 transition-colors">
                  {proj.title}
                </h4>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-slate-600 px-2 py-0.5 rounded bg-slate-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={proj.verifiedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-gold-700 font-semibold hover:text-gold-800 transition-colors"
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
