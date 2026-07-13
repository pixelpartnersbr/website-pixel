import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Problema from "@/components/Problema";
import Manifesto from "@/components/Manifesto";
import Numeros from "@/components/Numeros";
import Plataforma from "@/components/Plataforma";
import QueueGuard from "@/components/QueueGuard";
import Comparativo from "@/components/Comparativo";
import Prova from "@/components/Prova";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pixel Commerce — A plataforma da Pixel Partners",
  description:
    "A camada proprietária de segurança, inteligência e automação da Pixel Partners, rodando sobre WooCommerce e na infraestrutura PrimePress.",
};

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Marquee />
      <Problema />
      <Manifesto />
      <Numeros />
      <Plataforma />
      <QueueGuard />
      <Comparativo />
      <Prova />
      <CTA />
      <Footer />
    </main>
  );
}
