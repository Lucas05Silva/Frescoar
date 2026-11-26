"use client";

import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { CITY, PHONE_DISPLAY, PHONE_TEL } from "@/lib/links";
import { reveal } from "@/lib/motion";

export function ContactInfo() {
  return (
    <motion.address
      data-reveal
      className="mt-7 flex flex-col items-center not-italic [@media(max-height:700px)]:mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={reveal(0.75)}
    >
      <a
        href={PHONE_TEL}
        className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-[14px] font-medium text-ink-soft transition-colors duration-200 hover:text-navy"
        aria-label={`Ligar para ${PHONE_DISPLAY}`}
      >
        <Phone aria-hidden size={14} className="text-ink-muted" />
        {PHONE_DISPLAY}
      </a>
      <p className="inline-flex items-center gap-1.5 text-[12px] text-ink-muted">
        <MapPin aria-hidden size={14} />
        {CITY}
      </p>
    </motion.address>
  );
}
