"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "ghost-light";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-rose-deep text-cream hover:bg-[#7a5063] border border-rose-deep",
  secondary:
    "bg-transparent text-ink border border-ink/40 hover:border-ink hover:bg-ink hover:text-cream",
  ghost:
    "bg-transparent text-dusky-rose border border-dusky-rose/60 hover:bg-dusky-rose hover:text-cream hover:border-dusky-rose",
  "ghost-light":
    "bg-transparent text-cream/80 border border-cream/30 hover:bg-cream/10 hover:text-cream hover:border-cream/60",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-6 py-2.5 text-[10.5px] tracking-[0.14em]",
  md: "px-8 py-3.5 text-[11px] tracking-[0.14em]",
  lg: "px-10 py-4 text-[11.5px] tracking-[0.14em]",
};

const MotionLink = motion(Link);

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-montserrat font-semibold uppercase transition-colors duration-200 select-none whitespace-nowrap rounded-full";
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${
    disabled ? "opacity-50 pointer-events-none" : ""
  } ${className}`;

  if (href) {
    return (
      <MotionLink
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.985 }}
        transition={{ duration: 0.15 }}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.button>
  );
}
