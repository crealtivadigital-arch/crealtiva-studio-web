import type { Metadata } from "next";
import ServiceHero from "@/components/services/ServiceHero";
import PackageCard from "@/components/services/PackageCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { eventosPackages } from "@/lib/data/packages";
import { WHATSAPP_URL } from "@/lib/data/navigation";

export const metadata: Metadata = {
  title: "Fotografía de Bautizos en Quito",
  description:
    "Fotografía profesional de bautizos y ceremonias religiosas en Quito. Capturamos el primer sacramento con emoción y detalle. Paquetes desde $80.",
  keywords: [
    "fotógrafo bautizo Quito",
    "fotografía primera comunión Ecuador",
    "fotografía ceremonia religiosa Quito",
    "bautizo fotógrafo profesional",
    "Crealtiva Studio bautizos",
  ],
};

const serviciosBautizo = [
  "Preparativos y llegada de los padrinos",
  "Ceremonia completa en la iglesia o capilla",
  "El momento del bautismo — agua y emoción",
  "Retratos del bebé con familia y padrinos",
  "Celebración posterior: almuerzo o reunión familiar",
  "Fotografías formales del grupo completo",
];

const differentiators = [
  {
    title: "Discreción dentro del templo",
    body: "Trabajamos en silencio, con equipos de baja emisión sonora, respetando la solemnidad del sacramento sin interrumpir la ceremonia.",
  },
  {
    title: "Capturamos los detalles que importan",
    body: "El traje del bebé, las manos de los padrinos, la pila bautismal. Esos pequeños momentos que, reunidos, cuentan la historia completa del día.",
  },
  {
    title: "Entrega rápida para compartir con la familia",
    body: "Sabemos que todos quieren ver las fotos. Entregamos en 7 días hábiles para que puedas compartirlas antes de que el recuerdo se enfríe.",
  },
];

const bautizosFaqs = [
  {
    q: "¿Pueden fotografiar dentro de la iglesia?",
    a: "Sí. Trabajamos con equipos discretos y sin flash cuando el ambiente lo permite. Si la iglesia tiene restricciones específicas, las coordinamos contigo antes del evento.",
  },
  {
    q: "¿El paquete incluye la fiesta o reunión posterior al bautismo?",
    a: "Depende del paquete. El Mini Evento cubre solo la ceremonia. Los paquetes de 3 horas en adelante incluyen ceremonia y parte de la celebración. Consúltanos si necesitas adaptarlo.",
  },
  {
    q: "¿Trabajan con bautizos de bebés y también de adultos?",
    a: "Sí, cubrimos cualquier tipo de ceremonia bautismal — recién nacidos, niños y adultos. El enfoque de las fotos se adapta a cada caso.",
  },
  {
    q: "¿En cuánto tiempo recibo las fotografías?",
    a: "La entrega estándar es de 7 a 10 días hábiles. Para eventos urgentes tenemos tarifa express — consúltanos.",
  },
];

export default function BautizosPage() {
  return (
    <>
      <ServiceHero
        kicker="Fotografía de Bautizos"
        title={`El primer sacramento,\nconservado para siempre`}
        description="Cobertura fotográfica profesional de ceremonias de bautismo — desde los preparativos hasta la celebración familiar. Momentos únicos, imágenes eternas."
        ctaLabel="Ver paquetes"
        imageSrc="https://crealtivastudio.com/wp-content/uploads/2026/05/bautizos-1.avif"
        imageAlt="Fotografía de bautizos en Quito — Crealtiva Studio"
      />

      {/* Packages */}
      <section className="py-24 lg:py-32 bg-cream/30" id="paquetes">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            kicker="Inversión"
            title="Paquetes de Fotografía de Bautizo"
            subtitle="Desde la cobertura esencial de la ceremonia hasta la jornada completa con celebración. Adaptamos cada servicio a tus necesidades."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {eventosPackages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
          <p className="mt-10 text-center text-[13px] font-montserrat text-ink/45">
            ¿Tienes una ceremonia fuera de Quito?{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dusky-rose hover:text-rose-deep underline underline-offset-2 transition-colors"
            >
              Consulta disponibilidad y transporte
            </a>
          </p>
        </div>
      </section>

      {/* Services + Why us */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left — services list */}
            <div>
              <SectionHeader
                kicker="Qué cubrimos"
                title="Todos los momentos del bautismo"
                align="left"
              />
              <ul className="mt-10 space-y-4">
                {serviciosBautizo.map((servicio, i) => (
                  <li key={servicio} className="flex items-start gap-4">
                    <span className="font-fraunces text-xl text-champagne/50 font-medium leading-none mt-0.5 select-none w-6 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex items-center gap-3 flex-1 border-b border-pearl pb-4">
                      <p className="text-[14px] font-montserrat text-ink/80 leading-snug">
                        {servicio}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — differentiators */}
            <div>
              <SectionHeader
                kicker="Por qué elegirnos"
                title="Presencia discreta, imágenes impactantes"
                align="left"
              />
              <div className="mt-10 space-y-7">
                {differentiators.map((item) => (
                  <div key={item.title} className="flex gap-5">
                    <div className="w-px bg-champagne flex-shrink-0 mt-0.5 self-stretch" />
                    <div>
                      <h4 className="font-montserrat font-semibold text-[13px] text-ink uppercase tracking-[0.1em]">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-[14px] font-montserrat text-ink/65 leading-[1.75]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-28 bg-cream/20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <SectionHeader
            kicker="Preguntas frecuentes"
            title="Todo lo que necesitas saber"
          />
          <div className="mt-12 divide-y divide-pearl">
            {bautizosFaqs.map((faq) => (
              <div key={faq.q} className="py-7">
                <h4 className="font-montserrat font-semibold text-[13.5px] text-ink leading-snug">
                  {faq.q}
                </h4>
                <p className="mt-3 text-[13.5px] font-montserrat text-ink/65 leading-[1.75]">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 lg:py-28 bg-ink">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <span className="kicker text-champagne">Tu próximo paso</span>
          <h2 className="font-fraunces font-medium text-[clamp(1.85rem,3.5vw,2.6rem)] mt-4 text-cream leading-[1.15]">
            Reserva antes de que llegue la fecha
          </h2>
          <span className="divider-champagne mx-auto mt-5 mb-7" />
          <p className="text-[14px] font-montserrat text-cream/65 leading-[1.8] max-w-md mx-auto">
            Escríbenos con la fecha y la iglesia. Te confirmamos disponibilidad y el paquete más adecuado para tu ceremonia.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <Button href={WHATSAPP_URL} external size="lg">
              Cotizar por WhatsApp
            </Button>
            <Button href="/contacto" variant="ghost" size="lg">
              Enviar mensaje
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
