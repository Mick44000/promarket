import Link from "next/link";
import { RelatedContent } from "@/components/RelatedContent";

export const metadata = {
  title: "CRM pour coach et formateur",
  description:
    "CRM pour coach et CRM formateur : un logiciel tout-en-un. Pipeline, rendez-vous, automatisation marketing et accès au cours dans GoHighLevel.",
  alternates: { canonical: "/crm-coachs" },
  keywords: [
    "crm coach",
    "crm pour coach",
    "crm formateur",
    "crm tout en un",
    "logiciel tout en un coach",
    "automatisation marketing coach",
  ],
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
    "Le même socle sert dès que vous avez des prospects, des rendez-vous et un suivi. Les instituts et centres laser ont une offre séparée, avec leurs propres forfaits. Le reste se regarde au cas par cas, à partir de l’audit, sans catalogue de métiers inventé.",
  ],
  [
    "C’est quoi un CRM pour coach, concrètement ?",
    "Un pipeline qui reprend vos étapes, un rendez-vous dans le même contact, une relance quand l’étape change, et, si vous vendez une formation, un accès ouvert ou fermé selon le paiement. Pas une base que vous « gérez » à part.",
  ],
  [
    "Un CRM formateur est-il un autre logiciel ?",
    "Non. Le formateur ajoute une question : la personne a-t-elle encore le droit d’ouvrir le module ? L’espace membres répond dans le même compte. S’il ne suffit pas, on le dit avant de quitter Kajabi.",
  ],
  [
    "L’automatisation marketing d’un coach, par où ça commence ?",
    "Par trois workflows, une fois le domaine authentifié : l’accueil, le rendez-vous, l’accès au cours. Pas par une bibliothèque de quarante scénarios traduits d’un marché américain.",
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
      <h1>CRM pour coach : un logiciel tout-en-un, formateurs compris.</h1>
      <p className="meta"><span>Mis à jour le 20 octobre 2026</span></p>
      <p className="lede">
        Un CRM pour coach range le prospect, le rendez-vous, la relance et le paiement au même endroit. Un CRM formateur
        y ajoute l’accès au cours. Quand ces gestes sont dans cinq logiciels, le suivi dépend de votre mémoire.
        GoHighLevel peut les réunir. Encore faut-il que le compte ressemble à votre façon de vendre.
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

      <h2>Trois workflows, pas une bibliothèque</h2>
      <p>
        Un compte de coach n’a pas besoin de quarante scénarios le jour de la livraison. Trois tiennent le quotidien, et
        seulement une fois le domaine d’envoi authentifié. Les écrire avant le DNS, c’est envoyer depuis une adresse que
        les boîtes ne connaissent pas.
      </p>
      <p>
        L’accueil : la personne vient de laisser son email ou de réserver. Elle reçoit un message en français, à votre
        nom, qui dit ce qui se passe ensuite. Pas une séquence de douze mails traduite d’un marché américain. Le rappel
        de rendez-vous, et la suite si la personne ne vient pas, partent du même contact. Vous ne recopiez pas l’agenda
        dans un tableur le lundi.
      </p>
      <p>
        L’accès, si vous vendez une formation : le paiement ouvre le module, l’échec de paiement le referme. Le guide{" "}
        <Link href="/guide/espace-membres-gohighlevel">espace membres</Link> dit jusqu’où ce portail va. S’il ne va pas
        assez loin pour votre promesse, on le dit avant de migrer. Le comparatif avec un outil d’email seul est dans{" "}
        <Link href="/guide/gohighlevel-vs-activecampaign">GoHighLevel ou ActiveCampaign</Link>.
      </p>
      <p>
        L’automatisation marketing d’un coach s’arrête là au début. Trois scénarios tiennent le quotidien. Le quatrième,
        une relance SMS, ne s’ajoute que si le numéro a été collecté pour ça, et si vous avez regardé le coût à l’usage.
        Le guide <Link href="/guide/prix-gohighlevel-france">prix</Link> sépare l’abonnement et le portefeuille. Le guide{" "}
        <Link href="/guide/rgpd-gohighlevel-france">RGPD</Link> sépare la liste email et la liste SMS.
      </p>
      <div className="table-scroll">
        <table>
          <caption>Ce que le logiciel tout-en-un remplace, et ce qu’il ne décide pas à votre place.</caption>
          <thead>
            <tr>
              <th scope="col">Geste</th>
              <th scope="col">Souvent éparpillé</th>
              <th scope="col">Dans le compte</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Savoir où en est le prospect</td>
              <td>Mémoire, tableur, tags trop larges</td>
              <td>Une étape de pipeline = un geste réel</td>
            </tr>
            <tr>
              <td>Prendre et rappeler un rendez-vous</td>
              <td>Agenda d’un côté, CRM de l’autre</td>
              <td>Le créneau vit sur le contact</td>
            </tr>
            <tr>
              <td>Relancer</td>
              <td>Séquence générique, tous les matins</td>
              <td>Un message quand l’étape change</td>
            </tr>
            <tr>
              <td>Ouvrir le cours</td>
              <td>LMS plus un connecteur</td>
              <td>Paiement, tag, accès. Voir l’espace membres</td>
            </tr>
            <tr>
              <td>Écrire l’offre</td>
              <td>Personne</td>
              <td>Toujours vous. L’outil range, il ne positionne pas</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Avant de parler d’automatisation, la liste tient sur une page :</p>
      <ul className="checks">
        <li>Les étapes réelles de la vente sont nommées, pas copiées d’un modèle à cinq colonnes.</li>
        <li>Les champs portent l’offre, la date de session, l’accompagnement en cours. Les tags ne les doublonnent pas.</li>
        <li>Le domaine d’envoi est authentifié avant la séquence d’accueil. Le guide délivrabilité dit l’ordre.</li>
        <li>Vous savez à qui vous avez le droit d’écrire, et par quel canal.</li>
        <li>S’il y a une formation, un élève de test a ouvert un module avant tout mail à la liste.</li>
        <li>Le plan HighLevel est choisi pour un seul business, sauf si vous rebillez des sous-comptes.</li>
      </ul>
      <p>
        Le piège habituel est d’allumer les quarante scénarios du snapshot le jour de la livraison. Vous ne savez plus
        lequel a écrit, et le prospect reçoit trois versions du même accueil. On garde les trois workflows. On éteint le
        reste. Le <Link href="/guide">guide</Link> détaille chaque sujet à part :{" "}
        <Link href="/guide/gohighlevel-france">le cadre français</Link>,{" "}
        <Link href="/guide/delivrabilite-email-gohighlevel">la délivrabilité</Link>,{" "}
        <Link href="/guide/migration-systeme-io-gohighlevel">Systeme.io</Link> si les tunnels viennent de là.
      </p>

      <h2>Ce que vous apportez</h2>
      <p>
        Vous apportez l’offre, le prix, les étapes réelles de la vente, et la liste des gens à qui vous avez le droit
        d’écrire. Le compte range ça. Il ne choisit pas votre positionnement. Il n’invente pas un consentement, et il
        n’écrit pas les séances à votre place.
      </p>
      <p>
        Si la liste vient de Kajabi, de Systeme.io, de ClickFunnels ou d’un fichier dont vous ne savez plus l’origine, on
        la trie avant le premier envoi. Les acheteurs récents d’abord. Les inactifs ne servent pas à « annoncer le nouvel
        outil ». La page <Link href="/migration-gohighlevel">Migration</Link> donne cet ordre, quel que soit l’outil de
        départ. Le guide <Link href="/guide/gohighlevel-france">GoHighLevel en France</Link> rappelle ce que les tutos
        américains ne couvrent pas : la facture en euros, les SMS, le responsable de traitement.
      </p>
      <p>
        Le formulaire d’<Link href="/audit">audit</Link> demande les outils et l’objectif. Il est gratuit. Il ne remplace
        pas le forfait écrit de 1 000 € HT quand il faut un plan numéroté. Le setup se chiffre après. Le suivi mensuel,
        si vous le choisissez, est à 300 € à partir de 3 heures, décrit sur l’accueil. Aucun de ces montants n’est
        l’abonnement HighLevel.
      </p>

      {faqs.map(([q, a]) => (
        <details className="qa" key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
      <RelatedContent
        hrefs={[
          "/migration-gohighlevel",
          "/agence-gohighlevel-nantes",
          "/guide/espace-membres-gohighlevel",
          "/guide/gohighlevel-france",
        ]}
      />
      <p>
        <Link className="btn" href="/audit">Voir si le compte a un sens</Link>
      </p>
    </main>
  );
}
