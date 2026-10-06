import Link from "next/link";
import { guides } from "@/lib/guides";

export default function HomePage() {
  return (
    <main>
      <section className="wrap hero">
        <div>
          <p className="kicker">GoHighLevel pour infopreneurs francophones</p>
          <h1>Ta stack te freine. On la reconstruit en un seul outil.</h1>
          <p className="lede">
            ProMarket migre les coachs, formateurs et créateurs depuis Kajabi, Systeme.io ou ActiveCampaign vers GoHighLevel — sans couper les accès élèves, sans broadcast qui grille le domaine.
          </p>
          <div className="hero-actions">
            <Link className="btn" href="/audit">Lancer l’audit gratuit</Link>
            <Link className="btn ghost" href="/methode">Voir la méthode</Link>
          </div>
        </div>
        <aside className="hero-card">
          <p className="kicker" style={{ color: "#f0a090" }}>Aymeric Chantrel</p>
          <h2 style={{ fontSize: 32, color: "#fffaf3" }}>Partenaire technique, pas coach business.</h2>
          <p>Tu gardes la méthode. On pose le CRM, les tunnels, l’espace membres, les paiements et les relances.</p>
          <div className="stat-row">
            <div className="stat"><b>14 j</b><span>setup cible</span></div>
            <div className="stat"><b>1 outil</b><span>à la place de 5</span></div>
            <div className="stat"><b>0</b><span>coupure d’accès visée</span></div>
            <div className="stat"><b>FR</b><span>accompagnement</span></div>
          </div>
        </aside>
      </section>

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2>Tu te reconnais.</h2>
          <div className="grid-3">
            {[
              ["Cinq abonnements", "Kajabi, ActiveCampaign, Calendly, Zapier, un page builder. Rien ne se parle, tout se facture."],
              ["Soirs sur la technique", "Chaque mise à jour casse un tunnel. Le contenu attend."],
              ["Peur de la migration", "Tu restes parce que tu as peur de perdre les élèves, pas parce que la stack est bonne."],
            ].map(([t, d]) => (
              <article className="card" key={t}>
                <h3>{t}</h3>
                <p className="muted">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band dark">
        <div className="wrap">
          <p className="kicker">Ce qui est posé</p>
          <h2>Six briques, un compte.</h2>
          <div className="grid-3" style={{ marginTop: 22 }}>
            {[
              ["Domaine", "DNS, SSL, redirections. Ton nom, pas un sous-domaine plateforme."],
              ["Délivrabilité", "SPF, DKIM, DMARC, warm-up. Les emails partent vers les acheteurs d’abord."],
              ["CRM", "Pipelines, champs, tags qui collent à ta vente réelle."],
              ["Automations", "Relances, onboarding, échecs de paiement. Plus de Zapier entre deux outils."],
              ["Espace membres", "Cours, drip, accès coupés si l’abonnement tombe."],
              ["Paiement", "Checkout, order bumps, Stripe. Une page, un encaissement."],
            ].map(([t, d]) => (
              <article className="card" key={t}>
                <h3>{t}</h3>
                <p className="muted">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap grid-2">
          <div>
            <p className="kicker">Retours</p>
            <h2>Moins d’outils, plus de calme.</h2>
          </div>
          <div className="grid-2">
            {[
              ["« Je ne savais plus où donner de la tête avec mes 5 abonnements. Aujourd’hui tout est fluide. »", "Sophie · coach bien-être"],
              ["« La migration s’est faite sans coupure. Mes élèves n’ont vu qu’une interface plus rapide. »", "Marc · formateur B2B"],
              ["« J’avais peur de la complexité. Tout a été expliqué simplement. »", "Julie · créatrice"],
            ].map(([q, p]) => (
              <article className="card" key={p}>
                <p className="quote">{q}</p>
                <p className="person">{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "end", flexWrap: "wrap" }}>
            <div>
              <p className="kicker">Référence</p>
              <h2>Le guide, pas un catalogue affilié.</h2>
            </div>
            <Link href="/guide" className="btn ghost">Tous les articles</Link>
          </div>
          <div className="grid-3" style={{ marginTop: 18 }}>
            {guides.slice(0, 3).map((g) => (
              <Link key={g.slug} href={`/guide/${g.slug}`} className="card" style={{ textDecoration: "none" }}>
                <div className="tag">{g.category}</div>
                <h3 style={{ marginTop: 8 }}>{g.title}</h3>
                <p className="muted">{g.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band ink">
        <div className="wrap" style={{ display: "flex", justifyContent: "space-between", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
          <div>
            <h2>7 questions, un écart de stack, pas un appel forcé.</h2>
            <p className="muted">L’audit compare tes abonnements actuels à GoHighLevel et dit si une migration a du sens.</p>
          </div>
          <Link className="btn" href="/audit">Démarrer l’audit</Link>
        </div>
      </section>
    </main>
  );
}
