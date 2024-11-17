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
  title: "Dev Pet - Cuidados Veterinários Profissionais",
  description: "Cuidando do seu pet com amor e dedicação. Oferecemos os melhores serviços veterinários para seu companheiro, incluindo consultas, vacinas, cirurgias e muito mais.",
  openGraph: {
    type: 'website',
    title: "Dev Pet - Cuidados Veterinários",
    description: "Cuidando do seu pet com amor e dedicação. Oferecemos os melhores serviços veterinários para seu companheiro.",
    url: 'https://devpet.vercel.app',
    siteName: 'Dev Pet',
    images: [{
      url: '/banner-share.png',
      width: 1200,
      height: 630,
      alt: 'Dev Pet - Cuidados Veterinários'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dev Pet - Cuidados Veterinários",
    description: "Cuidando do seu pet com amor e dedicação. Oferecemos os melhores serviços veterinários para seu companheiro.",
    images: ['/banner-share.png']
  }
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
