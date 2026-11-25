# MKlink · FrescoAR

Link-in-bio da **FrescoAR**: instalação, manutenção e limpeza de ar-condicionado em Londrina — PR.
Direção visual "Arctic Tech": navy profundo, accent cyan, verde para ação, glassmorphism e grain.

## Stack

- Next.js 16 (App Router, Turbopack) + TypeScript estrito
- Tailwind CSS v4: tokens em `app/globals.css` (`:root` + `@theme`), sem `tailwind.config.ts`
- Framer Motion (entrada em stagger) + keyframes CSS (idle), tudo desligado com `prefers-reduced-motion`
- Lucide React (ícones) + `components/Icons.tsx` (Instagram, que o Lucide v1 não tem mais)
- `next/font`: Big Shoulders (corte Display via `opsz` 72) + Instrument Sans

## Estrutura

```
app/
  layout.tsx            metadata, OG, fontes, lang pt-BR, theme-color
  page.tsx              Hero + LinkList + Footer, blobs de fundo
  globals.css           tokens, grain, keyframes, estilos dos cards
  opengraph-image.tsx   imagem OG 1200×630 gerada no build
  icon.png / apple-icon.png
components/             Hero, LinkButton, LinkList, Footer, Icons
lib/links.ts            ÚNICA fonte de verdade dos botões, telefone e URLs
lib/motion.ts           transições compartilhadas
public/logo.jpg         logo (recorte quadrado do arquivo original)
```

Para mudar um botão, texto ou URL, edite só `lib/links.ts`.
Para trocar a logo, substitua `public/logo.jpg` por uma imagem **quadrada** com o wordmark centralizado (e regenere `app/icon.png` / `app/apple-icon.png`).

## Desenvolvimento

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run format     # prettier
```

> Nesta máquina, os comandos npm precisam de `NODE_OPTIONS=--use-system-ca`.

## Build

```bash
npm run build
npm start
```

## Deploy (Vercel)

1. Em vercel.com, **Add New → Project** e importe o repositório `Lucas05Silva/Frescoar`.
2. O framework é detectado como Next.js: não precisa mudar nada.
3. Opcional: defina `NEXT_PUBLIC_SITE_URL` com a URL final (ex.: `https://frescoar.vercel.app`) para as URLs absolutas do Open Graph.
4. Deploy. Cada push na `main` gera um novo deploy.
