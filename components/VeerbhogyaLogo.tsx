"use client";

import React from "react";
import Image from "next/image";

export type VeerbhogyaVariant =
  | "symbol_color"
  | "symbol_gold"
  | "symbol_white"
  | "symbol_white_gold"
  | "symbol_black"
  | "symbol_silver"
  | "symbol_bronze"
  | "lockup_color"
  | "lockup_gold_on_black"
  | "lockup_reverse_on_black"
  | "lockup_on_cream"
  | "lockup_mono_black"
  | "animated_ascent"
  | "token_seal_gold"
  | "token_seal_silver"
  | "token_seal_bronze";

interface VeerbhogyaLogoProps {
  variant?: VeerbhogyaVariant;
  className?: string;
  size?: number | string;
  width?: number;
  height?: number;
  title?: string;
}

// Authentic SVG vector path data from Veerbhogya Logo Pack
const PATH_OUTER =
  "M 736.0 16.0 L 619.0 17.0 L 577.0 19.0 L 570.0 21.0 L 555.0 32.0 L 497.0 107.0 L 470.0 93.0 L 439.0 85.0 L 372.0 79.0 L 308.0 69.0 L 341.0 81.0 L 390.0 93.0 L 436.0 108.0 L 453.0 118.0 L 463.0 128.0 L 468.0 139.0 L 468.0 147.0 L 463.0 158.0 L 449.0 172.0 L 414.0 193.0 L 347.0 226.0 L 408.0 245.0 L 443.0 260.0 L 458.0 269.0 L 473.0 283.0 L 480.0 298.0 L 480.0 313.0 L 470.0 333.0 L 458.0 347.0 L 415.0 387.0 L 383.0 420.0 L 371.0 435.0 L 353.0 465.0 L 434.0 464.0 L 642.0 159.0 Z M 28.0 16.0 L 285.0 435.0 L 292.0 416.0 L 309.0 394.0 L 377.0 336.0 L 387.0 325.0 L 391.0 317.0 L 391.0 307.0 L 380.0 293.0 L 356.0 279.0 L 281.0 252.0 L 221.0 235.0 L 218.0 232.0 L 357.0 166.0 L 374.0 154.0 L 377.0 149.0 L 376.0 140.0 L 369.0 134.0 L 353.0 127.0 L 256.0 95.0 L 240.0 88.0 L 202.0 29.0 L 188.0 20.0 L 147.0 17.0 Z";

const PATH_INNER =
  "M 221.0 57.0 L 232.0 76.0 L 241.0 88.0 L 264.0 97.0 L 360.0 129.0 L 372.0 135.0 L 378.0 143.0 L 377.0 151.0 L 369.0 159.0 L 355.0 168.0 L 309.0 191.0 L 218.0 233.0 L 296.0 256.0 L 339.0 271.0 L 360.0 280.0 L 376.0 289.0 L 388.0 300.0 L 391.0 305.0 L 392.0 316.0 L 387.0 326.0 L 362.0 350.0 L 316.0 388.0 L 305.0 399.0 L 294.0 414.0 L 288.0 426.0 L 286.0 437.0 L 300.0 460.0 L 300.0 450.0 L 303.0 439.0 L 309.0 426.0 L 318.0 413.0 L 352.0 378.0 L 388.0 347.0 L 403.0 332.0 L 412.0 318.0 L 413.0 303.0 L 409.0 295.0 L 401.0 287.0 L 378.0 273.0 L 344.0 259.0 L 283.0 239.0 L 260.0 233.0 L 256.0 230.0 L 338.0 190.0 L 371.0 172.0 L 390.0 158.0 L 396.0 148.0 L 396.0 139.0 L 389.0 130.0 L 371.0 120.0 L 266.0 83.0 L 238.0 69.0 Z";

// Official Palette Constants from Logo Pack
export const VEERBHOGYA_COLORS = {
  gold: "#C88932",
  goldDark: "#A86D22",
  goldLight: "#E5A852",
  obsidian: "#111111",
  cream: "#F6EFE3",
  white: "#FFFFFF",
  silver: "#C7CBD1",
  bronze: "#A96F43",
};

