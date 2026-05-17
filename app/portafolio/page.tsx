import type { Metadata } from "next";
import PortfolioGallery from "@/components/portfolio/PortfolioGallery";

export const metadata: Metadata = {
  title: "Portafolio de Fotografía en Quito",
  description:
    "Galería completa de fotografía de bodas, quinceaños, pedida de mano, embarazo, graduaciones y eventos en Quito. Crealtiva Studio — imágenes que se miran cien veces.",
  keywords: [
    "portafolio fotógrafo Quito",
    "galería fotos bodas Ecuador",
    "fotografía quinceaños portafolio",
    "Crealtiva Studio portafolio",
  ],
};

export default function PortafolioPage() {
  return <PortfolioGallery />;
}
