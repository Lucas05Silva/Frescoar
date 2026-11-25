"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/links";
import { reveal } from "@/lib/motion";
import { LinkButton } from "./LinkButton";

export function LinkList() {
  return (
    <nav aria-label="Links da FrescoAR" className="w-full">
      <motion.div
        data-reveal
        aria-hidden
        className="cyan-rule mx-auto mb-8 w-4/5 origin-center"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={reveal(0.5, 0.9)}
      />

      <ul className="flex flex-col gap-[14px]">
        {links.map((item, i) => (
          <motion.li
            key={item.href}
            data-reveal
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reveal(0.6 + i * 0.1)}
          >
            <LinkButton item={item} />
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
