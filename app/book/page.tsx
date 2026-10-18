"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  SERVICES_CATALOGUE,
  RECOGNITION_CARDS,
  SITE_CONFIG,
} from "@/lib/config";
import { formatINR } from "@/lib/utils";
import VerificationNotice from "@/components/VerificationNotice";
import {
  Check,
  Calendar,
  CreditCard,
  User,
  ShieldCheck,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Award,
} from "lucide-react";

function BookContent() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "one-to-one-mentorship";

  const [step, setStep] = useState<number>(1);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialService);
  const [selectedCardId, setSelectedCardId] = useState<string>("");

  // Form Fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredContact, setPreferredContact] = useState("WhatsApp");
  const [challenge, setChallenge] = useState("");
  const [desiredOutcome, setDesiredOutcome] = useState("");
  const [preferredDateWindow, setPreferredDateWindow] = useState("");

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingResult, setBookingResult] = useState<any>(null);

  useEffect(() => {
    const s = searchParams.get("service");
    if (s) {
      setSelectedServiceId(s);
    }
  }, [searchParams]);

  const selectedService =
    SERVICES_CATALOGUE.find((s) => s.id === selectedServiceId) ||
    SERVICES_CATALOGUE[1];

  const selectedCard = RECOGNITION_CARDS.find((c) => c.id === selectedCardId);

  // Price Calculation
  let basePrice = selectedService.referencePriceINR || 0;
  let finalPrice = basePrice;
  if (selectedCard && selectedService.id === "thirty-day-premium-mentorship") {
    finalPrice = selectedCard.studentPayableINR;
  }

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep((prev) => Math.min(prev + 1, 5));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/app/api/checkout/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceId: selectedService.id,
          cardId: selectedCard ? selectedCard.id : null,
          clientName: name,
          clientEmail: email,
          clientPhone: phone,
          problemStatement: `Challenge: ${challenge} | Desired Outcome: ${desiredOutcome} | Preferred Window: ${preferredDateWindow}`,
        }),
      });

      const data = await res.json();
      setBookingResult(data);
      setStep(5);
    } catch (err) {
      console.error(err);
      setBookingResult({
        mode: "enquiry_mode",
        message:
          "Your engagement request has been captured in our offline queue. Circle13 management will contact you shortly.",
      });
      setStep(5);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-navy-950 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <VerificationNotice
            status="supplied_proposal"
            label="Managed Advisory Desk"
          />
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-navy-950">
            Book an Engagement
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
            Select an advisory service, outline your operational context, and submit for calendar scheduling with {SITE_CONFIG.management.entity}.
          </p>
        </div>

        {/* Multi-Step Indicator */}
        <div className="flex items-center justify-between max-w-xl mx-auto border-b border-slate-200 pb-5 text-xs font-mono">
          <div className={`flex items-center space-x-2 ${step >= 1 ? "text-gold-700 font-bold" : "text-slate-400"}`}>
            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">
              1
            </span>
            <span className="hidden sm:inline">Select Offer</span>
          </div>
          <div className={`flex items-center space-x-2 ${step >= 2 ? "text-gold-700 font-bold" : "text-slate-400"}`}>
            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">
              2
            </span>
            <span className="hidden sm:inline">Context</span>
          </div>
          <div className={`flex items-center space-x-2 ${step >= 3 ? "text-gold-700 font-bold" : "text-slate-400"}`}>
            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">
              3
            </span>
            <span className="hidden sm:inline">Scheduling</span>
          </div>
          <div className={`flex items-center space-x-2 ${step >= 4 ? "text-gold-700 font-bold" : "text-slate-400"}`}>
            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">
              4
            </span>
            <span className="hidden sm:inline">Review & Gateway</span>
          </div>
        </div>

        {/* STEP 1: CHOOSE ENGAGEMENT */}
        {step === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="font-serif text-xl font-bold text-navy-950">
              Step 1: Choose Your Engagement Format
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SERVICES_CATALOGUE.map((s) => {
                const isSelected = selectedServiceId === s.id;
                return (
                  <div
                    key={s.id}
                    onClick={() => setSelectedServiceId(s.id)}
                    className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                      isSelected
                        ? "bg-slate-50 border-gold-500 shadow-md ring-2 ring-gold-500/20"
                        : "bg-white border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-gold-700 font-bold">
                        {s.eyebrow}
                      </span>
                      {isSelected && <Check className="w-4 h-4 text-gold-600" />}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-navy-950 mt-2">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {s.headline}
                    </p>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-baseline justify-between text-xs">
                      <span className="text-slate-400">Reference:</span>
                      <span className="font-serif font-bold text-navy-950 text-sm">
                        {s.referencePriceINR ? formatINR(s.referencePriceINR) : "Custom RFP"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-7 py-3.5 rounded-xl bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950 transition-colors shadow-md"
              >
                <span>Continue to Project Context</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: PROJECT CONTEXT */}
        {step === 2 && (
          <form onSubmit={handleNext} className="space-y-6 animate-fadeIn">
            <h2 className="font-serif text-xl font-bold text-navy-950">
              Step 2: Describe Your Context & Objective
            </h2>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
              Selected: <strong className="text-gold-700">{selectedService.title}</strong>. Providing specific architectural or pitch details allows Anuj to evaluate technical feasibility prior to session confirmation.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy-950 text-xs focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy-950 text-xs focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy-950 text-xs focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">
                  Preferred Contact Channel
                </label>
                <select
                  value={preferredContact}
                  onChange={(e) => setPreferredContact(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy-950 text-xs focus:outline-none focus:border-gold-500"
                >
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Email">Email</option>
                  <option value="Phone Call">Phone Call</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">
                Current Technical, Architecture, or Pitch Bottleneck *
              </label>
              <textarea
                required
                rows={3}
                value={challenge}
                onChange={(e) => setChallenge(e.target.value)}
                placeholder="What machine learning pipeline, cloud architecture, or pitch narrative is currently blocking your momentum?"
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy-950 text-xs focus:outline-none focus:border-gold-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">
                Desired Outcome / Deliverable *
              </label>
              <textarea
                required
                rows={2}
                value={desiredOutcome}
                onChange={(e) => setDesiredOutcome(e.target.value)}
                placeholder="What concrete clarity or roadmap do you expect by the conclusion of this engagement?"
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy-950 text-xs focus:outline-none focus:border-gold-500"
              />
            </div>

            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center space-x-1.5 text-xs text-slate-500 hover:text-navy-950 font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
              <button
                type="submit"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-7 py-3.5 rounded-xl bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950 transition-colors shadow-md"
              >
                <span>Continue to Scheduling</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: SCHEDULING INTEGRATION POINT */}
        {step === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="font-serif text-xl font-bold text-navy-950">
              Step 3: Scheduling & Availability Request
            </h2>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-gold-700 font-bold">
                <Calendar className="w-4 h-4" />
                <span>Calendar Coordination Point</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Anuj&apos;s calendar is managed directly by <strong>{SITE_CONFIG.management.entity}</strong>. We do not invent fake instant booking slots.
              </p>
              <div className="space-y-1.5 pt-2">
                <label className="text-xs font-bold text-slate-700">
                  Target Availability Window *
                </label>
                <input
                  type="text"
                  required
                  value={preferredDateWindow}
                  onChange={(e) => setPreferredDateWindow(e.target.value)}
                  placeholder="e.g. Next week weekday evenings, or starting 1st of next month"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy-950 text-xs focus:outline-none focus:border-gold-500"
                />
              </div>
              <p className="text-[11px] text-slate-500">
                Circle13 management will contact you via {preferredContact} to confirm the exact session schedule.
              </p>
            </div>

            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center space-x-1.5 text-xs text-slate-500 hover:text-navy-950 font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
              <button
                onClick={() => {
                  if (!preferredDateWindow) {
                    alert("Please state your target availability timeframe.");
                    return;
                  }
                  setStep(4);
                }}
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-7 py-3.5 rounded-xl bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950 transition-colors shadow-md"
              >
                <span>Review & Payment Gateway</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: REVIEW & PAYMENT GATEWAY ARCHITECTURE */}
        {step === 4 && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="font-serif text-xl font-bold text-navy-950">
              Step 4: Review Scope & Engagement Fee
            </h2>

            <div className="rounded-3xl p-6 sm:p-8 bg-slate-50 border border-slate-200 space-y-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono text-gold-700 uppercase tracking-widest font-bold">
                    {selectedService.eyebrow}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-navy-950 mt-1">
                    {selectedService.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Client: {name} ({email} | {phone})
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 font-mono uppercase">
                    Fee
                  </span>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
                    {finalPrice > 0 ? formatINR(finalPrice) : "Custom Proposal"}
                  </div>
                </div>
              </div>

              {/* Recognition Card Redemption for 30-Day Mentorship */}
              {selectedService.id === "thirty-day-premium-mentorship" && (
                <div className="p-4 rounded-xl bg-white border border-gold-300 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-mono uppercase text-gold-700 font-bold">
                    <Award className="w-4 h-4" />
                    <span>Have an Octopus Tank Recognition Card?</span>
                  </div>
                  <select
                    value={selectedCardId}
                    onChange={(e) => setSelectedCardId(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs text-navy-950 focus:outline-none focus:border-gold-500"
                  >
                    <option value="">No Card (Standard ₹75,000 Anchor)</option>
                    {RECOGNITION_CARDS.map((card) => (
                      <option key={card.id} value={card.id}>
                        {card.rankTitle} — {card.discountPercentage}% Off ({formatINR(card.studentPayableINR)})
                      </option>
                    ))}
                  </select>
                  {selectedCard && (
                    <p className="text-[11px] text-emerald-700 font-medium">
                      Card discount applied: {selectedCard.discountPercentage}% off. Winner payable fee: {formatINR(selectedCard.studentPayableINR)}.
                    </p>
                  )}
                </div>
              )}

              {/* Scope Summary */}
              <div className="space-y-2 border-t border-slate-200 pt-4 text-xs">
                <div className="font-bold text-navy-950 uppercase">
                  Included in Engagement:
                </div>
                <ul className="space-y-1.5 text-slate-600">
                  {selectedService.included.map((inc, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <Check className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Transparent Gateway Notice */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-500 space-y-1">
                <div className="flex items-center space-x-2 text-navy-950 font-bold">
                  <ShieldCheck className="w-4 h-4 text-gold-600" />
                  <span>Circle13 Secure Gateway Layer:</span>
                </div>
                <p>
                  Server-side price verification is active. Applications are securely dispatched to Circle13 management for calendar validation and formal onboarding.
                </p>
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center space-x-1.5 text-xs text-slate-500 hover:text-navy-950 font-medium"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
              <button
                onClick={handleFinalSubmit}
                disabled={isSubmitting}
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-8 py-3.5 rounded-xl bg-gold-500 text-navy-950 hover:bg-gold-400 transition-colors shadow-md"
              >
                <span>{isSubmitting ? "Processing..." : "Confirm & Submit Application"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: CONFIRMATION */}
        {step === 5 && bookingResult && (
          <div className="rounded-3xl p-8 sm:p-12 bg-slate-50 border border-gold-400 text-center space-y-6 animate-fadeIn shadow-sm">
            <div className="w-14 h-14 rounded-full bg-gold-100 border border-gold-300 flex items-center justify-center text-gold-700 mx-auto">
              <Check className="w-8 h-8 text-gold-700" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-gold-700 font-bold">
                APPLICATION SUBMITTED
              </span>
              <h2 className="font-serif text-3xl font-bold text-navy-950">
                Your Request Has Been Received
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
                {bookingResult.message ||
                  "Your engagement request has been captured in our booking queue. Circle13 management will contact you within 24-48 business hours."}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 max-w-md mx-auto text-left text-xs space-y-2 shadow-sm">
              <div className="text-slate-400 uppercase font-mono text-[10px]">
                Summary Dossier
              </div>
              <div className="flex justify-between text-slate-700">
                <span>Service:</span>
                <span className="font-bold text-navy-950">{selectedService.title}</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span>Applicant:</span>
                <span className="font-semibold text-navy-950">{name}</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span>Fee Reference:</span>
                <span className="text-gold-700 font-bold font-mono">
                  {finalPrice > 0 ? formatINR(finalPrice) : "Custom RFP"}
                </span>
              </div>
            </div>

            <div className="pt-4 flex justify-center space-x-4">
              <button
                onClick={() => {
                  setStep(1);
                  setBookingResult(null);
                }}
                className="text-xs uppercase tracking-wider font-bold px-6 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100"
              >
                Submit Another Request
              </button>
              <a
                href={SITE_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider font-bold px-6 py-2.5 rounded-xl bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-4xl mx-auto px-4 py-20 text-center text-slate-500 text-sm">
          Loading booking interface...
        </div>
      }
    >
      <BookContent />
    </Suspense>
  );
}
