import Link from "next/link";

export const metadata = {
  title: "Migration vers GoHighLevel",
  description:
    "Contacts, élèves, emails et paiements : l’ordre pour migrer vers GoHighLevel depuis Kajabi, Systeme.io, ActiveCampaign ou ClickFunnels, sans couper les accès.",
  alternates: { canonical: "/migration-gohighlevel" },
  keywords: ["migration GoHighLevel", "migrer vers GoHighLevel", "alternative Kajabi", "alternative Systeme.io"],
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
      <h1>Migrer vers GoHighLevel sans couper les accès.</h1>
      <p className="lede">
        L’import de contacts est la partie visible. Le travail est ailleurs : savoir qui a payé, qui a encore un module
        ouvert, et quel domaine a le droit d’envoyer le mail du jour J.
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

      {faqs.map(([q, a]) => (
        <details className="qa" key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
      <p>
        <Link className="btn" href="/audit">Décrire la stack actuelle</Link>
      </p>
    </main>
  );
}
