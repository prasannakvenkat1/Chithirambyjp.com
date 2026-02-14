import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export const metadata: Metadata = {
  title: "Chithiram Art School by JP | Art Classes in Akkarai, ECR, Chennai",
  description:
    "Art classes near Shollinganallur, ECR, Neelangarai, Pallavakkam, Uthandi & Akkarai, Chennai. Drawing, sketching, painting, storytelling courses for kids & adults. Tanjore art projects undertaken. Free trial class available.",
  keywords: [
    "art classes Chennai",
    "art school Chennai",
    "drawing classes Shollinganallur",
    "painting classes ECR",
    "art classes near me",
    "art classes Neelangarai",
    "art classes Pallavakkam",
    "art classes Uthandi",
    "art classes Akkarai",
    "art classes ECR Chennai",
    "kids art classes Chennai",
    "drawing classes for kids",
    "painting classes for kids",
    "storytelling classes Chennai",
    "Tanjore painting orders Chennai",
    "art school near Shollinganallur",
    "art school ECR road",
    "Chithiram Art School",
    "Chithiram by JP",
    "art trail kids",
    "fine arts classes Chennai",
    "sketching classes",
    "oil painting classes Chennai",
    "watercolour classes Chennai",
    "art classes for adults Chennai",
  ],
  openGraph: {
    title: "Chithiram Art School by JP | Art Classes in ECR, Chennai",
    description:
      "Art classes near Shollinganallur, ECR, Neelangarai, Pallavakkam, Uthandi & Akkarai. Drawing, painting, storytelling for all ages. Free trial class!",
    type: "website",
    locale: "en_IN",
    siteName: "Chithiram Art School by JP",
  },
  alternates: {
    canonical: "https://chithirambyjp.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ArtSchool",
  name: "Chithiram Art School by JP",
  alternateName: "Chithiram by JP",
  description:
    "Art school in Akkarai, Chennai offering drawing, sketching, painting, storytelling courses for kids and adults. Tanjore art projects undertaken.",
  url: "https://chithirambyjp.com",
  telephone: "+917550003723",
  email: "chithirambyjp@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "14, Lilly Pond Street, Akkarai",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600119",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.89,
    longitude: 80.255,
  },
  areaServed: [
    { "@type": "City", name: "Chennai" },
    { "@type": "Place", name: "Shollinganallur" },
    { "@type": "Place", name: "ECR" },
    { "@type": "Place", name: "Neelangarai" },
    { "@type": "Place", name: "Pallavakkam" },
    { "@type": "Place", name: "Uthandi" },
    { "@type": "Place", name: "Akkarai" },
  ],
  sameAs: [
    "https://facebook.com/chithirambyjp",
    "https://instagram.com/chithirambyjp",
    "https://youtube.com/@chithirambyjp",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "20:00",
  },
  priceRange: "$$",
  image: "https://chithirambyjp.com/images/chithirambyjplogo.png",
  founder: {
    "@type": "Person",
    name: "JP - JayaPriya",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Art Courses",
    itemListElement: [
      {
        "@type": "Course",
        name: "Art Trail",
        description: "Creative art programs for children ages 4-12",
      },
      {
        "@type": "Course",
        name: "Storytelling",
        description: "Storytelling workshops for kids and adults",
      },
    ],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" href="/images/chithirambyjplogo.png" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
