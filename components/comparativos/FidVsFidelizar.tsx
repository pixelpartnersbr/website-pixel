"use client";
import { useState } from "react";
import Reveal from "../Reveal";
import { waLink } from "../site/config";

const CTA_MSG = "Olá! Vi o comparativo de Fidelização + Cashback vs Fidelizar+ e quero isso na minha loja.";

/* ============ HERO ============ */
export function FdHero() {
  return (
    <section
      className="pb-16 pt-[150px] text-center"
      style={{ background: "radial-gradient(800px 460px at 50% 0%, rgba(255,183,0,.09), transparent 60%), #021627" }}
    >
      <div className="wrap">
        <Reveal>
          <span className="eyebrow justify-center">Comparativo · Fidelidade e cashback</span>
          <h1 className="mx-auto mb-5 max-w-[920px] font-display text-[clamp(28px,4vw,54px)] font-extrabold leading-[1.08] tracking-[-0.025em]">
            Fidelização + Cashback <span className="text-dim">vs</span> <span className="text-amber">Fidelizar+</span>
          </h1>
          <p className="mx-auto max-w-[680px] text-[16.5px] text-dim">
            O Fidelizar+ é veterano no mercado — 7 anos, dezenas de milhares de lojas. A diferença está num
            detalhe do modelo: <strong className="text-ink">lá, o preço cresce junto com a sua base de
            clientes</strong>. Ou seja: quanto melhor o seu programa funciona, mais caro ele fica. Aqui está
            a comparação, ponto a ponto.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ MODELO ============ */
export function FdModelo() {
  return (
    <section className="border-t border-line py-20">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[720px]">
          <span className="eyebrow">Os dois modelos</span>
          <h2 className="font-display text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.12] tracking-tight">
            Um cobra pelo tamanho da sua base.<br />O outro torce pra ela não parar de crescer.
          </h2>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <article className="card h-full bg-navy-800/15 p-7">
              <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.1em] text-dim">Modelo Fidelizar+</p>
              <h3 className="mb-4 font-display text-[19px] font-extrabold tracking-tight">
                Mensalidade por faixa de clientes cadastrados
              </h3>
              <ul className="flex flex-col gap-3 text-[14px] text-dim">
                <li className="flex gap-2.5"><span className="text-dim">→</span> Plano Halley: R$ 549,90/mês para até <strong className="text-ink">10 mil clientes</strong>; plano Müller: R$ 699,90/mês para até <strong className="text-ink">20 mil</strong> (preços promocionais publicados nos marketplaces oficiais)</li>
                <li className="flex gap-2.5"><span className="text-dim">→</span> A régua é a sua base: cada cliente fidelizado te aproxima do próximo degrau de preço</li>
                <li className="flex gap-2.5"><span className="text-dim">→</span> SaaS externo: dados do programa e da base sincronizados para a plataforma deles</li>
                <li className="flex gap-2.5"><span className="text-dim">→</span> Gerente de contas só em planos a partir de R$ 750/mês; e-mail com resposta média de 24h</li>
              </ul>
            </article>
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <article className="glow-border h-full rounded-2xl border border-amber/60 bg-gradient-to-b from-amber/[.07] to-transparent p-7">
              <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.1em] text-amber">Modelo Pixel Commerce</p>
              <h3 className="mb-4 font-display text-[19px] font-extrabold tracking-tight">
                Preço fixo. Base ilimitada. Fidelizar nunca fica mais caro.
              </h3>
              <ul className="flex flex-col gap-3 text-[14px] text-dim">
                <li className="flex gap-2.5"><span className="font-bold text-amber">✓</span> Incluso no plano Growth (R$ 1.297/mês) — ou avulso por <strong className="text-ink">R$ 299/mês fixos</strong> em qualquer plano</li>
                <li className="flex gap-2.5"><span className="font-bold text-amber">✓</span> Sem faixa de clientes: 5 mil ou 500 mil cadastros, o preço é o mesmo</li>
                <li className="flex gap-2.5"><span className="font-bold text-amber">✓</span> Nativo do WooCommerce: saldo, pontos e histórico moram no banco da sua loja</li>
                <li className="flex gap-2.5"><span className="font-bold text-amber">✓</span> Conversa com o resto da casa: segmentos do Pixel CRM, aviso de cashback expirando pelo canal WhatsApp oficial</li>
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ TABELA ============ */
type Cell = { v: "sim" | "nao" | "info"; note?: string };
const rows: [string, Cell, Cell][] = [
  ["Pontos por compra com resgate na loja", { v: "sim" }, { v: "sim" }],
  ["Cashback como saldo/desconto no checkout", { v: "sim" }, { v: "sim", note: "via CPF no checkout" }],
  ["Expiração de saldo que cria urgência de recompra", { v: "sim" }, { v: "sim" }],
  ["Indicação de amigos recompensada", { v: "sim" }, { v: "sim" }],
  ["Base de clientes ilimitada sem mudar de preço", { v: "sim" }, { v: "nao", note: "faixas de 10 mil / 20 mil clientes" }],
  ["Preço fixo, público, que não escala com o sucesso", { v: "sim", note: "R$ 299/mês ou incluso no Growth" }, { v: "info", note: "público, mas por faixa de base" }],
  ["Dados do programa no banco da sua loja", { v: "sim" }, { v: "nao", note: "SaaS externo" }],
  ["Integração nativa com CRM da mesma stack (RFM, churn)", { v: "sim", note: "Pixel CRM" }, { v: "nao" }],
  ["Aviso de cashback expirando por WhatsApp oficial", { v: "sim", note: "via canal WhatsApp oficial" }, { v: "info", note: "integração WhatsApp possível" }],
  ["Suporte de quem escreveu o código", { v: "sim" }, { v: "nao", note: "gerente de contas a partir de R$ 750/mês" }],
  ["Gamificação (caça ao tesouro, foto/vídeo, roleta)", { v: "nao" }, { v: "sim" }],
  ["Sistema de níveis de cliente (tiers)", { v: "nao", note: "no roadmap; segmentação hoje via Pixel CRM" }, { v: "sim" }],
];

function Mark({ c }: { c: Cell }) {
  const icon = c.v === "sim" ? <span className="font-bold text-amber">✓</span>
    : c.v === "nao" ? <span className="text-dim">—</span>
    : <span className="font-mono text-[11px] text-dim">~</span>;
  return (
    <div className="flex flex-col items-center gap-0.5 text-center">
      {icon}
      {c.note && <span className="text-[10.5px] leading-tight text-dim/80">{c.note}</span>}
    </div>
  );
}

export function FdTabela() {
  return (
    <section className="bg-navy-900 py-20">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[680px]">
          <span className="eyebrow">Recurso a recurso</span>
          <h2 className="font-display text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.12] tracking-tight">
            O que cada um entrega
          </h2>
        </Reveal>
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line bg-navy-950/60">
                  <th className="p-4 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-dim">Recurso</th>
                  <th className="w-[210px] p-4 text-center font-display text-[14px] font-extrabold text-amber">Fidelização + Cashback</th>
                  <th className="w-[210px] p-4 text-center font-display text-[14px] font-extrabold">Fidelizar+</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([r, a, b], i) => (
                  <tr key={r} className={`border-b border-white/[.05] ${i % 2 ? "bg-navy-950/25" : ""}`}>
                    <td className="p-4 text-[13.5px] text-dim">{r}</td>
                    <td className="bg-amber/[.04] p-4"><Mark c={a} /></td>
                    <td className="p-4"><Mark c={b} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[11.5px] text-dim">
            "~" = com ressalvas. Análise de julho/2026 com base no site do Fidelizar+ (fidelizarmais.co) e
            nas páginas oficiais do app nos marketplaces Nuvemshop e wBuy; preços promocionais e condições
            sujeitos a alteração. Fidelizar+ / Fidelizar Mais é marca de seus respectivos titulares.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ CALCULADORA ============ */
export function FdCalculadora() {
  const [base, setBase] = useState(8000);
  const fmt = (n: number) => n.toLocaleString("pt-BR");
  const plano =
    base <= 10000
      ? { nome: "Halley", preco: 549.9, cap: "até 10 mil clientes" }
      : base <= 20000
      ? { nome: "Müller", preco: 699.9, cap: "até 20 mil clientes" }
      : { nome: "acima das faixas publicadas", preco: null as number | null, cap: "20 mil+ clientes" };
  const anualDeles = plano.preco ? Math.round(plano.preco * 12) : null;
  const economiaAnual = anualDeles ? anualDeles - 299 * 12 : null;
  return (
    <section className="border-t border-line py-20">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">A ponta do lápis</span>
          <h2 className="mb-5 font-display text-[clamp(23px,2.8vw,36px)] font-extrabold leading-[1.15] tracking-tight">
            Quantos clientes tem a sua base? A resposta muda o preço deles — não o nosso.
          </h2>
          <div className="flex flex-col gap-4 text-[15px] text-dim">
            <p>
              Programa de fidelidade bom faz uma coisa: <strong className="text-ink">encher a sua base</strong>.
              No modelo por faixa, isso significa se aproximar do próximo degrau de mensalidade — um
              desincentivo embutido no próprio produto. Digite o tamanho da sua base ao lado e veja em qual
              plano do Fidelizar+ você cairia, contra o nosso preço que não se move.
            </p>
            <p>
              E lembre: no plano Growth, esse valor é <strong className="text-ink">zero</strong> — a
              fidelização já vem inclusa, junto do CRM que segmenta quem merece cada campanha.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="card mx-auto w-full max-w-[440px] bg-navy-950/60 p-6">
            <label className="mb-1 block font-mono text-[10.5px] uppercase tracking-[0.08em] text-dim">
              Clientes cadastrados na sua base
            </label>
            <input
              type="number" min={0} step={500} value={base}
              onChange={(e) => setBase(Math.max(0, Number(e.target.value)))}
              className="w-full rounded-[10px] border border-line bg-navy-900/60 px-4 py-2.5 text-[14px] text-ink outline-none transition-colors focus:border-amber"
            />
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-line bg-navy-900/60 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-dim">Fidelizar+ · plano {plano.nome}</p>
                <p className="font-display text-[22px] font-black tracking-tight text-[#FF8A8A]">
                  {plano.preco ? `R$ ${plano.preco.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}` : "sob consulta"}
                </p>
                <p className="text-[10.5px] text-dim">{plano.cap}</p>
              </div>
              <div className="rounded-xl border border-amber/40 bg-amber/[.06] p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-dim">Fidelização + Cashback</p>
                <p className="font-display text-[22px] font-black tracking-tight text-amber">R$ 299</p>
                <p className="text-[10.5px] text-dim">base ilimitada · ou incluso no Growth</p>
              </div>
            </div>
            {economiaAnual !== null && economiaAnual > 0 && (
              <p className="mt-4 text-center text-[13px] text-dim">
                Economia de <strong className="text-amber">R$ {fmt(economiaAnual)}/ano</strong> no avulso —
                ou de <strong className="text-amber">R$ {fmt(anualDeles!)}/ano</strong> se você está no Growth.
              </p>
            )}
            <p className="mt-3 text-center text-[12.5px] text-dim">
              <a href="/planos" className="border-b border-amber/50 text-amber no-underline">ver planos e módulos</a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ ARQUITETURA ============ */
export function FdArquitetura() {
  const pontos = [
    ["Fidelizar sem teto", "Cobrança por faixa de clientes pune exatamente o comportamento que o produto deveria incentivar. Base ilimitada significa que a única meta do programa é crescer."],
    ["Saldo que mora na loja", "Pontos e cashback são passivo financeiro da sua marca. Aqui eles vivem no banco da sua loja — auditáveis, exportáveis e seus, não numa plataforma de terceiro."],
    ["Fidelidade que conversa com o CRM", "O saldo expira? O Pixel CRM sabe. Cliente esfriou? A campanha certa vai com o incentivo certo, pelo canal WhatsApp oficial. Fidelização isolada é metade da força."],
    ["Uma fatura, um suporte", "Sem mais um contrato, mais um painel e mais um suporte de 24h por e-mail. Quem responde é quem escreveu o módulo — no mesmo WhatsApp de sempre."],
  ];
  return (
    <section className="bg-navy-900 py-20">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[720px]">
          <span className="eyebrow">Por que o modelo importa</span>
          <h2 className="font-display text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.12] tracking-tight">
            Fidelidade é ativo da marca — não aluguel
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {pontos.map(([t, d], i) => (
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

/* ============ CTA ============ */
export function FdCTA() {
  return (
    <section className="border-t border-line py-20 text-center">
      <div className="wrap">
        <Reveal>
          <h2 className="mx-auto mb-4 max-w-[700px] font-display text-[clamp(24px,3vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Quer ver o programa de fidelidade rodando na sua loja?
          </h2>
          <p className="mx-auto mb-8 max-w-[540px] text-[15.5px] text-dim">
            Regras de pontos, percentual de cashback e expiração — a gente desenha junto, no WhatsApp, hoje.
          </p>
          <a href={waLink(CTA_MSG)} target="_blank" rel="noopener" className="btn-amber inline-block">
            Falar com a Pixel no WhatsApp
          </a>
          <p className="mx-auto mt-8 max-w-[820px] text-[11px] leading-relaxed text-dim">
            Comparativo elaborado em julho/2026 com base em informações públicas do Fidelizar+ / Fidelizar
            Mais (fidelizarmais.co e páginas oficiais do app nos marketplaces Nuvemshop e wBuy), incluindo
            preços promocionais vigentes na data, sujeitos a alteração sem aviso. Podem existir planos e
            condições não publicados. Fidelizar+ é marca registrada de seus respectivos titulares, sem
            qualquer vínculo com a Pixel Partners. Material informativo; recursos e preços do Pixel Commerce
            conforme página de planos vigente.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