export default function VeerbhogyaLogo({
  variant = "symbol_color",
  className = "",
  size,
  width,
  height,
  title = "Veerbhogya Vasundhara",
}: VeerbhogyaLogoProps) {
  // Dimension handling
  const computedWidth = width || (typeof size === "number" ? size : undefined);
  const computedHeight = height || (typeof size === "number" ? size : undefined);

  // 1. Standalone SVG file links for complex lockups & animated GIFs
  if (variant === "animated_ascent") {
    return (
      <div className={`relative inline-block ${className}`} style={{ width: computedWidth, height: computedHeight }}>
        <Image
          src="/logos/veerbhogya/svg/Veerbhogya_ANIMATED_ascent_lockup.svg"
          alt={title}
          width={width || 320}
          height={height || 230}
          className="w-full h-auto object-contain"
          unoptimized
        />
      </div>
    );
  }

  if (variant === "lockup_color") {
    return (
      <div className={`relative inline-block ${className}`} style={{ width: computedWidth, height: computedHeight }}>
        <Image
          src="/logos/veerbhogya/svg/Veerbhogya_lockup_color.svg"
          alt={title}
          width={width || 280}
          height={height || 200}
          className="w-full h-auto object-contain"
        />
      </div>
    );
  }

  if (variant === "lockup_gold_on_black") {
    return (
      <div className={`relative inline-block ${className}`} style={{ width: computedWidth, height: computedHeight }}>
        <Image
          src="/logos/veerbhogya/svg/Veerbhogya_lockup_gold_on_black.svg"
          alt={title}
          width={width || 280}
          height={height || 200}
          className="w-full h-auto object-contain"
        />
      </div>
    );
  }

  if (variant === "lockup_reverse_on_black") {
    return (
      <div className={`relative inline-block ${className}`} style={{ width: computedWidth, height: computedHeight }}>
        <Image
          src="/logos/veerbhogya/svg/Veerbhogya_lockup_reverse_on_black.svg"
          alt={title}
          width={width || 280}
          height={height || 200}
          className="w-full h-auto object-contain"
        />
      </div>
    );
  }

  if (variant === "lockup_on_cream") {
    return (
      <div className={`relative inline-block ${className}`} style={{ width: computedWidth, height: computedHeight }}>
        <Image
          src="/logos/veerbhogya/svg/Veerbhogya_lockup_on_cream.svg"
          alt={title}
          width={width || 280}
          height={height || 200}
          className="w-full h-auto object-contain"
        />
      </div>
    );
  }

  if (variant === "lockup_mono_black") {
    return (
      <div className={`relative inline-block ${className}`} style={{ width: computedWidth, height: computedHeight }}>
        <Image
          src="/logos/veerbhogya/svg/Veerbhogya_lockup_mono_black.svg"
          alt={title}
          width={width || 280}
          height={height || 200}
          className="w-full h-auto object-contain"
        />
      </div>
    );
  }

  // 2. Token Seal Badges (Specifically engineered for Gold, Silver, and Bronze physical cards and admission passes)
  if (
    variant === "token_seal_gold" ||
    variant === "token_seal_silver" ||
    variant === "token_seal_bronze"
  ) {
    const isGold = variant === "token_seal_gold";
    const isSilver = variant === "token_seal_silver";
    const isBronze = variant === "token_seal_bronze";

    const outerFill = isGold
      ? "#C88932"
      : isSilver
      ? "#C7CBD1"
      : "#A96F43";
    const innerFill = isGold
      ? "#E5A852"
      : isSilver
      ? "#E2E5E9"
      : "#D48B57";
    const ringBorder = isGold
      ? "rgba(200, 137, 50, 0.4)"
      : isSilver
      ? "rgba(199, 203, 209, 0.4)"
      : "rgba(169, 111, 67, 0.4)";
    const bgGradient = isGold
      ? "from-amber-100 via-amber-50 to-white"
      : isSilver
      ? "from-slate-100 via-slate-50 to-white"
      : "from-amber-100/60 via-orange-50/50 to-white";

    return (
      <div
        className={`relative inline-flex items-center justify-center rounded-full p-2.5 shadow-md bg-gradient-to-br ${bgGradient} border ${className}`}
        style={{
          borderColor: ringBorder,
          width: computedWidth || 64,
          height: computedHeight || 64,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 770 500"
          className="w-full h-full object-contain filter drop-shadow-xs"
          role="img"
          aria-label={title}
        >
          <title>{title}</title>
          <g transform="translate(10 8)">
            <path d={PATH_OUTER} fill={outerFill} />
            <path d={PATH_INNER} fill={innerFill} />
          </g>
        </svg>
      </div>
    );
  }

  // 3. Inline Vector Symbol Variants (Clean, responsive, scalable SVG)
  let outerFill = VEERBHOGYA_COLORS.obsidian;
  let innerFill = VEERBHOGYA_COLORS.gold;

  if (variant === "symbol_gold") {
    outerFill = VEERBHOGYA_COLORS.gold;
    innerFill = VEERBHOGYA_COLORS.goldLight;
  } else if (variant === "symbol_white") {
    outerFill = VEERBHOGYA_COLORS.white;
    innerFill = VEERBHOGYA_COLORS.white;
  } else if (variant === "symbol_white_gold") {
    outerFill = VEERBHOGYA_COLORS.white;
    innerFill = VEERBHOGYA_COLORS.gold;
  } else if (variant === "symbol_black") {
    outerFill = VEERBHOGYA_COLORS.obsidian;
    innerFill = VEERBHOGYA_COLORS.obsidian;
  } else if (variant === "symbol_silver") {
    outerFill = "#8E95A0";
    innerFill = VEERBHOGYA_COLORS.silver;
  } else if (variant === "symbol_bronze") {
    outerFill = "#7E4E2C";
    innerFill = VEERBHOGYA_COLORS.bronze;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 770 500"
      className={`inline-block ${className}`}
      style={{ width: computedWidth, height: computedHeight }}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <g transform="translate(10 8)">
        <path d={PATH_OUTER} fill={outerFill} />
        <path d={PATH_INNER} fill={innerFill} />
      </g>
    </svg>
  );
}
