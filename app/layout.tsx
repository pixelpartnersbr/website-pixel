import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Pixel Partners — Tecnologia e Marketing para crescer de verdade",
  description:
    "Agência boutique de desenvolvimento web e marketing digital. Criadora da plataforma Pixel Commerce: WooCommerce com segurança, inteligência e automação proprietárias.",
  metadataBase: new URL("https://pixelpartners.com.br"),
  openGraph: {
    title: "Pixel Partners",
    description:
      "Tecnologia própria, marketing certificado e a plataforma Pixel Commerce. Code. Connect. Create.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800;900&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-navy-950 font-body text-ink antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
