import type { Metadata } from "next";
import { Fraunces, Montserrat, Alex_Brush } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import CustomCursor from "@/components/shared/CustomCursor";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces-var",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat-var",
  display: "swap",
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-alex-var",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Crealtiva Studio | Fotografía & Video en Quito",
    template: "%s | Crealtiva Studio",
  },
  description:
    "Estudio de fotografía y video en Quito. Bodas, quinceaños, sesiones de estudio, embarazo, académicos y más. Capturamos tus momentos con calidez y estilo editorial.",
  keywords: [
    "fotógrafo Quito",
    "fotografía de bodas Quito",
    "quinceaños Quito",
    "sesiones de estudio",
    "fotografía embarazo Quito",
    "Crealtiva Studio",
  ],
  authors: [{ name: "Crealtiva Studio" }],
  creator: "Crealtiva Studio",
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://crealtivaestudio.com",
    siteName: "Crealtiva Studio",
    title: "Crealtiva Studio | Fotografía & Video en Quito",
    description:
      "Convertimos momentos irrepetibles en imágenes que se miran cien veces sin cansar.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crealtiva Studio | Fotografía & Video en Quito",
    description:
      "Convertimos momentos irrepetibles en imágenes que se miran cien veces sin cansar.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${montserrat.variable} ${alexBrush.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-montserrat text-ink antialiased">
        <CustomCursor />
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
