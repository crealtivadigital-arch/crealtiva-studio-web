"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const WP = "https://crealtivastudio.com/wp-content/uploads/2026/05";

interface Photo {
  src: string;
  alt: string;
  category: string;
}

const photos: Photo[] = [
  // Bodas
  { src: `${WP}/mini-boda-1.avif`,   alt: "Boda civil íntima Quito",          category: "bodas" },
  { src: `${WP}/mini-boda-5.avif`,   alt: "Fotografía de boda Quito",         category: "bodas" },
  { src: `${WP}/mini-boda-10.avif`,  alt: "Pareja de novios Quito",           category: "bodas" },
  { src: `${WP}/mini-boda-15.avif`,  alt: "Ceremonia de boda Ecuador",        category: "bodas" },
  { src: `${WP}/mini-boda-20.avif`,  alt: "Momento íntimo boda",              category: "bodas" },
  { src: `${WP}/mini-boda-25.avif`,  alt: "Detalles boda Quito",              category: "bodas" },
  { src: `${WP}/posboda-1.avif`,     alt: "Postboda editorial",               category: "bodas" },
  { src: `${WP}/posboda-5.avif`,     alt: "Sesión postboda exteriores",       category: "bodas" },
  { src: `${WP}/posboda-10.avif`,    alt: "Novios postboda Quito",            category: "bodas" },
  // Quinceaños
  { src: `${WP}/quince-1.avif`,      alt: "Quinceañera Quito sesión",         category: "quinceanios" },
  { src: `${WP}/quince-5.avif`,      alt: "Fotografía quinceaños Ecuador",    category: "quinceanios" },
  { src: `${WP}/quince-10.avif`,     alt: "Quinceañera vestido rosa",         category: "quinceanios" },
  { src: `${WP}/quince-14.avif`,     alt: "Quinceañera exteriores",           category: "quinceanios" },
  { src: `${WP}/quince-20.avif`,     alt: "Sesión 15 años Quito",             category: "quinceanios" },
  { src: `${WP}/quince-25.avif`,     alt: "Quinceaños editorial Ecuador",     category: "quinceanios" },
  // Pedida de mano
  { src: `${WP}/compromiso-1.avif`,  alt: "Pedida de mano Quito",             category: "pedida" },
  { src: `${WP}/compromiso-5.avif`,  alt: "Propuesta de matrimonio Ecuador",  category: "pedida" },
  { src: `${WP}/compromiso-8.avif`,  alt: "Engagement sesión Quito",          category: "pedida" },
  { src: `${WP}/compromiso-12.avif`, alt: "Pareja compromiso exteriores",     category: "pedida" },
  { src: `${WP}/compromiso-18.avif`, alt: "Pedida de mano romántica",         category: "pedida" },
  // Embarazo & newborn
  { src: `${WP}/preparativos-1.avif`,alt: "Sesión maternidad Quito",          category: "embarazo" },
  { src: `${WP}/preparativos-4.avif`,alt: "Fotografía embarazo Ecuador",      category: "embarazo" },
  { src: `${WP}/preparativos-7.avif`,alt: "Maternidad luz natural",           category: "embarazo" },
  { src: `${WP}/preparativos-11.avif`,alt: "Sesión newborn Quito",            category: "embarazo" },
  // Académicos
  { src: `${WP}/grados-1.avif`,      alt: "Fotografía de graduación Quito",   category: "academicos" },
  { src: `${WP}/grados-5.avif`,      alt: "Sesión de grado Ecuador",          category: "academicos" },
  { src: `${WP}/grados-10.avif`,     alt: "Ceremonia académica Quito",        category: "academicos" },
  { src: `${WP}/grados-15.avif`,     alt: "Fotografía incorporación uni",     category: "academicos" },
  { src: `${WP}/grados-20.avif`,     alt: "Graduados retrato Quito",          category: "academicos" },
  // Eventos & celebraciones
  { src: `${WP}/fiesta-1.avif`,      alt: "Fotografía evento social Quito",   category: "eventos" },
  { src: `${WP}/fiesta-5.avif`,      alt: "Evento familiar Ecuador",          category: "eventos" },
  { src: `${WP}/cumpleanos-1.avif`,  alt: "Cumpleaños fotógrafo Quito",       category: "eventos" },
  { src: `${WP}/cumpleanos-5.avif`,  alt: "Fiesta de cumpleaños Ecuador",     category: "eventos" },
  { src: `${WP}/bautizos-1.avif`,    alt: "Fotografía de bautizo Quito",      category: "eventos" },
  { src: `${WP}/bautizos-5.avif`,    alt: "Ceremonia bautismo Ecuador",       category: "eventos" },
  // Detalles (complementa cualquier categoría)
  { src: `${WP}/detalles-1.avif`,    alt: "Detalles fotográficos boda",       category: "bodas" },
  { src: `${WP}/detalles-4.avif`,    alt: "Detalles florales ceremonia",      category: "bodas" },
];

