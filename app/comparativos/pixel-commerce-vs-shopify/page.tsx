import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShHero, ShModelo, ShTabela, ShCalculadora, ShArquitetura, ShCTA } from "@/components/comparativos/PixelVsShopify";

export const metadata: Metadata = {
  title: "Pixel Commerce vs Shopify no Brasil: a conta completa — Pixel Commerce",
  description:
    "Mensalidade em dólar, taxa de 1–2% sobre cada venda e apps pagos vs preço fixo em reais com 0% de comissão. O comparativo honesto, com calculadora.",
};

export default function PixelVsShopifyPage() {
  return (
    <main>
      <Header />
      <ShHero />
      <ShModelo />
      <ShTabela />
      <ShCalculadora />
      <ShArquitetura />
      <ShCTA />
      <Footer />
    </main>
  );
}
