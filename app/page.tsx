"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Check,
  Award,
  Calendar,
  Users,
  Target,
  Clock,
  ShieldCheck,
  TrendingUp,
  MessageCircle,
} from "lucide-react";
import OctopusStage from "@/components/OctopusStage";
import FAQSection from "@/components/FAQSection";
import Circle13CoHosts from "@/components/Circle13CoHosts";
import {
  OCTOPUS_TANK_GOOGLE_FORM_URL,
  WINNERS_MENTORSHIP_CONFIG,
  SITE_CONFIG,
} from "@/lib/config";

export default function HomePage() {
  return (
    <div className="bg-white text-neutral-900 selection:bg-black selection:text-white">
      {/* =========================================================
          HERO SECTION (YC Startup Aesthetic)
      ========================================================= */}
      <section className="pt-10 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Institutional Eyebrow */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2.5 border border-neutral-200/90 rounded-full px-4 py-1.5 text-[11px] font-mono text-neutral-800 bg-white shadow-2xs">
              <img
                src="/octopus-assets/dsu-logo.png"
                alt="DSU Crest"
                className="w-4 h-4 rounded-full object-contain"
              />
              <span className="font-semibold text-neutral-900">DSU School of Engg</span>
              <span className="text-neutral-300">×</span>
              <div className="inline-flex items-center gap-1.5">
                <Image
                  src="/images/archzos-logo.png"
                  alt="Archzos Logo"
                  width={14}
                  height={14}
                  className="object-contain"
                />
                <span className="font-semibold text-neutral-900">Archzos</span>
              </div>
              <span className="text-neutral-300">×</span>
              <div className="inline-flex items-center gap-1.5">
                <Image
                  src="/images/circle13-logo-transparent.png"
                  alt="Circle13 Logo"
                  width={14}
                  height={14}
                  className="object-contain"
                />
                <span className="font-semibold text-neutral-900">Circle13</span>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-medium text-emerald-800 bg-emerald-50 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>31 OCT 2026 · REGISTRATIONS OPEN</span>
            </div>
          </div>

          {/* Main Display Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-semibold tracking-tight text-neutral-950 leading-[1.04]">
            Eight arms.
            <br />
            Infinite ideas.
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto font-normal leading-relaxed">
            The flagship startup pitch competition for B.Tech &amp; M.Tech engineering students. Learn to pitch defensible products in a 2-hour masterclass, then compete live for <strong className="text-neutral-950 font-semibold">30 days of daily 1:1 mentorship</strong> by Archzos Technologies. Co-hosted by Circle13.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={OCTOPUS_TANK_GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-all duration-150 shadow-xs"
            >
              <span>Apply to Pitch (Google Form)</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
            <a
              href="#mentorship-pricing"
              className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-lg border border-neutral-200 text-neutral-800 text-xs font-medium hover:bg-neutral-50 hover:border-neutral-300 transition-all"
            >
              <span>Explore 30-Day Mentorship &amp; Tiers</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
            </a>
            <a
              href={SITE_CONFIG.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 h-11 px-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold hover:bg-emerald-100 hover:border-emerald-300 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
              <span>Chat with Anuj (WhatsApp)</span>
              <ArrowUpRight className="w-3 h-3 opacity-70" />
            </a>
          </div>

          {/* Tagline & Subtle 4-color Bar */}
          <div className="pt-2 flex flex-col items-center gap-2">
            <span className="font-mono text-xs text-neutral-400 tracking-[0.2em] uppercase">
              Pitch. Build. Launch.
            </span>
            <div className="flex w-24 h-0.5 rounded-full overflow-hidden">
              <span className="flex-1 bg-blue-500" />
              <span className="flex-1 bg-red-500" />
              <span className="flex-1 bg-amber-400" />
              <span className="flex-1 bg-emerald-500" />
            </div>
          </div>

          {/* Animated Hero Octopus */}
          <div className="pt-4 max-w-xl mx-auto">
            <OctopusStage clip="hero" />
          </div>
        </div>
      </section>

      {/* =========================================================
          KEY STATS STRIP
      ========================================================= */}
      <section className="border-b border-neutral-200 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-neutral-200 text-center md:text-left">
          <div className="p-6 sm:p-8">
            <span className="font-mono text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight">
              31 OCT
            </span>
            <span className="block font-mono text-[11px] uppercase tracking-wider text-neutral-500 mt-1">
              Event Date, 2026
            </span>
          </div>
          <div className="p-6 sm:p-8">
            <span className="font-mono text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight">
              8
            </span>
            <span className="block font-mono text-[11px] uppercase tracking-wider text-neutral-500 mt-1">
              Engineering Domains
            </span>
          </div>
          <div className="p-6 sm:p-8">
            <span className="font-mono text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight">
              2–4
            </span>
            <span className="block font-mono text-[11px] uppercase tracking-wider text-neutral-500 mt-1">
              Members Per Team
            </span>
          </div>
          <div className="p-6 sm:p-8">
            <span className="font-mono text-2xl sm:text-3xl font-semibold text-neutral-950 tracking-tight">
              80% OFF
            </span>
            <span className="block font-mono text-[11px] uppercase tracking-wider text-neutral-500 mt-1">
              Winner Mentorship Subsidy
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOUNDER & ADVISOR SPOTLIGHT (Featuring Real Images of Anuj)
      ========================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-100 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                Lead Mentor &amp; Keynote Advisor
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-neutral-950">
                Led by Anuj Dwivedi
              </h2>
              <p className="text-neutral-600 text-sm max-w-xl">
                Founder of Archzos Technologies Pvt Ltd. Specialist in artificial intelligence engineering, high-stakes startup pitching, and professional executive presence.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-200 bg-neutral-50 text-xs font-mono text-neutral-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>30 Days of Mentorship · 1 Hour Daily</span>
            </div>
          </div>

          {/* Visual Showcase: High-Res Portrait + Real Stage Proof */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* Main Portrait Card (Official Portrait) */}
            <div className="md:col-span-5 rounded-2xl border border-neutral-200 bg-white p-6 flex flex-col justify-between space-y-6 shadow-2xs">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200/90 shadow-2xs">
                <Image
                  src="/images/anuj-portrait.png"
                  alt="Anuj Dwivedi - Founder, Archzos Technologies"
                  fill
                  className="object-cover object-center hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-xs text-white text-[10px] font-mono font-medium">
                  Anuj Dwivedi
                </div>
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-white/95 backdrop-blur-xs border border-neutral-200/80 shadow-xs flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-white border border-neutral-200/90 p-1 shrink-0 flex items-center justify-center shadow-2xs">
                    <Image
                      src="/images/archzos-logo.png"
                      alt="Archzos Logo"
                      width={22}
                      height={22}
                      className="object-contain"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <span className="block text-xs font-semibold text-neutral-950">
                      Founder, Archzos Technologies
                    </span>
                    <span className="block text-[11px] text-neutral-500 font-mono">
                      AI Systems • Pitching • Professional Presence
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs text-neutral-600">
                <blockquote className="font-serif italic text-sm text-neutral-800 leading-snug">
                  &ldquo;Builders do not buy hours. They buy clarity, defensibility, and unshakeable execution momentum.&rdquo;
                </blockquote>
                <p className="text-[11px] text-neutral-500 leading-relaxed">
                  Through Archzos Technologies and Octopus Tank, Anuj works 1:1 with ambitious engineering teams to validate AI pipelines, refine pitch defensibility, and build launch-ready products.
                </p>

                {/* Direct WhatsApp CTA Button for Anuj */}
                <div className="pt-2">
                  <a
                    href={SITE_CONFIG.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 h-9 px-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Chat with Anuj on WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3 opacity-80" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Keynote Stage & Workshop Live Action */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-6">
              {/* Keynote Card */}
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50/30 p-6 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
                  <span className="inline-flex items-center gap-1.5 font-medium text-neutral-900">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Keynote Address &amp; Hackathon Judging
                  </span>
                  <span>Bangalore Stage</span>
                </div>
                <div className="relative aspect-[16/8] w-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-200">
                  <Image
                    src="/images/anuj-keynote.png"
                    alt="Anuj Dwivedi Keynote on Live Stage"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 text-white">
                    <span className="text-[10px] font-mono text-neutral-300 block uppercase tracking-wider">
                      Live Keynote
                    </span>
                    <span className="text-sm font-semibold">
                      Artificial Intelligence &amp; Venture Engineering
                    </span>
                  </div>
                </div>
              </div>

              {/* Live Workshop Interaction Card */}
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50/30 p-6 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
                  <span className="inline-flex items-center gap-1.5 font-medium text-neutral-900">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    Engineering Masterclass &amp; Student Mentorship
                  </span>
                  <span>Campus Cohort</span>
                </div>
                <div className="relative aspect-[16/8] w-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-200">
                  <Image
                    src="/images/anuj-workshop-event-opt.jpg"
                    alt="Anuj Dwivedi leading hands-on technical workshop"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-4 text-white">
                    <span className="text-[10px] font-mono text-neutral-300 block uppercase tracking-wider">
                      Direct Mentorship
                    </span>
                    <span className="text-sm font-semibold">
                      Teaching Founders to Build Intentionally
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          THE 8 DOMAINS ARENA (Tasteful Octopus Assets)
      ========================================================= */}
      <section id="domains" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-100 bg-neutral-50/20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
              Competition Arenas
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-neutral-950">
              Pitch across eight frontiers
            </h2>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Every arm of the octopus represents a technical frontier. Choose the arena where your prototype solves a high-impact problem.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left 4 Domains */}
            <div className="lg:col-span-4 space-y-3">
              <div className="p-4.5 rounded-xl border border-neutral-200/90 bg-white hover:border-neutral-400 transition-all shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">AI &amp; Data</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Autonomous agents, LLM pipelines, and production inference.
                </p>
              </div>

              <div className="p-4.5 rounded-xl border border-neutral-200/90 bg-white hover:border-neutral-400 transition-all shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">Robotics &amp; IoT</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Connected devices, sensor arrays, and embedded automation.
                </p>
              </div>

              <div className="p-4.5 rounded-xl border border-neutral-200/90 bg-white hover:border-neutral-400 transition-all shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">Sustainability</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Clean energy tech, grid optimization, and carbon intelligence.
                </p>
              </div>

              <div className="p-4.5 rounded-xl border border-neutral-200/90 bg-white hover:border-neutral-400 transition-all shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">Business &amp; Legal Tech</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Workflow intelligence, enterprise SaaS, and compliance tech.
                </p>
              </div>
            </div>

            {/* Central Stage: Floating Octopus */}
            <div className="lg:col-span-4 flex items-center justify-center py-4">
              <div className="w-full max-w-[320px]">
                <OctopusStage clip="float" />
              </div>
            </div>

            {/* Right 4 Domains */}
            <div className="lg:col-span-4 space-y-3">
              <div className="p-4.5 rounded-xl border border-neutral-200/90 bg-white hover:border-neutral-400 transition-all shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">Cybersecurity</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Zero-trust infrastructure, encryption, and threat defense.
                </p>
              </div>

              <div className="p-4.5 rounded-xl border border-neutral-200/90 bg-white hover:border-neutral-400 transition-all shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">Engineering Design</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Rapid hardware prototyping, mechatronics, and physical compute.
                </p>
              </div>

              <div className="p-4.5 rounded-xl border border-neutral-200/90 bg-white hover:border-neutral-400 transition-all shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">Aero &amp; Mobility</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Autonomous aerial systems, telemetry, and electric transit.
                </p>
              </div>

              <div className="p-4.5 rounded-xl border border-neutral-200/90 bg-white hover:border-neutral-400 transition-all shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <h3 className="text-sm font-semibold text-neutral-900">MedTech</h3>
                </div>
                <p className="text-xs text-neutral-500 mt-1 pl-4.5">
                  Clinical diagnostic aids, health sensors, and bio-hardware.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WINNERS' MENTORSHIP & MEMBERSHIP PRICING (Crystal Clear Tracks)
      ========================================================= */}
      <section id="mentorship-pricing" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-100 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 border border-neutral-200 rounded-full px-3 py-1 text-[11px] font-mono text-neutral-600 bg-neutral-50">
              <Award className="w-3.5 h-3.5 text-black" />
              <span>OFFICIAL PROGRAMME &amp; WINNERS' SUBSIDY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-semibold tracking-tight text-neutral-950">
              30 Days of Mentorship.
              <br />
              1 Hour Daily.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              Direct 1:1 guidance with <strong className="text-neutral-900 font-semibold">Anuj Dwivedi</strong> (Founder, Archzos Technologies Pvt Ltd). Compete at Octopus Tank to unlock up to 80% subsidies, or enroll directly.
            </p>
          </div>

          {/* Two Structured Pathways (Competition Subsidized vs Direct) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Column 1: Octopus Tank Winners' Track (Subsidized Prizes) */}
            <div className="lg:col-span-7 rounded-3xl border-2 border-black bg-neutral-50/50 p-7 sm:p-9 flex flex-col justify-between space-y-6 shadow-sm">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-black text-white uppercase tracking-wider">
                    Track A · Octopus Tank Competition
                  </span>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 font-medium">
                    Up to 80% Sponsored Subsidies
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-neutral-950">
                    Earn Mentorship by Winning Octopus Tank
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1.5 leading-relaxed">
                    Teams pitching on 31 October 2026 at DSU School of Engineering compete for sponsored 30-day mentorship subsidies awarded upon live judging.
                  </p>
                </div>

                {/* Subsidies Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {/* 1st Place Box */}
                  <div className="p-5 rounded-2xl bg-white border border-blue-200 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-blue-600 uppercase">
                        1st Place Award
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold">
                        80% OFF
                      </span>
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-sans text-3xl font-bold text-neutral-950">
                          ₹15,000
                        </span>
                        <span className="text-xs text-neutral-400 line-through font-mono">
                          ₹75,000
                        </span>
                      </div>
                      <span className="block text-[11px] font-mono text-emerald-600 mt-0.5">
                        Save ₹60,000 upon win
                      </span>
                    </div>
                    <ul className="text-xs text-neutral-600 space-y-1.5 pt-2 border-t border-neutral-100">
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>30 Days of 1:1 Mentorship</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>1 hr daily (online/offline)</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>Separate cash prize eligible</span>
                      </li>
                    </ul>
                  </div>

                  {/* 2nd Place Box */}
                  <div className="p-5 rounded-2xl bg-white border border-red-200 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-red-600 uppercase">
                        2nd Place Award
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-50 text-red-700 font-bold">
                        70% OFF
                      </span>
                    </div>
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-sans text-3xl font-bold text-neutral-950">
                          ₹22,500
                        </span>
                        <span className="text-xs text-neutral-400 line-through font-mono">
                          ₹75,000
                        </span>
                      </div>
                      <span className="block text-[11px] font-mono text-emerald-600 mt-0.5">
                        Save ₹52,500 upon win
                      </span>
                    </div>
                    <ul className="text-xs text-neutral-600 space-y-1.5 pt-2 border-t border-neutral-100">
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span>30 Days of 1:1 Mentorship</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span>1 hr daily (online/offline)</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span>Separate cash prize eligible</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-neutral-500 pt-1">
                  * 3rd Place offer to be announced on Demo Day. Optional paid mentorship; cash prizes awarded separately.
                </div>
              </div>

              {/* The Working Google Form CTA Button */}
              <div className="pt-2 space-y-2">
                <a
                  href={OCTOPUS_TANK_GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-12 rounded-xl bg-black hover:bg-neutral-800 text-white flex items-center justify-center gap-2 font-semibold text-xs transition-all shadow-xs"
                >
                  <span>Apply for Octopus Tank 2026 (Google Form)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <span className="block text-center text-[11px] font-mono text-neutral-500">
                  ₹299 RSVP fee per team · 2–4 members · DSU School of Engineering
                </span>
              </div>
            </div>

            {/* Column 2: Direct Cohort Enrollment (Standard Rate) */}
            <div className="lg:col-span-5 rounded-3xl border border-neutral-200 bg-white p-7 sm:p-9 flex flex-col justify-between space-y-6 shadow-xs">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-neutral-100 text-neutral-700 uppercase tracking-wider">
                    Track B · Direct Enrollment
                  </span>
                  <span className="text-xs font-mono text-neutral-400">Non-Competition</span>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-neutral-950">
                    Direct Cohort Enrollment
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    For builders wanting immediate 1:1 advisory without competing.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-neutral-400 block font-semibold">
                    Standard Programme Fee
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-sans text-4xl font-bold text-neutral-950">
                      ₹75,000
                    </span>
                    <span className="text-xs text-neutral-500 font-mono">/ 30 days</span>
                  </div>
                  <span className="text-[11px] text-neutral-500 block">
                    30 daily sessions • Online or offline in Bangalore
                  </span>
                </div>

                <div className="space-y-2.5 text-xs text-neutral-700">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span>Daily 1-hour session directly with Anuj Dwivedi</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span>AI architecture audit, latency &amp; model inference review</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span>Pitch deck narrative stress-testing &amp; storytelling</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <span>Executive presence, tone, and professional polish</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/membership"
                  className="w-full h-12 rounded-xl border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-900 flex items-center justify-center gap-2 font-semibold text-xs transition-all shadow-2xs"
                >
                  <span>Inquire for Direct Cohort Enrollment</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CO-HOSTED BY CIRCLE13 (Co-Founders & Architecture)
      ========================================================= */}
      <Circle13CoHosts />

      {/* =========================================================
          APPLICATION ARENA (Eyes Animation)
      ========================================================= */}
      <section id="apply" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-100 bg-neutral-50/40">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-xs">
            <div className="md:col-span-5 flex justify-center">
              <div className="w-full max-w-[280px]">
                <OctopusStage clip="eyes" />
              </div>
            </div>

            <div className="md:col-span-7 space-y-5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                Team Registration
              </span>
              <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-neutral-950">
                Ready to step into the tank?
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Open exclusively to DSU School of Engineering students (B.Tech &amp; M.Tech). Teams consist of 2 to 4 members. RSVP fee is ₹299 per team, processed directly inside the official Google Form.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={OCTOPUS_TANK_GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-all shadow-xs"
                >
                  <span>Open Official Application Form</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                </a>
                <span className="font-mono text-xs text-neutral-400">
                  ₹299 / team RSVP
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          POLISHED YC-STYLE FAQ ACCORDION
      ========================================================= */}
      <FAQSection />
    </div>
  );
}
