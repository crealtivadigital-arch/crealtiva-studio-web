"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { WHATSAPP_URL } from "@/lib/data/navigation";

const WP = "https://crealtivastudio.com/wp-content/uploads/2026/05";

const priorityServices = [
  {
    label: "Bodas",
    href: "/bodas",
    kicker: "Momentos de vida",
    description: "Desde una ceremonia íntima hasta la cobertura más completa.",
    from: 65,
    accent: "bg-dusky-rose",
  },
  {
    label: "Quinceaños",
    href: "/quinceanios",
    kicker: "Celebración & sueño",
    description: "Un día que merece cada ángulo, cada detalle, cada emoción.",
    from: 65,
    accent: "bg-rose-deep",
  },
  {
    label: "Pedida de Mano",
    href: "/pedida-de-mano",
    kicker: "El inicio de todo",
    description: "El momento más íntimo de la historia que están por contar.",
    from: null,
    accent: "bg-dusky-rose",
  },
  {
    label: "Embarazo & Newborn",
    href: "/embarazo",
    kicker: "Nueva vida",
    description: "Sesiones íntimas que capturan la magia antes y después del nacimiento.",
    from: null,
    accent: "bg-champagne",
  },
  {
    label: "Sesiones de Estudio",
    href: "/sesiones-de-estudio",
    kicker: "Imagen profesional",
    description: "Books, marcas, ropa y retratos con iluminación de estudio profesional.",
    from: 60,
    accent: "bg-ink",
  },
  {
    label: "Académicos",
    href: "/academicos",
    kicker: "Logros que perduran",
    description: "Graduaciones, juramentos, incorporaciones y anuarios universitarios.",
    from: null,
    accent: "bg-champagne",
  },
];

const stats = [
  { value: "+120", label: "Sesiones realizadas" },
  { value: "6", label: "Profesionales en equipo" },
  { value: "+3", label: "Años de experiencia" },
  { value: "11", label: "Categorías de servicio" },
];

