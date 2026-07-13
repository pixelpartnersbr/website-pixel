"use client";
import Reveal from "../Reveal";

const bullets = [
  "Especialistas em nichos específicos: e-commerce, médicos, negócios locais e serviços",
  "Parceiros certificados Meta Business e Google",
  "Tecnologia 100% própria: plataforma, plugins e infraestrutura desenvolvidos internamente",
  "Foco em resultados mensuráveis, não em métricas de vaidade",
];

export default function Sobre() {
  return (
    <section id="sobre" className="border-t border-line py-24">
      <div className="wrap grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Quem somos</span>
          <h2 className="mb-4 font-display text-[clamp(26px,3.2vw,44px)] font-extrabold leading-[1.12] tracking-tight">
            Marketing e tecnologia não deveriam morar em empresas separadas.
          </h2>
          <p className="mb-4 text-[16px] text-dim">
            A Pixel Partners nasceu da convicção de que marketing digital e desenvolvimento web precisam
            caminhar juntos — com estratégia, dados e tecnologia alinhados a um único objetivo: o
            crescimento real do seu negócio.
          </p>
          <p className="text-[16px] text-dim">
            Somos uma agência boutique: atendemos menos clientes para entregar mais resultado. Cada projeto
            recebe atenção dedicada, estratégia personalizada e relatórios transparentes — gerados pela
            nossa própria plataforma de dados.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <ul className="flex flex-col gap-4">
            {bullets.map((b) => (
              <li key={b} className="card flex items-start gap-3 bg-navy-800/15 p-5 text-[14.5px] text-dim">
                <span className="mt-px shrink-0 font-bold text-amber">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
