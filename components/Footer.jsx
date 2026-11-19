import { guides } from "@/lib/guides";
import { site } from "@/lib/site";

const offer = [
  ["/services", "L’offre"],
  ["/contact", "Demander une étude"],
  ["/methode", "Méthode"],
  ["/migration-gohighlevel", "Transfert des données"],
  ["/crm-coachs", "Coachs et formateurs"],
  ["/agence-gohighlevel-nantes", "Agence à Nantes"],
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
            Outil GoHighLevel, implantation, WhatsApp, transfert des données et agent IA Grok Bot. Frais de setup,
            puis un abonnement mensuel pour la mise à disposition des outils et la maintenance. ©{" "}
            {new Date().getFullYear()} Promarket. Promarket est une marque de MCA {site.legalForm} — SIREN {site.siren}.
          </p>
        </div>
        <nav aria-label="Offre">
          <p className="kicker">Offre</p>
          <ul>
            {offer.map(([href, label]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Guide">
          <p className="kicker">Guide</p>
          <ul>
            <li>
              <a href="/guide">Tous les articles</a>
            </li>
            {guides.map((guide) => (
              <li key={guide.slug}>
                <a href={`/guide/${guide.slug}`}>{guide.nav}</a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Informations">
          <p className="kicker">Informations</p>
          <ul>
            {legal.map(([href, label]) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
