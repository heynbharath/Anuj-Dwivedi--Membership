"use client";

import React, { useEffect, useState, useRef } from "react";

interface OctopusStageProps {
  clip: "hero" | "float" | "wave" | "eyes" | "intro";
  className?: string;
  showRings?: boolean;
}

export default function OctopusStage({
  clip,
  className = "",
  showRings = true,
}: OctopusStageProps) {
  const [isSafariOrIos, setIsSafariOrIos] = useState<boolean | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [heroLoopActive, setHeroLoopActive] = useState(false);
  const introVideoRef = useRef<HTMLVideoElement>(null);
  const loopVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check motion preference
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPrefersReducedMotion(true);
      return;
    }

    // Detect Safari or iOS for alpha WebM compatibility
    const ua = navigator.userAgent;
    const isIos = /iP(hone|ad|od)/.test(ua);
    const isSafari = /Safari/.test(ua) && !/Chrome|Chromium|Android|Edg|OPR/.test(ua);
    setIsSafariOrIos(isIos || isSafari);
  }, []);

  // Handle hero intro -> loop handover for non-safari video
  useEffect(() => {
    if (clip !== "hero" || isSafariOrIos !== false) return;

    const intro = introVideoRef.current;
    const loop = loopVideoRef.current;
    if (!intro || !loop) return;

    let handedOver = false;
    const handleTransition = () => {
      if (handedOver) return;
      handedOver = true;
      setHeroLoopActive(true);
      loop.play().catch(() => {});
    };

    intro.addEventListener("ended", handleTransition);
    intro.addEventListener("error", handleTransition);
    intro.play().catch(handleTransition);

    return () => {
      intro.removeEventListener("ended", handleTransition);
      intro.removeEventListener("error", handleTransition);
    };
  }, [clip, isSafariOrIos]);

  // Handle play/pause via IntersectionObserver for loop videos
  useEffect(() => {
    if (isSafariOrIos !== false) return;
    const video = loopVideoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [isSafariOrIos, heroLoopActive]);

  return (
    <div
      className={`relative w-full aspect-[520/484] flex items-center justify-center select-none ${className}`}
      role="img"
      aria-label={`Octopus Tank animation (${clip})`}
    >
      {/* Ambient Radial Soft Glow */}
      <div
        className="absolute inset-[6%] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(243, 244, 246, 0.9) 0%, rgba(249, 250, 251, 0.5) 45%, rgba(255, 255, 255, 0) 70%)",
        }}
      />

      {/* Geometric Decorative Rings */}
      {showRings && (
        <>
          <div className="absolute inset-[4%_6%] border border-neutral-200/80 rounded-full pointer-events-none" />
          <div className="absolute inset-[-2%_0%] border border-neutral-100 rounded-full pointer-events-none" />
        </>
      )}

      {/* Reduced motion or initial render fallback */}
      {prefersReducedMotion ? (
        <img
          src="/octopus-assets/octopus.png"
          alt="Octopus illustration"
          className="w-full h-full object-contain pointer-events-none"
        />
      ) : isSafariOrIos === true ? (
        /* Transparent GIF for Safari & iOS */
        <img
          src={`/octopus-assets/gif/octopus_${clip}.gif`}
          alt="Octopus animation"
          className="w-full h-full object-contain pointer-events-none"
          loading="eager"
        />
      ) : isSafariOrIos === false ? (
        /* Transparent WebM for Chromium, Firefox, Android */
        clip === "hero" ? (
          <>
            <video
              ref={loopVideoRef}
              muted
              loop
              playsInline
              preload="auto"
              className={`absolute inset-0 w-full h-full object-contain pointer-events-none transition-opacity duration-500 ${
                heroLoopActive ? "opacity-100" : "opacity-0"
              }`}
            >
              <source src="/octopus-assets/webm/octopus_hero.webm" type="video/webm" />
            </video>
            <video
              ref={introVideoRef}
              muted
              playsInline
              autoPlay
              preload="auto"
              className={`absolute inset-0 w-full h-full object-contain pointer-events-none transition-opacity duration-300 ${
                heroLoopActive ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              <source src="/octopus-assets/webm/octopus_intro.webm" type="video/webm" />
            </video>
          </>
        ) : (
          <video
            ref={loopVideoRef}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            poster="/octopus-assets/octopus.png"
            className="w-full h-full object-contain pointer-events-none"
          >
            <source src={`/octopus-assets/webm/octopus_${clip}.webm`} type="video/webm" />
          </video>
        )
      ) : (
        /* SSR placeholder */
        <img
          src="/octopus-assets/octopus.png"
          alt="Octopus illustration"
          className="w-full h-full object-contain pointer-events-none opacity-80"
        />
      )}
    </div>
  );
}
