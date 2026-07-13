"use client";
import Reveal from "../Reveal";

const layers = ["Infraestrutura", "Segurança", "Inteligência", "Conversão", "Relacionamento", "Suporte"];

export default function PlataformaTeaser() {
  return (
    <section className="bg-amber py-24 text-navy-950">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <Reveal>
          <span className="eyebrow !text-navy-950 before:!bg-navy-950">Nossa plataforma</span>
          <h2 className="mb-4 font-display text-[clamp(28px,3.6vw,46px)] font-black leading-[1.08] tracking-[-0.025em]">
            Pixel Commerce: o WooCommerce como ele deveria ser.
          </h2>
          <p className="mb-7 max-w-[560px] text-[16.5px] font-medium text-navy-900">
            Construímos nossa própria camada de segurança, inteligência e automação em cima do núcleo
            open-source mais usado do mundo. Seis camadas integradas, preço fixo, 0% de comissão sobre
            vendas — e sua loja continua sendo sua.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a href="/plataforma" className="btn bg-navy-950 text-ink hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(2,22,39,.4)]">
              Conhecer a plataforma
            </a>
            <a href="/planos" className="btn border border-navy-950/30 text-navy-950 hover:bg-navy-950/5">
              Ver planos e preços
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="flex flex-col gap-2">
            {layers.map((l, i) => (
              <div
                key={l}
                className="flex items-center justify-between rounded-xl border border-navy-950/15 bg-navy-950/[.06] px-5 py-3.5 font-display text-[14.5px] font-bold"
                style={{ marginLeft: `${i * 14}px` }}
              >
                {l}
                <span className="font-mono text-[11px] font-normal opacity-60">0{i + 1}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
