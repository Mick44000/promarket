import "./globals.css";
import { Fraunces, Sora, IBM_Plex_Mono } from "next/font/google";
import { Header, Footer, CookieBar } from "@/components/SiteChrome";
import { site } from "@/lib/site";

const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif", axes: ["SOFT", "WONK"] });
const sans = Sora({ subsets: ["latin"], variable: "--font-sans" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Expert GoHighLevel francophone — migration et setup | ProMarket",
    template: "%s | ProMarket",
  },
  description:
    "ProMarket migre les coachs et infopreneurs francophones vers GoHighLevel : Kajabi, Systeme.io, ActiveCampaign. Setup, délivrabilité, espace membres. Audit gratuit.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "ProMarket",
    title: "Expert GoHighLevel francophone — ProMarket",
    description: "Migration et setup GoHighLevel pour infopreneurs. Un outil, une facture, zéro perte d’accès.",
    url: site.url,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ProMarket",
    url: site.url,
    email: site.email,
    areaServed: ["FR", "BE", "CH", "CA"],
    description: "Migration et setup GoHighLevel pour infopreneurs francophones.",
    founder: site.founder,
    address: { "@type": "PostalAddress", streetAddress: "2 place Jean V", addressLocality: "Nantes", postalCode: "44000", addressCountry: "FR" },
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
