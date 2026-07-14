"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { waLink } from "./site/config";

const CTA_MSG = "Olá! Quero o Provador de Tamanho na minha loja — menos dúvida na compra, menos troca depois.";

/* ============ MOCK: modal do provador ============ */
function ProvadorMock() {
  return (
    <div className="w-full max-w-[420px] rounded-2xl border border-white/10 bg-[#081826] p-4 shadow-[0_30px_60px_rgba(0,0,0,.45)]">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-display text-[13px] font-bold">Provador de Tamanho</p>
        <span className="font-mono text-[9px] uppercase tracking-[0.08em] text-dim">Vestido Amara</span>
      </div>
      <div className="grid grid-cols-[1fr_auto] gap-3">
        <div>
          <div className="mb-2.5 grid grid-cols-2 gap-2">
            {[["Altura", "165 cm"], ["Peso", "62 kg"]].map(([l, v]) => (
              <div key={l} className="rounded-lg border border-white/10 bg-navy-950/50 px-3 py-2">
                <p className="font-mono text-[8.5px] uppercase tracking-[0.08em] text-dim">{l}</p>
                <p className="font-display text-[13px] font-bold">{v}</p>
              </div>
            ))}
          </div>
          <p className="mb-1.5 font-mono text-[8.5px] uppercase tracking-[0.08em] text-dim">caimento</p>
          <div className="mb-3 flex gap-1.5">
            {["Justo", "Regular", "Folgado"].map((c) => (
              <span key={c} className={`rounded-lg border px-2.5 py-1 text-[10px] font-bold ${c === "Regular" ? "border-amber bg-amber text-navy-950" : "border-white/15 text-dim"}`}>
                {c}
              </span>
            ))}
          </div>
          <div className="rounded-xl border border-amber/40 bg-amber/[.07] p-3 text-center">
            <p className="font-mono text-[8.5px] uppercase tracking-[0.08em] text-dim">seu tamanho ideal</p>
            <p className="font-display text-[34px] font-black leading-none tracking-tight text-amber">M</p>
            <p className="mt-1 text-[9.5px] text-dim">92% de confiança</p>
          </div>
        </div>
        <div className="flex w-[104px] flex-col justify-between rounded-xl border border-white/[.07] bg-navy-950/50 p-2.5">
          <div className="mx-auto h-[86px] w-[38px] rounded-full border border-white/15 bg-gradient-to-b from-white/[.06] to-transparent" aria-hidden />
          {[["Busto", "ideal", "text-amber"], ["Cintura", "ideal", "text-amber"], ["Quadril", "leve justo", "text-dim"]].map(([r, s, c]) => (
            <div key={r} className="text-center">
              <p className="font-mono text-[8px] uppercase tracking-[0.06em] text-dim">{r}</p>
              <p className={`text-[9.5px] font-bold ${c}`}>{s}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-3 text-center font-mono text-[8.5px] uppercase tracking-[0.08em] text-dim">
        roupas e calçados · 100% dentro da sua loja · com a cor da sua marca
      </p>
    </div>
  );
}

/* ============ HERO ============ */
export function PvHero() {
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
          <span className="eyebrow">Pixel Commerce · Provador de Tamanho</span>
          <h1 className="mb-5 font-display text-[clamp(30px,4.2vw,54px)] font-extrabold leading-[1.08] tracking-[-0.025em]">
            O provador virtual que fala a língua da sua marca — <span className="text-amber">sem mensalidade que cresce com o seu tráfego.</span>
          </h1>
          <p className="mb-7 max-w-[560px] text-[16.5px] text-dim">
            Recomendação de tamanho para roupas e calçados, instalada dentro da sua loja WooCommerce. Reduz
            a insegurança que trava a compra e a troca que come sua margem — sem enviar o cliente pra um
            serviço de terceiros, com custo por acesso zero.
          </p>
          <div className="mb-2 flex items-baseline gap-2.5">
            <span className="font-display text-[44px] font-black leading-none tracking-tight">R$ 249</span>
            <span className="text-[15px] text-dim">/mês fixos por loja · ou incluso no Growth</span>
          </div>
          <a href={waLink(CTA_MSG)} target="_blank" rel="noopener" className="btn-amber mt-4 inline-block">
            Quero o provador na minha loja
          </a>
          <p className="mt-3.5 text-[13px] text-dim">Roupas e calçados · nativo WooCommerce · sem fidelidade</p>
        </Reveal>
        <Reveal delay={0.15} className="flex justify-center lg:justify-end">
          <ProvadorMock />
        </Reveal>
      </div>
    </section>
  );
}

/* ============ O PROBLEMA ============ */
export function PvProblema() {
  const stats = [
    ["20–30%", "é a taxa média de devolução de roupas no e-commerce; calçados ficam em ~27–31% — duas a três vezes a média geral*"],
    ["50–70%", "das devoluções de moda são atribuídas a tamanho e caimento — o maior motivo isolado*"],
    ["20–30%", "do valor do produto pode ser consumido só pela logística reversa — e parte do que volta não é revendida a preço cheio*"],
  ];
  return (
    <section className="border-t border-line bg-navy-900 py-24">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[760px]">
          <span className="eyebrow">O problema</span>
          <h2 className="mb-4 font-display text-[clamp(24px,3vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Tamanho é o maior atrito da moda online.
          </h2>
          <p className="text-[15.5px] text-dim">
            Quem compra não pode experimentar, cada marca tem uma modelagem diferente, e o resultado aparece
            nas duas pontas do funil: gente que <strong className="text-ink">desiste na dúvida</strong> e
            gente que compra, erra o tamanho e <strong className="text-ink">devolve</strong>.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map(([n, l], i) => (
            <Reveal key={l} delay={i * 0.08} className="h-full">
              <div className="spot card h-full bg-navy-950/40 p-6">
                <span className="block font-display text-[34px] font-black tracking-tight text-amber">{n}</span>
                <span className="text-[13px] text-dim">{l}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-6 max-w-[820px] text-[12px] text-dim">
            *Benchmarks de categoria — dados de mercado 2025–2026 (Eightx, Richpanel, Kiwisizing, Statista e
            outros), que variam por fonte e metodologia; use como faixa de referência. A dúvida de tamanho
            derruba conversão antes da compra <strong className="text-ink">e</strong> destrói margem depois
            dela: é um problema que paga a conta de resolvê-lo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ COMO FUNCIONA ============ */
export function PvComoFunciona() {
  const [modo, setModo] = useState<"roupas" | "calcados">("roupas");
  const passos = {
    roupas: [
      ["01", "O cliente informa altura, peso, idade e preferência de caimento — justo, regular ou folgado."],
      ["02", "O provador estima as medidas do corpo e já mostra a etapa de medidas: quem sabe as próprias pode ajustá-las pra uma recomendação ainda mais precisa."],
      ["03", "Recebe o tamanho ideal, com indicador visual de caimento por região (busto, cintura, quadril) e um nível de confiança."],
    ],
    calcados: [
      ["01", "O cliente mede o comprimento do pé — a página mostra como medir, em segundos."],
      ["02", "Escolhe a preferência de caimento."],
      ["03", "Recebe o número ideal na hora, com aviso claro quando o pé fica entre dois números."],
    ],
  };
  return (
    <section className="py-24">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[720px]">
          <span className="eyebrow">Como funciona</span>
          <h2 className="mb-6 font-display text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Três passos, direto na página do produto.
          </h2>
          <div className="flex gap-2">
            {([["roupas", "Roupas"], ["calcados", "Calçados"]] as const).map(([k, l]) => (
              <button key={k} type="button" onClick={() => setModo(k)}
                className={`rounded-[10px] border px-4 py-2 font-display text-[13px] font-bold transition-colors ${
                  modo === k ? "border-amber bg-amber/10 text-amber" : "border-line text-dim"
                }`}>
                {l}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-3">
          {passos[modo].map(([n, d], i) => (
            <Reveal key={`${modo}-${n}`} delay={i * 0.06} className="h-full">
              <article className="spot card h-full bg-navy-800/15 p-7">
                <span className="mb-4 block font-display text-[30px] font-black text-amber/40">{n}</span>
                <p className="text-[14.5px] text-dim">{d}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-6 max-w-[780px] text-[13.5px] text-dim">
            Tudo num modal elegante na própria página do produto — no computador em duas colunas com uma
            silhueta ilustrativa, no celular como um painel que sobe da base da tela, do jeito que os apps
            de moda já acostumaram o público.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ FUNCIONALIDADES ============ */
const recursos: [string, string, string][] = [
  ["👗", "Roupas e calçados no mesmo módulo", "Cada grade é do tipo 'roupas' (busto/cintura/quadril) ou 'calçados' (comprimento do pé), com o fluxo do cliente adaptado a cada caso."],
  ["📏", "Recomendação com medida real", "Além da estimativa por altura/peso, o cliente pode informar as medidas exatas e sobrescrever a estimativa — mais precisão pra quem quer."],
  ["🎯", "Preferência de caimento", "Justo, regular ou folgado ajustam a recomendação, respeitando o gosto de cada pessoa."],
  ["📊", "Tabela de medidas híbrida", "O botão gera automaticamente uma tabela nítida a partir da grade cadastrada — ou exibe a arte própria da marca. Sem produzir imagem por produto."],
  ["🎨", "Identidade visual automática", "O provador herda a cor do botão configurado e aplica em todo o modal. Trocou a cor da marca, o provador acompanha — zero retrabalho."],
  ["🗂️", "Grade reutilizável e inteligente", "Uma grade pode valer pra um produto, uma categoria inteira ou toda a loja. Cadastra uma vez, cobre centenas de produtos."],
  ["📈", "Registro de recomendações", "Guarda (de forma anônima) as recomendações e cruza com compras e devoluções — base pra calibrar a assertividade ao longo do tempo."],
  ["⚡", "100% dentro da sua loja", "Sem script de terceiros, sem chamada externa a cada acesso. Bom pra performance, compatível com cache (FastCGI/PrimePress), sem depender de serviço alheio."],
];

export function PvRecursos() {
  return (
    <section className="border-t border-line bg-navy-900 py-24">
      <div className="wrap">
        <Reveal className="mb-14 max-w-[720px]">
          <span className="eyebrow">Funcionalidades</span>
          <h2 className="font-display text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            O que vem na caixa.
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

/* ============ CALCULADORA ============ */
export function PvCalculadora() {
  const [pedidos, setPedidos] = useState(1000);
  const [ticket, setTicket] = useState(200);
  const [devPct, setDevPct] = useState(25);
  const devolucoes = Math.round(pedidos * (devPct / 100));
  const porTamanho = Math.round(devolucoes * 0.5);
  const evitadas = Math.round(porTamanho * 0.25);
  const fmt = (n: number) => n.toLocaleString("pt-BR");
  const input =
    "w-full rounded-[10px] border border-line bg-navy-900/60 px-4 py-2.5 text-[14px] text-ink outline-none transition-colors focus:border-amber";
  return (
    <section className="py-24">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">A ponta do lápis</span>
          <h2 className="mb-5 font-display text-[clamp(23px,2.8vw,36px)] font-extrabold leading-[1.15] tracking-tight">
            Quantas devoluções o provador pode evitar na sua loja?
          </h2>
          <div className="flex flex-col gap-4 text-[15px] text-dim">
            <p>
              As premissas da conta são as faixas de mercado: <strong className="text-ink">metade</strong>{" "}
              das devoluções de moda vêm de tamanho, e ferramentas de recomendação reportam corte na ordem
              de <strong className="text-ink">20% a 30%</strong> dessas (usamos 25% na conta). Coloque os
              seus números e veja o potencial — cada devolução evitada economiza logística reversa,
              processamento e o risco de não revender a peça a preço cheio.
            </p>
            <p className="text-[12.5px]">
              Potencial estimado com faixas de referência do setor, não garantia de resultado — a sua taxa
              real depende do catálogo, da modelagem e do público. O módulo registra recomendações e
              devoluções justamente pra você medir o antes e o depois.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="card mx-auto w-full max-w-[440px] bg-navy-950/60 p-6">
            <div className="grid grid-cols-3 gap-3">
              {[["Pedidos/mês", pedidos, setPedidos], ["Ticket (R$)", ticket, setTicket], ["Devolução (%)", devPct, setDevPct]].map(([l, v, set]: any) => (
                <div key={l}>
                  <label className="mb-1 block font-mono text-[9.5px] uppercase tracking-[0.06em] text-dim">{l}</label>
                  <input type="number" min={0} className={input} value={v}
                    onChange={(e) => set(Math.max(0, Number(e.target.value)))} />
                </div>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2 text-center">
              {[["devoluções/mês", devolucoes], ["por tamanho (~50%)", porTamanho], ["evitáveis (~25%)", evitadas]].map(([l, v], i) => (
                <div key={l as string} className={`rounded-xl border p-3 ${i === 2 ? "border-amber/40 bg-amber/[.06]" : "border-line bg-navy-900/60"}`}>
                  <p className={`font-display text-[22px] font-black tracking-tight ${i === 2 ? "text-amber" : ""}`}>{fmt(v as number)}</p>
                  <p className="font-mono text-[8.5px] uppercase tracking-[0.06em] text-dim">{l}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-[13px] text-dim">
              São <strong className="text-amber">~{fmt(evitadas)} peças/mês</strong> (≈ R$ {fmt(evitadas * ticket)} em produto)
              que deixam de fazer a viagem de volta.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ COMPARATIVO SAAS ============ */
type Cell = { v: "sim" | "nao" | "info"; note?: string };
const rows: [string, Cell, Cell][] = [
  ["Custo", { v: "sim", note: "R$ 249/mês fixos ou incluso no Growth — não cresce com o tráfego" }, { v: "nao", note: "a partir de R$ 400/mês, escalando por volume de acessos até a casa de US$ 13 mil/mês*" }],
  ["Custo por acesso / por recomendação", { v: "sim", note: "zero" }, { v: "nao", note: "embutido nas faixas por tráfego" }],
  ["Onde roda", { v: "sim", note: "dentro da sua loja (self-hosted)" }, { v: "nao", note: "serviço externo, script de terceiros" }],
  ["Dados do cliente", { v: "sim", note: "ficam na sua infraestrutura" }, { v: "nao", note: "trafegam para o fornecedor" }],
  ["Identidade visual", { v: "sim", note: "herda a cara da sua marca automaticamente" }, { v: "info", note: "layout do fornecedor, personalização limitada" }],
  ["Performance", { v: "sim", note: "sem chamada externa; compatível com cache" }, { v: "info", note: "depende de script/serviço externo" }],
  ["Calçados e roupas", { v: "sim" }, { v: "sim" }],
  ["Base antropométrica de anos, multi-marcas", { v: "nao", note: "motor calibrado pela base da própria loja, que o módulo coleta" }, { v: "sim", note: "anos de dados em centenas de marcas" }],
  ["Evolução", { v: "sim", note: "sob controle da Pixel, sob demanda do cliente" }, { v: "info", note: "roadmap do fornecedor" }],
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

export function PvComparativo() {
  return (
    <section id="comparativo" className="border-t border-line py-24">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[760px]">
          <span className="eyebrow">Comparativo · Módulo próprio vs SaaS de provador</span>
          <h2 className="mb-4 font-display text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.12] tracking-tight">
            Um SaaS de provador é excelente. A pergunta é o modelo.
          </h2>
          <p className="text-[15.5px] text-dim">
            Um serviço consolidado como a Sizebay entrega valor real — e divulga{" "}
            <strong className="text-ink">conversão 50% a 150% maior</strong> nas sessões com a ferramenta e{" "}
            <strong className="text-ink">até 50% menos trocas</strong> (alegações do próprio fornecedor*).
            A questão é que o custo recorrente cresce com o seu sucesso, e um pedaço da experiência (e dos
            dados) fica na mão de terceiros. O módulo da Pixel entrega o valor central como{" "}
            <strong className="text-ink">ativo da sua operação</strong>.
          </p>
        </Reveal>
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line bg-navy-950/60">
                  <th className="p-4 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-dim">Critério</th>
                  <th className="w-[230px] p-4 text-center font-display text-[14px] font-extrabold text-amber">Provador Pixel</th>
                  <th className="w-[230px] p-4 text-center font-display text-[14px] font-extrabold">Provador SaaS (ex.: Sizebay)</th>
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
              <p className="font-display text-[16px] font-extrabold tracking-tight">A conta em 3 anos, 1 loja</p>
              <p className="text-[13.5px] text-dim">
                SaaS no piso de entrada: <strong className="text-ink">~R$ 14.400</strong> (e sobe com o
                tráfego). No Growth: <strong className="text-amber">R$ 0 adicionais</strong> — o provador já
                está dentro. Com frota de lojas, a diferença multiplica.
              </p>
            </div>
            <a href="/planos" className="btn-ghost whitespace-nowrap">Ver planos →</a>
          </div>
          <p className="mt-4 text-[11.5px] text-dim">
            "~" = com ressalvas, ver nota. *Preços e alegações da Sizebay conforme dados públicos
            (matérias e páginas de parceria nos marketplaces) em julho/2026, sujeitos a alteração —
            alegações de resultado são do próprio fornecedor. Sizebay é marca de seus respectivos
            titulares. Material informativo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ PARA QUEM É + FAQ ============ */
const faq: [string, string][] = [
  ["Funciona com a minha loja?", "Sim, para lojas WooCommerce. É compatível com HPOS e testado com o tema Flatsome, além de conviver bem com cache de página."],
  ["Precisa de script externo ou envia dados para fora?", "Não. Roda dentro da sua loja; os dados do cliente ficam na sua infraestrutura. As medidas informadas não são armazenadas em servidor — a recomendação é calculada na hora, e o que se registra (de forma anônima) é o tamanho sugerido, para calibração."],
  ["Serve para calçados?", "Sim. Há um tipo de grade específico para calçados: o cliente informa o comprimento do pé e recebe o número ideal — com aviso claro quando fica entre dois números."],
  ["Como o lojista cadastra as medidas?", "Numa tela simples: escolhe o tipo (roupas ou calçados) e preenche a grade. Uma mesma grade pode valer para um produto, uma categoria ou a loja inteira."],
  ["E se a marca já tem uma tabela de medidas em imagem?", "Pode usar a imagem própria no botão 'Tabela de medidas'. Sem imagem, a tabela é gerada automaticamente a partir da grade cadastrada."],
  ["Tem mensalidade?", "No plano Growth (e acima), o provador já vem incluso — custo adicional zero. Avulso, são R$ 249/mês fixos, que não crescem com o tráfego, com o número de acessos nem com o tamanho do catálogo — ao contrário do modelo SaaS, cobrado por faixas de volume."],
];

export function PvQuemFaq() {
  const [open, setOpen] = useState<number | null>(0);
  const quem = [
    "Lojas de moda em WooCommerce — roupas, calçados ou ambos",
    "Marcas que querem a experiência com a própria identidade, sem 'cara de plugin de terceiro'",
    "Operações com mais de uma loja, onde a mensalidade por loja de um SaaS pesa",
    "Lojistas preocupados com privacidade/LGPD e performance (cache, Core Web Vitals)",
  ];
  return (
    <section className="bg-navy-900 py-24">
      <div className="wrap grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
        <Reveal>
          <span className="eyebrow">Para quem é</span>
          <h2 className="mb-6 font-display text-[clamp(22px,2.6vw,32px)] font-extrabold leading-[1.15] tracking-tight">
            Feito pra quem vive de caimento.
          </h2>
          <ul className="flex flex-col gap-3">
            {quem.map((q) => (
              <li key={q} className="flex gap-2.5 text-[14px] text-dim">
                <span className="mt-px shrink-0 font-bold text-amber">✓</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.08}>
          <span className="eyebrow">Perguntas frequentes</span>
          <div className="mt-4 flex flex-col gap-3">
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
      </div>
    </section>
  );
}

/* ============ CTA ============ */
export function PvCTA() {
  return (
    <section className="border-t border-line py-20 text-center">
      <div className="wrap">
        <Reveal>
          <h2 className="mx-auto mb-4 max-w-[720px] font-display text-[clamp(24px,3vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Pare de perder venda na dúvida <span className="text-amber">e margem na troca.</span>
          </h2>
          <p className="mx-auto mb-8 max-w-[560px] text-[15.5px] text-dim">
            Coloque o Provador de Tamanho na sua loja — com a sua marca, dentro da sua operação, com preço
            que não cresce com o seu tráfego.
          </p>
          <a href={waLink(CTA_MSG)} target="_blank" rel="noopener" className="btn-amber inline-block">
            Falar com a Pixel Partners
          </a>
        </Reveal>
      </div>
    </section>
  );
}
