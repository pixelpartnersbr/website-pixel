import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrHero, TrProblema, TrAutoatendimento, TrGestao, TrInteligencia, TrPorQueFaqCta } from "@/components/Trocas";

export const metadata: Metadata = {
  title: "Central de Trocas — trocas e devoluções com autoatendimento para WooCommerce | Pixel Commerce",
  description:
    "O cliente abre a troca sozinho (sem senha), a equipe gerencia num painel com timeline, e as automações emitem vale-troca, reservam estoque e bloqueiam abuso. Dentro da sua loja.",
};

export default function TrocasPage() {
  return (
    <main>
      <Header />
      <TrHero />
      <TrProblema />
      <TrAutoatendimento />
      <TrGestao />
      <TrInteligencia />
      <TrPorQueFaqCta />
      <Footer />
    </main>
  );
}
