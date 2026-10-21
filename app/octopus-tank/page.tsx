"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";
import OctopusStage from "@/components/OctopusStage";
import { OCTOPUS_TANK_GOOGLE_FORM_URL, OCTOPUS_TANK_CONFIG } from "@/lib/config";

export default function OctopusTankPage() {
  return (
    <div className="bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white">
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="pt-8 sm:pt-14 pb-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Institution Header */}
          <div className="flex items-center justify-center gap-3">
            <img
              src="/octopus-assets/dsu-logo.png"
              alt="Dayananda Sagar University"
              className="w-10 h-10 object-contain rounded-full shadow-2xs"
            />
            <div className="text-left">
              <span className="block text-xs font-semibold text-neutral-900 leading-tight">
                Dayananda Sagar University
              </span>
              <span className="block text-[11px] text-neutral-500 font-mono">
                School of Engineering
              </span>
            </div>
          </div>

          {/* Date & Campus Pill */}
          <div className="inline-flex items-center gap-2 border border-neutral-200/90 rounded-full px-3.5 py-1 text-[11px] font-mono text-neutral-700 bg-neutral-50/70">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>31 OCT 2026 · DSU SCHOOL OF ENGINEERING</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-semibold tracking-tight text-neutral-950 leading-[1.05]">
            Eight arms.
            <br />
            Infinite ideas.
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            A startup pitch competition for B.Tech and M.Tech students at DSU School of Engineering. Learn how to pitch in an intensive two-hour workshop, then step on stage live.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={OCTOPUS_TANK_GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-black text-white text-sm font-semibold hover:bg-neutral-800 transition-all duration-150 shadow-xs"
            >
              <span>Apply to Pitch (Google Form)</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </a>
            <a
              href="#details"
              className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg border border-neutral-200 text-neutral-800 text-sm font-medium hover:bg-neutral-50 transition-all"
            >
              <span>Event Details</span>
            </a>
          </div>

          <div className="pt-2 flex flex-col items-center gap-2">
            <span className="font-mono text-xs text-neutral-400 tracking-[0.2em] uppercase">
              Pitch. Compete. Launch.
            </span>
            <div className="flex w-24 h-0.5 rounded-full overflow-hidden">
              <span className="flex-1 bg-blue-500" />
              <span className="flex-1 bg-red-500" />
              <span className="flex-1 bg-amber-400" />
              <span className="flex-1 bg-emerald-500" />
            </div>
          </div>

          <div className="pt-4 max-w-xl mx-auto">
            <OctopusStage clip="hero" />
          </div>
        </div>
      </section>

      {/* =========================================================
          STATS BAR
      ========================================================= */}
      <section className="border-b border-neutral-200 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
          <div className="p-6 sm:p-8 flex flex-col justify-center">
            <span className="font-mono text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight">
              31 OCT
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 mt-1">
              Event Date, 2026
            </span>
          </div>
          <div className="p-6 sm:p-8 flex flex-col justify-center">
            <span className="font-mono text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight">
              8
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 mt-1">
              Domains
            </span>
          </div>
          <div className="p-6 sm:p-8 flex flex-col justify-center">
            <span className="font-mono text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight">
              2–4
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 mt-1">
              Members Per Team
            </span>
          </div>
          <div className="p-6 sm:p-8 flex flex-col justify-center">
            <span className="font-mono text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight">
              50
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-500 mt-1">
              Team Target
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          THE 8 DOMAINS SECTION
      ========================================================= */}
      <section id="domains" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
              Domains
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-neutral-950">
              Pitch in any of eight domains
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Ideas across domains, solutions for a brighter tomorrow. Each arm of the octopus is a domain. Pick the one your idea belongs to.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left 4 Domains */}
            <div className="lg:col-span-4 space-y-3">
              <div className="p-4 rounded-xl border border-neutral-200/80 bg-neutral-50/40 hover:bg-white hover:border-neutral-300 transition-all">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">AI &amp; Data</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Intelligence for impact
                </p>
              </div>

              <div className="p-4 rounded-xl border border-neutral-200/80 bg-neutral-50/40 hover:bg-white hover:border-neutral-300 transition-all">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">Robotics &amp; IoT</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Automate a brighter tomorrow
                </p>
              </div>

              <div className="p-4 rounded-xl border border-neutral-200/80 bg-neutral-50/40 hover:bg-white hover:border-neutral-300 transition-all">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">Sustainability</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Solutions for a healthier planet
                </p>
              </div>

              <div className="p-4 rounded-xl border border-neutral-200/80 bg-neutral-50/40 hover:bg-white hover:border-neutral-300 transition-all">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">Business &amp; Legal Tech</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Innovation beyond borders
                </p>
              </div>
            </div>

            {/* Middle Stage: Floating Octopus */}
            <div className="lg:col-span-4 flex items-center justify-center py-4">
              <div className="w-full max-w-[340px]">
                <OctopusStage clip="float" />
              </div>
            </div>

            {/* Right 4 Domains */}
            <div className="lg:col-span-4 space-y-3">
              <div className="p-4 rounded-xl border border-neutral-200/80 bg-neutral-50/40 hover:bg-white hover:border-neutral-300 transition-all">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">Cybersecurity</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  A safer digital tomorrow
                </p>
              </div>

              <div className="p-4 rounded-xl border border-neutral-200/80 bg-neutral-50/40 hover:bg-white hover:border-neutral-300 transition-all">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">Engineering Design</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  From ideas to real impact
                </p>
              </div>

              <div className="p-4 rounded-xl border border-neutral-200/80 bg-neutral-50/40 hover:bg-white hover:border-neutral-300 transition-all">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">Aero &amp; Mobility</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Higher ideas, further horizons
                </p>
              </div>

              <div className="p-4 rounded-xl border border-neutral-200/80 bg-neutral-50/40 hover:bg-white hover:border-neutral-300 transition-all">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">MedTech</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Tech for healthier lives
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FORMAT & TIMELINE
      ========================================================= */}
      <section id="format" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-100 bg-neutral-50/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                Format
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-neutral-950">
                Learn the pitch, then give it
              </h2>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-[56px_1fr] gap-4 pt-4 border-t border-neutral-200">
                <span className="font-mono text-xs text-neutral-400 font-medium pt-1">
                  Step 1
                </span>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-neutral-900">
                    Pitch workshop
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    A two-hour session on how to present an idea clearly and defensibly before you step on stage.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[56px_1fr] gap-4 pt-4 border-t border-neutral-200">
                <span className="font-mono text-xs text-neutral-400 font-medium pt-1">
                  Step 2
                </span>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-neutral-900">
                    Live startup pitching
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Your team pitches live in the domain you picked before seasoned founders, judges, and industry engineers.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-[56px_1fr] gap-4 pt-4 border-t border-neutral-200">
                <span className="font-mono text-xs text-neutral-400 font-medium pt-1">
                  Step 3
                </span>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-neutral-900">
                    Win and keep building
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    Cash prizes, internship opportunities, mentorship, and startup guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100 text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
                </div>
                <span>octopus / live</span>
              </div>

              <div className="py-2">
                <OctopusStage clip="wave" />
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>8 domains</span>
                <span>2-hour workshop</span>
                <span>1 stage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PERKS SECTION
      ========================================================= */}
      <section id="perks" className="py-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
              Perks
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-semibold tracking-tight text-neutral-950">
              What teams take away
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50/50 space-y-3">
              <span className="font-mono text-xs text-neutral-400">01</span>
              <h3 className="text-base font-semibold text-neutral-950">Cash prizes</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Direct monetary backing to propel your prototype into execution.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50/50 space-y-3">
              <span className="font-mono text-xs text-neutral-400">02</span>
              <h3 className="text-base font-semibold text-neutral-950">Internship opportunities</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Connect directly with participating engineering and startup teams.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50/50 space-y-3">
              <span className="font-mono text-xs text-neutral-400">03</span>
              <h3 className="text-base font-semibold text-neutral-950">Mentorship</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Ongoing advisory sessions to stress-test your system design.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-neutral-200 bg-neutral-50/50 space-y-3">
              <span className="font-mono text-xs text-neutral-400">04</span>
              <h3 className="text-base font-semibold text-neutral-950">Startup guidance</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Navigate product roadmap, entity setup, and initial market validation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EVENT DETAILS TABLE
      ========================================================= */}
      <section id="details" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-100 bg-neutral-50/30">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
              Details
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-semibold tracking-tight text-neutral-950">
              Event overview
            </h2>
          </div>

          <div className="rounded-xl border border-neutral-200 overflow-hidden bg-white text-xs sm:text-sm font-mono divide-y divide-neutral-200">
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-neutral-50/50">
              <span className="text-neutral-500 font-medium">Event</span>
              <span className="sm:col-span-2 text-neutral-950 font-sans font-semibold">Octopus Tank 2026</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4">
              <span className="text-neutral-500 font-medium">Date</span>
              <span className="sm:col-span-2 text-neutral-900">31 October 2026</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-neutral-50/50">
              <span className="text-neutral-500 font-medium">Team Size</span>
              <span className="sm:col-span-2 text-neutral-900">2–4 members</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4">
              <span className="text-neutral-500 font-medium">Target</span>
              <span className="sm:col-span-2 text-neutral-900">50 teams</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-neutral-50/50">
              <span className="text-neutral-500 font-medium">Eligibility</span>
              <span className="sm:col-span-2 text-neutral-900">DSU School of Engineering only (B.Tech &amp; M.Tech)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4">
              <span className="text-neutral-500 font-medium">Format</span>
              <span className="sm:col-span-2 text-neutral-900">2-hour pitch workshop + live startup pitching</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4 bg-neutral-50/50">
              <span className="text-neutral-500 font-medium">RSVP Fee</span>
              <span className="sm:col-span-2 text-neutral-900">₹299 per team (asked inside registration form)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 p-4">
              <span className="text-neutral-500 font-medium">Registration</span>
              <span className="sm:col-span-2">
                <a
                  href={OCTOPUS_TANK_GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans font-semibold text-black underline underline-offset-4 inline-flex items-center gap-1"
                >
                  <span>Open Official Application Form</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CLOSING REGISTRATION SECTION
      ========================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-100">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-neutral-200 bg-neutral-50/60 p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 flex justify-center">
              <div className="w-full max-w-[280px]">
                <OctopusStage clip="eyes" />
              </div>
            </div>

            <div className="md:col-span-7 space-y-5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                Registration
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-neutral-950">
                Register your team
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                Teams register through one short form, and the ₹299 RSVP fee is requested there. Open exclusively to DSU School of Engineering students. Think through your idea, coordinate with your team, and apply.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={OCTOPUS_TANK_GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-black text-white text-sm font-semibold hover:bg-neutral-800 transition-all shadow-xs"
                >
                  <span>Register Your Team (Google Form)</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
              Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-sans font-semibold tracking-tight text-neutral-950">
              Quick answers
            </h2>
          </div>

          <div className="border-t border-neutral-200 divide-y divide-neutral-200 text-sm">
            <details className="group py-4.5">
              <summary className="list-none cursor-pointer flex justify-between items-center font-medium text-neutral-900 group-hover:text-black">
                <span>Who can take part?</span>
                <span className="font-mono text-neutral-400 group-open:rotate-45 transition-transform text-lg leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-neutral-600 text-xs sm:text-sm leading-relaxed pr-6">
                Students of Dayananda Sagar University School of Engineering only, across all B.Tech and M.Tech programmes.
              </p>
            </details>

            <details className="group py-4.5">
              <summary className="list-none cursor-pointer flex justify-between items-center font-medium text-neutral-900 group-hover:text-black">
                <span>How big is a team?</span>
                <span className="font-mono text-neutral-400 group-open:rotate-45 transition-transform text-lg leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-neutral-600 text-xs sm:text-sm leading-relaxed pr-6">
                Two to four members per team.
              </p>
            </details>

            <details className="group py-4.5">
              <summary className="list-none cursor-pointer flex justify-between items-center font-medium text-neutral-900 group-hover:text-black">
                <span>What does it cost?</span>
                <span className="font-mono text-neutral-400 group-open:rotate-45 transition-transform text-lg leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-neutral-600 text-xs sm:text-sm leading-relaxed pr-6">
                There is a per-team RSVP fee of ₹299, requested directly inside the registration form.
              </p>
            </details>

            <details className="group py-4.5">
              <summary className="list-none cursor-pointer flex justify-between items-center font-medium text-neutral-900 group-hover:text-black">
                <span>When is it?</span>
                <span className="font-mono text-neutral-400 group-open:rotate-45 transition-transform text-lg leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-neutral-600 text-xs sm:text-sm leading-relaxed pr-6">
                31 October 2026. The day begins with a two-hour pitch workshop, followed by live startup pitching.
              </p>
            </details>

            <details className="group py-4.5">
              <summary className="list-none cursor-pointer flex justify-between items-center font-medium text-neutral-900 group-hover:text-black">
                <span>Which domains can we pitch in?</span>
                <span className="font-mono text-neutral-400 group-open:rotate-45 transition-transform text-lg leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-neutral-600 text-xs sm:text-sm leading-relaxed pr-6">
                AI &amp; Data, Robotics &amp; IoT, Sustainability, Business &amp; Legal Tech, Cybersecurity, Engineering Design, Aero &amp; Mobility, and MedTech.
              </p>
            </details>

            <details className="group py-4.5">
              <summary className="list-none cursor-pointer flex justify-between items-center font-medium text-neutral-900 group-hover:text-black">
                <span>How do we register?</span>
                <span className="font-mono text-neutral-400 group-open:rotate-45 transition-transform text-lg leading-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-neutral-600 text-xs sm:text-sm leading-relaxed pr-6">
                Submit your team information directly through the{" "}
                <a
                  href={OCTOPUS_TANK_GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-black underline underline-offset-2"
                >
                  official Google Form application link
                </a>
                .
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
