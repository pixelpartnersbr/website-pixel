"use client";
import Reveal from "./Reveal";
import { waLink } from "./site/config";

const CTA_MSG = "Olá! Quero vídeo shoppable na minha loja com o PP Videocommerce.";

/* ============ MOCK: story shoppable ============ */
function StoryMock() {
  return (
    <div className="w-full max-w-[300px] rounded-[26px] border border-white/10 bg-[#081826] p-3 shadow-[0_30px_60px_rgba(0,0,0,.45)]">
      <div className="relative overflow-hidden rounded-[16px] bg-gradient-to-b from-[#0B2233] to-navy-950">
        {/* área do vídeo */}
        <div className="relative flex aspect-[9/14] items-center justify-center">
          <div className="absolute inset-0" style={{ background: "radial-gradient(320px 260px at 50% 30%, rgba(255,183,0,.14), transparent 70%)" }} />
          <span className="relative grid h-14 w-14 place-items-center rounded-full border border-white/25 bg-white/10 text-[18px] backdrop-blur-sm">▶</span>
          {/* barra de progresso do story */}
          <div className="absolute inset-x-3 top-3 flex gap-1">
            {[1, 2, 3].map((i) => (
              <span key={i} className={`h-[3px] flex-1 rounded-full ${i === 1 ? "bg-amber" : "bg-white/20"}`} />
            ))}
          </div>
          {/* seletor de variação dentro do player */}
          <div className="absolute left-3 top-10 flex gap-1.5">
            {["P", "M", "G"].map((t) => (
              <span key={t} className={`grid h-7 w-7 place-items-center rounded-lg border text-[10.5px] font-bold ${t === "M" ? "border-amber bg-amber text-navy-950" : "border-white/25 text-ink"}`}>
                {t}
              </span>
            ))}
          </div>
        </div>
        {/* monte o look: tira de produtos */}
        <div className="border-t border-white/[.07] p-3">
          <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.1em] text-dim">monte o look · 4 peças</p>
          <div className="mb-3 flex gap-2">
            {["👗", "👜", "👠", "🧥"].map((e, i) => (
              <span key={e} className={`grid h-11 w-11 place-items-center rounded-lg border text-[17px] ${i === 0 ? "border-amber bg-amber/10" : "border-white/10 bg-navy-800/40"}`}>
                {e}
              </span>
            ))}
          </div>
          <button type="button" className="w-full rounded-[10px] bg-amber py-2.5 font-display text-[12.5px] font-bold text-navy-950">
            Adicionar ao carrinho — R$ 289
          </button>
          <p className="mt-2 text-center font-mono text-[8.5px] uppercase tracking-[0.08em] text-dim">
            mini-carrinho abre aqui mesmo · sem sair do vídeo
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============ HERO ============ */
export function VcHero() {
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
          <span className="eyebrow">Pixel Commerce · PP Videocommerce</span>
          <h1 className="mb-5 font-display text-[clamp(32px,4.4vw,56px)] font-extrabold leading-[1.08] tracking-[-0.025em]">
            Vídeo que vende — <span className="text-amber">dentro</span> da sua loja.
          </h1>
          <p className="mb-7 max-w-[540px] text-[17px] text-dim">
            Catálogo, página de produto e stories shoppable em vídeo, com o carrinho abrindo dentro do
            player. Plugin nativo do WooCommerce: sem script de terceiro, sem limite de vídeos, sem limite
            de views — e os dados na sua loja.
          </p>
          <div className="mb-2 flex items-baseline gap-2.5">
            <span className="font-display text-[46px] font-black leading-none tracking-tight">R$ 199</span>
            <span className="text-[15px] text-dim">/mês por loja · ou incluso no plano Growth</span>
          </div>
          <a
            href={waLink(CTA_MSG)}
            target="_blank"
            rel="noopener"
            className="btn-amber mt-4 inline-block"
          >
            Quero vídeo na minha loja
          </a>
          <p className="mt-3.5 text-[13px] text-dim">
            Plugin nativo · suporte de agência · sem fidelidade
          </p>
        </Reveal>
        <Reveal delay={0.15} className="flex justify-center lg:justify-end">
          <StoryMock />
        </Reveal>
      </div>
    </section>
  );
}

