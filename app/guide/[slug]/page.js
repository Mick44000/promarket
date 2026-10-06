import Link from "next/link";
import { notFound } from "next/navigation";
import { guides, getGuide } from "@/lib/guides";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }) {
  const guide = getGuide(params.slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    keywords: guide.keywords,
    alternates: { canonical: `/guide/${guide.slug}` },
    openGraph: { title: guide.title, description: guide.description, type: "article" },
  };
}

export default function GuidePage({ params }) {
  const guide = getGuide(params.slug);
  if (!guide) notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    datePublished: guide.date,
    description: guide.description,
    author: { "@type": "Organization", name: "ProMarket" },
    mainEntityOfPage: `https://promarket.fr/guide/${guide.slug}`,
  };
  const related = guides.filter((g) => g.slug !== guide.slug).slice(0, 3);
  return (
    <main className="wrap-s article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="kicker">{guide.category}</p>
      <h1>{guide.title}</h1>
      <p className="meta"><span>{guide.date}</span><span>{guide.reading}</span></p>
      <p className="lede">{guide.lead}</p>
      {guide.sections.map((s) => (
        <section key={s.h}>
          <h2>{s.h}</h2>
          {s.p.map((para) => <p key={para.slice(0, 24)}>{para}</p>)}
        </section>
      ))}
      {guide.faq?.length ? (
        <section>
          <h2>Questions fréquentes</h2>
          {guide.faq.map((f) => (
            <div key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </section>
      ) : null}
      <p className="note">ProMarket est indépendant de HighLevel, LLC. Les prix plateforme cités sont les tarifs publics en dollars, hors usage, relevés en octobre 2026.</p>
      <p><Link className="btn" href="/audit">Faire l’audit de ta stack</Link></p>
      <div className="grid-2" style={{ marginTop: 28 }}>
        {related.map((g) => (
          <Link key={g.slug} href={`/guide/${g.slug}`} className="card" style={{ textDecoration: "none" }}>
            <div className="tag">{g.category}</div>
            <h3 style={{ fontSize: 20 }}>{g.title}</h3>
          </Link>
        ))}
      </div>
    </main>
  );
}
