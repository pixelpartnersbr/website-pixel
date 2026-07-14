import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PvHero, PvProblema, PvComoFunciona, PvRecursos, PvCalculadora, PvComparativo, PvQuemFaq, PvCTA } from "@/components/Provador";

export const metadata: Metadata = {
  title: "Provador de Tamanho — recomendação de tamanho para WooCommerce | Pixel Commerce",
  description:
    "Provador virtual de roupas e calçados dentro da sua loja WooCommerce: menos dúvida na compra, menos troca depois. Preço fixo que não cresce com o tráfego, dados na sua loja.",
};

export default function ProvadorPage() {
  return (
    <main>
      <Header />
      <PvHero />
      <PvProblema />
      <PvComoFunciona />
      <PvRecursos />
      <PvCalculadora />
      <PvComparativo />
      <PvQuemFaq />
      <PvCTA />
      <Footer />
    </main>
  );
}
