"use client";

import React from "react";
import Image from "next/image";
import { Github, Linkedin, Mail, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { CIRCLE13_CONFIG, SITE_CONFIG } from "@/lib/config";

interface Circle13CoHostsProps {
  compact?: boolean;
}

export default function Circle13CoHosts({ compact = false }: Circle13CoHostsProps) {
  return (
    <section id="cohosts" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-100 bg-neutral-50/30">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2.5 border border-neutral-200/90 rounded-full px-3.5 py-1 text-[11px] font-mono text-neutral-800 bg-white shadow-2xs">
              <div className="w-4 h-4 relative shrink-0">
                <Image
                  src="/images/circle13-logo-transparent.png"
                  alt="Circle13 Mark"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-semibold">{CIRCLE13_CONFIG.eyebrow}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-neutral-950">
              Co-Hosted by Circle13
            </h2>
            <p className="text-sm text-neutral-600 max-w-2xl leading-relaxed">
              Circle13 drives the platform architecture, venture systems, and digital operational infrastructure for Octopus Tank 2026 alongside Tempete Club.
            </p>
          </div>
        </div>

        {/* Co-Hosts Team Showcase & Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Team Showcase Photo & Entity Identity */}
          <div className="lg:col-span-4 rounded-2xl border border-neutral-200 bg-white p-6 flex flex-col justify-between space-y-6 shadow-2xs">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 relative rounded bg-white border border-neutral-200/80 p-0.5 flex items-center justify-center shadow-2xs">
                    <Image
                      src="/images/circle13-logo-transparent.png"
                      alt="Circle13 Logo"
                      fill
                      className="object-contain p-0.5"
                    />
                  </div>
                  <span className="font-semibold text-neutral-950">Circle13 Platform</span>
                </div>
                <span>Bangalore</span>
              </div>

              {/* Circle13 Official Brand Card */}
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80 flex items-center gap-3.5">
                <div className="w-12 h-12 relative rounded-lg bg-white border border-neutral-200 p-1.5 shrink-0 shadow-2xs">
                  <Image
                    src="/images/circle13-logo-transparent.png"
                    alt="Circle13 Official Logo"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="space-y-0.5">
                  <span className="block text-xs font-semibold text-neutral-950">
                    Circle13 Architecture
                  </span>
                  <span className="block text-[11px] text-neutral-500 font-mono">
                    Official Co-Host &amp; Infrastructure Partner
                  </span>
                </div>
              </div>

              {/* Group Snapshot */}
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200/90 shadow-2xs">
                <Image
                  src={CIRCLE13_CONFIG.groupPhoto}
                  alt="Circle13 Co-Founders - N Bharath & Akhil Vipin Nair"
                  fill
                  className="object-cover object-center hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono text-neutral-300 block uppercase tracking-wider">
                    Founders
                  </span>
                  <span className="text-xs font-semibold">
                    N Bharath &amp; Akhil Vipin Nair
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-neutral-100 space-y-2">
              <p className="text-xs text-neutral-600 leading-relaxed">
                Building scalable developer infrastructure, autonomous agent systems, and venture platforms. Dedicated to supporting high-caliber student builders.
              </p>
              <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400">
                <span>DSU School of Engineering</span>
                <span>·</span>
                <span>Octopus Tank 2026</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dedicated Personal Profiles (Bharath & Akhil) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CIRCLE13_CONFIG.founders.map((founder) => (
              <div
                key={founder.name}
                className="rounded-2xl border border-neutral-200 bg-white p-6 flex flex-col justify-between space-y-5 hover:border-neutral-300 transition-all shadow-2xs"
              >
                <div className="space-y-4">
                  {/* Founder Authentic Photo Showcase */}
                  <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-neutral-200/90 bg-neutral-100 shadow-2xs group">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                      priority
                    />
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/85 backdrop-blur-xs text-white text-[10px] font-mono font-medium">
                      {founder.role}
                    </div>
                  </div>

                  {/* Founder Details */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-semibold text-neutral-950 leading-snug">
                        {founder.name}
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 font-semibold">
                        Circle13
                      </span>
                    </div>
                    <span className="block text-[11px] text-neutral-500 font-mono">
                      {founder.title}
                    </span>
                    <p className="text-xs text-neutral-600 leading-relaxed pt-1.5">
                      {founder.bio}
                    </p>
                  </div>
                </div>

                {/* Social & Contact Channels */}
                <div className="pt-4 border-t border-neutral-100 space-y-3">
                  <span className="block text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                    Connect &amp; Contact
                  </span>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {/* LinkedIn */}
                    <a
                      href={founder.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 h-8 px-2.5 rounded-lg border border-neutral-200 text-neutral-700 text-[11px] font-medium hover:bg-neutral-50 hover:border-neutral-300 hover:text-black transition-all"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                      <span>LinkedIn</span>
                    </a>

                    {/* GitHub */}
                    <a
                      href={founder.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 h-8 px-2.5 rounded-lg border border-neutral-200 text-neutral-700 text-[11px] font-medium hover:bg-neutral-50 hover:border-neutral-300 hover:text-black transition-all"
                      title="GitHub"
                    >
                      <Github className="w-3.5 h-3.5 text-neutral-900" />
                      <span>GitHub</span>
                    </a>

                    {/* Email */}
                    <a
                      href={`mailto:${founder.links.email}`}
                      className="inline-flex items-center justify-center gap-1.5 h-8 px-2.5 rounded-lg border border-neutral-200 text-neutral-700 text-[11px] font-medium hover:bg-neutral-50 hover:border-neutral-300 hover:text-black transition-all"
                      title="Email"
                    >
                      <Mail className="w-3.5 h-3.5 text-neutral-600" />
                      <span>Email</span>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href={founder.links.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 h-8 px-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-medium hover:bg-emerald-100 transition-all"
                      title="WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-current" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Multi-Founder WhatsApp Connectivity Strip */}
        <div className="p-5 rounded-2xl border border-neutral-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 text-emerald-600 fill-emerald-600" />
            </div>
            <div>
              <span className="block text-xs font-semibold text-neutral-950">
                Direct WhatsApp Advisory &amp; Support Channels
              </span>
              <span className="block text-[11px] text-neutral-500 font-mono">
                Have questions about Octopus Tank rules, pitch categories, or 30-day mentorship?
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Anuj's WhatsApp CTA Mini Button */}
            <a
              href={SITE_CONFIG.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-all shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Anuj Dwivedi</span>
              <ArrowUpRight className="w-3 h-3 opacity-75" />
            </a>

            {/* Circle13 Desk WhatsApp */}
            <a
              href="https://api.whatsapp.com/send?phone=918618698941"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-lg border border-neutral-200 bg-neutral-50 hover:bg-neutral-100 text-neutral-800 text-xs font-medium transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-current" />
              <span>Circle13 Desk</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
