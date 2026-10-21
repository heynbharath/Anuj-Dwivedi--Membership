"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Linkedin, Github, ArrowRight, Check } from "lucide-react";
import { SITE_CONFIG, OCTOPUS_TANK_GOOGLE_FORM_URL } from "@/lib/config";

function ContactContent() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") || "advisory";

  const [inquiryType, setInquiryType] = useState(initialType);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: inquiryType,
          name,
          email,
          message,
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 border border-neutral-200 rounded-full px-3 py-0.5 text-[11px] font-mono text-neutral-600 bg-neutral-50">
            <span className="w-1.5 h-1.5 rounded-full bg-black" />
            <span>COMMUNICATIONS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-sans font-semibold tracking-tight text-neutral-950 leading-[1.05]">
            Get in touch.
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            Inquiries regarding advisory, keynote engagements, or membership. For Octopus Tank 2026, please use the dedicated registration form.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Quick Channels */}
          <div className="md:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl border border-neutral-200 bg-neutral-50/50 space-y-4">
              <span className="font-mono text-xs text-neutral-400 uppercase">Channels</span>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="block text-xs font-medium text-neutral-500">Email</span>
                  <a href={`mailto:${SITE_CONFIG.contact.email}`} className="font-medium text-black hover:underline">
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>
                <div>
                  <span className="block text-xs font-medium text-neutral-500">Location</span>
                  <span className="text-neutral-800">Bangalore, India</span>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-200 flex items-center gap-3">
                <a
                  href={SITE_CONFIG.contact.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-black hover:border-black transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={SITE_CONFIG.contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-black hover:border-black transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-neutral-200 bg-white space-y-2">
              <span className="font-mono text-xs text-neutral-400 uppercase">Octopus Tank 2026</span>
              <p className="text-xs text-neutral-600">
                Are you looking to apply for Octopus Tank? Do not use this contact form; register directly via Google Form.
              </p>
              <div className="pt-2">
                <a
                  href={OCTOPUS_TANK_GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-black underline underline-offset-4"
                >
                  Open Application Form →
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7">
            <div className="rounded-2xl border border-neutral-200 bg-white p-7 sm:p-8 space-y-6">
              {submitted ? (
                <div className="text-center py-10 space-y-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center mx-auto text-black">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-950">Inquiry Received</h3>
                  <p className="text-xs text-neutral-600 max-w-xs mx-auto">
                    We will review your submission and reply to the provided email address within 24-48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full h-10 px-3 rounded-lg border border-neutral-200 bg-white text-xs text-neutral-800 focus:border-black focus:outline-hidden"
                    >
                      <option value="advisory">Advisory &amp; Sprints</option>
                      <option value="membership">Membership Cohorts</option>
                      <option value="institutional">Campus Masterclasses &amp; Hackathons</option>
                      <option value="general">General Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full h-10 px-3.5 rounded-lg border border-neutral-200 bg-white text-sm focus:border-black focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full h-10 px-3.5 rounded-lg border border-neutral-200 bg-white text-sm focus:border-black focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 mb-1">
                      Brief Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe what you are working on or the objective of your engagement..."
                      className="w-full p-3 rounded-lg border border-neutral-200 bg-white text-sm focus:border-black focus:outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-11 rounded-lg bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-all flex items-center justify-center gap-2"
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Inquiry"}</span>
                    <ArrowRight className="w-4 h-4 opacity-70" />
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
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ContactContent />
    </Suspense>
  );
}
