import type { Metadata } from "next";
import ServiceHero from "@/components/services/ServiceHero";
import PackageCard from "@/components/services/PackageCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { sesionesPackages } from "@/lib/data/packages";
import { WHATSAPP_URL } from "@/lib/data/navigation";

export const metadata: Metadata = {
  title: "Sesiones de Pareja y Preboda en Quito",
  description:
    "Fotografía artística de parejas, sesiones preboda y engagement en Quito. Exteriores naturales, luz dorada y dirección de poses incluida. Desde $50.",
  keywords: [
    "sesión pareja Quito",
    "fotografía preboda Ecuador",
    "engagement fotógrafo Quito",
    "sesión novios exterior",
    "Crealtiva Studio sesiones pareja",
  ],
};

const momentosPaeja = [
  "Sesiones preboda y engagement",
  "Aniversarios y fechas especiales",
  "Retratos de pareja en exteriores naturales",
  "Sesiones en locaciones urbanas y arquitectura",
  "Contenido para redes sociales — Instagram, TikTok",
  "Retratos en estudio con iluminación profesional",
];

const differentiators = [
  {
    title: "Dirección de poses — sin torpeza",
    body: "Guiamos cada momento para que se vea natural. No tendrás que inventar qué hacer — te decimos cuándo moverte, cuándo reírte, cuándo simplemente estar.",
  },
  {
    title: "Locaciones con intención",
    body: "Trabajamos en exteriores que complementan a la pareja: luz dorada, fondos que no compiten, espacios que tienen carácter propio. Te recomendamos opciones o usamos la tuya.",
  },
  {
    title: "Fotos que cuentan vuestra historia",
    body: "Capturamos la química que ya existe entre ustedes. Las mejores fotos no se posan — se descubren en los momentos entre toma y toma.",
  },
];

const parejaFaqs = [
  {
    q: "¿En qué horario son las sesiones para aprovechar mejor la luz?",
    a: "La hora dorada — 1 hora antes del atardecer o 1 hora después del amanecer — es ideal para exteriores. Coordinamos el horario según tu disponibilidad y la locación.",
  },
  {
    q: "¿Cómo nos preparamos para la sesión?",
    a: "Te enviamos una guía de vestuario y tips antes de la sesión. En general: ropa complementaria (no idéntica), colores que no griten, y algo que los haga sentir cómodos y seguros.",
  },
  {
    q: "¿Pueden hacer la sesión en una locación que elijamos nosotros?",
    a: "Sí. Si ya tienen una locación en mente — un parque especial, la plaza donde se conocieron, un café favorito — hacemos la sesión ahí. Solo necesitamos verificar la luz y la logística.",
  },
  {
    q: "¿En cuánto tiempo recibimos las fotos?",
    a: "En 5 a 7 días hábiles. Si necesitas las fotos antes para un evento específico, consúltanos la opción de entrega express.",
  },
];

export default function SesionesParejaPage() {
  return (
    <>
      <ServiceHero
        kicker="Sesiones de Pareja"
        title={`Ustedes dos,\ncapturados como son`}
        description="Sesiones fotográficas artísticas para parejas — preboda, aniversario o simplemente porque sí. Exteriores con luz natural, dirección de poses y fotos que van a querer enmarcar."
        ctaLabel="Ver paquetes"
        imageSrc="https://crealtivastudio.com/wp-content/uploads/2026/05/compromiso-1.avif"
        imageAlt="Sesiones de pareja y preboda en Quito — Crealtiva Studio"
      />

      {/* Packages */}
      <section className="py-24 lg:py-32 bg-cream/30" id="paquetes">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            kicker="Inversión"
            title="Paquetes de Sesiones de Pareja"
            subtitle="Sesiones en exteriores y estudio. Todos los paquetes incluyen fotografías editadas y dirección de poses desde el primer minuto."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-7">
            {sesionesPackages.slice(0, 3).map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
          <p className="mt-10 text-center text-[13px] font-montserrat text-ink/45">
            ¿Buscas sesión estudio o book premium?{" "}
            <a
              href="/sesiones-de-estudio"
              className="text-dusky-rose hover:text-rose-deep underline underline-offset-2 transition-colors"
            >
              Ver paquetes de estudio
            </a>
          </p>
        </div>
      </section>

      {/* Occasions + Why us */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left — occasions */}
            <div>
              <SectionHeader
                kicker="¿Para qué ocasión?"
                title="Cada momento tiene su sesión"
                align="left"
              />
              <ul className="mt-10 space-y-4">
                {momentosPaeja.map((momento, i) => (
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
                title="Fotos que se sienten como ustedes"
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
            {parejaFaqs.map((faq) => (
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
            Agenda vuestra sesión
          </h2>
          <span className="divider-champagne mx-auto mt-5 mb-7" />
          <p className="text-[14px] font-montserrat text-cream/65 leading-[1.8] max-w-md mx-auto">
            Cuéntanos la ocasión y la fecha tentativa. Te sugerimos locaciones y coordinamos todo para que el día de la sesión solo tengan que disfrutarlo.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <Button href={WHATSAPP_URL} external size="lg">
              Agendar por WhatsApp
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
