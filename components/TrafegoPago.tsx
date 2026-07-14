"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { waLink } from "./site/config";

const CTA_MSG = "Olá! Tenho um negócio local e quero o pacote completo de tráfego pago da Pixel Partners.";

/* ============ HERO ============ */
export function TpHero() {
  const itens = ["Google Ads", "Hospedagem + SSL", "Suporte Técnico", "Webdesigner", "E-mails Corporativos", "Relatórios Mensais"];
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
          <span className="eyebrow">Pixel Partners · Tráfego Pago para Negócios Locais</span>
          <h1 className="mb-5 font-display text-[clamp(30px,4.2vw,54px)] font-extrabold leading-[1.08] tracking-[-0.025em]">
            Sua empresa no topo do Google — <span className="text-amber">com tudo que a presença online precisa, num pacote só.</span>
          </h1>
          <p className="mb-7 max-w-[560px] text-[16.5px] text-dim">
            Anúncios no Google gerenciados por agência certificada, mais site, hospedagem, e-mails e
            suporte — tudo cuidado pela mesma equipe, por um valor fixo mensal. Você cuida do seu negócio;
            a gente cuida de trazer clientes pra ele.
          </p>
          <div className="mb-2 flex items-baseline gap-2.5">
            <span className="font-display text-[44px] font-black leading-none tracking-tight">R$ 1.250</span>
            <span className="text-[15px] text-dim">/mês fixo · tudo incluso · sem surpresa</span>
          </div>
          <a href={waLink(CTA_MSG)} target="_blank" rel="noopener" className="btn-amber mt-4 inline-block">
            Quero minha presença online completa
          </a>
          <p className="mt-3.5 text-[13px] text-dim">Google Partner certificado · 8+ anos de mercado · sem fidelidade</p>
        </Reveal>
        <Reveal delay={0.15} className="flex justify-center lg:justify-end">
          <div className="w-full max-w-[400px] rounded-2xl border border-white/10 bg-[#081826] p-5 shadow-[0_30px_60px_rgba(0,0,0,.45)]">
            <p className="mb-1 font-display text-[15px] font-bold">Pacote All-in-One</p>
            <p className="mb-4 font-mono text-[9.5px] uppercase tracking-[0.08em] text-dim">seis frentes, uma mensalidade</p>
            <ul className="flex flex-col gap-2.5">
              {itens.map((it, i) => (
                <li key={it} className="flex items-center gap-3 rounded-lg border border-white/[.07] bg-navy-950/50 px-3.5 py-2.5">
                  <span className="font-mono text-[10px] font-bold text-amber">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-[13.5px] font-bold">{it}</span>
                  <span className="ml-auto font-bold text-amber">✓</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ O PACOTE ============ */
const pacote: [string, string, string][] = [
  ["Google Ads", "Gestão completa de campanhas", "Criação, otimização contínua e relatórios detalhados de desempenho das suas campanhas no Google."],
  ["Hospedagem + SSL", "Infraestrutura segura e estável", "Servidor dedicado com alta disponibilidade, SSL incluso, backups automáticos e monitoramento."],
  ["Suporte Técnico", "Atendimento especializado", "Suporte ágil para demandas do website, integrações e ajustes técnicos sempre que necessário."],
  ["Webdesigner", "Design e manutenção do site", "Atualizações visuais, criação de páginas e manutenção do layout para manter sua presença sempre moderna."],
  ["E-mails Corporativos", "Ilimitados com seu domínio", "Criação de contas profissionais no seu domínio para toda a equipe, com painel de gerenciamento."],
  ["Relatórios Mensais", "Transparência e resultados", "Relatórios completos com métricas de desempenho, evolução das campanhas e insights estratégicos todo mês."],
];

export function TpPacote() {
  return (
    <section className="border-t border-line bg-navy-900 py-24">
      <div className="wrap">
        <Reveal className="mb-14 max-w-[760px]">
          <span className="eyebrow">O que está incluso</span>
          <h2 className="mb-4 font-display text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Chega de contratar cinco fornecedores diferentes.
          </h2>
          <p className="text-[15.5px] text-dim">
            Agência de anúncio que não mexe no site, host que não responde, "sobrinho" que fez o e-mail...
            Aqui as seis frentes moram na mesma equipe — quando uma campanha precisa de uma página nova, ela
            fica pronta no mesmo dia, sem pingue-pongue entre fornecedores.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {pacote.map(([t, sub, d], i) => (
            <Reveal key={t} delay={i * 0.05} className="h-full">
              <article className="spot card h-full bg-navy-950/40 p-6">
                <span className="mb-3 block font-mono text-[11px] text-amber">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-[16.5px] font-extrabold tracking-tight">{t}</h3>
                <p className="mb-2 mt-0.5 text-[12.5px] font-bold uppercase tracking-[0.04em] text-amber">{sub}</p>
                <p className="text-[13.5px] text-dim">{d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ INVESTIMENTO ============ */
export function TpInvestimento() {
  return (
    <section id="investimento" className="py-24">
      <div className="wrap">
        <Reveal className="mb-12 max-w-[760px]">
          <span className="eyebrow">Investimento</span>
          <h2 className="mb-4 font-display text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Preço fixo, público e sem letra miúda.
          </h2>
          <p className="text-[15.5px] text-dim">
            Quase nenhuma agência publica preço. A gente publica — porque previsibilidade é parte do
            serviço. Uma transparência importante:{" "}
            <strong className="text-ink">o valor abaixo é o serviço completo; a verba dos anúncios você
            paga direto ao Google</strong>, na sua conta, com acesso total aos números.
          </p>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal className="h-full">
            <article className="glow-border flex h-full flex-col rounded-2xl border border-amber/60 bg-gradient-to-b from-amber/[.07] to-transparent p-7">
              <h3 className="font-display text-[20px] font-extrabold tracking-tight">Pacote All-in-One</h3>
              <div className="mb-5 mt-2 flex items-baseline gap-2">
                <span className="font-display text-[42px] font-black leading-none tracking-tight text-amber">R$ 1.250</span>
                <span className="text-[13.5px] text-dim">/mês fixo</span>
              </div>
              <ul className="flex flex-col gap-2.5">
                {[
                  <>As <strong>seis frentes</strong> do pacote: Google Ads, hospedagem + SSL, suporte, webdesigner, e-mails e relatórios</>,
                  <>Inclui a gestão de <strong>até R$ 5.000/mês investidos em Google Ads</strong> — a verba de mídia é paga por você direto ao Google, fora do pacote</>,
                  <>Investe mais de R$ 5.000/mês em anúncios? A gestão vira <strong>proposta personalizada</strong> — fale com a gente</>,
                  <>Sem fidelidade, sem taxa de setup escondida, sem percentual sobre a sua verba</>,
                ].map((it, i) => (
                  <li key={i} className="flex gap-2.5 text-[13.5px] text-dim">
                    <span className="mt-px shrink-0 font-bold text-amber">✓</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <a href={waLink(CTA_MSG)} target="_blank" rel="noopener"
                className="mt-7 rounded-[10px] bg-amber py-3 text-center font-display text-sm font-bold text-navy-950 no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(255,183,0,.3)]">
                Começar agora
              </a>
            </article>
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <article className="card flex h-full flex-col bg-navy-950/40 p-7">
              <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.1em] text-dim">Add-on opcional</p>
              <h3 className="font-display text-[20px] font-extrabold tracking-tight">YouTube Ads</h3>
              <div className="mb-5 mt-2 flex items-baseline gap-2">
                <span className="font-display text-[34px] font-black leading-none tracking-tight">+ R$ 450</span>
                <span className="text-[13.5px] text-dim">/mês</span>
              </div>
              <p className="mb-4 text-[14px] text-dim">
                Anunciar no YouTube é outra disciplina: campanhas in-stream e discovery, otimização por
                audiência e retenção — diferente de aparecer na busca. Por isso é um módulo à parte, com
                preço claro.
              </p>
              <p className="rounded-xl border border-white/[.07] bg-navy-900/60 p-4 text-[12.5px] text-dim">
                <strong className="text-ink">Escopo:</strong> gestão de mídia apenas. A produção dos vídeos
                (gravação, edição, criativos) não está inclusa — se você ainda não tem os vídeos, a gente
                orienta o caminho.
              </p>
              <p className="mt-auto pt-5 text-[12.5px] text-dim">
                Pacote + YouTube = <strong className="text-amber">R$ 1.700/mês</strong>, tudo com a mesma equipe.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ PARA QUEM É + FAQ ============ */
const faq: [string, string][] = [
  ["O que acontece se eu investir mais de R$ 5.000/mês em anúncios?", "Nada trava e nada muda de surpresa: seguimos gerenciando normalmente e conversamos sobre uma proposta ajustada ao novo volume. A régua existe porque mais verba significa mais trabalho de otimização, testes e análise — e a gente prefere te contar isso na página do que na fatura."],
  ["Os R$ 1.250 incluem a verba dos anúncios?", "Não — e isso é padrão de mercado: a verba de mídia é paga por você diretamente ao Google, na sua própria conta, com acesso total. Os R$ 1.250 cobrem o serviço completo: gestão profissional das campanhas mais site, hospedagem, e-mails, suporte e relatórios."],
  ["YouTube já vem incluso?", "O YouTube Ads é um add-on de R$ 450/mês, porque é uma disciplina de campanha diferente da busca do Google. Importante: o add-on cobre a gestão da mídia — a produção dos vídeos não está inclusa."],
  ["Tem fidelidade?", "Não. O contrato é mensal e você pode sair quando quiser. A gente prefere te segurar por resultado, não por multa."],
  ["Preciso já ter um site pronto?", "Não necessariamente. O pacote inclui webdesigner e hospedagem — se o seu site precisa de melhorias (ou de nascer), isso entra na conversa inicial e definimos juntos o ponto de partida."],
  ["Como acompanho os resultados?", "Todo mês você recebe um relatório completo, em linguagem de dono de negócio: o que foi investido, o que os anúncios trouxeram, o que vamos ajustar. E o WhatsApp da equipe fica aberto pra dúvidas no meio do caminho."],
];

export function TpQuemFaq() {
  const [open, setOpen] = useState<number | null>(0);
  const quem = [
    "Clínicas, consultórios e profissionais de saúde",
    "Escolas e cursos (do idioma à náutica)",
    "Indústria, construção e serviços B2B locais",
    "Comércio e serviços de bairro que querem ser encontrados no Google",
  ];
  return (
    <section className="border-t border-line bg-navy-900 py-24">
      <div className="wrap grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
        <Reveal>
          <span className="eyebrow">Para quem é</span>
          <h2 className="mb-6 font-display text-[clamp(22px,2.6vw,32px)] font-extrabold leading-[1.15] tracking-tight">
            Feito pra quem vive do cliente da região.
          </h2>
          <ul className="flex flex-col gap-3">
            {quem.map((q) => (
              <li key={q} className="flex gap-2.5 text-[14px] text-dim">
                <span className="mt-px shrink-0 font-bold text-amber">✓</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[13px] text-dim">
            Tem loja virtual? O tráfego pago pra e-commerce é outra conversa — com verba, metas e
            ferramentas próprias. Fale com a gente que direcionamos certo.
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
export function TpCTA() {
  return (
    <section className="border-t border-line py-20 text-center">
      <div className="wrap">
        <Reveal>
          <h2 className="mx-auto mb-4 max-w-[720px] font-display text-[clamp(24px,3vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Enquanto você lê isso, alguém procurou seu serviço no Google.{" "}
            <span className="text-amber">Quem apareceu?</span>
          </h2>
          <p className="mx-auto mb-8 max-w-[560px] text-[15.5px] text-dim">
            R$ 1.250/mês fixo, tudo incluso, sem fidelidade. Conte pra gente como é o seu negócio — a
            resposta chega no mesmo dia.
          </p>
          <a href={waLink(CTA_MSG)} target="_blank" rel="noopener" className="btn-amber inline-block">
            Falar com a Pixel no WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
