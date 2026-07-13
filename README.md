# Pixel Commerce — Landing Page

Landing page da plataforma Pixel Commerce (Pixel Partners).

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (animações e transições)
- Lenis (smooth scroll)

## Rodar localmente
```bash
npm install
npm run dev
```

## Deploy na Vercel
Suba o repositório e importe na Vercel — zero configuração necessária
(build command e output detectados automaticamente). A página é 100% estática.

## Estrutura de páginas
- `/` — site institucional Pixel Partners
- `/plataforma` — landing da plataforma Pixel Commerce
- `/planos` — planos e preços
- `/whatsapp` — proposta comercial PP Whatsapp (WhatsApp oficial)
- `/whatsapp/valor` — valor do canal recurso por recurso (com calculadora)

## ⚠️ Ajustar antes de publicar
- `components/site/config.ts` — WhatsApp real, e-mail e estatísticas (mídia gerenciada)
- `components/CTA.tsx` — link do botão de diagnóstico

## Onde ajustar conteúdo
- `components/Numeros.tsx` — cards de números e faixa 0% de comissão
- `components/Plataforma.tsx` — camadas e módulos (array `camadas`)
- `components/QueueGuard.tsx` — spotlight do QueueGuard
- `components/Comparativo.tsx` — tabela comparativa (array `rows`)
- `components/CTA.tsx` — link do botão de contato

## Acessibilidade / performance
- `prefers-reduced-motion` respeitado (Lenis, contadores e demo do QueueGuard desligam)
- Foco visível em links e botões
- Página estática pré-renderizada (SSG)
