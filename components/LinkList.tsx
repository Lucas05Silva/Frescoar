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
        className="cyan-rule mx-auto my-6 w-3/5 [@media(max-height:700px)]:my-4"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={reveal(0.5)}
      />

      <ul className="mx-auto flex max-w-[380px] flex-col gap-3">
        {links.map((item, i) => (
          <motion.li
            key={item.href}
            data-reveal
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reveal(0.55 + i * 0.1)}
          >
            <LinkButton item={item} />
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
