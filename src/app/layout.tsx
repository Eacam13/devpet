import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://devpet.vercel.app'),
  title: {
    default: "Dev Pet - Cuidados Veterinários Profissionais",
    template: "%s | Dev Pet"
  },
  description: "Cuidando do seu pet com amor e dedicação. Oferecemos os melhores serviços veterinários para seu companheiro, incluindo consultas, vacinas, cirurgias e muito mais.",
  keywords: [
    "veterinária",
    "pet shop",
    "animais",
    "cães",
    "gatos",
    "pet care",
    "clínica veterinária",
    "banho e tosa",
    "vacinação"
  ],
  authors: [{ name: "Dev Pet", url: "https://devpet.vercel.app" }],
  creator: "Dev Pet",
  publisher: "Dev Pet",
  
  // Configurações Open Graph para compartilhamento em redes sociais
  openGraph: {
    title: "Dev Pet - Cuidados Veterinários Profissionais",
    description: "Cuidando do seu pet com amor e dedicação. Oferecemos os melhores serviços veterinários para seu companheiro.",
    url: "https://devpet.vercel.app",
    siteName: "Dev Pet",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dev Pet - Cuidados Veterinários",
      },
      {
        url: "/og-image-square.jpg",
        width: 600,
        height: 600,
        alt: "Dev Pet - Logo",
      }
    ],
    locale: "pt_BR",
    type: "website",
  },

  // Configurações Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Dev Pet - Cuidados Veterinários Profissionais",
    description: "Cuidando do seu pet com amor e dedicação. Serviços veterinários completos.",
    images: ["/twitter-image.jpg"],
    creator: "@devpet",
    site: "@devpet",
  },

  // Configurações de ícones
  icons: {
    icon: [
      { url: "/logoico.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#22c55e", // cor verde do tema
      },
    ],
  },

  // Configurações de manifesto para PWA
  manifest: "/manifest.json",

  // Configurações adicionais
  alternates: {
    canonical: "https://devpet.vercel.app",
    languages: {
      'pt-BR': "https://devpet.vercel.app",
    },
  },

  // Configurações de robôs
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Verificação de propriedade do site
  verification: {
    google: "google-site-verification-code", // Adicione seu código de verificação
    yandex: "yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className={`${poppins.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
