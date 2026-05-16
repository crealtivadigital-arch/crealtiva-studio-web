import type { Metadata } from "next";

export const metadata: Metadata = { title: "Portafolio" };

export default function PortfolioCategoriaPage({ params }: { params: Promise<{ categoria: string }> }) {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-cream/30">
      <p className="kicker text-dusky-rose">Portafolio por categoría — próximamente</p>
    </div>
  );
}
