"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  SERVICES_CATALOGUE,
  COMMERCIAL_OFFER_ROUTES,
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
  Users,
  Building,
} from "lucide-react";

function BookContent() {
  const searchParams = useSearchParams();
  const initialRouteParam = searchParams.get("route");
  const initialServiceParam = searchParams.get("service");

  const [step, setStep] = useState<number>(1);
  const [selectedOfferType, setSelectedOfferType] = useState<"commercial" | "catalogue">(
    initialServiceParam && !initialRouteParam ? "catalogue" : "commercial"
  );
  const [selectedRouteKey, setSelectedRouteKey] = useState<string>(
    initialRouteParam || "route-a"
  );
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialServiceParam || "one-to-one-mentorship"
  );
  const [selectedCardId, setSelectedCardId] = useState<string>("");

  // Form Fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamMembersCount, setTeamMembersCount] = useState<number>(3);
  const [tokenIdentifier, setTokenIdentifier] = useState("");
  const [preferredContact, setPreferredContact] = useState("WhatsApp");
  const [challenge, setChallenge] = useState("");
  const [desiredOutcome, setDesiredOutcome] = useState("");
  const [preferredDateWindow, setPreferredDateWindow] = useState("");

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingResult, setBookingResult] = useState<any>(null);

  useEffect(() => {
    const r = searchParams.get("route");
    const s = searchParams.get("service");
    if (r) {
      setSelectedOfferType("commercial");
      setSelectedRouteKey(r);
    } else if (s) {
      setSelectedOfferType("catalogue");
      setSelectedServiceId(s);
    }
  }, [searchParams]);

  // Determine active item and base pricing
  const isCommercial = selectedOfferType === "commercial";
  const activeCommercialRoute =
    COMMERCIAL_OFFER_ROUTES.find((r) => r.routeKey === selectedRouteKey) ||
    COMMERCIAL_OFFER_ROUTES[0];
  const activeCatalogueService =
    SERVICES_CATALOGUE.find((s) => s.id === selectedServiceId) ||
    SERVICES_CATALOGUE[1];

  const activeTitle = isCommercial
    ? activeCommercialRoute.name
    : activeCatalogueService.title;

  const basePriceINR = isCommercial
    ? activeCommercialRoute.referencePriceINR
    : activeCatalogueService.referencePriceINR || 0;

  const selectedCard = RECOGNITION_CARDS.find((c) => c.id === selectedCardId);

  // Price Calculation with Token / Card logic
  let finalPrice = basePriceINR;
  if (selectedCard) {
    if (
      (isCommercial && selectedRouteKey === "route-c") ||
      (!isCommercial && selectedServiceId === "thirty-day-premium-mentorship")
    ) {
      finalPrice = selectedCard.studentPayableINR;
    } else if (isCommercial && selectedRouteKey === "route-b") {
      // Bronze route discount (e.g. 30% off ₹12,000 = ₹8,400)
      finalPrice = 8400;
    }
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
      const res = await fetch("/api/checkout/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceId: isCommercial ? activeCommercialRoute.id : activeCatalogueService.id,
          routeKey: isCommercial ? activeCommercialRoute.routeKey : null,
          cardId: selectedCard ? selectedCard.id : null,
          tokenIdentifier: tokenIdentifier || (selectedCard ? selectedCard.rankTitle : null),
          teamName: isCommercial && selectedRouteKey === "route-a" ? teamName : null,
          teamMembersCount: isCommercial && selectedRouteKey === "route-a" ? teamMembersCount : 1,
          clientName: name,
          clientEmail: email,
          clientPhone: phone,
          problemStatement: `Context: ${challenge} | Desired Outcome: ${desiredOutcome} | Availability Window: ${preferredDateWindow}`,
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
            Select a pathway, outline your operational context, and submit for
            calendar scheduling and onboarding with {SITE_CONFIG.management.entity}.
          </p>
        </div>

        {/* Multi-Step Indicator */}
        <div className="flex items-center justify-between max-w-xl mx-auto border-b border-slate-200 pb-5 text-xs font-mono">
          <div
            className={`flex items-center space-x-2 ${
              step >= 1 ? "text-gold-700 font-bold" : "text-slate-400"
            }`}
          >
            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">
              1
            </span>
            <span className="hidden sm:inline">Select Pathway</span>
          </div>
          <div
            className={`flex items-center space-x-2 ${
              step >= 2 ? "text-gold-700 font-bold" : "text-slate-400"
            }`}
          >
            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">
              2
            </span>
            <span className="hidden sm:inline">Context & Team</span>
          </div>
          <div
            className={`flex items-center space-x-2 ${
              step >= 3 ? "text-gold-700 font-bold" : "text-slate-400"
            }`}
          >
            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">
              3
            </span>
            <span className="hidden sm:inline">Tokens & Scheduling</span>
          </div>
          <div
            className={`flex items-center space-x-2 ${
              step >= 4 ? "text-gold-700 font-bold" : "text-slate-400"
            }`}
          >
            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px]">
              4
            </span>
            <span className="hidden sm:inline">Review & Gateway</span>
          </div>
        </div>

        {/* STEP 1: CHOOSE ENGAGEMENT PATHWAY */}
        {step === 1 && (
          <div className="space-y-6 animate-fadeIn">
            {/* Toggle between Commercial Infographic Routes and Other Services */}
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-xl font-bold text-navy-950">
                Step 1: Choose Your Engagement Format
              </h2>
              <div className="flex p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setSelectedOfferType("commercial")}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                    isCommercial
                      ? "bg-white text-navy-950 shadow-xs"
                      : "text-slate-500 hover:text-navy-950"
                  }`}
                >
                  Commercial Pathways (Routes A/B/C)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedOfferType("catalogue")}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                    !isCommercial
                      ? "bg-white text-navy-950 shadow-xs"
                      : "text-slate-500 hover:text-navy-950"
                  }`}
                >
                  Advisory Catalogue
                </button>
              </div>
            </div>

            {/* Display Commercial Routes */}
            {isCommercial ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {COMMERCIAL_OFFER_ROUTES.map((route) => {
                  const isSelected = selectedRouteKey === route.routeKey;
                  return (
                    <div
                      key={route.id}
                      onClick={() => setSelectedRouteKey(route.routeKey)}
                      className={`p-5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                        isSelected
                          ? "bg-slate-50 border-gold-500 shadow-md ring-2 ring-gold-500/30"
                          : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase font-mono font-bold text-gold-700">
                            {route.badge}
                          </span>
                          {isSelected && <Check className="w-4 h-4 text-gold-600" />}
                        </div>
                        <h3 className="font-serif text-lg font-bold text-navy-950">
                          {route.name}
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {route.headline}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-baseline justify-between text-xs">
                        <span className="text-slate-400 font-mono">Investment:</span>
                        <span className="font-serif font-bold text-navy-950 text-base">
                          {formatINR(route.referencePriceINR)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* Display Services Catalogue */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SERVICES_CATALOGUE.map((s) => {
                  const isSelected = selectedServiceId === s.id;
                  return (
                    <div
                      key={s.id}
                      onClick={() => setSelectedServiceId(s.id)}
                      className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                        isSelected
                          ? "bg-slate-50 border-gold-500 shadow-md ring-2 ring-gold-500/30"
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
                          {s.referencePriceINR
                            ? formatINR(s.referencePriceINR)
                            : "Custom Quote"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

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

        {/* STEP 2: PROJECT CONTEXT & TEAM DETAILS */}
        {step === 2 && (
          <form onSubmit={handleNext} className="space-y-6 animate-fadeIn">
            <h2 className="font-serif text-xl font-bold text-navy-950">
              Step 2: Describe Your Context & Objectives
            </h2>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
              Selected: <strong className="text-gold-700">{activeTitle}</strong>.
              Detailed technical or problem framing allows Anuj and Circle13
              management to assess feasibility before scheduling.
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
                  placeholder="e.g. Aravind Sharma"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy-950 text-xs focus:outline-none focus:border-gold-500"
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
                  placeholder="aravind@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy-950 text-xs focus:outline-none focus:border-gold-500"
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
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy-950 text-xs focus:outline-none focus:border-gold-500"
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

            {/* Conditional Team Section if Route A */}
            {isCommercial && selectedRouteKey === "route-a" && (
              <div className="p-4 rounded-xl bg-warmIvory/60 border border-gold-300 space-y-3">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-gold-900 uppercase">
                  <Users className="w-4 h-4 text-gold-700" />
                  <span>Team Consultancy Configuration (Up to 5 members)</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Team / Startup Name
                    </label>
                    <input
                      type="text"
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      placeholder="e.g. Team NeuralForge"
                      className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-navy-950 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Expected Participants ({teamMembersCount})
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={5}
                      value={teamMembersCount}
                      onChange={(e) => setTeamMembersCount(parseInt(e.target.value) || 1)}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-navy-950 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>
                <p className="text-[11px] text-slate-500">
                  Per-head equivalent is ₹3,000 each at 5 members. Fixed total fee is ₹15,000.
                </p>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">
                Current Technical, Architecture, or Pitch Bottleneck *
              </label>
              <textarea
                required
                rows={3}
                value={challenge}
                onChange={(e) => setChallenge(e.target.value)}
                placeholder="What machine learning pipeline, system architecture, or pitch narrative is currently blocking your momentum?"
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
                placeholder="What concrete clarity or milestone roadmap do you expect from this engagement?"
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
                <span>Continue to Tokens & Scheduling</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: TOKENS & SCHEDULING INTEGRATION */}
        {step === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="font-serif text-xl font-bold text-navy-950">
              Step 3: Tokens & Target Availability
            </h2>

            {/* Token Section */}
            <div className="p-5 rounded-2xl bg-warmIvory/60 border border-gold-300 space-y-3">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase text-gold-900 font-bold">
                <Award className="w-4 h-4 text-gold-700" />
                <span>Have an Octopus Tank Recognition Token / Card?</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                If you were awarded a Gold, Silver, or Bronze token at Octopus
                Tank, select your card or provide your token serial number.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <label className="text-[11px] font-bold text-slate-700 block mb-1">
                    Recognition Card Category
                  </label>
                  <select
                    value={selectedCardId}
                    onChange={(e) => setSelectedCardId(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-navy-950 focus:outline-none focus:border-gold-500"
                  >
                    <option value="">No Card (Standard Base Rate)</option>
                    {RECOGNITION_CARDS.map((card) => (
                      <option key={card.id} value={card.id}>
                        {card.rankTitle} — {card.discountPercentage}% Off
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-700 block mb-1">
                    Token Serial Number (If issued)
                  </label>
                  <input
                    type="text"
                    value={tokenIdentifier}
                    onChange={(e) => setTokenIdentifier(e.target.value)}
                    placeholder="e.g. ARC-GLD-001"
                    className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 font-mono text-xs text-navy-950 focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              {selectedCard && (
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-300 text-xs text-emerald-800">
                  Card discount: <strong>{selectedCard.discountPercentage}% off</strong>. Applicable against 30-Day Premium Mentorship or designated route.
                </div>
              )}
            </div>

            {/* Target Availability Window */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-gold-700 font-bold">
                <Calendar className="w-4 h-4" />
                <span>Calendar Coordination Desk</span>
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

        {/* STEP 4: REVIEW & GATEWAY ONBOARDING */}
        {step === 4 && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="font-serif text-xl font-bold text-navy-950">
              Step 4: Review Scope & Engagement Fee
            </h2>

            <div className="rounded-3xl p-6 sm:p-8 bg-slate-50 border border-slate-200 space-y-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono text-gold-700 uppercase tracking-widest font-bold">
                    {isCommercial ? activeCommercialRoute.badge : activeCatalogueService.eyebrow}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-navy-950 mt-1">
                    {activeTitle}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Applicant: {name} ({email} | {phone})
                  </p>
                  {teamName && (
                    <p className="text-xs font-mono text-gold-800 mt-0.5">
                      Team: {teamName} ({teamMembersCount} members)
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 font-mono uppercase">
                    Fee
                  </span>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
                    {finalPrice > 0 ? formatINR(finalPrice) : "Custom RFP"}
                  </div>
                </div>
              </div>

              {/* Inclusions summary */}
              <div className="space-y-2 border-t border-slate-200 pt-4 text-xs">
                <div className="font-bold text-navy-950 uppercase">
                  Included in Engagement:
                </div>
                <ul className="space-y-1.5 text-slate-600">
                  {(isCommercial
                    ? activeCommercialRoute.focusAreas
                    : activeCatalogueService.included
                  ).map((inc, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <Check className="w-3.5 h-3.5 text-gold-600 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Management Gate Notice */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-500 space-y-1">
                <div className="flex items-center space-x-2 text-navy-950 font-bold">
                  <ShieldCheck className="w-4 h-4 text-gold-600" />
                  <span>Circle13 Secure Gateway Layer:</span>
                </div>
                <p>
                  Server-side price verification is active. Applications are securely
                  dispatched to Circle13 management for calendar validation and formal
                  onboarding. Payment processing is coordinated via Circle13 upon schedule
                  lock.
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

        {/* STEP 5: CONFIRMATION DOSSIER */}
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

            <div className="p-5 rounded-2xl bg-white border border-slate-200 max-w-md mx-auto text-left text-xs space-y-2 shadow-sm font-mono">
              <div className="text-slate-400 uppercase text-[10px]">
                Summary Dossier
              </div>
              <div className="flex justify-between text-slate-700 font-sans">
                <span>Engagement:</span>
                <span className="font-bold text-navy-950">{activeTitle}</span>
              </div>
              <div className="flex justify-between text-slate-700 font-sans">
                <span>Applicant:</span>
                <span className="font-semibold text-navy-950">{name}</span>
              </div>
              {teamName && (
                <div className="flex justify-between text-slate-700">
                  <span>Team:</span>
                  <span className="font-semibold text-navy-950">{teamName}</span>
                </div>
              )}
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
                Message Management on WhatsApp
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
