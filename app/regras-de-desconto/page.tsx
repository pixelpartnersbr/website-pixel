import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RdHero, RdMotor, RdBrinde, RdPorQue, RdFaqCta } from "@/components/RegrasDesconto";

export const metadata: Metadata = {
  title: "Regras de Desconto — precificação dinâmica e brinde por valor para WooCommerce | Pixel Commerce",
  description:
    "Motor de descontos condicionais (BOGO, tabela de volume, regras por cliente, tempo e localização) + brinde automático por valor de compra com barra de progresso, integrado ao carrinho lateral.",
};

export default function RegrasDescontoPage() {
  return (
    <main>
      <Header />
      <RdHero />
      <RdMotor />
      <RdBrinde />
      <RdPorQue />
      <RdFaqCta />
      <Footer />
    </main>
  );
}
