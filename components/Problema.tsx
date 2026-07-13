"use client";
import Reveal from "./Reveal";

const pains = [
  ["Segurança", "Plugins que viram porta de entrada", "Já encontramos plugin de terceiro com código malicioso injetando produtos no carrinho de visitantes reais. Quem não audita o próprio código, hospeda o problema sem saber."],
  ["Fraude", "Carding e pedidos-fantasma", "Bots testando cartões roubados no seu checkout, pedidos mudando de status sem autorização do gateway, estorno atrás de estorno. O Woo padrão não enxerga nada disso."],
  ["Decisão", "Relatórios que mentem para você", "O painel nativo mostra faturamento bruto e esconde frete, reembolso e cancelamento. Você acha que cresceu — o caixa mostra que não. Decisão ruim começa em número ruim."],
];

export default function Problema() {
  return (
    <section id="problema" className="border-t border-line py-24">
      <div className="wrap">
        <Reveal className="mb-14 max-w-[680px]">
          <span className="eyebrow">Ato 1 · o problema</span>
          <h2 className="mb-4 font-display text-[clamp(26px,3.2vw,44px)] font-extrabold leading-[1.12] tracking-tight">
            Toda loja WooCommerce comum é uma colcha de retalhos.
          </h2>
          <p className="text-[16.5px] text-dim">
            Trinta plugins, de trinta fornecedores diferentes, que não conversam entre si. Funciona — até o
            dia em que não funciona. E esse dia sempre chega no pior momento: na Black Friday, na campanha
            nova, no pico de vendas.
          </p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {pains.map(([tag, title, body], i) => (
            <Reveal key={tag} delay={i * 0.12}>
              <article className="card h-full bg-gradient-to-b from-navy-800/25 to-transparent p-7 transition-colors hover:border-[#FF8A8A]/40">
                <span className="mb-3.5 block font-mono text-[11px] uppercase tracking-[0.1em] text-[#FF8A8A]">{tag}</span>
                <h3 className="mb-2.5 font-display text-lg font-bold tracking-tight">{title}</h3>
                <p className="text-[14.5px] text-dim">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
