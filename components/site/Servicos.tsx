"use client";
import Reveal from "../Reveal";

type Servico = {
  name: string; desc: string; tags: string[];
  featured?: boolean; warn?: string; href?: string; cta?: string;
};

const servicos: Servico[] = [
  {
    name: "Desenvolvimento Web & Pixel Commerce", featured: true,
    desc: "Lojas WooCommerce na nossa plataforma proprietária: servidor sob medida, segurança antifraude, analytics de verdade e módulos exclusivos de conversão.",
    tags: ["Lojas Virtuais", "Institucionais", "Landing Pages", "Marketplaces"],
    href: "/plataforma", cta: "Conhecer a plataforma",
  },
  {
    name: "Tráfego Pago",
    desc: "Campanhas de alta performance no Google Ads e Meta Ads, com gestão especializada por segmento de negócio e otimização sobre venda líquida.",
    tags: ["E-commerce", "Negócios Locais", "Médicos", "Serviços"],
    href: "/trafego-pago", cta: "Pacote para negócios locais",
  },
  {
    name: "Desenvolvimento de Apps",
    desc: "Aplicativos Android e iOS sob medida, do conceito à publicação nas lojas — integrados ao seu e-commerce, CRM e operação.",
    tags: ["Android", "iOS", "Publicação nas Lojas", "Integração com E-commerce"],
  },
  {
    name: "Redes Sociais",
    desc: "Gestão de redes sociais com foco em negócios locais e profissionais da saúde. Conteúdo estratégico que gera autoridade e relacionamento.",
    tags: ["Negócios Locais", "Médicos"],
    warn: "Não atendemos: moda / e-commerce",
    href: "/redes-sociais", cta: "Planos e valores",
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="bg-navy-900 py-24">
      <div className="wrap">
        <Reveal className="mb-14 max-w-[680px]">
          <span className="eyebrow">O que fazemos</span>
          <h2 className="mb-4 font-display text-[clamp(26px,3.2vw,44px)] font-extrabold leading-[1.12] tracking-tight">
            Nossos serviços
          </h2>
          <p className="text-[16.5px] text-dim">
            Soluções integradas de tecnologia e marketing digital para empresas que buscam crescimento
            consistente — e mensurável.
          </p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {servicos.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08} className={`h-full ${s.featured ? "md:col-span-2 xl:col-span-1" : ""}`}>
              <article
                className={`flex h-full flex-col rounded-2xl border p-7 transition-colors ${
                  s.featured
                    ? "glow-border border-amber/60 bg-gradient-to-b from-amber/[.08] to-transparent"
                    : "spot border-line bg-navy-950/40 hover:border-amber/40"
                }`}
              >
                {s.featured && (
                  <span className="mb-3 w-fit rounded-full bg-amber px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-navy-950">
                    tecnologia própria
                  </span>
                )}
                <h3 className="mb-2.5 font-display text-[19px] font-bold tracking-tight">{s.name}</h3>
                <p className="mb-5 text-[14px] text-dim">{s.desc}</p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-full border border-line px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.05em] text-dim">
                      {t}
                    </span>
                  ))}
                </div>
                {s.warn && (
                  <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.05em] text-[#FF8A8A]">⚠ {s.warn}</p>
                )}
                <a
                  href={s.href ?? "/#contato"}
                  className={`mt-auto w-fit font-display text-[13.5px] font-bold ${
                    s.featured ? "border-b-2 border-amber text-amber" : "border-b border-line text-dim hover:border-amber/60 hover:text-ink"
                  } pb-0.5 no-underline transition-colors`}
                >
                  {s.cta ?? "Saber mais →"}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
