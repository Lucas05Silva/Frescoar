"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Wind } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/links";
import { reveal } from "@/lib/motion";

export function Footer() {
  return (
    <motion.footer
      data-reveal
      className="relative mt-auto w-full pt-12 pb-10 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={reveal(0.9, 0.8)}
    >
      <Wind
        aria-hidden
        size={60}
        className="pointer-events-none absolute right-2 bottom-6 text-white opacity-[0.03]"
      />

      <div aria-hidden className="cyan-rule mx-auto mb-7 w-3/5" />

      <a
        href={PHONE_TEL}
        className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-[14px] font-medium text-cyan-light transition-colors duration-300 hover:text-white"
        aria-label={`Ligar para ${PHONE_DISPLAY}`}
      >
        <Phone aria-hidden size={15} />
        {PHONE_DISPLAY}
      </a>

      <p className="mt-1 inline-flex w-full items-center justify-center gap-1.5 text-[12px] text-ink-soft">
        <MapPin aria-hidden size={13} />
        Londrina — PR
      </p>

      <p className="mt-5 text-[11px] text-ink-soft/50">
        © 2026 Fresco<span className="text-green/70">AR</span>
      </p>
    </motion.footer>
  );
}
