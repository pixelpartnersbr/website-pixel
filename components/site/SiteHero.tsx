"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Counter from "../Counter";
import Starfield from "../fx/Starfield";
import { SITE, STACK_IMG } from "./config";

const parent = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const child = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } },
};

export default function SiteHero() {
  const { scrollYProgress } = useScroll();
  const imgY = useTransform(scrollYProgress, [0, 0.25], [0, 60]);
  return (
    <section
      className="relative overflow-hidden pb-20 pt-[150px]"
      style={{
        background:
          "radial-gradient(900px 500px at 85% 0%, rgba(10,76,130,.35), transparent 60%), radial-gradient(700px 420px at 0% 100%, rgba(5,58,102,.5), transparent 65%), #021627",
      }}
    >
      <Starfield density={80} />
      <div className="beam" aria-hidden />
      <div className="wrap relative grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div variants={parent} initial="hidden" animate="show" className="max-w-[820px]">
          <motion.span variants={child} className="eyebrow">
            Tecnologia · Marketing · Desde 2016
          </motion.span>
          <motion.h1
            variants={child}
            className="mb-6 font-display text-[clamp(36px,5vw,72px)] font-extrabold leading-[1.05] tracking-[-0.025em]"
          >
            Precisão digital.
            <br />
            <span className="text-amber">Parceria verdadeira.</span>
          </motion.h1>
          <motion.p variants={child} className="mb-9 max-w-[560px] text-[17.5px] text-dim">
            Somos especialistas em transformar presença digital em crescimento mensurável. Tecnologia
            própria, tráfego pago certificado e a plataforma Pixel Commerce — tudo sob o mesmo teto.
          </motion.p>
          <motion.div variants={child} className="flex flex-wrap gap-3.5">
            <a href="/#contato" className="btn-amber">Fale com um Especialista</a>
            <a href="/#servicos" className="btn-ghost">Ver Serviços</a>
          </motion.div>
          <motion.ul variants={child} className="mt-10 flex flex-wrap gap-8 border-t border-line pt-7">
            <li className="text-[13px] text-dim">
              <Counter to={SITE.stats.clientes} suffix="+" className="block font-display text-2xl font-extrabold tracking-tight text-amber" />
              clientes atendidos
            </li>
            <li className="text-[13px] text-dim">
              <Counter to={SITE.stats.midiaMi} prefix="R$ " suffix=" mi+" className="block font-display text-2xl font-extrabold tracking-tight text-amber" />
              em mídia gerenciada
            </li>
            <li className="text-[13px] text-dim">
              <Counter to={SITE.stats.anos} suffix="+" className="block font-display text-2xl font-extrabold tracking-tight text-amber" />
              anos de mercado
            </li>
            <li className="text-[13px] text-dim">
              <span className="block font-display text-2xl font-extrabold tracking-tight text-amber">Google · Meta</span>
              parceiros certificados
            </li>
          </motion.ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative hidden justify-center lg:flex"
          style={{ y: imgY }}
        >
          <div className="absolute inset-8 rounded-full bg-amber/15 blur-[90px]" aria-hidden />
          <img
            src={STACK_IMG}
            alt="Render 3D das seis camadas da plataforma Pixel Commerce"
            className="relative w-full max-w-[520px] rounded-3xl border border-white/10 shadow-[0_50px_120px_rgba(0,0,0,.55)]"
            loading="eager"
          />
        </motion.div>
      </div>
    </section>
  );
}
