import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { SITE_CONFIG } from "@/lib/config";

export const metadata = {
  title: "Terms of Engagement | Anuj Dwivedi Platform",
  description: "Terms and conditions governing advisory, mentorship, and institutional bookings.",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-10 text-silver-400 text-xs sm:text-sm leading-relaxed">
      <div className="space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ivory-100">
          Terms of Engagement
        </h1>
        <p className="text-slate-400 font-mono text-xs">
          Last updated: October 2026 • Managed by {SITE_CONFIG.management.entity}
        </p>
      </div>

      <div className="space-y-6 border-t border-white/10 pt-8">
        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-ivory-100">
            1. Nature of the Service
          </h2>
          <p>
            All personal consultancy, mentorship programmes (1:1 Mentorship and 30-Day Premium Mentorship), workshops, and memberships provided by Anuj Dwivedi are strictly educational, strategic advisory, and architectural evaluation services. They do not constitute investment advice, legal counsel, or contracted outsourced software development.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-ivory-100">
            2. Booking Application vs. Confirmed Session
          </h2>
          <p>
            Submission of a booking form or initiation of an engagement request constitutes an application. Final session booking and calendar lock are confirmed only after review of your project brief by Circle13 management and mutual alignment on scheduling availability.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-ivory-100">
            3. Pricing & Reference Fees
          </h2>
          <p>
            Fees labeled &apos;Reference Price&apos; reflect the strategic scope established in our initial dockets (e.g. ₹40,000 for Consultancy and 1:1 Mentorship; ₹75,000 for 30-Day Premium Mentorship). Final agreed fees are validated upon formal invoicing. Applicable Octopus Tank recognition cards (Gold, Silver, Bronze) are honored strictly in accordance with their designated percentage discounts against the 30-Day anchor.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-ivory-100">
            4. Merit Decoupling Policy
          </h2>
          <p>
            Purchasing consultancy, mentorship, or membership services does not provide any preferential treatment, influence, or guaranteed outcome in hackathons, competitions (including Octopus Tank 2026), or external funding opportunities. Competition judging is based exclusively on independent merit.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-ivory-100">
            5. Rescheduling & Cancellations
          </h2>
          <p>
            Clients may reschedule scheduled sessions with at least 48 hours advance notice to the Circle13 desk. Due to the high-touch preparation and analytical pre-work conducted prior to sessions, fees are non-refundable once onboarding and dossier preparation commence.
          </p>
        </section>
      </div>
    </div>
  );
}
