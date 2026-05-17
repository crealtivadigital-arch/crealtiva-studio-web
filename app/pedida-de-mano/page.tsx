import type { Metadata } from "next";
import ServiceHero from "@/components/services/ServiceHero";
import PackageCard from "@/components/services/PackageCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { pedidaPackages } from "@/lib/data/packages";
import { WHATSAPP_URL } from "@/lib/data/navigation";

export const metadata: Metadata = {
  title: "Fotografía de Pedida de Mano en Quito",
  description:
    "Capturamos la propuesta de matrimonio con discreción, emoción y estilo. Coordinamos la sorpresa contigo y fotografiamos el sí que lo cambia todo. Paquetes desde $75.",
  keywords: [
    "fotógrafo pedida de mano Quito",
    "fotografía propuesta matrimonio Ecuador",
    "capturar la propuesta Quito",
    "fotógrafo sorpresa pedida",
    "Crealtiva Studio pedida de mano",
  ],
};

const steps = [
  {
    step: "01",
    title: "Nos coordinamos en secreto",
    body: "Conversamos contigo — sin que tu pareja lo sepa — para definir locación, hora y señales. Planificamos cada detalle para que la sorpresa sea perfecta.",
  },
  {
    step: "02",
    title: "Llegamos antes y nos posicionamos",
    body: "Estamos en el lugar antes que ustedes. Encontramos el ángulo ideal y esperamos listos para capturar el instante sin interrumpir el momento.",
  },
  {
    step: "03",
    title: "Capturas y te entregamos el recuerdo",
    body: "Fotografiamos la propuesta con total discreción. Las imágenes editadas llegan a tus manos en el tiempo acordado — listas para compartir o guardar para siempre.",
  },
];

const pedidaFaqs = [
  {
    q: "¿Me ayudan a planificar la sorpresa?",
    a: "Sí. Parte de nuestro servicio es coordinarnos contigo con anticipación: elegimos la locación, definimos el ángulo de captura y acordamos señales para que todo fluya de manera natural — sin que tu pareja sospeche nada.",
  },
  {
    q: "¿Qué pasa si mi pareja mira hacia la cámara antes del momento?",
    a: "Trabajamos de forma discreta, a distancia y con lentes que no requieren proximidad. Nuestra experiencia en capturar momentos espontáneos garantiza que el elemento sorpresa se preserve.",
  },
  {
    q: "¿Puedo elegir la locación?",
    a: "Totalmente. Puedes elegir el lugar que tenga significado para ustedes: un parque, un restaurante, una azotea o cualquier lugar especial. Si necesitas ideas, también te asesoramos.",
  },
  {
    q: "¿Cuánto tiempo antes debo coordinar?",
    a: "Recomendamos mínimo 1 semana de anticipación para coordinar bien la logística y garantizar disponibilidad en la fecha que eliges.",
  },
];

export default function PedidaDeManoPage() {
  return (
    <>
      <ServiceHero
        kicker="Pedida de Mano en Quito"
        title={`El momento en que\ntodo cambia para siempre`}
        description="Coordinamos la sorpresa contigo, llegamos antes, nos posicionamos sin ser vistos — y capturamos el sí con toda su emoción. Discreción absoluta, imágenes para toda la vida."
        ctaLabel="Coordinar la sorpresa"
        imageSrc="https://crealtivastudio.com/wp-content/uploads/2026/05/compromiso-1.avif"
        imageAlt="Fotografía de pedida de mano en Quito — Crealtiva Studio"
      />

      {/* Packages */}
      <section className="py-24 lg:py-32 bg-cream/30" id="paquetes">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            kicker="Inversión"
            title="Paquetes de Fotografía para Pedida de Mano"
            subtitle="Desde una cobertura íntima hasta la experiencia completa con video y Photobook. Todos incluyen planificación previa de la sorpresa."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pedidaPackages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
          <p className="mt-10 text-center text-[13px] font-montserrat text-ink/45">
            ¿Tienes una idea especial en mente?{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dusky-rose hover:text-rose-deep underline underline-offset-2 transition-colors"
            >
              Cuéntanos y lo hacemos posible
            </a>
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            kicker="Cómo funciona"
            title="Tres pasos para el sí perfecto"
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            {steps.map((item, i) => (
              <div key={item.step} className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <span className="font-fraunces text-[4.5rem] font-medium text-champagne/25 leading-none select-none mt-1">
                    {item.step}
                  </span>
                  <div className="pt-4">
                    <div className="w-px h-12 bg-champagne/50" />
                  </div>
                </div>
                <div>
                  <h3 className="font-fraunces font-medium text-xl text-ink leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] font-montserrat text-ink/65 leading-[1.75]">
                    {item.body}
                  </p>
                </div>
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
            {pedidaFaqs.map((faq) => (
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
            Escríbenos hoy — en secreto, si hace falta
          </h2>
          <span className="divider-champagne mx-auto mt-5 mb-7" />
          <p className="text-[14px] font-montserrat text-cream/65 leading-[1.8] max-w-md mx-auto">
            Cuéntanos la fecha tentativa, la locación que tienes en mente y el paquete que te interesa. Coordinamos todo sin que tu pareja se entere de nada.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <Button href={WHATSAPP_URL} external size="lg">
              Coordinar por WhatsApp
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
