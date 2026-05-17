import type { Metadata } from "next";
import ServiceHero from "@/components/services/ServiceHero";
import PackageCard from "@/components/services/PackageCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { embarazoPackages } from "@/lib/data/packages";
import { WHATSAPP_URL } from "@/lib/data/navigation";

export const metadata: Metadata = {
  title: "Fotografía de Embarazo y Newborn en Quito",
  description:
    "Sesiones artísticas de maternidad, embarazo y recién nacido en Quito. Capturamos la espera y el primer abrazo con luz cálida y posado profesional. Paquetes desde $80.",
  keywords: [
    "fotógrafo embarazo Quito",
    "sesión newborn Ecuador",
    "fotografía maternidad Quito",
    "álbum bebé primer año",
    "Crealtiva Studio embarazo",
  ],
};

const promises = [
  {
    title: "Ambiente seguro y cálido",
    body: "El estudio mantiene temperatura adecuada para el bebé. Accesorios limpios y poses diseñadas para no generar incomodidad.",
  },
  {
    title: "Sin prisa, a tu ritmo",
    body: "La sesión no tiene cronómetro estricto. Si el bebé necesita pausas para comer o descansar, las tomamos — queremos que todo fluya con calma.",
  },
  {
    title: "Edición artística y atemporal",
    body: "Tonos suaves, luz delicada y retoques sutiles. Imágenes que se sienten íntimas y atemporales, no en tendencia pasajera.",
  },
  {
    title: "Papá, hermanos y mascotas bienvenidos",
    body: "Las tomas familiares enriquecen la sesión. Cuéntanos quién quieres incluir y lo organizamos sin costo adicional.",
  },
];

const stats = [
  { value: "+60", label: "Sesiones maternidad" },
  { value: "100%", label: "Poses certificadas seguras" },
  { value: "Desde $80", label: "Sesión individual" },
  { value: "Álbum", label: "Incluido en Pack Primer Año" },
];

const embarazoFaqs = [
  {
    q: "¿En qué mes del embarazo es ideal hacer la sesión?",
    a: "El momento ideal es entre las semanas 28 y 34 — la panza ya tiene presencia y la mamá todavía se siente cómoda moviéndose. Pero adaptamos la sesión a cualquier etapa si lo prefieres.",
  },
  {
    q: "¿Las sesiones newborn son seguras para el bebé?",
    a: "Absolutamente. Trabajamos con poses seguras, accesorios limpios y temperatura controlada en el estudio. El ritmo siempre lo marca el bebé — no tenemos prisa.",
  },
  {
    q: "¿Cuándo es el mejor momento para la sesión newborn?",
    a: "Las primeras 2 semanas de vida son el momento ideal porque el bebé todavía duerme profundo y permite las poses más artísticas. A partir de la semana 3 también es posible, pero con variaciones en el estilo.",
  },
  {
    q: "¿Puedo combinar la sesión de embarazo con la newborn más adelante?",
    a: "Sí, y es justo lo que ofrecemos en el Pack Maternal + Newborn. Reservas las dos con un único proceso y obtienes un descuento respecto a contratarlas por separado.",
  },
];

export default function EmbarazoPage() {
  return (
    <>
      <ServiceHero
        kicker="Maternidad & Newborn"
        title={`El amor más grande,\nantes y después del primer abrazo`}
        description="Sesiones artísticas de embarazo y recién nacido con luz cálida, poses seguras y edición atemporal. Imágenes que vas a mirar una y otra vez durante toda la vida."
        ctaLabel="Ver paquetes"
        imageSrc="https://crealtivastudio.com/wp-content/uploads/2026/05/preparativos-1.avif"
        imageAlt="Fotografía de maternidad en Quito — Crealtiva Studio"
      />

      {/* Packages */}
      <section className="py-24 lg:py-32 bg-cream/30" id="paquetes">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            kicker="Inversión"
            title="Paquetes de Maternidad y Newborn"
            subtitle="Desde una sesión individual hasta el álbum completo del primer año. Cada paquete incluye fotografías editadas con el cuidado que el momento merece."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {embarazoPackages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} />
            ))}
          </div>
          <p className="mt-10 text-center text-[13px] font-montserrat text-ink/45">
            ¿Quieres añadir papá o hermanos a la sesión?{" "}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dusky-rose hover:text-rose-deep underline underline-offset-2 transition-colors"
            >
              Consúltanos y personalizamos
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
                kicker="Nuestra promesa"
                title="Sesiones íntimas, imágenes eternas"
                align="left"
              />
              <div className="mt-10 space-y-7">
                {promises.map((item) => (
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
                <p
                  className="font-fraunces font-medium text-ink/8 leading-none select-none"
                  style={{ fontSize: "4.5rem" }}
                >
                  ♡
                </p>
                <div className="-mt-2">
                  <p className="font-fraunces font-medium text-[1.35rem] text-ink leading-tight">
                    cada sesión es única
                    <br />
                    como cada bebé
                  </p>
                </div>
                <span className="divider-champagne mt-5 mb-5" />
                <p className="text-[13.5px] font-montserrat text-ink/60 leading-[1.75] max-w-xs">
                  Adaptamos el ritmo, la luz y las poses a la mamá y al bebé — nunca al revés. Tu comodidad es nuestra prioridad.
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
            {embarazoFaqs.map((faq) => (
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
            Estas semanas no vuelven — captúralas
          </h2>
          <span className="divider-champagne mx-auto mt-5 mb-7" />
          <p className="text-[14px] font-montserrat text-cream/65 leading-[1.8] max-w-md mx-auto">
            Escríbenos con la fecha estimada de parto o la etapa en que estás. Te explicamos qué paquete se adapta mejor y reservamos con total flexibilidad.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <Button href={WHATSAPP_URL} external size="lg">
              Consultar por WhatsApp
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
