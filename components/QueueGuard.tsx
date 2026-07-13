"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Reveal from "./Reveal";

const START = 1482;

export default function QueueGuard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [pos, setPos] = useState(START);
  const [turn, setTurn] = useState(false);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let alive = true;
    let cur = START;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      if (!alive) return;
      if (cur <= 0) {
        setTurn(true);
        t = setTimeout(() => {
          if (!alive) return;
          cur = START; setPos(cur); setTurn(false);
          t = setTimeout(tick, 1400);
        }, 3200);
        return;
      }
      cur = Math.max(0, cur - Math.floor(40 + Math.random() * 140));
      setPos(cur);
      t = setTimeout(tick, 700 + Math.random() * 500);
    };
    t = setTimeout(tick, 600);
    return () => { alive = false; clearTimeout(t); };
  }, [inView]);

  const pct = Math.round((1 - pos / START) * 100);
  const mins = Math.max(1, Math.ceil(pos / 700));

  const points = [
    ["Proteção automática:", "o QueueGuard detecta o pico e ativa a fila sozinho — ninguém precisa estar de plantão apertando botão."],
    ["Experiência preservada:", "quem entra, navega numa loja rápida. Quem espera, vê posição e tempo estimado — em vez de erro 503 e tela branca."],
    ["Venda protegida:", "visitante que encontra site fora do ar não volta. Fila organizada converte; queda, não."],
  ];
  const stats = [
    ["0", "quedas em picos protegidos"],
    ["auto", "ativação sem intervenção humana"],
    ["100%", "Pixel Partners, integrado à stack"],
  ];

  return (
    <section
      id="queueguard"
      className="border-t border-line py-24"
      style={{
        background:
          "radial-gradient(900px 480px at 100% 0%, rgba(255,183,0,.09), transparent 55%), radial-gradient(700px 400px at 0% 100%, rgba(10,76,130,.4), transparent 60%), #042A4C",
      }}
    >
      <div className="wrap grid items-center gap-16 lg:grid-cols-2 max-lg:gap-12">
        <Reveal>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-amber px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-navy-950">
            🛡️ Produto Pixel Partners · pronto e em operação
          </span>
          <h2 className="mb-[18px] font-display text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.1] tracking-tight">
            QueueGuard: sua loja nunca mais cai num pico de acesso.
          </h2>
          <p className="mb-7 max-w-[520px] text-[16.5px] text-dim">
            Black Friday, drop de coleção, post de influencer que viraliza — os melhores dias da sua loja
            são também os mais perigosos. O QueueGuard é a fila de espera virtual que organiza a entrada
            dos visitantes automaticamente quando o acesso dispara, a mesma estratégia usada em eventos
            gigantes como a Mega da Virada e grandes festivais.
          </p>
          <ul className="mb-8 flex flex-col gap-3.5">
            {points.map(([b, rest]) => (
              <li key={b} className="flex gap-3 text-[14.5px] text-dim">
                <span className="shrink-0 font-bold text-amber">→</span>
                <span><strong className="text-ink">{b}</strong> {rest}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-3.5">
            <a href="#contato" className="btn-amber">Ativar na minha loja</a>
            <a href="https://queueguard.app" target="_blank" rel="noopener" className="border-b border-amber/50 pb-0.5 font-mono text-[12.5px] text-dim no-underline transition-colors hover:text-ink">
              queueguard.app ↗
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div
            className="overflow-hidden rounded-[18px] border border-white/15 bg-navy-950 shadow-[0_40px_90px_rgba(0,0,0,.5)]"
            role="img"
            aria-label="Demonstração da sala de espera do QueueGuard: posição na fila diminuindo e barra de progresso avançando"
          >
            <div className="flex items-center gap-2 border-b border-line bg-white/[.03] px-4 py-3">
              {[0, 1, 2].map((i) => <span key={i} className="h-2.5 w-2.5 rounded-full bg-white/[.18]" />)}
              <span className="ml-2 flex-1 rounded-md bg-white/5 px-3 py-1 text-center font-mono text-[11px] tracking-[0.03em] text-dim">
                sualoja.com.br — protegida por QueueGuard
              </span>
            </div>
            <div className="px-10 py-11 text-center max-sm:px-5 max-sm:py-8" ref={ref}>
              <div className="mx-auto mb-5 grid h-[52px] w-[52px] place-items-center rounded-[14px] bg-gradient-to-br from-amber to-amber-deep text-2xl">
                🛡️
              </div>
              <h4 className="mb-2 font-display text-[19px] font-extrabold tracking-tight">Você já está na fila</h4>
              <p className="mb-7 text-[13.5px] text-dim">
                Estamos recebendo muitos visitantes agora. Sua vez está chegando — não feche esta página.
              </p>
              <p className="mb-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-dim">Sua posição na fila</p>
              <p className={`mb-6 font-display font-black tracking-[-0.03em] text-amber tabular-nums ${turn ? "text-[34px]" : "text-[56px]"} leading-none`}>
                {turn ? "É a sua vez!" : pos.toLocaleString("pt-BR")}
              </p>
              <div className="mb-3 h-2 overflow-hidden rounded-full bg-white/[.08]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-deep to-amber transition-[width] duration-700 ease-out"
                  style={{ width: `${turn ? 100 : pct}%` }}
                />
              </div>
              <p className="font-mono text-[11.5px] tracking-[0.04em] text-dim">
                {turn ? "entrando na loja…" : `tempo estimado: ~${mins} min`}
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-line px-4 py-3 font-mono text-[10px] tracking-[0.08em] text-dim">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-[7px] w-[7px] animate-pulse rounded-full bg-[#41E08D]" />
                fila ativa · pico detectado
              </span>
              <span>queueguard.app</span>
            </div>
          </div>
          <div className="mt-5 grid gap-3.5 sm:grid-cols-3">
            {stats.map(([n, l]) => (
              <div key={l} className="rounded-xl border border-line bg-navy-950/50 p-4 text-center">
                <span className="block font-display text-[22px] font-extrabold tracking-tight text-amber">{n}</span>
                <span className="text-[11.5px] text-dim">{l}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
