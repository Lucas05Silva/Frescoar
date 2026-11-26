"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";

/** Cartão off-white que contém todos os elementos da página. */
export function Panel({ children }: { children: ReactNode }) {
  return (
    <motion.div
      data-reveal
      className="panel"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={reveal(0)}
    >
      {children}
    </motion.div>
  );
}
