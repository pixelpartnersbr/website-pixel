"use client";
import { useEffect, useRef } from "react";

export default function Starfield({ density = 70 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let w = 0, h = 0, raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    type Star = { x: number; y: number; r: number; v: number; tw: number; ph: number };
    let stars: Star[] = [];

    const resize = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      w = rect.width; h = rect.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      canvas.style.width = `${w}px`; canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = Array.from({ length: density }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.4 + Math.random() * 1.1,
        v: 0.03 + Math.random() * 0.08,
        tw: 0.4 + Math.random() * 0.6,
        ph: Math.random() * Math.PI * 2,
      }));
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        s.y -= s.v;
        if (s.y < -2) { s.y = h + 2; s.x = Math.random() * w; }
        const a = 0.25 + 0.5 * Math.abs(Math.sin(t / 1800 * s.tw + s.ph));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 216, 120, ${a * 0.55})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, [density]);
  return <canvas ref={ref} aria-hidden className="pointer-events-none absolute inset-0" />;
}
