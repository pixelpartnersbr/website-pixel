import type { Metadata } from "next";
import { MARKETING_ATIVO } from "@/components/site/config";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { TpHero, TpPacote, TpInvestimento, TpQuemFaq, TpCTA } from "@/components/TrafegoPago";

export const metadata: Metadata = {
  title: "Tráfego Pago para Negócios Locais — pacote all-in-one | Pixel Partners",
  description:
    "Google Ads gerenciado por agência certificada + site, hospedagem, e-mails e suporte por R$ 1.250/mês fixo. Gestão de até R$ 5.000/mês em anúncios inclusa. Sem fidelidade.",
  // desconectada do site público — volta a indexar quando MARKETING_ATIVO = true
  robots: MARKETING_ATIVO ? undefined : { index: false, follow: false },
};

export default function TrafegoPagoPage() {
  return (
    <main>
      <SiteHeader />
      <TpHero />
      <TpPacote />
      <TpInvestimento />
      <TpQuemFaq />
      <TpCTA />
      <SiteFooter />
    </main>
  );
}
