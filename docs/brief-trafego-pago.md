# Tráfego Pago para Negócios Locais — Brief da Página (Next.js)

> Uso deste documento: briefing para montar a página `/trafego-pago` (ou rota equivalente) dentro do site institucional da Pixel Partners em Next.js — a mesma stack e o mesmo padrão visual das demais páginas do Pixel Commerce (navy + âmbar, `Reveal`, cards `spot`, `wrap`, componentes em `components/`, rota em `app/`). Esta página **não** é um módulo do Pixel Commerce — é a oferta de agência tradicional para negócios locais (clínicas, escolas, comércio, indústria) que não têm loja virtual.

**Status:** apenas debatido e aprovado. Nenhum código foi criado ainda. Execução só mediante comando explícito ("dalee" ou similar) em conversa futura.

---

## 1. Posicionamento

**Nome da oferta:** Pacote All-in-One de Tráfego Pago (nome de trabalho — Lucas pode ajustar)

**Para quem é:** negócios locais/físicos sem e-commerce — clínicas, escolas (ex.: escola náutica), indústria, comércio de bairro. Público-alvo real já testado pela Pixel: Dr. Hugo Côrtes (nutrologia), LZ Marine (escola náutica), Vila Betume (asfalto).

**Diferença crucial de tom vs. as páginas de módulo do Pixel Commerce:** o público aqui é "dono de negócio local", não "founder/gestor de e-commerce". Menos jargão de funil, mais linguagem de resultado direto e presença profissional online.

**Onde a página vive:** site institucional (pixelpartners.com.br), linkada pelo card "Tráfego Pago" que já existe em `/#servicos` na home institucional. Não deve aparecer na navegação do Pixel Commerce nem nos comparativos de e-commerce.

---

## 2. O pacote (conteúdo já aprovado, extraído do material existente)

Seis entregas fixas, sempre juntas — apresentar como cards numerados 01–06:

1. **Google Ads** — Gestão completa de campanhas: criação, otimização contínua e relatórios detalhados de desempenho no Google.
2. **Hospedagem + SSL** — Infraestrutura segura e estável: servidor dedicado com alta disponibilidade, SSL incluso, backups automáticos e monitoramento.
3. **Suporte Técnico** — Atendimento especializado: suporte ágil para demandas do site, integrações e ajustes técnicos sempre que necessário.
4. **Webdesigner** — Design e manutenção do site: atualizações visuais, criação de páginas e manutenção do layout para manter a presença sempre moderna.
5. **E-mails Corporativos** — Ilimitados com o domínio do cliente: criação de contas profissionais no domínio, para toda a equipe, com painel de gerenciamento.
6. **Relatórios Mensais** — Transparência e resultados: relatórios completos com métricas de desempenho, evolução das campanhas e insights estratégicos todo mês.

---

## 3. Preço e régua de investimento em mídia (decisão fechada no debate)

- **Preço do pacote: R$ 1.250/mês fixo.** Preço público (sem "sob consulta" para o pacote-base).
- **Regra de escopo:** o valor de R$ 1.250 cobre o all-in-one completo **com gestão de até R$ 5.000/mês investidos em Google Ads** (verba de mídia paga diretamente pelo cliente à plataforma de anúncios, fora do pacote).
- **Acima de R$ 5.000/mês em Google Ads:** não existe segundo degrau de tabela pública. Vira **proposta sob consulta** — falar com a Pixel.
- **Racional:** a gestão de campanha escala com o volume de verba gerenciada (mais otimização, mais testes, mais trabalho de análise), enquanto os outros 5 itens do pacote são custo fixo da agência independente do budget de mídia. Por isso só o item "Google Ads" tem teto — o resto do pacote não muda com o tamanho da verba.
- **YouTube Ads — add-on separado, R$ 450/mês.** Cobrado à parte porque é outra disciplina de campanha (in-stream, discovery, otimização por audiência/retenção de view diferente de Search), não apenas "mais budget na mesma campanha". Escopo **apenas gestão de mídia — sem produção de criativo/vídeo**. Se o cliente quiser produção de vídeo, isso pertence a uma frente futura de Redes Sociais/Mídias (ver seção 6), não a este pacote.
- YouTube não tem régua de verba definida nesta rodada (a maioria dos negócios locais não tem budget robusto de vídeo); tratar como módulo de preço fixo por ora.

