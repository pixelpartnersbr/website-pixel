"use client";
import { useState } from "react";
import Reveal from "../Reveal";
import { waLink } from "../site/config";

const CTA_MSG = "Olá! Vi o comparativo Pixel Commerce vs Shopify e quero entender a conta pra minha loja.";

/* ============ HERO ============ */
export function ShHero() {
  return (
    <section
      className="pb-16 pt-[150px] text-center"
      style={{ background: "radial-gradient(800px 460px at 50% 0%, rgba(255,183,0,.09), transparent 60%), #021627" }}
    >
      <div className="wrap">
        <Reveal>
          <span className="eyebrow justify-center">Comparativo · Plataforma de e-commerce</span>
          <h1 className="mx-auto mb-5 max-w-[880px] font-display text-[clamp(30px,4.2vw,56px)] font-extrabold leading-[1.08] tracking-[-0.025em]">
            Pixel Commerce <span className="text-dim">vs</span> <span className="text-amber">Shopify</span>
          </h1>
          <p className="mx-auto max-w-[660px] text-[16.5px] text-dim">
            O Shopify é uma plataforma excelente — globalmente. A questão é que{" "}
            <strong className="text-ink">no Brasil a conta muda</strong>: mensalidade em dólar, taxa da
            plataforma sobre cada venda e apps pagos pra quase tudo. Aqui está a comparação com os números
            na mesa.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ MODELO ============ */
export function ShModelo() {
  return (
    <section className="border-t border-line py-20">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[720px]">
          <span className="eyebrow">Os dois modelos</span>
          <h2 className="font-display text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.12] tracking-tight">
            Um cobra um pedaço de cada venda, em dólar.<br />O outro cobra um preço fixo, em reais.
          </h2>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <article className="card h-full bg-navy-800/15 p-7">
              <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.1em] text-dim">Modelo Shopify no Brasil</p>
              <h3 className="mb-4 font-display text-[19px] font-extrabold tracking-tight">
                Mensalidade em dólar + taxa sobre cada venda + apps
              </h3>
              <ul className="flex flex-col gap-3 text-[14px] text-dim">
                <li className="flex gap-2.5"><span className="text-dim">→</span> Planos em dólar (Basic US$ 29, Grow US$ 79/mês no anual) — sua mensalidade oscila com o câmbio</li>
                <li className="flex gap-2.5"><span className="text-dim">→</span> Shopify Payments não opera no Brasil: toda venda paga a taxa do seu gateway <strong className="text-ink">+ 1% a 2% para a Shopify</strong>, conforme o plano</li>
                <li className="flex gap-2.5"><span className="text-dim">→</span> CRM, fidelização, provador, atacado: cada capacidade é um app pago — muitos também em dólar</li>
                <li className="flex gap-2.5"><span className="text-dim">→</span> Plataforma fechada: sem acesso a servidor, banco ou código; migrar significa reconstruir</li>
              </ul>
            </article>
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <article className="glow-border h-full rounded-2xl border border-amber/60 bg-gradient-to-b from-amber/[.07] to-transparent p-7">
              <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.1em] text-amber">Modelo Pixel Commerce</p>
              <h3 className="mb-4 font-display text-[19px] font-extrabold tracking-tight">
                Preço fixo em reais. 0% sobre as vendas. Loja sua.
              </h3>
              <ul className="flex flex-col gap-3 text-[14px] text-dim">
                <li className="flex gap-2.5"><span className="font-bold text-amber">✓</span> Planos fixos em reais (R$ 597 a R$ 2.497/mês) — vender mais não aumenta a fatura</li>
                <li className="flex gap-2.5"><span className="font-bold text-amber">✓</span> 0% de taxa da plataforma: você paga só o seu gateway, negociado por você</li>
                <li className="flex gap-2.5"><span className="font-bold text-amber">✓</span> CRM, fidelização, provador, atacado, vendedores: módulos inclusos no plano ou avulsos com preço fixo público</li>
                <li className="flex gap-2.5"><span className="font-bold text-amber">✓</span> Núcleo WooCommerce open-source, servidor seu na PrimePress, banco e código acessíveis — sem lock-in</li>
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
  ["Mensalidade fixa em reais", { v: "sim" }, { v: "nao", note: "planos em USD, sujeitos a câmbio" }],
  ["0% de taxa da plataforma sobre vendas", { v: "sim" }, { v: "nao", note: "1% a 2% por venda no BR, além do gateway" }],
  ["Gateway nacional livre, sem sobretaxa da plataforma", { v: "sim" }, { v: "nao" }],
  ["CRM + fidelização + cashback inclusos ou a preço fixo", { v: "sim" }, { v: "nao", note: "via apps pagos avulsos" }],
  ["Provador de tamanho, atacado B2B, código de vendedor nativos", { v: "sim" }, { v: "nao", note: "via apps de terceiros" }],
  ["Servidor dedicado à sua loja, com acesso", { v: "sim", note: "PrimePress" }, { v: "nao", note: "infra SaaS compartilhada, sem acesso" }],
  ["Acesso ao banco de dados e ao código", { v: "sim", note: "núcleo WooCommerce open-source" }, { v: "nao", note: "plataforma proprietária" }],
  ["Sair sem reconstruir a loja", { v: "sim", note: "WooCommerce roda em qualquer lugar" }, { v: "nao", note: "tema e apps não migram" }],
  ["Suporte em português de quem escreveu o código", { v: "sim" }, { v: "nao", note: "suporte global da plataforma" }],
  ["Ecossistema global gigante de apps e temas", { v: "nao", note: "módulos proprietários + plugins Woo" }, { v: "sim" }],
  ["Operação internacional multi-moeda pronta", { v: "info", note: "possível via WooCommerce, sob projeto" }, { v: "sim" }],
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

export function ShTabela() {
  return (
    <section className="bg-navy-900 py-20">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[680px]">
          <span className="eyebrow">Lado a lado</span>
          <h2 className="font-display text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.12] tracking-tight">
            O que cada plataforma entrega no Brasil
          </h2>
        </Reveal>
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line bg-navy-950/60">
                  <th className="p-4 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-dim">Critério</th>
                  <th className="w-[200px] p-4 text-center font-display text-[14px] font-extrabold text-amber">Pixel Commerce</th>
                  <th className="w-[200px] p-4 text-center font-display text-[14px] font-extrabold">Shopify (BR)</th>
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
            "~" = possível com ressalvas. Análise de julho/2026 com base em informações públicas da Shopify
            e de materiais do mercado brasileiro; valores e condições sujeitos a alteração. Shopify é marca
            de seus respectivos titulares.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ CALCULADORA ============ */
export function ShCalculadora() {
  const [fat, setFat] = useState(60000);
  const [apps, setApps] = useState(300);
  const [cambio, setCambio] = useState(5.5);
  const [plano, setPlano] = useState<"basic" | "grow">("grow");
  const usd = plano === "basic" ? 29 : 79;
  const taxa = plano === "basic" ? 0.02 : 0.01;
  const shopifyTotal = Math.round(usd * cambio + fat * taxa + apps);
  const fmt = (n: number) => n.toLocaleString("pt-BR");
  const input =
    "w-full rounded-[10px] border border-line bg-navy-900/60 px-4 py-2.5 text-[14px] text-ink outline-none transition-colors focus:border-amber";
  return (
    <section className="border-t border-line py-20">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">A ponta do lápis</span>
          <h2 className="mb-5 font-display text-[clamp(23px,2.8vw,36px)] font-extrabold leading-[1.15] tracking-tight">
            A taxa de 1% parece pequena. Até você multiplicar pelo seu faturamento.
          </h2>
          <div className="flex flex-col gap-4 text-[15px] text-dim">
            <p>
              No Brasil, sem Shopify Payments, cada venda paga a taxa do seu gateway{" "}
              <strong className="text-ink">mais a taxa da Shopify</strong> — 2% no Basic, 1% no Grow. É um
              sócio silencioso: quanto mais você vende, mais ele leva. Some a mensalidade em dólar e os
              apps, e compare com o preço fixo do Pixel Commerce.
            </p>
            <p>
              Todos os campos são editáveis — coloque os números da <strong className="text-ink">sua</strong>{" "}
              operação. E repare no detalhe: o total da esquerda cresce com as suas vendas; o da direita,
              nunca.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="card mx-auto w-full max-w-[440px] bg-navy-950/60 p-6">
            <label className="mb-1 block font-mono text-[10.5px] uppercase tracking-[0.08em] text-dim">
              Faturamento mensal (R$)
            </label>
            <input type="number" min={0} className={input} value={fat}
              onChange={(e) => setFat(Math.max(0, Number(e.target.value)))} />
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block font-mono text-[10.5px] uppercase tracking-[0.08em] text-dim">
                  Apps Shopify (R$/mês)
                </label>
                <input type="number" min={0} className={input} value={apps}
                  onChange={(e) => setApps(Math.max(0, Number(e.target.value)))} />
              </div>
              <div>
                <label className="mb-1 block font-mono text-[10.5px] uppercase tracking-[0.08em] text-dim">
                  Câmbio (R$/US$)
                </label>
                <input type="number" min={0} step="0.1" className={input} value={cambio}
                  onChange={(e) => setCambio(Math.max(0, Number(e.target.value)))} />
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              {(["basic", "grow"] as const).map((p) => (
                <button key={p} type="button" onClick={() => setPlano(p)}
                  className={`flex-1 rounded-[10px] border px-3 py-2 font-display text-[12.5px] font-bold transition-colors ${
                    plano === p ? "border-amber bg-amber/10 text-amber" : "border-line text-dim"
                  }`}>
                  {p === "basic" ? "Basic · US$ 29 · taxa 2%" : "Grow · US$ 79 · taxa 1%"}
                </button>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-line bg-navy-900/60 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-dim">Shopify por mês</p>
                <p className="font-display text-[22px] font-black tracking-tight text-[#FF8A8A]">R$ {fmt(shopifyTotal)}</p>
                <p className="text-[10.5px] text-dim">mensalidade + {taxa * 100}% das vendas + apps</p>
              </div>
              <div className="rounded-xl border border-amber/40 bg-amber/[.06] p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-dim">Pixel Growth</p>
                <p className="font-display text-[22px] font-black tracking-tight text-amber">R$ 1.297</p>
                <p className="text-[10.5px] text-dim">fixo · 0% sobre vendas · módulos inclusos</p>
              </div>
            </div>
            <p className="mt-4 text-center text-[12.5px] text-dim">
              E o gateway você paga igual nos dois — a diferença é que aqui ele é só seu.{" "}
              <a href="/planos" className="border-b border-amber/50 text-amber no-underline">ver planos</a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ ARQUITETURA ============ */
export function ShArquitetura() {
  const pontos = [
    ["Dono, não inquilino", "No Shopify você aluga uma loja pronta num prédio deles. No Pixel Commerce a loja é sua — código aberto, servidor seu, banco seu. Se um dia quiser sair, leva tudo."],
    ["Fatura em reais", "Mensalidade em dólar significa que o Fed e o câmbio mexem na sua planilha. Preço fixo em reais significa que a sua única variável é vender."],
    ["Capacidade sem taxímetro", "Cada app do Shopify é uma mensalidade nova. Aqui vale a regra da casa: capacidade se paga uma vez, canal se paga à parte, nada se paga duas vezes."],
    ["Quem responde escreveu o código", "Problema no checkout às 23h de Black Friday: de um lado, ticket pro suporte global; do outro, o time que escreveu o módulo — e que já está em war-room com você."],
  ];
  return (
    <section className="bg-navy-900 py-20">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[720px]">
          <span className="eyebrow">Por que a arquitetura decide</span>
          <h2 className="font-display text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.12] tracking-tight">
            A diferença de fundo: alugar ou ser dono
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
export function ShCTA() {
  return (
    <section className="border-t border-line py-20 text-center">
      <div className="wrap">
        <Reveal>
          <h2 className="mx-auto mb-4 max-w-[720px] font-display text-[clamp(24px,3vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Quer a conta feita com os números da sua loja?
          </h2>
          <p className="mx-auto mb-8 max-w-[540px] text-[15.5px] text-dim">
            Manda seu faturamento e seu mix de pagamento no WhatsApp — a gente devolve a comparação
            completa, sem compromisso.
          </p>
          <a href={waLink(CTA_MSG)} target="_blank" rel="noopener" className="btn-amber inline-block">
            Falar com a Pixel no WhatsApp
          </a>
          <p className="mx-auto mt-8 max-w-[820px] text-[11px] leading-relaxed text-dim">
            Comparativo elaborado em julho/2026 com base em informações públicas da Shopify (shopify.com) e
            de materiais do mercado brasileiro de e-commerce, sujeitas a alteração sem aviso. Preços da
            Shopify em dólar americano, faturados conforme política vigente da própria Shopify; taxa de
            transação de terceiros aplicável no Brasil na ausência do Shopify Payments, conforme plano.
            Valores convertidos na calculadora usam o câmbio informado pelo usuário. Shopify é marca
            registrada de seus respectivos titulares, sem qualquer vínculo com a Pixel Partners. Material
            informativo; recursos e preços do Pixel Commerce conforme página de planos vigente.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
