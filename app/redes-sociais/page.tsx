import type { Metadata } from "next";
import { MARKETING_ATIVO } from "@/components/site/config";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { RsHero, RsProblema, RsPlanos, RsBenchmark, RsCalculadora, RsQuemFaq, RsCTA } from "@/components/RedesSociais";

export const metadata: Metadata = {
  title: "Gestão de Redes Sociais para Negócios Locais e Saúde | Pixel Partners",
  description:
    "Estratégia, conteúdo, artes e vídeo com aprovação sua em tudo — a partir de R$ 1.450/mês, com preços públicos comparados às faixas reais do mercado. Sem fidelidade.",
  // desconectada do site público — volta a indexar quando MARKETING_ATIVO = true
  robots: MARKETING_ATIVO ? undefined : { index: false, follow: false },
};

export default function RedesSociaisPage() {
  return (
    <main>
      <SiteHeader />
      <RsHero />
      <RsProblema />
      <RsPlanos />
      <RsBenchmark />
      <RsCalculadora />
      <RsQuemFaq />
      <RsCTA />
      <SiteFooter />
    </main>
  );
}
