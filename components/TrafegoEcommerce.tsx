"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { waLink } from "./site/config";

const CTA_MSG = "Olá! Tenho uma loja virtual e quero tráfego pago otimizado sobre venda líquida.";

const tiers = [
  { nome: "Tração", fee: 2000, teto: 5000, desc: "Pra loja validando canal pago com verba enxuta e metas claras." },
  { nome: "Crescimento", fee: 3000, teto: 15000, desc: "Pra loja escalando aquisição com estrutura de campanhas madura.", destaque: true },
  { nome: "Performance", fee: 5000, teto: 50000, desc: "Pra operação com mídia como motor principal de receita." },
];

/* ============ HERO ============ */
export function TeHero() {
  return (
    <section
      className="relative overflow-hidden pb-20 pt-[150px]"
      style={{
        background:
          "radial-gradient(800px 460px at 88% 10%, rgba(255,183,0,.1), transparent 60%), radial-gradient(700px 420px at 0% 100%, rgba(5,58,102,.5), transparent 65%), #021627",
      }}
    >
      <div className="beam" aria-hidden />
      <div className="wrap relative grid items-center gap-14 lg:grid-cols-[1.1fr_.9fr]">
        <Reveal>
          <span className="eyebrow">Pixel Partners · Tráfego Pago para Lojas Virtuais</span>
          <h1 className="mb-5 font-display text-[clamp(30px,4.2vw,54px)] font-extrabold leading-[1.08] tracking-[-0.025em]">
            Tráfego que otimiza sobre <span className="text-amber">venda líquida</span> — não sobre promessa de pixel.
          </h1>
          <p className="mb-7 max-w-[560px] text-[16.5px] text-dim">
            Google e Meta Ads gerenciados por quem enxerga o número que importa: bruto − frete − reembolsos,
            direto do Pixel Reports. Fee fixo por faixa de verba, 0% de comissão sobre o que você investe —
            crescer a mídia não aumenta a fatura da agência.
          </p>
          <div className="mb-2 flex items-baseline gap-2.5">
            <span className="font-display text-[44px] font-black leading-none tracking-tight">R$ 2.000</span>
            <span className="text-[15px] text-dim">/mês no plano de entrada · verba paga por você direto às plataformas</span>
          </div>
          <a href={waLink(CTA_MSG)} target="_blank" rel="noopener" className="btn-amber mt-4 inline-block">
            Quero escalar minha loja
          </a>
          <p className="mt-3.5 text-[13px] text-dim">Google Partner certificado · Meta Business Partner · sem fidelidade</p>
        </Reveal>
        <Reveal delay={0.15} className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[400px] rounded-2xl border border-white/10 bg-[#081826] p-5 shadow-[0_30px_60px_rgba(0,0,0,.45)]">
            <p className="mb-1 font-display text-[15px] font-bold">O que a gente otimiza</p>
            <p className="mb-4 font-mono text-[9.5px] uppercase tracking-[0.08em] text-dim">a régua do pixel reports</p>
            <div className="flex flex-col gap-2">
              {[["Venda bruta", "R$ 84.320", false], ["− Frete", "R$ 6.180", false], ["− Reembolsos", "R$ 3.940", false], ["Venda líquida", "R$ 74.200", true]].map(([l, v, hi]) => (
                <div key={l as string} className={`flex items-baseline justify-between rounded-lg border px-3.5 py-2.5 ${hi ? "border-amber/50 bg-amber/[.07]" : "border-white/[.07] bg-navy-950/50"}`}>
                  <span className={`text-[12px] ${hi ? "font-bold text-ink" : "text-dim"}`}>{l}</span>
                  <span className={`font-display text-[15px] font-black tracking-tight ${hi ? "text-amber" : ""}`}>{v}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-center font-mono text-[8.5px] uppercase tracking-[0.08em] text-dim">
              o ROAS de verdade se calcula aqui — não no gerenciador
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ TIERS ============ */
export function TeTiers() {
  const fmt = (n: number) => n.toLocaleString("pt-BR");
  return (
    <section id="investimento" className="border-t border-line bg-navy-900 py-24">
      <div className="wrap">
        <Reveal className="mb-12 max-w-[760px]">
          <span className="eyebrow">Investimento</span>
          <h2 className="mb-4 font-display text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Fee fixo por faixa de verba. 0% sobre o que você investe.
          </h2>
          <p className="text-[15.5px] text-dim">
            O padrão do mercado é cobrar um percentual da verba — o que significa que{" "}
            <strong className="text-ink">quanto mais a sua loja cresce, mais a agência leva, pra sempre</strong>.
            Aqui o fee é fixo dentro da faixa: escalar a mídia não escala a fatura. E a verba é sua — paga por
            você direto ao Google e à Meta, na sua conta, com acesso total.
          </p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {tiers.map((t) => (
            <Reveal key={t.nome} className="h-full">
              <article className={`flex h-full flex-col rounded-2xl border p-6 ${t.destaque ? "glow-border border-amber/60 bg-gradient-to-b from-amber/[.07] to-transparent" : "border-line bg-navy-950/40"}`}>
                {t.destaque && (
                  <span className="mb-3 self-start rounded-full bg-amber px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.08em] text-navy-950">
                    mais escolhido
                  </span>
                )}
                <h3 className="font-display text-[19px] font-extrabold tracking-tight">{t.nome}</h3>
                <p className="mb-4 mt-1 text-[12.5px] text-dim">{t.desc}</p>
                <div className="mb-1 flex items-baseline gap-1.5">
                  <span className={`font-display text-[32px] font-black leading-none tracking-tight ${t.destaque ? "text-amber" : ""}`}>
                    R$ {fmt(t.fee)}
                  </span>
                  <span className="text-[12.5px] text-dim">/mês</span>
                </div>
                <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.06em] text-dim">
                  gestão de até R$ {fmt(t.teto)}/mês em verba
                </p>
                <ul className="flex flex-col gap-2 text-[12.5px] text-dim">
                  <li className="flex gap-2"><span className="font-bold text-amber">✓</span> Google Ads + Meta Ads</li>
                  <li className="flex gap-2"><span className="font-bold text-amber">✓</span> Otimização sobre venda líquida</li>
                  <li className="flex gap-2"><span className="font-bold text-amber">✓</span> Relatórios sobre a régua do Pixel Reports</li>
                  <li className="flex gap-2"><span className="font-bold text-amber">✓</span> 0% de comissão sobre a verba</li>
                </ul>
                <a href={waLink(CTA_MSG)} target="_blank" rel="noopener"
                  className={`mt-auto pt-5 text-center font-display text-[13px] font-bold no-underline ${t.destaque ? "text-amber" : "text-ink"}`}>
                  Começar com {t.nome} →
                </a>
              </article>
            </Reveal>
          ))}
          <Reveal className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-line bg-navy-950/40 p-6">
              <h3 className="font-display text-[19px] font-extrabold tracking-tight">Personalizado</h3>
              <p className="mb-4 mt-1 text-[12.5px] text-dim">Pra operação investindo pesado, com squad e metas dedicadas.</p>
              <div className="mb-1">
                <span className="font-display text-[26px] font-black leading-none tracking-tight text-amber">Sob proposta</span>
              </div>
              <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.06em] text-dim">
                R$ 50.000+/mês em verba
              </p>
              <ul className="flex flex-col gap-2 text-[12.5px] text-dim">
                <li className="flex gap-2"><span className="font-bold text-amber">✓</span> Tudo do Performance</li>
                <li className="flex gap-2"><span className="font-bold text-amber">✓</span> Estratégia e metas por canal</li>
                <li className="flex gap-2"><span className="font-bold text-amber">✓</span> Rotina de testes dedicada</li>
              </ul>
              <a href={waLink("Olá! Invisto R$ 50 mil+ por mês em mídia e quero uma proposta personalizada.")} target="_blank" rel="noopener"
                className="mt-auto pt-5 text-center font-display text-[13px] font-bold text-ink no-underline">
                Falar com a Pixel →
              </a>
            </article>
          </Reveal>
        </div>
        <Reveal>
          <p className="mx-auto mt-8 max-w-[820px] text-center text-[12px] text-dim">
            O enquadramento usa a média de verba do trimestre — um pico de Black Friday não te reenquadra, e
            estourar a faixa nunca pausa as suas campanhas. Mudança de plano só quando o patamar muda de
            verdade, sempre com aviso prévio.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ CALCULADORA ============ */
export function TeCalculadora() {
  const [verba, setVerba] = useState(50000);
  const [pct, setPct] = useState(15);
  const tier = verba <= 5000 ? tiers[0] : verba <= 15000 ? tiers[1] : verba <= 50000 ? tiers[2] : null;
  const feeAgenciaPct = Math.round(verba * (pct / 100));
  const fmt = (n: number) => n.toLocaleString("pt-BR");
  const input =
    "w-full rounded-[10px] border border-line bg-navy-900/60 px-4 py-2.5 text-[14px] text-ink outline-none transition-colors focus:border-amber";
  return (
    <section className="py-24">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">A ponta do lápis</span>
          <h2 className="mb-5 font-display text-[clamp(23px,2.8vw,36px)] font-extrabold leading-[1.15] tracking-tight">
            No modelo por percentual, a agência é sócia da sua verba — pra sempre.
          </h2>
          <div className="flex flex-col gap-4 text-[15px] text-dim">
            <p>
              Agências de performance tipicamente cobram <strong className="text-ink">de 10% a 20% da verba
              investida</strong>. Parece pouco até você escalar: a cada real a mais de mídia, uma fração vai
              pra agência — mesmo que o trabalho de gestão seja praticamente o mesmo.
            </p>
            <p>
              Coloque a sua verba ao lado e compare: o fee fixo da faixa contra o percentual. E repare —{" "}
              <strong className="text-ink">dentro da faixa, dobrar a verba não muda o nosso fee em R$ 1.</strong>
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="card mx-auto w-full max-w-[440px] bg-navy-950/60 p-6">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block font-mono text-[10px] uppercase tracking-[0.06em] text-dim">Verba mensal (R$)</label>
                <input type="number" min={0} step={1000} className={input} value={verba}
                  onChange={(e) => setVerba(Math.max(0, Number(e.target.value)))} />
              </div>
              <div>
                <label className="mb-1 block font-mono text-[10px] uppercase tracking-[0.06em] text-dim">% da agência típica</label>
                <input type="number" min={1} max={30} className={input} value={pct}
                  onChange={(e) => setPct(Math.min(30, Math.max(1, Number(e.target.value))))} />
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-line bg-navy-900/60 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-dim">Agência a {pct}%</p>
                <p className="font-display text-[22px] font-black tracking-tight text-[#FF8A8A]">R$ {fmt(feeAgenciaPct)}/mês</p>
                <p className="text-[10.5px] text-dim">e sobe junto com a verba</p>
              </div>
              <div className="rounded-xl border border-amber/40 bg-amber/[.06] p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-dim">
                  Pixel · {tier ? `plano ${tier.nome}` : "personalizado"}
                </p>
                <p className="font-display text-[22px] font-black tracking-tight text-amber">
                  {tier ? `R$ ${fmt(tier.fee)}/mês` : "sob proposta"}
                </p>
                <p className="text-[10.5px] text-dim">{tier ? "fixo dentro da faixa" : "verba acima de R$ 50 mil"}</p>
              </div>
            </div>
            {tier && feeAgenciaPct > tier.fee ? (
              <p className="mt-4 text-center text-[13px] text-dim">
                <strong className="text-amber">R$ {fmt(feeAgenciaPct - tier.fee)}/mês</strong> que ficam na sua
                operação — ou viram mais verba de mídia.
              </p>
            ) : tier ? (
              <p className="mt-4 text-center text-[12.5px] text-dim">
                Nessa verba o percentual parece menor — mas ele cresce com <strong className="text-ink">cada
                real</strong> que você escalar; o fixo, não. Projete a verba de daqui a 12 meses e refaça a conta.
              </p>
            ) : null}
            <p className="mt-3 text-center text-[10.5px] text-dim">
              Percentuais de referência do mercado; modelos por % costumam ter fee mínimo. Verba sempre paga
              por você direto às plataformas.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ DIFERENCIAIS ============ */
const difs: [string, string][] = [
  ["Otimização sobre venda líquida", "O gerenciador de anúncios comemora conversão; a gente otimiza sobre bruto − frete − reembolsos, direto do Pixel Reports. Campanha que vende produto que volta não é campanha boa."],
  ["Atribuição de verdade", "Sessões e canais classificados com click-ID (gclid/fbclid) na régua do Pixel Reports — o mesmo número no relatório da agência e no painel da loja. Sem dois dashboards brigando."],
  ["0% sobre a verba", "Fee fixo por faixa. A sua verba de mídia é 100% mídia — sem comissão da agência embutida, sem incentivo torto pra te fazer gastar mais."],
  ["Fraude fora da conta", "Detecção de carding e pedidos fraudulentos excluídos da análise — o seu ROAS não é inflado por venda que nunca existiu."],
  ["Conta sua, acesso total", "Google Ads e Meta Ads nas suas contas, com o seu histórico. Sair da Pixel não significa recomeçar do zero."],
  ["Sinergia com a plataforma", "Loja no Pixel Commerce? CRM, fidelização e recuperação de carrinho trabalham o cliente que a mídia trouxe — o CAC pago uma vez rende compra atrás de compra."],
];

export function TeDiferenciais() {
  return (
    <section className="border-t border-line bg-navy-900 py-24">
      <div className="wrap">
        <Reveal className="mb-14 max-w-[720px]">
          <span className="eyebrow">Por que aqui</span>
          <h2 className="font-display text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Gestão de tráfego de quem também escreve o código da loja.
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

/* ============ FAQ + CTA ============ */
const faq: [string, string][] = [
  ["O fee inclui a verba dos anúncios?", "Não — a verba é paga por você diretamente ao Google e à Meta, nas suas próprias contas, com acesso total. O fee cobre a estratégia, a gestão diária, os testes e os relatórios sobre venda líquida."],
  ["O que acontece se eu investir mais que o teto da minha faixa?", "Nada trava: as campanhas seguem rodando. O enquadramento usa a média do trimestre — um pico de Black Friday não te reenquadra sozinho. Se o novo patamar se sustentar, conversamos sobre a faixa seguinte, com aviso prévio."],
  ["Preciso estar na plataforma Pixel Commerce?", "Não — atendemos lojas WooCommerce em qualquer infraestrutura. Mas quem está na plataforma ganha a sinergia completa: Pixel Reports medindo a mídia na régua de venda líquida e CRM/fidelização multiplicando o cliente que o anúncio trouxe."],
  ["Vocês trabalham com percentual sobre a verba?", "Não, por princípio: percentual cria incentivo torto (quanto mais você gasta, mais a agência ganha — mesmo sem melhorar resultado). Fee fixo por faixa alinha o interesse: nosso trabalho é fazer a mesma verba render mais."],
  ["Tem fidelidade?", "Não. Contrato mensal, contas de anúncio suas, histórico seu. Preferimos te segurar por resultado."],
  ["E TikTok Ads?", "Hoje o foco é Google + Meta, onde está a esmagadora maioria da receita de e-commerce de moda no Brasil. TikTok entra caso a caso, em proposta — fale com a gente sobre a sua operação."],
];

export function TeFaqCta() {
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
            <h2 className="mx-auto mb-4 max-w-[700px] font-display text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.12] tracking-tight">
              Sua verba merece uma agência que <span className="text-amber">não ganha quando você gasta mais.</span>
            </h2>
            <p className="mx-auto mb-8 max-w-[560px] text-[15.5px] text-dim">
              Manda o link da sua loja e a verba atual no WhatsApp — devolvemos um diagnóstico das campanhas
              e a faixa certa, sem compromisso.
            </p>
            <a href={waLink(CTA_MSG)} target="_blank" rel="noopener" className="btn-amber inline-block">
              Pedir diagnóstico gratuito
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
