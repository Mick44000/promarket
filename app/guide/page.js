import Link from "next/link";
import { guides } from "@/lib/guides";

export const metadata = {
  title: "Guide GoHighLevel France",
  description:
    "La référence GoHighLevel en français : prix, migrations Kajabi et Systeme.io, SaaS mode, RGPD, délivrabilité, SEO, GEO et agents IA.",
  alternates: { canonical: "/guide" },
};

export default function GuideIndex() {
  return (
    <main className="wrap article">
      <p className="kicker">Guide</p>
      <h1>GoHighLevel France, version exploitation.</h1>
      <p className="lede">La référence francophone : prix, migration, facture, RGPD, email, SEO, GEO et agents IA. Chaque article mène à l’audit, pas à un lien d’affiliation.</p>
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
