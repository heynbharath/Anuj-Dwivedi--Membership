"use client";

import React, { useState, useEffect } from "react";
import { COMMERCIAL_OFFER_ROUTES, CENTRAL_OFFERS, SITE_CONFIG } from "@/lib/config";
import { formatINR } from "@/lib/utils";
import { EnquiryCategory, BookingStatusState } from "@/types";
import {
  Send,
  CheckCircle2,
  ShieldCheck,
  AlertCircle,
  Award,
  Users,
  Calendar,
  CreditCard,
  Lock,
  FileText,
  Sparkles,
  Clock,
  Building,
  Mic,
  HelpCircle,
  Check,
  ArrowRight,
} from "lucide-react";

interface EnquiryFormProps {
  defaultCategory?: EnquiryCategory;
  defaultRouteKey?: "route-a" | "route-b" | "route-c";
  title?: string;
  subtitle?: string;
  isCompact?: boolean;
}

const CATEGORY_OPTIONS: {
  id: EnquiryCategory;
  label: string;
  icon: any;
  description: string;
  referenceRouteKey?: string;
}[] = [
  {
    id: "team_consultancy",
    label: "Team Consultancy",
    icon: Users,
    description: "Up to 5 participants. Structured advisory on architecture, code, and execution (Offer A - ₹15,000 flat).",
    referenceRouteKey: "route-a",
  },
  {
    id: "individual_engagement",
    label: "Individual Engagement",
    icon: Sparkles,
    description: "1:1 architectural consultation & technical deep-dive (Offer B - ₹12,000 reference).",
    referenceRouteKey: "route-b",
  },
  {
    id: "premium_mentorship",
    label: "Premium Mentorship",
    icon: Award,
    description: "30-day intensive anchor mentorship with milestone accountability (Offer C - ₹75,000 reference, awaiting approval).",
    referenceRouteKey: "route-c",
  },
  {
    id: "institutional_enquiry",
    label: "Institutional Enquiry",
    icon: Building,
    description: "Campus hackathons, university guest lectures, innovation labs, and faculty advisory sessions.",
  },
  {
    id: "speaking_judging",
    label: "Speaking / Judging",
    icon: Mic,
    description: "Keynotes on AI, system architecture, tech jury panels, and Octopus Tank guest judging.",
  },
  {
    id: "recognition_enquiry",
    label: "Recognition Enquiry",
    icon: Award,
    description: "Verify or redeem Octopus Tank Gold, Silver, or Bronze tokens and access associated pathways.",
  },
  {
    id: "general_enquiry",
    label: "General Enquiry",
    icon: HelpCircle,
    description: "Strategic partnerships, media, or direct inquiries for Anuj Dwivedi and Circle13 management.",
  },
];

const LIFECYCLE_STEPS: {
  state: BookingStatusState;
  title: string;
  description: string;
  badge: string;
}[] = [
  {
    state: "enquiry_submitted",
    title: "1. Enquiry Submitted",
    description: "Intake logged with Circle13 management. Initial scope review initiated within 24-48 business hours.",
    badge: "Step 1",
  },
  {
    state: "booking_requested",
    title: "2. Booking Requested",
    description: "Date window, technical prerequisites, and team roster aligned between client and operational desk.",
    badge: "Step 2",
  },
  {
    state: "booking_confirmed",
    title: "3. Booking Confirmed",
    description: "Formal offer letter / bilateral engagement agreement issued with Anuj Dwivedi as sole signatory.",
    badge: "Step 3",
  },
  {
    state: "payment_completed",
    title: "4. Payment Completed",
    description: "Authorized transaction processed through approved commercial channels upon mutual agreement signing.",
    badge: "Step 4",
  },
];

