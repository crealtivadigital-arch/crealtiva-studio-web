"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionHeader from "@/components/ui/SectionHeader";
import { WHATSAPP_URL } from "@/lib/data/navigation";

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

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-end bg-ink overflow-hidden">
        {/* Background placeholder — replace with real hero image */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink/90 to-dusky-rose/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-24 pt-40 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="kicker text-champagne">Estudio de Fotografía · Quito, Ecuador</span>
            <h1 className="display mt-4 text-cream max-w-3xl">
              El amor de tu gran día,{" "}
              <em className="not-italic text-dusky-rose">capturado</em>{" "}
              para siempre
            </h1>
            <span className="divider-champagne mt-6 mb-6" />
            <p className="text-base font-montserrat text-cream/70 leading-relaxed max-w-lg">
              Convertimos momentos irrepetibles en imágenes que se miran cien
              veces sin cansar. Calidez, estilo editorial y cercanía humana.
            </p>
            <div className="flex flex-wrap gap-3 mt-10">
              <Button href={WHATSAPP_URL} external size="lg">
                Cotizar ahora
              </Button>
              <Button href="/portafolio" variant="ghost" size="lg">
                Ver portafolio
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="kicker text-cream/30 text-[10px]">Explorar</span>
          <div className="w-px h-8 bg-gradient-to-b from-cream/30 to-transparent" />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-cream/40 border-y border-pearl">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <p className="font-fraunces text-4xl font-medium text-ink">{stat.value}</p>
                <p className="mt-1 kicker text-ink/50 text-[10px]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 lg:py-28 bg-white" id="servicios">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            kicker="Nuestros Servicios"
            title="Fotografía para cada momento importante"
            subtitle="Capturamos bodas, quinceaños, sesiones personales, momentos académicos y más. Cada servicio, diseñado con atención al detalle."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {priorityServices.map((service, i) => (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
              >
                <Link
                  href={service.href}
                  className="group flex flex-col gap-4 p-7 border border-pearl hover:border-dusky-rose/40 hover:shadow-md transition-all duration-300 h-full"
                >
                  <div className={`w-8 h-px ${service.accent}`} />
                  <div>
                    <span className="kicker text-ink/40 text-[10px]">{service.kicker}</span>
                    <h3 className="font-fraunces font-medium text-xl text-ink mt-1 group-hover:text-rose-deep transition-colors">
                      {service.label}
                    </h3>
                  </div>
                  <p className="text-sm font-montserrat text-ink/65 leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    {service.from ? (
                      <span className="text-xs font-montserrat text-ink/50">
                        Desde <strong className="text-ink">${service.from}</strong>
                      </span>
                    ) : (
                      <span className="text-xs font-montserrat text-ink/40">Cotizar</span>
                    )}
                    <span className="kicker text-dusky-rose text-[10px] group-hover:translate-x-1 transition-transform inline-block">
                      Ver →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* More services */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
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
                className="text-xs font-montserrat text-ink/60 border border-pearl px-4 py-2 hover:border-dusky-rose/40 hover:text-ink transition-all"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand story */}
      <section className="py-20 lg:py-28 bg-cream/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Placeholder images */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-pearl aspect-[3/4]" />
              <div className="flex flex-col gap-3 pt-8">
                <div className="bg-pearl aspect-square" />
                <div className="bg-dusky-rose/20 aspect-[3/2]" />
              </div>
            </div>
            <div>
              <SectionHeader
                kicker="Nuestra historia"
                title="Capturamos tu esencia y diseñamos tu historia"
                align="left"
              />
              <div className="mt-6 space-y-4 text-sm font-montserrat text-ink/75 leading-relaxed">
                <p>
                  Somos Alexis y Paola, y Crealtiva Studio nació de un sueño compartido: crear imágenes que no solo se vean bien, sino que se sientan. Que cuando las mires años después, puedas volver a ese momento exacto.
                </p>
                <p>
                  Trabajamos con empatía, transparencia y una sensibilidad editorial que hace que cada sesión sea una experiencia, no solo una cita con una cámara.
                </p>
              </div>
              <div className="mt-8 flex gap-3">
                <Button href="/nosotros" variant="secondary" size="sm">
                  Conocernos
                </Button>
                <Button href="/contacto" variant="ghost" size="sm">
                  Agendar asesoría
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="py-20 lg:py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            kicker="Portafolio"
            title="Imágenes que se miran cien veces"
            light
          />
          {/* Grid placeholder — replace with real portfolio images */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`bg-cream/10 ${
                  i === 0 ? "aspect-[3/4] md:col-span-2 md:row-span-2 md:aspect-auto" : "aspect-square"
                }`}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/portafolio" variant="ghost" size="md">
              Ver portafolio completo
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-24 bg-cream">
        <div className="max-w-xl mx-auto px-6 text-center">
          <span className="kicker text-dusky-rose">Tu sesión te espera</span>
          <h2 className="font-fraunces font-medium text-[clamp(1.75rem,3.5vw,2.25rem)] mt-3 text-ink leading-tight">
            Hablemos sobre tu momento especial
          </h2>
          <span className="divider-champagne mx-auto mt-4 mb-6" />
          <p className="text-sm font-montserrat text-ink/70 leading-relaxed">
            Sin compromisos. Escríbenos por WhatsApp o agenda una asesoría gratuita de 20 minutos y te damos la propuesta ideal para ti.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
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
