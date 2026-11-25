import type { Transition } from "framer-motion";

export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Transição de entrada padrão, com o delay da tabela de stagger. */
export const reveal = (delay: number, duration = 0.7): Transition => ({
  delay,
  duration,
  ease: EASE_OUT,
});
