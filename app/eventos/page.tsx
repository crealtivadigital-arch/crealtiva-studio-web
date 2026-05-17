import type { Metadata } from "next";
import ServiceHero from "@/components/services/ServiceHero";
import PackageCard from "@/components/services/PackageCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { eventosPackages } from "@/lib/data/packages";
import { WHATSAPP_URL } from "@/lib/data/navigation";

export const metadata: Metadata = {
  title: "Fotografía de Eventos Sociales en Quito",
  description:
    "Fotografía y video para cumpleaños, fiestas familiares, aniversarios y eventos corporativos en Quito. Cobertura profesional con entrega rápida. Desde $80.",
  keywords: [
    "fotógrafo eventos Quito",
    "fotografía cumpleaños Ecuador",
    "fotógrafo fiestas Quito",
    "cobertura eventos sociales",
    "Crealtiva Studio eventos",
  ],
};

const tiposEvento = [
  "Cumpleaños infantiles y adultos",
  "Fiestas y reuniones familiares",
  "Aniversarios y bodas de plata/oro",
  "Eventos corporativos y empresariales",
  "Primeras comuniones y confirmaciones",
  "Graduaciones y celebraciones académicas",
];

const differentiators = [
  {
    title: "Capturamos la energía de la celebración",
    body: "No solo posados — documentamos la fiesta: el baile, las risas, el momento de la torta, los abrazos. Las fotos que realmente recuerdan cómo fue el día.",
  },
  {
    title: "Adaptamos el estilo al evento",
    body: "Una fiesta infantil pide colores y espontaneidad; un aniversario, elegancia y emoción. Ajustamos nuestro enfoque para que las imágenes reflejen el tono de tu evento.",
  },
  {
    title: "Sin interrupciones, sin drama",
    body: "Nos integramos a la celebración de forma natural. No detenemos el baile para un posado forzado — los mejores momentos fluyen solos.",
  },
];

const eventosFaqs = [
  {
    q: "¿Qué tipos de eventos cubren?",
    a: "Cubrimos cualquier evento social: cumpleaños, fiestas familiares, aniversarios, primeras comuniones, reuniones corporativas y más. Si tienes un evento especial en mente, escríbenos.",
  },
  {
    q: "¿El paquete incluye fotografía y video?",
    a: "El paquete Mini Evento es solo fotografía. Los paquetes Fotografía + Mini Video y superiores incluyen ambos. Revisa los detalles de cada paquete o consúltanos para personalizarlo.",
  },
  {
    q: "¿Cuánta anticipación necesitan para reservar?",
    a: "Recomendamos reservar con al menos 2 semanas de anticipación para fechas regulares, y con 4+ semanas para fechas pico (fin de año, feriados). Si tu evento es pronto, igual escríbenos — a veces tenemos disponibilidad.",
  },
  {
    q: "¿Trabajan fuera de Quito?",
    a: "Sí. Trabajamos en todo el Ecuador. El transporte tiene un costo adicional según la distancia — cotizamos sin compromiso.",
  },
];

export default function EventosPage() {
  return (
    <>
      <ServiceHero
        kicker="Fotografía de Eventos"
        title={`Cada celebración merece\nser recordada así`}
        description="Cobertura fotográfica y de video para cumpleaños, fiestas familiares, aniversarios y eventos sociales. Documentamos la energía real de tu celebración — sin poses forzadas."
        ctaLabel="Ver paquetes"
        imageSrc="https://crealtivastudio.com/wp-content/uploads/2026/05/fiesta-9.avif"
        imageAlt="Fotografía de eventos y fiestas en Quito — Crealtiva Studio"
      />

      {/* Packages */}
      <section className="py-24 lg:py-32 bg-cream/30" id="paquetes">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            kicker="Inversión"
            title="Paquetes de Fotografía de Eventos"
            subtitle="Desde la cobertura esencial hasta la jornada completa con drone. Encontramos el paquete perfecto para tu evento y presupuesto."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {eventosPackages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
          <p className="mt-10 text-center text-[13px] font-montserrat text-ink/45">
            ¿Necesitas algo diferente?{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dusky-rose hover:text-rose-deep underline underline-offset-2 transition-colors"
            >
              Cotizamos a medida
            </a>
          </p>
        </div>
      </section>

      {/* Event types + Why us */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left — event types */}
            <div>
              <SectionHeader
                kicker="Eventos que cubrimos"
                title="Tu celebración, cualquiera que sea"
                align="left"
              />
              <ul className="mt-10 space-y-4">
                {tiposEvento.map((tipo, i) => (
                  <li key={tipo} className="flex items-start gap-4">
                    <span className="font-fraunces text-xl text-champagne/50 font-medium leading-none mt-0.5 select-none w-6 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex items-center gap-3 flex-1 border-b border-pearl pb-4">
                      <p className="text-[14px] font-montserrat text-ink/80 leading-snug">
                        {tipo}
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
                title="Fotografía de eventos que se siente real"
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
            {eventosFaqs.map((faq) => (
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
            Cuéntanos de tu evento
          </h2>
          <span className="divider-champagne mx-auto mt-5 mb-7" />
          <p className="text-[14px] font-montserrat text-cream/65 leading-[1.8] max-w-md mx-auto">
            Escríbenos con la fecha, el tipo de evento y el número aproximado de invitados. Te enviamos una propuesta en menos de 24 horas.
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
