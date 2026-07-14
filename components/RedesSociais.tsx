"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { waLink } from "./site/config";

const CTA_MSG = "Olá! Quero a gestão de redes sociais da Pixel Partners para o meu negócio.";

const planos = [
  {
    nome: "Presença", fee: 1450,
    desc: "Pra quem precisa de perfil vivo e profissional, sem se preocupar com isso nunca mais.",
    itens: ["12 posts/mês (artes + legendas)", "Instagram + Facebook", "Stories semanais", "Agendamento e monitoramento de comentários", "Relatório mensal + 1 reunião de alinhamento"],
  },
  {
    nome: "Autoridade", fee: 2450, destaque: true,
    desc: "Pra quem quer virar referência no assunto — com vídeo entrando em cena.",
    itens: ["20 posts/mês (artes + carrosséis)", "Reels editados (você grava com nosso roteiro, a gente lapida)", "Stories 3x por semana", "Gestão de comunidade (comentários + directs)", "Relatório com insights estratégicos"],
  },
  {
    nome: "Referência", fee: 3950,
    desc: "Pra quem quer produção audiovisual de verdade — o pacote que o mercado premium cobra R$ 6 mil+.",
    itens: ["Tudo do Autoridade", "1 diária de gravação/mês (Grande Vitória; fora, sob logística)", "Produção e edição profissional de vídeo", "Roteiros e direção de conteúdo", "Calendário editorial estratégico trimestral"],
  },
];

