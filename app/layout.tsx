import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/menu/Menu";

export const metadata: Metadata = {
  title: "Estructuras industriales MM ",
  description: "Estructuras y cubiertas industriales MM",
  openGraph: {
    title: "Estructuras y Cubiertas Industriales MM",
    description: "Servicio de fabricación y mantenimiento a estructuras metálicas y montaje de estas, sirviendo como base a cualquier tipo de cubierta.",
    url: 'https://industrialesmm.vercel.app/',
    siteName: 'industrialesmm.com',
    images: [
        {
            url: "https://industrialesmm.vercel.app/images/Logotipo2.svg",
            width: 300,
            height: 266,
        },
    ],
    locale: 'es_MEX',
    type: 'website',
  },
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="es">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
