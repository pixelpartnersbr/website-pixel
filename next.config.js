/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // renomeação Pixel Commerce -> Shopixel (jul/2026)
      { source: "/comparativos/pixel-commerce-vs-shopify", destination: "/comparativos/shopixel-vs-shopify", permanent: true },
      // rota antiga do Módulo Atacadista
      { source: "/pp-atacado", destination: "/atacadista", permanent: true },
    ];
  },
};

module.exports = nextConfig;
