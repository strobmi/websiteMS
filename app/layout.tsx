import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Michael Strobl – Digital denken. Wandel lenken.",
  description:
    "Senior IT-Berater & Projektmanager für digitale Transformation im Finanz- und Versicherungsbereich. 10+ Jahre Erfahrung bei BMF, UNIQA, AXA, Zurich und weiteren.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
