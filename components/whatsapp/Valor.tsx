"use client";
import { useState } from "react";
import Reveal from "../Reveal";
import { Bubble, ModBadge, WaIcon } from "./ui";
import { waLink } from "../site/config";

const CTA_MSG = "Olá! Vi a página de valor do WhatsApp Oficial e quero isso na minha loja.";

/* ============ HERO ============ */
export function VHero() {
  const stats = [
    ["~98%", "taxa de abertura de mensagens no WhatsApp*"],
    ["~20%", "taxa média de abertura de e-mail marketing*"],
    ["R$ 0,03", "custo aproximado por aviso de pedido (tarifa Meta)"],
  ];
  return (
    <section
      className="pb-16 pt-[150px]"
      style={{
        background:
          "radial-gradient(800px 460px at 50% 0%, rgba(37,211,102,.08), transparent 60%), #021627",
      }}
    >
      <div className="wrap text-center">
        <Reveal>
          <span className="eyebrow justify-center">Pixel Partners · WhatsApp oficial</span>
          <h1 className="mx-auto mb-5 max-w-[820px] font-display text-[clamp(30px,4.2vw,56px)] font-extrabold leading-[1.1] tracking-[-0.025em]">
            O canal que seu cliente <span className="text-wa">abre</span> — trabalhando em cada etapa da venda.
          </h1>
          <p className="mx-auto mb-10 max-w-[620px] text-[16.5px] text-dim">
            E-mail avisa. WhatsApp conversa. Veja, recurso por recurso, quanto valor o canal oficial coloca
            de volta na sua operação — com os números na mesa.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map(([n, l], i) => (
            <Reveal key={l} delay={i * 0.08} className="h-full">
              <div className="card h-full bg-navy-800/20 p-6">
                <span className="block font-display text-[34px] font-black tracking-tight text-wa">{n}</span>
                <span className="text-[12.5px] text-dim">{l}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ layout de módulo ============ */
function Modulo({
  badge, title, invert = false, children, mock,
}: { badge: string; title: string; invert?: boolean; children: React.ReactNode; mock: React.ReactNode }) {
  return (
    <section className={`border-t border-line py-20 ${invert ? "bg-navy-900" : ""}`}>
      <div className={`wrap grid items-center gap-12 lg:grid-cols-2`}>
        <Reveal className={invert ? "lg:order-2" : ""}>
          <ModBadge>{badge}</ModBadge>
          <h2 className="mb-5 font-display text-[clamp(23px,2.8vw,34px)] font-extrabold leading-[1.15] tracking-tight">
            {title}
          </h2>
          <div className="flex flex-col gap-4 text-[15px] text-dim">{children}</div>
        </Reveal>
        <Reveal delay={0.12} className={`flex justify-center ${invert ? "lg:order-1 lg:justify-start" : "lg:justify-end"}`}>
          {mock}
        </Reveal>
      </div>
    </section>
  );
}

const chipRow = (chips: [string, string][]) => (
  <div className="mt-2 flex flex-wrap gap-2.5">
    {chips.map(([a, b]) => (
      <span key={a + b} className="rounded-full border border-line px-3.5 py-1.5 text-[12px] text-dim">
        {a} <strong className="text-wa">{b}</strong>
      </span>
    ))}
  </div>
);

/* ============ FOLLOW-UP ============ */
export function VFollowUp() {
  const steps = [
    ["✓", "Pagamento aprovado", "“Oi Maria, seu pedido #4127 foi confirmado!” · lida às 14:02"],
    ["📦", "Pedido enviado", "“Saiu para entrega — acompanhe: BR9342...” · lida às 09:15"],
    ["🚚", "Em trânsito", "Rastreio atualizado direto na conversa"],
    ["🏠", "Entregue", "“Chegou! Qualquer coisa é só responder aqui.” · zero chamados abertos"],
  ];
  return (
    <Modulo
      badge="Incluso no canal"
      title="Follow-up de pedidos: o fim do “cadê meu pedido?”"
      mock={
        <div className="card w-full max-w-[400px] bg-navy-950/60 p-5">
          <ul className="relative flex flex-col gap-5 before:absolute before:bottom-3 before:left-[15px] before:top-3 before:w-px before:bg-wa/30">
            {steps.map(([ic, t, d]) => (
              <li key={t} className="relative flex gap-4">
                <span className="z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-wa/50 bg-navy-950 text-[13px]">{ic}</span>
                <div>
                  <p className="font-display text-[14px] font-bold">{t}</p>
                  <p className="text-[12px] text-dim">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      }
    >
      <p>
        Estimativas de mercado apontam que <strong className="text-ink">até 4 em cada 10 chamados de suporte</strong>{" "}
        em e-commerce são só isso: cliente perguntando onde está o pedido*. Cada status — pagamento, envio,
        rastreio, entrega — dispara automaticamente o template certo, com recibo de entrega no seu painel.
      </p>
      <p>
        Cliente informado não abre chamado, não abre disputa no cartão e{" "}
        <strong className="text-ink">volta a comprar</strong> — porque a experiência pós-compra é onde a
        segunda venda começa.
      </p>
      {chipRow([["abertura", "~98%"], ["custo", "~R$ 0,03/aviso"], ["recibo de", "entrega e leitura"]])}
    </Modulo>
  );
}

/* ============ CARRINHO + CALCULADORA ============ */
export function VCarrinho() {
  const [carrinhos, setCarrinhos] = useState(100);
  const [ticket, setTicket] = useState(180);
  const perdido = carrinhos * ticket;
  const recuperavel = Math.round(perdido * 0.1);
  const multiplo = Math.max(1, Math.round(recuperavel / 199));
  const fmt = (n: number) => n.toLocaleString("pt-BR");
  const input =
    "w-full rounded-[10px] border border-line bg-navy-950/60 px-4 py-2.5 text-[14px] text-ink outline-none transition-colors focus:border-wa";
  return (
    <Modulo
      badge="Canal + módulo Recuperação de Carrinho"
      title="Carrinho abandonado: o dinheiro que já esteve na sua mão"
      invert
      mock={
        <div className="card w-full max-w-[400px] bg-navy-950/60 p-6">
          <p className="mb-4 font-display text-[15px] font-bold">Quanto sua loja deixa na mesa por mês?</p>
          <label className="mb-1 block font-mono text-[10.5px] uppercase tracking-[0.08em] text-dim">
            Carrinhos abandonados / mês
          </label>
          <input type="number" min={0} className={input} value={carrinhos}
            onChange={(e) => setCarrinhos(Math.max(0, Number(e.target.value)))} />
          <label className="mb-1 mt-4 block font-mono text-[10.5px] uppercase tracking-[0.08em] text-dim">
            Ticket médio (R$)
          </label>
          <input type="number" min={0} className={input} value={ticket}
            onChange={(e) => setTicket(Math.max(0, Number(e.target.value)))} />
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-line bg-navy-900/60 p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-dim">Perdido por mês</p>
              <p className="font-display text-[20px] font-black tracking-tight text-[#FF8A8A]">R$ {fmt(perdido)}</p>
            </div>
            <div className="rounded-xl border border-wa/40 bg-wa/[.06] p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-dim">Recuperável (10%)</p>
              <p className="font-display text-[20px] font-black tracking-tight text-wa">R$ {fmt(recuperavel)}</p>
            </div>
          </div>
          <p className="mt-4 text-center text-[13px] text-dim">
            Isso é <strong className="text-wa">~{multiplo}×</strong> o valor do canal inteiro (R$ 199), todo mês.
          </p>
        </div>
      }
    >
      <p>
        Em média, <strong className="text-ink">7 de cada 10 carrinhos são abandonados</strong> no
        e-commerce*. Esse cliente escolheu o produto, colocou no carrinho — e sumiu. O módulo Recuperação de Carrinho manda pra
        ele, no WhatsApp, o <strong className="text-ink">link do carrinho pronto</strong>, com{" "}
        <strong className="text-ink">desconto condicional</strong> pra fechar agora.
      </p>
      <p>
        Recuperando algo na faixa de 10% desses carrinhos — patamar comum em recuperação via WhatsApp* — o
        canal se paga <strong className="text-ink">muitas vezes</strong> no mesmo mês. Use a calculadora ao
        lado com os números da sua loja.
      </p>
      {chipRow([["se paga com", "1 carrinho recuperado"], ["média do e-commerce", "7 em 10 abandonados*"]])}
    </Modulo>
  );
}

/* ============ VOLTA AO ESTOQUE ============ */
export function VEstoque() {
  return (
    <Modulo
      badge="Incluso no canal"
      title="Volta ao estoque: vender pra quem já pediu pra comprar"
      mock={
        <div className="flex w-full max-w-[400px] flex-col gap-4">
          <div className="card flex items-center gap-4 bg-navy-950/60 p-4">
            <span className="grid h-14 w-14 place-items-center rounded-xl bg-navy-800/60 text-2xl">👗</span>
            <div className="flex-1">
              <p className="font-display text-[14px] font-bold">Vestido Ipanema — Tam. M</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#FF8A8A]">esgotado</p>
            </div>
            <span className="rounded-lg border border-wa/50 px-3.5 py-2 font-display text-[12px] font-bold text-wa">
              Avise-me
            </span>
          </div>
          <Bubble time="11:03" cta="Garantir o meu">
            🔔 Boa notícia! O <strong>Vestido Ipanema (M)</strong> voltou ao estoque — e a última vez esgotou
            em 2 dias.
          </Bubble>
        </div>
      }
    >
      <p>
        Produto esgotado não é venda perdida — é{" "}
        <strong className="text-ink">demanda declarada esperando aviso</strong>. O cliente deixa o WhatsApp
        no botão “Avise-me” e, na reposição, recebe o alerta na hora, com link direto do produto.
      </p>
      <p>
        É o disparo de maior conversão que existe: a pessoa <strong className="text-ink">já queria</strong>{" "}
        aquele produto específico. Sem gastar um real de anúncio pra reconquistar quem você já tinha.
      </p>
      {chipRow([["demanda", "declarada"], ["custo", "~R$ 0,03/alerta"], ["verba de anúncio", "zero"]])}
    </Modulo>
  );
}

/* ============ INFLUENCERS ============ */
export function VInfluencers() {
  const rank = [
    ["1º", "@julia.looks", "34 vendas este mês", "R$ 1.187"],
    ["2º", "@marina.fit", "28 vendas este mês", "R$ 973"],
    ["3º", "@camila.st", "21 vendas este mês", "R$ 742"],
  ];
  return (
    <Modulo
      badge="Canal + Código de Vendedor"
      title="Painel de influencers: quem vê a comissão pingar, posta mais"
      invert
      mock={
        <div className="flex w-full max-w-[400px] flex-col gap-4">
          <div className="card bg-navy-950/60 p-4">
            {rank.map(([pos, nome, v, c], i) => (
              <div key={nome} className={`flex items-center gap-3 py-2.5 ${i < rank.length - 1 ? "border-b border-white/[.07]" : ""}`}>
                <span className={`font-display text-[13px] font-black ${i === 0 ? "text-amber" : "text-dim"}`}>{pos}</span>
                <div className="flex-1">
                  <p className="font-display text-[13.5px] font-bold">{nome}</p>
                  <p className="text-[11px] text-dim">{v}</p>
                </div>
                <span className="font-display text-[14px] font-extrabold text-wa">{c}</span>
              </div>
            ))}
          </div>
          <Bubble time="16:22">
            🎉 <strong>Venda pelo seu link!</strong> Pedido #4130 · comissão de <strong>R$ 34,90</strong>{" "}
            creditada. Você segue em 1º no ranking 🏆
          </Bubble>
        </div>
      }
    >
      <p>
        Cada influencer da sua marca ganha um <strong className="text-ink">painel próprio</strong> — vendas
        pelo link, comissões, ranking — e recebe no WhatsApp o aviso de{" "}
        <strong className="text-ink">cada venda em tempo real</strong>.
      </p>
      <p>
        Transparência é retenção: influencer que enxerga o resultado na hora{" "}
        <strong className="text-ink">não migra pra concorrente</strong> e transforma cada notificação em
        motivação pra postar de novo. Seu programa de influência vira máquina, não planilha.
      </p>
      {chipRow([["painel", "individual"], ["aviso de venda", "em tempo real"], ["ranking que", "gamifica"]])}
    </Modulo>
  );
}

/* ============ LEADS ============ */
export function VLeads() {
  return (
    <Modulo
      badge="Incluso no canal"
      title="Leads do site: quem responde primeiro, leva"
      mock={
        <div className="flex w-full max-w-[400px] flex-col gap-4">
          <div className="card bg-navy-950/60 p-5">
            <p className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.08em] text-dim">
              Chance de contato/qualificação*
            </p>
            <p className="mb-1 text-[12px] text-dim">Resposta em 5 minutos — sua loja com WhatsApp automático</p>
            <div className="mb-3 h-3 overflow-hidden rounded-full bg-white/[.07]">
              <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-wa-dark to-wa" />
            </div>
            <p className="mb-1 text-[12px] text-dim">Resposta em 30+ minutos — concorrente que “responde depois”</p>
            <div className="h-3 overflow-hidden rounded-full bg-white/[.07]">
              <div className="h-full w-[12%] rounded-full bg-[#FF8A8A]/70" />
            </div>
          </div>
          <Bubble time="agora">
            Oi João! 👋 Recebemos seu pedido de orçamento sobre <strong>fachada em ACM</strong>. Nossa equipe
            já está analisando e retorna ainda hoje.
          </Bubble>
        </div>
      }
    >
      <p>
        Estudos de resposta a leads mostram que contatar nos{" "}
        <strong className="text-ink">primeiros 5 minutos</strong> multiplica em dezenas de vezes a chance de
        qualificar em relação a esperar meia hora* — e a maioria das empresas demora horas.
      </p>
      <p>
        Aqui, quem preenche o formulário de orçamento no seu site recebe a confirmação{" "}
        <strong className="text-ink">no WhatsApp, em segundos</strong> — automático, integrado ao formulário
        do Elementor. O lead chega quente na sua equipe, antes de esfriar ou procurar o concorrente.
      </p>
      {chipRow([["resposta em", "segundos"], ["integrado ao", "Elementor"], ["lead", "nunca se perde"]])}
    </Modulo>
  );
}

/* ============ FRAUDE ============ */
export function VFraude() {
  return (
    <Modulo
      badge="Incluso no canal"
      title="Alerta de fraude: proteção no minuto do ataque"
      invert
      mock={
        <div className="w-full max-w-[400px]">
          <div className="card overflow-hidden bg-navy-950/60">
            <p className="border-b border-[#FF8A8A]/30 bg-[#FF8A8A]/10 px-4 py-2 font-mono text-[10.5px] uppercase tracking-[0.1em] text-[#FF8A8A]">
              ⚠ alerta de segurança — 03:12
            </p>
            <div className="p-4">
              <Bubble time="03:12">
                🚨 <strong>Possível ataque de carding em andamento.</strong> 17 tentativas de compra em 4 min
                · mesmo IP · cartões distintos · valor R$ 1,00–3,00. Sugestão: ativar bloqueio temporário do
                checkout e revisar pedidos #4131–#4148.
              </Bubble>
            </div>
          </div>
        </div>
      }
    >
      <p>
        Ataques de teste de cartão (carding) acontecem de madrugada e em rajada — e cada transação fraudada
        pode custar <strong className="text-ink">2 a 3 vezes o valor da venda</strong> entre chargeback,
        taxas e produto perdido*. Sem falar no risco junto ao gateway.
      </p>
      <p>
        Nossa detecção monitora o padrão de compras da sua loja e, ao identificar um ataque,{" "}
        <strong className="text-ink">avisa você no WhatsApp na hora</strong> — não num relatório da semana
        seguinte. É a diferença entre bloquear no minuto 2 e descobrir no dia seguinte.
      </p>
      {chipRow([["detecção de", "carding"], ["alerta", "imediato"], ["protege sua conta no", "gateway"]])}
    </Modulo>
  );
}

/* ============ RESUMO ============ */
export function VResumo() {
  const linhas = [
    ["Vendas", "R$ 4.870,00"],
    ["Pedidos", "27"],
    ["Ticket médio", "R$ 180,37"],
    ["vs. ontem", "▲ +12%"],
    ["Carrinhos recuperados", "3 · R$ 512"],
  ];
  return (
    <Modulo
      badge="Incluso no canal"
      title="Resumo de vendas: a loja na palma da sua mão"
      mock={
        <div className="card w-full max-w-[400px] bg-navy-950/60 p-5">
          <p className="mb-3 font-display text-[14px] font-bold">📊 Fechamento de hoje — Sua Loja</p>
          <ul className="flex flex-col divide-y divide-white/[.07]">
            {linhas.map(([l, v]) => (
              <li key={l} className="flex items-center justify-between py-2 text-[13px]">
                <span className="text-dim">{l}</span>
                <span className={`font-display font-extrabold ${v.startsWith("▲") ? "text-wa" : ""}`}>{v}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-right font-mono text-[9.5px] text-dim">21:00 <span className="text-[#53BDEB]">✓✓</span></p>
        </div>
      }
    >
      <p>
        Todo fim de dia (ou da semana, você escolhe), o fechamento chega{" "}
        <strong className="text-ink">no seu WhatsApp</strong>: vendas, pedidos, ticket médio, comparativo.
        Sem abrir painel, sem exportar planilha.
      </p>
      <p>
        É o hábito que muda a gestão: o dono que <strong className="text-ink">vê o número todo dia</strong>{" "}
        reage rápido — percebe o dia fraco na hora, não no fechamento do mês.
      </p>
      {chipRow([["fechamento", "diário ou semanal"], ["esforço", "zero"], ["comparativo", "automático"]])}
    </Modulo>
  );
}

/* ============ FUNDAÇÃO + CTA ============ */
export function VFundacao() {
  return (
    <section className="border-t border-line py-20">
      <div className="wrap">
        <Reveal className="mb-10 max-w-[720px]">
          <ModBadge>Incluso no canal</ModBadge>
          <h2 className="mb-4 font-display text-[clamp(23px,2.8vw,34px)] font-extrabold leading-[1.15] tracking-tight">
            E a fundação que segura tudo isso
          </h2>
          <p className="text-[15px] text-dim">
            Nada disso funciona sem a base bem feita:{" "}
            <strong className="text-ink">seu app próprio na Meta</strong> (sem intermediário), número digital
            incluso, templates aprovados, marca verificada na conversa e log de cada envio com recibo.
          </p>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["app seu", "na sua conta Meta, sem intermediário"],
            ["nome verificado", "sua marca na conversa, aprovada pela Meta"],
            ["💬 Atendimento sem vácuo", "auto-resposta imediata + encaminhamento pra equipe. Nenhum cliente falando sozinho."],
            ["🔑 Login sem senha", "cliente entra pelo link do WhatsApp. Menos atrito, menos abandono no checkout."],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.06} className="h-full">
              <div className="card h-full bg-navy-800/15 p-5">
                <p className="mb-1.5 font-display text-[14.5px] font-bold tracking-tight">{t}</p>
                <p className="text-[12.5px] text-dim">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VInvestimentoResumo() {
  return (
    <section className="border-t border-line bg-navy-900 py-20 text-center">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow justify-center">Investimento</span>
          <h2 className="mx-auto mb-4 max-w-[680px] font-display text-[clamp(24px,3vw,38px)] font-extrabold leading-[1.12] tracking-tight">
            Um canal. Nenhum taxímetro.
          </h2>
          <p className="mx-auto mb-8 max-w-[560px] text-[15px] text-dim">
            Capacidade se paga uma vez, canal se paga à parte, nada se paga duas vezes. Os módulos você já tem na plataforma — o canal dá voz de WhatsApp a todos eles.
          </p>
          <div className="mx-auto mb-9 grid max-w-[760px] gap-4 sm:grid-cols-3">
            {[
              ["Canal WhatsApp oficial", "tudo incluso, por loja", "R$ 199/mês"],
              ["Capacidades", "vêm dos módulos da plataforma", "sem custo extra"],
              ["No plano Scale", "canal já vem", "incluso"],
            ].map(([t, pre, v]) => (
              <div key={t} className="card bg-navy-950/40 p-5">
                <p className="font-display text-[13.5px] font-bold">{t}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-dim">{pre}</p>
                <p className="font-display text-[20px] font-black tracking-tight text-wa">{v}</p>
              </div>
            ))}
          </div>
          <a
            href={waLink(CTA_MSG)}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2.5 rounded-full bg-wa px-8 py-4 font-display text-[15.5px] font-bold text-navy-950 no-underline shadow-[0_8px_24px_rgba(37,211,102,.28)] transition-all hover:-translate-y-0.5"
          >
            <WaIcon /> Quero isso na minha loja
          </a>
          <p className="mx-auto mt-6 max-w-[780px] text-left text-[11px] leading-relaxed text-dim">
            * Referências de mercado: taxa de abertura de WhatsApp (~98%) e e-mail (~20%) conforme estudos
            amplamente citados do setor; abandono médio de carrinho (~70%) conforme levantamentos do Baymard
            Institute; impacto da velocidade de resposta a leads conforme estudos de lead response; custo de
            chargeback conforme estimativas do setor de pagamentos. Percentuais de recuperação variam por
            loja e são ilustrativos — a calculadora usa 10% como referência. Tarifas por mensagem são
            cobradas pela Meta, em dólar, sujeitas a reajuste; R$ 0,03 é referência convertida para a
            categoria utilidade. Valores “a partir de”, por loja. Proposta sujeita a análise técnica do
            ambiente.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
