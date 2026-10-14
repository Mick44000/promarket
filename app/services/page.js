import Link from "next/link";
import { RelatedContent } from "@/components/RelatedContent";

export const metadata = {
  title: "Services migration et setup GoHighLevel",
  description: "Migration Kajabi, Systeme.io, ActiveCampaign, setup espace membres, délivrabilité, SaaS mode, SEO, GEO et agents IA. Accompagnement francophone ProMarket.",
  alternates: { canonical: "/services" },
};

const offers = [
  ["Migration", "Kajabi, Systeme.io ou ActiveCampaign vers un compte GoHighLevel, contacts segmentés, accès élèves testés avant le DNS.", "/migration-gohighlevel", "Voir la migration"],
  ["Setup from scratch", "Domaine, pipelines, tunnels, checkout Stripe, workflows d’onboarding. Pour un lancement qui n’a pas encore d’outil.", "/crm-coachs", "CRM pour coachs"],
  ["Délivrabilité", "SPF, DKIM, DMARC, sous-domaine d’envoi, plan de warm-up. On ne relance pas les inactifs le jour 1.", "/guide/delivrabilite-email-gohighlevel", "Lire le guide email"],
  ["SaaS mode", "Pour ceux qui facturent des sous-comptes. Agency Pro, snapshot, encaissement en euros via ta société. Page instituts à part.", "/guide/saas-mode-gohighlevel-france", "Lire le SaaS mode"],
  ["SEO, GEO et agents IA", "Pages indexables, contenus citables par les IA, agent qui qualifie et écrit dans le CRM GoHighLevel.", "/referencement", "Voir le référencement"],
];

export default function ServicesPage() {
  return (
    <main className="wrap article">
      <p className="crumb">
        <Link href="/">Accueil</Link>
        {" › "}
        Services
      </p>
      <p className="kicker">Services</p>
      <h1>On installe la machine. Tu gardes l’expertise.</h1>
      <p className="lede">Pas de coaching business. Un partenaire technique GoHighLevel, à distance, en français.</p>
      <p>
        L’ordre de bascule est sur la page <Link href="/methode">Méthode</Link>. Le siège est à Nantes, le détail local
        est sur <Link href="/agence-gohighlevel-nantes">l’agence</Link>. Les centres laser et instituts ne sont pas dans
        ce parcours : ils ont une <Link href="/instituts">offre séparée</Link>. Le décor français — facture, TVA, SMS,
        interface en anglais — est dans le guide <Link href="/guide/gohighlevel-france">GoHighLevel en France</Link>.
      </p>
      <p>
        Rien de ce qui suit n’inclut la licence HighLevel. L’abonnement se prend chez eux. ProMarket est indépendant de
        HighLevel, LLC. Le formulaire d’<Link href="/audit">audit de stack</Link> est gratuit : il compare l’ordre de
        grandeur des abonnements. L’audit écrit, à 1 000 € HT, est un autre livrable, décrit sur l’accueil. Le setup se
        chiffre ensuite, sur devis.
      </p>

      <div className="grid-2" style={{ marginTop: 24 }}>
        {offers.map(([t, d, href, label]) => (
          <article className="card" key={t}>
            <h2 style={{ fontSize: 28 }}>{t}</h2>
            <p className="muted">{d}</p>
            <p><Link href={href}>{label}</Link></p>
          </article>
        ))}
      </div>

      <h2>Migration : quitter l’outil sans couper les accès</h2>
      <p>
        Les stacks qu’on reprend le plus souvent viennent de Kajabi, de Systeme.io, d’ActiveCampaign, parfois de
        ClickFunnels, avec Calendly et Zapier autour. Chaque outil a gardé un morceau du client. La migration ne consiste
        pas à coller un export dans GoHighLevel le vendredi soir.
      </p>
      <p>
        On inventorie les offres, les tags, les domaines et les paiements en cours. On reconstruit le pipeline, l’espace
        membres et le checkout. Un compte test ouvre un module avant que la liste soit prévenue. L’ancien outil reste
        lisible le temps de la bascule. Le déroulé, et les guides selon l’outil de départ, sont sur la page{" "}
        <Link href="/migration-gohighlevel">Migration vers GoHighLevel</Link>.
      </p>

      <h2>Setup : un compte qui ressemble à ta vente</h2>
      <p>
        Quand il n’y a pas d’héritage à défaire, le travail est le même socle : domaine, DNS, pipelines, champs,
        calendrier, séquence d’accueil, page de vente, checkout Stripe. Les étapes du pipeline sont les tiennes, pas un
        modèle américain générique.
      </p>
      <p>
        Pour un coach ou un formateur, le contact, le rendez-vous, la relance et l’accès au cours doivent vivre ensemble.
        C’est le sujet de la page <Link href="/crm-coachs">CRM pour coachs</Link>. On n’écrit pas un script de vente à ta
        place. On range le processus que tu as déjà.
      </p>

      <h2>Délivrabilité, SaaS mode, visibilité</h2>
      <p>
        Le domaine d’envoi s’authentifie avant le premier broadcast : SPF, DKIM, DMARC, puis les acheteurs récents, puis
        seulement le reste. Le guide <Link href="/guide/delivrabilite-email-gohighlevel">délivrabilité</Link> dit pourquoi
        importer toute la base le jour 1 abîme le domaine. Le droit d’écrire à cette base est une autre question, traitée
        dans le guide <Link href="/guide/rgpd-gohighlevel-france">RGPD</Link>.
      </p>
      <p>
        Le SaaS mode sert à ceux qui facturent des sous-comptes sous leur marque, en euros, via leur société. Il demande
        le plan Agency Pro. Ce n’est pas un thème. Le guide{" "}
        <Link href="/guide/saas-mode-gohighlevel-france">SaaS mode</Link> et le guide{" "}
        <Link href="/guide/prix-gohighlevel-france">prix</Link> séparent l’abonnement, l’usage et la facture française.
      </p>
      <p>
        Le référencement vient quand le compte sait déjà ranger un lead. Une URL par offre, des pages qu’une IA peut
        citer, un agent qui écrit dans le pipeline : la page <Link href="/referencement">SEO, GEO et agents IA</Link>{" "}
        et l’article <Link href="/guide/seo-geo-agent-ia-gohighlevel">dédié</Link>. Sans pipeline, l’agent n’a rien à
        qualifier.
      </p>

      <h2>Ce qui ne rentre pas dans ce menu</h2>
      <p>
        On ne vend pas la licence, on ne promet pas un rang Google, un taux d’ouverture, ni un nombre de clients. Les
        instituts et centres laser ont leurs propres forfaits, sur la page <Link href="/instituts">Instituts</Link>. Une
        promesse pédagogique qui dépend d’un LMS lourd, ou une liste dont tu ne peux pas expliquer l’origine, se dit
        avant de toucher au domaine.
      </p>
      <p>
        Le sommaire des articles est dans le <Link href="/guide">guide</Link>. Pour situer ta stack avant un échange,
        passe par l’<Link href="/audit">audit gratuit</Link>.
      </p>
      <RelatedContent
        hrefs={["/migration-gohighlevel", "/crm-coachs", "/agence-gohighlevel-nantes", "/guide/gohighlevel-france"]}
        label="Pages liées"
      />
      <p style={{ marginTop: 28 }}><Link className="btn" href="/audit">Décrire ta stack</Link></p>
    </main>
  );
}
