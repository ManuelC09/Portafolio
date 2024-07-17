import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const SpaceGrotesk = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000/"),

	title: "Manuel Conrado",
	authors: {
		name: "Manuel Conrado",
	},

	description:"Soy un desarrollador de software junior y estudiante de ingeniería electrónica. Me encanta aprender y compartir conocimiento. Aquí encontrarás información sobre mis proyectos, habilidades y experiencia.",
	openGraph: {
		title: "Manuel Conrado Portafolio",
		description:
			"Soy un desarrollador de software junior y estudiante de ingeniería electrónica. Me encanta aprender y compartir conocimiento. Aquí encontrarás información sobre mis proyectos, habilidades y experiencia.",
		url: "http://localhost:3000/",
		siteName: "Manuel Conrado | Portafolio",
		images: "/Captura de pantalla_6.jpeg",
		type: "website",
	},
	keywords: ["python", "backend", "django", "flask", "manuel", "manuelconrado", "manuel conrado", "portafolio", "portfolio", "cv", "currículum", "manuelfernando"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={SpaceGrotesk.className}>{children}</body>
    </html>
  );
}
