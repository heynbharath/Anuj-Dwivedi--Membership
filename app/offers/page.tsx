"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
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
import {
  Sparkles,
  ShieldCheck,
  ZoomIn,
  Users,
  Award,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

export default function OffersPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div className="bg-white text-navy-950 py-12 sm:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono font-bold">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>OCTOPUS TANK COMMERCIAL ARCHITECTURE</span>
            </div>
            <VerificationNotice
              status="supplied_proposal"
              label="Infographic Reference Image 1"
            />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-navy-950 leading-[1.08]">
            Three Pathways. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-600 via-amber-600 to-yellow-600">
              Aligned Value & Clear Scopes.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            The revised commercial structure from the Octopus Tank master
            infographic. Whether entering as an accelerating student team, an
            individual builder with a Bronze pass, or committing to the 30-day
            anchor mentorship, choose the pathway tailored to your immediate
            milestone.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => setLightboxOpen(true)}
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-xl bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950 transition-colors shadow-sm"
            >
              <ZoomIn className="w-4 h-4" />
              <span>Enlarge Offer Structure Infographic (Image 1)</span>
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
        <div className="p-5 rounded-2xl bg-warmIvory/60 border border-gold-300 text-xs text-slate-700 leading-relaxed flex items-start space-x-3 shadow-xs">
          <ShieldCheck className="w-4 h-4 text-gold-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-navy-950 text-sm">
              Pricing Transparency & Status Note:
            </span>
            <p>{PRICING_HARMONIZATION_NOTE.notice}</p>
          </div>
        </div>

        {/* The Three Distinct Pathway Cards */}
        <section className="space-y-6">
          <SectionHeader
            eyebrow="OFFER SELECTION"
            title="Choose Your Route"
            subtitle="Clear investment levels, target audiences, and structured deliverables."
          />

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

        {/* In-Depth Offer Comparison Table */}
        <section className="space-y-6">
          <SectionHeader
            eyebrow="SIDE-BY-SIDE MATRIX"
            title="Comprehensive Route Comparison"
            subtitle="Compare investment, team per-head calculations, durations, focus areas, and onboarding routes."
          />
          <OfferComparison />
        </section>

        {/* Interactive Enquiry Form for the Offers */}
        <section className="space-y-6">
          <SectionHeader
            eyebrow="CONSULTATION DESK"
            title="Submit an Enquiry for Your Route"
            subtitle="Outline your team or project details. Circle13 management reviews your intake, confirms availability, and coordinates onboarding."
          />
          <EnquiryForm />
        </section>

        {/* Trust Desk Policy */}
        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-3">
          <h4 className="font-serif text-base font-bold text-navy-950 flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-gold-600" />
            <span>Circle13 Operational Protocol & Fair Terms</span>
          </h4>
          <p>
            • <strong>No Unsubstantiated Guarantees:</strong> Advisory engagements provide architectural diagnosis, technical stress-testing, and execution direction. We do not promise guaranteed funding, competition wins, or unlimited 24/7 personal availability.
          </p>
          <p>
            • <strong>Team Size Flexibility:</strong> The Team Consultancy Entry is capped at 5 participants to preserve high-interaction fidelity. Smaller teams may participate at the same total flat fee.
          </p>
          <p>
            • <strong>Management Coordination:</strong> All scheduling, invoicing, and communications are administered by <strong>{SITE_CONFIG.management.entity}</strong>.
          </p>
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
