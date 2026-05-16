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
      />

      {/* Packages */}
      <section className="py-20 lg:py-28 bg-cream/30" id="paquetes">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            kicker="Inversión"
            title="Paquetes de Fotografía para Bodas"
            subtitle="Desde una celebración íntima hasta la cobertura más completa. Todos nuestros paquetes incluyen fotografías editadas en alta resolución."
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {bodasPackages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
          <p className="mt-8 text-center text-sm font-montserrat text-ink/50">
            ¿Tienes algo diferente en mente? Hablemos y creamos algo a tu medida.{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-dusky-rose hover:underline">
              Escribenos por WhatsApp
            </a>
          </p>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                kicker="Por qué elegirnos"
                title="Más que fotos — una experiencia"
                align="left"
              />
              <div className="mt-8 space-y-6">
                {[
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
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-1 bg-champagne flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-montserrat font-semibold text-sm text-ink">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm font-montserrat text-ink/70 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Placeholder for gallery preview — replace with real images */}
            <div className="grid grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className={`bg-pearl/60 ${n === 1 ? "aspect-[3/4]" : n === 2 ? "aspect-square" : n === 3 ? "aspect-square" : "aspect-[3/4]"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24 bg-cream/20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <SectionHeader
            kicker="Preguntas frecuentes"
            title="Todo lo que necesitas saber"
          />
          <div className="mt-10 space-y-6">
            {bodasFaqs.map((faq) => (
              <div key={faq.q} className="border-b border-pearl pb-6">
                <h4 className="font-montserrat font-semibold text-sm text-ink">
                  {faq.q}
                </h4>
                <p className="mt-2 text-sm font-montserrat text-ink/70 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 lg:py-24 bg-ink text-cream">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <span className="kicker text-champagne">Tu próximo paso</span>
          <h2 className="font-fraunces font-medium text-[clamp(1.75rem,3.5vw,2.5rem)] mt-3 text-cream leading-tight">
            Reserva tu fecha antes de que alguien más lo haga
          </h2>
          <span className="divider-champagne mx-auto mt-4 mb-6" />
          <p className="text-sm font-montserrat text-cream/70 leading-relaxed">
            Agenda una asesoría gratuita de 20 minutos. Sin compromisos — solo conversamos sobre tu boda y te damos la propuesta perfecta.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
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
