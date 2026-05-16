import type { Metadata } from "next";

export const metadata: Metadata = { title: "Eventos" };

export default function Page() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-cream/30">
      <div className="text-center">
        <p className="kicker text-dusky-rose">Eventos</p>
        <h1 className="font-fraunces text-4xl mt-3 text-ink">Eventos</h1>
        <p className="mt-4 text-sm font-montserrat text-ink/60">Próximamente disponible.</p>
      </div>
    </div>
  );
}