/* ============ MOCK: grid editorial ============ */
function GridMock() {
  const cels: [string, string][] = [
    ["🎬", "Reel"], ["🖼️", "Post"], ["📑", "Carrossel"],
    ["🖼️", "Post"], ["🎬", "Reel"], ["🖼️", "Post"],
    ["📑", "Carrossel"], ["🖼️", "Post"], ["🎬", "Reel"],
  ];
  return (
    <div className="w-full max-w-[380px] rounded-2xl border border-white/10 bg-[#081826] p-4 shadow-[0_30px_60px_rgba(0,0,0,.45)]">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-display text-[13px] font-bold">Seu calendário do mês</p>
        <span className="rounded-full bg-amber px-2 py-0.5 font-mono text-[8.5px] font-bold uppercase text-navy-950">aprovado ✓</span>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {cels.map(([e, t], i) => (
          <div key={i} className="grid aspect-square place-items-center rounded-lg border border-white/[.07] bg-navy-950/50">
            <div className="text-center">
              <span className="block text-xl" aria-hidden>{e}</span>
              <span className="font-mono text-[7.5px] uppercase tracking-[0.06em] text-dim">{t}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-center font-mono text-[8.5px] uppercase tracking-[0.08em] text-dim">
        você aprova tudo antes · constância sem esforço seu
      </p>
    </div>
  );
}

/* ============ HERO ============ */
export function RsHero() {
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
          <span className="eyebrow">Pixel Partners · Redes Sociais</span>
          <h1 className="mb-5 font-display text-[clamp(30px,4.2vw,54px)] font-extrabold leading-[1.08] tracking-[-0.025em]">
            Perfil parado passa a mensagem errada. <span className="text-amber">Constância profissional passa a certa.</span>
          </h1>
          <p className="mb-7 max-w-[560px] text-[16.5px] text-dim">
            Gestão completa de redes sociais pra negócios locais e profissionais da saúde: estratégia,
            conteúdo, artes, vídeo e relatório — com um time inteiro por trás, não um freelancer que some
            nas férias.
          </p>
          <div className="mb-2 flex items-baseline gap-2.5">
            <span className="font-display text-[44px] font-black leading-none tracking-tight">R$ 1.450</span>
            <span className="text-[15px] text-dim">/mês no plano de entrada · você aprova tudo antes de ir ao ar</span>
          </div>
          <a href={waLink(CTA_MSG)} target="_blank" rel="noopener" className="btn-amber mt-4 inline-block">
            Quero minhas redes cuidadas de verdade
          </a>
          <p className="mt-3.5 text-[13px] text-dim">Foco: negócios locais e saúde · não atendemos moda/e-commerce · sem fidelidade</p>
        </Reveal>
        <Reveal delay={0.15} className="flex justify-center lg:justify-end">
          <GridMock />
        </Reveal>
      </div>
    </section>
  );
}

/* ============ O PROBLEMA ============ */
export function RsProblema() {
  const dores: [string, string][] = [
    ["O sócio que posta 'quando dá'", "Constância é o que o algoritmo mais premia — e a primeira coisa que morre quando a agenda aperta. Perfil com último post de 3 meses atrás transmite o oposto de profissionalismo."],
    ["O freelancer que some", "A faixa de R$ 500–1.200 resolve barato até as férias, o imprevisto ou a troca de carreira. A rotatividade interrompe justamente a constância que faz o trabalho valer."],
    ["A equipe interna que não fecha a conta", "Social media + designer + editor de vídeo contratados custam de R$ 8 a 18 mil/mês em salários e encargos. Só compensa em operações grandes — e não é o seu problema a resolver."],
  ];
  return (
    <section className="border-t border-line bg-navy-900 py-24">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[760px]">
          <span className="eyebrow">O problema</span>
          <h2 className="mb-4 font-display text-[clamp(24px,3vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Todo mundo sabe que precisa estar nas redes. Quase ninguém consegue sustentar.
          </h2>
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
        <Reveal>
          <p className="mt-6 max-w-[820px] text-[12px] text-dim">
            Faixas de referência do mercado brasileiro em 2026, conforme levantamentos públicos de preços de
            gestão de redes sociais — variam por região e escopo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ PLANOS ============ */
export function RsPlanos() {
  const fmt = (n: number) => n.toLocaleString("pt-BR");
  return (
    <section id="planos" className="py-24">
      <div className="wrap">
        <Reveal className="mb-12 max-w-[760px]">
          <span className="eyebrow">Investimento</span>
          <h2 className="mb-4 font-display text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Três níveis, preço público — como tudo aqui.
          </h2>
          <p className="text-[15.5px] text-dim">
            O mercado cobra de R$ 1.200 (pacote básico de agência) a R$ 6.000+ (pacote premium com vídeo).
            Nossa régua fica dentro dessas faixas — com uma diferença: produção audiovisual de verdade{" "}
            <strong className="text-ink">bem antes do preço premium</strong>.
          </p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {planos.map((p) => (
            <Reveal key={p.nome} className="h-full">
              <article className={`flex h-full flex-col rounded-2xl border p-6 ${p.destaque ? "glow-border border-amber/60 bg-gradient-to-b from-amber/[.07] to-transparent" : "border-line bg-navy-950/40"}`}>
                {p.destaque && (
                  <span className="mb-3 self-start rounded-full bg-amber px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.08em] text-navy-950">
                    mais escolhido
                  </span>
                )}
                <h3 className="font-display text-[19px] font-extrabold tracking-tight">{p.nome}</h3>
                <p className="mb-4 mt-1 text-[12.5px] text-dim">{p.desc}</p>
                <div className="mb-5 flex items-baseline gap-1.5">
                  <span className={`font-display text-[32px] font-black leading-none tracking-tight ${p.destaque ? "text-amber" : ""}`}>
                    R$ {fmt(p.fee)}
                  </span>
                  <span className="text-[12.5px] text-dim">/mês</span>
                </div>
                <ul className="flex flex-col gap-2.5 text-[13px] text-dim">
                  {p.itens.map((it) => (
                    <li key={it} className="flex gap-2.5">
                      <span className="mt-px shrink-0 font-bold text-amber">✓</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <a href={waLink(`Olá! Quero o plano ${p.nome} de redes sociais.`)} target="_blank" rel="noopener"
                  className={`mt-auto pt-6 text-center font-display text-[13px] font-bold no-underline ${p.destaque ? "text-amber" : "text-ink"}`}>
                  Começar com {p.nome} →
                </a>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mx-auto mt-8 max-w-[820px] text-center text-[12px] text-dim">
            Impulsionamento (verba de anúncio) não está incluso — anúncios profissionais são outra
            disciplina, com <a href="/trafego-pago" className="border-b border-amber/50 text-amber no-underline">página e pacote próprios</a>.
            Todo conteúdo passa pela sua aprovação antes de ir ao ar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ BENCHMARK ============ */
const faixas: [string, string, string][] = [
  ["Freelancer", "R$ 500 – 1.200/mês", "1 rede, 8–12 posts. Barato até as férias ou o imprevisto — a rotatividade interrompe a constância."],
  ["Agência — pacote PME", "R$ 1.200 – 2.500/mês", "2 redes, artes + legendas, relatório. A faixa onde a maioria das PMEs encontra equilíbrio."],
  ["Agência padrão", "R$ 3.000 – 6.000/mês", "Time multidisciplinar, estratégia, gestão de comunidade."],
  ["Agência premium", "R$ 6.000+/mês", "Inclui produção de vídeos profissional."],
  ["Equipe interna", "R$ 8.000 – 18.000/mês", "Salários + encargos de social media, designer e editor. Só compensa em operação grande."],
];

export function RsBenchmark() {
  return (
    <section className="border-t border-line bg-navy-900 py-24">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[760px]">
          <span className="eyebrow">O mercado, na mesa</span>
          <h2 className="mb-4 font-display text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.12] tracking-tight">
            Quanto custa gestão de redes no Brasil — e onde a gente se posiciona.
          </h2>
          <p className="text-[15.5px] text-dim">
            Quase nenhuma agência publica preço. A gente publica o nosso <strong className="text-ink">e o
            do mercado</strong> — porque comparação honesta é o melhor vendedor.
          </p>
        </Reveal>
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line bg-navy-950/60">
                  <th className="p-4 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-dim">Modelo</th>
                  <th className="p-4 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-dim">Faixa de mercado*</th>
                  <th className="p-4 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-dim">O que esperar</th>
                </tr>
              </thead>
              <tbody>
                {faixas.map(([m, f, d], i) => (
                  <tr key={m} className={`border-b border-white/[.05] ${i % 2 ? "bg-navy-950/25" : ""}`}>
                    <td className="p-4 font-display text-[13.5px] font-bold">{m}</td>
                    <td className="p-4 text-[13px] text-amber">{f}</td>
                    <td className="p-4 text-[13px] text-dim">{d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 rounded-2xl border border-amber/40 bg-amber/[.05] p-6">
            <p className="font-display text-[16px] font-extrabold tracking-tight">Onde a Pixel fica nessa régua</p>
            <p className="mt-1 text-[13.5px] text-dim">
              Entrada em <strong className="text-ink">R$ 1.450</strong> (faixa PME, com 2 redes e reunião
              mensal), meio em <strong className="text-ink">R$ 2.450</strong> (teto da faixa PME, já com
              Reels), e o topo em <strong className="text-amber">R$ 3.950 com produção audiovisual
              inclusa</strong> — a entrega da faixa premium de R$ 6.000+, por bem menos.
            </p>
          </div>
          <p className="mt-4 text-[11.5px] text-dim">
            *Faixas de referência do mercado brasileiro em 2026, conforme levantamentos públicos de preços
            (variam por região, escopo e senioridade). Material informativo, sujeito a alteração.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ CALCULADORA ============ */
export function RsCalculadora() {
  const [posts, setPosts] = useState(16);
  const [video, setVideo] = useState(true);
  const plano = video ? (posts > 20 ? planos[2] : planos[1]) : posts > 12 ? planos[1] : planos[0];
  const freelancer = posts * 100 + (video ? 800 : 0);
  const fmt = (n: number) => n.toLocaleString("pt-BR");
  return (
    <section className="py-24">
      <div className="wrap grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">A ponta do lápis</span>
          <h2 className="mb-5 font-display text-[clamp(23px,2.8vw,36px)] font-extrabold leading-[1.15] tracking-tight">
            Monte sua necessidade e compare os três caminhos.
          </h2>
          <div className="flex flex-col gap-4 text-[15px] text-dim">
            <p>
              A conta do freelancer usa a referência de mercado (~R$ 100 por post avulso, vídeo à parte); a
              da equipe interna, os R$ 8–18 mil/mês de salários e encargos. O pacote dilui um time inteiro —
              estrategista, designer, editor — num valor que negócio local consegue sustentar.
            </p>
            <p className="text-[12.5px]">
              Valores de referência do mercado 2026, não orçamento formal — cada operação tem seu contexto.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="card mx-auto w-full max-w-[440px] bg-navy-950/60 p-6">
            <label className="mb-1 block font-mono text-[10px] uppercase tracking-[0.06em] text-dim">
              Posts por mês: <span className="text-amber">{posts}</span>
            </label>
            <input type="range" min={8} max={30} value={posts} onChange={(e) => setPosts(Number(e.target.value))}
              className="mb-4 w-full accent-[#FFB700]" />
            <div className="mb-5 flex items-center justify-between rounded-xl border border-line bg-navy-900/60 px-4 py-3">
              <span className="text-[13.5px] text-dim">Precisa de vídeo (Reels)?</span>
              <button type="button" onClick={() => setVideo(!video)}
                className={`rounded-lg border px-3.5 py-1.5 font-display text-[12px] font-bold transition-colors ${video ? "border-amber bg-amber/10 text-amber" : "border-line text-dim"}`}>
                {video ? "Sim" : "Não"}
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="rounded-xl border border-line bg-navy-900/60 p-3">
                <p className="font-mono text-[8.5px] uppercase tracking-[0.06em] text-dim">Freelancer</p>
                <p className="font-display text-[17px] font-black tracking-tight">~R$ {fmt(freelancer)}</p>
                <p className="text-[9px] text-dim">sem time, risco de rotatividade</p>
              </div>
              <div className="rounded-xl border border-line bg-navy-900/60 p-3">
                <p className="font-mono text-[8.5px] uppercase tracking-[0.06em] text-dim">Equipe interna</p>
                <p className="font-display text-[17px] font-black tracking-tight text-[#FF8A8A]">R$ 8–18 mil</p>
                <p className="text-[9px] text-dim">salários + encargos</p>
              </div>
              <div className="rounded-xl border border-amber/40 bg-amber/[.06] p-3">
                <p className="font-mono text-[8.5px] uppercase tracking-[0.06em] text-dim">Pixel · {plano.nome}</p>
                <p className="font-display text-[17px] font-black tracking-tight text-amber">R$ {fmt(plano.fee)}</p>
                <p className="text-[9px] text-dim">time completo, sem encargo</p>
              </div>
            </div>
            <p className="mt-4 text-center text-[12.5px] text-dim">
              Pro seu volume, o caminho é o <strong className="text-amber">plano {plano.nome}</strong> — time
              inteiro pelo preço que não fecha nem meio salário interno.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ PARA QUEM É + FAQ ============ */
const faq: [string, string][] = [
  ["Vocês atendem loja virtual ou marca de moda?", "Não — e é de propósito. Nossa operação de redes sociais é focada em negócios locais e profissionais da saúde, onde nosso processo rende mais. Moda e e-commerce têm dinâmica própria de conteúdo que não é a nossa praia nesta frente."],
  ["Quem grava os vídeos?", "Depende do plano. No Autoridade, você grava com nosso roteiro e orientação — e a gente lapida na edição. No Referência, nossa equipe vai até você: 1 diária de gravação por mês na Grande Vitória (fora da região, combinamos a logística)."],
  ["O conteúdo respeita as normas do meu conselho profissional?", "Sim. Pra profissionais da saúde, o conteúdo é produzido respeitando as diretrizes de publicidade do seu conselho (CFM, CRO e afins) — sem promessa de resultado, sem antes-e-depois vedado, sem sensacionalismo."],
  ["Impulsionamento está incluso?", "Não — verba de anúncio e gestão de campanhas são outra disciplina, com pacote próprio de Tráfego Pago. As duas frentes conversam bem juntas, mas você contrata só o que precisa."],
  ["Eu aprovo antes de postar?", "Sempre. O calendário do mês chega pra sua aprovação antes de qualquer coisa ir ao ar. Ajustes fazem parte do processo — a voz é sua, a gente só profissionaliza."],
  ["Tem fidelidade?", "Não. Contrato mensal. Dito isso, redes sociais são jogo de constância: os primeiros resultados orgânicos costumam aparecer com 2–3 meses de trabalho consistente — falamos isso com transparência desde o início."],
];

export function RsQuemFaq() {
  const [open, setOpen] = useState<number | null>(0);
  const quem = [
    "Clínicas, consultórios e profissionais de saúde (com conteúdo dentro das normas do conselho)",
    "Escolas, cursos e serviços educacionais",
    "Comércio e serviços locais que vivem de confiança e recorrência",
    "Empresários sem tempo (nem obrigação) de virar criador de conteúdo",
  ];
  return (
    <section className="border-t border-line bg-navy-900 py-24">
      <div className="wrap grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
        <Reveal>
          <span className="eyebrow">Para quem é</span>
          <h2 className="mb-6 font-display text-[clamp(22px,2.6vw,32px)] font-extrabold leading-[1.15] tracking-tight">
            Feito pra quem vive de confiança — não de viral.
          </h2>
          <ul className="flex flex-col gap-3">
            {quem.map((q) => (
              <li key={q} className="flex gap-2.5 text-[14px] text-dim">
                <span className="mt-px shrink-0 font-bold text-amber">✓</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-xl border border-white/[.07] bg-navy-950/50 p-4 text-[12.5px] text-dim">
            <strong className="text-ink">Transparência:</strong> não atendemos moda nem e-commerce nesta
            frente — preferimos dizer não a entregar mediano.
          </p>
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
export function RsCTA() {
  return (
    <section className="border-t border-line py-20 text-center">
      <div className="wrap">
        <Reveal>
          <h2 className="mx-auto mb-4 max-w-[720px] font-display text-[clamp(24px,3vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Seu próximo cliente vai olhar seu perfil antes de te ligar. <span className="text-amber">O que ele vai encontrar?</span>
          </h2>
          <p className="mx-auto mb-8 max-w-[560px] text-[15.5px] text-dim">
            A partir de R$ 1.450/mês, com aprovação sua em tudo e sem fidelidade. Manda o @ do seu perfil no
            WhatsApp — devolvemos uma análise honesta do que dá pra melhorar.
          </p>
          <a href={waLink(CTA_MSG)} target="_blank" rel="noopener" className="btn-amber inline-block">
            Pedir análise gratuita do meu perfil
          </a>
        </Reveal>
      </div>
    </section>
  );
}
