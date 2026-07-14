"use client";
import Reveal from "./Reveal";
import { waLink } from "./site/config";

const CTA_MSG = "Olá! Quero vender atacado e varejo na mesma loja com o Módulo Atacadista.";

/* ============ MOCK: mesmo produto, dois perfis ============ */
function DualPriceMock() {
  return (
    <div className="w-full max-w-[440px] rounded-2xl border border-white/10 bg-[#081826] p-4 shadow-[0_30px_60px_rgba(0,0,0,.45)]">
      <p className="mb-3 text-center font-mono text-[9px] uppercase tracking-[0.1em] text-dim">
        o mesmo produto · a mesma loja · dois perfis
      </p>
      <div className="grid grid-cols-2 gap-3">
        {/* visitante */}
        <div className="rounded-xl border border-white/10 bg-navy-950/50 p-3.5">
          <p className="mb-2 font-mono text-[8.5px] uppercase tracking-[0.08em] text-dim">visitante · varejo</p>
          <div className="mb-2 grid h-20 place-items-center rounded-lg bg-navy-800/40 text-2xl" aria-hidden>👗</div>
          <p className="text-[11px] text-dim">Vestido Amara</p>
          <p className="font-display text-[19px] font-black tracking-tight">R$ 289</p>
          <p className="mt-1 text-[9.5px] text-dim">qualquer quantidade</p>
        </div>
        {/* atacadista */}
        <div className="rounded-xl border border-amber/50 bg-amber/[.06] p-3.5">
          <p className="mb-2 flex items-center justify-between font-mono text-[8.5px] uppercase tracking-[0.08em] text-amber">
            <span>atacadista</span>
            <span className="rounded-full bg-amber px-1.5 py-px text-[7.5px] font-bold text-navy-950">CNPJ ✓</span>
          </p>
          <div className="mb-2 grid h-20 place-items-center rounded-lg bg-navy-800/40 text-2xl" aria-hidden>👗</div>
          <p className="text-[11px] text-dim">Vestido Amara</p>
          <p className="font-display text-[19px] font-black tracking-tight text-amber">
            <span className="mr-1.5 text-[12px] font-semibold text-dim line-through">R$ 289</span>R$ 189
          </p>
          <p className="mt-1 text-[9.5px] text-dim">mínimo 6 unidades · PIX/boleto</p>
        </div>
      </div>
      <p className="mt-3 text-center font-mono text-[8.5px] uppercase tracking-[0.08em] text-dim">
        preço calculado em tempo real · cache por perfil · sem vazamento
      </p>
    </div>
  );
}

/* ============ HERO ============ */
export function AtHero() {
  return (
    <section
      className="relative overflow-hidden pb-20 pt-[150px]"
      style={{
        background:
          "radial-gradient(800px 460px at 88% 10%, rgba(255,183,0,.1), transparent 60%), radial-gradient(700px 420px at 0% 100%, rgba(5,58,102,.5), transparent 65%), #021627",
      }}
    >
      <div className="beam" aria-hidden />
      <div className="wrap relative grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <Reveal>
          <span className="eyebrow">Pixel Commerce · Módulo Atacadista</span>
          <h1 className="mb-5 font-display text-[clamp(30px,4.2vw,54px)] font-extrabold leading-[1.08] tracking-[-0.025em]">
            Atacado e varejo na mesma loja.<br />
            <span className="text-amber">Uma infraestrutura, uma verdade.</span>
          </h1>
          <p className="mb-7 max-w-[560px] text-[16.5px] text-dim">
            Preços especiais, quantidades mínimas e regras próprias que se sobrepõem automaticamente quando
            um atacadista aprovado faz login — e desaparecem para o visitante comum. Sem segundo site, sem
            dois bancos, sem estoques que nunca batem.
          </p>
          <div className="mb-2 flex items-baseline gap-2.5">
            <span className="font-display text-[44px] font-black leading-none tracking-tight">R$ 549</span>
            <span className="text-[15px] text-dim">/mês por loja · ou incluso no plano Scale</span>
          </div>
          <a href={waLink(CTA_MSG)} target="_blank" rel="noopener" className="btn-amber mt-4 inline-block">
            Quero abrir meu canal B2B
          </a>
          <p className="mt-3.5 text-[13px] text-dim">Nativo WooCommerce · CNPJ validado · sem fidelidade</p>
        </Reveal>
        <Reveal delay={0.15} className="flex justify-center lg:justify-end">
          <DualPriceMock />
        </Reveal>
      </div>
    </section>
  );
}

