"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const TEXT = "Nós cansamos de remendar. Então construímos a nossa própria plataforma.";

function Word({ children, range, progress }: { children: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.28em] inline-block">
      {children}
    </motion.span>
  );
}

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = TEXT.split(" ");
  return (
    <section className="bg-amber py-28 text-navy-950">
      <div className="wrap" ref={ref}>
        <span className="eyebrow !text-navy-950 before:!bg-navy-950">Ato 2 · a decisão</span>
        <h2 className="max-w-[900px] font-display text-[clamp(28px,4vw,56px)] font-black leading-[1.08] tracking-[-0.025em]">
          {words.map((w, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
              {w}
            </Word>
          ))}
        </h2>
        <p className="mt-6 max-w-[720px] text-[17.5px] font-medium text-navy-900">
          Analytics, antifraude, CRM, WhatsApp, provador virtual, kits de produto — tudo desenvolvido
          internamente pela Pixel Partners, com um único padrão de código, rodando na nossa própria
          infraestrutura. É por isso que respondemos por cada linha que está na sua loja.
        </p>
      </div>
    </section>
  );
}
