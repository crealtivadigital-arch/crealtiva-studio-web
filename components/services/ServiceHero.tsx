"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/data/navigation";

interface ServiceHeroProps {
  kicker: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  ctaLabel?: string;
  secondaryCta?: { label: string; href: string };
}

const ease = [0.22, 1, 0.36, 1] as const;

function riseProps(delay: number) {
  return {
    initial: { opacity: 0, y: 36 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  } as const;
}

function fadeProps(delay: number) {
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.7, delay },
  } as const;
}

export default function ServiceHero({
  kicker,
  title,
  description,
  imageSrc,
  imageAlt = "Crealtiva Studio",
  ctaLabel = "Cotizar ahora",
  secondaryCta,
}: ServiceHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-ink">

      {/* ── Background ── */}
      {imageSrc ? (
        <>
          <motion.div className="absolute inset-0" style={{ y: bgY, scale: 1.1 }}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-ink/52" />
        </>
      ) : (
        <div className="absolute inset-0" aria-hidden>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 90% 70% at 80% -5%, rgba(177,128,147,0.28) 0%, transparent 55%), radial-gradient(ellipse 60% 60% at 15% 105%, rgba(140,95,115,0.20) 0%, transparent 55%), #1A1416",
            }}
          />
        </div>
      )}

      {/* ── Content — centrado ── */}
      <motion.div style={{ opacity: contentOpacity }} className="relative z-10 w-full max-w-3xl mx-auto px-6 lg:px-8 text-center py-40">
        <motion.div className="flex flex-col items-center">
          <motion.span {...riseProps(0.05)} className="kicker text-champagne">
            {kicker}
          </motion.span>

          <motion.h1
            {...riseProps(0.18)}
            className="font-fraunces font-medium text-cream mt-5 leading-[1.1]"
            style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.25rem)", whiteSpace: "pre-line" }}
          >
            {title}
          </motion.h1>

          <motion.span
            {...fadeProps(0.32)}
            className="divider-champagne mx-auto mt-6 mb-6 block"
          />

          <motion.p
            {...riseProps(0.38)}
            className="text-[14.5px] font-montserrat text-cream/75 leading-[1.8] max-w-md"
          >
            {description}
          </motion.p>

          <motion.div
            {...riseProps(0.5)}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            <Button href={WHATSAPP_URL} external size="lg">
              {ctaLabel}
            </Button>
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="ghost" size="lg">
                {secondaryCta.label}
              </Button>
            )}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        aria-hidden
      >
        <span className="kicker text-[9px] text-cream/35 tracking-[0.3em]">scroll</span>
        <motion.div
          className="w-px h-10 origin-top"
          style={{
            background: "linear-gradient(to bottom, rgba(201,168,124,0.5), transparent)",
          }}
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
