"use client";
import Reveal from "./Reveal";
import Counter from "./Counter";

export default function Prova() {
  return (
    <section id="prova" className="py-24">
      <div className="wrap">
        <Reveal className="mb-14 max-w-[680px]">
          <span className="eyebrow">Em produção, não em slide</span>
          <h2 className="font-display text-[clamp(26px,3.2vw,44px)] font-extrabold leading-[1.12] tracking-tight">
            Isso já roda hoje, em lojas de verdade.
          </h2>
        </Reveal>
        <div className="mb-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {[
            [<Counter key="a" to={20} prefix="+" />, "módulos proprietários desenvolvidos e mantidos pela Pixel"],
            [<Counter key="b" to={75} prefix="~" suffix=" mil" />, "pedidos numa única loja operando na stack"],
            [<Counter key="c" to={6} />, "camadas integradas, do servidor ao WhatsApp"],
            [<Counter key="d" to={1} />, "contrato all-in-one — infra, código, segurança e suporte"],
          ].map(([n, l], i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="card bg-gradient-to-b from-navy-800/25 to-transparent p-7">
                <span className="block font-display text-[clamp(28px,3vw,40px)] font-black tracking-tight text-amber">{n}</span>
                <span className="mt-1.5 block text-[13px] text-dim">{l}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="grid items-start gap-5 rounded-2xl border border-amber/35 bg-amber/5 p-8 sm:grid-cols-[auto_1fr]">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber text-xl">🛡️</div>
            <div>
              <h3 className="mb-2 font-display text-lg font-bold tracking-tight">
                História real: o plugin que sabotava carrinhos
              </h3>
              <p className="text-[14.5px] text-dim">
                Um plugin de terceiro, presente em milhares de lojas Brasil afora, foi comprometido e passou
                a adicionar produtos aleatórios ao carrinho de visitantes. Nas lojas da nossa frota, o
                comportamento foi detectado, isolado com ferramentas forenses próprias e neutralizado — e a
                frota inteira recebeu blindagem preventiva. É esse o tipo de resposta que só existe quando o
                fornecedor da tecnologia é também quem opera a loja.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
