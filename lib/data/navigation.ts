import type { NavItem } from "@/lib/types";

export const navigation: NavItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Servicios",
    href: "#servicios",
    children: [
      {
        label: "Momentos de Vida",
        href: "#",
        children: [
          { label: "Bodas", href: "/bodas", featured: true },
          { label: "Quinceaños", href: "/quinceanios", featured: true },
          { label: "Pedida de Mano", href: "/pedida-de-mano", featured: true },
          { label: "Bautizos & Comunión", href: "/bautizos" },
        ],
      },
      {
        label: "Familia & Celebración",
        href: "#",
        children: [
          { label: "Eventos Familiares", href: "/eventos" },
          { label: "Sesiones de Pareja", href: "/sesiones-pareja" },
          { label: "Sesiones de Cumpleaños", href: "/sesiones-cumpleanos" },
        ],
      },
      {
        label: "Sesiones & Retratos",
        href: "#",
        children: [
          { label: "Embarazo & Newborn", href: "/embarazo", featured: true },
          { label: "Sesiones de Estudio", href: "/sesiones-de-estudio", featured: true },
        ],
      },
      {
        label: "Profesional & Académico",
        href: "#",
        children: [
          { label: "Académicos", href: "/academicos", featured: true },
          { label: "Corporativos", href: "/corporativos" },
        ],
      },
    ],
  },
  { label: "Portafolio", href: "/portafolio" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export const WHATSAPP_NUMBER = "593998118083";
export const WHATSAPP_MESSAGE = "Hola, me interesa conocer más sobre sus servicios fotográficos.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
