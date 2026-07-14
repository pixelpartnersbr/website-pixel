import { BUILD } from "./site/config";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="wrap flex flex-wrap items-center justify-between gap-5">
        <p className="flex items-center gap-3 text-[12.5px] text-dim">
          <img src="/images/mark-p.png" alt="" aria-hidden className="h-7 w-7" />
          <span><strong className="text-ink">Pixel Commerce</strong> é a plataforma proprietária da Pixel Partners · Vila Velha, ES · v{BUILD}</span>
        </p>
        <nav className="flex items-center gap-5 text-[12px]">
          <a href="/comparativos/pixel-crm-vs-zoppy" className="text-dim no-underline transition-colors hover:text-ink">vs Zoppy</a>
          <a href="/comparativos/pixel-commerce-vs-shopify" className="text-dim no-underline transition-colors hover:text-ink">vs Shopify</a>
          <a href="/comparativos/fidelizacao-vs-fidelizar-mais" className="text-dim no-underline transition-colors hover:text-ink">vs Fidelizar+</a>
          <a href="/pixel-crm" className="text-dim no-underline transition-colors hover:text-ink">Pixel CRM</a>
          <a href="/videocommerce" className="text-dim no-underline transition-colors hover:text-ink">Videocommerce</a>
          <a href="/planos" className="text-dim no-underline transition-colors hover:text-ink">Planos</a>
        </nav>
        <p className="font-mono text-[11px] tracking-[0.06em] text-dim">
          powered by PrimePress · núcleo WooCommerce open-source
        </p>
      </div>
    </footer>
  );
}
