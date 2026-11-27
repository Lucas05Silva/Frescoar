import { MessageCircle } from "lucide-react";
import { InstagramIcon, type IconComponent } from "@/components/Icons";

export type LinkItem = {
  label: string;
  subtitle: string;
  href: string;
  icon: IconComponent;
  /** cor (ou gradiente) da barra lateral de 3px */
  accentColor: string;
  external: boolean;
};

export const CITY = "Londrina — PR";
export const INSTAGRAM_URL = "https://www.instagram.com/frescoarss/";

const WHATSAPP_TEXT = "Olá! Vim pelo link da bio, gostaria de mais informações.";
export const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=5543996084754&text=${encodeURIComponent(WHATSAPP_TEXT)}`;

/** Única fonte de verdade dos botões: a ordem aqui é a ordem na página. */
export const links: LinkItem[] = [
  {
    label: "Fale pelo WhatsApp",
    subtitle: "Orçamento rápido e sem compromisso",
    href: WHATSAPP_URL,
    icon: MessageCircle,
    accentColor: "var(--green)",
    external: true,
  },
  {
    label: "Instagram",
    subtitle: "Acompanhe nosso trabalho",
    href: INSTAGRAM_URL,
    icon: InstagramIcon,
    accentColor: "linear-gradient(180deg, var(--insta), var(--insta-dark))",
    external: true,
  },
];
