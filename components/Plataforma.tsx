"use client";
import Reveal from "./Reveal";

type Mod = { name: string; desc: string; href?: string };
type Camada = { num: string; title: string; desc: string; mods: Mod[] };

const camadas: Camada[] = [
  {
    num: "01", title: "Infraestrutura",
    desc: "Sua loja não mora em hospedagem genérica. Mora num ambiente que nós mesmos operamos.",
    mods: [
      { name: "PrimePress", desc: "Stack própria com Docker Swarm, Traefik, cache FastCGI e Redis. Performance previsível mesmo em pico de tráfego." },
      { name: "Servidor sob medida", desc: "Cada loja recebe um servidor dimensionado para o seu tamanho e o seu volume de vendas — não uma hospedagem genérica dividida com centenas de sites." },
      { name: "QueueGuard", desc: "Fila de espera virtual 100% Pixel Partners: em picos de acesso, organiza a entrada dos visitantes automaticamente — a mesma estratégia que gigantes usam em eventos como a Mega da Virada e grandes festivais.", href: "https://queueguard.app" },
      { name: "Operação assistida", desc: "Monitoramento, hardening e resposta a incidentes feitos por quem conhece a stack por dentro — não por um ticket genérico." },
    ],
  },
  {
    num: "02", title: "Segurança & antifraude",
    desc: "Defesa em produção, testada contra ataques reais — não checklist de instalação.",
    mods: [
      { name: "PP Order Shield", desc: "Bloqueia mudanças ilegítimas de status de pedido e trava o checkout após recusa do antifraude. O pedido só avança se o pagamento avançar." },
      { name: "PP Product Shield", desc: "Toda alteração de produto registrada com autoria: quem mudou, o quê e quando. Auditoria completa do catálogo." },
      { name: "Detecção de carding", desc: "Identifica padrões de teste de cartão no checkout e alerta a operação antes do prejuízo virar estorno." },
      { name: "Forense de carrinho", desc: "Ferramentas de diagnóstico que já identificaram e neutralizaram código malicioso em plugin de terceiro, em produção." },
    ],
  },
  {
    num: "03", title: "Inteligência",
    desc: "Números que batem com o caixa. É essa a diferença entre relatório e decisão.",
    mods: [
      { name: "Pixel Reports", desc: "Vendas líquidas de verdade (brutas − frete − reembolsos), LTV, recompra, vendas por região e classificação completa de canais por UTM." },
      { name: "Pixel CRM", desc: "Clientes e guests unificados numa base única, com análise RFM para saber quem compra, quem sumiu e quem vale reativar.", href: "/pixel-crm" },
      { name: "Painel de influencers", desc: "Comissões, ranking e receita por influencer calculados sobre venda líquida — sem planilha paralela, sem discussão." },
      { name: "Sessões & canais", desc: "Contador de sessões com atribuição por UTM e click-ID, para saber de onde vem a venda de verdade." },
    ],
  },
  {
    num: "04", title: "Conversão",
    desc: "Recursos de plataforma fechada, construídos sob medida para moda e varejo brasileiro.",
    mods: [
      { name: "Videocommerce", desc: "Vídeo shoppable no catálogo, na galeria e em stories — com carrinho e seletor de variação dentro do player. A peça em movimento vende o caimento que a foto não mostra.", href: "/videocommerce" },
      { name: "Provador de Tamanho", desc: "Provador virtual com silhueta corporal, tabela híbrida de medidas e motor de recomendação — inclusive para calçados. Menos troca, menos devolução.", href: "/provador" },
      { name: "Pixel Conjuntos + Shop the Look", desc: "Kits e conjuntos com montagem visual, variações sincronizadas e o look completo compre-junto na página do produto — com desconto progressivo.", href: "/shop-the-look" },
      { name: "Regras de Desconto", desc: "Motor de promoções condicionais: BOGO, tabela de volume, regras por cliente/tempo/região — e brinde automático por valor de compra.", href: "/regras-de-desconto" },
      { name: "Filtro inteligente de estoque", desc: "Navegação por atributo que respeita o estoque real de cada variação. O cliente nunca clica em algo que não existe." },
      { name: "Carrinhos personalizados", desc: "Links de carrinho pré-montado com desconto condicional — perfeito para vendas assistidas por WhatsApp." },
      { name: "Módulo Atacadista", desc: "Atacado e varejo na mesma loja: preços B2B por CNPJ aprovado, quantidade mínima, checkout próprio e estoque único — sem segundo site.", href: "/atacadista" },
      { name: "Código de Vendedor", desc: "O cliente indica no checkout quem o atendeu — sem desconto, sem cupom. Ranking por vendas líquidas e comissão fechada em minutos.", href: "/vendedor" },
    ],
  },
  {
    num: "05", title: "Relacionamento",
    desc: "O WhatsApp deixa de ser atendimento e vira canal de receita.",
    mods: [
      { name: "Canal WhatsApp", desc: "Integração oficial via Meta Cloud API e 360dialog: a voz de todos os módulos — aviso de volta ao estoque, resumo de vendas e alerta de fraude direto no seu WhatsApp." },
      { name: "Recuperação de Carrinho Abandonado", desc: "Quem desistiu recebe o link do carrinho pronto, com desconto condicional pra fechar a venda na hora — pelo canal WhatsApp da loja." },
      { name: "Campanhas segmentadas", desc: "Disparos em massa a partir do Pixel CRM, com segmentação por comportamento de compra — não por lista fria." },
      { name: "Fidelização + Cashback", desc: "Programa de pontos e cashback nativo da loja: saldo que só vale ali, prazo de expiração que cria urgência e cliente voltando sem precisar de anúncio.", href: "/comparativos/fidelizacao-vs-fidelizar-mais" },
    ],
  },
  {
    num: "06", title: "Suporte & evolução",
    desc: "Plataforma não é projeto que termina. É produto que melhora todo mês — já incluso no plano.",
    mods: [
      { name: "Suporte de quem escreveu o código", desc: "Nada de ticket genérico ou fila global: quem atende a sua loja é o mesmo time que desenvolve e opera a plataforma." },
      { name: "Evolução contínua", desc: "Novas versões dos módulos lançadas mês a mês. Cada loja da frota recebe as melhorias — sem cobrança por atualização." },
      { name: "Plano fixo, sem comissão", desc: "Site, hospedagem e suporte por valor fixo mensal. Nenhum percentual sobre suas vendas, em nenhum plano." },
      { name: "All-in-one de verdade", desc: "Um contrato, um fornecedor, uma fatura. Servidor, plugins, segurança e suporte no mesmo lugar — e conversando entre si." },
    ],
  },
];

