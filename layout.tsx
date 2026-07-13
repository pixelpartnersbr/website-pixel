import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { WaHero, WaMotivos, WaTarifas, WaEcossistema, WaInvestimento } from "@/components/whatsapp/Proposta";

export const metadata: Metadata = {
  title: "WhatsApp Oficial para sua loja — Pixel Partners",
  description:
    "PP Whatsapp: sua loja no WhatsApp oficial com app próprio na Meta. Follow-up de pedidos, recuperação de carrinho e atendimento sem risco de banimento. A partir de R$ 199/mês.",
};

export default function WhatsappPage() {
  return (
    <main>
      <SiteHeader />
      <WaHero />
      <WaMotivos />
      <WaTarifas />
      <WaEcossistema />
      <WaInvestimento />
      <SiteFooter />
    </main>
  );
}
