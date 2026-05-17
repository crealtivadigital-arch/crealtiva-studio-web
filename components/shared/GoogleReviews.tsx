"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "María José Andrade",
    initial: "M",
    color: "#B18093",
    rating: 5,
    date: "Hace 2 semanas",
    text: "Increíbles. Capturaron cada momento de nuestra boda de una manera que nos dejó sin palabras. Las fotos son exactamente lo que soñábamos — cálidas, emotivas y llenas de vida. Alexis y Paola son un equipo extraordinario.",
    service: "Bodas",
  },
  {
    name: "Gabriela Salazar",
    initial: "G",
    color: "#8C5F73",
    rating: 5,
    date: "Hace 1 mes",
    text: "La sesión de mis 15 años fue perfecta. Me sentí cómoda desde el primer minuto, me ayudaron con las poses y las fotos quedaron de revista. Todos en la familia quedaron encantados. Totalmente recomendados.",
    service: "Quinceaños",
  },
  {
    name: "Carlos Mendoza",
    initial: "C",
    color: "#C9A87C",
    rating: 5,
    date: "Hace 3 semanas",
    text: "Contratamos a Crealtiva Studio para la pedida de mano de mi novia y fue mejor de lo que imaginé. La sorpresa salió perfecta y las fotos capturaron el momento exacto con una calidad impresionante. Los recomiendo sin dudarlo.",
    service: "Pedida de Mano",
  },
  {
    name: "Andrea Villacís",
    initial: "A",
    color: "#7a5063",
    rating: 5,
    date: "Hace 2 meses",
    text: "Sesión de newborn con mi bebé y fue una experiencia maravillosa. Muy pacientes con los tiempos del bebé, ambiente cálido y las fotos quedaron simplemente hermosas. Cada vez que las veo se me llenan los ojos de lágrimas.",
    service: "Newborn",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-champagne" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg className="w-4 h-4 opacity-40" viewBox="0 0 24 24" aria-label="Google Review" role="img">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

export default function GoogleReviews() {
  return (
    <section className="py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="kicker text-dusky-rose">Reseñas verificadas</span>
          <h2
            className="font-fraunces font-medium text-ink mt-3 leading-[1.15]"
            style={{ fontSize: "clamp(1.65rem, 3vw, 2.15rem)" }}
          >
            Lo que dicen nuestros clientes
          </h2>
          <span className="divider-champagne mt-4 mx-auto" />
          {/* Google rating summary */}
          <div className="flex items-center gap-3 mt-6">
            <GoogleLogo />
            <div className="flex items-center gap-2">
              <Stars count={5} />
              <span className="font-fraunces text-xl font-medium text-ink">5.0</span>
              <span className="text-[13px] font-montserrat text-ink/45 font-medium">en Google</span>
            </div>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              className="flex flex-col gap-4 bg-cream/30 border border-pearl p-6"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Top: avatar + name + Google icon */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: review.color }}
                  >
                    <span className="font-fraunces text-cream font-medium" style={{ fontSize: "0.95rem" }}>
                      {review.initial}
                    </span>
                  </div>
                  <div>
                    <p className="font-montserrat font-semibold text-[12.5px] text-ink leading-tight">
                      {review.name}
                    </p>
                    <p className="font-montserrat text-[11px] text-ink/40 mt-0.5">{review.date}</p>
                  </div>
                </div>
                <GoogleLogo />
              </div>

              {/* Stars */}
              <Stars count={review.rating} />

              {/* Text */}
              <p className="font-montserrat text-[13px] text-ink/70 leading-[1.78] flex-1">
                "{review.text}"
              </p>

              {/* Service tag */}
              <span className="kicker text-[9.5px] text-dusky-rose/70 tracking-[0.18em] mt-1">
                {review.service}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Link to Google */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a
            href="https://share.google/eNGuKktD5baB05Z3f"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-montserrat text-[12px] font-semibold text-ink/40 hover:text-dusky-rose transition-colors uppercase tracking-[0.1em]"
          >
            <GoogleLogo />
            Ver todas las reseñas en Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
