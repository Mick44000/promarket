import Link from "next/link";
import { OfferCta } from "@/components/OfferCta";
import { RelatedContent } from "@/components/RelatedContent";

export const metadata = {
  title: "Transfert des données vers GoHighLevel",
  description:
    "Transfert des contacts et de l’historique vers GoHighLevel depuis Kajabi, Systeme.io, ActiveCampaign ou ClickFunnels. Une composante de l’offre Promarket.",
  alternates: { canonical: "/migration-gohighlevel" },
  keywords: ["migration gohighlevel", "transfert GoHighLevel", "alternative Kajabi", "alternative Systeme.io"],
};

const faqs = [
  [
    "Par quoi commence le transfert ?",
    "Par l’inventaire : offres, tags, domaines, envoi, paiements en cours, liste chaude et liste froide. L’import des contacts vient après cette carte.",
  ],
  [
    "Les accès en cours sont-ils coupés ?",
    "L’ancien outil reste lisible le temps de la bascule. Un compte de test ouvre le parcours avant d’écrire à la liste. La progression fine d’un autre outil ne se rejoue pas à l’identique : on documente l’offre active et on ouvre ce qui a déjà été acheté.",
  ],
  [
    "Puis-je garder l’ancien outil en parallèle ?",
    "Le temps de comparer et de basculer produit par produit. Pas comme architecture finale : deux outils de capture, ce sont deux sources de vérité.",
  ],
  [
    "Kajabi, Systeme.io et ActiveCampaign se transfèrent-ils de la même façon ?",
    "L’ordre est le même : inventaire, reconstruction, test, bascule. Kajabi se joue sur les accès. Systeme.io se joue sur la liste. ActiveCampaign se joue sur les scénarios encore utiles, et parfois il faut rester.",
  ],
];

export default function MigrationPage() {
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
        Transfert
      </p>
      <p className="kicker">Transfert</p>
      <h1>Le transfert des données, dans la même offre.</h1>
      <p className="meta"><span>Mis à jour le 19 novembre 2026</span></p>
      <p className="lede">
        Les contacts et l’historique quittent l’outil précédent pour le compte GoHighLevel que Promarket met à
        disposition. Ce n’est pas une prestation à part : c’est la quatrième composante de l’
        <Link href="/services">offre</Link>.
      </p>

      <h2>D’où l’on part</h2>
      <p>
        Les stacks reprises le plus souvent : Kajabi pour les cours, Systeme.io pour les tunnels, ActiveCampaign pour
        l’e-mail, parfois ClickFunnels, Calendly et Zapier autour. Chaque outil a gardé un morceau du client. Le compte
        devient utile quand ces morceaux vivent ensemble : pipeline, rendez-vous, messages, accès.
      </p>
      <p>
        On ne transfère pas pour changer de logo. On transfère pour une seule source de vérité. Si l’activité est une
        newsletter et un tunnel simple, changer n’apporte rien. Le comparatif est dans le guide{" "}
        <Link href="/guide/gohighlevel-vs-activecampaign">GoHighLevel ou ActiveCampaign</Link>.
      </p>

      <h2>L’ordre</h2>
      <p>
        Inventaire d’abord. Reconstruction ensuite : pipelines, formulaires, calendriers, automatisations, et les accès
        quand il y a des contenus. Un compte de test ouvre le parcours avant que la liste soit prévenue. La bascule
        vient après : domaine d’envoi authentifié, premiers messages vers les acheteurs, ancien outil encore lisible.
        Les jours d’après font partie de la maintenance.
      </p>
      <p>
        Le déroulé détaillé est sur la page <Link href="/methode">Méthode</Link>. Selon l’outil de départ :{" "}
        <Link href="/guide/migration-kajabi-gohighlevel">Kajabi</Link>,{" "}
        <Link href="/guide/migration-systeme-io-gohighlevel">Systeme.io</Link>.
      </p>

      <h2>Ce que le transfert ne décide pas</h2>
      <p>
        Il ne décide pas à qui vous avez le droit d’écrire. Le guide <Link href="/guide/rgpd-gohighlevel-france">RGPD</Link>{" "}
        se lit pendant l’inventaire. Il ne décide pas non plus de la boîte de réception : le guide{" "}
        <Link href="/guide/delivrabilite-email-gohighlevel">délivrabilité</Link> pose l’authentification avant le premier
        envoi de masse.
      </p>

      {faqs.map(([q, a]) => (
        <details className="qa" key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}

      <RelatedContent hrefs={["/services", "/methode", "/guide/migration-kajabi-gohighlevel", "/crm-coachs"]} label="Pages liées" />
      <p>
        <OfferCta />
      </p>
    </main>
  );
}
