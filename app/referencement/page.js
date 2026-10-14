import Link from "next/link";
import { RelatedContent } from "@/components/RelatedContent";

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
      <h2>SEO : une offre, une URL</h2>
      <p>
        Les tunnels GoHighLevel sont souvent des pages lourdes, clonées, avec le même titre. Google ne sait pas laquelle
        montrer. On sépare : une URL, un title, une meta description, un seul sujet. Le domaine du tunnel et le domaine
        du site ne doivent pas se concurrencer sur la même requête.
      </p>
      <p>
        Le maillage relie ce qui explique à ce qui vend. Un article du{" "}
        <Link href="/guide">guide</Link> pointe vers la page de l’offre, et la page de l’offre ne répète pas l’article.
        La vitesse compte autant que le texte : une page saturée de scripts, sans contenu, ne se place pas. L’article{" "}
        <Link href="/guide/seo-geo-agent-ia-gohighlevel">SEO, GEO et agents IA</Link> détaille ce découpage.
      </p>
      <h2>GEO : des phrases qu’une IA peut citer</h2>
      <p>
        ChatGPT, Perplexity, Gemini ou les aperçus de Google reprennent les pages qui définissent un sujet, datent un
        fait, nomment l’auteur et répondent à une question précise. « Nous sommes les meilleurs » n’est pas citable. Un
        paragraphe qui dit quel plan débloque le SaaS mode, et à quelle date les tarifs ont été relevés, l’est.
      </p>
      <p>
        On ne crée pas une deuxième page pour répéter le guide. Le guide{" "}
        <Link href="/guide/gohighlevel-france">GoHighLevel en France</Link> et le guide{" "}
        <Link href="/guide/prix-gohighlevel-france">prix</Link> portent déjà ces faits. Le travail GEO consiste à les
        rendre trouvables, pas à les diluer dans dix URLs jumelles.
      </p>
      <h2>L’agent, après le compte</h2>
      <p>
        Un agent qui ne met pas à jour le contact n’est pas un agent. Il qualifie, propose un créneau, écrit dans le
        pipeline, et passe la main quand la question sort du cadre. Voice AI et SMS se paient à l’usage : on teste sur un
        petit volume. Sans champs et sans offre claire, il invente.
      </p>
      <p>
        Pour un coach, le pipeline est décrit sur <Link href="/crm-coachs">CRM pour coachs</Link>. S’il n’existe pas
        encore, on commence par les <Link href="/services">services</Link> ou par{" "}
        <Link href="/migration-gohighlevel">la migration</Link>, pas par le widget. Le cadre du travail est sur{" "}
        <Link href="/agence-gohighlevel-nantes">l’agence à Nantes</Link>.
      </p>
      <RelatedContent
        hrefs={["/guide/seo-geo-agent-ia-gohighlevel", "/guide/gohighlevel-france", "/crm-coachs", "/services"]}
      />
      <div className="hero-actions">
        <Link className="btn" href="/audit">Commander l’audit</Link>
        <Link className="btn ghost" href="/guide">Lire le guide</Link>
      </div>
    </main>
  );
}
