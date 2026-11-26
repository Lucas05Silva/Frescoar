"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { CITY } from "@/lib/links";
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
      <p className="inline-flex items-center gap-1.5 text-[12px] text-ink-muted">
        <MapPin aria-hidden size={14} />
        {CITY}
      </p>
    </motion.address>
  );
}
