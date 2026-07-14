import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { StlHero, StlProblema, StlDesconto, StlRecursos, StlComparativo, StlCTA } from "@/components/ShopTheLook";

export const metadata: Metadata = {
  title: "Shop The Look — o look inteiro num clique, para WooCommerce | Pixel Commerce",
  description:
    "Bloco 'Compre o Look' na página do produto: o cliente seleciona as peças, escolhe os tamanhos e adiciona tudo ao carrinho de uma vez — com desconto progressivo pelo conjunto.",
};

export default function ShopTheLookPage() {
  return (
    <main>
      <Header />
      <StlHero />
      <StlProblema />
      <StlDesconto />
      <StlRecursos />
      <StlComparativo />
      <StlCTA />
      <Footer />
    </main>
  );
}
