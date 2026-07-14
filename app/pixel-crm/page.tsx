import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CrmHero, CrmDor, CrmMatematica, CrmCamadas, CrmWhatsapp, CrmDiferenciais, CrmComparativo, CrmCapo, CrmFAQ, CrmCTA } from "@/components/PixelCrm";

export const metadata: Metadata = {
  title: "Pixel CRM — CRM de recompra para WooCommerce | Pixel Partners",
  description:
    "CRM nativo do WooCommerce com RFM, risco de churn, canais de aquisição e automações de WhatsApp. Seus dados na sua loja, preço fixo. Faça sua base comprar de novo.",
};

export default function PixelCrmPage() {
  return (
    <main>
      <Header />
      <CrmHero />
      <CrmDor />
      <CrmMatematica />
      <CrmCamadas />
      <CrmWhatsapp />
      <CrmDiferenciais />
      <CrmComparativo />
      <CrmCapo />
      <CrmFAQ />
      <CrmCTA />
      <Footer />
    </main>
  );
}
