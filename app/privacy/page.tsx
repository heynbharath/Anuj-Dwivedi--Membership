import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { SITE_CONFIG } from "@/lib/config";

export const metadata = {
  title: "Privacy Policy | Anuj Dwivedi Platform",
  description: "Privacy policy and data governance for Anuj Dwivedi platform and Circle13 management.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white text-navy-950 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-600 text-xs sm:text-sm leading-relaxed">
        <div className="space-y-2">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy-950">
            Privacy Policy
          </h1>
          <p className="text-slate-400 font-mono text-xs">
            Last updated: October 2026 • Managed by {SITE_CONFIG.management.entity}
          </p>
        </div>

        <div className="space-y-6 border-t border-slate-200 pt-6">
          <section className="space-y-1.5">
            <h2 className="font-serif text-lg font-bold text-navy-950">
              1. Information Collection & Context
            </h2>
            <p>
              When you submit a booking inquiry, membership interest form, or institutional RFP through this platform, we collect identifiable information such as your name, email address, phone/WhatsApp number, organization name, and technical context.
            </p>
          </section>

          <section className="space-y-1.5">
            <h2 className="font-serif text-lg font-bold text-navy-950">
              2. Operational Use of Information
            </h2>
            <p>
              Your information is used solely to evaluate technical feasibility, coordinate calendar availability with Circle13 management, and facilitate authenticated onboarding. We never sell or distribute your project details.
            </p>
          </section>

          <section className="space-y-1.5">
            <h2 className="font-serif text-lg font-bold text-navy-950">
              3. Payment Security & Financial Data
            </h2>
            <p>
              Payment processing is architected through authorized payment aggregators (such as Razorpay). We never capture, store, or log sensitive debit/credit card numbers or CVVs on our application servers.
            </p>
          </section>

          <section className="space-y-1.5">
            <h2 className="font-serif text-lg font-bold text-navy-950">
              4. Contact Desk
            </h2>
            <p>
              For privacy inquiries or data removal requests, contact the management desk at:{" "}
              <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-gold-700 underline font-semibold">
                {SITE_CONFIG.contact.email}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
