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
    images: [
      {
        url: "https://d8j0ntlcm91z4.cloudfront.net/user_3Am4Jv4nSnw3p3H5eVz5c4jDLKs/hf_20260713_193947_c566a573-9fe4-4ac7-a7be-611e2728ae3f.png",
        width: 2048,
        height: 2048,
        alt: "Pixel Commerce — plataforma em seis camadas",
      },
    ],
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
