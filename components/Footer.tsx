export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="wrap flex flex-wrap items-center justify-between gap-5">
        <p className="flex items-center gap-3 text-[12.5px] text-dim">
          <img src="/images/mark-p.png" alt="" aria-hidden className="h-7 w-7" />
          <span><strong className="text-ink">Pixel Commerce</strong> é a plataforma proprietária da Pixel Partners · Vila Velha, ES</span>
        </p>
        <p className="font-mono text-[11px] tracking-[0.06em] text-dim">
          powered by PrimePress · núcleo WooCommerce open-source
        </p>
      </div>
    </footer>
  );
}
