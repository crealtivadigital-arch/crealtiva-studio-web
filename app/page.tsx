"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { WHATSAPP_URL } from "@/lib/data/navigation";
import GoogleReviews from "@/components/shared/GoogleReviews";

const WP = "https://crealtivastudio.com/wp-content/uploads/2026/05";

const services = [
  {
    label: "Bodas",
    href: "/bodas",
    kicker: "Momentos de vida",
    from: 65,
    photo: `${WP}/mini-boda-3.avif`,
  },
  {
    label: "Quinceaños",
    href: "/quinceanios",
    kicker: "Celebración & sueño",
    from: 65,
    photo: `${WP}/quince-15.avif`,
  },
  {
    label: "Pedida de Mano",
    href: "/pedida-de-mano",
    kicker: "El inicio de todo",
    from: null,
    photo: `${WP}/compromiso-3.avif`,
  },
  {
    label: "Embarazo & Newborn",
    href: "/embarazo",
    kicker: "Nueva vida",
    from: null,
    photo: `${WP}/preparativos-2.avif`,
  },
  {
    label: "Sesiones de Estudio",
    href: "/sesiones-de-estudio",
    kicker: "Imagen profesional",
    from: 60,
    photo: `https://crealtivastudio.com/wp-content/uploads/2026/05/DSC00427-scaled.webp`,
  },
  {
    label: "Académicos",
    href: "/academicos",
    kicker: "Logros que perduran",
    from: null,
    photo: `${WP}/grados-2.avif`,
  },
];

const stats = [
  { value: "+120", label: "Sesiones realizadas" },
  { value: "6", label: "Profesionales" },
  { value: "+3", label: "Años de experiencia" },
  { value: "11", label: "Categorías" },
];

