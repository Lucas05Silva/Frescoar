"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Snowflake, Thermometer } from "lucide-react";
import { reveal } from "@/lib/motion";

/** Curva orgânica da base do header (coordenadas 0–1 do próprio header). */
const CURVE = "M0,0 H1 V0.86 C0.82,0.97 0.64,1 0.46,0.965 C0.29,0.93 0.15,0.9 0,0.935 Z";
const CURVE_EDGE = "M0,0.935 C0.15,0.9 0.29,0.93 0.46,0.965 C0.64,1 0.82,0.97 1,0.86";

export function Hero() {
  return (
    <header className="relative isolate w-full overflow-hidden">
      <svg width="0" height="0" aria-hidden className="absolute">
        <clipPath id="hero-curve" clipPathUnits="objectBoundingBox">
          <path d={CURVE} />
        </clipPath>
      </svg>

      {/* Fundo do header + glow de ar frio */}
      <div className="hero-shell absolute inset-0 -z-10">
        <motion.div
          data-reveal
          aria-hidden
          className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-cyan/20 blur-[90px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={reveal(0, 1.2)}
        />
      </div>

      {/* Linha cyan acompanhando a curva */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
        viewBox="0 0 1 1"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="edge" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="var(--cyan)" stopOpacity="0" />
            <stop offset="0.5" stopColor="var(--cyan)" stopOpacity="0.7" />
            <stop offset="1" stopColor="var(--cyan)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d={CURVE_EDGE}
          fill="none"
          stroke="url(#edge)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Flocos decorativos — só textura */}
      <Snowflake
        aria-hidden
        className="absolute top-8 left-[6%] -z-10 text-white opacity-[0.04]"
        size={96}
        style={{ rotate: "15deg" }}
      />
      <Snowflake
        aria-hidden
        className="absolute right-[8%] bottom-16 -z-10 text-white opacity-[0.04]"
        size={60}
        style={{ rotate: "-20deg" }}
      />

      <div className="mx-auto flex max-w-[440px] flex-col items-center px-5 pt-14 pb-20 text-center">
        {/* Logo */}
        <motion.div
          data-reveal
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={reveal(0.1, 0.8)}
        >
          <div className="logo-float relative h-[120px] w-[120px]">
            <motion.div
              data-reveal
              aria-hidden
              className="absolute -inset-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={reveal(0.3, 1)}
            >
              <span className="logo-halo absolute inset-0 rounded-full" />
              <span className="logo-orbit absolute -inset-2.5 rounded-full" />
            </motion.div>

            <div className="logo-ring relative h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-navy to-navy-mid">
              {/* Logo oficial — para trocar, substitua public/logo.jpg (quadrado, wordmark centralizado) */}
              <Image
                src="/logo.jpg"
                alt="Logo FrescoAR — instalação, manutenção e limpeza de ar-condicionado"
                fill
                sizes="120px"
                preload
                className="object-cover object-[50%_55%]"
              />
            </div>
          </div>
        </motion.div>

        {/* Nome */}
        <motion.h1
          data-reveal
          className="font-display mt-9 text-[32px] leading-none font-extrabold tracking-[0.06em] whitespace-nowrap uppercase"
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={reveal(0.25)}
        >
          <span className="text-white">Fresco</span>
          <span className="text-green">AR</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          data-reveal
          className="mt-3 text-[13px] font-medium tracking-[2px] whitespace-nowrap text-cyan-light uppercase max-[359px]:text-[11.5px] max-[359px]:tracking-[1.2px]"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reveal(0.4)}
        >
          Instalação · Manutenção · Limpeza
        </motion.p>

        <motion.p
          data-reveal
          className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-cyan/20 bg-navy-deep/40 px-3 py-1 text-xs text-ink-soft"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reveal(0.45)}
        >
          <Thermometer aria-hidden size={13} className="text-cyan" />
          <span>
            <span className="text-ink">@frescoarss</span> · residencial e comercial
          </span>
        </motion.p>
      </div>
    </header>
  );
}
