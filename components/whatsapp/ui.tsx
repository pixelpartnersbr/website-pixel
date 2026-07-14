"use client";
// Elementos compartilhados das páginas Canal WhatsApp
export function WaIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1a13 13 0 0 1-6.3-5.6c-.5-.8-.9-1.9-.9-2.7 0-.9.5-1.4.7-1.6.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.3.4c-.1.1-.2.3-.1.5.1.3.6 1.1 1.4 1.8a8 8 0 0 0 2.1 1.4c.3.1.4.1.6-.1l.7-.9c.2-.3.4-.2.6-.1l2 .9c.3.1.5.2.5.4.1.1.1.6-.1 1.1Z"/>
    </svg>
  );
}

export function Bubble({
  time, right = false, children, cta,
}: { time: string; right?: boolean; children: React.ReactNode; cta?: string }) {
  return (
    <div className={`flex ${right ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[12.5px] leading-snug ${
          right
            ? "rounded-br-sm bg-wa-dark/80 text-[#E7F9EE]"
            : "rounded-bl-sm border border-white/10 bg-[#0E2434] text-ink"
        }`}
      >
        <div>{children}</div>
        {cta && (
          <span className="mt-2 block rounded-lg bg-wa/15 py-1.5 text-center font-display text-[11.5px] font-bold text-wa">
            {cta}
          </span>
        )}
        <span className={`mt-1 flex items-center justify-end gap-1 font-mono text-[9px] ${right ? "text-[#BDEBD0]" : "text-dim"}`}>
          {time} <span className="text-[#53BDEB]">✓✓</span>
        </span>
      </div>
    </div>
  );
}

export function PhoneMock({ children, header = "Sua Loja", sub = "Conta comercial verificada" }:
  { children: React.ReactNode; header?: string; sub?: string }) {
  return (
    <div className="w-full max-w-[340px] rounded-[28px] border border-white/10 bg-[#081826] p-3.5 shadow-[0_30px_60px_rgba(0,0,0,.45)]">
      <div className="overflow-hidden rounded-[18px] bg-navy-950">
        <div className="flex items-center gap-2.5 border-b border-white/[.07] bg-[#0B2233] px-3.5 py-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-amber font-display text-[12px] font-black text-navy-950">
            SL
          </span>
          <div className="leading-tight">
            <p className="flex items-center gap-1 font-display text-[13px] font-bold">
              {header} <span className="text-[11px] text-[#53BDEB]">✔</span>
            </p>
            <p className="font-mono text-[9.5px] text-dim">{sub}</p>
          </div>
          <WaIcon className="ml-auto h-4.5 w-4.5 h-[18px] w-[18px] text-wa" />
        </div>
        <div className="flex flex-col gap-2.5 p-3.5" style={{ background: "radial-gradient(400px 300px at 50% 0%, rgba(37,211,102,.05), transparent 70%)" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export function ModBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-4 inline-block w-fit rounded-full border border-wa/40 bg-wa/10 px-3 py-1 font-mono text-[10.5px] font-medium uppercase tracking-[0.1em] text-wa">
      {children}
    </span>
  );
}
