"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { waLink } from "./site/config";

const CTA_MSG = "Olá! Quero o Shop The Look na minha loja — o look inteiro, num clique só.";

/* ============ MOCK: bloco Compre o Look ============ */
function LookMock() {
  const pecas: [string, string, string, boolean][] = [
    ["👚", "Regata Ribana Preta", "R$ 119", false],
    ["🩳", "Short Curve Preto", "R$ 159", true],
    ["👕", "Top Regata Preto", "R$ 149", false],
  ];
  return (
    <div className="w-full max-w-[440px] rounded-2xl border border-white/10 bg-[#081826] p-4 shadow-[0_30px_60px_rgba(0,0,0,.45)]">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-display text-[13px] font-bold">Compre o Look</p>
        <span className="rounded-full bg-amber px-2 py-0.5 font-mono text-[8.5px] font-bold uppercase text-navy-950">leve 3 · 25% off</span>
      </div>
      <div className="mb-3 grid grid-cols-3 gap-2">
        {pecas.map(([e, n, p, esgotadoG]) => (
          <div key={n} className="rounded-xl border border-amber/40 bg-navy-950/50 p-2.5">
            <div className="mb-1.5 flex items-start justify-between">
              <span className="grid h-4 w-4 place-items-center rounded border border-amber bg-amber text-[9px] font-bold text-navy-950">✓</span>
            </div>
            <div className="grid h-14 place-items-center rounded-lg bg-navy-800/40 text-2xl" aria-hidden>{e}</div>
            <p className="mt-1.5 truncate text-[9.5px] text-dim">{n}</p>
            <p className="font-display text-[12px] font-bold">{p}</p>
            <div className="mt-1.5 flex gap-1">
              {["P", "M", "G"].map((t) => (
                <span key={t} className={`grid h-5 w-5 place-items-center rounded border text-[8.5px] font-bold ${
                  t === "G" && esgotadoG ? "border-white/10 text-dim/40 line-through" : t === "M" ? "border-amber bg-amber text-navy-950" : "border-white/20 text-ink"
                }`}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mb-3 flex items-baseline justify-between rounded-xl border border-white/[.07] bg-navy-950/50 px-3.5 py-2.5">
        <span className="font-mono text-[9px] uppercase tracking-[0.08em] text-dim">total do look</span>
        <span>
          <span className="mr-2 text-[12px] font-semibold text-dim line-through">R$ 427</span>
          <span className="font-display text-[19px] font-black tracking-tight text-amber">R$ 320,25</span>
        </span>
      </div>
      <button type="button" className="w-full rounded-[10px] bg-amber py-2.5 font-display text-[13px] font-bold text-navy-950">
        Comprar Look
      </button>
      <p className="mt-2.5 text-center font-mono text-[8.5px] uppercase tracking-[0.08em] text-dim">
        tudo no carrinho num clique · sem recarregar a página
      </p>
    </div>
  );
}

/* ============ HERO ============ */
export function StlHero() {
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
          <span className="eyebrow">Pixel Commerce · Shop The Look</span>
          <h1 className="mb-5 font-display text-[clamp(32px,4.4vw,56px)] font-extrabold leading-[1.08] tracking-[-0.025em]">
            O look inteiro, <span className="text-amber">num clique só.</span>
          </h1>
          <p className="mb-7 max-w-[560px] text-[16.5px] text-dim">
            Transforme a página de qualquer produto numa vitrine de looks completos: o cliente vê o
            conjunto, seleciona o que quer, escolhe os tamanhos e adiciona tudo ao carrinho de uma vez —
            com desconto progressivo pra levar o look inteiro.
          </p>
          <div className="mb-2 flex items-baseline gap-2.5">
            <span className="font-display text-[44px] font-black leading-none tracking-tight">R$ 249</span>
            <span className="text-[15px] text-dim">/mês no pacote Pixel Conjuntos + Shop the Look · ou incluso no Growth</span>
          </div>
          <a href={waLink(CTA_MSG)} target="_blank" rel="noopener" className="btn-amber mt-4 inline-block">
            Quero looks vendendo na minha loja
          </a>
          <p className="mt-3.5 text-[13px] text-dim">Rodando em produção em lojas da plataforma · nativo WooCommerce · sem fidelidade</p>
        </Reveal>
        <Reveal delay={0.15} className="flex justify-center lg:justify-end">
          <LookMock />
        </Reveal>
      </div>
    </section>
  );
}

/* ============ PROBLEMA + FLUXO ============ */
export function StlProblema() {
  const passos = [
    "Cliente entra na página de um produto que faz parte de um look",
    "Vê o bloco 'Compre o Look' com as demais peças do conjunto, todas pré-selecionadas",
    "Desmarca o que não quiser e escolhe o tamanho de cada peça — esgotados aparecem riscados",
    "Vê o incentivo por faixa em tempo real: 'leve 3, ganhe 25%'",
    "Clica em 'Comprar Look' — tudo entra no carrinho lateral instantaneamente, com o desconto aplicado",
  ];
  return (
    <section className="border-t border-line bg-navy-900 py-24">
      <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.05fr]">
        <Reveal>
          <span className="eyebrow">O problema</span>
          <h2 className="mb-4 font-display text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.12] tracking-tight">
            Lojas de moda vendem looks. O WooCommerce vende uma peça por vez.
          </h2>
          <p className="text-[15px] text-dim">
            A experiência padrão obriga o cliente a caçar cada peça: vê a calça, sai da página, procura o
            top que combina, adiciona, volta, procura o tênis... <strong className="text-ink">a cada passo
            extra, uma chance de desistência.</strong> O Shop The Look elimina esse atrito — o combo inteiro
            aparece na própria página do produto, pronto pra ser comprado num único gesto.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <span className="eyebrow">O fluxo do cliente</span>
          <ol className="mt-4 flex flex-col gap-3">
            {passos.map((p, i) => (
              <li key={p} className="flex gap-3.5">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-amber/40 bg-amber/[.08] font-display text-[12px] font-black text-amber">{i + 1}</span>
                <span className="pt-0.5 text-[14px] text-dim">{p}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ DESCONTO PROGRESSIVO (interativo) ============ */
export function StlDesconto() {
  const [pecas, setPecas] = useState(3);
  const faixas = [
    { min: 4, off: 30 },
    { min: 3, off: 25 },
    { min: 2, off: 10 },
    { min: 0, off: 0 },
  ];
  const off = faixas.find((f) => pecas >= f.min)!.off;
  const precoPeca = 149;
  const total = pecas * precoPeca;
  const comDesc = Math.round(total * (1 - off / 100) * 100) / 100;
  const fmt = (n: number) => n.toLocaleString("pt-BR", { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  return (
    <section className="py-24">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Desconto progressivo por kit</span>
          <h2 className="mb-5 font-display text-[clamp(23px,2.8vw,36px)] font-extrabold leading-[1.15] tracking-tight">
            Quanto mais peças do look, maior o desconto. O cliente vê a conta em tempo real.
          </h2>
          <div className="flex flex-col gap-4 text-[15px] text-dim">
            <p>
              Dois modos configuráveis por kit: <strong className="text-ink">por quantidade de itens</strong>{" "}
              (4 peças = 30%, 3 = 25%, 2 = 10%) ou <strong className="text-ink">por valor do kit</strong>{" "}
              (acima de R$ 1.000 = 30%, acima de R$ 600 = 25%). O cliente sempre recebe o desconto da maior
              faixa atingida — e o painel mostra preço cheio riscado, preço com desconto e a economia.
            </p>
            <p>
              Compatível com cupons (os dois acumulam) — e com o toggle de ativar/desativar, você suspende
              os combos durante uma promoção geral da loja sem perder nenhuma configuração.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="card mx-auto w-full max-w-[420px] bg-navy-950/60 p-6">
            <p className="mb-3 font-display text-[15px] font-bold">Simule: quantas peças o cliente leva?</p>
            <div className="mb-5 flex gap-2">
              {[1, 2, 3, 4].map((n) => (
                <button key={n} type="button" onClick={() => setPecas(n)}
                  className={`flex-1 rounded-[10px] border py-2.5 font-display text-[15px] font-black transition-colors ${
                    pecas === n ? "border-amber bg-amber/10 text-amber" : "border-line text-dim"
                  }`}>
                  {n}
                </button>
              ))}
            </div>
            <div className="rounded-xl border border-amber/40 bg-amber/[.06] p-4 text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-dim">
                {off > 0 ? `faixa atingida: ${off}% off` : "sem desconto nesta faixa"}
              </p>
              <p className="font-display text-[30px] font-black tracking-tight text-amber">
                {off > 0 && <span className="mr-2 align-middle text-[15px] font-semibold text-dim line-through">R$ {fmt(total)}</span>}
                R$ {fmt(comDesc)}
              </p>
              <p className="text-[11px] text-dim">
                {off > 0 ? `economia de R$ ${fmt(total - comDesc)} — o empurrão pro look completo` : "adicione mais peças e veja a faixa virar"}
              </p>
            </div>
            <p className="mt-3 text-center font-mono text-[9px] uppercase tracking-[0.08em] text-dim">
              exemplo com peças de R$ 149 · faixas 2=10% · 3=25% · 4=30%
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ FUNCIONALIDADES ============ */
const recursos: [string, string, string][] = [
  ["🎯", "Curadoria pelo lojista", "Painel central (Produtos → Shop The Look) pra criar, buscar e gerenciar todos os looks. Cada look é associado a um produto anfitrião — que pode fazer parte do próprio conjunto."],
  ["🧵", "Produtos simples e variáveis", "Tamanho e cor por peça, com seleção automática do primeiro tamanho disponível ao carregar a página."],
  ["🚫", "Esgotado visível, não escondido", "Tamanhos esgotados aparecem riscados e não clicáveis — o cliente sabe que o tamanho existe. Produto totalmente esgotado sai do total sem quebrar a experiência."],
  ["🔀", "Ativar/desativar sem perder nada", "Toggle na listagem e no formulário: o look some da página sem ser excluído. Perfeito pra suspender combos durante promoções gerais."],
  ["🗂️", "Organização em escala", "Filtro por categoria, busca por nome, ordenação por métrica, ações em massa e paginação — pronto pra loja com centenas de combos."],
  ["📊", "Métricas por look", "Adições ao carrinho, pedidos pagos e taxa de conversão calculada por combinação. Você descobre quais looks vendem e ajusta os que não."],
  ["⚡", "Otimizado pra carrinho lateral", "Fluxo compatível com FunnelKit Cart: atualização instantânea, sem recarregar e sem requisições extras. Preços calculados no servidor a cada carregamento — nunca grava preço errado."],
  ["🧳", "Leve na migração", "Sem tabelas adicionais no banco: toda a configuração vive nos metadados do produto — backup e migração sem dor."],
];

export function StlRecursos() {
  return (
    <section className="border-t border-line bg-navy-900 py-24">
      <div className="wrap">
        <Reveal className="mb-14 max-w-[720px]">
          <span className="eyebrow">Funcionalidades</span>
          <h2 className="font-display text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Curadoria que vira venda direta.
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {recursos.map(([ic, t, d], i) => (
            <Reveal key={t} delay={i * 0.05} className="h-full">
              <article className="spot card h-full bg-navy-950/40 p-5 transition-colors hover:border-amber/40">
                <span className="text-xl" aria-hidden>{ic}</span>
                <h3 className="mb-1.5 mt-2 font-display text-[15px] font-bold tracking-tight">{t}</h3>
                <p className="text-[13px] text-dim">{d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ COMPARATIVO ============ */
type Cell = { v: "sim" | "nao"; note?: string };
const rows: [string, Cell, Cell][] = [
  ["Curadoria", { v: "sim", note: "100% curada pelo lojista, produto a produto" }, { v: "nao", note: "algoritmo, sem controle editorial" }],
  ["Desconto por combo", { v: "sim", note: "faixas progressivas configuráveis por look" }, { v: "nao", note: "normalmente não oferece" }],
  ["Visibilidade de esgotados", { v: "sim", note: "mostra riscado, vitrine completa" }, { v: "nao", note: "costuma ocultar" }],
  ["Métricas por combo", { v: "sim", note: "adições, compras e conversão por look" }, { v: "nao", note: "raramente existe" }],
  ["Ativar/desativar", { v: "sim", note: "toggle preserva toda a configuração" }, { v: "nao", note: "geralmente exige exclusão" }],
  ["Carrinho lateral", { v: "sim", note: "testado e otimizado com FunnelKit Cart" }, { v: "nao", note: "variável" }],
];

function Mark({ c }: { c: Cell }) {
  return (
    <div className="flex flex-col items-center gap-0.5 text-center">
      {c.v === "sim" ? <span className="font-bold text-amber">✓</span> : <span className="text-dim">—</span>}
      {c.note && <span className="text-[10.5px] leading-tight text-dim/80">{c.note}</span>}
    </div>
  );
}

export function StlComparativo() {
  return (
    <section id="comparativo" className="py-24">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[760px]">
          <span className="eyebrow">Comparativo · Curadoria vs recomendação automática</span>
          <h2 className="mb-4 font-display text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.12] tracking-tight">
            "Quem comprou isso também comprou..." não é um look.
          </h2>
          <p className="text-[15.5px] text-dim">
            Recomendação automática genérica junta produtos por estatística. O Shop The Look junta por{" "}
            <strong className="text-ink">estilo</strong> — a curadoria que a sua marca já faz nas fotos vira
            venda direta, com incentivo de preço pra fechar o conjunto.
          </p>
        </Reveal>
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line bg-navy-950/60">
                  <th className="p-4 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-dim">Critério</th>
                  <th className="w-[230px] p-4 text-center font-display text-[14px] font-extrabold text-amber">Shop The Look</th>
                  <th className="w-[230px] p-4 text-center font-display text-[14px] font-extrabold">Recomendação genérica</th>
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
          <p className="mt-4 max-w-[820px] text-[12.5px] text-dim">
            Detalhes técnicos: nativo WooCommerce (simples e variáveis), compatível com HPOS, testado com
            Flatsome e FunnelKit Cart, admin em português com tutorial embutido, responsivo (grade no
            desktop, lista vertical no mobile).
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ CTA ============ */
export function StlCTA() {
  return (
    <section className="border-t border-line bg-navy-900 py-20 text-center">
      <div className="wrap">
        <Reveal>
          <h2 className="mx-auto mb-4 max-w-[720px] font-display text-[clamp(24px,3vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Suas fotos já montam o look. <span className="text-amber">Falta ele ir pro carrinho inteiro.</span>
          </h2>
          <p className="mx-auto mb-8 max-w-[560px] text-[15.5px] text-dim">
            R$ 249/mês no pacote Pixel Conjuntos + Shop the Look, incluso no Growth, sem fidelidade. Ticket
            médio maior por estrutura — não por esforço.
          </p>
          <a href={waLink(CTA_MSG)} target="_blank" rel="noopener" className="btn-amber inline-block">
            Quero looks vendendo na minha loja
          </a>
        </Reveal>
      </div>
    </section>
  );
}
