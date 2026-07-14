import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AtHero, AtProblema, AtComoFunciona, AtFuncionalidades, AtCache, AtConversao, AtCusto, AtEcossistema, AtCTA } from "@/components/PpAtacado";

export const metadata: Metadata = {
  title: "Módulo Atacadista — atacado e varejo na mesma loja WooCommerce | Pixel Commerce",
  description:
    "Preços B2B, quantidade mínima e checkout próprio para atacadistas aprovados por CNPJ — na mesma loja, com estoque único e preço à prova de cache. Sem segundo site.",
};

export default function PpAtacadoPage() {
  return (
    <main>
      <Header />
      <AtHero />
      <AtProblema />
      <AtComoFunciona />
      <AtFuncionalidades />
      <AtCache />
      <AtConversao />
      <AtCusto />
      <AtEcossistema />
      <AtCTA />
      <Footer />
    </main>
  );
}
