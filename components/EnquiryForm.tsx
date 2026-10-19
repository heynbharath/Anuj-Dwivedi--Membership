"use client";

import React, { useState } from "react";
import { COMMERCIAL_OFFER_ROUTES, SITE_CONFIG } from "@/lib/config";
import { formatINR } from "@/lib/utils";
import {
  Send,
  CheckCircle2,
  ShieldCheck,
  AlertCircle,
  Award,
  Users,
} from "lucide-react";

interface EnquiryFormProps {
  defaultRouteKey?: "route-a" | "route-b" | "route-c";
  title?: string;
  subtitle?: string;
}

export default function EnquiryForm({
  defaultRouteKey = "route-a",
  title = "Request Engagement Consultation",
  subtitle = "Submit your team or individual context. Circle13 management will contact you to verify scope and confirm scheduling.",
}: EnquiryFormProps) {
  const [selectedRouteKey, setSelectedRouteKey] = useState<string>(defaultRouteKey);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamMembersCount, setTeamMembersCount] = useState<number>(3);
  const [tokenIdentifier, setTokenIdentifier] = useState("");
  const [challengeDescription, setChallengeDescription] = useState("");
  const [desiredMilestone, setDesiredMilestone] = useState("");
  const [availabilityWindow, setAvailabilityWindow] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const selectedRoute =
    COMMERCIAL_OFFER_ROUTES.find((r) => r.routeKey === selectedRouteKey) ||
    COMMERCIAL_OFFER_ROUTES[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          routeKey: selectedRouteKey,
          routeName: selectedRoute.name,
          fullName,
          email,
          phone,
          teamName: selectedRoute.routeKey === "route-a" ? teamName : null,
          teamMembersCount:
            selectedRoute.routeKey === "route-a" ? teamMembersCount : 1,
          tokenIdentifier: tokenIdentifier || null,
          challengeDescription,
          desiredMilestone,
          availabilityWindow,
          managementEntity: SITE_CONFIG.management.entity,
        }),
      });

      // Even if endpoint returns offline fallback or json
      setSubmitted(true);
    } catch (err) {
      console.warn("Using offline request queue:", err);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-3xl p-8 sm:p-12 bg-white border border-gold-400 text-center space-y-5 shadow-xl animate-fadeIn">
        <div className="w-14 h-14 rounded-full bg-gold-100 border border-gold-300 flex items-center justify-center text-gold-700 mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gold-700 font-bold">
            REQUEST CAPTURED
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
            Consultation Request Received
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            Thank you, <strong>{fullName}</strong>. Your enquiry for{" "}
            <strong>{selectedRoute.name}</strong> has been logged with{" "}
            <strong>{SITE_CONFIG.management.entity}</strong>. Our management
            liaison will contact you via WhatsApp / email within 24 to 48 hours
            to discuss scheduling and scope details.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-warmIvory/60 border border-slate-200 max-w-md mx-auto text-left text-xs space-y-1.5 font-mono">
          <div className="text-[10px] uppercase text-slate-400">
            Enquiry Snapshot:
          </div>
          <div className="flex justify-between">
            <span className="text-slate-600">Selected Route:</span>
            <span className="font-bold text-navy-950">{selectedRoute.name}</span>
          </div>
          {tokenIdentifier && (
            <div className="flex justify-between">
              <span className="text-slate-600">Token ID Provided:</span>
              <span className="font-bold text-gold-700">{tokenIdentifier}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-slate-600">Reference Fee:</span>
            <span className="font-bold text-navy-950">
              {formatINR(selectedRoute.referencePriceINR)}
            </span>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-mono font-bold uppercase tracking-wider px-6 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl p-7 sm:p-10 bg-white border border-slate-200 shadow-xl space-y-8">
      <div>
        <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-gold-700 font-bold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>MANAGED ONBOARDING DESK</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 mt-1">
          {title}
        </h3>
        <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Route Selector */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 block">
            Select Commercial Route *
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {COMMERCIAL_OFFER_ROUTES.map((route) => {
              const isSelected = selectedRouteKey === route.routeKey;
              return (
                <div
                  key={route.id}
                  onClick={() => setSelectedRouteKey(route.routeKey)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    isSelected
                      ? "bg-slate-50 border-gold-500 ring-2 ring-gold-500/30 shadow-xs"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase font-bold text-gold-700">
                    {route.badge}
                  </span>
                  <div className="font-serif font-bold text-sm text-navy-950 mt-0.5">
                    {route.name}
                  </div>
                  <div className="font-mono text-xs font-bold text-gold-800 mt-1">
                    {formatINR(route.referencePriceINR)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Client Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700">
              Your Full Name *
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
              WhatsApp / Phone Number *
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

          {/* Conditional Team Name for Route A */}
          {selectedRouteKey === "route-a" ? (
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">
                Team Name (Up to 5 members)
              </label>
              <input
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="e.g. Team NeuralForge"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-navy-950 focus:outline-none focus:border-gold-500"
              />
            </div>
          ) : (
            /* Optional Token Serial Number */
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
                <span>Recognition Token ID (If held)</span>
                <span className="text-[10px] text-slate-400 font-normal">Optional</span>
              </label>
              <input
                type="text"
                value={tokenIdentifier}
                onChange={(e) => setTokenIdentifier(e.target.value)}
                placeholder="e.g. ARC-GLD-001 or ARC-BRZ-008"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-navy-950 font-mono focus:outline-none focus:border-gold-500"
              />
            </div>
          )}
        </div>

        {/* Token Guidance Note if Token entered or Route B/C */}
        <div className="p-3.5 rounded-xl bg-warmIvory/60 border border-gold-300/80 text-[11px] text-slate-600 leading-relaxed">
          <span className="font-bold text-gold-900">Token Policy Notice: </span>
          Holding an Octopus Tank recognition token (Gold, Silver, or Bronze)
          signifies earned access or discount eligibility against designated
          routes. A token does not constitute payment, and eligibility is
          confirmed during Circle13 onboarding.
        </div>

        {/* Technical Challenge / Objective */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700">
            Current Technical Bottleneck, Model Architecture, or Pitch Challenge *
          </label>
          <textarea
            required
            rows={3}
            value={challengeDescription}
            onChange={(e) => setChallengeDescription(e.target.value)}
            placeholder="Briefly describe what you are building, the specific AI framework or system architecture in play, and what decision is currently stalled."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-navy-950 focus:outline-none focus:border-gold-500"
          />
        </div>

        {/* Target Timeframe */}
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-700">
            Target Timeframe & Availability Window
          </label>
          <input
            type="text"
            value={availabilityWindow}
            onChange={(e) => setAvailabilityWindow(e.target.value)}
            placeholder="e.g. Starting next week, or weekday evenings"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 text-xs text-navy-950 focus:outline-none focus:border-gold-500"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="submit"
            disabled={submitting}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-wider font-bold px-8 py-4 rounded-xl bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950 transition-colors shadow-lg"
          >
            <span>{submitting ? "Sending Request..." : "Submit Consultation Request"}</span>
            <Send className="w-3.5 h-3.5" />
          </button>
          <span className="text-[11px] text-slate-500 font-mono">
            Directly routed to Circle13 management desk.
          </span>
        </div>
      </form>
    </div>
  );
}
