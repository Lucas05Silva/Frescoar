import type { CSSProperties } from "react";
import { ChevronRight } from "lucide-react";
import type { LinkItem } from "@/lib/links";

export function LinkButton({ item }: { item: LinkItem }) {
  const { label, subtitle, href, icon: Icon, accentColor, external } = item;

  return (
    <a
      href={href}
      className="link-card"
      style={{ "--accent": accentColor } as CSSProperties}
      aria-label={external ? `${label}: ${subtitle} (abre em nova aba)` : `${label}: ${subtitle}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-white/12">
        <Icon size={20} strokeWidth={2} aria-hidden />
      </span>

      <span className="flex min-w-0 flex-col text-left">
        <span className="text-[15px] leading-tight font-semibold">{label}</span>
        <span className="mt-0.5 text-[12px] leading-snug text-cyan-light/80">{subtitle}</span>
      </span>

      <ChevronRight aria-hidden size={16} className="chevron" />
    </a>
  );
}