export default function Plataforma() {
  return (
    <section id="plataforma" className="py-24">
      <div className="wrap">
        <Reveal className="mb-14 max-w-[680px]">
          <span className="eyebrow">Ato 3 · a plataforma</span>
          <h2 className="mb-4 font-display text-[clamp(26px,3.2vw,44px)] font-extrabold leading-[1.12] tracking-tight">
            Seis camadas. Um sistema operacional para o seu e-commerce.
          </h2>
          <p className="text-[16.5px] text-dim">
            A ordem importa: cada camada sustenta a de cima. Do servidor ao WhatsApp, tudo é desenvolvido
            e operado pelo mesmo time — o que muda tudo quando algo precisa de resposta rápida.
          </p>
        </Reveal>

        {camadas.map((c, ci) => (
          <Reveal key={c.num}>
            <div className={`grid gap-10 border-t border-line py-11 md:grid-cols-[280px_1fr] max-md:gap-5 ${ci === camadas.length - 1 ? "border-b" : ""}`}>
              <div>
                <span className="mb-2 block font-mono text-xs text-amber">camada {c.num}</span>
                <h3 className="mb-2.5 font-display text-[22px] font-extrabold tracking-tight">{c.title}</h3>
                <p className="text-sm text-dim">{c.desc}</p>
              </div>
              <div className="grid gap-3.5 sm:grid-cols-2">
                {c.mods.map((m) => {
                  const inner = (
                    <>
                      <strong className="mb-1 flex items-start justify-between gap-3 font-display text-[14.5px] font-bold">
                        <span className={m.href ? "transition-colors group-hover:text-amber" : ""}>{m.name}</span>
                        {m.href && (
                          <span
                            aria-hidden
                            className="shrink-0 -translate-x-1 font-bold text-amber opacity-40 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                          >
                            →
                          </span>
                        )}
                      </strong>
                      <span className="block text-[13px] text-dim">{m.desc}</span>
                      {m.href && (
                        <span className="mt-2.5 inline-block font-mono text-[10px] uppercase tracking-[0.08em] text-amber/70 transition-colors group-hover:text-amber">
                          {m.href.startsWith("/comparativos") ? "ver comparativo" : "conhecer o módulo"}
                        </span>
                      )}
                    </>
                  );
                  return m.href ? (
                    <a
                      key={m.name}
                      href={m.href}
                      {...(m.href.startsWith("http") ? { target: "_blank", rel: "noopener" } : {})}
                      className="spot group block cursor-pointer rounded-xl border border-line bg-navy-800/20 p-5 no-underline transition-all hover:-translate-y-0.5 hover:border-amber/60 hover:bg-navy-800/40 hover:shadow-[0_14px_34px_rgba(0,0,0,.35)]"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={m.name} className="spot rounded-xl border border-line bg-navy-800/20 p-5 transition-all hover:border-amber/30 hover:bg-navy-800/30">
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
