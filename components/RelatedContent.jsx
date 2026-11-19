import Link from "next/link";
import { getGuide } from "@/lib/guides";

const landings = {
  "/crm-coachs": {
    kicker: "Offre",
    title: "Coachs et formateurs",
    text: "La même offre complète, quand l’activité est le coaching, la formation ou un business en ligne.",
  },
  "/agence-gohighlevel-nantes": {
    kicker: "Offre",
    title: "Agence à Nantes",
    text: "Le siège est à Nantes. Le travail se fait à distance, en français.",
  },
  "/migration-gohighlevel": {
    kicker: "Offre",
    title: "Transfert des données",
    text: "Contacts et historique repris depuis l’outil précédent, sans en faire une offre à part.",
  },
  "/services": {
    kicker: "Offre",
    title: "L’offre",
    text: "Outil GoHighLevel, implantation, WhatsApp, transfert des données, agent IA Grok Bot, maintenance.",
  },
  "/contact": {
    kicker: "Contact",
    title: "Demander une étude",
    text: "Le formulaire, pour décrire la situation ou être rappelé. Pas de prise de rendez-vous.",
  },
  "/methode": {
    kicker: "Méthode",
    title: "Méthode",
    text: "Inventaire, reconstruction, bascule, puis les jours d’après.",
  },
  "/guide": {
    kicker: "Guide",
    title: "Tous les articles",
    text: "Migrations, conformité, délivrabilité, espace membres, agent IA.",
  },
};

export function RelatedContent({ hrefs, label = "Pour aller plus loin" }) {
  const items = hrefs
    .map((href) => {
      if (landings[href]) return { href, ...landings[href] };
      if (href.startsWith("/guide/")) {
        const guide = getGuide(href.slice("/guide/".length));
        if (!guide) return null;
        return { href, kicker: guide.category, title: guide.nav, text: guide.description };
      }
      return null;
    })
    .filter(Boolean);
  if (!items.length) return null;
  return (
    <nav className="related" aria-label={label}>
      <p className="kicker">{label}</p>
      <div className="grid-2" style={{ marginTop: 12 }}>
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="card" style={{ textDecoration: "none" }}>
            <p className="tag">{item.kicker}</p>
            <p className="card-title">{item.title}</p>
            <p className="muted">{item.text}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
}
