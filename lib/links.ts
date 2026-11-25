import { MessageCircle } from "lucide-react";
import { InstagramIcon, type IconComponent } from "@/components/Icons";

export type LinkItem = {
  label: string;
  subtitle: string;
  href: string;
  icon: IconComponent;
  /** classes Tailwind do gradiente do ícone */
  gradient: string;
  /** cor do glow no hover */
  glowColor: string;
  external: boolean;
};

export const PHONE_DISPLAY = "(43) 99608-4754";
export const PHONE_TEL = "tel:+5543996084754";
export const INSTAGRAM_URL = "https://www.instagram.com/frescoarss/";

const WHATSAPP_TEXT = "Olá! Vim pelo link da bio, gostaria de mais informações.";
export const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=5543996084754&text=${encodeURIComponent(WHATSAPP_TEXT)}`;

/** Única fonte de verdade dos botões — a ordem aqui é a ordem na página. */
export const links: LinkItem[] = [
  {
    label: "Fale pelo WhatsApp",
    subtitle: "Orçamento rápido e sem compromisso",
    href: WHATSAPP_URL,
    icon: MessageCircle,
    gradient: "from-green to-green-dark",
    glowColor: "var(--green-glow)",
    external: true,
  },
  {
    label: "Instagram",
    subtitle: "Acompanhe nosso trabalho",
    href: INSTAGRAM_URL,
    icon: InstagramIcon,
    gradient: "from-insta to-insta-dark",
    glowColor: "var(--insta-glow)",
    external: true,
  },
];
