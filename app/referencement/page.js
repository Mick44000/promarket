import Link from "next/link";

export const metadata = {
  title: "SEO, GEO et agents IA pour GoHighLevel",
  description:
    "ProMarket référence tes tunnels GoHighLevel sur Google et dans les réponses des IA, puis branche un agent qui qualifie et prend les rendez-vous dans le CRM.",
  alternates: { canonical: "/referencement" },
  keywords: ["SEO GoHighLevel", "GEO", "agent IA GoHighLevel", "référencement France"],
};

const blocks = [
  ["SEO", "Google", "Chaque offre a une URL, un title et un sujet. On arrête les tunnels clonés qui se cannibalisent, et on relie le guide au checkout."],
  ["GEO", "Réponses des IA", "Les IA citent les pages précises : définition, fait daté, FAQ, auteur. On écrit pour être repris, pas pour répéter un mot-clé."],
  ["Agent IA", "Dans le CRM", "L’agent qualifie, propose un créneau, met à jour le pipeline et passe la main. Sans compte propre, il n’a rien à faire."],
];

export default function ReferencementPage() {
  return (
    <main className="wrap article">
      <p className="kicker">Acquisition</p>
      <h1>SEO, GEO et agents IA, branchés sur GoHighLevel.</h1>
      <p className="lede">
        Le setup ouvre le compte. Le référencement amène la demande. L’agent la traite. ProMarket pose les trois, en
        français, pour les infopreneurs qui veulent être trouvés en France — par Google et par les IA.
      </p>
      <div className="grid-3" style={{ marginTop: 22 }}>
        {blocks.map(([k, t, d]) => (
          <article className="card" key={k}>
            <p className="scope-label">{k}</p>
            <h2 style={{ fontSize: 28, marginTop: 8 }}>{t}</h2>
            <p className="muted">{d}</p>
          </article>
        ))}
      </div>
      <h2>Ce qui est livré</h2>
      <ul className="ticks">
        <li>Structure d’URLs, titles, metas et maillage entre le site, le guide et les pages de vente.</li>
        <li>Pages citables : définitions, FAQ, faits datés, auteur identifié. C’est le cœur du GEO.</li>
        <li>Agent IA cadré : questions autorisées, écriture dans le contact, passage à un humain, test sur un petit volume.</li>
        <li>Le compte GoHighLevel déjà propre : pipeline, champs, offre. Sinon on commence par l’audit.</li>
      </ul>
      <p>
        Le détail opérationnel est dans le guide{" "}
        <Link href="/guide/seo-geo-agent-ia-gohighlevel">SEO, GEO et agents IA sur GoHighLevel</Link>
        {" "}et dans la référence{" "}
        <Link href="/guide/gohighlevel-france">GoHighLevel en France</Link>.
      </p>
      <div className="hero-actions">
        <Link className="btn" href="/audit">Commander l’audit</Link>
        <Link className="btn ghost" href="/guide">Lire le guide</Link>
      </div>
    </main>
  );
}