const portfolioGrid = [
  { src: `${WP}/posboda-1.avif`, alt: "Bodas Quito" },
  { src: `${WP}/quince-14.avif`, alt: "Quinceaños Quito" },
  { src: `${WP}/compromiso-8.avif`, alt: "Pedida de mano" },
  { src: `${WP}/grados-1.avif`, alt: "Graduaciones Quito" },
  { src: `${WP}/cumpleanos-1.avif`, alt: "Cumpleaños" },
  { src: `${WP}/fiesta-9.avif`, alt: "Eventos Quito" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative w-full overflow-hidden" style={{ height: "100svh", minHeight: "600px" }}>
        <Image
          src="https://crealtivastudio.com/wp-content/uploads/2026/03/portada-2-scaled.webp"
          alt="Fotografía de bodas en Quito — Crealtiva Studio"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/50" />

        {/* Texto centrado */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="kicker text-champagne tracking-[0.25em]">
              Estudio de Fotografía · Quito, Ecuador
            </span>
            <h1
              className="font-fraunces font-medium text-cream mt-5 leading-[1.08] max-w-[720px]"
              style={{ fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)" }}
            >
              El amor de tu gran día,{" "}
              <em className="not-italic" style={{ color: "#B18093" }}>
                capturado
              </em>{" "}
              para siempre
            </h1>
            <div
              className="mt-7 mb-7"
              style={{ width: "3rem", height: "1px", background: "#C9A87C", display: "block" }}
            />
            <p className="font-montserrat text-cream/80 leading-relaxed max-w-[420px]" style={{ fontSize: "15px" }}>
              Convertimos momentos irrepetibles en imágenes que se miran cien veces sin cansar.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Button href={WHATSAPP_URL} external size="lg">
                Cotizar ahora
              </Button>
              <Button href="/portafolio" variant="ghost-light" size="lg">
                Ver portafolio
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <span className="kicker text-cream/35" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>
            Explorar
          </span>
          <div
            style={{
              width: "1px",
              height: "36px",
              background: "linear-gradient(to bottom, rgba(249,240,230,0.35), transparent)",
            }}
          />
        </motion.div>
      </section>

      {/* ─── STATS ─── */}
      <section style={{ background: "rgba(241,226,207,0.5)", borderTop: "1px solid #E7E3E0", borderBottom: "1px solid #E7E3E0" }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "4rem 1.5rem",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "2rem",
          }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "0.5rem" }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <span className="font-fraunces font-medium text-ink" style={{ fontSize: "2.5rem", lineHeight: 1 }}>
                {stat.value}
              </span>
              <span className="kicker text-ink/45" style={{ fontSize: "10px" }}>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── SERVICIOS — tarjetas foto ─── */}
      <section style={{ background: "#fff", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeader
            kicker="Nuestros Servicios"
            title="Fotografía para cada momento importante"
            subtitle="Bodas, quinceaños, sesiones personales, académicos y más."
          />

          {/* Grid de tarjetas fotográficas */}
          <div
            style={{
              marginTop: "4rem",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
            }}
            className="services-grid"
          >
            {services.map((svc, i) => (
              <motion.div
                key={svc.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}
                className="service-card-photo"
              >
                <Link href={svc.href} style={{ display: "block", position: "absolute", inset: 0 }}>
                  <Image
                    src={svc.photo}
                    alt={svc.label}
                    fill
                    className="service-photo-img"
                    style={{ objectFit: "cover", objectPosition: "center", transition: "transform 0.7s ease" }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(26,20,22,0.88) 0%, rgba(26,20,22,0.15) 50%, transparent 100%)",
                    }}
                  />
                  {/* Text at bottom */}
                  <div style={{ position: "absolute", inset: 0, bottom: 0, padding: "1.75rem", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                    <span className="kicker" style={{ color: "#C9A87C", fontSize: "9px", letterSpacing: "0.22em" }}>
                      {svc.kicker}
                    </span>
                    <h3
                      className="font-fraunces"
                      style={{ color: "#F1E2CF", fontSize: "1.35rem", fontWeight: 500, marginTop: "0.4rem", lineHeight: 1.2 }}
                    >
                      {svc.label}
                    </h3>
                    {svc.from && (
                      <p className="font-montserrat" style={{ color: "rgba(241,226,207,0.6)", fontSize: "12px", marginTop: "0.5rem" }}>
                        Desde{" "}
                        <strong style={{ color: "#F1E2CF" }}>${svc.from}</strong>
                      </p>
                    )}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem" }}>
                      <div style={{ width: "1.5rem", height: "1px", background: "#C9A87C", flexShrink: 0 }} />
                      <span className="kicker" style={{ color: "#C9A87C", fontSize: "9px" }}>
                        Ver paquetes
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Servicios secundarios */}
          <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem" }}>
            {[
              { label: "Bautizos & Comunión", href: "/bautizos" },
              { label: "Eventos Familiares", href: "/eventos" },
              { label: "Sesiones de Pareja", href: "/sesiones-pareja" },
              { label: "Sesiones de Cumpleaños", href: "/sesiones-cumpleanos" },
              { label: "Corporativos", href: "/corporativos" },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="font-montserrat"
                style={{
                  fontSize: "11.5px",
                  color: "rgba(26,20,22,0.55)",
                  border: "1px solid #E7E3E0",
                  padding: "0.5rem 1.25rem",
                  borderRadius: "9999px",
                  transition: "all 0.2s",
                  letterSpacing: "0.04em",
                }}
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NUESTRA HISTORIA ─── */}
      <section style={{ background: "rgba(241,226,207,0.3)", padding: "6rem 1.5rem" }}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
          className="story-grid"
        >
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}
          >
            <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
              <Image src={`${WP}/preparativos-2.avif`} alt="Preparativos de boda" fill style={{ objectFit: "cover" }} sizes="25vw" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", paddingTop: "2rem" }}>
              <div style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden" }}>
                <Image src={`${WP}/compromiso-4.avif`} alt="Compromiso" fill style={{ objectFit: "cover" }} sizes="15vw" />
              </div>
              <div style={{ position: "relative", aspectRatio: "3/2", overflow: "hidden" }}>
                <Image src={`${WP}/detalles-2.avif`} alt="Detalles de boda" fill style={{ objectFit: "cover" }} sizes="15vw" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <SectionHeader kicker="Nuestra historia" title="Capturamos tu esencia y diseñamos tu historia" align="left" />
            <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p className="font-montserrat" style={{ fontSize: "14px", color: "rgba(26,20,22,0.68)", lineHeight: 1.85 }}>
                Somos Alexis y Paola, y Crealtiva Studio nació de un sueño compartido: crear imágenes que no solo se vean bien, sino que se sientan. Que cuando las mires años después, puedas volver a ese momento exacto.
              </p>
              <p className="font-montserrat" style={{ fontSize: "14px", color: "rgba(26,20,22,0.68)", lineHeight: 1.85 }}>
                Trabajamos con empatía, transparencia y una sensibilidad editorial que hace que cada sesión sea una experiencia, no solo una cita con una cámara.
              </p>
            </div>
            <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Button href="/nosotros" variant="secondary" size="sm">Conocernos</Button>
              <Button href="/contacto" variant="ghost" size="sm">Agendar asesoría</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── PORTAFOLIO ─── */}
      <section style={{ background: "#1A1416", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeader kicker="Portafolio" title="Imágenes que se miran cien veces" light />
          <div
            style={{ marginTop: "3.5rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.5rem" }}
            className="portfolio-grid"
          >
            {portfolioGrid.map((img, i) => (
              <motion.div
                key={img.src}
                style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.7s ease" }}
                  className="portfolio-photo-img"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </motion.div>
            ))}
            <div style={{ position: "relative", gridColumn: "1 / -1", aspectRatio: "16/6", overflow: "hidden" }}>
              <Image
                src={`${WP}/mini-boda-7.avif`}
                alt="Bodas y eventos — Crealtiva Studio"
                fill
                style={{ objectFit: "cover", objectPosition: "center 35%" }}
                sizes="100vw"
              />
            </div>
          </div>
          <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
            <Button href="/portafolio" variant="ghost-light" size="md">Ver portafolio completo</Button>
          </div>
        </div>
      </section>

      {/* ─── RESEÑAS GOOGLE ─── */}
      <GoogleReviews />

      {/* ─── CTA FINAL ─── */}
      <section style={{ background: "#F1E2CF", padding: "6rem 1.5rem" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <span className="kicker" style={{ color: "#B18093", fontSize: "11px" }}>Tu sesión te espera</span>
          <h2
            className="font-fraunces font-medium text-ink"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", marginTop: "1rem", lineHeight: 1.2 }}
          >
            Hablemos sobre tu momento especial
          </h2>
          <div style={{ width: "3rem", height: "1px", background: "#C9A87C", margin: "1.5rem auto" }} />
          <p className="font-montserrat" style={{ fontSize: "14px", color: "rgba(26,20,22,0.65)", lineHeight: 1.85, maxWidth: "440px", margin: "0 auto" }}>
            Sin compromisos. Escríbenos por WhatsApp o agenda una asesoría gratuita de 20 minutos y te damos la propuesta ideal para ti.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginTop: "2.5rem" }}>
            <Button href={WHATSAPP_URL} external size="lg">Escribir por WhatsApp</Button>
            <Button href="/contacto" variant="secondary" size="lg">Agendar asesoría</Button>
          </div>
        </div>
      </section>

      {/* ─── Hover effect + responsive CSS ─── */}
      <style>{`
        .service-card-photo:hover .service-photo-img { transform: scale(1.05); }
        .portfolio-photo-img { }
        .service-card-photo:hover .portfolio-photo-img { transform: scale(1.05); }

        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr 1fr !important; }
          .story-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .portfolio-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
