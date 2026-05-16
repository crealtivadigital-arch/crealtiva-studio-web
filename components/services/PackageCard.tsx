"use client";

import { motion } from "framer-motion";
import type { Package } from "@/lib/types";
import Button from "@/components/ui/Button";
import { WHATSAPP_NUMBER } from "@/lib/data/navigation";

interface PackageCardProps {
  pkg: Package;
  index: number;
}

function buildWhatsAppUrl(pkgName: string): string {
  const msg = `Hola, me interesa el paquete "${pkgName}". ¿Me podrían dar más información?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export default function PackageCard({ pkg, index }: PackageCardProps) {
  const isFeatured = !!pkg.featured;
  const isCotizacion = pkg.priceLabel === "Cotización";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      className={`group relative flex flex-col transition-all duration-300 ${
        isFeatured
          ? "shadow-[0_8px_40px_rgba(177,128,147,0.18)] hover:shadow-[0_16px_56px_rgba(177,128,147,0.28)]"
          : "shadow-sm hover:shadow-md"
      }`}
    >
      {/* Featured badge */}
      {isFeatured && (
        <div className="absolute -top-3.5 inset-x-0 flex justify-center pointer-events-none z-10">
          <span className="bg-dusky-rose text-white kicker px-5 py-1.5 text-[9.5px] tracking-[0.25em]">
            Más elegido
          </span>
        </div>
      )}

      {/* Card body */}
      <div
        className={`flex flex-col flex-1 ${
          isFeatured
            ? "bg-white border border-dusky-rose/60"
            : "bg-white border border-pearl"
        }`}
      >
        {/* Top accent line for featured */}
        {isFeatured && (
          <div className="h-0.5 bg-gradient-to-r from-dusky-rose via-champagne to-dusky-rose" />
        )}

        <div className="p-7 flex flex-col gap-5 flex-1">
          {/* Header */}
          <div>
            <h3 className="font-fraunces font-medium text-[1.2rem] text-ink leading-snug">
              {pkg.name}
            </h3>
            {pkg.duration && (
              <p className="mt-1 kicker text-ink/35 text-[10px]">{pkg.duration}</p>
            )}
            <p className="mt-3 text-[13.5px] font-montserrat text-ink/65 leading-[1.7]">
              {pkg.highlight}
            </p>
          </div>

          {/* Divider */}
          <span className="divider-champagne" />

          {/* Includes list */}
          <ul className="flex flex-col gap-2.5 flex-1">
            {pkg.includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[13px] font-montserrat text-ink/75 leading-snug"
              >
                <svg
                  className="w-3.5 h-3.5 text-champagne flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          {/* Price + CTA */}
          <div className="pt-5 border-t border-pearl mt-2">
            <div className="flex items-baseline gap-1.5 mb-4">
              {pkg.priceLabel && (
                <span className="text-xs font-montserrat text-ink/40 font-medium">
                  {pkg.priceLabel}
                </span>
              )}
              {isCotizacion ? (
                <span className="font-fraunces text-2xl font-medium text-ink">
                  A cotizar
                </span>
              ) : (
                <>
                  <span className="font-fraunces text-4xl font-medium text-ink leading-none">
                    ${pkg.price}
                  </span>
                  <span className="text-xs font-montserrat text-ink/35">.00</span>
                </>
              )}
            </div>
            <Button
              href={buildWhatsAppUrl(pkg.name)}
              external
              variant={isFeatured ? "primary" : "secondary"}
              size="sm"
              className="w-full justify-center"
            >
              {isCotizacion ? "Solicitar propuesta" : "Cotizar este paquete"}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
