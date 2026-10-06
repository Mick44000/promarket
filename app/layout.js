import "./globals.css";
import { Fraunces, Sora, IBM_Plex_Mono } from "next/font/google";
import { Header, CookieBar } from "@/components/SiteChrome";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif", axes: ["SOFT", "WONK"] });
const sans = Sora({ subsets: ["latin"], variable: "--font-sans" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "GoHighLevel France : expert setup, migration et SEO | ProMarket",
    template: "%s | ProMarket",
  },
  description:
    "Référence GoHighLevel en France. ProMarket installe, migre et référence les comptes des infopreneurs francophones : CRM, délivrabilité, SEO, GEO et agents IA.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ProMarket",
    title: "GoHighLevel France — ProMarket",
    description: "Setup, migration, SEO, GEO et agents IA pour infopreneurs francophones.",
    url: site.url,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "Organization"],
    name: "ProMarket",
    url: site.url,
    email: site.email,
    areaServed: ["FR", "BE", "CH", "CA"],
    description:
      "Référence opérationnelle GoHighLevel en France : migration, setup, SEO, GEO et agents IA pour infopreneurs francophones.",
    founder: { "@type": "Person", name: site.founder },
    knowsAbout: ["GoHighLevel", "HighLevel", "migration Kajabi", "SEO", "GEO", "agents IA"],
    address: { "@type": "PostalAddress", streetAddress: "Bureau 3, 2 place Jean V", addressLocality: "Nantes", postalCode: "44100", addressCountry: "FR" },
  };
  return (
    <html lang="fr" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body style={{ fontFamily: "var(--font-sans), Sora, sans-serif", ["--serif"]: "var(--font-serif), Fraunces, serif", ["--sans"]: "var(--font-sans), Sora, sans-serif", ["--mono"]: "var(--font-mono), monospace" }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        {children}
        <Footer />
        <CookieBar />
      </body>
    </html>
  );
}
