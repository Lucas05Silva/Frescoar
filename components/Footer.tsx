"use client";

import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";

export function Footer() {
  return (
    <motion.footer
      data-reveal
      className="mt-auto pt-5 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={reveal(0.85)}
    >
      <div aria-hidden className="cyan-rule mx-auto mb-5 w-3/5" />
      <p className="text-[11px] text-ink-muted">
        © 2026 Fresco<span className="text-green-dark">AR</span>
      </p>
    </motion.footer>
  );
}
