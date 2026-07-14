"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { waLink } from "./site/config";

const CTA_MSG = "Olá! Quero ativar o Pixel CRM na minha loja e fazer minha base comprar de novo.";

/* ============ MOCK: dashboard RFM ============ */
function DashMock() {
  const segs: [string, string, string][] = [
    ["Campeões", "412", "bg-amber/20 border-amber/50 text-amber"],
    ["Fiéis", "1.208", "border-white/15 text-ink"],
    ["Promissores", "2.340", "border-white/15 text-ink"],
    ["Em risco", "861", "border-[#FF8A8A]/40 text-[#FF8A8A]"],
    ["Hibernando", "1.577", "border-white/10 text-dim"],
    ["Perdidos", "1.602", "border-white/10 text-dim"],
  ];
  return (
    <div className="w-full max-w-[440px] rounded-2xl border border-white/10 bg-[#081826] p-4 shadow-[0_30px_60px_rgba(0,0,0,.45)]">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-display text-[13px] font-bold">Pixel CRM · Segmentos RFM</p>
        <span className="font-mono text-[9px] uppercase tracking-[0.08em] text-dim">8.000 contatos</span>
      </div>
      <div className="mb-4 grid grid-cols-3 gap-2">
        {segs.map(([n, v, cls]) => (
          <div key={n} className={`rounded-lg border p-2.5 ${cls}`}>
            <p className="font-display text-[15px] font-black leading-none">{v}</p>
            <p className="mt-1 text-[9.5px] opacity-80">{n}</p>
          </div>
        ))}
      </div>
      <div className="mb-3 rounded-xl border border-white/[.07] bg-navy-950/50 p-3">
        <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.08em] text-dim">Risco de churn · cadência individual</p>
        {[["Baixo", 62, "bg-amber/70"], ["Médio", 21, "bg-amber/40"], ["Alto", 11, "bg-[#FF8A8A]/60"], ["Crítico", 6, "bg-[#FF8A8A]"]].map(([l, p, c]) => (
          <div key={l as string} className="mb-1.5 flex items-center gap-2">
            <span className="w-12 text-[9.5px] text-dim">{l}</span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/[.06]">
              <div className={`h-full rounded-full ${c}`} style={{ width: `${p}%` }} />
            </div>
            <span className="w-8 text-right font-mono text-[9px] text-dim">{p}%</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-xl border border-amber/40 bg-amber/[.07] p-3">
        <div>
          <p className="text-[10px] text-dim">Automação ativa</p>
          <p className="font-display text-[11.5px] font-bold">Em risco → reconquista via WhatsApp</p>
        </div>
        <span className="rounded-full bg-amber px-2 py-0.5 font-mono text-[8.5px] font-bold uppercase text-navy-950">rodando</span>
      </div>
    </div>
  );
}

/* ============ HERO ============ */
export function CrmHero() {
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
          <span className="eyebrow">Pixel Commerce · Pixel CRM</span>
          <h1 className="mb-5 font-display text-[clamp(30px,4.2vw,54px)] font-extrabold leading-[1.08] tracking-[-0.025em]">
            Sua loja já pagou caro por cada cliente.<br />
            <span className="text-amber">O Pixel CRM faz eles comprarem de novo.</span>
          </h1>
          <p className="mb-7 max-w-[560px] text-[16.5px] text-dim">
            CRM completo dentro do seu WooCommerce: segmentação RFM, risco de churn, canais de aquisição,
            campanhas e automações de WhatsApp — com os seus dados na sua loja, sem mensalidade que cresce
            junto com as suas vendas.
          </p>
          <div className="mb-2 flex items-baseline gap-2.5">
            <span className="font-display text-[44px] font-black leading-none tracking-tight">R$ 399</span>
            <span className="text-[15px] text-dim">/mês por loja · contatos ilimitados · ou incluso no Growth</span>
          </div>
          <a href={waLink(CTA_MSG)} target="_blank" rel="noopener" className="btn-amber mt-4 inline-block">
            Quero ativar na minha loja
          </a>
          <p className="mt-3.5 text-[13px] text-dim">Nativo WooCommerce · onboarding incluso · sem fidelidade</p>
        </Reveal>
        <Reveal delay={0.15} className="flex justify-center lg:justify-end">
          <DashMock />
        </Reveal>
      </div>
    </section>
  );
}

/* ============ BARRA DE DOR ============ */
export function CrmDor() {
  const dores = ["CPM subiu de novo?", "Sua loja só vende quando anuncia?", "Quantos clientes você tem parados na base?"];
  return (
    <section className="border-y border-line bg-navy-900 py-8">
      <div className="wrap flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
        {dores.map((d) => (
          <p key={d} className="font-display text-[clamp(15px,1.5vw,19px)] font-bold tracking-tight text-dim">
            <span className="text-amber">→</span> {d}
          </p>
        ))}
      </div>
    </section>
  );
}

/* ============ A MATEMÁTICA DA BASE PARADA ============ */
export function CrmMatematica() {
  const [base, setBase] = useState(8000);
  const [ticket, setTicket] = useState(250);
  const umPP = Math.round(base * 0.01 * ticket);
  const fmt = (n: number) => n.toLocaleString("pt-BR");
  const input =
    "w-full rounded-[10px] border border-line bg-navy-900/60 px-4 py-2.5 text-[14px] text-ink outline-none transition-colors focus:border-amber";
  return (
    <section className="py-24">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">O que a sua base vale</span>
          <h2 className="mb-5 font-display text-[clamp(24px,3vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Adquirir cliente novo custa 5 a 7× mais do que vender pra quem já comprou.
          </h2>
          <div className="flex flex-col gap-4 text-[15px] text-dim">
            <p>
              E aumentar a retenção em 5% eleva o lucro de 25% a 95% — estudos clássicos de Bain &
              Company/HBR, referência de mercado, não promessa. O dinheiro que você já gastou em tráfego
              está <strong className="text-ink">dormindo na base</strong>.
            </p>
            <p>
              Faça a conta com os seus números ao lado: cada <strong className="text-ink">1 ponto
              percentual</strong> a mais de recompra é receita que não pediu R$ 1 de anúncio.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="card mx-auto w-full max-w-[420px] bg-navy-950/60 p-6">
            <p className="mb-4 font-display text-[15px] font-bold">Quanto vale +1pp de recompra?</p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block font-mono text-[10.5px] uppercase tracking-[0.08em] text-dim">Clientes na base</label>
                <input type="number" min={0} className={input} value={base} onChange={(e) => setBase(Math.max(0, Number(e.target.value)))} />
              </div>
              <div>
                <label className="mb-1 block font-mono text-[10.5px] uppercase tracking-[0.08em] text-dim">Ticket médio (R$)</label>
                <input type="number" min={0} className={input} value={ticket} onChange={(e) => setTicket(Math.max(0, Number(e.target.value)))} />
              </div>
            </div>
            <div className="mt-5 rounded-xl border border-amber/40 bg-amber/[.06] p-4 text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-dim">cada +1pp de recompra ≈</p>
              <p className="font-display text-[30px] font-black tracking-tight text-amber">R$ {fmt(umPP)}/ano</p>
              <p className="text-[11px] text-dim">≈ {fmt(Math.round(base * 0.01))} pedidos a mais, sem gastar em anúncio</p>
            </div>
            <p className="mt-4 text-center text-[12.5px] text-dim">
              O CRM ataca isso em três frentes: reconquista automática do "Alto risco", lançamento antecipado
              pros "Campeões" e verba pro canal com maior LTV.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ AS 4 CAMADAS ============ */
const camadas: [string, string, string[]][] = [
  ["01 · Inteligência de retenção", "Os números que dizem a verdade sobre a sua base", [
    "Vendas líquidas de verdade: LTV e faturamento como bruto − frete − reembolsos — a mesma régua do Pixel Reports",
    "Taxa de recompra, recorrentes vs compra única, intervalo médio entre pedidos e tempo até a 2ª compra",
    "Retenção por coorte: de cada safra mensal, quantos % voltaram em M1, M2, M3…",
    "Receita nova vs recorrente por mês — o gráfico que mostra o quanto você depende de mídia paga",
  ]],
  ["02 · CRM operacional", "A base inteira, organizada e acionável", [
    "Clientes cadastrados + compradores convidados numa lista só, com filtros combináveis e exportação CSV",
    "Tags coloridas, notas da equipe e timeline 360°: pedidos + toda mensagem de WhatsApp no perfil",
    "Audiências salvas: qualquer combinação de filtros reaplicada com um clique",
    "Opt-out LGPD por contato, respeitado automaticamente em qualquer disparo",
  ]],
  ["03 · Aquisição e produto", "Qual mídia traz cliente bom — não só cliente", [
    "Canal de aquisição por cliente: Google, Meta e TikTok Ads via click-ID (gclid/fbclid/ttclid), mesmo sem UTM",
    "LTV e recompra por canal + produtos porta-de-entrada com LTV de quem entrou por eles",
    "Comprados juntos: os pares que viram kits e cross-sell",
    "Mapa do Brasil interativo: receita por estado, clicável até no celular",
  ]],
  ["04 · Saúde da base e automação", "O vendedor que nunca esquece de chamar o cliente sumido", [
    "Risco de churn pela cadência individual: quem compra a cada 90 dias não é 'perdido' aos 60",
    "Automações por segmento: entrou em 'Em risco' → recebe a reconquista. Roda sozinha, com cooldown e teto diário",
    "Campanhas de WhatsApp direto da lista filtrada — API oficial ou não oficial",
    "Qualidade de dados: duplicados, inválidos e leads mortos fora antes de gastar com disparo",
  ]],
];

export function CrmCamadas() {
  return (
    <section className="border-t border-line bg-navy-900 py-24">
      <div className="wrap">
        <Reveal className="mb-14 max-w-[720px]">
          <span className="eyebrow">O que ele faz</span>
          <h2 className="font-display text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Quatro camadas, do diagnóstico à receita.
          </h2>
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-2">
          {camadas.map(([t, sub, items], i) => (
            <Reveal key={t} delay={i * 0.06} className="h-full">
              <article className="spot card h-full bg-navy-950/40 p-7">
                <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.1em] text-amber">{t}</p>
                <h3 className="mb-4 font-display text-[18px] font-extrabold tracking-tight">{sub}</h3>
                <ul className="flex flex-col gap-2.5">
                  {items.map((it) => (
                    <li key={it} className="flex gap-2.5 text-[13.5px] text-dim">
                      <span className="mt-px shrink-0 font-bold text-amber">✓</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ WHATSAPP ============ */
export function CrmWhatsapp() {
  return (
    <section className="py-20">
      <div className="wrap grid items-center gap-10 lg:grid-cols-[1fr_.9fr]">
        <Reveal>
          <span className="eyebrow">WhatsApp do seu jeito</span>
          <h2 className="mb-4 font-display text-[clamp(23px,2.8vw,36px)] font-extrabold leading-[1.15] tracking-tight">
            Oficial ou não oficial — a escolha é sua, a proteção é nossa.
          </h2>
          <div className="flex flex-col gap-4 text-[15px] text-dim">
            <p>
              <strong className="text-ink">API oficial</strong> (Meta Cloud API / 360dialog): templates
              aprovados, escala e o selo verde — via canal WhatsApp da plataforma.{" "}
              <strong className="text-ink">API não oficial</strong> (Evolution/Waha): mensagem livre no
              número que você já usa, com ritmo controlado e proteções deliberadas contra bloqueio.
            </p>
            <p>
              SaaS de CRM geralmente força um caminho só — e ainda cobra por mensagem em cima. Aqui, toda
              mensagem enviada (sucesso e falha) fica registrada na timeline do contato.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="spot card bg-navy-950/40 p-6">
            <p className="mb-4 font-display text-[15px] font-bold">A regra da casa, de novo</p>
            <p className="text-[14px] text-dim">
              <strong className="text-amber">Capacidade se paga uma vez, canal se paga à parte, nada se
              paga duas vezes.</strong> O Pixel CRM é a capacidade. O canal WhatsApp oficial (R$ 199/mês)
              é a voz. Ativou os dois? As automações e campanhas falam WhatsApp sem nenhum custo adicional
              de módulo.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ DIFERENCIAIS ============ */
const difs: [string, string][] = [
  ["Seus dados ficam na sua loja", "SaaS de CRM copia sua base pro servidor deles. O Pixel CRM roda dentro do seu WordPress: LGPD simplificada, sem operador externo, sem ficar refém — cancelou um SaaS, perdeu histórico e automações."],
  ["Preço que não cresce com as vendas", "SaaS de retenção cobra por volume de pedidos ou tamanho de base: você é punido pelo próprio sucesso. Aqui é assinatura fixa, contatos ilimitados."],
  ["Números que batem com o Pixel Reports", "Mesma venda líquida, mesma classificação de canais. O gestor não fica com dois relatórios brigando entre si."],
  ["Churn por cadência individual", "Cliente que compra a cada 90 dias não é 'perdido' aos 60 — e o que compra a cada 20 está em risco aos 45. A régua é o próprio cliente, não uma média genérica."],
  ["Cashback pela mesma plataforma", "Giftback e pontos são o módulo Fidelização + Cashback — que conversa nativamente com os segmentos do CRM. Capacidades irmãs, nunca cobradas duas vezes."],
  ["Feito por quem opera e-commerce", "Não é software de prateleira: é a ferramenta que a Pixel usa pra gerir as lojas que administra. Suporte de quem conhece a sua loja por dentro."],
];

export function CrmDiferenciais() {
  return (
    <section className="border-t border-line bg-navy-900 py-24">
      <div className="wrap">
        <Reveal className="mb-14 max-w-[720px]">
          <span className="eyebrow">Por que este e não um SaaS</span>
          <h2 className="font-display text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Seis diferenças que aparecem na fatura e no controle.
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {difs.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.05} className="h-full">
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

/* ============ COMPARATIVO ZOPPY (resumo) ============ */
type Cell = { v: "sim" | "nao" | "info"; note?: string };
const rows: [string, Cell, Cell][] = [
  ["Modelo de cobrança", { v: "sim", note: "R$ 399/mês fixos ou incluso no Growth" }, { v: "info", note: "escala pelo nº de vendas; sem preço público" }],
  ["Custo quando a loja cresce", { v: "sim", note: "não muda" }, { v: "nao", note: "sobe de faixa com as vendas" }],
  ["Onde ficam os dados", { v: "sim", note: "na sua loja" }, { v: "nao", note: "no servidor da Zoppy (SaaS)" }],
  ["Se cancelar", { v: "sim", note: "dados e histórico continuam seus" }, { v: "nao", note: "perde acesso e automações" }],
  ["WooCommerce", { v: "sim", note: "nativo — HPOS, Flatsome, PrimePress" }, { v: "info", note: "integração via API, multiplataforma" }],
  ["Análise de canais de mídia", { v: "sim", note: "LTV por canal com click-ID" }, { v: "info", note: "foco em RFM/recompra" }],
  ["Churn", { v: "sim", note: "cadência individual" }, { v: "info", note: "régua de recência/RFM" }],
  ["Giftback / cashback", { v: "sim", note: "via módulo Fidelização + Cashback" }, { v: "sim", note: "carro-chefe da Zoppy" }],
  ["Alinhamento com relatórios", { v: "sim", note: "mesma régua do Pixel Reports" }, { v: "info", note: "métricas próprias" }],
  ["LGPD", { v: "sim", note: "dado não sai da loja; opt-out nativo" }, { v: "nao", note: "operador externo tratando dados" }],
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

export function CrmComparativo() {
  return (
    <section id="comparativo" className="py-24">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[760px]">
          <span className="eyebrow">Pixel CRM vs Zoppy</span>
          <h2 className="mb-4 font-display text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.12] tracking-tight">
            A Zoppy é boa. A diferença é modelo, não recurso.
          </h2>
          <p className="text-[15.5px] text-dim">
            3 mil+ lojas, giftback maduro, multiplataforma — respeito total. O recorte da Pixel é claro:
            pra loja WooCommerce que quer dado dentro de casa, custo fixo e integração real com a operação,
            o Pixel CRM é a escolha racional.
          </p>
        </Reveal>
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line bg-navy-950/60">
                  <th className="p-4 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-dim">Critério</th>
                  <th className="w-[220px] p-4 text-center font-display text-[14px] font-extrabold text-amber">Pixel CRM</th>
                  <th className="w-[220px] p-4 text-center font-display text-[14px] font-extrabold">Zoppy</th>
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
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-amber/40 bg-amber/[.05] p-6">
            <div>
              <p className="font-display text-[16px] font-extrabold tracking-tight">Recebeu uma proposta da Zoppy?</p>
              <p className="text-[13.5px] text-dim">
                O comparativo completo tem uma calculadora pra você colocar o valor e ver a conta em 12 meses.
              </p>
            </div>
            <a href="/comparativos/pixel-crm-vs-zoppy" className="btn-ghost whitespace-nowrap">
              Ver comparativo completo →
            </a>
          </div>
          <p className="mt-4 text-[11.5px] text-dim">
            "~" = modelo diferente ou não divulgado, ver nota. Análise de julho/2026 com base em materiais
            públicos da Zoppy, sujeita a alteração. Zoppy é marca de seus respectivos titulares.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ POR BAIXO DO CAPÔ ============ */
export function CrmCapo() {
  const itens: [string, string][] = [
    ["Índice materializado próprio", "As análises rodam sobre índice com cache inteligente — não pesam o banco, o checkout nem as páginas da loja."],
    ["Sincronização em tempo real", "Cada pedido novo atualiza o CRM na hora, em segundo plano via Action Scheduler."],
    ["Nativo de verdade", "WooCommerce HPOS e legado, tema Flatsome, infraestrutura PrimePress — sem gambiarra de integração."],
    ["Ajuda contextual em tudo", "Todo cálculo tem um '?' explicando em linguagem de lojista. O time inteiro entende o dashboard, não só o analista."],
  ];
  return (
    <section className="border-t border-line bg-navy-900 py-20">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[720px]">
          <span className="eyebrow">Por baixo do capô</span>
          <h2 className="font-display text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.12] tracking-tight">
            Análise pesada, loja leve.
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {itens.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.06} className="h-full">
              <article className="spot card h-full bg-navy-950/40 p-6">
                <span className="mb-3 block font-mono text-[11px] text-amber">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mb-2 font-display text-[15.5px] font-bold tracking-tight">{t}</h3>
                <p className="text-[13px] text-dim">{d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ FAQ ============ */
const faq: [string, string][] = [
  ["Funciona na minha loja?", "Se a sua loja roda WooCommerce, sim — incluindo lojas com HPOS ativado e tema Flatsome. A instalação e a primeira sincronização são feitas pela equipe Pixel."],
  ["Preciso trocar meu WhatsApp?", "Não. O Pixel CRM funciona com a API oficial do WhatsApp (Meta Cloud API ou 360dialog) e também com APIs não oficiais (Evolution/Waha) que você já use. No modo não oficial, o envio tem ritmo controlado pra proteger o seu número."],
  ["Meus dados vão para algum servidor de terceiros?", "Não. Tudo roda dentro do seu WordPress. Clientes, segmentos, automações e histórico são seus — inclusive se um dia você cancelar."],
  ["E a LGPD?", "Cada contato tem opt-out individual, respeitado automaticamente em todo disparo, manual ou automático. Como o dado não sai da loja, você não adiciona um operador externo ao seu tratamento de dados."],
  ["O CRM deixa minha loja lenta?", "Não. As análises rodam sobre um índice próprio com cache — não pesam o checkout nem as páginas. A sincronização acontece em segundo plano."],
  ["Quanto tempo até ver resultado?", "O dashboard fica pronto no mesmo dia, após a primeira sincronização. As primeiras automações de reconquista costumam gerar as primeiras vendas recuperadas nas primeiras semanas, dependendo do tamanho e do engajamento da base."],
  ["Qual a diferença para a Zoppy?", "A Zoppy é um bom SaaS multiplataforma com foco em giftback. O Pixel CRM é nativo do WooCommerce, com preço fixo de R$ 399/mês (não escala com as suas vendas), dados dentro da sua loja e integração total com o Pixel Reports e o WhatsApp da plataforma. Pra loja WooCommerce, é a opção com melhor custo total e soberania do dado."],
  ["Histórico antigo de canais aparece?", "A origem de aquisição (Google Ads, Meta Ads etc.) usa o rastreamento do WooCommerce, gravado desde o início de 2024. Pedidos anteriores aparecem como 'Desconhecido' — limitação do histórico, não do CRM. Todo cliente novo já entra classificado."],
];

export function CrmFAQ() {
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
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={open === i}
                >
                  <span className="font-display text-[15px] font-bold tracking-tight">{q}</span>
                  <span className="shrink-0 font-bold text-amber">{open === i ? "−" : "+"}</span>
                </button>
                {open === i && <p className="px-5 pb-5 text-[14px] text-dim">{a}</p>}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ CTA FINAL ============ */
export function CrmCTA() {
  return (
    <section className="border-t border-line bg-navy-900 py-20 text-center">
      <div className="wrap">
        <Reveal>
          <h2 className="mx-auto mb-4 max-w-[680px] font-display text-[clamp(24px,3vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Sua base já pagou por si. <span className="text-amber">Ative a recompra.</span>
          </h2>
          <p className="mx-auto mb-8 max-w-[560px] text-[15.5px] text-dim">
            R$ 399/mês com contatos ilimitados — ou incluso no Growth. Onboarding incluso: instalação,
            primeira sincronização e as 3 primeiras automações criadas junto com você.
          </p>
          <a href={waLink(CTA_MSG)} target="_blank" rel="noopener" className="btn-amber inline-block">
            Quero ativar na minha loja
          </a>
        </Reveal>
      </div>
    </section>
  );
}
