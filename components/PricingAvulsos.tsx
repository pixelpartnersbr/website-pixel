"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { waLink } from "./site/config";

type Mod = { id: string; name: string; desc: string; price: number; tier: "Growth" | "Scale" };

const mods: Mod[] = [
  { id: "crm", name: "Pixel CRM completo", desc: "RFM, segmentos, risco de churn por cliente, campanhas", price: 399, tier: "Growth" },
  { id: "fid", name: "Fidelização + Cashback", desc: "Pontos e saldo que trazem o cliente de volta sozinho", price: 299, tier: "Growth" },
  { id: "prov", name: "Provador de Tamanho", desc: "Recomendação de tamanho: menos troca, menos devolução", price: 249, tier: "Growth" },
  { id: "conj", name: "Pixel Conjuntos + Shop the Look", desc: "Kits com preço fechado e looks completos montados na página do produto", price: 249, tier: "Growth" },
  { id: "carr", name: "Carrinhos Personalizados", desc: "Links de carrinho pré-montado com desconto condicional", price: 199, tier: "Growth" },
  { id: "recu", name: "Recuperação de Carrinho Abandonado", desc: "Quem desistiu recebe o link do carrinho pronto pra fechar a venda", price: 249, tier: "Growth" },
  { id: "video", name: "Videocommerce", desc: "Vídeo do produto na galeria — a peça em movimento no PDP", price: 199, tier: "Growth" },
  { id: "atac", name: "Módulo Atacadista", desc: "Atacado e varejo na mesma loja: preços B2B, mínimos, CNPJ aprovado", price: 549, tier: "Scale" },
  { id: "vend", name: "Código de Vendedor", desc: "Atribuição por vendedor com painel de comissões e ranking", price: 399, tier: "Scale" },
];

const DELTA_GROWTH = 600; // Start -> Growth

export default function PricingAvulsos() {
  const [sel, setSel] = useState<string[]>([]);
  const toggle = (id: string) =>
    setSel((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  const chosen = mods.filter((m) => sel.includes(m.id));
  const total = chosen.reduce((a, m) => a + m.price, 0);
  const upgradeWins = total >= DELTA_GROWTH - 5;
  const fmt = (n: number) => n.toLocaleString("pt-BR");
  const msg =
    chosen.length > 0
      ? `Olá! Estou no site do Pixel Commerce e quero adicionar ao meu plano: ${chosen.map((m) => m.name).join(", ")}.`
      : "Olá! Quero saber mais sobre os módulos avulsos do Pixel Commerce.";

  return (
    <section className="border-t border-line py-24">
      <div className="wrap">
        <Reveal className="mb-4 max-w-[720px]">
          <span className="eyebrow">Módulos avulsos</span>
          <h2 className="mb-4 font-display text-[clamp(24px,3vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Não precisa do upgrade pra destravar um módulo.
          </h2>
          <p className="text-[16px] text-dim">
            Qualquer módulo pode ser adicionado ao seu plano atual, por loja, com preço fixo — sem esperar
            a operação crescer de faixa. Vale a regra de sempre: preço público, 0% de comissão. Requisito
            único: um plano ativo (a partir do Start), porque os módulos rodam sobre a infraestrutura
            PrimePress.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
          <Reveal className="grid content-start gap-3 sm:grid-cols-2">
            {mods.map((m) => {
              const on = sel.includes(m.id);
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => toggle(m.id)}
                  aria-pressed={on}
                  className={`spot rounded-xl border p-5 text-left transition-all ${
                    on
                      ? "border-amber bg-amber/[.08]"
                      : "border-line bg-navy-800/15 hover:border-amber/40"
                  }`}
                >
                  <span className="mb-2 flex items-start justify-between gap-3">
                    <strong className="font-display text-[14.5px] font-bold leading-snug">{m.name}</strong>
                    <span
                      className={`grid h-5 w-5 shrink-0 place-items-center rounded-md border text-[11px] font-black ${
                        on ? "border-amber bg-amber text-navy-950" : "border-line text-transparent"
                      }`}
                      aria-hidden
                    >
                      ✓
                    </span>
                  </span>
                  <span className="block text-[12.5px] text-dim">{m.desc}</span>
                  <span className="mt-3 flex items-center justify-between">
                    <span className="font-display text-[15px] font-extrabold text-amber">
                      R$ {m.price}<span className="text-[11px] font-semibold text-dim">/mês</span>
                    </span>
                    <span className="rounded-full border border-line px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.08em] text-dim">
                      incluso no {m.tier}
                    </span>
                  </span>
                </button>
              );
            })}
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="card sticky top-24 bg-navy-950/60 p-6">
              <p className="mb-1 font-display text-[16px] font-extrabold tracking-tight">Seu combo</p>
              <p className="mb-4 text-[12.5px] text-dim">
                {chosen.length === 0
                  ? "Selecione módulos ao lado para ver a conta."
                  : `${chosen.length} módulo${chosen.length > 1 ? "s" : ""} selecionado${chosen.length > 1 ? "s" : ""}`}
              </p>
              {chosen.length > 0 && (
                <ul className="mb-4 flex flex-col divide-y divide-white/[.06]">
                  {chosen.map((m) => (
                    <li key={m.id} className="flex items-center justify-between py-2 text-[13px]">
                      <span className="text-dim">{m.name}</span>
                      <span className="font-display font-bold">R$ {m.price}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="mb-4 flex items-baseline justify-between rounded-xl border border-line bg-navy-900/60 p-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-dim">Total avulso</span>
                <span className="font-display text-[24px] font-black tracking-tight">
                  R$ {fmt(total)}<span className="text-[12px] font-semibold text-dim">/mês</span>
                </span>
              </div>
              {chosen.length > 0 && upgradeWins && (
                <div className="mb-4 rounded-xl border border-amber/50 bg-amber/[.07] p-4">
                  <p className="font-display text-[13.5px] font-bold text-amber">
                    A conta honesta: nesse ponto, o upgrade ganha.
                  </p>
                  <p className="mt-1 text-[12.5px] text-dim">
                    A diferença do Start pro Growth é R$ {fmt(DELTA_GROWTH)}/mês — e o Growth leva{" "}
                    <strong className="text-ink">todos</strong> os módulos da faixa, mais fatia de servidor
                    garantida e suporte em 24h.
                  </p>
                </div>
              )}
              <a
                href={waLink(msg)}
                target="_blank"
                rel="noopener"
                className="btn-amber block text-center"
              >
                {chosen.length > 0 ? "Contratar esse combo" : "Falar sobre módulos"}
              </a>
              <p className="mt-3 text-center text-[10.5px] text-dim">
                Preços por loja. Módulos de infraestrutura (servidor dedicado, war-room, SLA, QueueGuard
                incluso) são exclusivos dos planos.
              </p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
