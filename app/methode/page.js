export const metadata = { title: "Méthode de migration GoHighLevel", description: "Inventaire, reconstruction, bascule DNS et hypercare : la méthode ProMarket en 14 jours pour migrer vers GoHighLevel." };

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
    </main>
  );
}
