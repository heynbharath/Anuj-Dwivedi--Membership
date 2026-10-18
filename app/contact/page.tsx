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
    <div className="bg-white text-navy-950 py-12 sm:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-2">
          <VerificationNotice
            status="supplied_proposal"
            label="Direct Advisory & Operational Desk"
          />
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08]">
            Contact & Coordination.
          </h1>
          <p className="text-base text-slate-600 font-light">
            Inquiries, speaking invitations, or institutional RFPs coordinated by {SITE_CONFIG.management.entity}.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="space-y-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-5">
              <h3 className="font-serif text-xl font-bold text-navy-950">
                Direct Channels
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start space-x-3 text-slate-700">
                  <MapPin className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-950 block font-bold">Location</strong>
                    <span>{SITE_CONFIG.contact.location}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-700">
                  <Mail className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-950 block font-bold">Email</strong>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="text-gold-700 hover:underline"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-700">
                  <Phone className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-950 block font-bold">WhatsApp / Phone</strong>
                    <a
                      href={SITE_CONFIG.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-700 hover:underline"
                    >
                      {SITE_CONFIG.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200 text-xs text-slate-500 space-y-1">
                <strong>Management Desk:</strong>
                <p>{SITE_CONFIG.management.entity} ({SITE_CONFIG.management.partners.join(", ")})</p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <h4 className="font-serif text-base font-bold text-navy-950">
                Verified Socials
              </h4>
              <div className="flex flex-col space-y-2 text-xs text-slate-600">
                <a
                  href={SITE_CONFIG.contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-700 flex items-center space-x-2"
                >
                  <Linkedin className="w-4 h-4 text-gold-600" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={SITE_CONFIG.contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-700 flex items-center space-x-2"
                >
                  <Github className="w-4 h-4 text-gold-600" />
                  <span>GitHub Repositories</span>
                </a>
                <a
                  href={SITE_CONFIG.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-700 flex items-center space-x-2"
                >
                  <Instagram className="w-4 h-4 text-gold-600" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 space-y-6 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-navy-950">
                Send a Message
              </h3>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="font-serif text-xl font-bold text-navy-950">
                    Message Dispatched
                  </h4>
                  <p className="text-xs text-slate-600">
                    Circle13 management will review your message within 24-48 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Inquiry Type</label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy-950 text-xs focus:outline-none focus:border-gold-500"
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
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Full Name *"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy-950 text-xs focus:outline-none focus:border-gold-500"
                    />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email Address *"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy-950 text-xs focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone / WhatsApp Number"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy-950 text-xs focus:outline-none focus:border-gold-500"
                  />

                  <textarea
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Brief description of your project or inquiry..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy-950 text-xs focus:outline-none focus:border-gold-500"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-8 py-3.5 rounded-xl bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950 transition-colors shadow-md"
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
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-4xl mx-auto px-4 py-20 text-center text-slate-500 text-sm">
          Loading contact desk...
        </div>
      }
    >
      <ContactContent />
    </Suspense>
  );
}
