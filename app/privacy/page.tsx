import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { SITE_CONFIG } from "@/lib/config";

export const metadata = {
  title: "Privacy Policy | Anuj Dwivedi Platform",
  description: "Privacy policy and data governance for Anuj Dwivedi platform and Circle13 management.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-10 text-silver-400 text-xs sm:text-sm leading-relaxed">
      <div className="space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-ivory-100">
          Privacy Policy
        </h1>
        <p className="text-slate-400 font-mono text-xs">
          Last updated: October 2026 • Coordinated by {SITE_CONFIG.management.entity}
        </p>
      </div>

      <div className="space-y-6 border-t border-white/10 pt-8">
        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-ivory-100">
            1. Information Collection & Context
          </h2>
          <p>
            When you submit an application, booking inquiry, membership interest form, or institutional RFP through this platform, we collect identifiable information such as your name, email address, phone/WhatsApp number, organization name, and the specific details of your engineering, product, or pitch challenge.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-ivory-100">
            2. Operational Use of Information
          </h2>
          <p>
            Your information is used solely to evaluate technical feasibility, coordinate calendar availability with Circle13 management, prepare tailored engagement proposals, and facilitate authenticated onboarding. We never sell, rent, or trade your contact or project information to third-party data brokers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-ivory-100">
            3. Payment Security & Financial Data
          </h2>
          <p>
            Payment processing is architected through authorized payment aggregators (such as Razorpay). We never capture, store, or log sensitive debit/credit card numbers or CVVs on our application servers. All transactions are verified through server-side HMAC cryptographic signatures.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-ivory-100">
            4. Proprietary Information & Project Briefs
          </h2>
          <p>
            We recognize that builders and founders share confidential architectures and pitch narratives. All submitted materials remain strictly confidential to Anuj Dwivedi and Circle13 management.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-serif text-xl font-bold text-ivory-100">
            5. Contact Desk
          </h2>
          <p>
            For privacy inquiries or data removal requests, contact the management desk at:{" "}
            <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-gold-400 underline">
              {SITE_CONFIG.contact.email}
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
