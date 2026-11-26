# MKlink · FrescoAR

Link-in-bio da **FrescoAR**: instalação, manutenção e limpeza de ar-condicionado em Londrina — PR.
Direção visual "Clean Frost": fundo bege acinzentado (#E8E4DD), painel off-white flutuante, botões navy sólidos com barra accent lateral.

## Stack

- Next.js 16 (App Router, Turbopack) + TypeScript estrito
- Tailwind CSS v4: tokens em `app/globals.css` (`:root` + `@theme`), sem `tailwind.config.ts`
- Framer Motion (entrada em stagger de 400ms; sem animação idle), desligado com `prefers-reduced-motion`
- Lucide React (ícones) + `components/Icons.tsx` (Instagram, que o Lucide v1 não tem mais)
- `next/font`: Outfit (display) + Plus Jakarta Sans (texto)

## Estrutura

```
app/
  layout.tsx            metadata, OG, fontes, lang pt-BR, theme-color
  page.tsx              Panel > Hero + LinkList + ContactInfo + Footer
  globals.css           tokens, painel, botões, reduced-motion
  opengraph-image.tsx   imagem OG 1200×630 gerada no build
components/             Panel, Hero, LinkButton, LinkList, ContactInfo, Footer, Icons
lib/links.ts            ÚNICA fonte de verdade: botões, cidade, URLs
lib/motion.ts           transição de entrada compartilhada
public/logo.jpg         logo (recorte quadrado do arquivo original)
```

Para mudar um botão, texto ou URL, edite só `lib/links.ts`.
Para trocar a logo, substitua `public/logo.jpg` por uma imagem **quadrada** com o wordmark centralizado.

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
3. Defina `NEXT_PUBLIC_SITE_URL` com a URL final (ex.: `https://frescoar.vercel.app`) para as URLs absolutas do Open Graph.
4. Deploy. Cada push na `main` gera um novo deploy.
