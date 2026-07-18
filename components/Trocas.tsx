"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { waLink } from "./site/config";

const CTA_MSG = "Olá! Quero ativar a Central de Trocas na minha loja.";

/* ============ MOCK: central de trocas (lado do cliente) ============ */
function TrocasMock() {
  return (
    <div className="w-full max-w-[420px] rounded-2xl border border-white/10 bg-[#081826] p-4 shadow-[0_30px_60px_rgba(0,0,0,.45)]">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-display text-[13px] font-bold">Central de Trocas</p>
        <span className="font-mono text-[9px] uppercase tracking-[0.08em] text-dim">pedido #4821 ✓</span>
      </div>
      <div className="mb-3 flex items-center gap-3 rounded-xl border border-white/[.07] bg-navy-950/50 p-3">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-navy-800/40 text-xl" aria-hidden>👗</div>
        <div className="min-w-0">
          <p className="truncate text-[12px] text-ink">Vestido Amara · M</p>
          <p className="text-[10px] text-dim">motivo: ficou pequeno · 📷 2 fotos</p>
        </div>
      </div>
      <p className="mb-1.5 font-mono text-[8.5px] uppercase tracking-[0.08em] text-dim">o que você prefere?</p>
      <div className="mb-3 grid grid-cols-3 gap-1.5">
        {[["Outro tamanho", true], ["Crédito na loja", false], ["Reembolso", false]].map(([l, on]) => (
          <span key={l as string} className={`rounded-lg border px-2 py-2 text-center text-[9.5px] font-bold ${on ? "border-amber bg-amber/10 text-amber" : "border-white/15 text-dim"}`}>
            {l}
          </span>
        ))}
      </div>
      <div className="mb-3 flex items-center justify-between rounded-xl border border-white/[.07] bg-navy-950/50 px-3.5 py-2.5">
        <span className="text-[11px] text-dim">devolução</span>
        <span className="text-[11px] font-bold text-ink">Correios · código na hora 📦</span>
      </div>
      <div className="rounded-xl border border-amber/40 bg-amber/[.07] px-3.5 py-2.5 text-center">
        <p className="text-[11.5px] text-dim">Como foi a experiência? <span className="tracking-wide">😞 ⚪⚪⚪⚪⚪⚪⚪⚪🟡 😍</span> <strong className="text-amber">9/10</strong></p>
      </div>
      <p className="mt-3 text-center font-mono text-[8.5px] uppercase tracking-[0.08em] text-dim">
        sem senha, sem cadastro · e-mail + nº do pedido · com a sua marca
      </p>
    </div>
  );
}

/* ============ HERO ============ */
export function TrHero() {
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
          <span className="eyebrow">Pixel Commerce · Central de Trocas</span>
          <h1 className="mb-5 font-display text-[clamp(30px,4.2vw,54px)] font-extrabold leading-[1.08] tracking-[-0.025em]">
            Troca mal resolvida é <span className="text-amber">cliente perdido.</span>
          </h1>
          <p className="mb-7 max-w-[560px] text-[16.5px] text-dim">
            A Central de Trocas e Devoluções dentro da sua própria loja: o cliente abre a solicitação
            sozinho, a equipe gerencia tudo num painel só, e as automações — vale-troca, reserva de estoque,
            bloqueio de abuso — trabalham por você. Sem mensalidade de terceiros.
          </p>
          <div className="mb-2 flex items-baseline gap-2.5">
            <span className="font-display text-[44px] font-black leading-none tracking-tight">R$ 399</span>
            <span className="text-[15px] text-dim">/mês por loja · ou incluso no Growth</span>
          </div>
          <a href={waLink(CTA_MSG)} target="_blank" rel="noopener" className="btn-amber mt-4 inline-block">
            Quero ativar a Central de Trocas
          </a>
          <p className="mt-3.5 text-[13px] text-dim">Nativo WooCommerce · dados na sua loja · sem fidelidade</p>
        </Reveal>
        <Reveal delay={0.15} className="flex justify-center lg:justify-end">
          <TrocasMock />
        </Reveal>
      </div>
    </section>
  );
}

