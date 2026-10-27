import Link from "next/link";
import { RelatedContent } from "@/components/RelatedContent";

export const metadata = {
  title: "Migration GoHighLevel",
  description:
    "Migration GoHighLevel depuis Kajabi, Systeme.io, ActiveCampaign ou ClickFunnels. Contacts, élèves, emails et paiements : le test avant le domaine.",
  alternates: { canonical: "/migration-gohighlevel" },
  keywords: ["migration gohighlevel", "migration GoHighLevel", "migrer vers GoHighLevel", "alternative Kajabi", "alternative Systeme.io"],
};

const faqs = [
  [
    "Combien de temps faut-il ?",
    "Quatorze jours tiennent pour un catalogue simple : un espace membres, une liste, un checkout. Au-delà d’une dizaine d’offres, on phase par produit. Les mises en production déjà livrées vont de 48 heures à trois semaines. L’audit écrit donne la fourchette du cas précis.",
  ],
  [
    "Mes élèves perdent-ils leurs accès ?",
    "La progression fine d’un autre outil ne se rejoue pas à l’identique. On documente l’offre active, on ouvre les modules déjà achetés, et on teste un compte élève avant d’écrire à la liste. L’ancien espace reste lisible le temps de la bascule.",
  ],
  [
    "Puis-je garder l’ancien outil en parallèle ?",
    "Quelques semaines, pour comparer et basculer produit par produit. Pas comme architecture finale. Deux outils de capture, ce sont deux sources de vérité, et des leads qui n’arrivent nulle part.",
  ],
  [
    "Par quoi commence une migration GoHighLevel ?",
    "Par l’inventaire : offres, tags, domaines, DNS email, paiements en cours, liste chaude et liste froide. L’import des contacts vient après cette carte, pas avant.",
  ],
  [
    "Kajabi, Systeme.io et ActiveCampaign se migrent-ils de la même façon ?",
    "L’ordre est le même : inventaire, reconstruction, test, bascule. Le guide change. Kajabi se joue sur les accès élèves. Systeme.io se joue sur la liste. ActiveCampaign se joue sur les scénarios encore utiles, et parfois il faut rester.",
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
        <Link href="/services">Services</Link>
        {" › "}
        Migration
      </p>
      <p className="kicker">Migration</p>
      <h1>Migration GoHighLevel : l’ordre, sans couper les accès.</h1>
      <p className="meta"><span>Mis à jour le 20 octobre 2026</span></p>
      <p className="lede">
        Une migration GoHighLevel ne commence pas par l’import. Elle commence par savoir qui a payé, qui a encore un
        module ouvert, et quel domaine a le droit d’envoyer le mail du jour J.
      </p>

      <h2>D’où l’on part</h2>
      <p>
        Les stacks qu’on reprend le plus souvent : Kajabi pour les cours, Systeme.io pour les tunnels, ActiveCampaign
        pour l’email, parfois ClickFunnels, Calendly et Zapier autour. Chaque outil a gardé un morceau du client. Aucun
        n’a la vue entière. GoHighLevel devient utile quand ces morceaux doivent vivre ensemble : pipeline, rendez-vous,
        pages, paiement, accès formation.
      </p>
      <p>
        On ne migre pas pour gratter quelques dizaines d’euros d’abonnement. On migre pour une seule source de vérité.
        Si votre activité est une newsletter et un tunnel simple, changer n’apporte rien. Le comparatif est dans le guide{" "}
        <Link href="/guide/gohighlevel-vs-activecampaign">GoHighLevel ou ActiveCampaign</Link>. Les ordres de grandeur de
        prix plateforme sont dans le guide <Link href="/guide/prix-gohighlevel-france">prix</Link>, en dollars, hors
        usage.
      </p>

      <h2>L’ordre, toujours le même</h2>
      <p>
        Inventaire d’abord. Offres, tags, domaines, DNS email, paiements en cours, liste chaude et liste froide. Rien ne
        s’importe avant cette carte. Une ligne par offre : prix, type de paiement, élèves actifs, domaine qui porte
        l’accès.
      </p>
      <p>
        Reconstruction ensuite. Pipelines, champs, espace membres, workflows, checkout. Un compte élève de test ouvre un
        module, reçoit le message d’accès, se déconnecte et se reconnecte. Tant que ce compte échoue, personne d’autre
        n’est prévenu. Les pages ne se collent pas : on reprend l’offre, la preuve et le paiement, pas une copie pixel
        par pixel.
      </p>
      <p>
        Bascule après. Le domaine d’envoi est authentifié (SPF, DKIM, DMARC). Les premiers messages partent vers les
        acheteurs récents, pas vers toute la base. Le domaine du tunnel ne bouge que lorsque la nouvelle porte répond.
        L’ancien outil reste lisible. L’hypercare couvre les jours d’après : paiement refusé, accès manquant, message
        tombé au mauvais endroit.
      </p>
      <p>
        Ce déroulé est détaillé sur la page <Link href="/methode">Méthode</Link>. Selon l’outil, le guide change :{" "}
        <Link href="/guide/migration-kajabi-gohighlevel">Kajabi</Link>,{" "}
        <Link href="/guide/migration-systeme-io-gohighlevel">Systeme.io</Link>,{" "}
        <Link href="/guide/delivrabilite-email-gohighlevel">délivrabilité</Link>.
      </p>
      <div className="table-scroll">
        <table>
          <caption>Même ordre, risque différent selon l’outil de départ.</caption>
          <thead>
            <tr>
              <th scope="col">Départ</th>
              <th scope="col">Ce qui casse en premier</th>
              <th scope="col">Où c’est détaillé</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kajabi</td>
              <td>L’élève qui n’ouvre plus le module, ou qui est débité deux fois</td>
              <td><Link href="/guide/migration-kajabi-gohighlevel">Migration Kajabi</Link></td>
            </tr>
            <tr>
              <td>Systeme.io</td>
              <td>La liste froide relancée depuis un domaine neuf</td>
              <td><Link href="/guide/migration-systeme-io-gohighlevel">Migration Systeme.io</Link></td>
            </tr>
            <tr>
              <td>ActiveCampaign</td>
              <td>Des scénarios réécrits pour rien, ou coupés trop tôt</td>
              <td><Link href="/guide/gohighlevel-vs-activecampaign">GoHighLevel vs ActiveCampaign</Link></td>
            </tr>
            <tr>
              <td>ClickFunnels</td>
              <td>Un tunnel cloné, un upsell encore branché sur l’ancien paiement</td>
              <td>Même ordre que la méthode. Pas d’article séparé</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Le jour J ne se pose pas tant que cette liste n’est pas cochée :</p>
      <ul className="checks">
        <li>Une ligne par offre : prix, type de paiement, élèves actifs, domaine.</li>
        <li>Les abonnements déjà en cours sont identifiés. On ne les recrée pas à la main.</li>
        <li>Un compte test a ouvert un module, reçu le message d’accès, et s’est reconnecté.</li>
        <li>SPF, DKIM et DMARC sont en place sur le domaine qui envoie.</li>
        <li>Les premiers messages partent vers les acheteurs récents, pas vers toute la base.</li>
        <li>L’ancien outil reste lisible. Les anciens liens ont encore une porte.</li>
        <li>Le droit d’écrire est documenté avant le premier workflow. Le guide RGPD est la checklist, pas un avis juridique.</li>
      </ul>

      <h2>Ce qu’on ne transfère pas par magie</h2>
      <p>
        Les contacts et les produits s’exportent. Les automations visuelles, les pages et les certificats se
        reconstruisent. La progression fine d’un élève dans l’ancien espace ne se rejoue pas leçon par leçon. On ouvre ce
        qui a été payé. On le dit avant la signature, pas le jour du DNS.
      </p>
      <p>
        Les abonnements déjà en cours ne se recréent pas à la main. On sépare ce qui est déjà sur Stripe et ce qui est
        porté par le paiement de l’ancien outil. Ouvrir un nouveau checkout sans fermer l’ancien produit, c’est facturer
        deux fois.
        Les tags trop larges deviennent des champs et des étapes, pas une deuxième forêt de tags.
      </p>
      <p>
        Une liste email n’est pas une liste SMS. Importer tout le monde puis « annoncer la migration » par texto, ou
        depuis un domaine froid, abîme l’envoi et peut sortir du cadre que vous pouvez justifier. Le guide{" "}
        <Link href="/guide/rgpd-gohighlevel-france">RGPD</Link> pose la checklist. Ce n’est pas un avis juridique.
      </p>

      <h2>Avant de fixer une date</h2>
      <p>
        Le formulaire d’<Link href="/audit">audit</Link> demande les outils, la taille de liste, l’espace membres et
        l’objectif. Il est gratuit. Il donne un ordre de grandeur d’abonnements, pas un devis de reconstruction. Le
        forfait écrit, à 1 000 € HT, sert quand il faut le plan numéroté et le macro-planning. Le setup se chiffre
        ensuite.
      </p>
      <p>
        Le périmètre possible est sur la page <Link href="/services">Services</Link>. Si votre sujet est moins la
        bascule que le quotidien d’un coach — pipeline, rendez-vous, relances, cours — lisez le{" "}
        <Link href="/crm-coachs">CRM pour coachs</Link>. L’équipe qui le fait est présentée sur{" "}
        <Link href="/agence-gohighlevel-nantes">l’agence à Nantes</Link>.
      </p>

      <h2>Selon l’outil de départ</h2>
      <p>
        Kajabi : les contacts et les produits s’exportent. Les pages, les automations visuelles et la progression fine
        des leçons se reconstruisent. On ouvre les modules déjà payés, on teste un élève fictif, et seulement ensuite on
        prévient la liste. Le guide <Link href="/guide/migration-kajabi-gohighlevel">migration Kajabi</Link> détaille cet
        ordre, et le guide <Link href="/guide/espace-membres-gohighlevel">espace membres</Link> dit ce que le portail
        GoHighLevel ne remplace pas.
      </p>
      <p>
        Systeme.io : l’export de la liste est la partie facile. Relancer les inactifs depuis un domaine neuf, pour
        « annoncer la migration », abîme l’envoi. On segmente d’abord. Le guide{" "}
        <Link href="/guide/migration-systeme-io-gohighlevel">Systeme.io</Link> décrit le tri, et le guide{" "}
        <Link href="/guide/delivrabilite-email-gohighlevel">délivrabilité</Link> le warm-up.
      </p>
      <p>
        ActiveCampaign : parfois il faut rester. On bascule quand l’email, l’agenda, les pages et l’espace membres ne se
        parlent plus, pas pour gratter un abonnement. Le comparatif est dans{" "}
        <Link href="/guide/gohighlevel-vs-activecampaign">GoHighLevel ou ActiveCampaign</Link>. ClickFunnels est cité sur
        l’accueil parmi les outils de départ : les pages ne se collent pas non plus. On reprend l’offre, le checkout et
        les pixels le jour où la nouvelle page est en ligne. Il n’y a pas d’article séparé. L’ordre reste celui de la{" "}
        <Link href="/methode">méthode</Link>.
      </p>

      <h2>Ce que vous préparez</h2>
      <p>
        Apportez la liste des outils, le nombre d’offres, et ce que vous pouvez justifier : d’où vient la liste, qui a
        acheté récemment, qui n’a pas ouvert depuis longtemps. Une liste email n’est pas une liste SMS. Le guide{" "}
        <Link href="/guide/rgpd-gohighlevel-france">RGPD</Link> tient cette distinction. Le cadre du compte, facture et
        langue comprises, est dans <Link href="/guide/gohighlevel-france">GoHighLevel en France</Link>.
      </p>
      <p>
        Si le sujet est moins la bascule que le quotidien d’un coach déjà décidé à rester sur un seul compte, lisez{" "}
        <Link href="/crm-coachs">CRM pour coachs</Link>. Le travail à distance se fait depuis Nantes :{" "}
        <Link href="/agence-gohighlevel-nantes">l’agence</Link>. Les montants de plateforme, en dollars et hors usage,
        restent dans le guide <Link href="/guide/prix-gohighlevel-france">prix</Link>.
      </p>

      {faqs.map(([q, a]) => (
        <details className="qa" key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
      <RelatedContent
        hrefs={[
          "/guide/migration-kajabi-gohighlevel",
          "/guide/migration-systeme-io-gohighlevel",
          "/crm-coachs",
          "/agence-gohighlevel-nantes",
        ]}
      />
      <p>
        <Link className="btn" href="/audit">Décrire la stack actuelle</Link>
      </p>
    </main>
  );
}
