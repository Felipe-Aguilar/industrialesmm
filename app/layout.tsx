import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/menu/Menu";

export const metadata: Metadata = {
  title: "Estructuras industriales MM ",
  description: "Estructuras y cubiertas industriales MM",
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
