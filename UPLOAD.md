# Como subir pelo GitHub (upload web) sem quebrar nada

1. Extraia este ZIP no seu computador e **entre na pasta** extraída.
2. No GitHub, no repositório: **Add file → Upload files**.
3. Selecione TUDO que está dentro da pasta (as pastas `app` e `components`
   + os arquivos soltos) e **ARRASTE** para a área de upload do GitHub.
   ⚠ Arraste as PASTAS — não use o botão "choose your files", que achata tudo.
4. Commit direto na `main`. A Vercel builda sozinha.

Este projeto é imune aos arquivos soltos que ficaram na raiz do repo de
uploads anteriores (Contato.tsx, page (1).tsx, etc.): o build ignora tudo
que estiver fora de `app/` e `components/`. Não precisa apagar nada —
mas se quiser limpar visualmente, pode deletar os .tsx da raiz pela
interface do GitHub quando sobrar um tempo.

Conferência pós-deploy: no build log da Vercel, a tabela final de rotas
deve listar:  /  /planos  /plataforma  /whatsapp  /whatsapp/valor
