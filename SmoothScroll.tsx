"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Reveal from "./Reveal";
import { TRAILS_IMG, waLink } from "./site/config";

export default function CTA() {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 16 });
  const sy = useSpring(y, { stiffness: 180, damping: 16 });

  function onMove(e: React.MouseEvent) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
  }
  function onLeave() { x.set(0); y.set(0); }

  return (
    <section
      id="contato"
      className="relative overflow-hidden py-[120px] text-center"
      style={{ background: "radial-gradient(800px 400px at 50% 0%, rgba(255,183,0,.12), transparent 60%), #042A4C" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-bottom opacity-[.55] [mask-image:linear-gradient(to_top,black_15%,transparent_85%)]"
        style={{ backgroundImage: `url(${TRAILS_IMG})` }}
      />
      <div className="beam" aria-hidden />
      <div className="wrap relative">
        <Reveal>
          <span className="eyebrow justify-center">Próximo passo</span>
          <h2 className="mx-auto mb-5 max-w-[760px] font-display text-[clamp(28px,4vw,54px)] font-black leading-[1.1] tracking-[-0.025em]">
            Sua loja merece mais do que uma colcha de retalhos.
          </h2>
          <p className="mx-auto mb-10 max-w-[560px] text-[16.5px] text-dim">
            Conte para a gente como sua operação funciona hoje. Em uma conversa, mostramos o que o Pixel
            Commerce mudaria — camada por camada.
          </p>
          <motion.a
            ref={ref}
            href={waLink("Olá! Quero minha loja rodando em Pixel Commerce.")}
            target="_blank"
            rel="noopener"
            className="btn-amber inline-block !px-10 !py-4 !text-base"
            style={{ x: sx, y: sy }}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
          >
            Agendar diagnóstico gratuito
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
