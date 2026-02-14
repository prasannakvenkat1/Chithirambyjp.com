import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export const metadata: Metadata = {
  title: "Chithiram Art School by JP | Where Art Comes Alive",
  description:
    "An art school in Chennai offering courses in drawing, sketching, storytelling, painting, and more. Nurturing creativity in students of all ages.",
  keywords: [
    "art school Chennai",
    "drawing classes",
    "painting classes",
    "fine arts",
    "sculpting",
    "Tanjore painting",
    "art classes for kids",
    "Chithiram",
  ],
  openGraph: {
    title: "Chithiram Art School by JP",
    description:
      "An art school in Chennai offering courses in drawing, sketching, storytelling, painting, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
