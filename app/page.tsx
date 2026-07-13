import SiteHeader from "@/components/site/SiteHeader";
import SiteHero from "@/components/site/SiteHero";
import Sobre from "@/components/site/Sobre";
import Servicos from "@/components/site/Servicos";
import Diferenciais from "@/components/site/Diferenciais";
import PlataformaTeaser from "@/components/site/PlataformaTeaser";
import Contato from "@/components/site/Contato";
import SiteFooter from "@/components/site/SiteFooter";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <SiteHero />
      <Sobre />
      <Servicos />
      <PlataformaTeaser />
      <Diferenciais />
      <Contato />
      <SiteFooter />
    </main>
  );
}
