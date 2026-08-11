import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const headingFont = Source_Serif_4({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Strategic Value™ — Inteligência Operacional para PME e Média Empresa",
  description:
    "Diagnóstico que identifica onde sua empresa perde valor econômico — e parceria de longo prazo para capturar esse valor de volta.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${bodyFont.variable} ${headingFont.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-sv-black font-sans text-sv-gray-50 antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
