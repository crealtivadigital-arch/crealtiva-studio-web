"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/lib/data/navigation";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Option {
  label: string;
  value: string;
  emoji?: string;
  next: StepId;
}

type StepId =
  | "welcome"
  | "service"
  | "service_detail"
  | "date"
  | "action"
  | "end";

interface Step {
  id: StepId;
  messages: string[];
  options?: Option[];
}

interface Message {
  from: "bot" | "user";
  text: string;
}

// ─── Conversational Flow ─────────────────────────────────────────────────────

const SERVICE_OPTIONS: Option[] = [
  { label: "Bodas", value: "Bodas", emoji: "💍", next: "service_detail" },
  { label: "Quinceaños", value: "Quinceaños", emoji: "🌸", next: "service_detail" },
  { label: "Pedida de Mano", value: "Pedida de Mano", emoji: "💎", next: "service_detail" },
  { label: "Embarazo & Newborn", value: "Embarazo & Newborn", emoji: "🤱", next: "service_detail" },
  { label: "Sesiones de Estudio", value: "Sesiones de Estudio", emoji: "📸", next: "service_detail" },
  { label: "Académicos", value: "Académicos", emoji: "🎓", next: "service_detail" },
  { label: "Eventos Familiares", value: "Eventos Familiares", emoji: "🎉", next: "service_detail" },
  { label: "Otro servicio", value: "Otro", emoji: "✨", next: "service_detail" },
];

const SERVICE_MESSAGES: Record<string, string> = {
  Bodas: "Bodas es uno de nuestros servicios más completos. Tenemos paquetes desde $65 hasta $750, cubriendo desde bodas civiles íntimas hasta coberturas de 12 horas con drone y video cinematográfico.",
  Quinceaños: "Para quinceaños tenemos paquetes desde $65 hasta $475, con opciones de foto, video, photobook y sesión prequince en exteriores.",
  "Pedida de Mano": "Las pedidas de mano son momentos únicos e irrepetibles. Tenemos sesiones diseñadas para capturar esa sorpresa y emoción de forma natural y elegante.",
  "Embarazo & Newborn": "Sesiones íntimas y artísticas para mamás y recién nacidos. Capturamos esa magia única antes y después del nacimiento con mucha calidez.",
  "Sesiones de Estudio": "Desde $60 — sesiones de imagen profesional, books de modelos, retratos corporativos y sesiones de marca personal con iluminación de estudio.",
  Académicos: "Graduaciones, juramentos de bandera, incorporaciones universitarias, entrega de mandiles y anuarios estudiantiles. Cobertura completa para instituciones y alumnos.",
  "Eventos Familiares": "Bautizos, cumpleaños, revelaciones de género, baby showers, aniversarios — cubrimos todo tipo de celebración familiar desde $80.",
  Otro: "Con gusto te asesoramos. Cuéntanos un poco más sobre lo que necesitas y encontramos la mejor opción para ti.",
};

const DATE_OPTIONS: Option[] = [
  { label: "Muy pronto (2 semanas)", value: "Muy pronto — próximas 2 semanas", emoji: "⚡", next: "action" },
  { label: "En 1 a 3 meses", value: "En 1 a 3 meses", emoji: "📅", next: "action" },
  { label: "En 3 meses o más", value: "En 3 meses o más", emoji: "🗓️", next: "action" },
  { label: "Sin fecha definida", value: "Sin fecha definida aún", emoji: "💭", next: "action" },
];

const ACTION_OPTIONS: Option[] = [
  { label: "Recibir cotización", value: "cotizacion", emoji: "📋", next: "end" },
  { label: "Hablar con un asesor", value: "asesor", emoji: "👤", next: "end" },
];

// ─── WhatsApp message builder ─────────────────────────────────────────────────

