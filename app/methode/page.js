import Link from "next/link";
import { OfferCta } from "@/components/OfferCta";
import { RelatedContent } from "@/components/RelatedContent";

export const metadata = {
  title: "Méthode d’implantation et de transfert",
  description:
    "Inventaire, reconstruction, bascule, puis les jours d’après : la méthode Promarket pour implanter GoHighLevel et transférer les données.",
  alternates: { canonical: "/methode" },
};

const steps = [
  ["01", "Inventaire", "Offres, tags, domaines, envoi, paiements en cours, liste chaude et liste froide. Rien ne se transfère avant cette carte."],
  ["02", "Reconstruction", "Pipelines, formulaires, calendriers, automatisations, et l’accès aux contenus quand il y en a. Un compte de test ouvre le parcours avant que la liste soit prévenue."],
  ["03", "Bascule", "Authentification de l’envoi, premiers messages vers les acheteurs, redirection du domaine. L’ancien outil reste lisible."],
  ["04", "Jours d’après", "Paiements en échec, accès manquants, délivrabilité. Le suivi continue après le jour du domaine. Il fait partie de la maintenance."],
];

export default function MethodePage() {
  return (
    <main className="wrap article">
      <p className="crumb">
        <Link href="/">Accueil</Link>
        {" › "}
        <Link href="/services">Offre</Link>
        {" › "}
        Méthode
      </p>
      <p className="kicker">Méthode</p>
      <h1>Inventaire, reconstruction, bascule, puis les jours d’après.</h1>
      <p className="lede">
        C’est l’ordre du transfert et de l’implantation, dans la même offre. Le contexte selon l’outil de départ est
        dans les guides <Link href="/guide/migration-kajabi-gohighlevel">Kajabi</Link>,{" "}
        <Link href="/guide/migration-systeme-io-gohighlevel">Systeme.io</Link> et{" "}
        <Link href="/guide/gohighlevel-vs-activecampaign">ActiveCampaign</Link>.
      </p>
      <div className="steps" style={{ marginTop: 28 }}>
        {steps.map(([n, t, d]) => (
          <article className="step card" key={n}>
            <div className="num">{n}</div>
            <div>
              <h2 style={{ fontSize: 28, marginTop: 0 }}>{t}</h2>
              <p className="muted" style={{ margin: 0 }}>{d}</p>
            </div>
          </article>
        ))}
      </div>
      <h2>Ce qui reste vrai quel que soit l’outil</h2>
      <p>
        On n’envoie pas le message de bascule tant qu’un compte test n’a pas ouvert le parcours prévu. On n’écrit pas à
        toute la liste le jour où le domaine d’envoi est neuf : d’abord les acheteurs, ensuite les ouvreurs. Le détail
        est dans le guide <Link href="/guide/delivrabilite-email-gohighlevel">délivrabilité</Link>.
      </p>
      <p>
        Le droit d’écrire à la base se vérifie pendant l’inventaire. Une liste importée n’est pas un consentement SMS.
        Le guide <Link href="/guide/rgpd-gohighlevel-france">RGPD</Link> se lit à ce moment-là. L’agent IA vient une
        fois le compte capable de ranger un lead : c’est une composante de l’
        <Link href="/services">offre</Link>, pas une deuxième prestation.
      </p>
      <RelatedContent
        hrefs={[
          "/migration-gohighlevel",
          "/services",
          "/guide/migration-kajabi-gohighlevel",
          "/guide/delivrabilite-email-gohighlevel",
        ]}
        label="Pages liées"
      />
      <p>
        <OfferCta />
      </p>
    </main>
  );
}
