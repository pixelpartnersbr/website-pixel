import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FdHero, FdModelo, FdTabela, FdCalculadora, FdArquitetura, FdCTA } from "@/components/comparativos/FidVsFidelizar";

export const metadata: Metadata = {
  title: "Fidelização + Cashback vs Fidelizar+: comparativo honesto — Pixel Commerce",
  description:
    "Preço fixo com base ilimitada vs mensalidade por faixa de clientes. Pontos, cashback, expiração e integração com CRM — a comparação ponto a ponto, com calculadora.",
};

export default function FidVsFidelizarPage() {
  return (
    <main>
      <Header />
      <FdHero />
      <FdModelo />
      <FdTabela />
      <FdCalculadora />
      <FdArquitetura />
      <FdCTA />
      <Footer />
    </main>
  );
}
