import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { VcHero, VcRecursos, VcConversao, VcComparativo, VcHonesto, VcCTA } from "@/components/Videocommerce";

export const metadata: Metadata = {
  title: "PP Videocommerce: vídeo shoppable dentro da sua loja — Pixel Commerce",
  description:
    "Catálogo, galeria e stories em vídeo com carrinho dentro do player. Plugin nativo WooCommerce, sem limite de vídeos ou views, R$ 199/mês — comparativo com Widde incluso.",
};

export default function VideocommercePage() {
  return (
    <main>
      <Header />
      <VcHero />
      <VcRecursos />
      <VcConversao />
      <VcComparativo />
      <VcHonesto />
      <VcCTA />
      <Footer />
    </main>
  );
}