/* ============ RECURSOS ============ */
const recursos = [
  ["🎞️", "Vídeo no catálogo", "A miniatura do produto na listagem ganha vídeo com reprodução automática — a atenção capturada já na navegação."],
  ["🖼️", "Vídeo na página do produto", "O vídeo entra na galeria logo após a capa, mostrando caimento, textura e uso real — o que a foto estática não resolve."],
  ["📱", "Stories e destaques circulares", "Sliders verticais estilo redes sociais ou destaques circulares, posicionáveis em qualquer página via shortcode."],
  ["🛒", "Carrinho dentro do vídeo", "Cada story pode ter produtos associados. O cliente adiciona ao carrinho sem interromper a experiência — o mini-carrinho abre na hora."],
  ["🎯", "Variação dentro do player", "Tamanho e cor escolhidos num seletor embutido no próprio vídeo. Sem sair da experiência, sem abrir outra página."],
  ["👗", "Montar o look", "Até 4 produtos por story, com tira de miniaturas pra montar o conjunto completo — feito pra moda."],
  ["📊", "Métricas por vídeo", "Visualizações, plays, adições ao carrinho e conversão por vídeo. Você descobre quais conteúdos vendem e dobra a aposta neles."],
  ["⚡", "Carregamento sob demanda", "Os vídeos só carregam quando entram na tela — a vitrine ganha movimento sem penalizar a velocidade da página."],
];

