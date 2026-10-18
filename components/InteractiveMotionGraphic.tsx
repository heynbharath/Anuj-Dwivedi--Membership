"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sparkles, Compass, Zap, RotateCcw, Activity } from "lucide-react";

export default function InteractiveMotionGraphic() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mode, setMode] = useState<"octopus" | "neural" | "orbital">("octopus");
  const [intensity, setIntensity] = useState<number>(1);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = 460);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 460;
    };
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
          active: true,
        };
      }
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("touchmove", handleTouchMove);

    // Particle nodes for neural/orbital mesh
    const particleCount = 54;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      angle: number;
      speed: number;
      dist: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.4,
        vy: (Math.random() - 0.5) * 1.4,
        radius: Math.random() * 2.5 + 1.5,
        angle: (i / particleCount) * Math.PI * 2,
        speed: 0.005 + Math.random() * 0.008,
        dist: 60 + Math.random() * 150,
      });
    }

    let t = 0;

    const render = () => {
      t += 0.02 * intensity;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const mouse = mouseRef.current;

      // Mode: Octopus Kinetic Tentacles
      if (mode === "octopus") {
        const arms = 8;
        for (let i = 0; i < arms; i++) {
          const baseAngle = (i / arms) * Math.PI * 2 + t * 0.15;
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);

          let currentX = centerX;
          let currentY = centerY;

          const segments = 20;
          for (let j = 1; j <= segments; j++) {
            const segDist = j * 11;
            let wave = Math.sin(t * 1.8 + j * 0.35 + i) * (j * 3.2);

            // Reactive cursor gravitational bend
            if (mouse.active) {
              const dx = mouse.x - currentX;
              const dy = mouse.y - currentY;
              const distToMouse = Math.sqrt(dx * dx + dy * dy);
              if (distToMouse < 220) {
                const pullFactor = (1 - distToMouse / 220) * 15;
                wave += pullFactor * Math.sin(j * 0.5);
              }
            }

            const angle = baseAngle + (wave * Math.PI) / 180;
            const targetX = centerX + Math.cos(angle) * segDist;
            const targetY = centerY + Math.sin(angle) * segDist;

            ctx.quadraticCurveTo(
              currentX,
              currentY,
              (currentX + targetX) / 2,
              (currentY + targetY) / 2
            );
            currentX = targetX;
            currentY = targetY;
          }

          // Arm styling
          const grad = ctx.createLinearGradient(centerX, centerY, currentX, currentY);
          grad.addColorStop(0, "rgba(217, 170, 67, 0.9)");
          grad.addColorStop(0.5, "rgba(240, 213, 138, 0.45)");
          grad.addColorStop(1, "rgba(7, 17, 31, 0.0)");

          ctx.strokeStyle = grad;
          ctx.lineWidth = Math.max(1, 4.5 - i * 0.15);
          ctx.stroke();

          // End node spark
          ctx.beginPath();
          ctx.arc(currentX, currentY, 3.5, 0, Math.PI * 2);
          ctx.fillStyle = "#F0D58A";
          ctx.shadowColor = "#D9AA43";
          ctx.shadowBlur = 14;
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        // Central glowing core
        ctx.beginPath();
        ctx.arc(centerX, centerY, 18 + Math.sin(t * 2) * 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(217, 170, 67, 0.2)";
        ctx.fill();
        ctx.strokeStyle = "rgba(217, 170, 67, 0.85)";
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(centerX, centerY, 7, 0, Math.PI * 2);
        ctx.fillStyle = "#07111F";
        ctx.fill();
        ctx.strokeStyle = "#D9AA43";
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Mode: Neural Mesh & Orbital Core
      if (mode === "neural" || mode === "orbital") {
        particles.forEach((p, idx) => {
          if (mode === "orbital") {
            p.angle += p.speed * intensity;
            p.x = centerX + Math.cos(p.angle) * p.dist;
            p.y = centerY + Math.sin(p.angle * 1.5) * (p.dist * 0.7);
          } else {
            p.x += p.vx * intensity;
            p.y += p.vy * intensity;

            // Bounce off edges
            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            // Cursor interaction
            if (mouse.active) {
              const dx = p.x - mouse.x;
              const dy = p.y - mouse.y;
              const d = Math.sqrt(dx * dx + dy * dy);
              if (d < 110) {
                p.x += (dx / d) * 2;
                p.y += (dy / d) * 2;
              }
            }
          }

          // Node draw
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(217, 170, 67, 0.9)";
          ctx.fill();

          // Connect nearby particles
          for (let j = idx + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 100) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(217, 170, 67, ${0.4 * (1 - dist / 100)})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }

          // Mouse link if active
          if (mouse.active) {
            const mdx = p.x - mouse.x;
            const mdy = p.y - mouse.y;
            const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
            if (mdist < 120) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.strokeStyle = `rgba(240, 213, 138, ${0.6 * (1 - mdist / 120)})`;
              ctx.lineWidth = 1.2;
              ctx.stroke();
            }
          }
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, [mode, intensity]);

  return (
    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-navy-950 via-[#0B1524] to-navy-950 border border-gold-500/30 p-6 sm:p-8 shadow-2xl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-white/10 gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 text-[10px] font-mono uppercase tracking-[0.2em] text-gold-400 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KINETIC MOTION ENGINE • ARCHZOS & CIRCLE13</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-white mt-1">
            Execution Velocity in Motion
          </h3>
          <p className="text-xs text-slate-400 font-light mt-0.5">
            Hover or drag on canvas to interact with algorithmic vectors in real-time.
          </p>
        </div>

        {/* Mode Selector Controls */}
        <div className="flex items-center space-x-2 bg-black/40 p-1.5 rounded-xl border border-white/10 text-xs">
          <button
            onClick={() => setMode("octopus")}
            className={`px-3 py-1 rounded-lg font-mono transition-all ${
              mode === "octopus"
                ? "bg-gold-500 text-navy-950 font-bold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            8-Arm Wave
          </button>
          <button
            onClick={() => setMode("neural")}
            className={`px-3 py-1 rounded-lg font-mono transition-all ${
              mode === "neural"
                ? "bg-gold-500 text-navy-950 font-bold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Neural Mesh
          </button>
          <button
            onClick={() => setMode("orbital")}
            className={`px-3 py-1 rounded-lg font-mono transition-all ${
              mode === "orbital"
                ? "bg-gold-500 text-navy-950 font-bold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Orbital Core
          </button>
        </div>
      </div>

      {/* Canvas */}
      <div className="relative w-full h-[360px] sm:h-[420px] flex items-center justify-center">
        <canvas ref={canvasRef} className="w-full h-full cursor-crosshair" />

        {/* Center overlay pill */}
        <div className="absolute pointer-events-none text-center space-y-1">
          <div className="text-[10px] uppercase font-mono tracking-widest text-gold-400 font-bold bg-black/80 px-3 py-1 rounded-full border border-gold-500/40 inline-block backdrop-blur-md">
            {mode === "octopus" ? "8 ARMS • INFINITE IDEAS" : mode === "neural" ? "SYNAPSE NETWORK" : "ORBITAL VECTOR"}
          </div>
          <div className="text-[11px] text-slate-300 font-light">
            Continuous Reactive Vector Dynamics
          </div>
        </div>
      </div>

      {/* Bottom telemetry footer */}
      <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
        <div className="flex items-center space-x-2 font-mono text-[11px]">
          <Activity className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
          <span>
            Mode: <strong className="text-gold-400">{mode.toUpperCase()}</strong> | 60FPS Reactive Physics | Cursor Linked
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <span>Simulation Speed:</span>
          <button
            onClick={() => setIntensity((prev) => (prev === 1 ? 1.8 : prev === 1.8 ? 0.6 : 1))}
            className="px-2.5 py-1 rounded bg-white/10 hover:bg-gold-500 hover:text-navy-950 text-white font-mono text-[10px] transition-colors"
          >
            {intensity}x Velocity
          </button>
        </div>
      </div>
    </div>
  );
}
