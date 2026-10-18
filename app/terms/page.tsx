import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { SITE_CONFIG } from "@/lib/config";

export const metadata = {
  title: "Terms of Engagement | Anuj Dwivedi Platform",
  description: "Terms and conditions governing advisory, mentorship, and institutional bookings.",
};

export default function TermsPage() {
  return (
    <div className="bg-white text-navy-950 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-600 text-xs sm:text-sm leading-relaxed">
        <div className="space-y-2">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy-950">
            Terms of Engagement
          </h1>
          <p className="text-slate-400 font-mono text-xs">
            Last updated: October 2026 • Managed by {SITE_CONFIG.management.entity}
          </p>
        </div>

        <div className="space-y-6 border-t border-slate-200 pt-6">
          <section className="space-y-1.5">
            <h2 className="font-serif text-lg font-bold text-navy-950">
              1. Nature of the Service
            </h2>
            <p>
              All consultancy, mentorship programmes (1:1 Mentorship and 30-Day Premium Mentorship), workshops, and memberships provided by Anuj Dwivedi are strictly educational, strategic advisory, and architectural evaluation services. They do not constitute investment advice or contracted outsourced software development.
            </p>
          </section>

          <section className="space-y-1.5">
            <h2 className="font-serif text-lg font-bold text-navy-950">
              2. Booking Application vs. Confirmed Session
            </h2>
            <p>
              Submission of a booking form constitutes an application. Final session booking and calendar lock are confirmed only after review of your project brief by Circle13 management and mutual alignment on scheduling availability.
            </p>
          </section>

          <section className="space-y-1.5">
            <h2 className="font-serif text-lg font-bold text-navy-950">
              3. Pricing & Reference Fees
            </h2>
            <p>
              Fees labeled &apos;Reference Price&apos; reflect the strategic scope established in our initial dockets (₹40,000 for Consultancy and 1:1 Mentorship; ₹75,000 for 30-Day Premium Mentorship). Applicable Octopus Tank recognition cards (Gold, Silver, Bronze) are honored strictly in accordance with their designated percentage discounts against the 30-Day anchor.
            </p>
          </section>

          <section className="space-y-1.5">
            <h2 className="font-serif text-lg font-bold text-navy-950">
              4. Merit Decoupling Policy
            </h2>
            <p>
              Purchasing consultancy, mentorship, or membership services does not provide any preferential treatment, influence, or guaranteed outcome in hackathons or campus competitions (including Octopus Tank 2026). Judging is based exclusively on independent stage merit.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
