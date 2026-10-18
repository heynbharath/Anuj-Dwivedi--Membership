import React from "react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import VerificationNotice from "@/components/VerificationNotice";
import { SERVICES_CATALOGUE, SITE_CONFIG } from "@/lib/config";
import { formatINR } from "@/lib/utils";
import {
  Check,
  X as CloseIcon,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Advisory & Services | Anuj Dwivedi",
  description:
    "Explore signature personal consultancy, structured 4-session mentorship, 30-day intensive programmes, and institutional engagements.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white text-navy-950 py-12 sm:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="max-w-3xl">
          <VerificationNotice
            status="supplied_proposal"
            label="Advisory Architecture & Scope"
            className="mb-3"
          />
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08]">
            Advisory & Consultancy.
          </h1>
          <p className="mt-3 text-base text-slate-600 font-light">
            Clear scopes, transparent reference pricing, and structured expectations.
          </p>
        </div>

        {/* Visual Comparison Infographic Bar */}
        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-2xl bg-white border border-slate-200/80 space-y-1 shadow-sm">
            <span className="text-[10px] uppercase font-mono text-gold-700 font-bold">Offer 01</span>
            <div className="font-serif font-bold text-base text-navy-950">Personal Consultancy</div>
            <p className="text-xs text-slate-500">Single high-leverage evaluation session</p>
            <div className="font-mono text-sm font-bold text-navy-950 pt-2">₹40,000</div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-gold-300 space-y-1 shadow-sm">
            <span className="text-[10px] uppercase font-mono text-gold-700 font-bold">Offer 02</span>
            <div className="font-serif font-bold text-base text-navy-950">1:1 Mentorship (4 Sessions)</div>
            <p className="text-xs text-slate-500">Diagnose, Prioritise, Review & Plan</p>
            <div className="font-mono text-sm font-bold text-navy-950 pt-2">₹40,000</div>
          </div>
          <div className="p-4 rounded-2xl bg-navy-950 text-white border border-gold-500 space-y-1 shadow-md">
            <span className="text-[10px] uppercase font-mono text-gold-400 font-bold">Offer 03 (Anchor)</span>
            <div className="font-serif font-bold text-base text-white">30-Day Premium Mentorship</div>
            <p className="text-xs text-slate-300">Intensive month of execution accountability</p>
            <div className="font-mono text-sm font-bold text-gold-400 pt-2">₹75,000 (Card Eligible)</div>
          </div>
        </div>

        {/* Detailed Service Cards */}
        <div className="space-y-10">
          {SERVICES_CATALOGUE.map((service) => {
            const isAnchor = service.id === "thirty-day-premium-mentorship";

            return (
              <div
                key={service.id}
                id={service.slug}
                className={`rounded-3xl p-8 sm:p-10 border transition-all scroll-mt-28 ${
                  isAnchor
                    ? "bg-navy-950 text-white border-gold-500 shadow-xl"
                    : "bg-white text-navy-950 border-slate-200 shadow-sm"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-current/10">
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center space-x-3">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-gold-600 font-bold">
                        {service.eyebrow}
                      </span>
                      {service.badge && (
                        <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider ${
                          isAnchor ? "bg-gold-500 text-navy-950" : "bg-gold-100 text-gold-900 border border-gold-300"
                        }`}>
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-3xl font-bold">
                      {service.title}
                    </h3>
                    <p className={`text-xs sm:text-sm ${isAnchor ? "text-slate-300" : "text-slate-600"}`}>
                      {service.headline}
                    </p>
                  </div>

                  {/* Pricing Chip */}
                  <div className={`p-4 rounded-2xl border shrink-0 text-left lg:text-right ${
                    isAnchor ? "bg-black/40 border-white/10" : "bg-slate-50 border-slate-200"
                  }`}>
                    <div className="text-[10px] uppercase font-mono text-slate-400">
                      Reference Fee
                    </div>
                    <div className="font-serif text-3xl font-bold mt-0.5">
                      {service.referencePriceINR
                        ? formatINR(service.referencePriceINR)
                        : "Custom RFP"}
                    </div>
                    <p className="text-[10px] text-slate-400 max-w-xs mt-1">
                      {service.priceNote}
                    </p>
                  </div>
                </div>

                {/* Scope Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-b border-current/10 text-xs">
                  <div className="space-y-2">
                    <h4 className="font-bold uppercase tracking-wider text-gold-600">
                      Audience & Problem
                    </h4>
                    <p className={isAnchor ? "text-slate-300" : "text-slate-600"}>
                      {service.problem}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-bold uppercase tracking-wider text-emerald-600">
                      Included Scope
                    </h4>
                    <ul className="space-y-1.5">
                      {service.included.map((inc, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <Check className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
                          <span className={isAnchor ? "text-slate-300" : "text-slate-600"}>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-bold uppercase tracking-wider text-slate-400">
                      Execution Logistics
                    </h4>
                    <div className="space-y-1">
                      <div><strong className={isAnchor ? "text-white" : "text-navy-950"}>Duration:</strong> {service.duration}</div>
                      <div><strong className={isAnchor ? "text-white" : "text-navy-950"}>Format:</strong> {service.deliveryFormat}</div>
                      <div><strong className={isAnchor ? "text-white" : "text-navy-950"}>Intake:</strong> {service.bookingRequirement}</div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-slate-400">
                    Coordinated via {SITE_CONFIG.management.entity}
                  </span>
                  <Link
                    href={`/book?service=${service.id}`}
                    className={`inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-7 py-3 rounded-xl transition-all ${
                      isAnchor
                        ? "bg-gold-500 text-navy-950 hover:bg-gold-400"
                        : "bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950"
                    }`}
                  >
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
