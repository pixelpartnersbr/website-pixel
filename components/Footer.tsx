import { BUILD } from "./site/config";

const modulos: [string, string][] = [
  ["/pixel-crm", "Pixel CRM"],
  ["/videocommerce", "Videocommerce"],
  ["/shop-the-look", "Shop The Look"],
  ["/regras-de-desconto", "Regras de Desconto"],
  ["/provador", "Provador de Tamanho"],
  ["/vendedor", "Código de Vendedor"],
  ["/atacadista", "Módulo Atacadista"],
  ["/whatsapp", "Canal WhatsApp"],
];

const comparativos: [string, string][] = [
  ["/comparativos/pixel-crm-vs-zoppy", "vs Zoppy"],
  ["/comparativos/pixel-commerce-vs-shopify", "vs Shopify"],
  ["/comparativos/fidelizacao-vs-fidelizar-mais", "vs Fidelizar+"],
  ["/videocommerce#comparativo", "vs Widde"],
  ["/trafego-ecommerce", "Tráfego Pago"],
  ["/planos", "Planos"],
];

function LinkGroup({ label, links }: { label: string; links: [string, string][] }) {
  return (
    <div className="min-w-0">
      <p className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.1em] text-dim/70">{label}</p>
      <nav className="flex flex-wrap gap-x-4 gap-y-2 text-[12.5px]">
        {links.map(([href, l]) => (
          <a key={href} href={href} className="text-dim no-underline transition-colors hover:text-ink">
            {l}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="wrap">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,340px)_1fr]">
          <p className="flex items-start gap-3 text-[12.5px] text-dim">
            <img src="/images/mark-p.png" alt="" aria-hidden className="h-7 w-7 shrink-0" />
            <span>
              <strong className="text-ink">Pixel Commerce</strong> é a plataforma proprietária da Pixel
              Partners · Vila Velha, ES · v{BUILD}
            </span>
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <LinkGroup label="Módulos" links={modulos} />
            <LinkGroup label="Comparativos" links={comparativos} />
          </div>
        </div>
        <div className="mt-8 border-t border-line pt-5">
          <p className="font-mono text-[11px] tracking-[0.06em] text-dim">
            powered by PrimePress · núcleo WooCommerce open-source
          </p>
        </div>
      </div>
    </footer>
  );
}
