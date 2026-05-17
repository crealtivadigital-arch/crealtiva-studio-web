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
  const isCenter = align === "center";

  return (
    <motion.div
      className={`flex flex-col ${isCenter ? "items-center text-center" : "items-start text-left"}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {kicker && (
        <span className={`kicker ${light ? "text-champagne" : "text-dusky-rose"}`}>
          {kicker}
        </span>
      )}
      <h2
        className={`font-fraunces font-medium leading-[1.15] mt-3 ${
          light ? "text-cream" : "text-ink"
        }`}
        style={{ fontSize: "clamp(1.65rem, 3vw, 2.15rem)" }}
      >
        {title}
      </h2>
      <span className={`divider-champagne mt-4 mb-0 ${isCenter ? "mx-auto" : ""}`} />
      {subtitle && (
        <p
          className={`mt-5 max-w-[52ch] text-[14px] leading-[1.85] font-montserrat ${
            light ? "text-cream/65" : "text-ink/60"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
