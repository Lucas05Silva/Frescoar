import type { Transition } from "framer-motion";

/** Entrada padrão: 400ms, ease-out, com o delay da tabela de stagger. */
export const reveal = (delay: number): Transition => ({
  delay,
  duration: 0.4,
  ease: "easeOut",
});
