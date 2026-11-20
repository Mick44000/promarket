import Link from "next/link";

export const metadata = {
  title: "Réalisations",
  description:
    "Sites développés par Promarket. La fiche Fenua Spot décrit l’annuaire de la Polynésie française tel qu’il est en ligne.",
  alternates: { canonical: "/realisations" },
  openGraph: {
    title: "Réalisations",
    description:
      "Sites développés par Promarket. La fiche Fenua Spot décrit l’annuaire de la Polynésie française tel qu’il est en ligne.",
    type: "website",
    url: "/realisations",
    locale: "fr_FR",
  },
};

export default function RealisationsPage() {
  return (
    <main className="wrap article">
      <p className="crumb">
        <Link href="/">Accueil</Link>
        {" › "}
        Réalisations
      </p>
      <p className="kicker">Réalisations</p>
      <h1>Réalisations.</h1>
      <p className="lede">
        Les sites développés par Promarket. Une fiche par projet, limitée à ce qui se voit en production.
      </p>
      <div className="grid-2">
        <article className="card">
          <p className="tag">Annuaire</p>
          <p className="card-title">
            <Link href="/realisations/fenua-spot">Fenua Spot</Link>
          </p>
          <p className="muted">
            L’annuaire de la Polynésie française : rubriques, fiches, agenda, et la stack du développement.
          </p>
          <p>
            <Link href="/realisations/fenua-spot">Lire l’étude de cas</Link>
          </p>
        </article>
      </div>
    </main>
  );
}
