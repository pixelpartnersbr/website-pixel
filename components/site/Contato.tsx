"use client";
import { useState } from "react";
import Reveal from "../Reveal";
import { SITE, waLink, TRAILS_IMG } from "./config";

const servicosOpts = [
  "Desenvolvimento Web / Pixel Commerce",
  "Tráfego Pago",
  "CRO",
  "SEO / GEO",
  "Redes Sociais",
  "Combo / Pacote Completo",
];

export default function Contato() {
  const [f, setF] = useState({ nome: "", empresa: "", servico: servicosOpts[0], msg: "" });

  const enviar = () => {
    const texto =
      `Olá! Vim pelo site da Pixel Partners.\n` +
      `Nome: ${f.nome}\nEmpresa: ${f.empresa}\nInteresse: ${f.servico}\n` +
      (f.msg ? `Mensagem: ${f.msg}` : "");
    window.open(waLink(texto), "_blank", "noopener");
  };

  const input =
    "w-full rounded-[10px] border border-line bg-navy-950/60 px-4 py-3 text-[14px] text-ink placeholder:text-dim/60 outline-none transition-colors focus:border-amber";

  return (
    <section id="contato" className="relative overflow-hidden border-t border-line bg-navy-900 py-24">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-bottom opacity-[.45] [mask-image:linear-gradient(to_top,black_10%,transparent_80%)]"
        style={{ backgroundImage: `url(${TRAILS_IMG})` }}
      />
      <div className="beam" aria-hidden />
      <div className="wrap relative grid gap-14 lg:grid-cols-[1fr_.85fr]">
        <Reveal>
          <span className="eyebrow">Entre em contato</span>
          <h2 className="mb-4 font-display text-[clamp(26px,3.2vw,40px)] font-extrabold leading-[1.12] tracking-tight">
            Pronto para crescer com estratégia?
          </h2>
          <p className="mb-8 max-w-[480px] text-[16px] text-dim">
            Conte o que a sua operação precisa. A conversa começa no WhatsApp — sem formulário perdido em
            caixa de entrada, sem robô.
          </p>
          <div className="flex flex-col gap-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className={input} placeholder="Seu nome" value={f.nome}
                onChange={(e) => setF({ ...f, nome: e.target.value })} aria-label="Seu nome" />
              <input className={input} placeholder="Empresa" value={f.empresa}
                onChange={(e) => setF({ ...f, empresa: e.target.value })} aria-label="Empresa" />
            </div>
            <select className={input} value={f.servico} aria-label="Serviço de interesse"
              onChange={(e) => setF({ ...f, servico: e.target.value })}>
              {servicosOpts.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <textarea className={`${input} min-h-[110px] resize-y`} placeholder="Mensagem (opcional)"
              value={f.msg} onChange={(e) => setF({ ...f, msg: e.target.value })} aria-label="Mensagem" />
            <button type="button" onClick={enviar} className="btn-amber w-fit">
              Enviar pelo WhatsApp
            </button>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="flex h-full flex-col gap-4">
            <div className="card bg-navy-950/40 p-6">
              <h3 className="mb-1 font-display text-[15px] font-bold">E-mail</h3>
              <a href={`mailto:${SITE.email}`} className="text-[14px] text-dim no-underline hover:text-ink">{SITE.email}</a>
            </div>
            <div className="card bg-navy-950/40 p-6">
              <h3 className="mb-1 font-display text-[15px] font-bold">Atendimento</h3>
              <p className="text-[14px] text-dim">Segunda a sexta · 9h às 18h<br />Brasil — atendimento em todo o território nacional</p>
            </div>
            <div className="card bg-navy-950/40 p-6">
              <h3 className="mb-1 font-display text-[15px] font-bold">Tempo de resposta</h3>
              <p className="text-[14px] text-dim">Em até 1 dia útil por e-mail. Via WhatsApp, geralmente em poucas horas.</p>
            </div>
            <div className="card flex items-center justify-between gap-4 border-amber/40 bg-amber/5 p-6">
              <div>
                <h3 className="mb-1 font-display text-[15px] font-bold">Certificações oficiais</h3>
                <p className="text-[13px] text-dim">Google Partner · Meta Business Partner</p>
              </div>
              <span className="font-display text-2xl font-black text-amber">G·M</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
