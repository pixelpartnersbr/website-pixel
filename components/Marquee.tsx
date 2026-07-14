"use client";
import { motion } from "framer-motion";

const items = [
  "PrimePress", "QueueGuard", "Order Shield", "Product Shield", "Pixel Reports",
  "Pixel CRM", "Canal WhatsApp", "Provador de Tamanho", "Pixel Conjuntos",
  "Filtro Inteligente", "Carrinhos Personalizados", "Fidelização + Cashback", "Módulo Atacadista", "Código de Vendedor", "Videocommerce",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-line bg-navy-900/40 py-4" aria-hidden>
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 38, ease: "linear", repeat: Infinity }}
      >
        {row.map((m, i) => (
          <span key={i} className="flex items-center gap-10 font-mono text-xs uppercase tracking-[0.16em] text-dim">
            {m} <span className="text-amber">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
