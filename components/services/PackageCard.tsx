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
  return (
    <motion.div
      className={`flex flex-col border transition-shadow duration-300 hover:shadow-lg ${
        pkg.featured
          ? "border-dusky-rose bg-white shadow-md relative"
          : "border-pearl bg-white"
      }`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {pkg.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-dusky-rose text-white kicker px-4 py-1.5 text-[10px]">
            Más elegido
          </span>
        </div>
      )}

      <div className="p-7 flex flex-col gap-5 flex-1">
        {/* Header */}
        <div>
          <h3 className="font-fraunces font-medium text-xl text-ink leading-tight">
            {pkg.name}
          </h3>
          {pkg.duration && (
            <p className="mt-1 kicker text-ink/40 text-[10px]">{pkg.duration}</p>
          )}
          <p className="mt-3 text-sm font-montserrat text-ink/70 leading-relaxed">
            {pkg.highlight}
          </p>
        </div>

        {/* Divider */}
        <span className="divider-champagne" />

        {/* Includes */}
        <ul className="flex flex-col gap-2 flex-1">
          {pkg.includes.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm font-montserrat text-ink/80">
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
        <div className="pt-4 border-t border-pearl">
          <div className="flex items-baseline gap-1 mb-4">
            {pkg.priceLabel && (
              <span className="text-xs font-montserrat text-ink/50">{pkg.priceLabel}</span>
            )}
            <span className="font-fraunces text-3xl font-medium text-ink">
              ${pkg.price}
            </span>
            <span className="text-xs font-montserrat text-ink/40">.00</span>
          </div>
          <Button
            href={buildWhatsAppUrl(pkg.name)}
            external
            variant={pkg.featured ? "primary" : "secondary"}
            size="sm"
            className="w-full justify-center"
          >
            Cotizar este paquete
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
