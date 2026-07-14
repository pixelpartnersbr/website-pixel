"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNav({
  links, cta,
}: { links: (readonly [string, string])[] | string[][]; cta: [string, string] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-line"
      >
        <span className="sr-only">Menu</span>
        <motion.span animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }} className="absolute h-[2px] w-5 rounded bg-ink" />
        <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="absolute h-[2px] w-5 rounded bg-ink" />
        <motion.span animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }} className="absolute h-[2px] w-5 rounded bg-ink" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute inset-x-0 top-16 border-b border-line bg-navy-950 shadow-[0_30px_60px_rgba(0,0,0,.5)]"
          >
            <ul className="wrap flex flex-col py-2">
              {links.map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/[.05] py-3.5 font-display text-[15px] font-semibold text-ink"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a href={cta[0]} onClick={() => setOpen(false)} className="btn-amber my-4 block text-center">
                  {cta[1]}
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
