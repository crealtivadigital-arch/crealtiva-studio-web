import type { Metadata } from "next";
import ServiceHero from "@/components/services/ServiceHero";
import PackageCard from "@/components/services/PackageCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { eventosPackages } from "@/lib/data/packages";
import { WHATSAPP_URL } from "@/lib/data/navigation";

export const metadata: Metadata = {
  title: "Fotografía de Cumpleaños en Quito",
  description:
    "Fotografía y video para cumpleaños infantiles y de adultos en Quito. Capturamos la fiesta, los detalles y los momentos que no quieres perder. Desde $80.",
  keywords: [
    "fotógrafo cumpleaños Quito",
    "fotografía fiesta infantil Ecuador",
    "fotógrafo cumpleaños adultos Quito",
    "sesión cumpleaños fotógrafo",
    "Crealtiva Studio cumpleaños",
  ],
};

const momentosCumple = [
  "Decoración y detalles antes de los invitados",
  "La llegada — la sorpresa y los abrazos",
  "El brindis y los discursos emotivos",
  "El pastel, las velas y el pedido de deseos",
  "La fiesta: baile, juegos y momentos espontáneos",
  "Fotos grupales con familia y amigos",
];

const differentiators = [
  {
    title: "Documentamos antes de que empiece",
    body: "Los detalles de la decoración, la mesa de postres, los globos — todo tiene historia. Llegamos antes del evento para capturar la ambientación antes de que la gente lo llene todo.",
  },
  {
    title: "El momento del pastel, sin fallidos",
    body: "El instante de las velas y el primer sablazo del pastel pasa una sola vez. Anticipamos el momento para que no haya fotos movidas ni flash que llegó tarde.",
  },
  {
    title: "Fotos que se ven como viviste el día",
    body: "No interrumpimos la fiesta para armar poses rígidas. Nos movemos entre los invitados y capturamos la celebración tal como fue — alegre, espontánea y real.",
  },
];

const cumplesFaqs = [
  {
    q: "¿Con cuánta anticipación debo reservar?",
    a: "Recomendamos reservar con al menos 2 semanas de anticipación. Para fines de semana o fechas de alta demanda (diciembre, junio), reserva con 1 mes de anticipación.",
  },
  {
    q: "¿El fotógrafo puede quedarse hasta el final de la fiesta?",
    a: "Sí. Los paquetes Full Day cubren hasta 8 horas. Si necesitas más tiempo, podemos cotizarlo por hora adicional.",
  },
  {
    q: "¿Hacen fotos para cumpleaños infantiles y también de adultos?",
    a: "Absolutamente. Adaptamos el estilo según el tipo de celebración — más espontáneo y colorido para los niños, más editorial para cumpleaños de adultos.",
  },
  {
    q: "¿Pueden editar algunas fotos con urgencia para publicar ese mismo día?",
    a: "Podemos entregar un adelanto de 5 a 10 fotos editadas el mismo día si se coordina previamente. La entrega completa tarda 7 días hábiles.",
  },
];

export default function SesionesCumpleanosPage() {
  return (
    <>
      <ServiceHero
        kicker="Fotografía de Cumpleaños"
        title={`La fiesta pasa rápido —\nlas fotos quedan para siempre`}
        description="Cobertura fotográfica profesional para cumpleaños infantiles y de adultos. Capturamos la decoración, el pastel, el baile y todos los momentos que querrás revivir."
        ctaLabel="Ver paquetes"
        imageSrc="https://crealtivastudio.com/wp-content/uploads/2026/05/cumpleanos-1.avif"
        imageAlt="Fotografía de cumpleaños en Quito — Crealtiva Studio"
      />

      {/* Packages */}
      <section className="py-24 lg:py-32 bg-cream/30" id="paquetes">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            kicker="Inversión"
            title="Paquetes para tu Cumpleaños"
            subtitle="Desde la cobertura esencial de las velas y el pastel hasta la jornada completa. Encontramos lo que necesitas."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {eventosPackages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
          <p className="mt-10 text-center text-[13px] font-montserrat text-ink/45">
            ¿Cumpleaños temático o con decoración especial?{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dusky-rose hover:text-rose-deep underline underline-offset-2 transition-colors"
            >
              Cuéntanos y cotizamos
            </a>
          </p>
        </div>
      </section>

      {/* Moments + Why us */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left — moments */}
            <div>
              <SectionHeader
                kicker="Qué capturamos"
                title="Los momentos que no quieres perder"
                align="left"
              />
              <ul className="mt-10 space-y-4">
                {momentosCumple.map((momento, i) => (
                  <li key={momento} className="flex items-start gap-4">
                    <span className="font-fraunces text-xl text-champagne/50 font-medium leading-none mt-0.5 select-none w-6 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex items-center gap-3 flex-1 border-b border-pearl pb-4">
                      <p className="text-[14px] font-montserrat text-ink/80 leading-snug">
                        {momento}
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
                title="Fotografía de fiesta que se siente real"
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
            {cumplesFaqs.map((faq) => (
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
            Asegura tu fecha ahora
          </h2>
          <span className="divider-champagne mx-auto mt-5 mb-7" />
          <p className="text-[14px] font-montserrat text-cream/65 leading-[1.8] max-w-md mx-auto">
            Escríbenos con la fecha, el lugar y cuántos invitados esperas. Confirmamos disponibilidad y te enviamos el paquete que mejor se adapta.
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
