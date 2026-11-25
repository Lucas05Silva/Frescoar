import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Instrument_Sans } from "next/font/google";
import "./globals.css";

/* "Big Shoulders Display" hoje é servida pelo Google como "Big Shoulders" com eixo opsz;
   o corte Display é ativado via font-variation-settings "opsz" 72 em .font-display */
const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  fallback: ["Impact", "Arial Narrow", "sans-serif"],
  adjustFontFallback: false,
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const TITLE = "FrescoAR — Links";
const DESCRIPTION =
  "Instalação, manutenção e limpeza de ar-condicionado em Londrina — PR. Fale conosco pelo WhatsApp!";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "FrescoAR",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "pt_BR",
    siteName: "FrescoAR",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B2559",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${bigShoulders.variable} ${instrumentSans.variable}`}>
      <head>
        {/* Sem JS: mostra tudo que as animações de entrada esconderiam */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
