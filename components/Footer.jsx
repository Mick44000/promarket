import Link from "next/link";
import { guides } from "@/lib/guides";
import { site } from "@/lib/site";

const offer = [
  ["/services", "Services"],
  ["/methode", "Méthode"],
  ["/audit", "Audit de stack"],
  ["/instituts", "Instituts et centres laser"],
  ["/referencement", "SEO et GEO"],
  ["/agence-gohighlevel-nantes", "Agence à Nantes"],
  ["/migration-gohighlevel", "Migration"],
  ["/crm-coachs", "CRM pour coachs"],
];

const legal = [
  ["/mentions-legales", "Mentions légales"],
  ["/confidentialite", "Confidentialité"],
  ["/cgv", "CGV"],
];

export function Footer() {
  return (
    <footer className="site">
      <div className="wrap foot">
        <div>
          <strong style={{ color: "var(--ink)" }}>{site.name}</strong>
          <p style={{ margin: "6px 0 0", maxWidth: 360 }}>
            Setup, migration et audit GoHighLevel pour les infopreneurs francophones. Indépendant de HighLevel, LLC. ©{" "}
            {new Date().getFullYear()} Promarket. Promarket est une marque de MCA {site.legalForm} — SIREN {site.siren}.
          </p>
        </div>
        <nav aria-label="Offre">
          <p className="kicker">Offre</p>
          <ul>
            {offer.map(([href, label]) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Guide">
          <p className="kicker">Guide</p>
          <ul>
            <li>
              <Link href="/guide">Tous les articles</Link>
            </li>
            {guides.map((guide) => (
              <li key={guide.slug}>
                <Link href={`/guide/${guide.slug}`}>{guide.nav}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Informations">
          <p className="kicker">Informations</p>
          <ul>
            {legal.map(([href, label]) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
