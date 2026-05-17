import type { Metadata } from "next";
import ServiceHero from "@/components/services/ServiceHero";
import PackageCard from "@/components/services/PackageCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { quincePackages } from "@/lib/data/packages";
import { WHATSAPP_URL } from "@/lib/data/navigation";

export const metadata: Metadata = {
  title: "Fotografía de Quinceaños en Quito",
  description:
    "Fotografía y video de quinceaños en Quito con estilo soñador y elegante. Capturamos el día más especial a los 15 años con sesión prequince, drone y Photobook. Paquetes desde $65.",
  keywords: [
    "fotógrafo de quinceaños Quito",
    "fotografía 15 años Ecuador",
    "paquetes quince años Quito",
    "sesión prequince exteriores",
    "Crealtiva Studio quinceaños",
  ],
};

const differentiators = [
  {
    title: "Dirección pensada para ti",
    body: "Te guiamos pose por pose para que te veas segura y natural. No se necesita experiencia — solo ser tú misma.",
  },
  {
    title: "Edición editorial y atemporal",
    body: "Tonos cálidos, luz cuidada y retoques sutiles. Fotos que se ven igual de hermosas en 10 años.",
  },
  {
    title: "Sesión prequince disponible",
    body: "La sesión previa en exteriores es el contenido que brilla en las pantallas del salón. Incluida en el paquete Special Day.",
  },
  {
    title: "Drone para tomas únicas",
    body: "Las tomas aéreas dan una dimensión épica al evento. Disponibles en el paquete más completo.",
  },
];

const stats = [
  { value: "+80", label: "Quinceaños capturados" },
  { value: "Drone", label: "Disponible en top pack" },
  { value: "Photobook", label: "Incluido desde Classic" },
  { value: "4 sem.", label: "Tiempo de entrega promedio" },
];

const quinceFaqs = [
  {
    q: "¿Podemos hacer una sesión prequince antes del evento?",
    a: "Sí. El paquete Crealtiva Quince Special Day incluye una sesión prequince en exteriores. Para los demás paquetes puedes agregarla como complemento — hablemos y te cotizamos.",
  },
  {
    q: "¿Las fotos incluyen edición profesional?",
    a: "Todas las fotografías que entregamos pasan por selección y edición profesional. Nunca entregamos fotos sin retocar — la calidad editorial es parte de nuestro servicio.",
  },
  {
    q: "¿Con cuánta anticipación debo reservar?",
    a: "Recomendamos reservar con al menos 2 a 4 meses de anticipación para asegurar la fecha. Diciembre y junio se agotan rápido. La fecha se confirma con el pago del anticipo.",
  },
  {
    q: "¿El Photobook viene incluido en todos los paquetes?",
    a: "El Photobook forma parte de los paquetes Crealtiva Quince Classic y Special Day. Para los paquetes menores puedes añadirlo como extra — consúltanos por WhatsApp.",
  },
];

export default function QuinceaniosPage() {
  return (
    <>
      <ServiceHero
        kicker="Quinceaños en Quito"
        title={`Tu historia a los 15,\nhecha imagen para siempre`}
        description="Capturamos el día más especial de tu adolescencia con un estilo soñador y elegante. Fotos y videos que te harán sentir como en una película — sin perder ni un momento."
        ctaLabel="Ver paquetes"
        imageSrc="https://crealtivastudio.com/wp-content/uploads/2026/05/quince-14.avif"
        imageAlt="Fotografía de quinceaños en Quito — Crealtiva Studio"
        secondaryCta={{ label: "Ver portafolio", href: "/portafolio/quinceanios" }}
      />

      {/* Packages */}
      <section className="py-24 lg:py-32 bg-cream/30" id="paquetes">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            kicker="Inversión"
            title="Paquetes de Fotografía para Quinceaños"
            subtitle="Desde una cobertura esencial hasta el paquete estrella con sesión prequince y drone. Todos incluyen fotografías editadas en alta resolución."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {quincePackages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
          <p className="mt-10 text-center text-[13px] font-montserrat text-ink/45">
            ¿Tienes una idea diferente para tu celebración?{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dusky-rose hover:text-rose-deep underline underline-offset-2 transition-colors"
            >
              Escríbenos y la hacemos realidad
            </a>
          </p>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left */}
            <div>
              <SectionHeader
                kicker="Por qué elegirnos"
                title="Un estilo soñador, no infantil"
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

            {/* Right — stats */}
            <div className="flex flex-col gap-5 lg:pt-3">
              <div className="bg-cream/60 border border-pearl px-8 py-9">
                <p className="font-fraunces text-[4.5rem] font-medium text-ink/8 leading-none select-none">
                  15
                </p>
                <div className="-mt-5">
                  <p className="font-fraunces font-medium text-[1.35rem] text-ink leading-tight">
                    años que merece
                    <br />
                    una foto de película
                  </p>
                </div>
                <span className="divider-champagne mt-5 mb-5" />
                <p className="text-[13.5px] font-montserrat text-ink/60 leading-[1.75] max-w-xs">
                  Cada quinceaños que fotografiamos es único. Te damos el trato que merece tu momento más especial.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3.5">
                {stats.map((s) => (
                  <div key={s.value} className="bg-white border border-pearl px-5 py-5">
                    <p className="font-fraunces text-2xl font-medium text-ink leading-none">
                      {s.value}
                    </p>
                    <p className="mt-2 kicker text-[10px] text-ink/45 normal-case tracking-[0.12em]">
                      {s.label}
                    </p>
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
            {quinceFaqs.map((faq) => (
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
            Asegura tu fecha antes de que alguien más lo haga
          </h2>
          <span className="divider-champagne mx-auto mt-5 mb-7" />
          <p className="text-[14px] font-montserrat text-cream/65 leading-[1.8] max-w-md mx-auto">
            Agenda una asesoría gratuita de 15 minutos. Conversamos sobre tu fiesta y te damos la propuesta perfecta sin compromiso.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <Button href={WHATSAPP_URL} external size="lg">
              Cotizar por WhatsApp
            </Button>
            <Button href="/contacto" variant="ghost-light" size="lg">
              Agendar asesoría
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
