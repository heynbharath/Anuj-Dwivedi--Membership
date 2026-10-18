"use client";

import React, { useState } from "react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import VerificationNotice from "@/components/VerificationNotice";
import { formatINR } from "@/lib/utils";
import {
  Check,
  ChevronDown,
  ArrowRight,
  Target,
  Sparkles,
  ShieldCheck,
  Award,
} from "lucide-react";

export default function MentorshipPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const sessions = [
    {
      number: "01",
      title: "DIAGNOSE",
      objective: "Map the current technical baseline.",
      details: "Audit existing code, system design, and customer assumptions. Isolate the core bottleneck.",
    },
    {
      number: "02",
      title: "PRIORITISE",
      objective: "Eliminate vanity tasks; lock milestones.",
      details: "Define high-leverage validation tests and operational sprint goals for the upcoming iteration.",
    },
    {
      number: "03",
      title: "REVIEW",
      objective: "Critique live implementation.",
      details: "Code, model evaluation, or pitch audit. Test what worked, fix failed assumptions, and recalibrate.",
    },
    {
      number: "04",
      title: "PLAN",
      objective: "Synthesize autonomous execution roadmap.",
      details: "Final system documentation, scalable roadmap, and autonomous milestones without ongoing handholding.",
    },
  ];

  const faqs = [
    {
      q: "Who is this mentorship programme designed for?",
      a: "Engineers, student founders, and technical builders who have an active software or AI initiative and need senior technical guidance, architectural validation, or pitch clarity.",
    },
    {
      q: "What should I prepare before our first session?",
      a: "An intake brief: problem statement, target users, current architecture diagram (or codebase link), and the top 3 decisions or blockers currently stalling your progress.",
    },
    {
      q: "Is the commercial or competition outcome guaranteed?",
      a: "No. Professional integrity requires honesty: Anuj provides strategic evaluation, technical guidance, and disciplined accountability, but final outcomes depend entirely on your market execution.",
    },
    {
      q: "Can I request a custom technical focus (e.g. AI Agents, Computer Vision)?",
      a: "Yes. The sessions are tailored around your specific domain—whether Generative AI, backend microservices, computer vision, or pitch readiness.",
    },
    {
      q: "How is calendar availability confirmed?",
      a: "Circle13 Management coordinates Anuj's calendar. After reviewing your intake brief, our desk coordinates exact dates based on mutual availability.",
    },
    {
      q: "What are the cancellation and reschedule policies?",
      a: "Sessions may be rescheduled with at least 48 hours notice. Once onboarding commences and analytical pre-work has been conducted, programme fees are non-refundable.",
    },
  ];

  return (
    <div className="bg-white text-navy-950 py-12 sm:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero */}
        <div className="max-w-3xl space-y-3">
          <VerificationNotice
            status="proposed_copy"
            label="Mentorship Programmes"
          />
          <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight leading-[1.08]">
            Your next step deserves <br />
            <span className="text-gold-600">more than guesswork.</span>
          </h1>
          <p className="text-base text-slate-600 font-light">
            Bring the challenge, the codebase, or the pitch deck. Use structured milestones to review technical decisions and execute with discipline.
          </p>
        </div>

        {/* 4-Session Visual Timeline Infographic */}
        <section className="space-y-8 border-t border-slate-200 pt-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-gold-600 uppercase">
                PROGRAMME A
              </span>
              <h2 className="font-serif text-3xl font-bold text-navy-950 mt-1">
                1:1 Mentorship (4 Sessions)
              </h2>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                Reference Price: ₹40,000 • 4 Sequenced Milestones
              </p>
            </div>
            <Link
              href="/book?service=one-to-one-mentorship"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-6 py-3 rounded-xl bg-navy-950 text-white hover:bg-gold-500 hover:text-navy-950 transition-colors"
            >
              <span>Apply for 4 Sessions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sessions.map((s) => (
              <div
                key={s.number}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-gold-500/50 hover:shadow-md transition-all space-y-3"
              >
                <div className="text-2xl font-serif font-bold text-gold-600">
                  {s.number}
                </div>
                <h3 className="font-serif text-lg font-bold text-navy-950">
                  {s.title}
                </h3>
                <p className="text-xs font-bold text-slate-800">
                  {s.objective}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {s.details}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Programme B: 30-Day Premium Mentorship */}
        <section
          id="thirty-day"
          className="rounded-3xl p-8 sm:p-12 bg-navy-950 text-white border-2 border-gold-500 shadow-2xl space-y-8 scroll-mt-28"
        >
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest bg-gold-500 text-navy-950 inline-block font-mono">
                ANCHOR ENGAGEMENT
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                30-Day Premium Mentorship
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                An intensive month of deep architectural oversight, weekly sprint audits, and execution accountability for early-stage teams preparing for high-stakes demos or launches.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 lg:text-right shrink-0">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                Anchor Price
              </span>
              <div className="font-serif text-3xl font-bold mt-0.5 text-white">
                ₹75,000
              </div>
              <p className="text-[11px] text-gold-400 font-semibold mt-1">
                Eligible for Octopus Tank Recognition Cards
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10 text-xs text-slate-300">
            <div className="space-y-1.5">
              <h4 className="font-bold text-white uppercase tracking-wider">
                Weekly Sprint Reviews
              </h4>
              <p className="leading-relaxed text-slate-400">
                Scheduled checkpoints to audit live code, remove technical bottlenecks, and maintain development velocity.
              </p>
            </div>
            <div className="space-y-1.5">
              <h4 className="font-bold text-white uppercase tracking-wider">
                Pitch & Narrative Drill
              </h4>
              <p className="leading-relaxed text-slate-400">
                Deck stress-testing and live rehearsal to ensure technical capability is presented with clarity and commercial defensibility.
              </p>
            </div>
            <div className="space-y-1.5">
              <h4 className="font-bold text-white uppercase tracking-wider">
                Circle13 Concierge
              </h4>
              <p className="leading-relaxed text-slate-400">
                Dedicated management liaison for milestone tracking, scheduling, and onboarding throughout the 30-day sprint.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
            <span className="text-xs text-slate-400">
              * Maximum 2 concurrent teams per month. Coordinated via Circle13.
            </span>
            <Link
              href="/book?service=thirty-day-premium-mentorship"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-8 py-3.5 rounded-xl bg-gold-500 text-navy-950 hover:bg-gold-400 transition-colors"
            >
              <span>Apply for 30-Day Mentorship</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-6 border-t border-slate-200 pt-10">
          <SectionHeader
            eyebrow="TRANSPARENCY"
            title="Frequently Asked Questions"
            subtitle="Honest answers regarding scope, outcomes, preparation, and operational terms."
          />

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-serif font-bold text-navy-950 hover:text-gold-700 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gold-600 transition-transform duration-200 shrink-0 ml-4 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
