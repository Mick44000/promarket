import Link from "next/link";

export const metadata = {
  title: "GoHighLevel pour instituts et centres laser",
  description: "Setup GoHighLevel et récurrent pour centres laser et instituts esthétiques indépendants en France. Offre séparée de la migration infopreneurs.",
  alternates: { canonical: "/instituts" },
};

export default function InstitutsPage() {
  return (
    <main className="wrap article">
      <p className="kicker">Offre verticale · pas la home</p>
      <h1>Instituts et centres laser : la cabine remplie, pas un tunnel de plus.</h1>
      <p className="lede">
        Offre à part de la migration infopreneurs. Pour les centres indépendants, 2 à 8 cabines, hors enseignes et hors médecine injectable. CRM, prise de rendez-vous, relances, avis, SaaS mode inclus. Le parcours coachs et formations est sur les pages <Link href="/services">Services</Link> et <Link href="/crm-coachs">CRM pour coachs</Link>, pas ici.
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
      <p className="note">Prix de setup ProMarket, pas le prix de la licence HighLevel. La plateforme reste facturée à part, en dollars, selon le plan. Le principe de facturation en euros, sous ta marque, est le même que dans le guide <Link href="/guide/saas-mode-gohighlevel-france">SaaS mode</Link>.</p>
      <p>
        Le travail sur les comptes se fait à distance, depuis Nantes, comme pour le reste de l’activité. Le cadre est sur la page <Link href="/agence-gohighlevel-nantes">agence</Link>. Pour décrire le centre avant un échange, le formulaire d’<Link href="/audit">audit</Link> reprend les outils et l’objectif.
      </p>
      <p><Link className="btn" href="/audit">Demander un diagnostic institut</Link></p>
    </main>
  );
}
