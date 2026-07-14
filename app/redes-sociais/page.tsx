import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { RsHero, RsProblema, RsPlanos, RsBenchmark, RsCalculadora, RsQuemFaq, RsCTA } from "@/components/RedesSociais";

export const metadata: Metadata = {
  title: "Gestão de Redes Sociais para Negócios Locais e Saúde | Pixel Partners",
  description:
    "Estratégia, conteúdo, artes e vídeo com aprovação sua em tudo — a partir de R$ 1.450/mês, com preços públicos comparados às faixas reais do mercado. Sem fidelidade.",
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
