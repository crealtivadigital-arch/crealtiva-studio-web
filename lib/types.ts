export type ServiceCategory =
  | "bodas"
  | "quinceanios"
  | "pedida-de-mano"
  | "embarazo"
  | "sesiones-de-estudio"
  | "academicos"
  | "bautizos"
  | "eventos"
  | "sesiones-pareja"
  | "sesiones-cumpleanos"
  | "corporativos";

export interface Package {
  id: string;
  name: string;
  category: ServiceCategory;
  highlight: string;
  includes: string[];
  price: number;
  priceLabel?: string;
  duration?: string;
  featured?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  featured?: boolean;
}

export interface Promo {
  id: string;
  title: string;
  description: string;
  image?: string;
  validUntil: string;
  ctaText: string;
  ctaLink: string;
  type: "modal" | "banner" | "ribbon";
  active: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  serviceType: string;
  text: string;
  photo?: string;
  date: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
}

export interface PortfolioItem {
  id: string;
  src: string;
  alt: string;
  category: ServiceCategory;
  title?: string;
  aspectRatio?: "portrait" | "landscape" | "square";
}
