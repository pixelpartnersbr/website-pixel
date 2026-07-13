"use client";
import Reveal from "./Reveal";

const rows: [string, [boolean, string], [boolean, string], string][] = [
  ["Código dos recursos", [false, "30+ fornecedores diferentes"], [true, "Um fornecedor, caixa-preta"], "Um fornecedor, código auditável"],
  ["Sua loja é sua?", [true, "Sim, mas por sua conta e risco"], [false, "Não — dados e loja presos à plataforma"], "Sim — núcleo open-source, sem lock-in"],
  ["Antifraude no pedido", [false, "Depende de plugin de terceiro"], [true, "Genérico, igual para todos"], "Order Shield, ajustado ao seu gateway"],
  ["Relatório de venda líquida", [false, "Mostra bruto, esconde o resto"], [true, "Parcial, taxas extras à parte"], "Líquido real: bruto − frete − reembolso"],
  ["Comissão sobre vendas", [false, "Depende: apps e gateways cobram à parte"], [false, "Percentual sobre cada pedido, para sempre"], "0% — plano fixo de site, hospedagem e suporte"],
  ["Custo de crescer", [false, "Cada recurso, uma licença nova"], [false, "Taxa sobre cada venda, para sempre"], "Plataforma evolui junto, sem taxa por venda"],
  ["Quem responde quando quebra", [false, "Ninguém — cada plugin culpa o outro"], [true, "Suporte por ticket, fila global"], "O time que escreveu o código"],
];

function Mark({ ok }: { ok: boolean }) {
  return <span className={`mr-1.5 font-bold ${ok ? "text-amber" : "text-[#FF8A8A]"}`}>{ok ? "✓" : "✕"}</span>;
}

export default function Comparativo() {
  return (
    <section id="comparativo" className="bg-navy-900 py-24">
      <div className="wrap">
        <Reveal className="mb-14 max-w-[680px]">
          <span className="eyebrow">Onde o Pixel Commerce se encaixa</span>
          <h2 className="font-display text-[clamp(26px,3.2vw,44px)] font-extrabold leading-[1.12] tracking-tight">
            Mais robusto que o Woo puro. Mais livre que plataforma fechada.
          </h2>
        </Reveal>
        <Reveal>
          <div className="card overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border-b border-line bg-navy-950/50 p-4 text-left font-display text-[13.5px] font-bold" />
                  <th className="border-b border-line bg-navy-950/50 p-4 text-left font-display text-[13.5px] font-bold">WooCommerce &ldquo;de prateleira&rdquo;</th>
                  <th className="border-b border-line bg-navy-950/50 p-4 text-left font-display text-[13.5px] font-bold">Plataforma fechada (SaaS)</th>
                  <th className="border-b border-line bg-amber p-4 text-left font-display text-[13.5px] font-bold text-navy-950">Pixel Commerce</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([label, woo, saas, px], i) => (
                  <tr key={label}>
                    <th className={`p-4 text-left font-body font-semibold text-ink ${i < rows.length - 1 ? "border-b border-line" : ""}`}>{label}</th>
                    <td className={`p-4 text-dim ${i < rows.length - 1 ? "border-b border-line" : ""}`}><Mark ok={woo[0]} />{woo[1]}</td>
                    <td className={`p-4 text-dim ${i < rows.length - 1 ? "border-b border-line" : ""}`}><Mark ok={saas[0]} />{saas[1]}</td>
                    <td className={`bg-amber/[.07] p-4 font-medium text-ink ${i < rows.length - 1 ? "border-b border-line" : ""}`}><Mark ok />{px}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