/* ============ O PROBLEMA ============ */
export function TrProblema() {
  const dores: [string, string][] = [
    ["DM no Instagram", "A solicitação nasce onde ninguém controla — e some no meio das mensagens de venda."],
    ["WhatsApp do atendimento", "Cada troca vira uma conversa solta, sem protocolo, dependendo da memória de quem atendeu."],
    ["Planilha e e-mail perdido", "O cliente fica sem resposta, a equipe sem controle e o financeiro sem rastro do que voltou."],
  ];
  return (
    <section className="border-t border-line bg-navy-900 py-24">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[760px]">
          <span className="eyebrow">O problema</span>
          <h2 className="mb-4 font-display text-[clamp(24px,3vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Na maioria das lojas, a troca ainda acontece no improviso.
          </h2>
          <p className="text-[15.5px] text-dim">
            E é justamente no pós-venda que a recompra se decide: pesquisas do setor apontam que a grande
            maioria dos consumidores que passa por um processo de troca <strong className="text-ink">fácil</strong>{" "}
            volta a comprar — e recomenda a loja. O improviso joga essa segunda venda fora.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {dores.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.07} className="h-full">
              <article className="spot card h-full bg-navy-950/40 p-6">
                <span className="mb-3 block font-mono text-[11px] text-[#FF8A8A]">×</span>
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

/* ============ AUTOATENDIMENTO ============ */
export function TrAutoatendimento() {
  const passos: [string, string][] = [
    ["Entra sem senha", "E-mail (ou CPF) + número do pedido — sem cadastro, a qualquer hora, com a identidade visual da sua marca."],
    ["Seleciona os itens e o destino", "Outro tamanho ou cor, crédito pra comprar o que quiser, ou reembolso — item por item."],
    ["Informa o motivo e anexa fotos", "Quando necessário, a evidência já chega junto — sem pingue-pongue pedindo foto depois."],
    ["Escolhe como devolver", "Correios, coleta em casa, entrega na loja física ou motoboy — a logística que a sua operação oferecer."],
    ["Avalia de 0 a 10", "O NPS do processo vira indicador do seu pós-venda — medido em cada troca, sem pesquisa à parte."],
  ];
  return (
    <section className="py-24">
      <div className="wrap">
        <Reveal className="mb-12 max-w-[720px]">
          <span className="eyebrow">Bloco 01 · Autoatendimento de verdade</span>
          <h2 className="font-display text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            O cliente resolve sozinho. <span className="text-amber">De madrugada, inclusive.</span>
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {passos.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.05} className="h-full">
              <article className="spot card h-full bg-navy-800/15 p-5">
                <span className="mb-3 block font-display text-[24px] font-black text-amber/40">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mb-1.5 font-display text-[14.5px] font-bold tracking-tight">{t}</h3>
                <p className="text-[12.5px] text-dim">{d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ GESTÃO + AUTOMAÇÕES ============ */
export function TrGestao() {
  const autos: [string, string, string][] = [
    ["🎟️", "Vale-troca automático", "Emitido assim que o produto devolvido é conferido — o cliente recebe o cupom por e-mail na hora, sem depender de alguém do time lembrar de criar."],
    ["📦", "Estoque reservado na aprovação", "A peça nova da troca fica reservada no momento do 'sim' — com liberação automática se o cliente desistir. Sem estoque fantasma, sem vender peça prometida."],
    ["🛡️", "Bloqueio de trocas sucessivas", "Limite de solicitações por pedido e por cliente — a operação protegida de abuso sem virar cliente-detetive."],
  ];
  return (
    <section className="border-t border-line bg-navy-900 py-24">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[760px]">
          <span className="eyebrow">Bloco 02 · Gestão de Trocas</span>
          <h2 className="mb-4 font-display text-[clamp(24px,3vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Pra equipe: cada troca vira um pedido, com timeline de tudo.
          </h2>
          <p className="text-[15.5px] text-dim">
            Protocolo, cliente, itens, motivo, fotos, método de devolução e status — num painel só. Aprovar
            ou recusar é um clique; código de postagem dos Correios, recebimento e conclusão, tudo com o
            registro de <strong className="text-ink">quem fez e quando</strong>. E as automações trabalham
            por você:
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {autos.map(([ic, t, d], i) => (
            <Reveal key={t} delay={i * 0.06} className="h-full">
              <article className="spot card h-full bg-navy-950/40 p-6">
                <span className="text-xl" aria-hidden>{ic}</span>
                <h3 className="mb-2 mt-2 font-display text-[16px] font-bold tracking-tight">{t}</h3>
                <p className="text-[13.5px] text-dim">{d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ INTELIGÊNCIA ============ */
export function TrInteligencia() {
  return (
    <section className="py-20">
      <div className="wrap grid items-center gap-10 lg:grid-cols-[1fr_.9fr]">
        <Reveal>
          <span className="eyebrow">Bloco 03 · Inteligência de pós-venda</span>
          <h2 className="mb-4 font-display text-[clamp(23px,2.8vw,36px)] font-extrabold leading-[1.15] tracking-tight">
            O que os números da troca revelam <span className="text-amber">sobre o seu produto.</span>
          </h2>
          <div className="flex flex-col gap-4 text-[15px] text-dim">
            <p>
              Motivos mais frequentes, produtos mais trocados, valor em circulação, NPS do processo — o
              painel de relatórios transforma a troca de custo em diagnóstico.
            </p>
            <p>
              Se um vestido concentra trocas por <strong className="text-ink">"ficou pequeno"</strong>, o
              problema pode estar na tabela de medidas — e agora você descobre isso com dado, não com
              achismo. (E resolve na origem com o <a href="/provador" className="border-b border-amber/50 text-amber no-underline">Provador de Tamanho</a>,
              que ataca exatamente essa causa antes da compra.)
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card bg-navy-950/50 p-5">
            <p className="mb-3 font-mono text-[9.5px] uppercase tracking-[0.08em] text-dim">relatório · motivos do mês</p>
            {[["Ficou pequeno", 42, true], ["Mudou de ideia", 23, false], ["Cor diferente da foto", 19, false], ["Defeito", 16, false]].map(([m, pct, hi]) => (
              <div key={m as string} className="mb-2.5">
                <div className="mb-1 flex justify-between text-[11.5px]">
                  <span className={hi ? "font-bold text-ink" : "text-dim"}>{m}</span>
                  <span className={hi ? "font-bold text-amber" : "text-dim"}>{pct}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-navy-900">
                  <div className={`h-full rounded-full ${hi ? "bg-amber" : "bg-white/20"}`} style={{ width: `${pct}%` }} />
                </div>
              </div>
            ))}
            <p className="mt-3 text-[10.5px] text-dim">↑ 42% concentrado num motivo = tabela de medidas pra revisar. Dados ilustrativos.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ POR QUE PROPRIETÁRIO + FAQ + CTA ============ */
const faq: [string, string][] = [
  ["O cliente precisa criar conta pra abrir a troca?", "Não — e-mail (ou CPF) mais o número do pedido bastam. Sem senha, sem cadastro, a qualquer hora. Quanto menos atrito, mais o cliente resolve sozinho em vez de te chamar no direct."],
  ["Quando o vale-troca é emitido?", "Automaticamente, assim que a equipe confere o produto devolvido — o cupom chega por e-mail na hora. É a diferença entre um cliente esperando alguém lembrar e um cliente já escolhendo a peça nova."],
  ["E se o cliente desistir depois da aprovação?", "A peça que estava reservada pra ele volta pro estoque automaticamente. Reserva na aprovação, liberação na desistência — sem estoque fantasma em nenhum dos dois sentidos."],
  ["Dá pra impedir abuso de trocas?", "Sim — o bloqueio de trocas sucessivas limita solicitações por pedido e por cliente. A régua é sua; o sistema aplica."],
  ["Funciona com meus cupons e meu estoque atuais?", "Sim — integração nativa com o WooCommerce, os seus cupons e o seu estoque, dentro do seu WordPress. Nada de dados do seu pós-venda morando no servidor de terceiro."],
];

export function TrPorQueFaqCta() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-t border-line bg-navy-900 py-24">
      <div className="wrap max-w-[860px]">
        <Reveal className="mb-10">
          <span className="eyebrow">Por que proprietário</span>
          <h2 className="mb-4 font-display text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.12] tracking-tight">
            Sem mensalidade de terceiros, sem dado fora de casa.
          </h2>
          <p className="text-[15.5px] text-dim">
            Soluções de trocas por assinatura cobram mensalidade por loja, guardam os seus dados fora da sua
            operação e limitam a personalização. A Central de Trocas roda dentro do seu WordPress, integrada
            nativamente ao WooCommerce, aos seus cupons, ao seu estoque e ao restante da plataforma — do
            jeito que a sua operação funciona.
          </p>
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
              A troca é a segunda chance da venda. <span className="text-amber">Trate como tal.</span>
            </h2>
            <p className="mx-auto mb-8 max-w-[540px] text-[15.5px] text-dim">
              R$ 399/mês, incluso no Growth, sem fidelidade. Ative a Central de Trocas e transforme o
              improviso em processo — com NPS medindo cada etapa.
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
