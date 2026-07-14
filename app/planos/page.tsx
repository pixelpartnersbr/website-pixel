import type { Metadata } from "next";
import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import PricingAvulsos from "@/components/PricingAvulsos";
import PricingExtras from "@/components/PricingExtras";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Planos — Pixel Commerce",
  description:
    "Planos com preço fixo e 0% de comissão sobre vendas. Servidor sob medida, módulos proprietários e suporte de quem escreveu o código.",
};

export default function PlanosPage() {
  return (
    <main>
      <Header />
      <Pricing />
      <PricingAvulsos />
      <PricingExtras />
      <CTA />
      <Footer />
    </main>
  );
}
