"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { waLink } from "./site/config";

const CTA_MSG = "Olá! Quero o módulo Regras de Desconto na minha loja — promoções condicionais e brinde por valor.";

/* ============ MOCK: brinde por valor com checkpoints ============ */
function BrindeMock() {
  return (
    <div className="w-full max-w-[420px] rounded-2xl border border-white/10 bg-[#081826] p-4 shadow-[0_30px_60px_rgba(0,0,0,.45)]">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-display text-[13px] font-bold">Seu carrinho · R$ 513</p>
        <span className="rounded-full bg-amber px-2 py-0.5 font-mono text-[8.5px] font-bold uppercase text-navy-950">2 brindes ganhos 🎁</span>
      </div>
      {/* barra de progresso com checkpoints */}
      <div className="relative mb-1.5 h-2.5 rounded-full bg-navy-950/70">
        <div className="absolute inset-y-0 left-0 rounded-full bg-amber" style={{ width: "73%" }} />
        {[
          { left: "28%", on: true }, { left: "57%", on: true }, { left: "86%", on: false },
        ].map((c, i) => (
          <span key={i}
            className={`absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${c.on ? "border-amber bg-amber" : "border-white/25 bg-navy-900"}`}
            style={{ left: c.left }} aria-hidden />
        ))}
      </div>
      <div className="mb-3 flex justify-between font-mono text-[8px] uppercase tracking-[0.05em] text-dim">
        <span>R$ 0</span><span className="text-amber">R$ 200 ✓</span><span className="text-amber">R$ 400 ✓</span><span>R$ 600</span>
      </div>
      <div className="mb-3 rounded-xl border border-amber/40 bg-amber/[.07] px-3.5 py-2.5 text-center">
        <p className="text-[12px] text-dim">
          Faltam <strong className="text-amber">R$ 87</strong> pro próximo presente: <strong className="text-ink">necessaire exclusiva</strong>
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[["🧴", "Mini perfume", "ganho ✓"], ["🎀", "Scrunchie", "ganho ✓"], ["👝", "Necessaire", "faltam R$ 87"]].map(([e, n, s], i) => (
          <div key={n} className={`rounded-xl border p-2.5 text-center ${i < 2 ? "border-amber/40 bg-amber/[.05]" : "border-white/[.07] bg-navy-950/50 opacity-70"}`}>
            <span className="block text-xl" aria-hidden>{e}</span>
            <p className="mt-1 text-[9.5px] text-ink">{n}</p>
            <p className={`font-mono text-[7.5px] uppercase ${i < 2 ? "text-amber" : "text-dim"}`}>{s}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-center font-mono text-[8.5px] uppercase tracking-[0.08em] text-dim">
        calculado pós-cupom, sem frete · integrado ao carrinho lateral
      </p>
    </div>
  );
}

/* ============ HERO ============ */
export function RdHero() {
  return (
    <section
      className="relative overflow-hidden pb-20 pt-[150px]"
      style={{
        background:
          "radial-gradient(800px 460px at 88% 10%, rgba(255,183,0,.1), transparent 60%), radial-gradient(700px 420px at 0% 100%, rgba(5,58,102,.5), transparent 65%), #021627",
      }}
    >
      <div className="beam" aria-hidden />
      <div className="wrap relative grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <Reveal>
          <span className="eyebrow">Pixel Commerce · Regras de Desconto</span>
          <h1 className="mb-5 font-display text-[clamp(30px,4.2vw,54px)] font-extrabold leading-[1.08] tracking-[-0.025em]">
            Um motor de descontos que se adapta a <span className="text-amber">qualquer promoção.</span>
          </h1>
          <p className="mb-7 max-w-[560px] text-[16.5px] text-dim">
            Precificação dinâmica e descontos condicionais pro WooCommerce: regras que reagem ao que está no
            carrinho, a quem está comprando e a quando a compra acontece — mais brinde automático por valor
            de compra, integrado ao seu carrinho lateral.
          </p>
          <div className="mb-2 flex items-baseline gap-2.5">
            <span className="font-display text-[44px] font-black leading-none tracking-tight">R$ 399</span>
            <span className="text-[15px] text-dim">/mês por loja · ou incluso no Growth</span>
          </div>
          <a href={waLink(CTA_MSG)} target="_blank" rel="noopener" className="btn-amber mt-4 inline-block">
            Quero promoções sem gambiarra
          </a>
          <p className="mt-3.5 text-[13px] text-dim">Nativo WooCommerce · mantido pela Pixel · sem fidelidade</p>
        </Reveal>
        <Reveal delay={0.15} className="flex justify-center lg:justify-end">
          <BrindeMock />
        </Reveal>
      </div>
    </section>
  );
}

/* ============ BLOCO A: MOTOR DE REGRAS ============ */
const exemplos: [string, string][] = [
  ["Quem já comprou 3+ vezes", "→ 10% de desconto automático — fidelidade premiada sem cupom divulgado"],
  ["Coleção inteira no leve 3, pague 2", "→ BOGO por produto igual ou cruzado, aplicado uma vez ou repetido a cada grupo"],
  ["Quanto mais unidades, menor o preço", "→ tabela de volume em blocos ou escalonada por faixa de quantidade"],
  ["Pagamento no boleto", "→ taxa adicional condicional no checkout — o inverso do desconto, quando fizer sentido"],
  ["CEP fora da região metropolitana", "→ regra por localização, zona de frete, estado ou país"],
  ["Este produto nunca entra em promoção", "→ exclusão de itens de qualquer regra — lançamento protegido até de cupom geral"],
];

const condicoes: [string, string][] = [
  ["Carrinho", "subtotal, quantidade, peso, cupons aplicados, produtos/categorias/tags presentes"],
  ["Cliente", "logado ou visitante, papel no site (atacadista, varejista), metadados"],
  ["Histórico", "total já gasto, nº de pedidos, ticket médio, último pedido, o que já comprou antes"],
  ["Tempo", "data e hora, dia da semana, dia do mês, intervalo de datas — sazonal e relâmpago"],
  ["Localização", "país, estado, CEP, zona de frete, método de envio ou pagamento"],
  ["Checkout", "total do pedido, itens, cupons usados, forma de pagamento"],
];

export function RdMotor() {
  return (
    <section className="border-t border-line bg-navy-900 py-24">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[760px]">
          <span className="eyebrow">Bloco 01 · O motor de regras</span>
          <h2 className="mb-4 font-display text-[clamp(24px,3vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Toda regra é um "se isso → então aquilo". E dá pra combinar tudo.
          </h2>
          <p className="text-[15.5px] text-dim">
            Se a promoção existe na sua cabeça, provavelmente dá pra montar aqui — sem contratar um plugin
            diferente pra cada tipo de campanha. Alguns exemplos que todo lojista reconhece:
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {exemplos.map(([se, entao], i) => (
            <Reveal key={se} delay={i * 0.05} className="h-full">
              <article className="spot card h-full bg-navy-950/40 p-6">
                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.08em] text-dim">se</p>
                <h3 className="mb-2 font-display text-[15.5px] font-bold tracking-tight">{se}</h3>
                <p className="text-[13px] text-amber">{entao}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-8 rounded-2xl border border-line bg-navy-950/40 p-6">
            <p className="mb-4 font-display text-[15px] font-bold">O que pode disparar uma regra — 6 famílias de condição, combináveis entre si:</p>
            <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2 xl:grid-cols-3">
              {condicoes.map(([t, d]) => (
                <p key={t} className="text-[13px] text-dim">
                  <strong className="text-amber">{t}:</strong> {d}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ BLOCO B: BRINDE POR VALOR ============ */
const brindeModos: [string, string, string][] = [
  ["🎁", "Produto fixo", "Bateu o valor, ganhou o brinde definido — direto no carrinho, sem o cliente fazer nada."],
  ["🎠", "Cliente escolhe", "Carrossel de opções: atingiu a meta, escolhe o presente. O popup não briga com o painel do carrinho."],
  ["🪜", "Faixas de valor", "Escada de recompensas: cada degrau de gasto libera um brinde, com checkpoints que acendem na barra conforme o carrinho cresce."],
];

export function RdBrinde() {
  return (
    <section className="py-24">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[760px]">
          <span className="eyebrow">Bloco 02 · Brinde por Valor no Carrinho</span>
          <h2 className="mb-4 font-display text-[clamp(24px,3vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            "Faltam R$ 87 pro seu presente" — <span className="text-amber">a frase que aumenta carrinho.</span>
          </h2>
          <p className="text-[15.5px] text-dim">
            Módulo construído 100% pela Pixel Partners: brinde automático por valor de compra, com barra de
            progresso que mostra em tempo real quanto falta — e tooltip revelando o próximo presente da
            escada.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {brindeModos.map(([ic, t, d], i) => (
            <Reveal key={t} delay={i * 0.06} className="h-full">
              <article className="spot card h-full bg-navy-800/15 p-6">
                <span className="text-xl" aria-hidden>{ic}</span>
                <h3 className="mb-2 mt-2 font-display text-[16px] font-bold tracking-tight">{t}</h3>
                <p className="text-[13.5px] text-dim">{d}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-navy-950/40 p-6">
              <p className="mb-2 font-display text-[15px] font-bold">Até kit inteiro de brinde</p>
              <p className="text-[13.5px] text-dim">
                O presente pode ser um conjunto completo — um biquíni inteiro, top + calcinha — com resolução
                automática de tamanho e a possibilidade de o cliente trocar cada peça do kit individualmente.
              </p>
            </div>
            <div className="rounded-2xl border border-line bg-navy-950/40 p-6">
              <p className="mb-2 font-display text-[15px] font-bold">Conta justa, margem segura</p>
              <p className="text-[13.5px] text-dim">
                O valor é sempre calculado <strong className="text-ink">depois do cupom, sem frete nem
                impostos</strong> — justo pro cliente, seguro pra sua margem. Nada de brinde liberado por
                frete caro.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ FUNNELKIT + POR QUE PIXEL ============ */
export function RdPorQue() {
  const razoes: [string, string][] = [
    ["Um motor, todas as campanhas", "Robusto o bastante pra cobrir praticamente qualquer promoção — sem empilhar um plugin diferente (e um conflito diferente) pra cada tipo de campanha."],
    ["Construído no comportamento real do seu carrinho", "O módulo de brinde não é genérico: foi feito e testado no FunnelKit Cart de verdade — sidebar, popup de escolha e checkout —, exatamente onde os plugins de brinde de mercado costumam quebrar."],
    ["Mantido por quem conhece a sua loja", "Evolução contínua pela mesma equipe que opera a plataforma. Não é 'instalar e torcer' — é suporte de verdade, com o módulo acompanhando o WooCommerce e o tema."],
  ];
  return (
    <section className="border-t border-line bg-navy-900 py-24">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[760px]">
          <span className="eyebrow">Feito para o seu carrinho</span>
          <h2 className="mb-4 font-display text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.12] tracking-tight">
            Por que o nosso, e não um plugin de prateleira.
          </h2>
          <p className="text-[15.5px] text-dim">
            Brinde some e aparece corretamente no mini-cart, quantidade travada em todas as superfícies, zero
            conflito entre popup e painel — no combo Flatsome + FunnelKit Cart que a maioria das nossas lojas
            usa, tudo já nasceu testado.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {razoes.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.06} className="h-full">
              <article className="spot card h-full bg-navy-950/40 p-6">
                <span className="mb-3 block font-mono text-[11px] text-amber">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mb-2 font-display text-[16px] font-bold tracking-tight">{t}</h3>
                <p className="text-[13.5px] text-dim">{d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ FAQ + CTA ============ */
const faq: [string, string][] = [
  ["Dá pra combinar mais de uma regra ao mesmo tempo?", "Sim — condições e ações se combinam livremente dentro de uma regra, e várias regras podem coexistir. E com a hierarquia certa: você define o que acumula e o que não, sem dois descontos empilhados por engano."],
  ["O desconto funciona junto com cupom?", "Funciona — e o brinde por valor é calculado sobre o total depois do cupom, de propósito: o cliente não 'compra' o brinde com desconto que a loja já deu."],
  ["Posso travar um produto pra nunca entrar em promoção?", "Sim. A exclusão de produtos tira o item de qualquer regra de desconto — proteção de margem pra lançamentos e itens com preço especial, mesmo quando há cupom geral rodando."],
  ["O brinde funciona no celular?", "Sim — o fluxo inteiro (barra de progresso, checkpoints, popup de escolha) é responsivo e foi testado no carrinho lateral mobile, onde a maior parte das compras acontece."],
  ["Preciso do FunnelKit Cart pra usar?", "Não — o módulo roda no carrinho padrão do WooCommerce. A integração com o FunnelKit Cart é o diferencial pra quem já usa (ou quer usar) carrinho lateral com Smart Checkout."],
]

export function RdFaqCta() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24">
      <div className="wrap max-w-[860px]">
        <Reveal className="mb-10">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 className="font-display text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.12] tracking-tight">
            O que todo lojista pergunta
          </h2>
        </Reveal>
        <Reveal>
          <div className="flex flex-col gap-3">
            {faq.map(([q, a], i) => (
              <div key={q} className="card overflow-hidden bg-navy-800/15">
                <button type="button" onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left" aria-expanded={open === i}>
                  <span className="font-display text-[15px] font-bold tracking-tight">{q}</span>
                  <span className="shrink-0 font-bold text-amber">{open === i ? "−" : "+"}</span>
                </button>
                {open === i && <p className="px-5 pb-5 text-[14px] text-dim">{a}</p>}
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="mt-14 text-center">
            <h2 className="mx-auto mb-4 max-w-[680px] font-display text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.12] tracking-tight">
              A promoção que você imaginou, <span className="text-amber">sem o plugin que você teme.</span>
            </h2>
            <p className="mx-auto mb-8 max-w-[540px] text-[15.5px] text-dim">
              R$ 399/mês, incluso no Growth, sem fidelidade. Conta pra gente a campanha que você quer rodar —
              a gente devolve como ela fica montada no motor.
            </p>
            <a href={waLink(CTA_MSG)} target="_blank" rel="noopener" className="btn-amber inline-block">
              Falar com a Pixel no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
