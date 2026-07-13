"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

type Plan = {
  name: string; tagline: string; monthly: number | null;
  orders: string; setup: string; featured?: boolean;
  features: string[]; cta: string;
};

const plans: Plan[] = [
  {
    name: "Start", tagline: "Para lojas começando a operar sério",
    monthly: 597, orders: "até 300 pedidos/mês", setup: "R$ 2.497",
    features: [
      "PrimePress: servidor sob medida (compartilhado)",
      "Order Shield + Product Shield",
      "Detecção de carding",
      "Pixel Reports completo",
      "Filtro inteligente de estoque",
      "Suporte via ticket/WhatsApp em até 48h úteis",
    ],
    cta: "Começar com o Start",
  },
  {
    name: "Growth", tagline: "Para lojas em crescimento consistente",
    monthly: 1197, orders: "até 1.500 pedidos/mês", setup: "R$ 2.497", featured: true,
    features: [
      "Tudo do Start",
      "Fatia de servidor garantida",
      "Pixel CRM completo (RFM, segmentos, retenção)",
      "Provador de Tamanho",
      "Pixel Conjuntos + Carrinhos personalizados",
      "Suporte prioritário em até 24h úteis",
    ],
    cta: "Crescer com o Growth",
  },
  {
    name: "Scale", tagline: "Para operações de alto volume",
    monthly: 2497, orders: "até 5.000 pedidos/mês", setup: "R$ 4.997",
    features: [
      "Tudo do Growth",
      "Recursos dedicados de servidor (CCX)",
      "QueueGuard incluso (até 4 eventos/ano)",
      "War-room em datas críticas (Black Friday, lançamentos)",
      "Canal direto com o time técnico",
      "Suporte prioritário em até 8h úteis",
    ],
    cta: "Escalar com o Scale",
  },
  {
    name: "Enterprise", tagline: "Para quem já é referência no segmento",
    monthly: null, orders: "5.000+ pedidos/mês", setup: "sob proposta",
    features: [
      "Tudo do Scale",
      "Servidor 100% dedicado",
      "QueueGuard ilimitado",
      "SLA contratual",
      "Suporte dedicado",
      "Roadmap de módulos priorizado com o seu time",
    ],
    cta: "Falar com a Pixel",
  },
];

const fmt = (n: number) =>
  n.toLocaleString("pt-BR", { minimumFractionDigits: 0 });

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="pb-24 pt-[150px]">
      <div className="wrap">
        <Reveal className="mx-auto mb-10 max-w-[720px] text-center">
          <span className="eyebrow justify-center">Planos Pixel Commerce</span>
          <h1 className="mb-4 font-display text-[clamp(32px,4.2vw,58px)] font-extrabold leading-[1.08] tracking-[-0.025em]">
            Preço fixo. <span className="text-amber">0% de comissão.</span>
            <br />Sem surpresa na fatura.
          </h1>
          <p className="text-[16.5px] text-dim">
            Todos os planos incluem servidor montado sob medida na infraestrutura PrimePress, os módulos
            proprietários da plataforma e suporte de quem escreveu o código. O enquadramento é por volume
            de pedidos — nunca um percentual sobre as suas vendas.
          </p>
        </Reveal>

        <Reveal className="mb-12 flex items-center justify-center gap-4">
          <span className={`text-sm ${!annual ? "font-semibold text-ink" : "text-dim"}`}>Mensal</span>
          <button
            type="button"
            role="switch"
            aria-checked={annual}
            aria-label="Alternar entre cobrança mensal e anual"
            onClick={() => setAnnual(!annual)}
            className="relative h-8 w-[60px] rounded-full border border-line bg-navy-800/60 transition-colors"
          >
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 500, damping: 32 }}
              className={`absolute top-1 h-6 w-6 rounded-full bg-amber ${annual ? "left-[30px]" : "left-1"}`}
            />
          </button>
          <span className={`text-sm ${annual ? "font-semibold text-ink" : "text-dim"}`}>
            Anual <span className="ml-1 rounded-full bg-amber/15 px-2 py-0.5 font-mono text-[10.5px] uppercase tracking-wide text-amber">−10%</span>
          </span>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((p, i) => {
            const price = p.monthly === null ? null : annual ? Math.round(p.monthly * 0.9) : p.monthly;
            return (
              <Reveal key={p.name} delay={i * 0.08} className="h-full">
                <article
                  className={`relative flex h-full flex-col rounded-2xl border p-7 ${
                    p.featured
                      ? "glow-border border-amber/70 bg-gradient-to-b from-amber/[.08] to-transparent shadow-[0_20px_60px_rgba(255,183,0,.12)]"
                      : "border-line bg-navy-800/15"
                  }`}
                >
                  {p.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-amber px-3.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-navy-950">
                      mais escolhido
                    </span>
                  )}
                  <h2 className="font-display text-[22px] font-extrabold tracking-tight">{p.name}</h2>
                  <p className="mb-5 mt-1 text-[13px] text-dim">{p.tagline}</p>
                  <div className="mb-1 flex h-[52px] items-end">
                    {price !== null ? (
                      <AnimatePresence mode="popLayout" initial={false}>
                        <motion.div
                          key={price}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.25 }}
                          className="flex items-end gap-1"
                        >
                          <span className="pb-1 text-sm text-dim">R$</span>
                          <span className="font-display text-[44px] font-black leading-none tracking-[-0.03em] text-amber">
                            {fmt(price)}
                          </span>
                          <span className="pb-1 text-sm text-dim">/mês</span>
                        </motion.div>
                      </AnimatePresence>
                    ) : (
                      <span className="font-display text-[28px] font-black leading-none tracking-tight text-amber">
                        Sob proposta
                      </span>
                    )}
                  </div>
                  <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.08em] text-dim">
                    {p.orders} · implantação {p.setup}
                  </p>
                  <ul className="mb-8 flex flex-col gap-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2.5 text-[13.5px] text-dim">
                        <span className="mt-px shrink-0 font-bold text-amber">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://pixelpartners.com.br/contato"
                    className={`mt-auto rounded-[10px] py-3 text-center font-display text-sm font-bold transition-all ${
                      p.featured
                        ? "bg-amber text-navy-950 hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(255,183,0,.3)]"
                        : "border border-line text-ink hover:border-amber/60 hover:bg-white/5"
                    }`}
                  >
                    {p.cta}
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="mx-auto mt-8 max-w-[760px] text-center text-[12.5px] text-dim">
            Valores fixos dentro de cada faixa. O enquadramento por pedidos/mês é medido pelo próprio Pixel
            Reports e revisado a cada trimestre — sua loja só muda de plano se mudar de patamar, com aviso
            prévio. Contrato anual: 10% de desconto. Implantação inclui migração, hardening e configuração
            de todos os módulos.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
