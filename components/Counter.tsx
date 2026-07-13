"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function Counter({
  to, prefix = "", suffix = "", className,
}: { to: number; prefix?: string; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 55, damping: 20 });

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current)
        ref.current.textContent = prefix + Math.round(v).toLocaleString("pt-BR") + suffix;
    });
  }, [spring, prefix, suffix]);

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
}
