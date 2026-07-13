"use client";
import Reveal from "../Reveal";
import { SITE, waLink, TRAILS_IMG } from "./config";

const MSG = "Olá! Vim pelo site da Pixel Partners e quero conversar sobre a minha operação.";

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1a13 13 0 0 1-6.3-5.6c-.5-.8-.9-1.9-.9-2.7 0-.9.5-1.4.7-1.6.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.3.4c-.1.1-.2.3-.1.5.1.3.6 1.1 1.4 1.8a8 8 0 0 0 2.1 1.4c.3.1.4.1.6-.1l.7-.9c.2-.3.4-.2.6-.1l2 .9c.3.1.5.2.5.4.1.1.1.6-.1 1.1Z"/>
    </svg>
  );
}

export default function Contato() {
  return (
    <section id="contato" className="relative overflow-hidden border-t border-line bg-navy-900 py-24">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-bottom opacity-[.45] [mask-image:linear-gradient(to_top,black_10%,transparent_80%)]"
        style={{ backgroundImage: `url(${TRAILS_IMG})` }}
      />
      <div className="beam" aria-hidden />
      <div className="wrap relative text-center">
        <Reveal>
          <span className="eyebrow justify-center">Entre em contato</span>
          <h2 className="mx-auto mb-4 max-w-[720px] font-display text-[clamp(26px,3.2vw,48px)] font-extrabold leading-[1.12] tracking-tight">
            Pronto para crescer com estratégia?
          </h2>
          <p className="mx-auto mb-9 max-w-[520px] text-[16.5px] text-dim">
            A conversa começa — e continua — no WhatsApp. Direto com quem resolve: sem formulário, sem
            fila de e-mail, sem robô.
          </p>
          <a
            href={waLink(MSG)}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-9 py-4.5 py-[18px] font-display text-[16.5px] font-bold text-navy-950 no-underline shadow-[0_10px_30px_rgba(37,211,102,.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(37,211,102,.4)]"
          >
            <WaIcon /> Chamar no WhatsApp
          </a>
          <p className="mt-4 font-mono text-[13px] tracking-[0.04em] text-dim">{SITE.whatsappDisplay}</p>
          <div className="mx-auto mt-12 grid max-w-[880px] gap-4 sm:grid-cols-3">
            <div className="spot card bg-navy-950/40 p-6 text-left">
              <h3 className="mb-1 font-display text-[15px] font-bold">Atendimento</h3>
              <p className="text-[13.5px] text-dim">Segunda a sexta · 9h às 18h. Todo o Brasil.</p>
            </div>
            <div className="spot card bg-navy-950/40 p-6 text-left">
              <h3 className="mb-1 font-display text-[15px] font-bold">Tempo de resposta</h3>
              <p className="text-[13.5px] text-dim">Via WhatsApp, geralmente em poucas horas.</p>
            </div>
            <div className="spot card border-amber/40 bg-amber/5 p-6 text-left">
              <h3 className="mb-1 font-display text-[15px] font-bold">Certificações</h3>
              <p className="text-[13.5px] text-dim">Google Partner · Meta Business Partner</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
