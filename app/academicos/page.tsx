import type { Metadata } from "next";
import ServiceHero from "@/components/services/ServiceHero";
import PackageCard from "@/components/services/PackageCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { academicosPackages } from "@/lib/data/packages";
import { WHATSAPP_URL } from "@/lib/data/navigation";

export const metadata: Metadata = {
  title: "Fotografía Académica y de Grado en Quito",
  description:
    "Fotografía de graduaciones, juramentos de bandera, incorporaciones universitarias, anuarios y portaretratos en Quito. Paquetes para alumnos y colegios. Desde $35.",
  keywords: [
    "fotógrafo graduación Quito",
    "fotografía de grado Ecuador",
    "anuario escolar Quito",
    "portarretrato estudiante Ecuador",
    "Crealtiva Studio académicos",
  ],
};

const serviciosAcademicos = [
  "Graduaciones y actos de colación",
  "Juramentos de bandera",
  "Incorporaciones universitarias",
  "Entrega de mandiles",
  "Portaretratos y carpetas estudiantiles",
  "Anuarios institucionales completos",
];

const differentiators = [
  {
    title: "Entrega organizada para instituciones",
    body: "Los archivos se entregan nombrados y organizados por nombre del estudiante, paralelo y grado — listos para integrar al anuario sin trabajo extra.",
  },
  {
    title: "Sesiones rápidas sin perder calidad",
    body: "Optimizamos el flujo para fotografiar grupos grandes sin tiempos muertos. Cada estudiante tiene su espacio y sale con fotos de calidad editorial.",
  },
  {
    title: "Cobertura completa de la ceremonia",
    body: "Capturamos la entrega de diplomas, los abrazos, las lágrimas y los detalles que nadie quiere perderse — con equipo profesional de respaldo.",
  },
];

const academicosFaqs = [
  {
    q: "¿Trabajan con colegios y universidades para anuarios completos?",
    a: "Sí. El paquete Anuario Institucional está diseñado para fotografiar a toda la promoción o plantel. Coordinamos con las autoridades y entregamos los archivos organizados por nombre y grado, listos para impresión.",
  },
  {
    q: "¿La sesión de grado incluye fotos con familia?",
    a: "Sí. En la Sesión de Grado incluimos tomas individuales y grupales con familia (hasta 4 personas). Si el grupo es mayor, consúltanos — lo adaptamos.",
  },
  {
    q: "¿Hacen cobertura de ceremonias de juramento de bandera?",
    a: "Sí. Cubrimos actos de juramento de bandera, incorporaciones universitarias, entrega de mandiles y cualquier ceremonia académica. Si no ves tu evento en los paquetes, escríbenos y cotizamos.",
  },
  {
    q: "¿En cuánto tiempo recibo las fotografías?",
    a: "Las sesiones individuales tienen entrega en 5 a 7 días hábiles. Para coberturas de ceremonia, el tiempo promedio es de 10 días hábiles para garantizar una edición cuidada.",
  },
];

export default function AcademicosPage() {
  return (
    <>
      <ServiceHero
        kicker="Fotografía Académica"
        title={`Tu logro académico,\ncapturado con orgullo`}
        description="Sesiones individuales de grado, cobertura de ceremonias y producción de anuarios completos para colegios y universidades. Imágenes que celebran el esfuerzo de años."
        ctaLabel="Ver paquetes"
        imageSrc="https://crealtivastudio.com/wp-content/uploads/2026/05/grados-1.avif"
        imageAlt="Fotografía académica y de graduación en Quito — Crealtiva Studio"
      />

      {/* Packages */}
      <section className="py-24 lg:py-32 bg-cream/30" id="paquetes">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            kicker="Inversión"
            title="Paquetes de Fotografía Académica"
            subtitle="Para el alumno que quiere su mejor foto y para la institución que necesita el anuario completo. Soluciones para todos los presupuestos."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {academicosPackages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
          <p className="mt-10 text-center text-[13px] font-montserrat text-ink/45">
            ¿Eres coordinador académico o representante institucional?{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dusky-rose hover:text-rose-deep underline underline-offset-2 transition-colors"
            >
              Solicita una propuesta personalizada
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
                title="Todos los momentos del calendario académico"
                align="left"
              />
              <ul className="mt-10 space-y-4">
                {serviciosAcademicos.map((servicio, i) => (
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
                title="Experiencia y precisión institucional"
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
            {academicosFaqs.map((faq) => (
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

      {/* CTA Final — dual audience */}
      <section className="py-24 lg:py-28 bg-ink">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:divide-x md:divide-cream/10">
            {/* Alumno */}
            <div className="text-center md:text-left md:pr-16 pb-12 md:pb-0">
              <span className="kicker text-champagne">Para el estudiante</span>
              <h2 className="font-fraunces font-medium text-[clamp(1.5rem,2.5vw,2rem)] mt-4 text-cream leading-[1.2]">
                Reserva tu sesión de grado
              </h2>
              <span className="divider-champagne mt-5 mb-6" />
              <p className="text-[14px] font-montserrat text-cream/60 leading-[1.8]">
                Cuéntanos la fecha de tu ceremonia y el paquete que te interesa. Confirmamos disponibilidad de inmediato.
              </p>
              <div className="mt-8">
                <Button href={WHATSAPP_URL} external size="md">
                  Cotizar por WhatsApp
                </Button>
              </div>
            </div>

            {/* Institución */}
            <div className="text-center md:text-left md:pl-16 pt-12 md:pt-0 border-t border-cream/10 md:border-t-0">
              <span className="kicker text-champagne">Para la institución</span>
              <h2 className="font-fraunces font-medium text-[clamp(1.5rem,2.5vw,2rem)] mt-4 text-cream leading-[1.2]">
                Solicita propuesta de anuario
              </h2>
              <span className="divider-champagne mt-5 mb-6" />
              <p className="text-[14px] font-montserrat text-cream/60 leading-[1.8]">
                Producción completa para colegios y universidades. Enviamos una propuesta formal con tiempos, logística y precios.
              </p>
              <div className="mt-8">
                <Button href="/contacto" variant="ghost" size="md">
                  Solicitar propuesta
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
