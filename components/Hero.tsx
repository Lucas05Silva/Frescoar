"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { reveal } from "@/lib/motion";

export function Hero() {
  return (
    <header className="flex flex-col items-center text-center">
      <motion.div
        data-reveal
        className="relative h-[110px] w-[110px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={reveal(0.15)}
      >
        <span aria-hidden className="logo-halo absolute -inset-[7px] rounded-full" />
        <div className="logo-ring relative h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-navy to-navy-mid">
          {/* Logo oficial. Para trocar, substitua public/logo.jpg (quadrada, wordmark centralizado) */}
          <Image
            src="/logo.jpg"
            alt="Logo FrescoAR: instalação, manutenção e limpeza de ar-condicionado"
            fill
            sizes="110px"
            preload
            className="object-cover object-[50%_55%]"
          />
        </div>
      </motion.div>

      <motion.h1
        data-reveal
        className="mt-6 [@media(max-height:700px)]:mt-5 font-display text-[30px] leading-none font-bold tracking-[-0.035em] whitespace-nowrap"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reveal(0.25)}
      >
        <span className="text-navy">Fresco</span>
        <span className="-ml-[0.02em] text-green">AR</span>
      </motion.h1>

      <motion.p
        data-reveal
        className="mt-3 text-[11px] font-medium tracking-[3px] whitespace-nowrap text-ink-soft uppercase max-[399px]:tracking-[2px] max-[359px]:text-[10.5px] max-[359px]:tracking-[1.2px]"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reveal(0.35)}
      >
        Instalação · Manutenção · Limpeza
      </motion.p>

      <motion.p
        data-reveal
        className="mt-4 text-[14px] leading-relaxed whitespace-nowrap text-ink-soft max-[420px]:text-[13px] max-[379px]:text-[11.75px] max-[359px]:text-[11px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={reveal(0.4)}
      >
        Conforto e qualidade do ar para sua casa e empresa.
      </motion.p>
    </header>
  );
}
