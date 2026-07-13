"use client";
import Reveal from "./Reveal";
import Counter from "./Counter";

const cards = [
  { n: 30, prefix: "até ", suffix: "%", what: "dos carrinhos abandonados recuperados", how: "Recuperação ativa por WhatsApp com o PP Whatsapp: mensagem certa, na hora certa, no canal que o brasileiro responde.", src: "recuperação ativa de carrinho · referência de mercado" },
  { n: 40, prefix: "−", suffix: "%", what: "em trocas e devoluções por tamanho errado", how: "Provador de Tamanho com silhueta corporal e recomendação automática: o cliente compra o tamanho certo na primeira vez.", src: "ferramentas de fit & size · referência de mercado" },
  { n: 7, prefix: "+", suffix: "%", what: "de conversão a cada segundo a menos no carregamento", how: "PrimePress com cache em camadas: página rápida vende mais — e o efeito se repete em cada visita, todos os dias.", src: "velocidade × conversão · referência de mercado" },
  { n: 100, prefix: "", suffix: "%", what: "das mudanças de pedido e produto auditadas", how: "Order Shield e Product Shield registram e bloqueiam o que não deveria acontecer. Fraude barrada é margem preservada.", src: "medido em produção · frota pixel commerce" },
];

export default function Numeros() {
  return (
    <section id="numeros" className="border-t border-line bg-navy-900 py-24">
      <div className="wrap">
        <Reveal className="mb-14 max-w-[680px]">
          <span className="eyebrow">O que os números dizem</span>
          <h2 className="mb-4 font-display text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Cada camada existe porque mexe num número que importa.
          </h2>
          <p className="text-[16.5px] text-dim">
            Não construímos módulo por hobby. Cada um ataca uma alavanca conhecida de conversão, retenção
            ou custo — e por ser tudo integrado, uma alavanca reforça a outra.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.what} delay={i * 0.1} className="h-full">
              <article className="card flex h-full flex-col gap-2 bg-gradient-to-b from-navy-950/60 to-navy-950/20 p-7">
                <Counter
                  to={c.n} prefix={c.prefix} suffix={c.suffix}
                  className="font-display text-[clamp(34px,3.6vw,48px)] font-black leading-none tracking-[-0.03em] text-amber"
                />
                <span className="font-display text-[15px] font-bold tracking-tight">{c.what}</span>
                <span className="text-[13px] text-dim">{c.how}</span>
                <span className="mt-auto pt-3.5 font-mono text-[10.5px] tracking-[0.06em] text-dim opacity-75">{c.src}</span>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-6 max-w-[680px] text-[12.5px] text-dim">
            Referências de mercado indicam o potencial de cada alavanca; os resultados variam conforme o
            segmento e a operação de cada loja. No diagnóstico, mostramos as projeções para o seu caso.
          </p>
        </Reveal>

        <Reveal>
          <div
            className="mt-14 grid items-center gap-9 rounded-[20px] border border-amber/45 p-10 max-md:p-7 md:grid-cols-[auto_1fr]"
            style={{ background: "radial-gradient(500px 240px at 8% 0%, rgba(255,183,0,.14), transparent 60%), rgba(255,183,0,.04)" }}
          >
            <div className="font-display text-[clamp(56px,7vw,92px)] font-black leading-[0.9] tracking-[-0.04em] text-amber">
              0%
              <small className="mt-2.5 block font-mono text-[13px] font-bold uppercase tracking-[0.1em] text-ink">
                de comissão
              </small>
            </div>
            <div>
              <h3 className="mb-2.5 font-display text-[clamp(19px,2.2vw,26px)] font-extrabold tracking-tight">
                Vendeu R$ 100 mil ou R$ 1 milhão? O plano custa o mesmo.
              </h3>
              <p className="max-w-[620px] text-[15px] text-dim">
                Os planos de site, hospedagem e suporte do Pixel Commerce têm{" "}
                <strong className="text-ink">valor fixo e nenhuma comissão sobre vendas</strong>. E cada
                plano começa com um <strong className="text-ink">servidor montado sob medida</strong>,
                dimensionado para o tamanho da sua loja: você não paga por capacidade que não usa, nem
                divide recursos com centenas de sites. Plataforma fechada cobra um pedágio sobre cada
                pedido, para sempre — quanto mais você cresce, mais paga. Aqui, o crescimento é seu.{" "}
                <strong className="text-ink">Todo o lucro da venda fica com a sua loja.</strong>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
