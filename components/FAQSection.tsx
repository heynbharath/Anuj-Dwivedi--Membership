"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ArrowUpRight } from "lucide-react";
import { OCTOPUS_TANK_GOOGLE_FORM_URL } from "@/lib/config";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const FAQS: FAQItem[] = [
  {
    question: "Who is eligible to take part in Octopus Tank 2026?",
    answer: (
      <p>
        Octopus Tank 2026 is exclusively open to students of{" "}
        <strong className="text-neutral-900 font-semibold">
          Dayananda Sagar University (DSU) School of Engineering
        </strong>
        , across all B.Tech and M.Tech programmes and years. Cross-branch teams within the School of Engineering are encouraged.
      </p>
    ),
  },
  {
    question: "How big should a team be, and what is the RSVP fee?",
    answer: (
      <p>
        Teams must have between <strong className="text-neutral-900 font-semibold">2 and 4 members</strong>. There is a nominal per-team RSVP fee of{" "}
        <strong className="text-neutral-900 font-semibold">₹299</strong>. Payment is processed securely directly inside the official Google Form application when submitting your team details.
      </p>
    ),
  },
  {
    question: "How do the 80% and 70% mentorship subsidies work?",
    answer: (
      <p>
        The standard fee for the 30-Day Mentorship Programme with Anuj Dwivedi (Founder, Archzos Technologies) is{" "}
        <strong className="text-neutral-900 font-semibold">₹75,000</strong>. Teams that win{" "}
        <strong className="text-blue-600 font-semibold">1st Place</strong> in Octopus Tank earn an{" "}
        <strong className="text-blue-600 font-semibold">80% subsidy</strong>, paying only ₹15,000 (saving ₹60,000). The{" "}
        <strong className="text-red-600 font-semibold">2nd Place</strong> team earns a{" "}
        <strong className="text-red-600 font-semibold">70% subsidy</strong>, paying only ₹22,500 (saving ₹52,500). Cash prizes are awarded separately and can be used towards the mentorship.
      </p>
    ),
  },
  {
    question: "What is included in the 30 Days of Mentorship?",
    answer: (
      <p>
        The programme consists of <strong className="text-neutral-900 font-semibold">1 hour daily</strong> (online or offline in Bangalore by mutual arrangement) covering AI architecture review, LLM inference pipelines, pitch rehearsal, and professional presence. Mentorship is provided directly by Archzos Technologies Pvt Ltd.
      </p>
    ),
  },
  {
    question: "What is the format on event day (31 October 2026)?",
    answer: (
      <p>
        The day kicks off with a mandatory, high-intensity <strong className="text-neutral-900 font-semibold">2-hour pitch workshop</strong> teaching structure, narrative, and judge psychology. Afterwards, teams pitch live in their selected engineering domain before the judging panel.
      </p>
    ),
  },
  {
    question: "How do we register our team?",
    answer: (
      <p>
        Registration is open now. Simply fill out the{" "}
        <a
          href={OCTOPUS_TANK_GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black font-semibold underline underline-offset-4 inline-flex items-center gap-0.5 hover:text-neutral-700"
        >
          <span>Official Application Form (Google Form)</span>
          <ArrowUpRight className="w-3.5 h-3.5 inline" />
        </a>{" "}
        with your team members, domain choice, and brief idea concept.
      </p>
    ),
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-100 bg-neutral-50/40">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 border border-neutral-200 rounded-full px-3 py-1 text-[11px] font-mono text-neutral-600 bg-white shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-neutral-800" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-neutral-950">
            Everything you need to know
          </h2>
          <p className="text-sm text-neutral-600 max-w-lg mx-auto">
            Clear answers regarding Octopus Tank 2026 rules, the 30-day mentorship programme, and team registration.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-neutral-300 shadow-sm"
                    : "bg-white/80 border-neutral-200 hover:border-neutral-300 hover:bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 select-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-neutral-950">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "bg-black text-white rotate-180" : "bg-neutral-100 text-neutral-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="p-6 rounded-2xl border border-neutral-200 bg-white text-center space-y-3 shadow-2xs">
          <p className="text-xs text-neutral-600 font-medium">
            Ready to secure your team spot before capacity is reached?
          </p>
          <a
            href={OCTOPUS_TANK_GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-all shadow-xs"
          >
            <span>Open Application Form (Google Form)</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
