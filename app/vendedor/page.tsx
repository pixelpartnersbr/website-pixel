import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { VdHero, VdProblema, VdFuncionalidades, VdDiferenciais, VdCalculadora, VdComparativo, VdFaqCta } from "@/components/Vendedor";

export const metadata: Metadata = {
  title: "Código de Vendedor — atribuição de vendas sem desconto para WooCommerce | Pixel Commerce",
  description:
    "Campo opcional no checkout, ranking com vendas líquidas reais e comissão fechada em minutos. Atribua cada venda ao vendedor certo sem transformar sua equipe em cupom.",
};

export default function VendedorPage() {
  return (
    <main>
      <Header />
      <VdHero />
      <VdProblema />
      <VdFuncionalidades />
      <VdDiferenciais />
      <VdCalculadora />
      <VdComparativo />
      <VdFaqCta />
      <Footer />
    </main>
  );
}
