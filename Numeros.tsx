"use client";
import Reveal from "../Reveal";
import { PhoneMock, Bubble, WaIcon, ModBadge } from "./ui";
import { waLink } from "../site/config";

const CTA_MSG = "Olá! Quero saber mais sobre o WhatsApp Oficial (PP Whatsapp) para a minha loja.";

/* ============ HERO ============ */
export function WaHero() {
  return (
    <section
      className="relative overflow-hidden pb-20 pt-[150px]"
      style={{
        background:
          "radial-gradient(800px 460px at 90% 0%, rgba(37,211,102,.10), transparent 60%), radial-gradient(700px 420px at 0% 100%, rgba(5,58,102,.5), transparent 65%), #021627",
      }}
    >
      <div className="wrap grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <Reveal>
          <span className="eyebrow">Pixel Partners · WhatsApp Business Platform</span>
          <h1 className="mb-5 font-display text-[clamp(32px,4.4vw,54px)] font-extrabold leading-[1.08] tracking-[-0.025em]">
            Sua loja no WhatsApp <span className="text-wa">oficial</span> — com app próprio na Meta.
          </h1>
          <p className="mb-7 max-w-[500px] text-[17px] text-dim">
            Notificações de pedido, recuperação de carrinho e atendimento saindo do número verificado da
            sua marca. Sem risco de banimento, sem intermediário cobrando por mensagem.
          </p>
          <div className="mb-2 flex items-baseline gap-2.5">
            <span className="text-sm text-dim">a partir de</span>
            <span className="font-display text-[46px] font-black leading-none tracking-tight">R$ 199</span>
            <span className="text-[15px] text-dim">/mês · número digital incluso</span>
          </div>
          <a
            href={waLink(CTA_MSG)}
            target="_blank"
            rel="noopener"
            className="mt-4 inline-flex items-center gap-2.5 rounded-full bg-wa px-7 py-3.5 font-display text-[15px] font-bold text-navy-950 no-underline shadow-[0_8px_24px_rgba(37,211,102,.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(37,211,102,.36)]"
          >
            <WaIcon /> Quero migrar agora
          </a>
          <p className="mt-3.5 text-[13px] text-dim">
            Migração transparente: mesmo painel, mesmas automações — muda só o motor.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="flex justify-center lg:justify-end">
          <PhoneMock>
            <Bubble time="14:02">
              ✅ <strong>Pedido #4127 confirmado!</strong> Oi Maria, seu pagamento foi aprovado. Já estamos
              preparando tudo com carinho.
            </Bubble>
            <Bubble time="09:15" cta="Acompanhar entrega">
              📦 Seu pedido <strong>saiu para entrega</strong>. Rastreio: BR934210885BR
            </Bubble>
            <Bubble time="09:16" right>
              Que rápido! Obrigada 😍
            </Bubble>
            <Bubble time="18:40" cta="Finalizar com desconto">
              🛒 Maria, seu carrinho ainda está aqui — e ganhou <strong>10% OFF</strong> pra fechar hoje.
            </Bubble>
            <Bubble time="11:03" cta="Garantir o meu">
              🔔 O vestido <strong>Ipanema (M)</strong> que você queria <strong>voltou ao estoque</strong>!
            </Bubble>
          </PhoneMock>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ MOTIVOS ============ */
const motivos = [
  ["Risco zero de banimento", "Seu número deixa de estar na mira", "Conexões não-oficiais violam os termos do WhatsApp — e a Meta bane o número sem aviso, com histórico e contatos juntos. Na oficial, você opera dentro das regras, na infraestrutura da própria Meta."],
  ["Marca verificada", "Seu cliente vê a sua loja, não um número", "Mensagens saem com o nome verificado da empresa, aprovado pela Meta. Converte mais e não esbarra na desconfiança de golpe."],
  ["Recibo de entrega", "Você sabe o que chegou — e o que falhou", "Entregue, lida, falhou e por quê: cada envio registrado no painel. Notificação que some deixa de ser mistério."],
  ["Estabilidade", "Sem QR Code, sem sessão que cai", "A API oficial não tem “sessão”: é a mesma infraestrutura que atende bancos e companhias aéreas. Instalou, funcionou, esqueceu."],
  ["Escala", "Cresce junto com a loja", "O limite de envio escala automaticamente conforme volume e qualidade — de 1.000 conversas/dia até ilimitado."],
  ["Sem pedágio", "Tarifa da Meta, direto, sem markup", "O app é seu, na sua conta da Meta. Plataformas revendedoras cobram mensalidade e margem por mensagem — aqui você paga tabela e enxerga cada centavo."],
];

export function WaMotivos() {
  return (
    <section className="border-t border-line py-24">
      <div className="wrap">
        <Reveal className="mb-14 max-w-[680px]">
          <span className="eyebrow">Por que sair da integração não-oficial</span>
          <h2 className="mb-4 font-display text-[clamp(26px,3.2vw,44px)] font-extrabold leading-[1.12] tracking-tight">
            Seis motivos — e cada um vale o mês inteiro.
          </h2>
          <p className="text-[16.5px] text-dim">
            A conexão não-oficial funciona… até o dia em que não funciona mais. E esse dia costuma ser o
            mais movimentado do ano.
          </p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {motivos.map(([t, sub, d], i) => (
            <Reveal key={t} delay={i * 0.06} className="h-full">
              <article className="card h-full bg-gradient-to-b from-navy-800/25 to-transparent p-6 transition-colors hover:border-wa/40">
                <span className="mb-3 block font-mono text-[11px] text-wa">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-[17px] font-bold tracking-tight">{t}</h3>
                <p className="mb-2 mt-0.5 font-display text-[13px] font-semibold text-amber">{sub}</p>
                <p className="text-[13.5px] text-dim">{d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ TARIFAS META ============ */
const tarifas = [
  ["Aviso de pedido (utilidade)", "~R$ 0,03", "por mensagem · 1.000 avisos ≈ R$ 35/mês"],
  ["Código de login (autenticação)", "~R$ 0,03", "por mensagem · mesma faixa da utilidade"],
  ["Campanha promocional (marketing)", "~R$ 0,31", "por mensagem · feita com segmentação, não em massa"],
];

export function WaTarifas() {
  return (
    <section className="bg-navy-900 py-20">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[680px]">
          <span className="eyebrow">Tarifas por mensagem</span>
          <h2 className="font-display text-[clamp(24px,2.8vw,34px)] font-extrabold tracking-tight">
            Você paga a tabela da Meta. Só isso.
          </h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {tarifas.map(([t, p, d], i) => (
            <Reveal key={t} delay={i * 0.08} className="h-full">
              <article className="card h-full bg-navy-950/40 p-6 text-center">
                <p className="mb-1 text-[13.5px] text-dim">{t}</p>
                <p className="font-display text-[34px] font-black tracking-tight text-wa">{p}</p>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.05em] text-dim">{d}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mx-auto mt-6 max-w-[720px] text-center text-[12px] text-dim">
            Tarifas cobradas pela Meta diretamente na sua conta, em dólar, sujeitas a reajuste — valores de
            referência convertidos. Sem intermediário, sem margem escondida.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ ECOSSISTEMA ============ */
const eco = [
  ["📦", "Follow-up completo de pedidos", "Cada status do WooCommerce dispara o template certo — pagamento, envio, rastreio, entrega — com recibo no log."],
  ["🛒", "Recuperação de carrinho abandonado", "Quem desistiu recebe o link do carrinho pronto, com desconto condicional pra fechar a venda na hora."],
  ["🔔", "Aviso de volta ao estoque", "Produto esgotou? Quem quis comprar recebe o alerta na reposição. Demanda declarada, conversão altíssima."],
  ["⭐", "Painel de influencers em tempo real", "Cada influencer acompanha comissões no próprio painel e recebe no WhatsApp o aviso de cada venda pelo seu link."],
  ["📝", "Leads do site atendidos em segundos", "Quem preenche formulário recebe confirmação automática no WhatsApp — antes de esfriar ou procurar o concorrente."],
  ["💬", "Atendimento sem vácuo", "Quem responde às mensagens automáticas recebe retorno imediato, e a conversa é encaminhada pra sua equipe."],
  ["🚨", "Alerta de fraude em tempo real", "Detecção de carding na sua loja dispara aviso imediato no seu WhatsApp — proteção ativa no momento do ataque, não relatório depois do prejuízo."],
  ["📊", "Resumo de vendas no seu WhatsApp", "Fechamento diário ou semanal — vendas, pedidos, ticket médio — direto no WhatsApp do dono. A loja na palma da mão, sem abrir painel."],
  ["🔑", "Login sem senha", "Seu cliente entra na conta pelo link que chega no WhatsApp. Menos “esqueci minha senha”, menos abandono."],
];

export function WaEcossistema() {
  return (
    <section className="py-24">
      <div className="wrap">
        <Reveal className="mb-14 max-w-[720px]">
          <span className="eyebrow">Ecossistema Pixel Partners</span>
          <h2 className="mb-4 font-display text-[clamp(26px,3.2vw,44px)] font-extrabold leading-[1.12] tracking-tight">
            O WhatsApp oficial vira o motor da sua esteira de vendas.
          </h2>
          <p className="text-[16.5px] text-dim">
            Não é só aviso de pedido — é o canal com maior taxa de abertura do Brasil trabalhando em cada
            etapa da sua operação.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {eco.map(([ic, t, d], i) => (
            <Reveal key={t} delay={i * 0.05} className="h-full">
              <article className="spot card h-full bg-navy-800/15 p-5 transition-colors hover:border-wa/40">
                <span className="text-xl" aria-hidden>{ic}</span>
                <h3 className="mb-1.5 mt-2 font-display text-[15px] font-bold tracking-tight">{t}</h3>
                <p className="text-[13px] text-dim">{d}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-8 text-center">
            <a href="/whatsapp/valor" className="border-b-2 border-wa pb-0.5 font-display text-[14.5px] font-bold text-wa no-underline">
              Ver o valor de cada recurso, com os números na mesa →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ INVESTIMENTO ============ */
const baseItems = [
  <>Criação e configuração do <strong>seu app oficial na Meta</strong> (app, permissões, token permanente, webhook)</>,
  <><strong>Número digital incluso</strong> no valor</>,
  <>Criação e submissão dos seus <strong>templates</strong> junto à Meta</>,
  <><strong>Follow-up completo de pedidos</strong> por status</>,
  <><strong>Atendimento sem vácuo</strong> (auto-resposta + encaminhamento)</>,
  <>Login sem senha via WhatsApp</>,
  <>Manutenção contínua da integração</>,
];

const modulos: [string, string, string][] = [
  ["Recuperação de carrinho abandonado", "link do carrinho pronto + desconto condicional", "R$ 99/mês"],
  ["Aviso de volta ao estoque", "alerta automático na reposição do produto", "R$ 49/mês"],
  ["Painel de influencers + notificações", "portal de comissões + aviso de venda em tempo real", "R$ 149/mês"],
  ["Leads de formulário (Elementor)", "confirmação automática no WhatsApp do lead", "R$ 49/mês"],
  ["Alerta de fraude em tempo real", "detecção de carding avisando o dono no momento do ataque", "R$ 79/mês"],
  ["Resumo de vendas no WhatsApp", "fechamento diário/semanal direto pro dono da loja", "R$ 39/mês"],
  ["Integrações sob medida", "ERP, logística, fluxos específicos da sua operação", "sob consulta"],
];

export function WaInvestimento() {
  return (
    <section id="investimento" className="border-t border-line bg-navy-900 py-24">
      <div className="wrap">
        <Reveal className="mb-14 max-w-[680px]">
          <span className="eyebrow">Investimento</span>
          <h2 className="mb-4 font-display text-[clamp(26px,3.2vw,44px)] font-extrabold leading-[1.12] tracking-tight">
            Comece pelo essencial, ative módulos conforme o retorno aparece.
          </h2>
          <p className="text-[16.5px] text-dim">
            O plano base cobre toda a fundação oficial. Cada módulo é ligado quando fizer sentido pra sua
            operação — sem pacote inchado.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal className="h-full">
            <article className="flex h-full flex-col rounded-2xl border border-wa bg-gradient-to-b from-wa/[.07] to-transparent p-7">
              <h3 className="font-display text-[20px] font-extrabold tracking-tight">Plano base</h3>
              <div className="mb-5 mt-2 flex items-baseline gap-2">
                <span className="text-[13px] text-dim">a partir de</span>
                <span className="font-display text-[42px] font-black leading-none tracking-tight text-wa">R$ 199</span>
                <span className="text-[13.5px] text-dim">/mês por loja</span>
              </div>
              <ul className="flex flex-col gap-2.5">
                {baseItems.map((it, i) => (
                  <li key={i} className="flex gap-2.5 text-[13.5px] text-dim">
                    <span className="mt-px shrink-0 font-bold text-wa">✓</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
              <a
                href={waLink(CTA_MSG)}
                target="_blank"
                rel="noopener"
                className="mt-7 rounded-[10px] bg-wa py-3 text-center font-display text-sm font-bold text-navy-950 no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(37,211,102,.3)]"
              >
                Começar com o plano base
              </a>
            </article>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <article className="card flex h-full flex-col bg-navy-950/40 p-7">
              <h3 className="mb-1 font-display text-[20px] font-extrabold tracking-tight">Módulos adicionais</h3>
              <p className="mb-5 text-[13px] text-dim">Mensais, por loja. Ative e desative conforme a estratégia.</p>
              <ul className="flex flex-col divide-y divide-white/[.07]">
                {modulos.map(([t, d, p]) => (
                  <li key={t} className="flex items-center justify-between gap-4 py-3">
                    <div>
                      <p className="font-display text-[14px] font-bold tracking-tight">{t}</p>
                      <p className="text-[12px] text-dim">{d}</p>
                    </div>
                    <span className="shrink-0 font-display text-[14.5px] font-extrabold text-amber">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-amber/40 bg-amber/[.06] p-4">
                <div>
                  <p className="font-display text-[14.5px] font-bold">Ecossistema completo</p>
                  <p className="text-[12px] text-dim">base + todos os módulos acima</p>
                </div>
                <p className="font-display text-[18px] font-black">
                  <s className="mr-2 text-[13px] font-semibold text-dim">R$ 663/mês</s>
                  <span className="text-amber">R$ 549/mês</span>
                </p>
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal>
          <div className="mx-auto mt-12 max-w-[760px] text-center">
            <h3 className="mb-3 font-display text-[clamp(20px,2.4vw,28px)] font-extrabold tracking-tight">
              A conta que importa
            </h3>
            <p className="mb-7 text-[15.5px] text-dim">
              A partir de R$ 199/mês + centavos por mensagem —{" "}
              <strong className="text-ink">menos do que custa um único dia com o WhatsApp da loja fora do ar.</strong>
            </p>
            <a
              href={waLink(CTA_MSG)}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2.5 rounded-full bg-wa px-8 py-4 font-display text-[15.5px] font-bold text-navy-950 no-underline shadow-[0_8px_24px_rgba(37,211,102,.28)] transition-all hover:-translate-y-0.5"
            >
              <WaIcon /> Falar com a Pixel Partners
            </a>
            <p className="mx-auto mt-7 max-w-[720px] text-[11.5px] leading-relaxed text-dim">
              Valores “a partir de”, por loja, sem fidelidade obrigatória. Tarifas por mensagem são cobradas
              pela Meta diretamente na conta do cliente, em dólar, e podem ser reajustadas; os valores
              exibidos são referências convertidas. Funcionalidades e integrações adicionais são orçadas
              conforme a operação. Proposta sujeita a análise técnica do ambiente (WooCommerce + WordPress).
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