**Resumo do investimento a publicar na página:**

| Item | Valor | Escopo |
|---|---|---|
| Pacote All-in-One | R$ 1.250/mês | Fixo, inclui gestão de até R$ 5.000/mês em Google Ads |
| Acima de R$ 5.000/mês em Ads | Sob consulta | Proposta personalizada |
| YouTube Ads (add-on) | R$ 450/mês | Gestão de mídia apenas, sem produção de criativo |

---

## 4. Estrutura sugerida da página

1. **Hero** — pitch para dono de negócio local; CTA principal tipo "Quero minha presença online completa" (via WhatsApp, seguindo o padrão `waLink` do restante do site).
2. **Os 6 itens do pacote** — cards 01–06 com o texto da seção 2, mantendo a copy que já existe (está aprovada e funcionando).
3. **Investimento** — bloco com R$ 1.250 fixo + a régua de R$ 5.000 em Ads explicada com clareza (evitar parecer "letra miúda"; a régua deve soar como transparência, não pegadinha) + o add-on de YouTube como card separado.
4. **Para quem é** — ancorar nos cases reais (clínica/saúde, escola náutica, indústria/comércio), sem citar nomes de clientes a menos que Lucas autorize explicitamente.
5. **FAQ** — sugestões de perguntas: "o que acontece se eu passar de R$ 5.000/mês em Ads?", "YouTube já vem incluso?", "tem fidelidade?", "preciso ter site pronto?".
6. **CTA final** — reforço do preço fixo e da transparência, sem comparação com concorrente (esta página não deve ter comparativo — é proposta de valor direta, diferente do padrão dos módulos do Pixel Commerce).

**Fora de escopo desta página (não incluir):**
- Calculadora de verba/ROI — fica para a futura página de Tráfego Pago para Lojas Virtuais (ver seção 6).
- Comparativo com concorrente/agência — não há material de pesquisa aprovado para isso ainda.
- Qualquer menção a "pedidos/mês", planos Start/Growth/Scale ou qualquer terminologia do Pixel Commerce.

---

## 5. Tom e diferenças em relação às páginas de módulo já existentes

- Público lê como "empresário local", não como "founder de e-commerce" — ajustar vocabulário (evitar "conversão", "ticket médio", "churn"; preferir "clientes", "resultado", "presença online").
- Sem mock de dashboard/produto codado (não há produto de software aqui, é serviço de agência) — usar fotografia/ilustração de negócio local ou manter simples com ícones, se preferir não gerar imagem.
- Sem seção de "comparativo de custo" nem "diferenciais vs concorrente" — não é briga de modelo, é proposta direta.

---

## 6. Backlog relacionado (mencionado no debate, não fazer agora)

- **Tráfego Pago para Lojas Virtuais** (e-commerce/WooCommerce) — projeto futuro e separado, com **calculadora baseada em verba investida**, provavelmente linkado ao ecossistema do Pixel Commerce em vez do institucional. Não confundir com esta página.
- **Redes Sociais / Produção de Conteúdo** — outra página futura separada, que absorve o escopo de "produção de criativo/vídeo" que foi deliberadamente excluído do add-on de YouTube Ads desta página. Terá calculadora própria.

---

## 7. Decisões já fechadas (não reabrir debate sem motivo novo)

- ✅ Página vive no site institucional, não no Pixel Commerce.
- ✅ Preço do pacote: R$ 1.250/mês fixo, público.
- ✅ Teto único de R$ 5.000/mês em Google Ads incluso; acima disso vira consulta (sem segundo degrau público).
- ✅ YouTube Ads como add-on separado: R$ 450/mês, gestão de mídia apenas, sem produção de conteúdo.
- ✅ Produção de conteúdo/vídeo fica para a futura frente de Redes Sociais.
- ✅ Calculadora de verba fica para a futura página de Tráfego Pago para Lojas Virtuais — não entra aqui.

---

*Documento gerado a partir do debate em conversa com Lucas (Pixel Partners) em julho/2026, para orientar a implementação futura da página `/trafego-pago` em Next.js, no mesmo projeto e padrão visual do Pixel Commerce.*
