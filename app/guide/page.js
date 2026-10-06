import Link from "next/link";
import { guides } from "@/lib/guides";

export const metadata = {
  title: "Guide GoHighLevel en français",
  description: "Guides ProMarket : prix GoHighLevel, migration Kajabi et Systeme.io, SaaS mode, RGPD, délivrabilité et espace membres.",
  alternates: { canonical: "/guide" },
};

export default function GuideIndex() {
  return (
    <main className="wrap article">
      <p className="kicker">Guide</p>
      <h1>GoHighLevel, version exploitation française.</h1>
      <p className="lede">Pas un clone des tutos US. Prix, migration, facture, RGPD, email. Chaque article renvoie vers l’audit, pas vers un lien d’affiliation nu.</p>
      <div className="grid-2" style={{ marginTop: 22 }}>
        {guides.map((g) => (
          <Link key={g.slug} href={`/guide/${g.slug}`} className="card" style={{ textDecoration: "none" }}>
            <div className="meta"><span>{g.category}</span><span>{g.reading}</span></div>
            <h2 style={{ fontSize: 28, marginTop: 10 }}>{g.title}</h2>
            <p className="muted">{g.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
