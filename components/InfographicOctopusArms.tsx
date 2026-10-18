"use client";

import React from "react";
import { OCTOPUS_TANK_CONFIG } from "@/lib/config";
import {
  Brain,
  Cpu,
  Leaf,
  Briefcase,
  ShieldAlert,
  Compass,
  Plane,
  HeartPulse,
  Award,
} from "lucide-react";

export default function InfographicOctopusArms() {
  const armIcons = [
    Brain,
    Cpu,
    Leaf,
    Briefcase,
    ShieldAlert,
    Compass,
    Plane,
    HeartPulse,
  ];

  return (
    <div className="space-y-8">
      {/* 8 Arms Grid Infographic */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {OCTOPUS_TANK_CONFIG.thematicArms.map((arm, index) => {
          const Icon = armIcons[index] || Brain;

          return (
            <div
              key={arm.id}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-gold-500/60 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-gold-600 bg-gold-50 px-2 py-0.5 rounded border border-gold-200">
                    ARM {arm.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-navy-900 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h4 className="font-serif text-lg font-bold text-navy-950 group-hover:text-gold-600 transition-colors">
                  {arm.title}
                </h4>

                <p className="text-xs font-semibold text-slate-700">
                  {arm.subtitle}
                </p>

                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {arm.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>DSU SOE TRACK</span>
                <span className="text-emerald-600 font-bold">LIVE STAGE</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Visual Event Parameters Infographic Banner */}
      <div className="p-6 rounded-2xl bg-navy-950 text-white border border-gold-500/30 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div className="space-y-1">
          <span className="text-[10px] uppercase font-mono tracking-widest text-gold-400 font-bold">
            Target Date
          </span>
          <div className="font-serif text-xl sm:text-2xl font-bold">
            31 OCT 2026
          </div>
          <p className="text-[10px] text-slate-400">Dayananda Sagar Univ.</p>
        </div>

        <div className="space-y-1">
          <span className="text-[10px] uppercase font-mono tracking-widest text-gold-400 font-bold">
            Team Registration
          </span>
          <div className="font-serif text-xl sm:text-2xl font-bold text-gold-400">
            ₹299
          </div>
          <p className="text-[10px] text-slate-400">Per Team (2-4 Members)</p>
        </div>

        <div className="space-y-1">
          <span className="text-[10px] uppercase font-mono tracking-widest text-gold-400 font-bold">
            Cohort Limit
          </span>
          <div className="font-serif text-xl sm:text-2xl font-bold">
            50 TEAMS
          </div>
          <p className="text-[10px] text-slate-400">DSU School of Engineering</p>
        </div>

        <div className="space-y-1">
          <span className="text-[10px] uppercase font-mono tracking-widest text-gold-400 font-bold">
            Recognition Cards
          </span>
          <div className="font-serif text-xl sm:text-2xl font-bold text-amber-400">
            10 CARDS
          </div>
          <p className="text-[10px] text-slate-400">3 Gold • 7 Silver & Bronze</p>
        </div>
      </div>
    </div>
  );
}
