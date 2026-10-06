import Link from "next/link";
import { AuditForm } from "@/components/AuditForm";

export const metadata = {
  title: "Audit stack gratuit",
  description:
    "Audit gratuit ProMarket : compare Kajabi, Systeme.io, ActiveCampaign et GoHighLevel, et vois si une migration a du sens.",
  alternates: { canonical: "/audit" },
};

const faqs = [
  [
    "Le formulaire est-il le forfait à 1 000 € ?",
    "Non. Le formulaire de cette page est gratuit et sans engagement. Le forfait de 1 000 € HT est un autre livrable : analyse écrite, plan de migration et macro-planning, décrits sur l’accueil. L’un ne remplace pas l’autre, et le forfait n’est pas déduit du setup.",
  ],
  [
    "L’écart en euros est-il un devis ?",
    "Non. C’est un ordre de grandeur des abonnements cochés, comparé au plan Starter affiché par HighLevel à 97 $ par mois, hors usage. Les dollars restent des dollars. Le setup ProMarket se chiffre ensuite, sur devis, si tu passes par le forfait.",
  ],
  [
    "Faut-il déjà avoir GoHighLevel ?",
    "Non. L’abonnement se prend chez HighLevel. ProMarket ne vend pas la licence. Le formulaire sert à voir si la migration ou le setup a un sens avant d’ouvrir le compte.",
  ],
];

export default function AuditPage() {
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
        Audit
      </p>
      <p className="kicker">Audit</p>
      <h1>Sept questions. L’écart de stack, tout de suite.</h1>
      <p className="lede">
        Coche tes outils. Tu vois l’ordre de grandeur avant d’envoyer le diagnostic. Rien n’est créé sur ce site : le
        récap s’ouvre dans ton client mail, à destination de contact@promarket.fr.
      </p>

      <h2>Ce que le formulaire regarde</h2>
      <p>
        Quatre informations suffisent pour une première lecture. Les outils cochés : Kajabi, Systeme.io, ActiveCampaign,
        Calendly, Zapier ou Make, ClickFunnels. La taille de la liste. La présence d’un espace membres ou d’une formation
        encore ouverte. L’objectif : migrer sans couper les accès, partir de zéro, ou revendre des sous-comptes.
      </p>
      <p>
        La lecture immédiate additionne un ordre de grandeur d’abonnements et le compare au plan Starter de GoHighLevel,
        affiché par HighLevel à 97 $ par mois, hors usage. Ce n’est pas une facture, et ce n’est pas un conseil d’acheter.
        Les SMS, l’email au-delà du fair use et la voix ne sont pas dans ces 97 $. Si l’objectif est de facturer des
        sous-comptes, le texte le dit : le SaaS mode est sur le plan Agency Pro, pas sur Starter.
      </p>
      <p>
        Une liste large déclenche un avertissement de warm-up. Un espace membres actif déclenche la règle du compte élève
        test. Ces deux phrases résument des guides plus longs : la{" "}
        <Link href="/guide/delivrabilite-email-gohighlevel">délivrabilité</Link> et la{" "}
        <Link href="/migration-gohighlevel">migration</Link>.
      </p>

      <h2>Gratuit ici, forfait plus loin</h2>
      <p>
        Cette page est le diagnostic en ligne. Les conditions de vente le disent : il est gratuit et sans engagement.
        Aucun compte n’est créé. Tu peux aussi écrire directement à contact@promarket.fr si le client mail ne s’ouvre pas.
      </p>
      <p>
        L’accueil décrit un autre audit, payant : 1 000 € HT, livrable en sept jours. Il contient l’analyse de la stack,
        un plan de migration numéroté et un macro-planning. Ce forfait n’est pas déduit du setup. Le setup, lui, est
        chiffré après, selon le périmètre. Mélanger les deux dans la même phrase fait croire qu’un formulaire remplace
        un plan écrit. Ce n’est pas le cas.
      </p>
      <p>
        Le diagnostic gratuit répond à une question étroite : est-ce que l’empilement actuel et l’objectif rendent une
        bascule compréhensible ? Le forfait répond à la suivante : dans quel ordre, avec quels risques, pour quel temps
        de travail. La <Link href="/methode">méthode</Link> montre les quatre temps qu’on retrouve dans ce plan.
      </p>

      <h2>Ce que le chiffre ne dit pas</h2>
      <p>
        L’écart entre tes abonnements et 97 $ n’est pas le coût de la reconstruction. Une séquence de plusieurs dizaines
        d’emails se réécrit. Les pages ne se collent pas d’un outil à l’autre. Les accès élèves se testent avant de
        toucher au domaine. Une liste froide, importée puis relancée le jour même, abîme l’envoi pour des semaines.
      </p>
      <p>
        Le formulaire ne tranche pas non plus le droit. Il ne dit pas si tu peux écrire à une vieille liste, ni si un
        tag « intéressé » vaut un consentement SMS. Ça se lit dans le guide{" "}
        <Link href="/guide/rgpd-gohighlevel-france">RGPD</Link>, et ce guide n’est pas un avis juridique. Il ne choisit
        pas non plus le plan à ta place quand tu veux rebiller : le détail est dans{" "}
        <Link href="/guide/prix-gohighlevel-france">les prix</Link> et le{" "}
        <Link href="/guide/saas-mode-gohighlevel-france">SaaS mode</Link>.
      </p>

      <h2>Après l’envoi</h2>
      <p>
        Le mail reprend les outils, la taille de liste, l’espace membres, l’objectif et l’écart d’abonnements. On s’en
        sert pour dire si la suite a un sens, et si la suite est le forfait ou un simple échange. ProMarket est
        indépendant de HighLevel, LLC. On configure le compte. On ne revend pas la plateforme comme si c’était notre
        logiciel.
      </p>
      <p>
        Selon la réponse, les pages utiles ensuite sont les <Link href="/services">services</Link>, la page{" "}
        <Link href="/crm-coachs">CRM pour coachs</Link> si ton activité est l’accompagnement, ou la page{" "}
        <Link href="/instituts">instituts</Link> si tu tiens des cabines. Le cadre local est sur{" "}
        <Link href="/agence-gohighlevel-nantes">l’agence à Nantes</Link>.
      </p>

      <div style={{ marginTop: 24, maxWidth: 680 }}>
        <AuditForm />
      </div>

      <div style={{ marginTop: 28 }}>
        {faqs.map(([q, a]) => (
          <details className="qa" key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </main>
  );
}
