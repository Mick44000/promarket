import Link from "next/link";

export const metadata = {
  title: "Réalisations",
  description:
    "Sites développés par Promarket. Fenua Spot, Mon Courtier Assure, et My Goddess Revolution.",
  alternates: { canonical: "/realisations" },
  openGraph: {
    title: "Réalisations",
    description:
      "Sites développés par Promarket. Fenua Spot, Mon Courtier Assure, et My Goddess Revolution.",
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
        <article className="card">
          <p className="tag">Courtier</p>
          <p className="card-title">
            <Link href="/realisations/mon-courtier-assure">Mon Courtier Assure</Link>
          </p>
          <p className="muted">
            Le site du courtier à Nantes : pages, blog, présence locale, et le travail web de Promarket.
          </p>
          <p>
            <Link href="/realisations/mon-courtier-assure">Lire l’étude de cas</Link>
          </p>
        </article>
        <article className="card">
          <p className="tag">Formations</p>
          <p className="card-title">
            <Link href="/realisations/my-goddess-revolution">My Goddess Revolution</Link>
          </p>
          <p className="muted">
            Le site des formations : agenda, annuaire, inscriptions, et l’automatisation mise en place.
          </p>
          <p>
            <Link href="/realisations/my-goddess-revolution">Lire l’étude de cas</Link>
          </p>
        </article>
      </div>
    </main>
  );
}
