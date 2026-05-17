import type { Metadata } from "next";
import ServiceHero from "@/components/services/ServiceHero";
import PackageCard from "@/components/services/PackageCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { sesionesPackages } from "@/lib/data/packages";
import { WHATSAPP_URL } from "@/lib/data/navigation";

export const metadata: Metadata = {
  title: "Sesiones de Fotografía de Estudio en Quito",
  description:
    "Fotografía de imagen personal, marcas y ropa en estudio profesional en Quito. Books de modelos, retratos corporativos y sesiones familiares. Desde $50.",
  keywords: [
    "sesión de fotos estudio Quito",
    "book de modelos Quito",
    "fotografía imagen personal Ecuador",
    "retrato corporativo Quito",
    "Crealtiva Studio sesiones estudio",
  ],
};

const useCases = [
  {
    title: "Imagen profesional",
    body: "Foto de perfil para LinkedIn, CV, tarjeta de presentación o sitio web personal. Proyecta confianza desde el primer vistazo.",
  },
  {
    title: "Book de modelos",
    body: "Portafolio versátil con múltiples cambios de vestuario y fondos para agencias, casting o redes sociales.",
  },
  {
    title: "Fotografía de marcas y ropa",
    body: "Lookbooks, catálogos de tienda o contenido para e-commerce con iluminación editorial y fondos continuos.",
  },
  {
    title: "Sesiones familiares de estudio",
    body: "Retratos clásicos de familia para el hogar — fondos neutros, iluminación cálida y cuadro físico incluido.",
  },
  {
    title: "Contenido para redes sociales",
    body: "Banco de imágenes personales o de marca listas para publicar. Consistencia visual sin esfuerzo.",
  },
  {
    title: "Sesiones de exteriores",
    body: "Locaciones con luz natural para un look más orgánico y dinámico — parques, arquitectura o locaciones urbanas.",
  },
];

const sesionesFaqs = [
  {
    q: "¿Qué debo llevar a la sesión?",
    a: "Ropa que te haga sentir seguro y represente lo que quieres proyectar. Para el Book Premium recomendamos de 2 a 4 cambios de vestuario. Si no sabes qué llevar, te asesoramos en la conversación previa.",
  },
  {
    q: "¿El maquillaje está incluido?",
    a: "El maquillaje no está incluido en los paquetes, pero trabajamos con maquilladores de confianza que puedes contratar por separado. Consúltanos si necesitas una recomendación.",
  },
  {
    q: "¿Las sesiones de estudio son solo en interiores?",
    a: "Tenemos paquetes de estudio y también sesiones en exteriores con luz natural. Si prefieres un mix de ambos, hablemos y armamos algo personalizado.",
  },
  {
    q: "¿Cuándo recibo mis fotografías?",
    a: "En promedio entregamos las fotografías editadas en 5 a 7 días hábiles después de la sesión. Para proyectos urgentes, consulta nuestra tarifa de entrega express.",
  },
];

export default function SesionesDeEstudioPage() {
  return (
    <>
      <ServiceHero
        kicker="Sesiones de Estudio"
        title={`Tu imagen personal,\ncomo merece verse`}
        description="Fotografía de imagen profesional, marcas y ropa en estudio con iluminación controlada. Desde retratos para LinkedIn hasta books completos de modelo — todo con dirección de poses incluida."
        ctaLabel="Ver paquetes"
        imageSrc="https://crealtivastudio.com/wp-content/uploads/2026/05/DSC00427-scaled.webp"
        imageAlt="Sesiones de fotografía de estudio en Quito — Crealtiva Studio"
      />

      {/* Packages */}
      <section className="py-24 lg:py-32 bg-cream/30" id="paquetes">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            kicker="Inversión"
            title="Paquetes de Sesiones de Estudio"
            subtitle="Sesiones en estudio profesional y en exteriores. Todos los paquetes incluyen fotografías editadas en alta resolución con dirección de poses."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-7">
            {sesionesPackages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
          <p className="mt-10 text-center text-[13px] font-montserrat text-ink/45">
            ¿Necesitas fotografía de producto o contenido para redes?{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dusky-rose hover:text-rose-deep underline underline-offset-2 transition-colors"
            >
              Escríbenos y cotizamos
            </a>
          </p>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            kicker="¿Para quién es?"
            title="Sesiones pensadas para cada objetivo"
            subtitle="Ya sea que necesites una sola foto impecable o un banco de contenido completo, tenemos el paquete exacto."
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {useCases.map((item, i) => (
              <div key={item.title} className="flex flex-col gap-3">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-fraunces text-3xl text-champagne/40 font-medium leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 h-px bg-pearl" />
                </div>
                <h4 className="font-montserrat font-semibold text-[13px] text-ink uppercase tracking-[0.1em]">
                  {item.title}
                </h4>
                <p className="text-[14px] font-montserrat text-ink/65 leading-[1.75]">
                  {item.body}
                </p>
              </div>
            ))}
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
            {sesionesFaqs.map((faq) => (
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
            Tu mejor foto está a una sesión de distancia
          </h2>
          <span className="divider-champagne mx-auto mt-5 mb-7" />
          <p className="text-[14px] font-montserrat text-cream/65 leading-[1.8] max-w-md mx-auto">
            Escríbenos y coordinamos la fecha. Te ayudamos a elegir el paquete y te damos tips de vestuario antes de la sesión.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <Button href={WHATSAPP_URL} external size="lg">
              Agendar sesión por WhatsApp
            </Button>
            <Button href="/contacto" variant="ghost-light" size="lg">
              Enviar mensaje
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
