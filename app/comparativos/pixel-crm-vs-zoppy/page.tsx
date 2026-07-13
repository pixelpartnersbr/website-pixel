import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CvHero, CvModelo, CvTabela, CvCalculadora, CvArquitetura, CvCTA } from "@/components/comparativos/CrmVsZoppy";

export const metadata: Metadata = {
  title: "Pixel CRM vs Zoppy: comparativo honesto de CRM para e-commerce — Pixel Commerce",
  description:
    "RFM, cashback, automações e campanhas: o que cada um entrega, quanto custa e por que a arquitetura nativa no WooCommerce muda a conta. Comparativo ponto a ponto.",
};

export default function CrmVsZoppyPage() {
  return (
    <main>
      <Header />
      <CvHero />
      <CvModelo />
      <CvTabela />
      <CvCalculadora />
      <CvArquitetura />
      <CvCTA />
      <Footer />
    </main>
  );
}
