import Link from "next/link";
import { RelatedContent } from "@/components/RelatedContent";

export const metadata = {
  title: "Agence GoHighLevel à Nantes",
  description:
    "ProMarket, à Nantes, installe et migre les comptes GoHighLevel des coachs, formateurs et business en ligne. À distance, en français.",
  alternates: { canonical: "/agence-gohighlevel-nantes" },
  keywords: ["agence GoHighLevel Nantes", "agence GoHighLevel France", "expert GoHighLevel Nantes"],
};

const faqs = [
  [
    "Faut-il être à Nantes pour travailler ensemble ?",
    "Non. Le siège de MCA, la société qui porte Promarket, est au 2 place Jean V, 44100 Nantes. Les accès se font sur votre sous-compte, à distance. On intervient pour les équipes francophones en France, en Belgique, en Suisse et au Canada.",
  ],
  [
    "ProMarket vend-il la licence GoHighLevel ?",
    "Non. L’abonnement se prend chez HighLevel. ProMarket est indépendant de HighLevel, LLC. On installe, on migre, on règle la délivrabilité et, si vous le demandez, le référencement.",
  ],
  [
    "L’interface est-elle en français ?",
    "L’interface est surtout en anglais. Les pages, les emails, les workflows et l’accompagnement sont en français. C’est le setup qui est francophone, pas la marque HighLevel.",
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
        Agence à Nantes
      </p>
      <p className="kicker">Nantes · France</p>
      <h1>Une agence GoHighLevel à Nantes, pour les équipes francophones.</h1>
      <p className="lede">
        ProMarket pose le compte : domaine, CRM, emails, tunnels, espace membres, paiement. Vous gardez l’offre et la
        relation avec vos clients. Le travail est à distance. Le siège est à Nantes.
      </p>

      <h2>Ce que « agence » veut dire ici</h2>
      <p>
        Le mot agence prête à confusion. Certains l’utilisent pour revendre la licence, d’autres pour coacher la stratégie,
        d’autres pour livrer des pages. Ici, c’est un partenaire technique. Vous arrivez avec une offre déjà claire, ou
        avec une stack déjà en place. On regarde ce qui doit vivre dans GoHighLevel, et on l’installe.
      </p>
      <p>
        HighLevel facture la plateforme, en dollars. ProMarket facture l’installation et, si vous le choisissez, le suivi.
        Les deux notes ne se mélangent pas. L’accueil détaille le cadre : un diagnostic en ligne gratuit, un audit écrit
        à 1 000 € HT quand il faut un plan, un setup sur devis, un suivi mensuel à 300 € à partir de 3 heures. Rien de
        tout cela n’inclut l’abonnement HighLevel.
      </p>
      <p>
        On ne promet pas un rang Google, un taux d’ouverture, ni un nombre de projets. On décrit le périmètre et l’ordre.
        Le détail des blocs est sur la page <Link href="/services">Services</Link>. L’ordre de bascule est sur la page{" "}
        <Link href="/methode">Méthode</Link>.
      </p>

      <h2>Pour qui, depuis Nantes</h2>
      <p>
        Les demandes qui collent : un coach, un formateur, un business en ligne, une petite structure qui vend de
        l’accompagnement ou une formation. Souvent, le quotidien est déjà réparti entre Kajabi ou Systeme.io, un outil
        d’email, un agenda et un outil d’automatisation. Le compte unique sert à arrêter de chercher le lead entre quatre
        onglets. La page <Link href="/crm-coachs">CRM pour coachs</Link> décrit ce cas.
      </p>
      <p>
        Un autre cas, tenu à part : les instituts et centres laser indépendants, de 2 à 8 cabines, hors enseignes et hors
        médecine injectable. Ce n’est pas la même offre, ni les mêmes prix. Elle est sur la page{" "}
        <Link href="/instituts">Instituts</Link>.
      </p>
      <p>
        Être à Nantes fixe le siège, le fuseau et la langue. Ça ne fixe pas une zone de chalandise. Les accès se font sur
        votre sous-compte. Rien ne transite par une machine partagée. Si vous êtes à Lyon, à Bruxelles ou à Montréal, le
        déroulé est le même, tant que les textes et les élèves sont en français.
      </p>

      <h2>Ce qui change par rapport à un tutoriel américain</h2>
      <p>
        Les vidéos en anglais montrent les boutons. Elles ne montrent pas la facture en euros, la TVA si vous êtes
        assujetti, le coût des SMS vers les mobiles français, ni le fait que vous restez responsable de traitement pour
        vos contacts. Ces sujets sont dans le <Link href="/guide">guide</Link>, en particulier{" "}
        <Link href="/guide/gohighlevel-france">GoHighLevel en France</Link>, les{" "}
        <Link href="/guide/prix-gohighlevel-france">prix</Link> et le{" "}
        <Link href="/guide/rgpd-gohighlevel-france">RGPD</Link>.
      </p>
      <p>
        Le SaaS mode, qui permet de faire payer un sous-compte par votre société, n’est pas un habillage. Il demande le
        plan Agency Pro, un encaissement à votre nom, et des conditions qui disent que vous n’êtes pas l’éditeur du
        logiciel. Le guide <Link href="/guide/saas-mode-gohighlevel-france">SaaS mode</Link> le détaille.
      </p>
      <p>
        Le référencement vient ensuite, pas avant. Une page que Google peut lire, et qu’une IA peut citer, suppose un
        sujet par URL. C’est l’objet de la page <Link href="/referencement">SEO et GEO</Link>. Un agent dans le CRM n’a
        de sens que si le pipeline et les champs existent déjà.
      </p>

      <h2>Par où commencer</h2>
      <p>
        Si vous ne savez pas encore si le changement d’outil se justifie, le formulaire d’<Link href="/audit">audit de
        stack</Link> compare vos abonnements actuels et votre objectif. Il est gratuit. Il ne remplace pas le forfait
        écrit. Si vous êtes déjà sûr de migrer, la page <Link href="/migration-gohighlevel">Migration</Link> donne l’ordre
        : inventaire, reconstruction, bascule, hypercare.
      </p>
      <p>
        Apportez les accès quand on vous les demande, pas avant. Le premier échange sert à voir si le périmètre est le
        nôtre. Un catalogue très large, une promesse pédagogique qui dépend d’un LMS lourd, ou une liste dont vous ne
        pouvez pas expliquer l’origine : on le dit avant de toucher au domaine.
      </p>

      <h2>Comment se passe un projet à distance</h2>
      <p>
        Le premier échange sert à voir si le périmètre est le nôtre. On ne demande pas les accès avant ça. Ensuite, soit
        le formulaire d’<Link href="/audit">audit de stack</Link> suffit pour comparer vos abonnements actuels, soit il
        faut le livrable écrit : 1 000 € HT, un plan, un macro-planning, décrit sur l’accueil. Le setup se chiffre après,
        sur devis, selon ce que l’inventaire a montré. Le suivi, si vous le voulez, est à 300 € par mois à partir de 3
        heures.
      </p>
      <p>
        Aucun de ces montants n’est la licence HighLevel. La plateforme reste facturée en dollars, par HighLevel, selon
        le plan. Les montants publics relevés en octobre 2026 sont dans le guide{" "}
        <Link href="/guide/prix-gohighlevel-france">prix</Link>. On ne les convertit pas en euros « pour faire simple » :
        votre facture client et la facture plateforme sont deux documents.
      </p>
      <p>
        Les textes, les emails et les workflows sont en français. L’interface du logiciel reste surtout en anglais. On ne
        présente pas un bouton renommé comme une version française de l’éditeur. Le guide{" "}
        <Link href="/guide/gohighlevel-france">GoHighLevel en France</Link> tient cette distinction.
      </p>

      <h2>Ce qui reste à votre nom</h2>
      <p>
        L’offre, les élèves, les conditions que vous leur envoyez, la facture en euros. Si vous encaissez des sous-comptes
        sous votre marque, c’est votre société qui facture. HighLevel vous facture la plateforme. Le guide{" "}
        <Link href="/guide/saas-mode-gohighlevel-france">SaaS mode</Link> sépare les deux flux, et dit ce qu’il ne faut
        pas promettre : vous n’êtes pas l’éditeur du logiciel.
      </p>
      <p>
        Le quotidien d’un coach ou d’un formateur — pipeline, rendez-vous, relance, accès au cours — est sur{" "}
        <Link href="/crm-coachs">CRM pour coachs</Link>. La bascule depuis un autre outil est sur{" "}
        <Link href="/migration-gohighlevel">Migration</Link>. Le référencement des pages, une fois le compte lisible, est
        sur <Link href="/referencement">SEO et GEO</Link>. Les instituts et centres laser ne sont pas dans ces pages :
        leurs forfaits sont sur <Link href="/instituts">Instituts</Link>.
      </p>

      {faqs.map(([q, a]) => (
        <details className="qa" key={q}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
      <RelatedContent
        hrefs={["/crm-coachs", "/migration-gohighlevel", "/services", "/guide/gohighlevel-france"]}
      />
      <p>
        <Link className="btn" href="/audit">Décrire votre stack</Link>
      </p>
    </main>
  );
}
