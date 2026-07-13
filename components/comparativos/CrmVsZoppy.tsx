"use client";
import { useState } from "react";
import Reveal from "../Reveal";
import { waLink } from "../site/config";

const CTA_MSG = "Olá! Vi o comparativo Pixel CRM vs Zoppy e quero entender como funciona na minha loja.";

/* ============ HERO ============ */
export function CvHero() {
  return (
    <section
      className="pb-16 pt-[150px] text-center"
      style={{ background: "radial-gradient(800px 460px at 50% 0%, rgba(255,183,0,.09), transparent 60%), #021627" }}
    >
      <div className="wrap">
        <Reveal>
          <span className="eyebrow justify-center">Comparativo · CRM e fidelização</span>
          <h1 className="mx-auto mb-5 max-w-[880px] font-display text-[clamp(30px,4.2vw,56px)] font-extrabold leading-[1.08] tracking-[-0.025em]">
            Pixel CRM <span className="text-dim">vs</span> <span className="text-amber">Zoppy</span>
          </h1>
          <p className="mx-auto max-w-[640px] text-[16.5px] text-dim">
            A Zoppy é uma boa ferramenta — mais de 3 mil lojas usam. A diferença não está na lista de
            recursos: está na <strong className="text-ink">arquitetura</strong> e na{" "}
            <strong className="text-ink">conta no fim do mês</strong>. Aqui está a comparação honesta,
            ponto a ponto.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ MODELO DE PREÇO ============ */
export function CvModelo() {
  return (
    <section className="border-t border-line py-20">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[680px]">
          <span className="eyebrow">A primeira diferença aparece antes de contratar</span>
          <h2 className="font-display text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.12] tracking-tight">
            Um preço você descobre numa demonstração.<br />O outro está publicado nesta página.
          </h2>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <article className="card h-full bg-navy-800/15 p-7">
              <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.1em] text-dim">Modelo Zoppy</p>
              <h3 className="mb-4 font-display text-[19px] font-extrabold tracking-tight">
                Mensalidade que escala com as suas vendas
              </h3>
              <ul className="flex flex-col gap-3 text-[14px] text-dim">
                <li className="flex gap-2.5"><span className="text-dim">→</span> Planos baseados no número de vendas mensais da loja — quanto mais você vende, mais paga</li>
                <li className="flex gap-2.5"><span className="text-dim">→</span> Valor divulgado sob demonstração com especialista</li>
                <li className="flex gap-2.5"><span className="text-dim">→</span> SaaS externo: seus dados de clientes e compras são sincronizados para a plataforma deles</li>
                <li className="flex gap-2.5"><span className="text-dim">→</span> Mais um contrato, mais uma fatura, mais um fornecedor no seu stack</li>
              </ul>
            </article>
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <article className="glow-border h-full rounded-2xl border border-amber/60 bg-gradient-to-b from-amber/[.07] to-transparent p-7">
              <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.1em] text-amber">Modelo Pixel CRM</p>
              <h3 className="mb-4 font-display text-[19px] font-extrabold tracking-tight">
                Incluso no plano da plataforma. Preço fixo, público.
              </h3>
              <ul className="flex flex-col gap-3 text-[14px] text-dim">
                <li className="flex gap-2.5"><span className="font-bold text-amber">✓</span> CRM completo incluso no plano Growth (R$ 1.197/mês) — junto com servidor, segurança, analytics, provador e fidelização</li>
                <li className="flex gap-2.5"><span className="font-bold text-amber">✓</span> Vender mais não aumenta a mensalidade: 0% de comissão, enquadramento só por faixa de pedidos</li>
                <li className="flex gap-2.5"><span className="font-bold text-amber">✓</span> Roda dentro do seu WooCommerce: os dados de clientes nunca saem da sua loja</li>
                <li className="flex gap-2.5"><span className="font-bold text-amber">✓</span> Um fornecedor, uma fatura — CRM, infra, segurança e suporte no mesmo contrato</li>
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ TABELA RECURSO A RECURSO ============ */
type Cell = { v: "sim" | "nao" | "info"; note?: string };
const rows: [string, Cell, Cell][] = [
  ["Matriz RFM (quem compra, quem sumiu, quem vale reativar)", { v: "sim" }, { v: "sim" }],
  ["Cashback / giftback para recompra", { v: "sim", note: "módulo Fidelização + Cashback" }, { v: "sim", note: "giftback" }],
  ["Automações de recompra e reativação", { v: "sim" }, { v: "sim" }],
  ["Campanhas segmentadas por WhatsApp / e-mail", { v: "sim", note: "via PP Whatsapp — API oficial Meta, app seu" }, { v: "sim", note: "WhatsApp, SMS e e-mail" }],
  ["Clientes registrados + guests unificados na mesma base", { v: "sim" }, { v: "info", note: "não divulgado" }],
  ["Risco de churn pela cadência individual de compra de cada cliente", { v: "sim" }, { v: "info", note: "não divulgado" }],
  ["Venda líquida real (bruta − frete − reembolsos) como métrica", { v: "sim", note: "integração nativa Pixel Reports" }, { v: "info", note: "não divulgado" }],
  ["Dados de clientes permanecem no banco da sua loja", { v: "sim" }, { v: "nao", note: "SaaS externo — dados sincronizados para a plataforma" }],
  ["Funciona sem depender de integração com terceiros", { v: "sim", note: "plugin nativo WooCommerce" }, { v: "nao", note: "integração com 20+ plataformas" }],
  ["Preço público, sem demonstração obrigatória", { v: "sim", note: "nesta página" }, { v: "nao", note: "sob consulta, por volume de vendas" }],
  ["Mensalidade não aumenta quando você vende mais", { v: "sim" }, { v: "nao", note: "planos por número de vendas" }],
  ["Suporte de quem escreveu o código do CRM", { v: "sim" }, { v: "nao" }],
];

function Mark({ c }: { c: Cell }) {
  const icon = c.v === "sim" ? <span className="font-bold text-amber">✓</span>
    : c.v === "nao" ? <span className="text-dim">—</span>
    : <span className="font-mono text-[11px] text-dim">?</span>;
  return (
    <div className="flex flex-col items-center gap-0.5 text-center">
      {icon}
      {c.note && <span className="text-[10.5px] leading-tight text-dim/80">{c.note}</span>}
    </div>
  );
}

export function CvTabela() {
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
                  <th className="w-[190px] p-4 text-center font-display text-[14px] font-extrabold text-amber">Pixel CRM</th>
                  <th className="w-[190px] p-4 text-center font-display text-[14px] font-extrabold">Zoppy</th>
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
            "?" = não divulgado publicamente pela Zoppy até a data desta análise. Informações levantadas em
            julho/2026 a partir do site e materiais públicos da Zoppy, sujeitas a alteração. Zoppy é marca de
            seus respectivos donos.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ CALCULADORA ============ */
export function CvCalculadora() {
  const [mensal, setMensal] = useState(500);
  const anual = mensal * 12;
  const fmt = (n: number) => n.toLocaleString("pt-BR");
  return (
    <section className="border-t border-line py-20">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">A ponta do lápis</span>
          <h2 className="mb-5 font-display text-[clamp(23px,2.8vw,36px)] font-extrabold leading-[1.15] tracking-tight">
            Recebeu uma proposta de CRM? Faça a conta.
          </h2>
          <div className="flex flex-col gap-4 text-[15px] text-dim">
            <p>
              Como o preço da Zoppy varia por loja (e não é público), a conta justa é com{" "}
              <strong className="text-ink">a proposta que você recebeu</strong>. Digite o valor mensal ao
              lado e veja quanto sai por ano — um dinheiro que, no Pixel Commerce, já está{" "}
              <strong className="text-ink">dentro do plano Growth</strong>, junto com servidor, segurança,
              analytics, provador e fidelização.
            </p>
            <p>
              E tem o custo que não aparece na fatura: CRM externo significa sincronização de dados,
              conciliação entre painéis que nunca batem, e mais um suporte pra acionar quando algo quebra.
              No Pixel CRM, o dado nasce e mora no banco da sua loja — a métrica do CRM é a mesma do
              financeiro.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="card mx-auto w-full max-w-[420px] bg-navy-950/60 p-6">
            <p className="mb-4 font-display text-[15px] font-bold">Quanto custa o CRM avulso?</p>
            <label className="mb-1 block font-mono text-[10.5px] uppercase tracking-[0.08em] text-dim">
              Mensalidade proposta (R$/mês)
            </label>
            <input
              type="number" min={0} value={mensal}
              onChange={(e) => setMensal(Math.max(0, Number(e.target.value)))}
              className="w-full rounded-[10px] border border-line bg-navy-900/60 px-4 py-2.5 text-[14px] text-ink outline-none transition-colors focus:border-amber"
            />
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-line bg-navy-900/60 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-dim">Custo em 12 meses</p>
                <p className="font-display text-[22px] font-black tracking-tight text-[#FF8A8A]">R$ {fmt(anual)}</p>
              </div>
              <div className="rounded-xl border border-amber/40 bg-amber/[.06] p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-dim">No Pixel Commerce</p>
                <p className="font-display text-[22px] font-black tracking-tight text-amber">incluso</p>
              </div>
            </div>
            <p className="mt-4 text-center text-[12.5px] text-dim">
              CRM + Fidelização + Cashback já fazem parte do plano Growth —{" "}
              <a href="/planos" className="border-b border-amber/50 text-amber no-underline">ver planos</a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ ARQUITETURA ============ */
export function CvArquitetura() {
  const pontos = [
    ["Dado que não viaja", "CRM externo depende de sincronização — e sincronização atrasa, falha e duplica. O Pixel CRM lê o banco da loja diretamente: cliente, pedido e estoque sempre na versão verdadeira."],
    ["LGPD sem aflição", "Dados de clientes que não saem da sua infraestrutura são dados que você controla: uma base a menos circulando por aí, um subprocessador a menos no seu mapa de dados."],
    ["Métricas que batem", "O CRM calcula sobre a mesma venda líquida do Pixel Reports (bruta − frete − reembolsos). O número do CRM, do analytics e do financeiro é um só."],
    ["Ecossistema, não integração", "Fidelização, WhatsApp oficial, provador, relatórios: módulos que nasceram juntos e conversam nativamente — não ferramentas coladas por API torcendo pra nada quebrar."],
  ];
  return (
    <section className="bg-navy-900 py-20">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[720px]">
          <span className="eyebrow">Por que "nativo" importa</span>
          <h2 className="font-display text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.12] tracking-tight">
            A diferença que nenhuma tabela de recursos mostra
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
export function CvCTA() {
  return (
    <section className="border-t border-line py-20 text-center">
      <div className="wrap">
        <Reveal>
          <h2 className="mx-auto mb-4 max-w-[680px] font-display text-[clamp(24px,3vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Quer ver o Pixel CRM rodando com os dados da sua loja?
          </h2>
          <p className="mx-auto mb-8 max-w-[520px] text-[15.5px] text-dim">
            Sem demonstração agendada pra semana que vem: chama no WhatsApp, a gente conversa hoje.
          </p>
          <a
            href={waLink(CTA_MSG)}
            target="_blank"
            rel="noopener"
            className="btn-amber inline-block"
          >
            Falar com a Pixel no WhatsApp
          </a>
          <p className="mx-auto mt-8 max-w-[780px] text-[11px] leading-relaxed text-dim">
            Comparativo elaborado em julho/2026 com base em informações públicas do site e materiais da
            Zoppy (zoppy.com.br), sujeitas a alteração sem aviso. Zoppy é marca registrada de seus
            respectivos titulares, sem qualquer vínculo com a Pixel Partners. Este material tem caráter
            informativo; recursos e preços do Pixel Commerce conforme página de planos vigente.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
