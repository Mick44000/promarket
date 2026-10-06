import Link from "next/link";

export const metadata = {
  title: "Méthode de migration GoHighLevel",
  description: "Inventaire, reconstruction, bascule DNS et hypercare : la méthode ProMarket en 14 jours pour migrer vers GoHighLevel.",
  alternates: { canonical: "/methode" },
};

export default function MethodePage() {
  const steps = [
    ["01", "Inventaire", "Offres, tags, domaines, DNS email, paiements en cours, liste chaude vs froide. Rien ne se migre avant cette carte."],
    ["02", "Reconstruction", "Pipelines, espace membres, workflows, checkout. Un compte élève test ouvre un module avant que quiconque soit prévenu."],
    ["03", "Bascule", "Authentification email, warm-up sur les acheteurs, redirection du domaine, ancien outil encore lisible."],
    ["04", "Hypercare", "Échecs de paiement, accès manquants, délivrabilité. On reste sur le compte les jours qui suivent, pas seulement le jour du DNS."],
  ];
  return (
    <main className="wrap article">
      <p className="kicker">Méthode</p>
      <h1>Quatorze jours si le catalogue est simple. Plus si tu as dix offres.</h1>
      <p className="lede">Le calendrier n’est pas une promesse marketing. C’est le temps pour un infopreneur avec un espace membres, une liste et un checkout. Au-delà, on phase par produit.</p>
      <p>
        Cette page est le déroulé. Le contexte, selon l’outil de départ, est dans les guides{" "}
        <Link href="/guide/migration-kajabi-gohighlevel">Kajabi</Link>,{" "}
        <Link href="/guide/migration-systeme-io-gohighlevel">Systeme.io</Link> et{" "}
        <Link href="/guide/gohighlevel-vs-activecampaign">ActiveCampaign</Link>. La page{" "}
        <Link href="/migration-gohighlevel">Migration</Link> reprend le même ordre pour quelqu’un qui compare encore.
      </p>
      <div className="steps" style={{ marginTop: 28 }}>
        {steps.map(([n, t, d]) => (
          <article className="step card" key={n}>
            <div className="num">{n}</div>
            <div>
              <h2 style={{ fontSize: 28 }}>{t}</h2>
              <p className="muted" style={{ margin: 0 }}>{d}</p>
            </div>
          </article>
        ))}
      </div>
      <h2>Ce qui reste vrai quel que soit l’outil</h2>
      <p>
        On n’envoie pas l’email de bascule tant qu’un compte test n’a pas ouvert un module, reçu le message d’accès et
        réussi à se reconnecter. On n’écrit pas à toute la liste le jour où le domaine d’envoi est neuf : d’abord les
        acheteurs, ensuite les ouvreurs. Le détail est dans le guide{" "}
        <Link href="/guide/delivrabilite-email-gohighlevel">délivrabilité</Link>.
      </p>
      <p>
        Le périmètre facturé est sur la page <Link href="/services">Services</Link>. Pour savoir si ta stack entre dans
        le cas « quatorze jours » ou dans un phasage par produit, le formulaire de l’<Link href="/audit">audit</Link>{" "}
        demande la taille de liste, l’espace membres et l’outil actuel. Le forfait écrit, lui, est à part : 1 000 € HT,
        décrit sur l’accueil.
      </p>
      <p>
        <Link className="btn" href="/audit">Décrire ta stack</Link>
      </p>
    </main>
  );
}
