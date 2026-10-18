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
  HelpCircle,
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
      objective: "Map the current technical & strategic baseline.",
      details:
        "Deep examination of your existing code, system architecture, team capabilities, and business assumptions. We surface hidden dependencies and isolate the single biggest bottleneck.",
    },
    {
      number: "02",
      title: "PRIORITISE",
      objective: "Eliminate low-leverage tasks; lock milestone commitments.",
      details:
        "Separate essential core logic from vanity complexity. We define the concrete validation tests and operational sprint goals for the upcoming iteration.",
    },
    {
      number: "03",
      title: "REVIEW",
      objective: "Critique live implementation and remove unexpected friction.",
      details:
        "Code, model evaluation, or pitch deck audit. We test what worked, diagnose why specific assumptions failed, and calibrate execution tactics.",
    },
    {
      number: "04",
      title: "PLAN",
      objective: "Synthesize the long-term roadmap and independent operating cadence.",
      details:
        "Final architecture documentation, scalable development roadmap, and autonomous milestones so you can continue building with velocity without ongoing handholding.",
    },
  ];

  const faqs = [
    {
      q: "Who is this mentorship programme designed for?",
      a: "This programme is built for engineers, student founders, and technical entrepreneurs who have an active software or AI initiative and need senior technical guidance, architectural validation, or pitch clarity. It is not suitable for individuals looking for basic coding 101 tutorials.",
    },
    {
      q: "What should I prepare before our first session?",
      a: "Prepare an intake brief: your problem statement, target users, current architecture diagram (or codebase link), and the top 3 decisions or blockers currently stalling your progress.",
    },
    {
      q: "Is the commercial or competition outcome guaranteed?",
      a: "No. Ethical persuasion and professional integrity require absolute clarity: Anuj provides strategic evaluation, technical guidance, and disciplined accountability, but final outcomes depend entirely on your market dynamics, execution quality, and operational effort.",
    },
    {
      q: "Can I request a custom technical focus (e.g. AI Agents, Computer Vision)?",
      a: "Yes. The sessions are tailored around your specific domain—whether that is Generative AI integration, Flask/FastAPI backends, computer vision pipelines, or investor pitch readiness.",
    },
    {
      q: "How is calendar availability confirmed?",
      a: "Circle13 Management coordinates Anuj's calendar. After submitting your application, our desk reviews the project brief and coordinates exact session dates based on mutual availability.",
    },
    {
      q: "What happens after payment or application?",
      a: "You receive an onboarding dossier from Circle13 management, an intake questionnaire, and direct scheduling links to lock in your session calendar.",
    },
    {
      q: "What are the cancellation and reschedule policies?",
      a: "Sessions may be rescheduled with at least 48 hours notice. Once onboarding commences and analytical pre-work has been conducted, programme fees are non-refundable.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-20">
      {/* Hero */}
      <div className="max-w-3xl space-y-4">
        <VerificationNotice
          status="proposed_copy"
          label="Proposed Mentorship Curriculum"
        />
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-ivory-100 tracking-tight leading-[1.1]">
          Your next step deserves <br />
          <span className="text-gold-400">more than guesswork.</span>
        </h1>
        <p className="text-base sm:text-lg text-silver-300 font-light leading-relaxed">
          Bring the challenge, the idea, or the project. Use structured conversations to examine priorities, review technical decisions, and work towards a clearer plan.
        </p>
      </div>

      {/* Programme A: 4-Session Structure */}
      <section className="space-y-8 border-t border-white/10 pt-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-gold-500 font-bold">
              PROGRAMME A
            </span>
            <h2 className="font-serif text-3xl font-bold text-ivory-100 mt-1">
              1:1 Mentorship (4 Sessions)
            </h2>
            <p className="text-xs text-silver-400 mt-1">
              Reference Price: ₹40,000 (Source infographic, pending final client confirmation)
            </p>
          </div>
          <Link
            href="/book?service=one-to-one-mentorship"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-bold px-6 py-3 rounded bg-gold-500 text-navy-950 hover:bg-gold-400 transition-colors"
          >
            <span>Apply for 4 Sessions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sessions.map((s) => (
            <div
              key={s.number}
              className="p-6 rounded-xl bg-navy-950 border border-white/10 hover:border-gold-500/40 transition-all space-y-4 relative"
            >
              <div className="text-3xl font-serif font-bold text-gold-500/30">
                {s.number}
              </div>
              <h3 className="font-serif text-xl font-bold text-ivory-100">
                {s.title}
              </h3>
              <p className="text-xs font-semibold text-gold-400 leading-snug">
                {s.objective}
              </p>
              <p className="text-xs text-silver-400 leading-relaxed">
                {s.details}
              </p>
            </div>
          ))}
        </div>

        <div className="text-[11px] text-slate-500 italic">
          * Note: The 4-session sequence above represents the proposed curriculum structure and will be calibrated according to each applicant&apos;s project requirements during intake review.
        </div>
      </section>

      {/* Programme B: 30-Day Premium Mentorship */}
      <section
        id="thirty-day"
        className="rounded-2xl p-8 sm:p-12 bg-gradient-to-br from-navy-900 via-navy-950 to-obsidian border-2 border-gold-500/80 shadow-2xl shadow-gold-500/10 space-y-8 scroll-mt-28"
      >
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest bg-gold-500 text-navy-950 inline-block">
              ANCHOR PROGRAMME
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ivory-100">
              30-Day Premium Mentorship
            </h2>
            <p className="text-sm text-silver-300 leading-relaxed">
              A high-touch month of deep technical oversight, weekly sprint audits, and execution accountability for early-stage teams preparing for high-stakes demos or launches.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-black/50 border border-white/10 lg:text-right shrink-0">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
              Anchor Price
            </span>
            <div className="font-serif text-3xl sm:text-4xl font-bold text-ivory-100 mt-1">
              ₹75,000
            </div>
            <p className="text-[11px] text-gold-400 font-semibold mt-1">
              Eligible for Octopus Tank Gold/Silver/Bronze card discounts
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10 text-xs text-silver-400">
          <div className="space-y-2">
            <h4 className="font-semibold text-ivory-100 uppercase tracking-wider">
              Weekly Sprint Reviews
            </h4>
            <p leading-relaxed>
              Regular structured review checkpoints to critique live code, debug architectural bottlenecks, and maintain weekly development velocity.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-ivory-100 uppercase tracking-wider">
              Pitch & Narrative Drill
            </h4>
            <p leading-relaxed>
              Deck stress-testing and presentation drills to ensure technical achievements are communicated with compelling, defensible commercial clarity.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-ivory-100 uppercase tracking-wider">
              Circle13 Liaison
            </h4>
            <p leading-relaxed>
              Dedicated management coordination for asset handoffs, scheduling, and milestone tracking throughout the 30-day engagement window.
            </p>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
          <span className="text-xs text-slate-400">
            * Selective intake: Maximum 2 concurrent teams per month. Does not include 24/7 on-call messaging.
          </span>
          <Link
            href="/book?service=thirty-day-premium-mentorship"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 text-xs uppercase tracking-wider font-bold px-8 py-3.5 rounded bg-gold-500 text-navy-950 hover:bg-gold-400 transition-colors"
          >
            <span>Apply for 30-Day Mentorship</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="space-y-6 border-t border-white/10 pt-12">
        <SectionHeader
          title="Direct Programme Comparison"
          subtitle="Compare the operational differences between 1:1 Mentorship and the 30-Day Intensive."
        />

        <div className="overflow-x-auto rounded-xl border border-white/10 bg-navy-950">
          <table className="w-full text-left text-xs">
            <thead className="bg-navy-900/60 border-b border-white/10 text-ivory-100 uppercase font-mono tracking-wider">
              <tr>
                <th className="p-4">Feature / Dimension</th>
                <th className="p-4">1:1 Mentorship (4 Sessions)</th>
                <th className="p-4 text-gold-400">30-Day Premium Mentorship</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-silver-400">
              <tr>
                <td className="p-4 font-semibold text-ivory-100">Primary Objective</td>
                <td className="p-4">Sequential milestone diagnosis & roadmap design</td>
                <td className="p-4 text-silver-300">Continuous execution accountability & launch drill</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-ivory-100">Session Cadence</td>
                <td className="p-4">4 scheduled 1:1 sessions over 3-6 weeks</td>
                <td className="p-4 text-silver-300">Weekly sprint reviews + asynchronous milestone checkpoints</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-ivory-100">Reference Price</td>
                <td className="p-4 font-mono">₹40,000</td>
                <td className="p-4 font-mono text-gold-400 font-bold">₹75,000 (Anchor)</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-ivory-100">Card Discount Eligible</td>
                <td className="p-4">Standard pricing</td>
                <td className="p-4 text-emerald-400 font-semibold">Eligible for 20% to 80% Octopus Tank cards</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-ivory-100">Deliverables</td>
                <td className="p-4">Session summaries, roadmap blueprint</td>
                <td className="p-4 text-silver-300">Architecture audit, pitch rehearsal, weekly sprint roadmaps</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-ivory-100">Management Route</td>
                <td className="p-4">Circle13 onboarding desk</td>
                <td className="p-4">Dedicated Circle13 concierge coordinator</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Comprehensive FAQs Accordion */}
      <section className="space-y-6 border-t border-white/10 pt-12">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Honest answers regarding scope, outcomes, preparation, and operational terms."
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-navy-950 border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-serif font-bold text-ivory-100 hover:text-gold-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gold-500 transition-transform duration-200 shrink-0 ml-4 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-silver-400 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
