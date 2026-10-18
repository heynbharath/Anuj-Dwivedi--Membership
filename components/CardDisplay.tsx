import React from "react";
import { RECOGNITION_CARDS } from "@/lib/config";
import { formatINR } from "@/lib/utils";
import { Award, ShieldCheck, Check } from "lucide-react";

export default function CardDisplay() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {RECOGNITION_CARDS.map((card) => {
          const isGold = card.tier === "GOLD";
          const isSilver = card.tier === "SILVER";

          return (
            <div
              key={card.id}
              className={`relative rounded-3xl overflow-hidden p-7 border transition-all duration-300 hover:scale-[1.02] shadow-lg flex flex-col justify-between ${
                isGold
                  ? "bg-gradient-to-br from-[#1C150A] via-[#2A1E0D] to-[#120D05] border-gold-500/80 text-white"
                  : isSilver
                  ? "bg-gradient-to-br from-[#1E242C] via-[#29323D] to-[#141920] border-slate-400 text-white"
                  : "bg-gradient-to-br from-[#24150E] via-[#331E14] to-[#170E08] border-amber-700/80 text-white"
              }`}
            >
              <div>
                {/* Card Header Strip */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <Award
                      className="w-5 h-5"
                      style={{ color: card.colorScheme.accent }}
                    />
                    <span
                      className="text-xs uppercase tracking-widest font-mono font-bold"
                      style={{ color: card.colorScheme.accent }}
                    >
                      {card.tier} CARD
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-black/50 border border-white/10 text-slate-300">
                    {card.quantity} {card.quantity === 1 ? "ISSUED" : "AVAILABLE"}
                  </span>
                </div>

                {/* Title & Criteria */}
                <div className="pt-4 space-y-1.5">
                  <h4 className="font-serif text-xl font-bold text-white">
                    {card.rankTitle}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed min-h-[44px]">
                    {card.criteria}
                  </p>
                </div>

                {/* Discount Infographic Box */}
                <div className="my-5 p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Merit Discount:</span>
                    <span className="font-bold text-lg text-gold-400 font-mono">
                      {card.discountPercentage}% OFF
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs pt-1.5 border-t border-white/10">
                    <span className="text-slate-400">Anchor Reference:</span>
                    <span className="line-through text-slate-500 font-mono">
                      {formatINR(card.anchorBasePriceINR)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs pt-1.5 border-t border-white/10">
                    <span className="text-white font-semibold">
                      Student Payable:
                    </span>
                    <span className="font-mono text-base font-bold text-emerald-400">
                      {formatINR(card.studentPayableINR)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="text-[11px] text-slate-400 border-t border-white/10 pt-3 flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                <span className="truncate">{card.applicableServices}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Disclaimers & Infographic Separation Rules on White */}
      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
        <p className="font-bold text-navy-950 flex items-center space-x-2">
          <ShieldCheck className="w-4 h-4 text-gold-600" />
          <span>Recognition Card Protocol & Merit Separation:</span>
        </p>
        <p>
          • Exactly 10 recognition cards are allocated for Octopus Tank: 3 Gold cards (1st, 2nd, 3rd place) and 7 Silver/Bronze cards distributed by stage performance.
        </p>
        <p>
          • Discounts apply specifically to the 30-Day Premium Mentorship anchor (₹75,000 reference base).
        </p>
        <p>
          • Independent judging policy: Purchasing advisory or prior mentorship has zero influence on competition outcomes.
        </p>
      </div>
    </div>
  );
}
