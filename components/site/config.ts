// ⚙️ AJUSTE AQUI: dados de contato e estatísticas do site institucional
export const BUILD = "1.11.0";

export const SITE = {
  whatsapp: "5527996520301",
  whatsappDisplay: "+55 27 99652-0301",
  instagram: "https://www.instagram.com/pixelpartnersbr/",
  cnpj: "52.094.031/0001-52",
  stats: {
    clientes: 200,     // clientes atendidos
    anos: 8,           // anos de mercado
    midiaMi: 10,       // TODO: R$ milhões em mídia gerenciada — confirmar
    certificacoes: 2,  // Google + Meta
  },
};
// Render 3D da pilha Pixel Commerce (gerado via Higgsfield, upscale 2K).
// 💡 Para servir localmente: baixe o PNG desta URL, salve como public/images/pixel-stack.png
//    e troque o valor abaixo por "/images/pixel-stack.png".
export const STACK_IMG =
  "https://d8j0ntlcm91z4.cloudfront.net/user_3Am4Jv4nSnw3p3H5eVz5c4jDLKs/hf_20260713_193947_c566a573-9fe4-4ac7-a7be-611e2728ae3f.png";

// Light trails âmbar (fundo dos CTAs). Mesmo esquema: baixar depois para public/images/light-trails.png
export const TRAILS_IMG =
  "https://d8j0ntlcm91z4.cloudfront.net/user_3Am4Jv4nSnw3p3H5eVz5c4jDLKs/hf_20260713_210830_7b1661e4-06a1-44d8-9144-3c6071590317.png";

// Loop de vídeo das light trails (fundo animado dos CTAs). Fallback: TRAILS_IMG.
export const TRAILS_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_3Am4Jv4nSnw3p3H5eVz5c4jDLKs/hf_20260713_210802_7aacfd54-422c-41bc-bfd8-a88683aae2a1.mp4";

export const waLink = (msg: string) =>
  `https://api.whatsapp.com/send/?phone=${SITE.whatsapp}&text=${encodeURIComponent(msg)}&type=phone_number&app_absent=0`;
