import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.leevelop.com.br"),
  title: { default: "Leevelop | Estratégia, design e tecnologia", template: "%s | Leevelop" },
  description: "Estratégia, design de produtos e engenharia de software para criar soluções digitais que fazem sentido.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Leevelop",
    title: "Leevelop | Estratégia, design e tecnologia",
    description: "Estratégia, design e tecnologia para decisões melhores e soluções digitais relevantes.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={manrope.variable}>{children}</body></html>;
}
