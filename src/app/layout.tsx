import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nidus - Enciclopédia de Aves do Brasil",
  description: "Descubra o mundo das aves brasileiras. A maior enciclopédia colaborativa com fotos, cantos, mapas de avistamentos e uma comunidade apaixonada por observação de pássaros.",
  keywords: ["aves", "pássaros", "brasil", "observação de aves", "birdwatching", "ornitologia", "natureza"],
  authors: [{ name: "Nidus" }],
  openGraph: {
    title: "Nidus - Enciclopédia de Aves do Brasil",
    description: "Descubra o mundo das aves brasileiras",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
