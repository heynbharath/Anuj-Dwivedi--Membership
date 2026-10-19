"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CENTRAL_OFFERS,
  COMMERCIAL_OFFER_ROUTES,
  IMAGE_ASSETS,
  PRICING_HARMONIZATION_NOTE,
  SITE_CONFIG,
} from "@/lib/config";
import SectionHeader from "@/components/SectionHeader";
import VerificationNotice from "@/components/VerificationNotice";
import OfferCard from "@/components/OfferCard";
import OfferComparison from "@/components/OfferComparison";
import EnquiryForm from "@/components/EnquiryForm";
import ImageLightbox from "@/components/ImageLightbox";
import BookingCTA from "@/components/BookingCTA";
import { OfferStatus } from "@/types";
import {
  Sparkles,
  ShieldCheck,
  ZoomIn,
  Users,
  Award,
  ArrowRight,
  Filter,
  Layers,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

export default function OffersPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState<"all" | "awaiting_approval" | "approved" | "draft">("all");

  const filteredOffers = CENTRAL_OFFERS.filter((offer) => {
    if (statusFilter === "all") return offer.status !== "hidden";
    return offer.status === statusFilter;
  });

  return (
    <div className="bg-white text-navy-950 py-12 sm:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>CENTRAL COMMERCIAL CONFIGURATION</span>
            </div>
            <VerificationNotice
              status="supplied_proposal"
              label="Master Manual 19 Oct 2026 & Infographic"
            />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-navy-950 leading-[1.08]">
            Offers & Commercial <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-amber-600 to-yellow-600">
              Pathways Architecture
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Every engagement pathway structured with explicit status boundaries,
            transparent per-head unit economics, and defined deliverables.
            Whether entering as a 5-member accelerating team, an individual with
            Bronze recognition, or committing to the 30-day anchor mentorship,
            each route is governed by confirmed terms.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => setLightboxOpen(true)}
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-xl bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950 transition-colors shadow-sm"
            >
              <ZoomIn className="w-4 h-4" />
              <span>Enlarge Offer Structure Infographic</span>
            </button>
            <Link
              href="/recognition"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-xl border border-gold-400 bg-white text-navy-950 hover:bg-gold-50 transition-colors"
            >
              <Award className="w-4 h-4 text-gold-600" />
              <span>Inspect Recognition Tokens</span>
            </Link>
          </div>
        </div>

        {/* Pricing Transparency & Harmonization Banner */}
        <div className="p-6 rounded-3xl bg-warmIvory/60 border border-gold-300 text-xs text-slate-700 leading-relaxed flex items-start space-x-4 shadow-sm">
          <ShieldCheck className="w-5 h-5 text-gold-700 shrink-0 mt-0.5" />
          <div className="space-y-2">
            <span className="font-serif font-bold text-navy-950 text-base">
              Pricing Harmonization & Status Rule (Master Manual Page 4):
            </span>
            <p className="text-slate-700 leading-relaxed">
              {PRICING_HARMONIZATION_NOTE.notice}
            </p>
            <div className="flex flex-wrap gap-2 pt-1 font-mono text-[10px]">
              <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200 text-slate-700">
                • <strong>Route A:</strong> ₹15,000 (Up to 5 people = ₹3,000/head at 5)
              </span>
              <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200 text-slate-700">
                • <strong>Route B:</strong> ₹12,000 (Individual Bronze route)
              </span>
              <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200 text-slate-700">
                • <strong>Route C:</strong> ₹75,000 (30-day Anchor Mentorship)
              </span>
              <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200 text-slate-700">
                • <strong>Historical Proposals:</strong> ₹40,000 (Kept unmerged as Drafts)
              </span>
            </div>
          </div>
        </div>

        {/* The Primary Commercial Offer Routes (Routes A, B, C) */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <SectionHeader
              eyebrow="OCTOPUS TANK PLANNING TERMS"
              title="Primary Commercial Routes"
              subtitle="The three commercial promises from the Master Manual (19 Oct 2026). Clear per-head math and defined boundaries."
              className="mb-0"
            />
            <div className="text-xs font-mono text-slate-500">
              Status: <span className="text-amber-800 font-bold">Awaiting Anuj&apos;s Approval</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {COMMERCIAL_OFFER_ROUTES.map((offer) => (
              <OfferCard
                key={offer.id}
                offer={offer}
                highlighted={offer.routeKey === "route-c"}
              />
            ))}
          </div>
        </section>

        {/* Central Configuration Explorer with Filter Tabs */}
        <section className="space-y-8 border-t border-slate-200 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <SectionHeader
              eyebrow="CENTRALIZED CONFIGURATION REGISTRY"
              title="All Configured Engagement Offerings"
              subtitle="Filter offerings by status: Confirmed, Awaiting Approval, or Historical Draft Proposals. All offers feature active CTAs."
              className="mb-0"
            />

            {/* Status Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-slate-100 border border-slate-200 text-xs font-mono">
              <button
                onClick={() => setStatusFilter("all")}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                  statusFilter === "all"
                    ? "bg-navy-950 text-white shadow-xs"
                    : "text-slate-600 hover:text-navy-950"
                }`}
              >
                All ({CENTRAL_OFFERS.length})
              </button>
              <button
                onClick={() => setStatusFilter("awaiting_approval")}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                  statusFilter === "awaiting_approval"
                    ? "bg-amber-100 text-amber-900 border border-amber-300 shadow-xs"
                    : "text-slate-600 hover:text-navy-950"
                }`}
              >
                Awaiting Approval (3)
              </button>
              <button
                onClick={() => setStatusFilter("approved")}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                  statusFilter === "approved"
                    ? "bg-emerald-100 text-emerald-900 border border-emerald-300 shadow-xs"
                    : "text-slate-600 hover:text-navy-950"
                }`}
              >
                Approved (1)
              </button>
              <button
                onClick={() => setStatusFilter("draft")}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                  statusFilter === "draft"
                    ? "bg-slate-200 text-slate-800 shadow-xs"
                    : "text-slate-600 hover:text-navy-950"
                }`}
              >
                Draft Proposals (2)
              </button>
            </div>
          </div>

          {/* Filtered Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOffers.map((offer) => (
              <OfferCard
                key={offer.id}
                offer={offer}
                highlighted={offer.routeKey === "route-c"}
              />
            ))}
          </div>
        </section>

        {/* Side-by-Side Offer Comparison Table */}
        <section className="space-y-6 border-t border-slate-200 pt-16">
          <SectionHeader
            eyebrow="SIDE-BY-SIDE MATRIX"
            title="Comprehensive Route Comparison"
            subtitle="Compare investment, team per-head calculations, durations, focus areas, and onboarding routes."
          />
          <OfferComparison />
        </section>

        {/* Interactive Enquiry Form for the Offers */}
        <section className="space-y-6 border-t border-slate-200 pt-16">
          <SectionHeader
            eyebrow="CONSULTATION DESK"
            title="Submit an Enquiry for Your Route"
            subtitle="Outline your team or project details. Circle13 management reviews your intake, confirms availability, and coordinates onboarding."
          />
          <EnquiryForm />
        </section>

        {/* Non-Negotiable Operational Policy */}
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-4">
          <h4 className="font-serif text-lg font-bold text-navy-950 flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-gold-600" />
            <span>Master Manual Commercial Guardrails (Page 14)</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 leading-relaxed">
            <div className="space-y-2">
              <span className="font-mono text-emerald-800 font-bold uppercase text-[11px] block">
                Approved Commercial Practices
              </span>
              <ul className="space-y-1.5 text-slate-600">
                <li>• Ask what the buyer wants to achieve before quoting.</li>
                <li>• Show the correct written scope, format, and price.</li>
                <li>• Explain that team price is flat for up to five members.</li>
                <li>• State that Silver and Bronze require personal selection.</li>
                <li>• Collect strictly via authorized business payment channels.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <span className="font-mono text-red-800 font-bold uppercase text-[11px] block">
                Prohibited Commercial Shortcuts
              </span>
              <ul className="space-y-1.5 text-slate-600">
                <li>× Never guarantee third-party investment, funding, or wealth.</li>
                <li>× Never manufacture urgency (e.g. &ldquo;only one seat&rdquo; if untrue).</li>
                <li>× Never promise &ldquo;daily private hour&rdquo; without approved capacity.</li>
                <li>× Never silently move a private 1:1 buyer into a group cohort.</li>
                <li>× Never accept off-record or personal unledgered payments.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <BookingCTA
          headline="Ready to structure your next execution sprint?"
          supportingText="Submit your consultation request or contact Circle13 management on WhatsApp for immediate guidance."
        />
      </div>

      {/* Lightbox for Image 1 */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={IMAGE_ASSETS.offerStructure.src}
        imageAlt={IMAGE_ASSETS.offerStructure.title}
        title={IMAGE_ASSETS.offerStructure.title}
        caption={IMAGE_ASSETS.offerStructure.caption}
      />
    </div>
  );
}
