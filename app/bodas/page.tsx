import type { Metadata } from "next";
import ServiceHero from "@/components/services/ServiceHero";
import PackageCard from "@/components/services/PackageCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { bodasPackages } from "@/lib/data/packages";
import { WHATSAPP_URL } from "@/lib/data/navigation";

export const metadata: Metadata = {
  title: "Fotografía de Bodas en Quito",
  description:
    "Fotografía y video de bodas en Quito con estilo editorial y cinematográfico. Desde bodas civiles íntimas hasta coberturas completas de 12 horas con drone. Descubre nuestros paquetes desde $65.",
  keywords: [
    "fotógrafo de bodas Quito",
    "fotografía de bodas Ecuador",
    "video bodas Quito",
    "paquetes fotografia boda",
    "Crealtiva Studio bodas",
  ],
};

const differentiators = [
  {
    title: "Dirección de poses",
    body: "Te guiamos en cada momento para que te veas natural. No necesitas experiencia frente a una cámara.",
  },
  {
    title: "Estilo editorial y cálido",
    body: "Nuestra edición resalta la luz natural y los tonos crema que hacen que cada foto se vea atemporal.",
  },
  {
    title: "Equipo de respaldo",
    body: "Trabajamos con equipos profesionales de respaldo para que ningún momento quede sin capturar.",
  },
  {
    title: "Entrega garantizada",
    body: "Cada fotografía es seleccionada y editada individualmente. Nunca volumen sin calidad.",
  },
];

const stats = [
  { value: "+120", label: "Eventos cubiertos" },
  { value: "4.9★", label: "Valoración media" },
  { value: "100%", label: "Entregas a tiempo" },
  { value: "5+", label: "Años de experiencia" },
];

const bodasFaqs = [
  {
    q: "¿Con cuánta anticipación debo reservar?",
    a: "Recomendamos reservar con al menos 3 a 6 meses de anticipación, especialmente en temporada alta (diciembre, febrero y junio). La fecha se confirma con el pago del anticipo.",
  },
  {
    q: "¿Los paquetes incluyen la edición de todas las fotos?",
    a: "Sí. Todas las fotografías entregadas son seleccionadas y editadas profesionalmente en alta resolución. Nunca entregamos fotografías sin editar.",
  },
  {
    q: "¿Qué pasa si la boda es fuera de Quito?",
    a: "El transporte está incluido dentro de nuestra zona de cobertura habitual. Para eventos fuera de esa zona, cotizamos el traslado adicional sin problema.",
  },
  {
    q: "¿Cuándo recibo mis fotografías?",
    a: "La entrega depende del paquete. En promedio entregamos entre 4 y 6 semanas después del evento para garantizar una edición de calidad.",
  },
];

export default function BodasPage() {
  return (
    <>
      <ServiceHero
        kicker="Bodas en Quito"
        title={`Tu día más tuyo,\ncapturado para siempre`}
        description="Fotografiamos bodas con estilo editorial y cercanía humana. Cada imagen cuenta la historia que viviste, con la calidez que merece tu momento más especial."
        ctaLabel="Ver paquetes"
        imageSrc="https://crealtivastudio.com/wp-content/uploads/2026/05/posboda-1.avif"
        imageAlt="Fotografía de bodas en Quito — Crealtiva Studio"
        secondaryCta={{ label: "Ver portafolio", href: "/portafolio/bodas" }}
      />

      {/* Packages */}
      <section className="py-24 lg:py-32 bg-cream/30" id="paquetes">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            kicker="Inversión"
            title="Paquetes de Fotografía para Bodas"
            subtitle="Desde una celebración íntima hasta la cobertura más completa. Todos nuestros paquetes incluyen fotografías editadas en alta resolución."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-7">
            {bodasPackages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
          <p className="mt-10 text-center text-[13px] font-montserrat text-ink/45">
            ¿Tienes algo diferente en mente? Hablemos y creamos algo a tu medida.{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dusky-rose hover:text-rose-deep underline underline-offset-2 transition-colors"
            >
              Escríbenos por WhatsApp
            </a>
          </p>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left — differentiators */}
            <div>
              <SectionHeader
                kicker="Por qué elegirnos"
                title="Más que fotos — una experiencia"
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
              {/* Feature card */}
              <div className="bg-cream/60 border border-pearl px-8 py-9">
                <p className="font-fraunces text-[4.5rem] font-medium text-ink/8 leading-none select-none">
                  5
                </p>
                <div className="-mt-5">
                  <p className="font-fraunces font-medium text-[1.35rem] text-ink leading-tight">
                    años fotografiando
                    <br />
                    los mejores momentos
                  </p>
                </div>
                <span className="divider-champagne mt-5 mb-5" />
                <p className="text-[13.5px] font-montserrat text-ink/60 leading-[1.75] max-w-xs">
                  de bodas, quinceaños, graduaciones y todos los momentos que merecen vivir en una imagen.
                </p>
              </div>
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3.5">
                {stats.map((s) => (
                  <div key={s.value} className="bg-white border border-pearl px-5 py-5">
                    <p className="font-fraunces text-3xl font-medium text-ink leading-none">
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
          <div className="mt-12 space-y-0 divide-y divide-pearl">
            {bodasFaqs.map((faq) => (
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
            Reserva tu fecha antes de que alguien más lo haga
          </h2>
          <span className="divider-champagne mx-auto mt-5 mb-7" />
          <p className="text-[14px] font-montserrat text-cream/65 leading-[1.8] max-w-md mx-auto">
            Agenda una asesoría gratuita de 20 minutos. Sin compromisos — solo conversamos sobre tu boda y te damos la propuesta perfecta.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <Button href={WHATSAPP_URL} external size="lg">
              Cotizar por WhatsApp
            </Button>
            <Button href="/contacto" variant="ghost" size="lg">
              Agendar asesoría
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
