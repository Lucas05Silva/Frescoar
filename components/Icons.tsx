import type { ComponentType, SVGProps } from "react";

type IconProps = Omit<SVGProps<SVGSVGElement>, "ref"> & { size?: number | string };

/** Contrato mínimo compartilhado entre ícones Lucide e ícones próprios. */
export type IconComponent = ComponentType<{
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
  "aria-hidden"?: boolean;
}>;

/** Instagram em traço, no mesmo estilo do Lucide (que removeu os ícones de marca na v1). */
export function InstagramIcon({ size = 24, strokeWidth = 2, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