const categories = [
  { id: "todos",       label: "Todo" },
  { id: "bodas",       label: "Bodas" },
  { id: "quinceanios", label: "Quinceaños" },
  { id: "pedida",      label: "Pedida de Mano" },
  { id: "embarazo",    label: "Embarazo & Newborn" },
  { id: "academicos",  label: "Académicos" },
  { id: "eventos",     label: "Eventos" },
];

/* ─── Parallax hero hook ─── */
function HeroParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={ref} className="relative overflow-hidden" style={{ height: "52vh", minHeight: "380px" }}>
      <motion.div className="absolute inset-0" style={{ y, scale: 1.15 }}>
        <Image
          src={`${WP}/mini-boda-3.avif`}
          alt="Portafolio Crealtiva Studio — Fotografía en Quito"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-ink/60" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.span
          className="kicker text-champagne"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Crealtiva Studio
        </motion.span>
        <motion.h1
          className="font-fraunces font-medium text-cream mt-4 leading-[1.1]"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          Portafolio
        </motion.h1>
        <motion.span
          className="divider-champagne mx-auto mt-5"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        />
        <motion.p
          className="font-montserrat text-cream/70 mt-4 max-w-[360px] leading-[1.8]"
          style={{ fontSize: "13.5px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          Cada imagen es un momento que eligió quedarse para siempre.
        </motion.p>
      </div>
    </div>
  );
}

/* ─── Single photo card with scroll reveal ─── */
function PhotoCard({ photo, index }: { photo: Photo; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{
        layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: 0.5, delay: (index % 9) * 0.06 },
        y: { duration: 0.55, delay: (index % 9) * 0.06, ease: [0.22, 1, 0.36, 1] },
      }}
      className="relative overflow-hidden break-inside-avoid mb-3 group"
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        width={600}
        height={900}
        className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-all duration-500" />
    </motion.div>
  );
}

/* ─── Main gallery ─── */
export default function PortfolioGallery() {
  const [active, setActive] = useState("todos");

  const filtered = active === "todos" ? photos : photos.filter((p) => p.category === active);

  return (
    <>
      <HeroParallax />

      {/* ── Category filter ── */}
      <div className="sticky top-16 lg:top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-pearl">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex-shrink-0 font-montserrat font-semibold text-[10.5px] uppercase tracking-[0.14em] px-5 py-2 rounded-full border transition-all duration-200 ${
                  active === cat.id
                    ? "bg-rose-deep text-cream border-rose-deep"
                    : "bg-transparent text-ink/50 border-pearl hover:border-ink/30 hover:text-ink"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Masonry grid ── */}
      <section className="bg-white py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={active}
              className="columns-1 sm:columns-2 lg:columns-3 gap-3"
            >
              {filtered.map((photo, i) => (
                <PhotoCard key={`${photo.src}-${active}`} photo={photo} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="font-montserrat text-[14px] text-ink/40">No hay fotos en esta categoría aún.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-cream/40 border-t border-pearl py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <span className="kicker text-dusky-rose">¿Te gustó lo que viste?</span>
          <h2
            className="font-fraunces font-medium text-ink mt-3 leading-[1.15]"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
          >
            Cuéntanos sobre tu momento especial
          </h2>
          <span className="divider-champagne mx-auto mt-4 mb-6 block" />
          <p className="font-montserrat text-[13.5px] text-ink/60 leading-[1.8]">
            Cada sesión es única como el momento que la origina. Escríbenos y diseñamos la propuesta perfecta para ti.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              href="https://wa.me/593998118083?text=Hola%2C+vi+su+portafolio+y+me+gustar%C3%ADa+cotizar+una+sesi%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-montserrat font-semibold text-[11.5px] uppercase tracking-[0.14em] px-10 py-4 rounded-full bg-rose-deep text-cream border border-rose-deep hover:bg-[#7a5063] transition-colors duration-200"
            >
              Cotizar por WhatsApp
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 font-montserrat font-semibold text-[11.5px] uppercase tracking-[0.14em] px-10 py-4 rounded-full bg-transparent text-ink/60 border border-pearl hover:border-ink/30 hover:text-ink transition-colors duration-200"
            >
              Enviar mensaje
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
