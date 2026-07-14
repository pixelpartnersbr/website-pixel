"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import MobileNav from "./MobileNav";

const links = [
  ["/plataforma#problema", "O problema"],
  ["/plataforma#numeros", "Números"],
  ["/plataforma#plataforma", "A plataforma"],
  ["/plataforma#queueguard", "QueueGuard"],
  ["/planos", "Planos"],
  ["/", "Site Pixel Partners"],
];

export default function Header() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-navy-950/80 backdrop-blur-xl">
      <motion.div className="absolute inset-x-0 top-0 h-[2px] origin-left bg-amber" style={{ scaleX }} />
      <div className="wrap flex h-16 items-center justify-between">
        <a href="/plataforma" className="flex items-center">
          <img src="/images/logo-pixel-commerce.png" alt="Pixel Commerce by Pixel Partners" className="h-9 w-auto" />
        </a>
        <ul className="hidden gap-7 xl:flex">
          {links.map(([href, label]) => (
            <li key={href}>
              <a href={href} className="text-[13.5px] text-dim transition-colors hover:text-ink">{label}</a>
            </li>
          ))}
        </ul>
        <a href="#contato" className="hidden rounded-lg bg-amber xl:inline-block px-[18px] py-[9px] font-display text-[13px] font-bold text-navy-950 transition-all hover:-translate-y-px hover:shadow-[0_6px_18px_rgba(255,183,0,.28)]">
          Falar com a Pixel
        </a>
        <MobileNav links={links} cta={["#contato", "Falar com a Pixel"]} />
      </div>
    </header>
  );
}
