"use client";

import { motion } from "framer-motion";
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
  return (
    <section className="relative min-h-[94vh] flex items-end overflow-hidden bg-ink">

      {/* ── Background ── */}
      {imageSrc ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageSrc})` }}
          role="img"
          aria-label={imageAlt}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />
        </div>
      ) : (
        <div className="absolute inset-0" aria-hidden>
          {/* Radial gradient base */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 90% 70% at 80% -5%, rgba(177,128,147,0.28) 0%, transparent 55%), radial-gradient(ellipse 60% 60% at 15% 105%, rgba(140,95,115,0.20) 0%, transparent 55%), #1A1416",
            }}
          />
          {/* Decorative outer ring */}
          <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full border border-dusky-rose/12 pointer-events-none" />
          {/* Decorative inner ring */}
          <div className="absolute -top-12 -right-12 w-[460px] h-[460px] rounded-full border border-champagne/8 pointer-events-none" />
          {/* Film-reel horizontal lines */}
          {[18, 30, 42, 54, 66, 78].map((top) => (
            <div
              key={top}
              className="absolute left-0 right-0 h-px"
              style={{
                top: `${top}%`,
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,0.025) 30%, rgba(255,255,255,0.025) 70%, transparent)",
              }}
            />
          ))}
        </div>
      )}

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-24 pt-40">
        <div className="max-w-[640px]">
          <motion.span {...riseProps(0.05)} className="kicker text-champagne inline-block">
            {kicker}
          </motion.span>

          <motion.h1
            {...riseProps(0.18)}
            className="display mt-3 text-cream"
            style={{ whiteSpace: "pre-line" }}
          >
            {title}
          </motion.h1>

          <motion.span
            {...fadeProps(0.32)}
            className="divider-champagne mt-5 mb-6 block"
          />

          <motion.p
            {...riseProps(0.38)}
            className="text-[15px] font-montserrat text-cream/72 leading-[1.75] max-w-[500px]"
          >
            {description}
          </motion.p>

          <motion.div
            {...riseProps(0.5)}
            className="flex flex-wrap items-center gap-3 mt-9"
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
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        aria-hidden
      >
        <span className="kicker text-[9px] text-cream/30 tracking-[0.3em]">scroll</span>
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
