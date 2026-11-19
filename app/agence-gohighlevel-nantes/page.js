import Link from "next/link";
import { OfferCta } from "@/components/OfferCta";
import { RelatedContent } from "@/components/RelatedContent";
import { site } from "@/lib/site";

export const metadata = {
  title: "Agence GoHighLevel à Nantes",
  description:
    "Promarket, à Nantes, déploie une offre GoHighLevel complète à distance : outil, implantation, WhatsApp, transfert des données et agent IA.",
  alternates: { canonical: "/agence-gohighlevel-nantes" },
  keywords: ["agence GoHighLevel Nantes", "agence GoHighLevel France", "Promarket Nantes"],
};

const faqs = [
  [
    "Faut-il être à Nantes pour travailler ensemble ?",
    "Non. Le siège de MCA, la société qui porte Promarket, est au 2 place Jean V, 44100 Nantes. Le travail se fait à distance, pour des équipes francophones en France, en Belgique, en Suisse et au Canada.",
  ],
  [
    "Qui fournit l’outil GoHighLevel ?",
    "Promarket. L’outil est mis à disposition dans l’abonnement mensuel, avec la maintenance. Promarket n’est pas l’éditeur du logiciel.",
  ],
  [
    "L’interface est-elle en français ?",
    "L’interface est surtout en anglais. Les pages, les e-mails, les automatisations et l’accompagnement sont en français.",
  ],
];

export default function AgencePage() {
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
        Nantes
      </p>
      <p className="kicker">Agence</p>
      <h1>Promarket, à Nantes, à distance.</h1>
      <p className="lede">
        {site.founder} porte Promarket depuis Nantes. L’offre est la même partout : l’outil GoHighLevel mis à
        disposition, l’implantation, WhatsApp, le transfert des données et l’agent IA Grok Bot.
      </p>
      <p>
        Le siège de {site.editor}, {site.legalForm}, est au {site.address}. Les accès se font sur le compte, à distance.
        Le parcours est décrit sur la page <Link href="/services">Offre</Link>. La méthode de transfert est sur la page{" "}
        <Link href="/methode">Méthode</Link>.
      </p>
      <h2>Ce qui se configure</h2>
      <p>
        Le CRM, les pipelines, les formulaires, les calendriers, les automatisations et le Social Planner. WhatsApp
        Business est connecté au compte, avec les SMS et les appels dans la même boîte. Les contacts et l’historique
        viennent de l’outil précédent. L’agent Grok Bot est branché au compte par MCP.
      </p>
      <p>
        Le cadre francophone — interface surtout en anglais, pages et accompagnement en français — est dans le guide{" "}
        <Link href="/guide/gohighlevel-france">GoHighLevel en France</Link>. Pour un coach ou un formateur, la page{" "}
        <Link href="/crm-coachs">coachs et formateurs</Link> reprend la même offre.
      </p>
      {faqs.map(([q, a]) => (
        <details className="qa" key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
      <RelatedContent hrefs={["/services", "/methode", "/crm-coachs", "/guide/gohighlevel-france"]} label="Pages liées" />
      <p>
        <OfferCta />
      </p>
    </main>
  );
}
