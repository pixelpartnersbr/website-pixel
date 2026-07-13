// ⚙️ AJUSTE AQUI: dados de contato e estatísticas do site institucional
export const SITE = {
  whatsapp: "5527999999999", // TODO: número real com DDI+DDD
  email: "contato@pixelpartners.com.br", // TODO: confirmar e-mail
  instagram: "https://www.instagram.com/pixelpartnersbr/",
  cnpj: "52.094.031/0001-52",
  stats: {
    clientes: 200,     // clientes atendidos
    anos: 8,           // anos de mercado
    midiaMi: 10,       // TODO: R$ milhões em mídia gerenciada — confirmar
    certificacoes: 2,  // Google + Meta
  },
};
export const waLink = (msg: string) =>
  `https://api.whatsapp.com/send/?phone=${SITE.whatsapp}&text=${encodeURIComponent(msg)}&type=phone_number&app_absent=0`;
