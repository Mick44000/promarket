import Link from "next/link";
import { OfferCta } from "@/components/OfferCta";
import { RelatedContent } from "@/components/RelatedContent";
import { offerSteps } from "@/lib/offer";

export const metadata = {
  title: "Offre GoHighLevel : outil, implantation, WhatsApp et agent IA",
  description:
    "L’offre Promarket : GoHighLevel mis à disposition, implantation, WhatsApp, transfert des données, agent IA Grok Bot, maintenance. Setup, puis un abonnement mensuel.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="wrap article">
      <p className="crumb">
        <Link href="/">Accueil</Link>
        {" › "}
        Offre
      </p>
      <p className="kicker">Offre</p>
      <h1>L’offre, de bout en bout.</h1>
      <p className="lede">
        Un seul parcours : l’outil GoHighLevel, l’implantation, WhatsApp, le transfert des données, l’agent IA Grok Bot,
        puis la maintenance. Des frais de setup, puis un abonnement mensuel pour la mise à disposition des outils et la
        maintenance.
      </p>

      {offerSteps.map((step) => (
        <section key={step.id} id={step.id}>
          <p className="step-index">{step.n}</p>
          <h2>{step.title}</h2>
          <p>{step.text}</p>
          <p>{step.detail}</p>
          {step.id === "transfert" ? (
            <p>
              Les stacks reprises le plus souvent viennent de Kajabi, de Systeme.io, d’ActiveCampaign, parfois de
              ClickFunnels, avec Calendly ou Zapier autour. Le déroulé est sur la page{" "}
              <Link href="/migration-gohighlevel">Transfert des données</Link> et sur la page{" "}
              <Link href="/methode">Méthode</Link>.
            </p>
          ) : null}
          {step.id === "autour" ? (
            <p>
              La page de <Link href="/desinscription">désinscription</Link> coupe l’e-mail, le SMS, WhatsApp ou les
              appels, au choix. Elle est déjà en production.
            </p>
          ) : null}
          {step.id === "agent" ? (
            <p>
              L’équipe que Promarket fait tourner pour lui-même prospecte par e-mail et sur LinkedIn, publie via le
              Social Planner, répond sur WhatsApp, suit les leads dans le CRM et produit le reporting. C’est cette mise
              en place qui est déployée. Le guide{" "}
              <Link href="/guide/seo-geo-agent-ia-gohighlevel">SEO, GEO et agent IA</Link> décrit le cadre des pages et
              de l’agent, sans en faire une offre séparée.
            </p>
          ) : null}
        </section>
      ))}

      <h2>Le modèle</h2>
      <p>
        Deux temps, et rien d’autre sur cette page. Les frais de setup correspondent à la mise en place. L’abonnement
        mensuel correspond à la mise à disposition des outils et à la maintenance. Les montants se précisent à partir
        de la situation décrite dans le formulaire. Ils ne sont pas affichés ici.
      </p>
      <p>
        Pour un coach ou un formateur, le parcours est le même : la page{" "}
        <Link href="/crm-coachs">coachs et formateurs</Link> le reprend dans ce contexte. Le siège et le travail à
        distance sont sur la page <Link href="/agence-gohighlevel-nantes">agence à Nantes</Link>.
      </p>
      <RelatedContent hrefs={["/methode", "/migration-gohighlevel", "/contact", "/guide"]} label="Pages liées" />
      <p style={{ marginTop: 28 }}>
        <OfferCta />
      </p>
    </main>
  );
}
