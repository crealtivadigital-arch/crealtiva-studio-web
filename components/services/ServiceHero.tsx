"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { WHATSAPP_URL, CALENDAR_URL } from "@/lib/data/navigation";

interface ServiceHeroProps {
  kicker: string;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  ctaLabel?: string;
  calendarLabel?: string;
}

export default function ServiceHero({
  kicker,
  title,
  description,
  imageSrc = "/images/placeholder-hero.jpg",
  imageAlt = "Crealtiva Studio",
  ctaLabel = "Cotizar ahora",
  calendarLabel = "Agendar asesoría",
}: ServiceHeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-end bg-ink overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20 pt-32 w-full">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="kicker text-champagne">{kicker}</span>
          <h1 className="display mt-3 text-cream">{title}</h1>
          <span className="divider-champagne mt-4 mb-6" />
          <p className="text-base font-montserrat text-cream/75 leading-relaxed max-w-lg">
            {description}
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button href={WHATSAPP_URL} external size="lg">
              {ctaLabel}
            </Button>
            <Button href={CALENDAR_URL} external variant="ghost" size="lg">
              {calendarLabel}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
