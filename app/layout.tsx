import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Maven_Pro } from "next/font/google";
import "react-loading-skeleton/dist/skeleton.css";

export const metadata: Metadata = {
  title: "CodanteVagas",
  description:
    "O CodanteVagas conecta candidatos a empregos ideais, oferecendo funcionalidades intuitivas para busca e gerenciamento de vagas.",
};

const mavenPro = Maven_Pro({
  subsets: ["latin"],
  variable: "--font-maven-pro",
});

console.log();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={mavenPro.variable}>
      <body>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex flex-1 pt-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
