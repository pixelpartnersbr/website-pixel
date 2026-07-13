"use client";
import Reveal from "../Reveal";

const items = [
  ["Especialização por nicho", "Não somos generalistas. Cada segmento tem estratégias específicas, linguagem própria e métricas relevantes."],
  ["Tecnologia própria", "Plataforma, plugins e infraestrutura desenvolvidos internamente — mais de 20 módulos proprietários rodando em produção."],
  ["Transparência total", "Relatórios detalhados via Pixel Reports, acesso ao dashboard em tempo real e reuniões periódicas de alinhamento."],
  ["Foco em ROI", "Cada decisão é orientada por dados de venda líquida — não por métricas de vaidade. Otimizamos para o que chega no caixa."],
  ["Equipe dedicada", "Atendemos menos clientes para entregar mais qualidade. Você fala com quem faz, não com um gerente de conta."],
  ["Certificações oficiais", "Parceiros certificados Meta Business e Google, com acesso a ferramentas e suporte exclusivos das plataformas."],
];

export default function Diferenciais() {
  return (
    <section className="py-24">
      <div className="wrap">
        <Reveal className="mb-14 max-w-[680px]">
          <span className="eyebrow">Por que a Pixel Partners</span>
          <h2 className="mb-4 font-display text-[clamp(26px,3.2vw,44px)] font-extrabold leading-[1.12] tracking-tight">
            Nossos diferenciais
          </h2>
          <p className="text-[16.5px] text-dim">
            O que nos diferencia não é apenas o que fazemos, mas como fazemos — com método, dados e
            comprometimento.
          </p>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.06} className="h-full">
              <article className="spot card h-full bg-gradient-to-b from-navy-800/25 to-transparent p-6 transition-colors hover:border-amber/40">
                <span className="mb-3 block font-mono text-[11px] text-amber">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mb-2 font-display text-[16.5px] font-bold tracking-tight">{t}</h3>
                <p className="text-[13.5px] text-dim">{d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
