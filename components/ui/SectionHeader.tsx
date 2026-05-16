"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeader({
  kicker,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <motion.div
      className={`flex flex-col gap-3 ${alignment}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {kicker && (
        <span
          className={`kicker ${light ? "text-champagne" : "text-dusky-rose"}`}
        >
          {kicker}
        </span>
      )}
      <h2
        className={`font-fraunces font-medium text-[clamp(1.75rem,3.5vw,2.25rem)] leading-tight ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {align === "center" && (
        <span className="divider-champagne mx-auto mt-1" />
      )}
      {align === "left" && <span className="divider-champagne mt-1" />}
      {subtitle && (
        <p
          className={`mt-2 max-w-xl text-base leading-relaxed font-montserrat ${
            light ? "text-pearl/80" : "text-ink/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
