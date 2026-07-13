import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import {
  VHero, VFollowUp, VCarrinho, VEstoque, VInfluencers,
  VLeads, VFraude, VResumo, VFundacao, VInvestimentoResumo,
} from "@/components/whatsapp/Valor";

export const metadata: Metadata = {
  title: "O valor do WhatsApp Oficial, recurso por recurso — Pixel Partners",
  description:
    "Quanto o canal oficial coloca de volta na sua operação: follow-up, carrinho abandonado, volta ao estoque, influencers, leads, antifraude e resumo de vendas — com os números na mesa.",
};

export default function WhatsappValorPage() {
  return (
    <main>
      <SiteHeader />
      <VHero />
      <VFollowUp />
      <VCarrinho />
      <VEstoque />
      <VInfluencers />
      <VLeads />
      <VFraude />
      <VResumo />
      <VFundacao />
      <VInvestimentoResumo />
      <SiteFooter />
    </main>
  );
}
