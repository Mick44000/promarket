import Link from "next/link";
import { formatLongDate, getGuide, guideReading } from "@/lib/guides";

export const metadata = {
  title: "Guides GoHighLevel : prix, migration, CRM",
  description:
    "Sommaire des guides GoHighLevel : tarif en France, migrations Kajabi et Systeme.io, SaaS mode, RGPD, délivrabilité, espace membres et CRM pour coachs.",
  alternates: { canonical: "/guide" },
};

const updated = "2026-10-20";

const faqs = [
  [
    "Par quel guide commencer ?",
    "Par GoHighLevel en France si tu découvres l’outil, puis par le prix avant de choisir un plan. La migration ne se lit qu’une fois l’outil de départ identifié : Kajabi, Systeme.io ou ActiveCampaign.",
  ],
  [
    "Ce sommaire remplace-t-il l’article GoHighLevel France ?",
    "Non. Cette page oriente. L’article GoHighLevel en France porte le cadre : facture en euros, interface surtout en anglais, ce qu’un expert vérifie. Chaque autre sujet a sa propre URL.",
  ],
  [
    "Où est le CRM pour un coach ou un formateur ?",
    "Sur la page CRM pour coachs : pipeline, rendez-vous, automatisation et accès au cours. Le guide de l’espace membres dit jusqu’où le portail va pour une formation.",
  ],
];

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
        Guide
      </p>
      <p className="kicker">Guide</p>
      <h1>Quel guide GoHighLevel lire, selon la décision.</h1>
      <p className="meta">
        <span>{`Mis à jour le ${formatLongDate(updated)}`}</span>
      </p>
      <p className="lede">
        Ce sommaire classe les guides GoHighLevel par décision : le tarif, la migration, le CRM, l’envoi, le droit
        d’écrire. Le cadre francophone — facture en euros, interface surtout en anglais — est dans l’article{" "}
        <Link href="/guide/gohighlevel-france">GoHighLevel en France</Link>, pas répété ici.
      </p>
      <p>
        On l’écrit pour les coachs, les formateurs et les business en ligne qui empilent déjà Kajabi, Systeme.io,
        ActiveCampaign, Calendly ou Zapier. Le siège de ProMarket est à Nantes. Le travail se fait à distance, pour les
        équipes francophones en France, en Belgique, en Suisse et au Canada. L’interface du logiciel reste surtout en
        anglais. Les pages, les mails et l’accompagnement sont en français.
      </p>
      <p>
        L’ordre de lecture tient en une ligne : la référence, le prix, puis la migration qui correspond à l’outil que
        tu quittes. Le reste se lit au moment du geste — avant un envoi, avant d’ouvrir un accès élève, avant de
        brancher un agent.
      </p>
      <p>
        Si tu veux que ce soit installé plutôt que seulement lu, le parcours est sur les pages{" "}
        <Link href="/services">Services</Link> et <Link href="/methode">Méthode</Link>. Le diagnostic de stack, gratuit et
        sans engagement, est sur l’<Link href="/audit">audit</Link>. Trois pages plus courtes cadrent l’offre :{" "}
        <Link href="/agence-gohighlevel-nantes">l’agence à Nantes</Link>,{" "}
        <Link href="/migration-gohighlevel">la migration</Link> et le{" "}
        <Link href="/crm-coachs">CRM pour coachs</Link>.
      </p>
      <p>
        Une question, une page. Mélanger le prix, la migration et le CRM dans un seul texte produit un article que
        personne ne peut citer, et des titres qui se font concurrence. Le tableau dit où aller. Les cartes, plus bas,
        disent dans quel ordre le lire.
      </p>
      <div className="table-scroll">
        <table>
          <caption>Chaque sujet a déjà une URL. On n’en ouvre pas une deuxième pour la même question.</caption>
          <thead>
            <tr>
              <th scope="col">Tu décides</th>
              <th scope="col">Tu lis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ce que GoHighLevel change en France, en français</td>
              <td><Link href="/guide/gohighlevel-france">GoHighLevel en France</Link></td>
            </tr>
            <tr>
              <td>Le prix, le tarif, l’usage</td>
              <td><Link href="/guide/prix-gohighlevel-france">Prix et tarif</Link></td>
            </tr>
            <tr>
              <td>Quitter l’outil actuel, sans couper les accès</td>
              <td><Link href="/migration-gohighlevel">Migration GoHighLevel</Link></td>
            </tr>
            <tr>
              <td>Une alternative à Kajabi</td>
              <td><Link href="/guide/migration-kajabi-gohighlevel">Migration Kajabi</Link></td>
            </tr>
            <tr>
              <td>Une alternative à Systeme.io</td>
              <td><Link href="/guide/migration-systeme-io-gohighlevel">Migration Systeme.io</Link></td>
            </tr>
            <tr>
              <td>GoHighLevel vs ActiveCampaign</td>
              <td><Link href="/guide/gohighlevel-vs-activecampaign">Le comparatif</Link></td>
            </tr>
            <tr>
              <td>Le SaaS mode, facturer en euros</td>
              <td><Link href="/guide/saas-mode-gohighlevel-france">SaaS mode</Link></td>
            </tr>
            <tr>
              <td>Le RGPD, les SMS, les bases</td>
              <td><Link href="/guide/rgpd-gohighlevel-france">RGPD</Link></td>
            </tr>
            <tr>
              <td>L’espace membres, ou une formation à héberger</td>
              <td><Link href="/guide/espace-membres-gohighlevel">Espace membres</Link></td>
            </tr>
            <tr>
              <td>La délivrabilité email</td>
              <td><Link href="/guide/delivrabilite-email-gohighlevel">SPF, DKIM, DMARC</Link></td>
            </tr>
            <tr>
              <td>Un CRM pour coach, formateur, ou un logiciel tout-en-un</td>
              <td><Link href="/crm-coachs">CRM pour coachs</Link></td>
            </tr>
            <tr>
              <td>Une agence, à Nantes et à distance</td>
              <td><Link href="/agence-gohighlevel-nantes">Agence GoHighLevel à Nantes</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Lis le prix avant de comparer avec un outil français : les plans publics sont en dollars, hors usage. Lis la
        délivrabilité et le RGPD avant le premier envoi, pas après une chute d’ouvertures. Lis l’espace membres avant de
        promettre que Kajabi se « transfère ». Le SEO, le GEO et les agents IA viennent une fois le compte propre : un
        agent branché sur un pipeline vide n’a rien à qualifier. Cet article est à part,{" "}
        <Link href="/guide/seo-geo-agent-ia-gohighlevel">ici</Link>, et la mise en œuvre est sur{" "}
        <Link href="/referencement">SEO et GEO</Link>.
      </p>
      <p>
        Ce sommaire ne donne pas d’avis clients, pas de note, pas de témoignage. Il ne convertit pas les dollars en
        euros. Il ne décrit pas non plus une version française du logiciel : l’interface reste surtout en anglais. Si tu
        cherches qui pose le compte, c’est la page agence, pas un deuxième guide.
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
                    <span>{guideReading(guide)}</span>
                    <span>{`Mis à jour le ${formatLongDate(guide.updated || guide.date)}`}</span>
                  </p>
                </article>
              );
            })}
          </div>
        </section>
      ))}

      <h2>Ce que ces guides ne font pas</h2>
      <p>
        Ils n’inventent pas un tarif, un client ou une statistique. Quand un montant HighLevel est écrit, il vient de
        la page tarifs publique ou du guide de facturation de l’éditeur, et l’article des prix donne le lien. Les
        montants ProMarket déjà publiés restent à leur place : le formulaire d’audit est gratuit, l’audit écrit est à
        1 000 € HT, le suivi à 300 € par mois à partir de 3 heures. Aucun n’est la licence.
      </p>
      <p>
        Ils ne remplacent pas un conseil juridique. Le guide RGPD est la checklist qu’on applique, avec la page de la
        CNIL en source. Ils ne remplacent pas non plus la méthode : l’ordre d’une bascule — inventaire, reconstruction,
        test, puis seulement le domaine — est sur la page <Link href="/methode">Méthode</Link>. Le menu de ce qui se
        facture à part est sur <Link href="/services">Services</Link>.
      </p>
      <ul className="checks">
        <li>Un sujet, une URL. Si deux pages disent la même chose, l’une des deux est de trop.</li>
        <li>Le premier paragraphe répond à la question, avant le tableau.</li>
        <li>Les titres restent peu nombreux. Le détail est dans les paragraphes, les listes et les tableaux.</li>
        <li>Les liens partent vers la page qui décide, pas vers un synonyme de la même page.</li>
        <li>Une liste importée ne part pas en envoi tant que le domaine et le droit d’écrire ne sont pas écrits.</li>
      </ul>

      {faqs.map(([q, a]) => (
        <details className="qa" key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </main>
  );
}