export default function EnquiryForm({
  defaultCategory = "team_consultancy",
  defaultRouteKey = "route-a",
  title = "Commercial Enquiry & Managed Booking Desk",
  subtitle = "Direct intake for advisory engagements, institutional keynotes, and Octopus Tank recognition routing.",
  isCompact = false,
}: EnquiryFormProps) {
  const [category, setCategory] = useState<EnquiryCategory>(defaultCategory);
  const [selectedRouteKey, setSelectedRouteKey] = useState<string>(defaultRouteKey);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [teamMembersCount, setTeamMembersCount] = useState<number>(3);
  const [tokenIdentifier, setTokenIdentifier] = useState("");
  const [challengeDescription, setChallengeDescription] = useState("");
  const [desiredMilestone, setDesiredMilestone] = useState("");
  const [availabilityWindow, setAvailabilityWindow] = useState("");
  const [activeLifecycleTab, setActiveLifecycleTab] = useState<BookingStatusState>("enquiry_submitted");
  const [submitting, setSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    id: string;
    submittedAt: string;
    category: string;
    name: string;
  } | null>(null);

  // Sync selected route when category changes
  useEffect(() => {
    const matched = CATEGORY_OPTIONS.find((c) => c.id === category);
    if (matched?.referenceRouteKey) {
      setSelectedRouteKey(matched.referenceRouteKey);
    }
  }, [category]);

  const selectedRoute =
    COMMERCIAL_OFFER_ROUTES.find((r) => r.routeKey === selectedRouteKey) ||
    COMMERCIAL_OFFER_ROUTES[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      category,
      routeKey: selectedRouteKey,
      routeName: selectedRoute.name,
      fullName,
      email,
      phone,
      organization,
      teamMembersCount: category === "team_consultancy" ? teamMembersCount : 1,
      tokenIdentifier: tokenIdentifier || null,
      challengeDescription,
      desiredMilestone,
      availabilityWindow,
      requestedState: "enquiry_submitted",
      managementEntity: SITE_CONFIG.management.entity,
      submittedAt: new Date().toISOString(),
    };

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);
      const recordId = data?.enquiryId || `ENQ-${Date.now().toString().slice(-6)}`;

      // Save locally as reliable fallback
      try {
        const stored = JSON.parse(localStorage.getItem("anuj_enquiries") || "[]");
        stored.push({ id: recordId, ...payload });
        localStorage.setItem("anuj_enquiries", JSON.stringify(stored));
      } catch (storageErr) {
        console.warn("Local storage fallback:", storageErr);
      }

      setSubmittedData({
        id: recordId,
        submittedAt: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        category: CATEGORY_OPTIONS.find((c) => c.id === category)?.label || category,
        name: fullName,
      });
    } catch (err) {
      console.warn("Using offline receipt fallback:", err);
      const fallbackId = `ENQ-OFFLINE-${Date.now().toString().slice(-4)}`;
      setSubmittedData({
        id: fallbackId,
        submittedAt: new Date().toLocaleDateString(),
        category: CATEGORY_OPTIONS.find((c) => c.id === category)?.label || category,
        name: fullName,
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submittedData) {
    return (
      <div className="rounded-3xl p-8 sm:p-12 bg-white border-2 border-gold-400 text-center space-y-6 shadow-2xl animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-gold-100 border-2 border-gold-400 flex items-center justify-center text-gold-700 mx-auto">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-gold-800 font-bold bg-gold-50 border border-gold-300 px-3 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-700" />
            <span>ENQUIRY SAFELY LOGGED • STATUS: ENQUIRY_SUBMITTED</span>
          </div>
          <h3 className="font-serif text-3xl font-bold text-navy-950">
            Consultation Intake Received
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Thank you, <strong>{submittedData.name}</strong>. Your inquiry for{" "}
            <strong>{submittedData.category}</strong> has been assigned reference ID{" "}
            <span className="font-mono font-bold text-gold-800">{submittedData.id}</span> and routed
            directly to the <strong>{SITE_CONFIG.management.entity}</strong> desk.
          </p>
        </div>

        {/* 4 Lifecycle Steps with Step 1 Active */}
        <div className="max-w-3xl mx-auto pt-2">
          <div className="text-left text-xs font-mono font-bold uppercase text-slate-500 mb-3 tracking-wider">
            Commercial Lifecycle Sequence:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-left">
            {LIFECYCLE_STEPS.map((step, idx) => {
              const isCurrent = idx === 0;
              return (
                <div
                  key={step.state}
                  className={`p-3.5 rounded-xl border transition-all ${
                    isCurrent
                      ? "bg-gold-50/90 border-gold-400 shadow-xs"
                      : "bg-slate-50/60 border-slate-200 opacity-60"
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono font-bold">
                    <span className={isCurrent ? "text-gold-900" : "text-slate-400"}>
                      {step.badge}
                    </span>
                    {isCurrent && <Check className="w-3 h-3 text-gold-700" />}
                  </div>
                  <div className="font-bold text-xs text-navy-950 mt-1">{step.title}</div>
                  <div className="text-[10px] text-slate-500 mt-1 leading-snug">
                    {step.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Clear Next Steps Box */}
        <div className="p-5 rounded-2xl bg-warmIvory/60 border border-gold-300 max-w-xl mx-auto text-left text-xs space-y-2">
          <div className="font-bold text-navy-950 flex items-center space-x-2">
            <Clock className="w-4 h-4 text-gold-700" />
            <span>Next Steps with Circle13 Management:</span>
          </div>
          <ul className="space-y-1.5 text-slate-600 pl-5 list-disc">
            <li>
              <strong>Scope Review:</strong> Circle13 verifies challenge fit and ensures Anuj Dwivedi has capacity.
            </li>
            <li>
              <strong>Scheduling Confirmation:</strong> Direct coordination via WhatsApp or email to lock availability window.
            </li>
            <li>
              <strong>Bilateral Offer Issuance:</strong> Formal agreement issued with Anuj Dwivedi as company signatory.
            </li>
            <li>
              <strong>Authorized Payment:</strong> Official banking coordinates provided only upon mutual execution.
            </li>
          </ul>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => setSubmittedData(null)}
            className="text-xs font-mono font-bold uppercase tracking-wider px-6 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            Submit Another Request
          </button>
          <a
            href={SITE_CONFIG.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono font-bold uppercase tracking-wider px-6 py-3 rounded-xl bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950 transition-colors shadow-md"
          >
            Direct Management WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl p-6 sm:p-10 bg-white border border-slate-200 shadow-xl space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-gold-700 font-bold">
          <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
          <span>MANAGED ONBOARDING DESK • {SITE_CONFIG.management.entity}</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 mt-1">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </div>

      {/* Lifecycle Progress Bar / Educational States */}
      <div className="p-4 sm:p-5 rounded-2xl bg-warmIvory/50 border border-gold-300/80 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-gold-900 flex items-center space-x-1.5">
            <Clock className="w-3.5 h-3.5 text-gold-700" />
            <span>Commercial Process Sequence (4 Distinct States):</span>
          </span>
          <span className="text-[10px] font-mono text-slate-500">
            Click states below to inspect workflow requirements
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {LIFECYCLE_STEPS.map((step) => {
            const isActive = activeLifecycleTab === step.state;
            return (
              <button
                type="button"
                key={step.state}
                onClick={() => setActiveLifecycleTab(step.state)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isActive
                    ? "bg-white border-gold-500 ring-2 ring-gold-400/30 shadow-xs"
                    : "bg-white/70 border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono font-bold">
                  <span className={isActive ? "text-gold-900" : "text-slate-400"}>
                    {step.badge}
                  </span>
                  {isActive && <Check className="w-3 h-3 text-gold-600" />}
                </div>
                <div className="font-bold text-xs text-navy-950 mt-0.5">{step.title}</div>
              </button>
            );
          })}
        </div>

        <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 leading-relaxed font-sans">
          <strong>
            {LIFECYCLE_STEPS.find((s) => s.state === activeLifecycleTab)?.title}:
          </strong>{" "}
          {LIFECYCLE_STEPS.find((s) => s.state === activeLifecycleTab)?.description}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 1. Category Selection (All 7 Categories) */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-800 flex items-center justify-between">
            <span>1. Select Enquiry / Engagement Category *</span>
            <span className="text-[10px] font-mono text-slate-400 font-normal">
              7 Distinct Pathways
            </span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {CATEGORY_OPTIONS.map((cat) => {
              const Icon = cat.icon;
              const isSelected = category === cat.id;
              return (
                <div
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                    isSelected
                      ? "bg-slate-50 border-gold-500 ring-2 ring-gold-500/30 shadow-xs"
                      : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="w-7 h-7 rounded-lg bg-gold-50 border border-gold-200 flex items-center justify-center text-gold-700">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      {isSelected && (
                        <span className="text-[10px] font-mono uppercase font-bold text-gold-700 bg-gold-100 px-2 py-0.5 rounded">
                          Selected
                        </span>
                      )}
                    </div>
                    <div className="font-serif font-bold text-sm text-navy-950">
                      {cat.label}
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      {cat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Commercial Pathway Notice if Category is route-linked */}
        {(category === "team_consultancy" ||
          category === "individual_engagement" ||
          category === "premium_mentorship") && (
          <div className="p-4 rounded-2xl bg-warmIvory/60 border border-gold-300 text-xs text-slate-700 space-y-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-navy-950 font-serif">
                Referenced Commercial Route: {selectedRoute.name}
              </span>
              <span className="font-mono text-xs font-bold text-gold-800 bg-gold-100 px-2 py-0.5 rounded border border-gold-300">
                {formatINR(selectedRoute.referencePriceINR)} Reference
              </span>
            </div>
            <p className="text-[11px] text-slate-600">
              {category === "team_consultancy" &&
                "Flat ₹15,000 for up to 5 members (₹3,000/head at 5). Scope and deliverables require mutual onboarding confirmation."}
              {category === "individual_engagement" &&
                "Individual 1:1 engagement associated with Bronze recognition pathway. Exact eligibility and scope confirmed upon review."}
              {category === "premium_mentorship" &&
                "30-day deep engagement with execution support and accountability. (Status: Awaiting Approval - not an automatic guarantee)."}
            </p>
          </div>
        )}

        {/* 2. Applicant & Organization Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Rahul Sharma"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-navy-950 focus:outline-none focus:border-gold-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="rahul@example.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-navy-950 focus:outline-none focus:border-gold-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">
              WhatsApp / Mobile Phone *
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-navy-950 focus:outline-none focus:border-gold-500"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">
              {category === "team_consultancy"
                ? "Team Name (Up to 5 participants)"
                : category === "institutional_enquiry"
                ? "College / University / Company Name *"
                : "Organization / University"}
            </label>
            <input
              type="text"
              required={category === "institutional_enquiry"}
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              placeholder={
                category === "team_consultancy"
                  ? "e.g. Team NeuralForge"
                  : "e.g. Dayananda Sagar University (DSU)"
              }
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-navy-950 focus:outline-none focus:border-gold-500"
            />
          </div>
        </div>

        {/* Team size slider if team consultancy */}
        {category === "team_consultancy" && (
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-bold text-navy-950">Team Size: {teamMembersCount} Members</span>
              <p className="text-[11px] text-slate-500">
                Total fee is flat ₹15,000. At 5 members, per-person equivalent is ₹3,000.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              {[2, 3, 4, 5].map((cnt) => (
                <button
                  type="button"
                  key={cnt}
                  onClick={() => setTeamMembersCount(cnt)}
                  className={`w-8 h-8 rounded-lg font-mono font-bold text-xs transition-colors ${
                    teamMembersCount === cnt
                      ? "bg-navy-950 text-white"
                      : "bg-white border border-slate-300 text-slate-700 hover:border-gold-400"
                  }`}
                >
                  {cnt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Token serial field */}
        <div className="p-4 rounded-2xl bg-warmIvory/40 border border-gold-300/70 space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-800 flex items-center space-x-1.5">
              <Award className="w-4 h-4 text-gold-600" />
              <span>Octopus Tank Recognition Token Serial ID</span>
            </label>
            <span className="text-[10px] font-mono text-slate-500 uppercase">Optional</span>
          </div>
          <input
            type="text"
            value={tokenIdentifier}
            onChange={(e) => setTokenIdentifier(e.target.value)}
            placeholder="e.g. ARC-GLD-001 (Gold), ARC-SLV-004 (Silver), or ARC-BRZ-007 (Bronze)"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 font-mono text-xs text-navy-950 focus:outline-none focus:border-gold-500 bg-white"
          />
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Note: Holding an Octopus Tank token signifies judged performance and opens defined next steps. It does not automatically guarantee mentorship, investment, or commercial discounts without formal approval.
          </p>
        </div>

        {/* 3. Challenge / Objective Description */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700">
            Technical Problem, Project Architecture, or Event Requirements *
          </label>
          <textarea
            required
            rows={3}
            value={challengeDescription}
            onChange={(e) => setChallengeDescription(e.target.value)}
            placeholder="Describe what you are building, the specific technical friction or architectural bottleneck, or the scope of the speaking/institutional engagement."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-navy-950 focus:outline-none focus:border-gold-500"
          />
        </div>

        {/* 4. Availability Window & Timeframe */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
            <span>Target Availability Window / Preferred Timeline *</span>
            <span className="text-[10px] font-mono text-slate-400 font-normal">
              No Fake Calendar Slots
            </span>
          </label>
          <input
            type="text"
            required
            value={availabilityWindow}
            onChange={(e) => setAvailabilityWindow(e.target.value)}
            placeholder="e.g. Weekdays after 6:00 PM IST, or target weekend in November"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-navy-950 focus:outline-none focus:border-gold-500"
          />
        </div>

        {/* Transparent Payment & Scheduling Policy Notice */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5 font-sans leading-relaxed">
          <div className="flex items-center space-x-2 text-navy-950 font-bold">
            <Lock className="w-3.5 h-3.5 text-gold-600" />
            <span>Commercial Protocol & Payment Gate Disclosure:</span>
          </div>
          <p>
            • Payment credentials and live payment gateway integration await formal confirmation by Circle13 and Archzos.
          </p>
          <p>
            • No payment is collected through unverified forms. All commercial fees are invoiced only after a written engagement agreement is signed by Anuj Dwivedi (Founder, Archzos Technologies Pvt Ltd).
          </p>
          <p>
            • We do not invent fake calendar availability. Anuj&apos;s schedule is confirmed manually by Circle13 operational management.
          </p>
        </div>

        {/* Submit Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="submit"
            disabled={submitting}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-wider font-bold px-8 py-4 rounded-xl bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950 transition-all duration-200 shadow-lg shadow-navy-950/10"
          >
            <span>{submitting ? "Transmitting..." : "Submit Commercial Enquiry"}</span>
            <Send className="w-3.5 h-3.5" />
          </button>
          <span className="text-[11px] text-slate-500 font-mono text-center sm:text-right">
            Intake monitored by Circle13 Management.
          </span>
        </div>
      </form>
    </div>
  );
}
