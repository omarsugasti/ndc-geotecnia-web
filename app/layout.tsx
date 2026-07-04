import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://ndc-geotecnia.com"),
  title: {
    default: "NDC Geotecnia — Estudios confiables, estructuras seguras",
    template: "%s | NDC Geotecnia",
  },
  description:
    "Empresa especializada en estudios de suelos, geología y geotecnia. Anclajes, estabilización de taludes, shotcrete, micro pilotes y prospección mineral en Panamá.",
  keywords: [
    "geotecnia Panamá",
    "estudios de suelos Panamá",
    "anclajes Panamá",
    "estabilización de taludes Panamá",
    "shotcrete Panamá",
    "micropilotes Panamá",
    "geología Panamá",
  ],
  openGraph: {
    title: "NDC Geotecnia — Estudios confiables, estructuras seguras",
    description:
      "Empresa especializada en estudios de suelos, geología y geotecnia en Panamá.",
    siteName: "NDC Geotecnia",
    locale: "es_PA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
