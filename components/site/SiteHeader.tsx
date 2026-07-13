"use client";
import { motion, useScroll, useSpring } from "framer-motion";

const links = [
  ["/#sobre", "Sobre"],
  ["/#servicos", "Serviços"],
  ["/plataforma", "Plataforma"],
  ["/whatsapp", "WhatsApp"],
  ["/planos", "Planos"],
  ["/#contato", "Contato"],
];

export default function SiteHeader() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-navy-950/80 backdrop-blur-xl">
      <motion.div className="absolute inset-x-0 top-0 h-[2px] origin-left bg-amber" style={{ scaleX }} />
      <div className="wrap flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 font-display text-[17px] font-extrabold tracking-tight">
          <img src="/images/logo-pixel-partners.png" alt="" aria-hidden className="h-11 w-11" />
          Pixel Partners
          <small className="ml-0.5 hidden font-mono text-[10px] font-normal uppercase tracking-[0.08em] text-dim sm:inline">
            code · connect · create
          </small>
        </a>
        <ul className="hidden gap-7 md:flex">
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href} className="text-[13.5px] text-dim transition-colors hover:text-ink">{label}</a>
            </li>
          ))}
        </ul>
        <a href="/#contato" className="rounded-lg bg-amber px-[18px] py-[9px] font-display text-[13px] font-bold text-navy-950 transition-all hover:-translate-y-px hover:shadow-[0_6px_18px_rgba(255,183,0,.28)]">
          Fale Conosco
        </a>
      </div>
    </header>
  );
}
