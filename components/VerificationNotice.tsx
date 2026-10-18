import React from "react";
import { CheckCircle2, AlertCircle, Info } from "lucide-react";

interface VerificationNoticeProps {
  status: "verified" | "supplied_proposal" | "proposed_copy" | "awaiting_confirmation";
  label?: string;
  className?: string;
}

export default function VerificationNotice({
  status,
  label,
  className = "",
}: VerificationNoticeProps) {
  switch (status) {
    case "verified":
      return (
        <span
          className={`inline-flex items-center space-x-1.5 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-950/70 text-emerald-400 border border-emerald-500/30 ${className}`}
        >
          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
          <span>{label || "Verified Work"}</span>
        </span>
      );
    case "supplied_proposal":
      return (
        <span
          className={`inline-flex items-center space-x-1.5 px-2 py-0.5 rounded text-[11px] font-medium bg-amber-950/60 text-gold-400 border border-gold-500/30 ${className}`}
        >
          <Info className="w-3 h-3 text-gold-400" />
          <span>{label || "Source Proposal Details"}</span>
        </span>
      );
    case "proposed_copy":
      return (
        <span
          className={`inline-flex items-center space-x-1.5 px-2 py-0.5 rounded text-[11px] font-medium bg-slate-900/80 text-silver-400 border border-silver-400/20 ${className}`}
        >
          <Info className="w-3 h-3 text-silver-400" />
          <span>{label || "Proposed Concept"}</span>
        </span>
      );
    case "awaiting_confirmation":
    default:
      return (
        <span
          className={`inline-flex items-center space-x-1.5 px-2 py-0.5 rounded text-[11px] font-medium bg-navy-800 text-silver-300 border border-white/10 ${className}`}
        >
          <AlertCircle className="w-3 h-3 text-gold-400" />
          <span>{label || "Pending Final Client Confirmation"}</span>
        </span>
      );
  }
}
