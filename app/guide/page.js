import Link from "next/link";
import { getGuide } from "@/lib/guides";

export const metadata = {
  title: "Guide GoHighLevel France",
  description:
    "La référence GoHighLevel en français : prix, migrations Kajabi et Systeme.io, SaaS mode, RGPD, délivrabilité, SEO, GEO et agents IA.",
  alternates: { canonical: "/guide" },
};

const groups = [
  {
    title: "Comprendre l’outil",
    intro:
      "Commence ici si le compte n’est pas encore ouvert, ou s’il est ouvert et que tu n’en vois pas le bord. Ces deux articles posent le décor français : ce que GoHighLevel remplace, et ce que le prix affiché ne dit pas.",
    items: [
      ["gohighlevel-france", "À lire en premier. Il décrit ce que l’outil réunit, et ce qui change dès que les contacts, les factures et les SMS sont en France."],
      ["prix-gohighlevel-france", "À lire avant de choisir un plan. Starter, Unlimited et Agency Pro n’ouvrent pas les mêmes droits, et l’usage SMS ou email n’est pas dans l’abonnement."],
    ],
  },
  {
    title: "Migrer sans couper les accès",
    intro:
      "La plupart des comptes qu’on reprend viennent d’ailleurs. Le risque n’est pas le bouton d’import. C’est l’élève qui ne rentre plus, le paiement en double, et le domaine d’envoi qui part en spam le jour de l’annonce.",
    items: [
      ["migration-kajabi-gohighlevel", "À lire si les cours sont sur Kajabi. On y distingue ce qui s’exporte, ce qui se reconstruit, et le test élève à faire avant le DNS."],
      ["migration-systeme-io-gohighlevel", "À lire si les tunnels et les tags sont sur Systeme.io. L’export de liste est la partie facile, et la plus dangereuse si elle n’est pas triée."],
      ["gohighlevel-vs-activecampaign", "À lire si ActiveCampaign tient déjà la délivrabilité. Parfois il faut rester. Parfois l’empilement avec Calendly, Zapier et un espace membres ne tient plus."],
    ],
  },
  {
    title: "Exploiter le compte",
    intro:
      "Une fois la structure posée, quatre sujets décident si le compte est tenable en France : la facture que tu envoies à tes clients, le droit d’écrire à ta base, la boîte de réception, et l’accès aux cours.",
    items: [
      ["saas-mode-gohighlevel-france", "À lire si tu veux facturer des sous-comptes en euros, sous ta marque. Le SaaS mode n’est pas un thème. Il est lié au plan Agency Pro."],
      ["rgpd-gohighlevel-france", "À lire avant le premier workflow. L’outil héberge. Toi, tu restes responsable de traitement pour tes contacts français."],
      ["delivrabilite-email-gohighlevel", "À lire avant le premier envoi de masse. SPF, DKIM, DMARC, puis les acheteurs, puis seulement le reste de la liste."],
      ["espace-membres-gohighlevel", "À lire si tu te demandes si le portail remplace Kajabi. Il suffit souvent. Il ne suffit pas quand le produit, c’est la plateforme pédagogique."],
    ],
  },
  {
    title: "Être trouvé, puis répondre",
    intro:
      "Un tunnel qui convertit et qu’aucune recherche ne trouve ne remplit pas le pipeline. Le référencement, les réponses des IA et l’agent dans le CRM viennent après le compte, pas à la place.",
    items: [
      ["seo-geo-agent-ia-gohighlevel", "À lire quand le compte sait déjà ranger un lead. L’article sépare le SEO, le GEO et l’agent qui écrit dans le pipeline."],
    ],
  },
];

export default function GuideIndex() {
  return (
    <main className="wrap article">
      <p className="crumb">
        <Link href="/">Accueil</Link>
        {" › "}
        Guide
      </p>
      <p className="kicker">Guide</p>
      <h1>GoHighLevel France, version exploitation.</h1>
      <p className="lede">
        Ce guide explique comment GoHighLevel se tient quand le business est francophone : facture en euros, TVA, SMS,
        délivrabilité, RGPD, espace membres. Ce n’est pas une traduction des pages américaines de HighLevel, et ce n’est
        pas un lien d’affiliation. Chaque article part d’une décision : quel plan, quelle migration, quel envoi, quel
        accès élève.
      </p>
      <p>
        On l’écrit pour les coachs, les formateurs et les business en ligne qui empilent déjà Kajabi, Systeme.io,
        ActiveCampaign, Calendly ou Zapier. Le travail se fait à distance, depuis Nantes, pour les
        équipes francophones en France, en Belgique, en Suisse et au Canada. L’interface du logiciel reste surtout en
        anglais. Les pages, les mails et l’accompagnement sont en français.
      </p>
      <p>
        Lis d’abord la référence si tu découvres l’outil, puis le prix, puis la migration qui correspond à ton outil
        actuel. La délivrabilité et le RGPD se lisent avant le premier envoi, pas après une chute d’ouvertures. Le SEO, le
        GEO et les agents IA viennent une fois le compte propre : un agent branché sur un pipeline vide n’a rien à
        qualifier.
      </p>
      <p>
        Si tu veux que ce soit installé plutôt que seulement lu, le parcours est sur les pages{" "}
        <Link href="/services">Services</Link> et <Link href="/methode">Méthode</Link>. Le diagnostic de stack, gratuit et
        sans engagement, est sur l’<Link href="/audit">audit</Link>. Trois pages plus courtes cadrent l’offre :{" "}
        <Link href="/agence-gohighlevel-nantes">l’agence à Nantes</Link>,{" "}
        <Link href="/migration-gohighlevel">la migration</Link> et le{" "}
        <Link href="/crm-coachs">CRM pour coachs</Link>.
      </p>

      {groups.map((group) => (
        <section key={group.title}>
          <h2>{group.title}</h2>
          <p>{group.intro}</p>
          <div className="grid-2">
            {group.items.map(([slug, fit]) => {
              const guide = getGuide(slug);
              return (
                <article className="card" key={slug}>
                  <p className="tag">{guide.category}</p>
                  <p className="card-title">
                    <Link href={`/guide/${guide.slug}`}>{guide.title}</Link>
                  </p>
                  <p className="muted">{guide.description}</p>
                  <p>{fit}</p>
                  <p className="meta">
                    <span>{guide.reading}</span>
                    <span>{guide.date}</span>
                  </p>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}
