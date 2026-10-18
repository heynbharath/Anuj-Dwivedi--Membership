"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import SectionHeader from "@/components/SectionHeader";
import VerificationNotice from "@/components/VerificationNotice";
import { SITE_CONFIG } from "@/lib/config";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  Send,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

function ContactContent() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") || "general";

  const [inquiryType, setInquiryType] = useState(initialType);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/app/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: inquiryType,
          name,
          email,
          phone,
          message,
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <VerificationNotice
          status="supplied_proposal"
          label="Direct Advisory & Operational Desk"
        />
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ivory-100 tracking-tight leading-[1.1]">
          Contact & Coordination.
        </h1>
        <p className="text-base sm:text-lg text-silver-300 font-light leading-relaxed">
          Submit general inquiries, advisory requests, speaking invitations, or institutional RFPs. Managed through {SITE_CONFIG.management.entity}.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Information & Channels */}
        <div className="space-y-8">
          <div className="p-6 rounded-2xl bg-navy-950 border border-white/10 space-y-6">
            <h3 className="font-serif text-xl font-bold text-ivory-100">
              Operational Details
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-start space-x-3 text-silver-300">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-ivory-100 block">Primary Location</strong>
                  <span>{SITE_CONFIG.contact.location}</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-silver-300">
                <Mail className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-ivory-100 block">Direct Email</strong>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="text-gold-400 hover:underline"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-silver-300">
                <Phone className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-ivory-100 block">Phone & WhatsApp</strong>
                  <a
                    href={SITE_CONFIG.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-400 hover:underline"
                  >
                    {SITE_CONFIG.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">
                Management Entity
              </span>
              <p className="text-xs text-silver-400 leading-snug">
                {SITE_CONFIG.management.entity} ({SITE_CONFIG.management.partners.join(", ")}) handles scheduling, commercial onboarding, and calendar allocations.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-navy-950 border border-white/10 space-y-4">
            <h3 className="font-serif text-lg font-bold text-ivory-100">
              Verified Profiles
            </h3>
            <div className="flex flex-col space-y-2 text-xs">
              <a
                href={SITE_CONFIG.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-silver-400 hover:text-gold-400"
              >
                <Linkedin className="w-4 h-4 text-gold-500" />
                <span>LinkedIn: anuj-dwivedi</span>
              </a>
              <a
                href={SITE_CONFIG.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-silver-400 hover:text-gold-400"
              >
                <Github className="w-4 h-4 text-gold-500" />
                <span>GitHub: ANUJDWIVDI</span>
              </a>
              <a
                href={SITE_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-silver-400 hover:text-gold-400"
              >
                <Instagram className="w-4 h-4 text-gold-500" />
                <span>Instagram: anuj_dwvd_0</span>
              </a>
            </div>
          </div>
        </div>

        {/* The Inquiry Form */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl p-8 sm:p-10 bg-navy-950 border border-gold-500/30 space-y-6">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold text-ivory-100">
                Send an Inquiry
              </h3>
              <p className="text-xs text-silver-400">
                Please select the appropriate category so we can route your submission to the right desk.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="font-serif text-2xl font-bold text-ivory-100">
                  Message Successfully Dispatched
                </h4>
                <p className="text-xs sm:text-sm text-silver-300 max-w-md mx-auto">
                  Thank you for reaching out. Circle13 management reviews all messages within 24-48 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-silver-300">
                    Inquiry Type *
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full px-4 py-3 rounded bg-navy-900 border border-white/10 text-ivory-100 text-xs focus:outline-none focus:border-gold-500"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="consultancy">Personal Consultancy</option>
                    <option value="mentorship">Mentorship Programme (4-Session or 30-Day)</option>
                    <option value="institutional">Institutional Workshop / Keynote</option>
                    <option value="judging">Hackathon / Pitch Judging</option>
                    <option value="octopus_tank">Octopus Tank 2026 Collaboration</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-silver-300">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full Name"
                      className="w-full px-4 py-3 rounded bg-navy-900 border border-white/10 text-ivory-100 text-xs focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-silver-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-3 rounded bg-navy-900 border border-white/10 text-ivory-100 text-xs focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-silver-300">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210 (Optional but helpful for rapid coordination)"
                    className="w-full px-4 py-3 rounded bg-navy-900 border border-white/10 text-ivory-100 text-xs focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-silver-300">
                    Message Context *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you're working on, your target dates, and what assistance you're looking for..."
                    className="w-full px-4 py-3 rounded bg-navy-900 border border-white/10 text-ivory-100 text-xs focus:outline-none focus:border-gold-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-8 py-3.5 rounded bg-gold-500 text-navy-950 hover:bg-gold-400 transition-colors shadow-md"
                >
                  <span>{isSubmitting ? "Transmitting..." : "Send Message"}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-4xl mx-auto px-4 py-20 text-center text-silver-400 text-sm">
          Loading contact desk...
        </div>
      }
    >
      <ContactContent />
    </Suspense>
  );
}
