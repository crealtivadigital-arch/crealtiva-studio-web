"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/lib/data/navigation";

const TIPOS_EVENTO = [
  "Boda",
  "Quinceaños",
  "Pedida de Mano",
  "Bautizo / Comunión",
  "Cumpleaños",
  "Evento Familiar",
  "Embarazo / Maternidad",
  "Newborn / Bebé",
  "Sesión de Estudio",
  "Grado / Ceremonia Académica",
  "Corporativo",
  "Otro",
];

const PRESUPUESTOS = [
  "Menos de $100",
  "Entre $100 y $200",
  "Entre $200 y $350",
  "Entre $350 y $500",
  "Más de $500",
  "Por definir",
];

const STORAGE_KEY = "crealtiva_lead_dismissed";
const DISMISS_DAYS = 7;

export default function LeadCapturePopup() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"form" | "success">("form");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    eventType: "",
    eventDate: "",
    budget: "",
    phone: "",
  });

  const dismiss = useCallback(() => {
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  }, []);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) {
      const elapsed = Date.now() - Number(dismissed);
      if (elapsed < DISMISS_DAYS * 24 * 60 * 60 * 1000) return;
    }

    const timer = setTimeout(() => setOpen(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, dismiss]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const lines = [
      `👋 *Nueva consulta desde el sitio web*`,
      ``,
      `*Nombre:* ${form.name}`,
      `*Evento:* ${form.eventType}`,
      form.eventDate ? `*Fecha tentativa:* ${form.eventDate}` : null,
      form.budget ? `*Presupuesto:* ${form.budget}` : null,
      form.phone ? `*Teléfono:* ${form.phone}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {
      // email is best-effort; WhatsApp is primary
    }

    window.open(waUrl, "_blank");
    setStep("success");
    setLoading(false);
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  };

  const field =
    "w-full bg-ink/5 border border-pearl px-4 py-3 text-[13.5px] font-montserrat text-ink placeholder:text-ink/35 focus:outline-none focus:border-champagne transition-colors";

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-ink/60 z-[9000] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
          />

          {/* Modal */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Cotiza tu sesión"
            className="fixed inset-0 z-[9001] flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative bg-white w-full max-w-lg shadow-2xl overflow-hidden">
              {/* Top accent */}
              <div className="h-1 w-full bg-gradient-to-r from-champagne via-dusky-rose to-rose-deep" />

              {/* Close */}
              <button
                onClick={dismiss}
                aria-label="Cerrar"
                className="absolute top-4 right-4 text-ink/30 hover:text-ink transition-colors z-10"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                  <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>

              <div className="px-8 pt-8 pb-9">
                {step === "form" ? (
                  <>
                    <span className="kicker text-dusky-rose text-[10px]">Cotización sin compromiso</span>
                    <h2 className="font-fraunces font-medium text-[1.55rem] text-ink mt-2 leading-[1.2]">
                      ¿Cuándo es tu evento especial?
                    </h2>
                    <p className="mt-2 text-[13px] font-montserrat text-ink/55 leading-[1.7]">
                      Cuéntanos lo básico y te respondemos con disponibilidad y precios en menos de 2 horas.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                      <input
                        required
                        type="text"
                        placeholder="Tu nombre *"
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className={field}
                      />

                      <select
                        required
                        value={form.eventType}
                        onChange={(e) => setForm((f) => ({ ...f, eventType: e.target.value }))}
                        className={`${field} ${!form.eventType ? "text-ink/35" : "text-ink"}`}
                      >
                        <option value="" disabled>
                          Tipo de evento *
                        </option>
                        {TIPOS_EVENTO.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>

                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Fecha tentativa"
                          value={form.eventDate}
                          onChange={(e) => setForm((f) => ({ ...f, eventDate: e.target.value }))}
                          className={field}
                          onFocus={(e) => (e.target.type = "date")}
                          onBlur={(e) => {
                            if (!e.target.value) e.target.type = "text";
                          }}
                        />
                        <select
                          value={form.budget}
                          onChange={(e) => setForm((f) => ({ ...f, budget: e.target.value }))}
                          className={`${field} ${!form.budget ? "text-ink/35" : "text-ink"}`}
                        >
                          <option value="" disabled>
                            Presupuesto aprox.
                          </option>
                          {PRESUPUESTOS.map((p) => (
                            <option key={p} value={p}>
                              {p}
                            </option>
                          ))}
                        </select>
                      </div>

                      <input
                        type="tel"
                        placeholder="Tu teléfono (opcional)"
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                        className={field}
                      />

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-rose-deep text-cream font-montserrat font-semibold text-[13px] uppercase tracking-[0.12em] py-4 mt-1 hover:bg-dusky-rose transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          "Enviando..."
                        ) : (
                          <>
                            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Cotizar por WhatsApp
                          </>
                        )}
                      </button>
                    </form>

                    <p className="mt-4 text-center text-[11px] font-montserrat text-ink/30">
                      Sin spam. Sin compromiso. Solo te respondemos si podemos ayudarte.
                    </p>
                  </>
                ) : (
                  <div className="text-center py-4">
                    <div className="w-14 h-14 bg-cream/60 flex items-center justify-center mx-auto mb-5">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M5 13l4 4L19 7" stroke="#c9a87c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="font-fraunces font-medium text-[1.3rem] text-ink leading-[1.2]">
                      ¡Perfecto, {form.name}!
                    </h3>
                    <p className="mt-3 text-[13.5px] font-montserrat text-ink/60 leading-[1.75]">
                      Se abrió WhatsApp con tu consulta. Responderemos con disponibilidad y precios a la brevedad.
                    </p>
                    <button
                      onClick={dismiss}
                      className="mt-7 text-[12px] font-montserrat font-semibold text-rose-deep uppercase tracking-[0.1em] hover:text-dusky-rose transition-colors"
                    >
                      Cerrar
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
