import Link from "next/link";

export const metadata = {
  title: "CRM GoHighLevel pour coachs et formateurs",
  description:
    "Pipeline, rendez-vous, relances, espace membres et paiement dans le même compte GoHighLevel. Pour les coachs, formateurs et petits business en ligne.",
  alternates: { canonical: "/crm-coachs" },
  keywords: ["CRM pour coach", "CRM GoHighLevel", "GoHighLevel formateur", "CRM tout-en-un"],
};

const faqs = [
  [
    "GoHighLevel remplace-t-il Kajabi pour une formation ?",
    "Pour un programme de quelques leçons à quelques dizaines de leçons, l’espace membres suffit souvent : offre, drip, accès coupé si le paiement échoue. Si votre promesse est une plateforme pédagogique lourde, quiz et certificats complexes, un LMS dédié reste plus confortable.",
  ],
  [
    "Faut-il le plan le plus cher pour un seul coaching ?",
    "Non. Starter suffit pour un seul business qui ne rebille pas de sous-comptes. Agency Pro devient utile quand vous facturez des accès sous votre marque. Les montants publics sont dans le guide des prix, en dollars, hors usage.",
  ],
  [
    "Et si je ne suis pas coach, mais une petite entreprise ?",
    "Le même socle sert dès que vous avez des prospects, des rendez-vous et un suivi. Les instituts et centres laser ont une offre séparée, avec ses propres forfaits. Le reste se regarde au cas par cas, à partir de l’audit, sans catalogue de métiers inventé.",
  ],
];

export default function CrmCoachsPage() {
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
        CRM pour coachs
      </p>
      <p className="kicker">Coachs · formateurs</p>
      <h1>Un CRM tout-en-un pour les coachs et les formateurs.</h1>
      <p className="lede">
        Un prospect, un rendez-vous, une relance, un accès au cours, un paiement. Quand ces gestes sont dans cinq
        logiciels, le suivi dépend de votre mémoire. GoHighLevel les réunit. Encore faut-il que le compte ressemble à
        votre façon de vendre.
      </p>

      <h2>Le quotidien que le compte doit refléter</h2>
      <p>
        Un coach ne « gère » pas une base. Il sait qui a réservé un appel, qui a reçu une offre, qui a payé, qui doit
        recevoir la prochaine séance ou la prochaine leçon. Un formateur ajoute une question : est-ce que cette personne
        a encore le droit d’ouvrir le module ? Si la réponse est dans un autre outil que le paiement, quelqu’un finit
        par vérifier à la main.
      </p>
      <p>
        Le pipeline reprend vos étapes réelles, pas un modèle américain à cinq colonnes génériques. Les champs portent
        ce que vous demandez vraiment : offre, date de session, accompagnement en cours. Les tags ne doublonnent pas ces
        champs. Les relances partent quand une étape change, pas tous les matins « au cas où ».
      </p>
      <p>
        La prise de rendez-vous vit dans le même compte que le contact. Plus de copier-coller entre l’agenda et le CRM.
        Le mail de confirmation, le rappel, et la suite si la personne ne vient pas, sont des workflows. Ils s’écrivent
        en français, avec votre nom d’expéditeur, une fois le domaine authentifié.
      </p>

      <h2>L’empilement que ça remplace</h2>
      <p>
        Le schéma fréquent : un espace membres d’un côté, un outil d’email de l’autre, un agenda, un connecteur pour
        faire passer le lead, un constructeur de pages pour la vente. Chaque abonnement est défendable seul. Ensemble,
        ils cassent au moment où un zap ne part pas, et personne ne voit que le prospect est resté sur le formulaire.
      </p>
      <p>
        GoHighLevel ne devient pas « moins cher » par magie. Le gain, c’est d’arrêter ces ruptures. Le prix plateforme
        dépend du plan et de l’usage, en dollars. On le lit dans le guide{" "}
        <Link href="/guide/prix-gohighlevel-france">prix</Link> avant de comparer avec une facture en euros. Si
        l’espace membres est le sujet central, le guide{" "}
        <Link href="/guide/espace-membres-gohighlevel">espace membres</Link> dit ce qui suffit et ce qui ne suffit pas.
      </p>
      <p>
        Vous venez de Kajabi ou de Systeme.io : on ne coupe pas les accès pour « aller plus vite ». La page{" "}
        <Link href="/migration-gohighlevel">Migration</Link> et la <Link href="/methode">méthode</Link> imposent un
        compte test avant le mail aux élèves. Vous partez de zéro : le setup pose le domaine, le pipeline, le checkout
        et la séquence d’accueil, sans héritage à défaire.
      </p>

      <h2>Ce que le CRM ne décide pas à votre place</h2>
      <p>
        L’outil n’écrit pas votre offre, et il ne remplace pas le travail en séance. Il range. Il relance. Il ouvre ou
        ferme un accès selon le paiement. Le ton des messages reste le vôtre. On ne livre pas un script de vente
        générique en prétendant qu’il convertit.
      </p>
      <p>
        Il ne signe pas non plus le consentement. Une relance email ou SMS vers des contacts français suppose une base
        que vous pouvez expliquer. Le guide <Link href="/guide/rgpd-gohighlevel-france">RGPD</Link> est la checklist
        qu’on applique avant d’allumer un workflow. Les SMS se paient à l’usage et coûtent vite plus cher qu’un email :
        une relance quotidienne n’est pas un plan, même quand elle est autorisée.
      </p>
      <p>
        La délivrabilité se règle avant la première séquence de bienvenue. SPF, DKIM, DMARC, puis un volume faible vers
        les gens qui vous lisent déjà. Le guide est ici :{" "}
        <Link href="/guide/delivrabilite-email-gohighlevel">délivrabilité</Link>.
      </p>

      <h2>Petites structures, pas un catalogue de promesses</h2>
      <p>
        Cette page s’adresse aux coachs, aux formateurs et aux business en ligne qui vendent de l’accompagnement ou une
        formation. Une TPE qui a les mêmes gestes — prospects, rendez-vous, suivi — peut tenir dans le même socle. On ne
        publie pas une grille de métiers. On regarde la stack et le processus, à partir de l’
        <Link href="/audit">audit de stack</Link>.
      </p>
      <p>
        Les instituts et centres laser ne sont pas dans ce texte. Leurs forfaits, Solo et Équipe, sont sur la page{" "}
        <Link href="/instituts">Instituts</Link>. Le reste du périmètre technique — domaine, email, tunnels, paiement,
        référencement — est sur <Link href="/services">Services</Link> et{" "}
        <Link href="/referencement">SEO et GEO</Link>.
      </p>
      <p>
        ProMarket est à Nantes, et le compte se configure à distance. L’abonnement reste chez HighLevel. On est
        indépendants de HighLevel, LLC. Le cadre est sur la page{" "}
        <Link href="/agence-gohighlevel-nantes">agence à Nantes</Link>, et le sommaire des articles est dans le{" "}
        <Link href="/guide">guide</Link>.
      </p>

      {faqs.map(([q, a]) => (
        <details className="qa" key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
      <p>
        <Link className="btn" href="/audit">Voir si le compte a un sens</Link>
      </p>
    </main>
  );
}