export function VcRecursos() {
  return (
    <section className="border-t border-line py-24">
      <div className="wrap">
        <Reveal className="mb-14 max-w-[720px]">
          <span className="eyebrow">O que ele faz</span>
          <h2 className="mb-4 font-display text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Da vitrine ao carrinho, sem sair do vídeo.
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {recursos.map(([ic, t, d], i) => (
            <Reveal key={t} delay={i * 0.05} className="h-full">
              <article className="spot card h-full bg-navy-800/15 p-5 transition-colors hover:border-amber/40">
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

/* ============ POTENCIAL DE CONVERSÃO ============ */
export function VcConversao() {
  const stats = [
    ["até 7×", "de aumento médio em conversão e engajamento relatado por fornecedores de video commerce — número divulgado pela própria líder da categoria*"],
    ["+299%", "de conversão em 3 meses e 2,5× em menos de uma semana: cases públicos do setor*"],
    ["3 frentes", "de onde vem o ganho: mais tempo no site, menos dúvida na decisão e menos troca/devolução"],
  ];
  return (
    <section className="bg-navy-900 py-20">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[760px]">
          <span className="eyebrow">Potencial de conversão</span>
          <h2 className="mb-4 font-display text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.12] tracking-tight">
            O vídeo ataca a maior objeção do e-commerce: "será que é isso mesmo?"
          </h2>
          <p className="text-[15.5px] text-dim">
            Ao mostrar o produto em uso, o vídeo reduz a incerteza, aumenta o tempo de permanência e
            encurta a decisão. E os números da categoria não são nossos — são do próprio mercado:
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
            *Referências públicas do setor de video commerce no Brasil (divulgações e cases de plataformas
            do segmento, incluindo a Widde), apresentadas como potencial da categoria — não como promessa de
            resultado. O resultado real depende da qualidade dos vídeos, do catálogo e do tráfego de cada
            loja. É exatamente por isso que o módulo traz <strong className="text-ink">métricas por
            vídeo</strong>: você enxerga o que converte na sua loja e investe no que traz carrinho.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ COMPARATIVO WIDDE ============ */
type Cell = { v: "sim" | "nao" | "info"; note?: string };
const rows: [string, Cell, Cell][] = [
  ["Mensalidade", { v: "sim", note: "R$ 199/mês fixos" }, { v: "info", note: "a partir de R$ 399/mês" }],
  ["Modelo", { v: "sim", note: "plugin nativo na sua loja" }, { v: "info", note: "SaaS externo (script/app)" }],
  ["Limite de vídeos", { v: "sim", note: "sem limite" }, { v: "nao", note: "por plano" }],
  ["Limite de views/tráfego", { v: "sim", note: "sem limite" }, { v: "nao", note: "por faixa de sessões/mês" }],
  ["Onde ficam os vídeos e os dados", { v: "sim", note: "no seu site" }, { v: "nao", note: "na plataforma do fornecedor" }],
  ["Carrinho dentro do vídeo", { v: "sim", note: "nativo Woo + FunnelKit" }, { v: "sim" }],
  ["Seletor de variação no player", { v: "sim" }, { v: "nao", note: "não divulgado" }],
  ["Montar o look (multiproduto)", { v: "sim", note: "até 4 produtos por story" }, { v: "nao", note: "não divulgado" }],
  ["Métricas por vídeo", { v: "sim" }, { v: "sim" }],
  ["Suporte", { v: "sim", note: "agência dedicada (Pixel)" }, { v: "info", note: "suporte da plataforma" }],
  ["Live commerce e provador com IA", { v: "nao", note: "deliberadamente fora do escopo" }, { v: "sim" }],
  ["Fidelidade", { v: "sim", note: "sem fidelidade" }, { v: "sim", note: "sem fidelidade" }],
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

export function VcComparativo() {
  return (
    <section id="comparativo" className="border-t border-line py-24">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[720px]">
          <span className="eyebrow">Comparativo · PP Videocommerce vs Widde</span>
          <h2 className="mb-4 font-display text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.12] tracking-tight">
            A mesma categoria da líder — sem limite e pela metade do preço
          </h2>
          <p className="text-[15.5px] text-dim">
            A Widde é a pioneira do video commerce no Brasil e validou a categoria. A diferença está no
            modelo: SaaS externo cobrado por faixa de sessões, contra plugin nativo com preço fixo. Até a
            versão gratuita deles ilustra o modelo — limitada a 5 vídeos e 500 views/mês.
          </p>
        </Reveal>
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line bg-navy-950/60">
                  <th className="p-4 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-dim">Critério</th>
                  <th className="w-[210px] p-4 text-center font-display text-[14px] font-extrabold text-amber">PP Videocommerce</th>
                  <th className="w-[210px] p-4 text-center font-display text-[14px] font-extrabold">Widde</th>
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
              <p className="font-display text-[16px] font-extrabold tracking-tight">A conta simples</p>
              <p className="text-[13.5px] text-dim">
                Economia a partir de <strong className="text-amber">R$ 200/mês (R$ 2.400/ano)</strong> em
                relação ao plano de entrada da Widde — sem teto de vídeos, sem teto de views, dados na sua loja.
              </p>
            </div>
            <a href={waLink(CTA_MSG)} target="_blank" rel="noopener" className="btn-ghost whitespace-nowrap">
              Fazer a conta comigo →
            </a>
          </div>
          <p className="mt-4 text-[11.5px] text-dim">
            "~" = modelo diferente, ver nota. "Não divulgado" = recurso não encontrado nos materiais
            públicos até a data. Análise de julho/2026 com base no site da Widde (widde.io) e nas páginas
            oficiais do app nos marketplaces; preços e condições sujeitos a alteração. Widde é marca de seus
            respectivos titulares.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ O QUE NÃO FAZEMOS ============ */
export function VcHonesto() {
  return (
    <section className="bg-navy-900 py-20">
      <div className="wrap grid items-center gap-10 lg:grid-cols-[1fr_.9fr]">
        <Reveal>
          <span className="eyebrow">Transparência de escopo</span>
          <h2 className="mb-4 font-display text-[clamp(23px,2.8vw,36px)] font-extrabold leading-[1.15] tracking-tight">
            O que deliberadamente não fazemos — e por quê
          </h2>
          <p className="text-[15px] text-dim">
            <strong className="text-ink">Live commerce</strong> (transmissão ao vivo) e{" "}
            <strong className="text-ink">provador virtual com IA</strong> são infraestrutura dedicada, não
            plugin. Pra manter o produto enxuto, rápido e a R$ 199, o PP Videocommerce foca no essencial do
            vídeo shoppable — e quando live ou provador de IA fizerem sentido pra sua operação, o caminho
            certo é integrar uma plataforma especializada. A Pixel orienta nisso, sem empurrar o que não
            resolve.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="spot card bg-navy-950/40 p-6">
            <p className="mb-3 font-display text-[15px] font-bold">A regra que guia o produto</p>
            <p className="text-[14px] text-dim">
              Recurso que incha o plugin, pesa a página ou dobra o preço não entra. É a mesma filosofia do
              resto da plataforma: <strong className="text-ink">cada módulo faz uma coisa, faz rápido e
              faz dentro da sua loja.</strong>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ CTA ============ */
export function VcCTA() {
  return (
    <section className="border-t border-line py-20 text-center">
      <div className="wrap">
        <Reveal>
          <h2 className="mx-auto mb-4 max-w-[700px] font-display text-[clamp(24px,3vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Sua vitrine em movimento a partir do próximo deploy.
          </h2>
          <p className="mx-auto mb-8 max-w-[540px] text-[15.5px] text-dim">
            R$ 199/mês, incluso no Growth, sem fidelidade. Os vídeos você já tem no Instagram — a gente
            coloca eles pra vender.
          </p>
          <a href={waLink(CTA_MSG)} target="_blank" rel="noopener" className="btn-amber inline-block">
            Quero vídeo na minha loja
          </a>
        </Reveal>
      </div>
    </section>
  );
}
