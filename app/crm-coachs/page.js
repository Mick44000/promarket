import Link from "next/link";
import { OfferCta } from "@/components/OfferCta";
import { RelatedContent } from "@/components/RelatedContent";

export const metadata = {
  title: "GoHighLevel pour coachs et formateurs",
  description:
    "Pour un coach ou un formateur, l’offre Promarket est la même : outil GoHighLevel, implantation, WhatsApp, transfert des données et agent IA.",
  alternates: { canonical: "/crm-coachs" },
  keywords: ["CRM coach", "GoHighLevel coach", "GoHighLevel formateur"],
};

const faqs = [
  [
    "L’offre est-elle différente pour un coach ?",
    "Non. C’est la même offre : l’outil mis à disposition, l’implantation, WhatsApp, le transfert des données et l’agent IA Grok Bot. Cette page décrit ce que ça change dans le quotidien d’un coach ou d’un formateur.",
  ],
  [
    "Où vivent le rendez-vous, la relance et l’accès au cours ?",
    "Dans le même compte. L’implantation pose le pipeline, les formulaires, le calendrier et les automatisations. S’il y a des contenus, le transfert les reconstruit et un compte de test les ouvre avant d’écrire à la liste.",
  ],
  [
    "Qui fournit l’outil ?",
    "Promarket. Il est mis à disposition dans l’abonnement mensuel, avec la maintenance.",
  ],
];

export default function CoachsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return (
    <main className="wrap article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="crumb">
        <Link href="/">Accueil</Link>
        {" › "}
        <Link href="/services">Offre</Link>
        {" › "}
        Coachs
      </p>
      <p className="kicker">Coachs et formateurs</p>
      <h1>La même offre, pour un coach ou un formateur.</h1>
      <p className="lede">
        Le contact, le rendez-vous, la relance et, s’il y a une formation, l’accès au cours vivent dans le compte
        GoHighLevel que Promarket met à disposition. Ce n’est pas un CRM vendu à part.
      </p>
      <h2>Ce que l’implantation range</h2>
      <p>
        Un pipeline dont les étapes sont les vôtres : nouveau contact, appel prévu, offre envoyée, client, perdu. Des
        formulaires qui créent la fiche. Un calendrier pour le rendez-vous. Des automatisations pour la confirmation,
        le rappel et la suite si la personne ne vient pas. Le Social Planner pour les publications.
      </p>
      <p>
        WhatsApp Business est connecté au même compte. Les SMS et les appels arrivent dans la même boîte. L’agent IA
        Grok Bot, relié par MCP, prospecte, publie, répond, suit les leads et fait le reporting.
      </p>
      <h2>S’il y a déjà un outil</h2>
      <p>
        Les contacts et l’historique se transfèrent. Kajabi, Systeme.io ou ActiveCampaign restent lisibles le temps de
        la bascule. Un compte de test ouvre le parcours avant le message à la liste. L’ordre est sur la page{" "}
        <Link href="/methode">Méthode</Link> et le détail sur la page{" "}
        <Link href="/migration-gohighlevel">Transfert</Link>. Le guide{" "}
        <Link href="/guide/espace-membres-gohighlevel">espace membres</Link> dit jusqu’où le portail va pour une
        formation, et ce qu’il ne remplace pas.
      </p>
      <p>
        Promarket ne coache pas le métier. Le partenaire est technique : le compte, la messagerie, le transfert et
        l’agent. Le cadre est sur la page <Link href="/agence-gohighlevel-nantes">agence</Link>. L’ensemble est sur la
        page <Link href="/services">Offre</Link>.
      </p>
      {faqs.map(([q, a]) => (
        <details className="qa" key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
      <RelatedContent hrefs={["/services", "/methode", "/migration-gohighlevel", "/guide/espace-membres-gohighlevel"]} label="Pages liées" />
      <p>
        <OfferCta />
      </p>
    </main>
  );
}
