import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: "400",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Artes Group",
  description:
    "Empresa argentina líder en la realización y organización de shows y eventos especiales, tanto en la República Argentina como en el resto de América.",
  keywords: [
    "eventos",
    "shows",
    "Argentina",
    "producción",
    "espectáculos",
    "Artes Group",
    "conciertos",
    "organización de eventos",
    "artistas",
    "música",
  ],
  openGraph: {
    title: "Artes Group",
    description:
      "Líderes en la realización y organización de shows y eventos especiales en Argentina y América.",
    url: "https://artesgroup.com",
    siteName: "Artes Group",
    images: [
      {
        url: "/images/black-logo.png",
        width: 1200,
        height: 630,
        alt: "Artes Group - Shows y Eventos",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artes Group",
    description:
      "Empresa argentina líder en la realización y organización de shows y eventos especiales.",
    images: ["/images/black-logo.png"],
  },
  authors: [{ name: "Artes Group", url: "https://artesgroup.com" }],
  creator: "Artes Group",
  publisher: "Artes Group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body
        className={`${inter.variable} ${anton.variable} bg-ag-black text-white`}
      >
        <img
          src="/images/Noise.png"
          alt="noise"
          className="fixed top-0 left-0 w-screen h-screen object-cover opacity-70 pointer-events-none"
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