const portfolioGrid = [
  { src: `${WP}/posboda-1.avif`, alt: "Bodas Quito — Crealtiva Studio" },
  { src: `${WP}/quince-15.avif`, alt: "Quinceaños Quito" },
  { src: `${WP}/compromiso-3.avif`, alt: "Pedida de mano Quito" },
  { src: `${WP}/grados-2.avif`, alt: "Graduaciones Quito" },
  { src: `${WP}/cumpleanos-1.avif`, alt: "Sesión de cumpleaños" },
  { src: `${WP}/fiesta-9.avif`, alt: "Eventos familiares Quito" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero — centrado ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="https://crealtivastudio.com/wp-content/uploads/2026/03/portada-2-scaled.webp"
          alt="Fotografía de bodas en Quito — Crealtiva Studio"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/52" />

        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 lg:px-8 py-40 text-center">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="kicker text-champagne">
              Estudio de Fotografía · Quito, Ecuador
            </span>
            <h1
              className="font-fraunces font-medium text-cream mt-5 leading-[1.1]"
              style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)" }}
            >
              El amor de tu gran día,{" "}
              <em className="not-italic text-dusky-rose">capturado</em>{" "}
              para siempre
            </h1>
            <span className="divider-champagne mx-auto mt-6 mb-6" />
            <p className="text-[15px] font-montserrat text-cream/78 leading-relaxed max-w-md">
              Convertimos momentos irrepetibles en imágenes que se miran cien
              veces sin cansar.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <Button href={WHATSAPP_URL} external size="lg">
                Cotizar ahora
              </Button>
              <Button href="/portafolio" variant="ghost" size="lg">
                Ver portafolio
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <span className="kicker text-cream/35 text-[9px] tracking-[0.3em]">
            Explorar
          </span>
          <div className="w-px h-9 bg-gradient-to-b from-cream/35 to-transparent" />
        </motion.div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 bg-cream/50 border-y border-pearl">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center text-center gap-2"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <p className="font-fraunces text-[2.5rem] font-medium text-ink leading-none">
                  {stat.value}
                </p>
                <p className="kicker text-ink/45 text-[10px]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Servicios ── */}
      <section className="py-24 lg:py-32 bg-white" id="servicios">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <SectionHeader
            kicker="Nuestros Servicios"
            title="Fotografía para cada momento importante"
            subtitle="Capturamos bodas, quinceaños, sesiones personales, momentos académicos y más."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {priorityServices.map((service, i) => (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="h-full"
              >
                <Link
                  href={service.href}
                  className="group flex flex-col items-center text-center gap-5 p-8 border border-pearl hover:border-dusky-rose/50 hover:shadow-lg transition-all duration-300 h-full"
                >
                  <div className={`w-10 h-px ${service.accent}`} />
                  <div className="space-y-2">
                    <span className="kicker text-ink/40 text-[10px]">
                      {service.kicker}
                    </span>
                    <h3 className="font-fraunces font-medium text-[1.2rem] text-ink group-hover:text-rose-deep transition-colors leading-tight">
                      {service.label}
                    </h3>
                  </div>
                  <p className="text-[13.5px] font-montserrat text-ink/60 leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    {service.from ? (
                      <span className="text-[12px] font-montserrat text-ink/50">
                        Desde{" "}
                        <strong className="text-ink font-semibold">
                          ${service.from}
                        </strong>
                      </span>
                    ) : (
                      <span className="text-[12px] font-montserrat text-ink/40">
                        Cotizar
                      </span>
                    )}
                    <span className="kicker text-dusky-rose text-[10px] group-hover:translate-x-1 transition-transform inline-block">
                      Ver →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
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
                className="text-[12px] font-montserrat text-ink/55 border border-pearl px-5 py-2.5 hover:border-dusky-rose/40 hover:text-ink transition-all duration-200"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nuestra historia ── */}
      <section className="py-24 lg:py-32 bg-cream/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div
              className="grid grid-cols-2 gap-3"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <Image
                  src={`${WP}/preparativos-2.avif`}
                  alt="Preparativos de boda — Crealtiva Studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex flex-col gap-3 pt-8">
                <div className="relative overflow-hidden aspect-square">
                  <Image
                    src={`${WP}/compromiso-4.avif`}
                    alt="Sesión de compromiso"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative overflow-hidden aspect-[3/2]">
                  <Image
                    src={`${WP}/detalles-2.avif`}
                    alt="Detalles de boda"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <SectionHeader
                kicker="Nuestra historia"
                title="Capturamos tu esencia y diseñamos tu historia"
                align="left"
              />
              <div className="mt-6 space-y-5 text-[14px] font-montserrat text-ink/70 leading-[1.8]">
                <p>
                  Somos Alexis y Paola, y Crealtiva Studio nació de un sueño compartido: crear imágenes que no solo se vean bien, sino que se sientan. Que cuando las mires años después, puedas volver a ese momento exacto.
                </p>
                <p>
                  Trabajamos con empatía, transparencia y una sensibilidad editorial que hace que cada sesión sea una experiencia, no solo una cita con una cámara.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/nosotros" variant="secondary" size="sm">
                  Conocernos
                </Button>
                <Button href="/contacto" variant="ghost" size="sm">
                  Agendar asesoría
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Portafolio preview ── */}
      <section className="py-24 lg:py-28 bg-ink">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <SectionHeader
            kicker="Portafolio"
            title="Imágenes que se miran cien veces"
            light
          />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-2">
            {portfolioGrid.map((img, i) => (
              <motion.div
                key={img.src}
                className="relative overflow-hidden aspect-[3/4]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </motion.div>
            ))}
            <div className="relative col-span-2 md:col-span-3 overflow-hidden aspect-video">
              <Image
                src={`${WP}/mini-boda-7.avif`}
                alt="Bodas y eventos — Crealtiva Studio Quito"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 object-[center_35%]"
                sizes="100vw"
              />
            </div>
          </div>
          <div className="mt-10 text-center">
            <Button href="/portafolio" variant="ghost" size="md">
              Ver portafolio completo
            </Button>
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="py-24 lg:py-28 bg-cream">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <span className="kicker text-dusky-rose">Tu sesión te espera</span>
          <h2
            className="font-fraunces font-medium text-ink mt-4 leading-tight"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
          >
            Hablemos sobre tu momento especial
          </h2>
          <span className="divider-champagne mx-auto mt-5 mb-6" />
          <p className="text-[14px] font-montserrat text-ink/65 leading-[1.8] max-w-md mx-auto">
            Sin compromisos. Escríbenos por WhatsApp o agenda una asesoría gratuita de 20 minutos y te damos la propuesta ideal para ti.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button href={WHATSAPP_URL} external size="lg">
              Escribir por WhatsApp
            </Button>
            <Button href="/contacto" variant="secondary" size="lg">
              Agendar asesoría
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
