import type { Metadata } from "next";
import { MARKETING_ATIVO } from "@/components/site/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TeHero, TeTiers, TeCalculadora, TeDiferenciais, TeFaqCta } from "@/components/TrafegoEcommerce";

export const metadata: Metadata = {
  title: "Tráfego Pago para Lojas Virtuais — fee fixo, 0% sobre a verba | Pixel Partners",
  description:
    "Google e Meta Ads otimizados sobre venda líquida real, com fee fixo por faixa de verba (a partir de R$ 2.000/mês) e 0% de comissão sobre o que você investe.",
  // desconectada do site público — volta a indexar quando MARKETING_ATIVO = true
  robots: MARKETING_ATIVO ? undefined : { index: false, follow: false },
};

export default function TrafegoEcommercePage() {
  return (
    <main>
      <Header />
      <TeHero />
      <TeTiers />
      <TeCalculadora />
      <TeDiferenciais />
      <TeFaqCta />
      <Footer />
    </main>
  );
}
