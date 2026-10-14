import "./globals.css";
import { Header, CookieBar, ChromeScript } from "@/components/SiteChrome";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

const GA_ID = "G-5RCCZSCZ2N";

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
    <html lang="fr">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        {children}
        <Footer />
        <CookieBar />
        <ChromeScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');function loadGA(){var s=document.createElement('script');s.src='https://www.googletagmanager.com/gtag/js?id=${GA_ID}';s.async=true;document.head.appendChild(s);}if(document.readyState==='complete')loadGA();else window.addEventListener('load',loadGA);`,
          }}
        />
      </body>
    </html>
  );
}
