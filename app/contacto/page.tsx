import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contacto" };

export default function Page() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-cream/30">
      <div className="text-center">
        <p className="kicker text-dusky-rose">Contacto</p>
        <h1 className="font-fraunces text-4xl mt-3 text-ink">Contacto</h1>
        <p className="mt-4 text-sm font-montserrat text-ink/60">Próximamente disponible.</p>
      </div>
    </div>
  );
}
