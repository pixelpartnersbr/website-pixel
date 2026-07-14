import { SITE, waLink, BUILD } from "./config";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line py-12">
      <div className="wrap">
        <div className="mb-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src="/images/logo-pixel-partners.png" alt="Pixel Partners" className="mb-3 h-16 w-16" />
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
              <li><a href="/trafego-pago" className="text-dim no-underline hover:text-ink">Tráfego Pago</a></li>
              <li><a href="/#servicos" className="text-dim no-underline hover:text-ink">Desenvolvimento de Apps</a></li>
              <li><a href="/#servicos" className="text-dim no-underline hover:text-ink">Redes Sociais</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-dim">Plataforma</p>
            <ul className="flex flex-col gap-2 text-[13.5px]">
              <li><a href="/plataforma" className="text-dim no-underline hover:text-ink">Conheça o Pixel Commerce</a></li>
              <li><a href="/planos" className="text-dim no-underline hover:text-ink">Planos e preços</a></li>
              <li><a href="/whatsapp" className="text-dim no-underline hover:text-ink">Canal WhatsApp Oficial</a></li>
              <li><a href="/comparativos/pixel-crm-vs-zoppy" className="text-dim no-underline hover:text-ink">Pixel CRM vs Zoppy</a></li>
              <li><a href="/comparativos/pixel-commerce-vs-shopify" className="text-dim no-underline hover:text-ink">Pixel Commerce vs Shopify</a></li>
              <li><a href="/comparativos/fidelizacao-vs-fidelizar-mais" className="text-dim no-underline hover:text-ink">Fidelização vs Fidelizar+</a></li>
              <li><a href="/pixel-crm" className="text-dim no-underline hover:text-ink">Pixel CRM</a></li>
              <li><a href="/atacadista" className="text-dim no-underline hover:text-ink">Módulo Atacadista</a></li>
              <li><a href="/provador" className="text-dim no-underline hover:text-ink">Provador de Tamanho</a></li>
              <li><a href="/vendedor" className="text-dim no-underline hover:text-ink">Código de Vendedor</a></li>
              <li><a href="/shop-the-look" className="text-dim no-underline hover:text-ink">Shop The Look</a></li>
              <li><a href="/videocommerce" className="text-dim no-underline hover:text-ink">Videocommerce</a></li>
              <li><a href="https://queueguard.app" target="_blank" rel="noopener" className="text-dim no-underline hover:text-ink">QueueGuard ↗</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.1em] text-dim">Contato</p>
            <ul className="flex flex-col gap-2 text-[13.5px] text-dim">
              <li><a href={waLink("Olá! Vim pelo site da Pixel Partners.")} target="_blank" rel="noopener" className="text-dim no-underline hover:text-ink">WhatsApp · {SITE.whatsappDisplay}</a></li>
              <li>Segunda a sexta · 9h às 18h</li>
              <li><a href="/#contato" className="text-amber no-underline">Fale Conosco →</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
          <p className="text-[12px] text-dim">© 2026 Pixel Partners. Todos os direitos reservados. · CNPJ: {SITE.cnpj} · v{BUILD}</p>
          <p className="font-mono text-[11px] tracking-[0.06em] text-dim">code · connect · create</p>
        </div>
      </div>
    </footer>
  );
}
