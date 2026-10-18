import React from "react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import VerificationNotice from "@/components/VerificationNotice";
import { SERVICES_CATALOGUE } from "@/lib/config";
import { formatINR } from "@/lib/utils";
import {
  Check,
  X as CloseIcon,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

export const metadata = {
  title: "Advisory & Services | Anuj Dwivedi",
  description:
    "Explore signature personal consultancy, structured 4-session mentorship, 30-day intensive programmes, and institutional engagements.",
};

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-20">
      {/* Header */}
      <div className="max-w-3xl">
        <VerificationNotice
          status="supplied_proposal"
          label="Advisory Structure & Reference Terms"
          className="mb-3"
        />
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ivory-100 tracking-tight">
          Advisory & Consultancy.
        </h1>
        <p className="mt-4 text-base sm:text-lg text-silver-400 font-light leading-relaxed">
          Structured engagements designed to solve architectural bottlenecks, evaluate startup pitch defensibility, and instill disciplined execution.
        </p>
      </div>

      {/* Loss Aversion & Provocative Questions */}
      <div className="p-8 rounded-2xl bg-navy-900/50 border border-gold-500/20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <span className="text-xs uppercase font-mono tracking-widest text-gold-500">
            THE REAL COST OF UNVETTED EXECUTION
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ivory-100 leading-snug">
            Before investing another month in code, verify the premise.
          </h2>
          <p className="text-xs sm:text-sm text-silver-400 leading-relaxed">
            How much time and capital have you spent learning new frameworks or rewriting features without determining whether your core assumption is sound?
          </p>
        </div>
        <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-3 text-xs text-silver-300">
          <p className="flex items-start space-x-2">
            <span className="text-gold-400 font-bold">•</span>
            <span>A single unexamined architectural flaw can require weeks of rewriting later.</span>
          </p>
          <p className="flex items-start space-x-2">
            <span className="text-gold-400 font-bold">•</span>
            <span>A convoluted pitch deck obscures technical capability in front of judges or partners.</span>
          </p>
          <p className="flex items-start space-x-2">
            <span className="text-gold-400 font-bold">•</span>
            <span>Objective evaluation early in the sprint prevents months of directionless effort.</span>
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="space-y-12">
        {SERVICES_CATALOGUE.map((service, index) => {
          const isAnchor = service.id === "thirty-day-premium-mentorship";

          return (
            <div
              key={service.id}
              id={service.slug}
              className={`rounded-2xl p-8 sm:p-12 border transition-all scroll-mt-28 ${
                isAnchor
                  ? "bg-gradient-to-br from-navy-900 via-navy-950 to-obsidian border-gold-500/80 shadow-2xl shadow-gold-500/10"
                  : "bg-navy-950 border-white/10"
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 pb-8 border-b border-white/10">
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono uppercase tracking-widest text-gold-500 font-bold">
                      {service.eyebrow}
                    </span>
                    {service.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider bg-gold-500 text-navy-950">
                        {service.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-ivory-100">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-silver-300 font-light leading-relaxed">
                    {service.headline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="lg:text-right shrink-0 p-5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <div className="text-xs uppercase font-mono tracking-wider text-slate-400">
                    Reference Pricing
                  </div>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-ivory-100">
                    {service.referencePriceINR
                      ? formatINR(service.referencePriceINR)
                      : "Custom Quote"}
                  </div>
                  <p className="text-[11px] text-slate-400 max-w-xs leading-snug">
                    {service.priceNote}
                  </p>
                </div>
              </div>

              {/* Scope Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 border-b border-white/10">
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-ivory-100">
                    The Problem It Addresses
                  </h4>
                  <p className="text-xs text-silver-400 leading-relaxed">
                    {service.problem}
                  </p>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-ivory-100 pt-2">
                    Ideal Audience
                  </h4>
                  <p className="text-xs text-silver-400 leading-relaxed">
                    {service.audience}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    What Is Included
                  </h4>
                  <ul className="space-y-2">
                    {service.included.map((inc, i) => (
                      <li key={i} className="flex items-start space-x-2 text-xs text-silver-400">
                        <Check className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  {service.excluded && (
                    <>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        What Is Excluded
                      </h4>
                      <ul className="space-y-2">
                        {service.excluded.map((exc, i) => (
                          <li key={i} className="flex items-start space-x-2 text-xs text-slate-400">
                            <CloseIcon className="w-3.5 h-3.5 text-rose-500/70 shrink-0 mt-0.5" />
                            <span>{exc}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  <div className="pt-2 text-xs text-slate-400 space-y-1">
                    <div>
                      <strong className="text-silver-300">Duration:</strong> {service.duration}
                    </div>
                    <div>
                      <strong className="text-silver-300">Format:</strong> {service.deliveryFormat}
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Action */}
              <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400 flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-gold-500" />
                  <span>Requirement: {service.bookingRequirement}</span>
                </div>
                <Link
                  href={`/book?service=${service.id}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-wider font-bold px-7 py-3.5 rounded bg-gold-500 text-navy-950 hover:bg-gold-400 transition-colors"
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
  );
}
