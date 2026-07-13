import { SITE } from "./config";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line py-12">
      <div className="wrap">
        <div className="mb-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-2 font-display text-[16px] font-extrabold">Pixel Partners</p>
            <p className="text-[13px] text-dim">
              Agência especializada em desenvolvimento web e marketing digital. Precisão, parceria e
              resultados mensuráveis.
            </p>
            <a href={SITE.instagram} target="_blank" rel="noopener" className="mt-3 inline-block font-mono text-[12px] text-dim no-underline hover:text-ink">
              @pixelpartnersbr ↗
            </a>
          </div>
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-dim">Serviços</p>
            <ul className="flex flex-col gap-2 text-[13.5px]">
              <li><a href="/plataforma" className="text-dim no-underline hover:text-ink">Pixel Commerce</a></li>
              <li><a href="/#servicos" className="text-dim no-underline hover:text-ink">Tráfego Pago</a></li>
              <li><a href="/#servicos" className="text-dim no-underline hover:text-ink">CRO</a></li>
              <li><a href="/#servicos" className="text-dim no-underline hover:text-ink">SEO / GEO</a></li>
              <li><a href="/#servicos" className="text-dim no-underline hover:text-ink">Redes Sociais</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-dim">Plataforma</p>
            <ul className="flex flex-col gap-2 text-[13.5px]">
              <li><a href="/plataforma" className="text-dim no-underline hover:text-ink">Conheça o Pixel Commerce</a></li>
              <li><a href="/planos" className="text-dim no-underline hover:text-ink">Planos e preços</a></li>
              <li><a href="/whatsapp" className="text-dim no-underline hover:text-ink">PP Whatsapp Oficial</a></li>
              <li><a href="https://queueguard.app" target="_blank" rel="noopener" className="text-dim no-underline hover:text-ink">QueueGuard ↗</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-dim">Contato</p>
            <ul className="flex flex-col gap-2 text-[13.5px] text-dim">
              <li><a href={`mailto:${SITE.email}`} className="text-dim no-underline hover:text-ink">{SITE.email}</a></li>
              <li>Segunda a sexta · 9h às 18h</li>
              <li><a href="/#contato" className="text-amber no-underline">Fale Conosco →</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <p className="text-[12px] text-dim">© 2026 Pixel Partners. Todos os direitos reservados. · CNPJ: {SITE.cnpj}</p>
          <p className="font-mono text-[11px] tracking-[0.06em] text-dim">code · connect · create</p>
        </div>
      </div>
    </footer>
  );
}
