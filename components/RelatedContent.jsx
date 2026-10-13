import Link from "next/link";
import { getGuide } from "@/lib/guides";

const landings = {
  "/crm-coachs": {
    kicker: "Offre",
    title: "CRM pour coachs",
    text: "Pipeline, rendez-vous, relances et accès au cours dans le même compte GoHighLevel.",
  },
  "/agence-gohighlevel-nantes": {
    kicker: "Offre",
    title: "Agence à Nantes",
    text: "Le siège, le cadre francophone, et ce qui se configure à distance.",
  },
  "/migration-gohighlevel": {
    kicker: "Offre",
    title: "Migration",
    text: "L’ordre pour quitter Kajabi, Systeme.io ou ActiveCampaign sans couper les accès.",
  },
  "/services": {
    kicker: "Offre",
    title: "Services",
    text: "Migration, setup, délivrabilité, SaaS mode, référencement et agents IA.",
  },
  "/referencement": {
    kicker: "Offre",
    title: "SEO et GEO",
    text: "Des pages que Google peut lire, et que les réponses des IA peuvent citer.",
  },
  "/methode": {
    kicker: "Offre",
    title: "Méthode",
    text: "Inventaire, reconstruction, bascule, puis les jours d’après.",
  },
  "/guide": {
    kicker: "Guide",
    title: "Tous les articles",
    text: "Prix, migrations, SaaS mode, RGPD, délivrabilité, espace membres, SEO.",
  },
  "/audit": {
    kicker: "Offre",
    title: "Audit de stack",
    text: "Le formulaire gratuit compare les outils. Le forfait écrit, lui, est à part.",
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
