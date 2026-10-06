import Link from "next/link";

export const metadata = {
  title: "GoHighLevel pour instituts et centres laser",
  description: "Setup GoHighLevel et récurrent pour centres laser et instituts esthétiques indépendants en France. Offre séparée de la migration infopreneurs.",
};

export default function InstitutsPage() {
  return (
    <main className="wrap article">
      <p className="kicker">Offre verticale · pas la home</p>
      <h1>Instituts et centres laser : la cabine remplie, pas un tunnel de plus.</h1>
      <p className="lede">
        Offre à part de la migration infopreneurs. Pour les centres indépendants, 2 à 8 cabines, hors enseignes et hors médecine injectable. CRM, prise de rendez-vous, relances, avis, SaaS mode inclus.
      </p>
      <div className="grid-2" style={{ marginTop: 20 }}>
        <article className="card">
          <div className="tag">Solo</div>
          <h2>3 900 € + 247 €/mois</h2>
          <p className="muted">Un site, un calendrier, les relances d’absence et de soin, le reporting cabine. Appels 7h–15h heure de Paris.</p>
        </article>
        <article className="card">
          <div className="tag">Équipe</div>
          <h2>5 900 € + 397 €/mois</h2>
          <p className="muted">Multi-praticiens, pipelines distincts, scripts d’accueil, même socle GoHighLevel en marque blanche.</p>
        </article>
      </div>
      <p className="note">Prix de setup ProMarket, pas le prix de la licence HighLevel. La plateforme reste facturée à part, en dollars, selon le plan.</p>
      <p><Link className="btn" href="/audit">Demander un diagnostic institut</Link></p>
    </main>
  );
}