function buildWhatsAppMessage(
  service: string,
  date: string,
  action: string
): string {
  const actionText =
    action === "cotizacion"
      ? "una cotización personalizada"
      : "hablar con un asesor de Crealtiva Studio";

  return `Hola, me contacto desde la web de Crealtiva Studio.

📸 Servicio de interés: ${service}
📅 Fecha aproximada: ${date}
💬 Solicitud: Me gustaría ${actionText}.

¿Me pueden ayudar?`;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState<StepId>("welcome");
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [started, setStarted] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Hide pulse after 8s
  useEffect(() => {
    const t = setTimeout(() => setShowPulse(false), 8000);
    return () => clearTimeout(t);
  }, []);

  // Scroll to bottom on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Start conversation when chat opens
  useEffect(() => {
    if (open && !started) {
      setStarted(true);
      addBotMessages(
        [
          "Hola, soy el asistente de Crealtiva Studio 👋",
          "Estoy aquí para ayudarte a encontrar el servicio perfecto y conectarte con nuestro equipo.",
          "¿Qué tipo de sesión o evento estás buscando?",
        ],
        () => setStep("service")
      );
    }
  }, [open, started]);

  function addBotMessages(texts: string[], onDone?: () => void) {
    let delay = 0;
    texts.forEach((text, i) => {
      delay += i === 0 ? 400 : 900;
      setTimeout(() => {
        setMessages((prev) => [...prev, { from: "bot", text }]);
        if (i === texts.length - 1 && onDone) {
          setTimeout(onDone, 300);
        }
      }, delay);
    });
  }

  function handleServiceSelect(option: Option) {
    setSelectedService(option.value);
    setMessages((prev) => [...prev, { from: "user", text: `${option.emoji} ${option.label}` }]);
    const detail = SERVICE_MESSAGES[option.value] ?? SERVICE_MESSAGES["Otro"];
    addBotMessages(
      [detail, "¿Tienes una fecha aproximada en mente?"],
      () => setStep("date")
    );
  }

  function handleDateSelect(option: Option) {
    setSelectedDate(option.value);
    setMessages((prev) => [...prev, { from: "user", text: `${option.emoji} ${option.label}` }]);
    addBotMessages(
      ["Perfecto. ¿Cómo prefieres continuar?"],
      () => setStep("action")
    );
  }

  function handleActionSelect(option: Option) {
    setMessages((prev) => [...prev, { from: "user", text: `${option.emoji} ${option.label}` }]);
    const closing =
      option.value === "cotizacion"
        ? "Con gusto preparamos tu cotización personalizada. Al hacer clic, uno de nuestros asesores recibirá todos tus datos y te responderá pronto."
        : "Perfecto. Te voy a conectar directamente con uno de nuestros asesores para que puedas resolver todas tus dudas.";
    addBotMessages([closing], () => setStep("end"));

    const waMsg = buildWhatsAppMessage(selectedService, selectedDate, option.value);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "__CTA__:" + waUrl },
      ]);
    }, 3200);
  }

  function getCurrentOptions(): Option[] | null {
    if (step === "service") return SERVICE_OPTIONS;
    if (step === "date") return DATE_OPTIONS;
    if (step === "action") return ACTION_OPTIONS;
    return null;
  }

  const currentOptions = getCurrentOptions();

  return (
    <>
      {/* Trigger button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Tooltip bubble */}
        <AnimatePresence>
          {showPulse && !open && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.9 }}
              className="bg-white border border-pearl shadow-lg px-4 py-2.5 max-w-[200px] text-right"
            >
              <p className="text-xs font-montserrat text-ink leading-snug">
                ¿Tienes dudas? Hablemos 💬
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar chat" : "Abrir asistente"}
          className="w-14 h-14 bg-rose-deep text-white flex items-center justify-center shadow-lg shadow-rose-deep/30 relative"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
        >
          {/* Pulse ring */}
          {showPulse && !open && (
            <span className="absolute inset-0 rounded-none animate-ping bg-rose-deep/40" />
          )}
          <AnimatePresence mode="wait">
            {open ? (
              <motion.svg
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </motion.svg>
            ) : (
              <motion.svg
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-[340px] max-h-[520px] bg-white border border-pearl shadow-2xl flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
          >
            {/* Header */}
            <div className="bg-ink px-4 py-3 flex items-center gap-3 flex-shrink-0">
              <div className="w-8 h-8 bg-dusky-rose/20 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="#B18093" strokeWidth={1.5} className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-montserrat font-semibold text-cream leading-none">
                  Crealtiva Studio
                </p>
                <p className="text-[10px] font-montserrat text-cream/50 mt-0.5 leading-none">
                  Asistente · Responde en segundos
                </p>
              </div>
              <div className="w-2 h-2 rounded-full bg-[#25D366] flex-shrink-0" />
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-0">
              <AnimatePresence initial={false}>
                {messages.map((msg, i) => {
                  if (msg.from === "bot" && msg.text.startsWith("__CTA__:")) {
                    const url = msg.text.replace("__CTA__:", "");
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 text-xs font-montserrat font-semibold tracking-wide hover:bg-[#1fb558] transition-colors w-full justify-center"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          Conectar con un asesor ahora
                        </a>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25 }}
                      className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] px-3.5 py-2.5 text-xs font-montserrat leading-relaxed ${
                          msg.from === "user"
                            ? "bg-rose-deep text-white"
                            : "bg-cream/60 text-ink border border-pearl"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {/* Typing indicator while step transitions */}
              {step === "welcome" && started && messages.length < 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-cream/60 border border-pearl px-3.5 py-2.5 flex gap-1 items-center">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="w-1.5 h-1.5 bg-ink/30 rounded-full"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Options */}
            <AnimatePresence>
              {currentOptions && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="border-t border-pearl px-3 py-3 flex flex-wrap gap-1.5 flex-shrink-0 bg-white"
                >
                  {currentOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        if (step === "service") handleServiceSelect(opt);
                        else if (step === "date") handleDateSelect(opt);
                        else if (step === "action") handleActionSelect(opt);
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 border border-dusky-rose/40 text-[11px] font-montserrat text-ink hover:bg-dusky-rose/10 hover:border-dusky-rose transition-colors"
                    >
                      {opt.emoji && <span>{opt.emoji}</span>}
                      {opt.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer */}
            <div className="px-4 py-2 bg-cream/30 border-t border-pearl flex-shrink-0">
              <p className="text-[10px] font-montserrat text-ink/40 text-center">
                Crealtiva Studio · Quito, Ecuador
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