/* ============ O PROBLEMA ============ */
const dores: [string, string][] = [
  ["Dois de tudo", "Dois containers, dois bancos, dois certificados, dois backups — e dois lugares pra atualizar cada plugin e aplicar cada correção de segurança."],
  ["Estoque fragmentado", "O mesmo produto vive em dois bancos: ou você duplica o estoque (e vende o que não tem), ou depende de uma sincronização frágil no meio do caminho."],
  ["Análise que dá trabalho", "Faturamento, ticket e clientes partidos em dois painéis. Consolidar varejo + atacado vira planilha manual toda semana."],
  ["Cliente dividido em dois", "Quem compra no varejo e no atacado vira duas pessoas diferentes. Histórico, recorrência e segmentação nascem quebrados."],
];

export function AtProblema() {
  return (
    <section className="border-t border-line bg-navy-900 py-24">
      <div className="wrap">
        <Reveal className="mb-4 max-w-[760px]">
          <span className="eyebrow">O problema que ele resolve</span>
          <h2 className="mb-4 font-display text-[clamp(24px,3vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            A saída comum é um segundo site. Parece organizado — mas cobra caro.
          </h2>
          <p className="mb-10 text-[15.5px] text-dim">
            O <code className="rounded bg-navy-950/60 px-1.5 py-0.5 font-mono text-[13px] text-amber">atacado.sualoja.com.br</code>{" "}
            te dá separação de preço e catálogo em troca de manter duas operações inteiras. O Módulo Atacadista
            colapsa isso numa loja só: o que o segundo site dava "de graça" vira camada de software sobre a
            mesma base.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {dores.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.06} className="h-full">
              <article className="spot card h-full bg-navy-950/40 p-6">
                <span className="mb-3 block font-mono text-[11px] text-[#FF8A8A]">×</span>
                <h3 className="mb-2 font-display text-[16px] font-bold tracking-tight">{t}</h3>
                <p className="text-[13.5px] text-dim">{d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ COMO FUNCIONA ============ */
export function AtComoFunciona() {
  const passos: [string, string, string][] = [
    ["01", "O atacadista se cadastra na própria loja", "Formulário com CNPJ validado de verdade (dígito verificador), razão social e inscrição estadual. Enquanto aguarda aprovação, continua comprando no varejo — nada trava, nenhuma venda se perde."],
    ["02", "Você aprova em um clique", "Manual na lista de usuários, ou automático pra quem você já validou fora do site. Notificação por e-mail em cada etapa — e por WhatsApp, com o canal da plataforma."],
    ["03", "O login vira a chave", "A camada de atacado se aplica inteira: preços especiais, mínimos, formas de pagamento próprias. Invisível pro resto do público — o preço nunca é gravado no produto, é calculado em tempo real conforme quem está logado."],
  ];
  return (
    <section className="py-24">
      <div className="wrap">
        <Reveal className="mb-14 max-w-[720px]">
          <span className="eyebrow">Como funciona</span>
          <h2 className="font-display text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Do cadastro ao preço certo, sem intervenção.
          </h2>
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-3">
          {passos.map(([n, t, d], i) => (
            <Reveal key={n} delay={i * 0.08} className="h-full">
              <article className="spot card h-full bg-navy-800/15 p-7">
                <span className="mb-4 block font-display text-[30px] font-black text-amber/40">{n}</span>
                <h3 className="mb-2.5 font-display text-[17px] font-extrabold tracking-tight">{t}</h3>
                <p className="text-[14px] text-dim">{d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ FUNCIONALIDADES ============ */
const funcs: [string, string, string[]][] = [
  ["Cadastro e aprovação", "O funil B2B dentro da loja", [
    "CNPJ com dígito verificador, razão social e inscrição estadual",
    "Aprovação manual em um clique ou automática",
    "Painel com filtro por status e CNPJ à vista",
    "Notificação por e-mail e WhatsApp em cada etapa",
  ]],
  ["Preços de atacado", "Hierarquia clara, nunca desconto empilhado", [
    "Preço especial por produto e por variação (P, M, G distintos)",
    "Desconto global percentual como fallback do catálogo",
    "'De/por' automático: varejo riscado, atacado em destaque",
    "Hierarquia previsível — nunca dois descontos por engano",
  ]],
  ["Regras de compra", "A regra vive no código, não no treinamento", [
    "Quantidade mínima por produto",
    "Valor mínimo de pedido pro atacado fechar",
    "Validação no carrinho e no checkout",
  ]],
  ["Checkout e catálogo", "Pagamento por perfil, preço invisível", [
    "Formas de pagamento por perfil: só PIX e boleto pro atacado, sem parcelamento corroendo margem",
    "Textos de aviso totalmente editáveis, em português",
    "Preços de atacado ocultos pra quem não está logado — diferente do subdomínio público que qualquer um acha no Google",
  ]],
];

export function AtFuncionalidades() {
  return (
    <section className="border-t border-line bg-navy-900 py-24">
      <div className="wrap">
        <Reveal className="mb-14 max-w-[720px]">
          <span className="eyebrow">Funcionalidades</span>
          <h2 className="font-display text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Tudo que o segundo site fazia — sem o segundo site.
          </h2>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {funcs.map(([t, sub, items], i) => (
            <Reveal key={t} delay={i * 0.06} className="h-full">
              <article className="spot card h-full bg-navy-950/40 p-7">
                <h3 className="font-display text-[17px] font-extrabold tracking-tight">{t}</h3>
                <p className="mb-4 mt-0.5 text-[13px] text-amber">{sub}</p>
                <ul className="flex flex-col gap-2.5">
                  {items.map((it) => (
                    <li key={it} className="flex gap-2.5 text-[13.5px] text-dim">
                      <span className="mt-px shrink-0 font-bold text-amber">✓</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ DIFERENCIAL TÉCNICO: CACHE ============ */
export function AtCache() {
  return (
    <section className="py-20">
      <div className="wrap grid items-center gap-10 lg:grid-cols-[1fr_.9fr]">
        <Reveal>
          <span className="eyebrow">O detalhe que separa plugin sério de gambiarra</span>
          <h2 className="mb-4 font-display text-[clamp(23px,2.8vw,36px)] font-extrabold leading-[1.15] tracking-tight">
            Preço em tempo real, <span className="text-amber">à prova de cache.</span>
          </h2>
          <div className="flex flex-col gap-4 text-[15px] text-dim">
            <p>
              É exatamente aqui que os plugins genéricos escorregam: o WooCommerce guarda o intervalo de
              preços das variações em cache, e sem o devido cuidado um atacadista logado{" "}
              <strong className="text-ink">"envenena" esse cache</strong> — e o varejo inteiro passa a ver
              preço de atacado.
            </p>
            <p>
              O Módulo Atacadista trata isso na raiz: <strong className="text-ink">cada perfil tem o seu próprio
              cache</strong>, sem vazamento em nenhuma direção. Nenhuma página cacheada entrega preço pro
              público errado — nem com FastCGI, nem com a PrimePress acelerando tudo por cima.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="spot card bg-navy-950/40 p-6">
            <p className="mb-3 font-display text-[15px] font-bold">Regra em código, não em processo</p>
            <p className="text-[14px] text-dim">
              Mínimos, formas de pagamento e transições são impostos pelo sistema — não dependem de a
              equipe lembrar de conferir. E é feito pro Brasil de verdade: CNPJ validado, PIX e boleto como
              cidadãos de primeira classe, compatível com o Brazilian Market on WooCommerce que a sua loja
              provavelmente já usa.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ CONVERSÃO ============ */
const caminhos: [string, string][] = [
  ["Captura o atacadista onde ele já está", "Hoje ele precisa descobrir que existe um segundo site, achar o endereço, criar outra conta — cada etapa perde gente. Com o cadastro dentro da loja principal, ele vira atacadista sem sair do lugar."],
  ["Compra imediata durante a análise", "O cadastro pendente segue comprando no varejo: você não perde a venda enquanto avalia o CNPJ. O modelo de dois sites costuma travar tudo até a liberação."],
  ["Ticket maior por estrutura", "Mínimos de quantidade e de valor empurram o pedido de atacado pra cima por design — não por esforço da equipe comercial."],
  ["Recompra previsível", "Cliente unificado = histórico completo de cada atacadista visível. Recompra ativa e reativação por WhatsApp no momento certo do ciclo dele."],
];

export function AtConversao() {
  return (
    <section className="border-t border-line bg-navy-900 py-24">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[760px]">
          <span className="eyebrow">Potencial de conversão</span>
          <h2 className="mb-4 font-display text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.12] tracking-tight">
            Não é promessa — é atrito removido.
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {caminhos.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.06} className="h-full">
              <article className="spot card h-full bg-navy-950/40 p-6">
                <span className="mb-3 block font-mono text-[11px] text-amber">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mb-2 font-display text-[15.5px] font-bold tracking-tight">{t}</h3>
                <p className="text-[13px] text-dim">{d}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-6 max-w-[820px] text-[12px] text-dim">
            As estimativas de ganho variam muito por segmento e por ticket. Recomendamos medir o antes e o
            depois com o <strong className="text-ink">Pixel Reports</strong> — que já separa faturamento de
            varejo e de atacado nativamente — em vez de trabalhar com número de folheto.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ COMPARATIVO DE CUSTO ============ */
const custoRows: [string, string, string][] = [
  ["Containers / instâncias", "2", "1"],
  ["Bancos de dados", "2", "1"],
  ["Certificados SSL", "2", "1"],
  ["Rotinas de backup", "2", "1"],
  ["Atualização de plugins e temas", "em dobro, em dois lugares", "uma vez"],
  ["Correções de segurança", "duas superfícies de ataque", "uma"],
  ["Sincronização de estoque", "necessária (e frágil)", "não existe — estoque único"],
  ["Consolidação de relatórios", "manual, recorrente", "nativa"],
  ["Deploys e homologação", "duplicados", "únicos"],
];

export function AtCusto() {
  return (
    <section id="comparativo" className="py-24">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[760px]">
          <span className="eyebrow">Comparativo de custo</span>
          <h2 className="mb-4 font-display text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.12] tracking-tight">
            O corte não está no preço do plugin — está no que você deixa de manter.
          </h2>
          <p className="text-[15.5px] text-dim">
            A tabela é ilustrativa (os valores dependem do plano de infra e do volume de cada operação),
            mas o padrão se mantém em qualquer cenário:
          </p>
        </Reveal>
        <Reveal>
          <div className="overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line bg-navy-950/60">
                  <th className="p-4 font-mono text-[11px] font-medium uppercase tracking-[0.1em] text-dim">Item</th>
                  <th className="w-[240px] p-4 text-center font-display text-[14px] font-extrabold">Dois sites (varejo + atacado)</th>
                  <th className="w-[240px] p-4 text-center font-display text-[14px] font-extrabold text-amber">Um site + Módulo Atacadista</th>
                </tr>
              </thead>
              <tbody>
                {custoRows.map(([r, a, b], i) => (
                  <tr key={r} className={`border-b border-white/[.05] ${i % 2 ? "bg-navy-950/25" : ""}`}>
                    <td className="p-4 text-[13.5px] text-dim">{r}</td>
                    <td className="p-4 text-center text-[13px] text-dim">{a}</td>
                    <td className="bg-amber/[.04] p-4 text-center text-[13px] font-semibold text-ink">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 max-w-[820px] text-[13px] text-dim">
            O que era despesa recorrente de manter dois ambientes vira uma linha só. E o custo escondido —
            o tempo da equipe reconciliando estoque e relatório toda semana —{" "}
            <strong className="text-ink">simplesmente deixa de existir</strong>. Se você já roda atacado em
            site separado, montamos a estimativa fechada a partir da sua infra atual.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ ECOSSISTEMA ============ */
const eco: [string, string][] = [
  ["Pixel Reports", "Faturamento, ticket médio e canal separados entre varejo e atacado, lado a lado — sem planilha."],
  ["Pixel CRM", "O atacadista entra como perfil próprio e sai da segmentação de varejo: o ticket alto dele não distorce a análise de recompra dos consumidores finais."],
  ["Canal WhatsApp", "Aviso de novo cadastro pro gestor e boas-vindas ao atacadista aprovado — pelo mesmo canal que já dispara as notificações da loja."],
  ["Stock Guard", "Com estoque único, varejo e atacado disputam as mesmas peças de forma segura em lançamentos — sem venda a mais."],
];

export function AtEcossistema() {
  return (
    <section className="border-t border-line bg-navy-900 py-20">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[720px]">
          <span className="eyebrow">Parte do ecossistema</span>
          <h2 className="mb-3 font-display text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.12] tracking-tight">
            Cada pedido de atacado nasce marcado na origem.
          </h2>
          <p className="text-[15px] text-dim">
            E isso destrava o resto da plataforma sem trabalho manual. Funciona sozinho — mas rende muito
            mais acompanhado.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {eco.map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.06} className="h-full">
              <article className="spot card h-full bg-navy-950/40 p-6">
                <h3 className="mb-2 font-display text-[15.5px] font-bold tracking-tight text-amber">{t}</h3>
                <p className="text-[13px] text-dim">{d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ CTA ============ */
export function AtCTA() {
  return (
    <section className="border-t border-line py-20 text-center">
      <div className="wrap">
        <Reveal>
          <h2 className="mx-auto mb-4 max-w-[720px] font-display text-[clamp(24px,3vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Já roda atacado num site à parte? <span className="text-amber">Vira mapa de migração.</span>
          </h2>
          <p className="mx-auto mb-8 max-w-[560px] text-[15.5px] text-dim">
            A gente olha o que está configurado de diferente lá — frete, pagamento, mínimos, catálogo — e
            isso vira o plano pra uma loja só. R$ 549/mês, incluso no Scale, sem fidelidade.
          </p>
          <a href={waLink(CTA_MSG)} target="_blank" rel="noopener" className="btn-amber inline-block">
            Quero abrir meu canal B2B
          </a>
        </Reveal>
      </div>
    </section>
  );
}
