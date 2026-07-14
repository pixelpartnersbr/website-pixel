"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { waLink } from "./site/config";

const CTA_MSG = "Olá! Quero atribuir cada venda ao vendedor certo com o Código de Vendedor.";

/* ============ MOCK: ranking com pódio ============ */
function RankingMock() {
  const linhas: [string, string, string, string, string][] = [
    ["🥇", "Maria", "94", "R$ 41.280", "R$ 439"],
    ["🥈", "João", "77", "R$ 33.115", "R$ 430"],
    ["🥉", "Ana", "61", "R$ 25.742", "R$ 422"],
  ];
  return (
    <div className="w-full max-w-[440px] rounded-2xl border border-white/10 bg-[#081826] p-4 shadow-[0_30px_60px_rgba(0,0,0,.45)]">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-display text-[13px] font-bold">Marketing → Vendedores</p>
        <span className="rounded-lg border border-white/15 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.08em] text-dim">este mês</span>
      </div>
      <div className="mb-3 grid grid-cols-2 gap-2">
        {[["Total atribuído", "R$ 100.137"], ["Pedidos", "232"]].map(([l, v]) => (
          <div key={l} className="rounded-lg border border-white/10 bg-navy-950/50 px-3 py-2">
            <p className="font-mono text-[8.5px] uppercase tracking-[0.08em] text-dim">{l}</p>
            <p className="font-display text-[15px] font-black tracking-tight text-amber">{v}</p>
          </div>
        ))}
      </div>
      <div className="overflow-hidden rounded-xl border border-white/[.07]">
        <div className="grid grid-cols-[28px_1fr_50px_84px_60px] gap-2 border-b border-white/[.07] bg-navy-950/60 px-3 py-2 font-mono text-[8px] uppercase tracking-[0.06em] text-dim">
          <span /><span>Vendedor</span><span>Pedidos</span><span>V. líquidas</span><span>Ticket</span>
        </div>
        {linhas.map(([m, n, p, v, t], i) => (
          <div key={n} className={`grid grid-cols-[28px_1fr_50px_84px_60px] items-center gap-2 px-3 py-2.5 text-[11px] ${i === 0 ? "bg-amber/[.06]" : i % 2 ? "bg-navy-950/25" : ""}`}>
            <span className="text-[13px]">{m}</span>
            <span className="font-display font-bold">{n}</span>
            <span className="text-dim">{p}</span>
            <span className={`font-display font-bold ${i === 0 ? "text-amber" : ""}`}>{v}</span>
            <span className="text-dim">{t}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-center font-mono text-[8.5px] uppercase tracking-[0.08em] text-dim">
        vendas líquidas = total − frete − reembolsos · mesma régua do pixel reports
      </p>
    </div>
  );
}

/* ============ HERO ============ */
export function VdHero() {
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
          <span className="eyebrow">Pixel Commerce · Código de Vendedor</span>
          <h1 className="mb-5 font-display text-[clamp(30px,4.2vw,54px)] font-extrabold leading-[1.08] tracking-[-0.025em]">
            Atribua cada venda ao vendedor certo — <span className="text-amber">sem dar desconto, sem complicar o checkout.</span>
          </h1>
          <p className="mb-7 max-w-[560px] text-[16.5px] text-dim">
            Um campo opcional no checkout, um painel de ranking com vendas líquidas reais. Você comissiona
            sua equipe com dado, não com achismo — feito pra lojas com atendimento humano: balcão, WhatsApp,
            showroom.
          </p>
          <div className="mb-2 flex items-baseline gap-2.5">
            <span className="font-display text-[44px] font-black leading-none tracking-tight">R$ 399</span>
            <span className="text-[15px] text-dim">/mês por loja · ou incluso no Scale</span>
          </div>
          <a href={waLink(CTA_MSG)} target="_blank" rel="noopener" className="btn-amber mt-4 inline-block">
            Descubra quanto da sua receita tem um vendedor por trás
          </a>
          <p className="mt-3.5 text-[13px] text-dim">Zero impacto no preço · nativo WooCommerce · sem fidelidade</p>
        </Reveal>
        <Reveal delay={0.15} className="flex justify-center lg:justify-end">
          <RankingMock />
        </Reveal>
      </div>
    </section>
  );
}

/* ============ O PROBLEMA ============ */
const saidas: [string, string][] = [
  ["Cupom por vendedor", "Transforma atribuição em desconto: todo pedido rastreado custa margem, e o cliente aprende a caçar o cupom."],
  ["Link de afiliado", "Quebra em checkout mobile, se perde entre abas, e não cobre a venda que começou no balcão e terminou no celular do cliente."],
  ["Planilha manual", "A equipe anota 'foi meu', ninguém confere, e o fechamento de comissão vira discussão no fim do mês."],
];

export function VdProblema() {
  return (
    <section className="border-t border-line bg-navy-900 py-24">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[760px]">
          <span className="eyebrow">O problema</span>
          <h2 className="mb-4 font-display text-[clamp(24px,3vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Quem gerou cada venda online? As saídas comuns são todas ruins.
          </h2>
          <p className="text-[15.5px] text-dim">
            Lojas com atendimento humano — vendedora de balcão, consultora de WhatsApp, promotor em evento —
            não têm como saber quem gerou cada venda. E o improviso cobra caro:
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {saidas.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.07} className="h-full">
              <article className="spot card h-full bg-navy-950/40 p-6">
                <span className="mb-3 block font-mono text-[11px] text-[#FF8A8A]">×</span>
                <h3 className="mb-2 font-display text-[16px] font-bold tracking-tight">{t}</h3>
                <p className="text-[13.5px] text-dim">{d}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-8 max-w-[780px] text-[15px] text-dim">
            O Código de Vendedor resolve pela via mais simples:{" "}
            <strong className="text-ink">o próprio cliente indica, no checkout, quem o atendeu.</strong> Zero
            impacto no preço, atribuição limpa, ranking pronto pra comissionar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ FUNCIONALIDADES ============ */
const funcs: [string, string, string[]][] = [
  ["No checkout", "Atribuição sem atrito", [
    "Campo opcional 'Algum vendedor te auxiliou na compra?' com dropdown dos vendedores ativos",
    "Não aplica desconto e não altera nenhum total — é puramente atribuição",
    "Só aparece quando há vendedor cadastrado; posição configurável no formulário",
    "Compatível com o checkout clássico e com o Checkout Inteligente (seleção preservada no AJAX)",
  ]],
  ["No painel", "Ranking pronto pra comissionar", [
    "Pódio 🥇🥈🥉 ordenado por vendas líquidas",
    "Pedidos · Bruto · Frete · Reembolsos · Vendas líquidas · Ticket médio",
    "Períodos: 7/30/90 dias, este mês, mês anterior ou intervalo personalizado",
    "Status contabilizados configuráveis (padrão: Processando + Concluído)",
  ]],
  ["Cadastro e gestão", "Histórico à prova de rotatividade", [
    "Vendedores com nome + código opcional, edição inline, ativar/desativar",
    "Vendedor nunca é excluído, apenas desativado — o ranking de meses anteriores permanece íntegro",
  ]],
  ["Na tela do pedido", "Correção com rastro", [
    "Seletor pra atribuir ou corrigir manualmente — a venda de WhatsApp registrada depois",
    "Toda alteração gera nota de auditoria no pedido, com quem alterou",
  ]],
];

export function VdFuncionalidades() {
  return (
    <section className="py-24">
      <div className="wrap">
        <Reveal className="mb-14 max-w-[720px]">
          <span className="eyebrow">Como funciona</span>
          <h2 className="font-display text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Do checkout ao fechamento de comissão.
          </h2>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {funcs.map(([t, sub, items], i) => (
            <Reveal key={t} delay={i * 0.06} className="h-full">
              <article className="spot card h-full bg-navy-800/15 p-7">
                <h3 className="font-display text-[17px] font-extrabold tracking-tight">{t}</h3>
                <p className="mb-4 mt-0.5 text-[13px] text-amber">{sub}</p>
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
        <Reveal>
          <p className="mt-6 max-w-[820px] text-[12.5px] text-dim">
            Fundação técnica: compatível com HPOS e com o armazenamento legado, pt-BR nativo, e
            desinstalação limpa que preserva o histórico de atribuição nos pedidos.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ DIFERENCIAIS ============ */
const difs: [string, string][] = [
  ["Atribuição sem desconto", "Separa 'quem vendeu' de 'dar desconto'. Sua margem fica intacta — o cliente não aprende a caçar cupom."],
  ["Números que batem com o Pixel Reports", "Mesma definição de venda líquida (total − frete − reembolsos). Nada de dois painéis brigando com valores diferentes."],
  ["O cliente atribui, não a equipe", "Reduz a disputa interna de 'essa venda foi minha' — quem diz quem atendeu é quem foi atendido."],
  ["Reembolso conta no período certo", "Pedido reembolsado é descontado do ranking do mês em que a venda aconteceu — ninguém fica com crédito de venda que voltou."],
  ["Histórico à prova de rotatividade", "Vendedor que sai da equipe não some do relatório de meses anteriores — só desaparece do checkout."],
  ["Correção manual auditada", "Venda que entrou por telefone pode ser atribuída depois, com rastro de quem fez a alteração."],
];

export function VdDiferenciais() {
  return (
    <section className="border-t border-line bg-navy-900 py-24">
      <div className="wrap">
        <Reveal className="mb-14 max-w-[720px]">
          <span className="eyebrow">Diferenciais</span>
          <h2 className="font-display text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Seis detalhes que só quem fecha comissão todo mês pensou.
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

/* ============ CALCULADORA ============ */
export function VdCalculadora() {
  const [vendas, setVendas] = useState(100000);
  const [cupom, setCupom] = useState(10);
  const custoCupom = Math.round(vendas * (cupom / 100));
  const economia = custoCupom - 399;
  const fmt = (n: number) => n.toLocaleString("pt-BR");
  const input =
    "w-full rounded-[10px] border border-line bg-navy-900/60 px-4 py-2.5 text-[14px] text-ink outline-none transition-colors focus:border-amber";
  return (
    <section className="py-24">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">A ponta do lápis</span>
          <h2 className="mb-5 font-display text-[clamp(23px,2.8vw,36px)] font-extrabold leading-[1.15] tracking-tight">
            O cupom de vendedor é a atribuição mais cara do mercado.
          </h2>
          <div className="flex flex-col gap-4 text-[15px] text-dim">
            <p>
              O módulo <strong className="text-ink">não é sobre converter mais no checkout</strong> — é
              sobre transformar atendimento humano em receita mensurável e incentivável. E a conta contra o
              cupom é brutal: cada pedido rastreado por cupom paga a atribuição em margem.
            </p>
            <p>
              Com atribuição pura, esse valor vira <strong className="text-ink">orçamento de comissão que
              você controla</strong> — paga sobre resultado, na porcentagem que fizer sentido, sem repassar
              desconto ao cliente. E o fechamento sai em minutos: o relatório já traz pedidos e líquido por
              pessoa.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="card mx-auto w-full max-w-[440px] bg-navy-950/60 p-6">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block font-mono text-[10px] uppercase tracking-[0.06em] text-dim">Vendas atribuídas (R$/mês)</label>
                <input type="number" min={0} className={input} value={vendas}
                  onChange={(e) => setVendas(Math.max(0, Number(e.target.value)))} />
              </div>
              <div>
                <label className="mb-1 block font-mono text-[10px] uppercase tracking-[0.06em] text-dim">Cupom por vendedor (%)</label>
                <input type="number" min={0} max={100} className={input} value={cupom}
                  onChange={(e) => setCupom(Math.min(100, Math.max(0, Number(e.target.value))))} />
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-line bg-navy-900/60 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-dim">Cupom custa</p>
                <p className="font-display text-[22px] font-black tracking-tight text-[#FF8A8A]">R$ {fmt(custoCupom)}/mês</p>
                <p className="text-[10.5px] text-dim">em desconto repassado</p>
              </div>
              <div className="rounded-xl border border-amber/40 bg-amber/[.06] p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-dim">Código de Vendedor</p>
                <p className="font-display text-[22px] font-black tracking-tight text-amber">R$ 399/mês</p>
                <p className="text-[10.5px] text-dim">fixos · ou incluso no Scale</p>
              </div>
            </div>
            {economia > 0 && (
              <p className="mt-4 text-center text-[13px] text-dim">
                <strong className="text-amber">R$ {fmt(economia)}/mês</strong> que deixam de virar desconto —
                e viram orçamento de comissão sob o seu controle.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ COMPARATIVO DE ABORDAGENS ============ */
const abordagens: [string, string, string, string, string][] = [
  ["Código de Vendedor", "R$ 399/mês fixos ou incluso no Scale", "Zero — não há desconto", "Alta: cliente atribui + correção auditada", "Baixo: só cadastrar vendedores"],
  ["Cupom por vendedor", "'Grátis' no plugin", "Alto: % de desconto em toda venda rastreada", "Média: cliente pode não usar o cupom", "Médio: criar e gerir cupons"],
  ["Link de afiliado", "Plugin de afiliados + eventual %", "Médio a alto: comissão + possível desconto", "Baixa em mobile / multi-aba", "Médio"],
  ["Planilha manual", "'Grátis'", "Zero", "Muito baixa: não auditável, contestável", "Alto: anotação + conferência"],
];

export function VdComparativo() {
  return (
    <section id="comparativo" className="border-t border-line bg-navy-900 py-24">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[720px]">
          <span className="eyebrow">Comparativo de abordagens</span>
          <h2 className="font-display text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.12] tracking-tight">
            As quatro formas de atribuir venda — lado a lado.
          </h2>
        </Reveal>
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line bg-navy-950/60">
                  {["Abordagem", "Custo direto", "Impacto na margem", "Confiabilidade", "Esforço da equipe"].map((h) => (
                    <th key={h} className="p-4 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-dim">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {abordagens.map(([a, c, m, conf, esf], i) => (
                  <tr key={a} className={`border-b border-white/[.05] ${i === 0 ? "bg-amber/[.05]" : i % 2 ? "bg-navy-950/25" : ""}`}>
                    <td className={`p-4 font-display text-[13.5px] font-bold ${i === 0 ? "text-amber" : ""}`}>{a}</td>
                    <td className="p-4 text-[13px] text-dim">{c}</td>
                    <td className="p-4 text-[13px] text-dim">{m}</td>
                    <td className="p-4 text-[13px] text-dim">{conf}</td>
                    <td className="p-4 text-[13px] text-dim">{esf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 max-w-[820px] text-[13px] text-dim">
            E além da atribuição: o ranking visível motiva — time de venda responde a placar. O pódio mensal
            cria disputa saudável, dá base objetiva pra bônus, e você passa a medir o ROI real do
            atendimento humano: quanto do faturamento online tem mão de gente por trás.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ FAQ + CTA ============ */
const faq: [string, string][] = [
  ["O campo obriga o cliente a escolher um vendedor?", "Não — é 100% opcional. Quem não foi atendido por ninguém simplesmente ignora o campo e finaliza normalmente."],
  ["Isso dá desconto?", "Não. É só atribuição; o preço não muda em nenhum cenário. É exatamente essa a diferença pro cupom de vendedor."],
  ["Funciona com meu checkout atual?", "Sim — checkout clássico e Checkout Inteligente. No checkout com atualização por AJAX, a seleção do cliente é preservada."],
  ["E se um vendedor sair da equipe?", "O histórico dele continua no relatório de meses anteriores; ele só some do checkout. Vendedor nunca é excluído, apenas desativado."],
  ["Os números batem com meu relatório de vendas?", "Sim — mesma definição de venda líquida do Pixel Reports (total − frete − reembolsos). Um número só, nos dois painéis."],
];

export function VdFaqCta() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24">
      <div className="wrap max-w-[860px]">
        <Reveal className="mb-10">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 className="font-display text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.12] tracking-tight">
            O que todo gestor pergunta
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
              Comissione com dado, <span className="text-amber">não com achismo.</span>
            </h2>
            <p className="mx-auto mb-8 max-w-[540px] text-[15.5px] text-dim">
              R$ 399/mês, incluso no Scale, sem fidelidade. O fechamento de comissão do próximo mês já sai
              do painel — não da planilha.
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
