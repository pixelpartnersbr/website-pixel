"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

const addons = [
  { name: "QueueGuard", price: "R$ 297/mês", alt: "ou R$ 597 por evento avulso", desc: "Fila de espera virtual para picos de acesso. Incluso nos planos Scale e Enterprise.", href: "https://queueguard.app" },
  { name: "Canal WhatsApp oficial (PP Whatsapp)", price: "R$ 199/mês por loja", alt: "tudo incluso · já vem no plano Scale", desc: "Dá voz de WhatsApp a tudo que seus módulos já fazem — campanhas do CRM, avisos de cashback, comissões de vendedor — mais leads do site, resumo diário e alerta de fraude.", href: "/whatsapp" },
  { name: "Horas de desenvolvimento", price: "sob demanda", alt: "pacotes mensais disponíveis", desc: "Customizações exclusivas da sua loja além dos módulos da plataforma — orçadas por escopo." },
];

const faqs = [
  ["Isso é comissão disfarçada?", "Não. O valor é fixo dentro da faixa e não existe percentual sobre vendas em nenhum plano. A faixa por pedidos/mês só define o tamanho da estrutura que a sua loja precisa — como um plano de academia que separa horário de pico, não como um sócio que leva parte da receita."],
  ["O que acontece se eu passar do limite de pedidos?", "Nada no meio do mês — nenhuma cobrança extra, nenhum bloqueio. O enquadramento é revisado por trimestre, com os dados do Pixel Reports, e se a sua loja subiu de patamar de forma consistente, conversamos sobre a mudança de plano com antecedência. Crescer nunca é punido."],
  ["Existe fidelidade?", "O plano mensal não tem fidelidade. O contrato anual tem 10% de desconto e garante o preço pelo período. A implantação é paga uma única vez em qualquer modalidade."],
  ["Minha loja já existe em outra plataforma ou hospedagem. E a migração?", "A implantação já inclui a migração completa: catálogo, clientes, pedidos, apontamento de domínio e período de homologação em staging antes da virada. Sua loja não fica fora do ar no processo."],
  ["Os plugins funcionam se eu sair da Pixel?", "Sua loja é sua — o núcleo é WooCommerce open-source e o catálogo, os pedidos e os clientes são exportáveis a qualquer momento, sem lock-in. Os módulos proprietários da plataforma (Reports, Shields, Provador etc.) fazem parte da assinatura, como em qualquer plataforma — a diferença é que aqui os seus dados saem com você."],
];

function Comparativos() {
  return (
    <Reveal>
      <div className="glow-border mx-auto mt-12 flex max-w-[860px] flex-wrap items-center justify-between gap-4 rounded-2xl border border-amber/40 bg-amber/[.05] p-6">
        <div>
          <p className="font-display text-[16px] font-extrabold tracking-tight">Comparando com outras ferramentas?</p>
          <p className="text-[13.5px] text-dim">Fizemos a lição de casa por você — recurso a recurso, com a conta na ponta do lápis.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="/comparativos/pixel-crm-vs-zoppy" className="btn-ghost whitespace-nowrap">
            Pixel CRM vs Zoppy →
          </a>
          <a href="/comparativos/pixel-commerce-vs-shopify" className="btn-ghost whitespace-nowrap">
            Pixel Commerce vs Shopify →
          </a>
          <a href="/comparativos/fidelizacao-vs-fidelizar-mais" className="btn-ghost whitespace-nowrap">
            Fidelização vs Fidelizar+ →
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function PricingExtras() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="border-t border-line bg-navy-900 py-20">
        <div className="wrap">
          <Reveal className="mb-10 max-w-[680px]">
            <span className="eyebrow">Add-ons</span>
            <h2 className="font-display text-[clamp(24px,2.8vw,34px)] font-extrabold tracking-tight">
              Módulos que você liga quando precisar.
            </h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {addons.map((a, i) => (
              <Reveal key={a.name} delay={i * 0.1} className="h-full">
                <article className="card flex h-full flex-col bg-navy-950/40 p-6">
                  <h3 className="font-display text-[17px] font-bold tracking-tight">
                    {a.href ? (
                      <a href={a.href} {...(a.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})} className="border-b border-amber/50 no-underline">{a.name}</a>
                    ) : a.name}
                  </h3>
                  <p className="mt-1 font-display text-[20px] font-extrabold text-amber">{a.price}</p>
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.06em] text-dim">{a.alt}</p>
                  <p className="mt-3 text-[13.5px] text-dim">{a.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="wrap max-w-[860px]">
          <Reveal className="mb-10">
            <span className="eyebrow">Perguntas diretas, respostas diretas</span>
            <h2 className="font-display text-[clamp(24px,2.8vw,34px)] font-extrabold tracking-tight">
              O que todo mundo pergunta antes de assinar.
            </h2>
          </Reveal>
          <div className="flex flex-col gap-3">
            {faqs.map(([q, a], i) => (
              <Reveal key={q} delay={i * 0.05}>
                <div className="card overflow-hidden bg-navy-800/15">
                  <button
                    type="button"
                    onClick={() => setOpen(open === i ? null : i)}
                    aria-expanded={open === i}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-display text-[15.5px] font-bold tracking-tight">{q}</span>
                    <motion.span
                      animate={{ rotate: open === i ? 45 : 0 }}
                      className="shrink-0 font-display text-xl font-bold text-amber"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                      >
                        <p className="px-5 pb-5 text-[14px] leading-relaxed text-dim">{a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
          <Comparativos />
        </div>
      </section>
    </>
  );
}
