"use client";

import React from "react";
import {
  Compass,
  BookOpen,
  Users,
  Scale,
  Award,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/config";

export default function InfographicProcessFlow() {
  const steps = [
    {
      step: "1",
      title: "Enter With Authority",
      desc: "Command the room; set the engineering tone and dismiss startup jargon.",
      icon: Compass,
    },
    {
      step: "2",
      title: "Teach What Matters",
      desc: "Deconstruct the exact gap between student hobby code and defensible architecture.",
      icon: BookOpen,
    },
    {
      step: "3",
      title: "Hold The Room",
      desc: "Showcase the exponential velocity unlocked by structured mentorship.",
      icon: Users,
    },
    {
      step: "4",
      title: "Judge The Pitches",
      desc: "Critique live startup presentations with deep architectural scrutiny.",
      icon: Scale,
    },
    {
      step: "5",
      title: "Hand Out The Cards",
      desc: "Award 10 earned Gold, Silver & Bronze cards to top student performers.",
      icon: Award,
    },
    {
      step: "6",
      title: "Management Onboarding",
      desc: "Circle13 coordinates calendars, discount redemption, and onboarding.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {steps.map((st, i) => {
          const Icon = st.icon;
          return (
            <div
              key={st.step}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-gold-500/50 hover:shadow-md transition-all flex flex-col justify-between relative group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="w-6 h-6 rounded-full bg-navy-950 text-gold-400 font-mono text-xs font-bold flex items-center justify-center">
                    {st.step}
                  </span>
                  <Icon className="w-4 h-4 text-gold-600 group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="font-serif text-sm font-bold text-navy-950 mt-2">
                  {st.title}
                </h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {st.desc}
                </p>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-gold-500 font-bold text-xs pointer-events-none">
                  →
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="p-4 rounded-xl bg-gold-50/80 border border-gold-300 text-xs text-navy-900 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-4 h-4 text-gold-700 shrink-0" />
          <span className="font-medium">
            <strong>Management Protocol:</strong> My team manages my time. Bookings, calendar routing, and payments are coordinated directly by Circle13 management.
          </span>
        </div>
        <span className="font-mono text-[11px] uppercase tracking-wider text-gold-800 font-bold shrink-0">
          Circle13 Advisory Desk
        </span>
      </div>
    </div>
  );
}
