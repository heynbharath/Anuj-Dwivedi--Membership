import React from "react";
import { RECOGNITION_CARDS } from "@/lib/config";
import { formatINR } from "@/lib/utils";
import { Award, Percent, ShieldCheck } from "lucide-react";

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
              className={`relative rounded-xl overflow-hidden p-6 border transition-all duration-300 hover:scale-[1.02] shadow-xl ${card.colorScheme.bg} ${card.colorScheme.border}`}
            >
              {/* Card Header Strip */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <Award
                    className="w-5 h-5"
                    style={{ color: card.colorScheme.accent }}
                  />
                  <span
                    className="text-xs uppercase tracking-widest font-bold"
                    style={{ color: card.colorScheme.accent }}
                  >
                    {card.tier} CARD
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-mono px-2 py-0.5 rounded bg-black/40 border border-white/5">
                  {card.quantity} {card.quantity === 1 ? "CARD ISSUED" : "CARDS ISSUED"}
                </span>
              </div>

              {/* Title & Criteria */}
              <div className="pt-4 space-y-2">
                <h4 className="font-serif text-lg font-bold text-ivory-100">
                  {card.rankTitle}
                </h4>
                <p className="text-xs text-silver-400 leading-relaxed min-h-[38px]">
                  {card.criteria}
                </p>
              </div>

              {/* Discount & Math Calculation */}
              <div className="my-5 p-4 rounded-lg bg-black/40 border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Judged Merit Discount</span>
                  <span className="font-bold text-base text-gold-400">
                    {card.discountPercentage}% OFF
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs pt-1 border-t border-white/5">
                  <span className="text-slate-400">Anchor Base Reference</span>
                  <span className="line-through text-slate-500 font-mono">
                    {formatINR(card.anchorBasePriceINR)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs pt-1 border-t border-white/10">
                  <span className="text-ivory-100 font-semibold">
                    Winner Payment Fee
                  </span>
                  <span className="font-mono text-sm font-bold text-emerald-400">
                    {formatINR(card.studentPayableINR)}
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="text-[11px] text-slate-400 border-t border-white/10 pt-3">
                <p className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                  <span>{card.applicableServices}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Disclaimers & Infographic Separation Rules */}
      <div className="p-4 rounded-lg bg-navy-950 border border-gold-500/20 text-xs text-silver-400 space-y-1.5">
        <p className="font-semibold text-ivory-100">
          Recognition Card Governance Protocol:
        </p>
        <p>
          1. Exactly 10 recognition cards are structured for Octopus Tank: 3 Gold cards (1st, 2nd, 3rd place) and 7 additional Silver and Bronze cards distributed based on judged stage performance.
        </p>
        <p>
          2. The discounts apply specifically to the 30-Day Premium Mentorship programme against its ₹75,000 reference anchor. Cards are non-transferable and do not apply retroactively or universally across all services.
        </p>
        <p>
          3. Merit separation rule: Participating in mentorship or booking prior services has zero bearing on hackathon judging or prize allocations.
        </p>
      </div>
    </div>
  );
}
