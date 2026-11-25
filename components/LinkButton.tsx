import type { CSSProperties } from "react";
import { ChevronRight } from "lucide-react";
import type { LinkItem } from "@/lib/links";

type Props = { item: LinkItem };

export function LinkButton({ item }: Props) {
  const { label, subtitle, href, icon: Icon, gradient, glowColor, external } = item;

  return (
    <a
      href={href}
      className="link-card group"
      style={{ "--glow": glowColor } as CSSProperties}
      aria-label={external ? `${label} (abre em nova aba)` : label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span
        className={`icon-tile flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[14px] bg-gradient-to-br ${gradient} text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_6px_16px_var(--shadow-navy)]`}
      >
        <Icon size={24} strokeWidth={2} aria-hidden />
      </span>

      <span className="flex min-w-0 flex-1 flex-col text-left">
        <span className="text-[16px] leading-tight font-semibold text-balance text-white">
          {label}
        </span>
        <span className="mt-1 text-[13px] leading-snug text-pretty text-ink-soft">{subtitle}</span>
      </span>

      <ChevronRight aria-hidden size={16} className="chevron shrink-0 text-white" />
    </a>
  );
}
