import Link from "next/link";
import { notFound } from "next/navigation";
import { RichText } from "@/components/RichText";
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
    "@graph": [
      {
        "@type": "Article",
        headline: guide.title,
        datePublished: guide.date,
        inLanguage: "fr-FR",
        description: guide.description,
        keywords: guide.keywords?.join(", "),
        author: { "@type": "Person", name: "Aymeric Chantrel" },
        publisher: { "@type": "Organization", name: "ProMarket", url: "https://promarket.fr" },
        mainEntityOfPage: `https://promarket.fr/guide/${guide.slug}`,
      },
      ...(guide.faq?.length
        ? [{
            "@type": "FAQPage",
            mainEntity: guide.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }]
        : []),
    ],
  };
  const related = (guide.related || [])
    .map((slug) => getGuide(slug))
    .filter(Boolean);
  return (
    <main className="wrap-s article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="crumb">
        <Link href="/">Accueil</Link>
        {" › "}
        <Link href="/guide">Guide</Link>
        {" › "}
        {guide.nav}
      </p>
      <p className="kicker">{guide.category}</p>
      <h1>{guide.title}</h1>
      <p className="meta"><span>{guide.date}</span><span>{guide.reading}</span></p>
      <p className="lede">{guide.lead}</p>
      {guide.sections.map((s) => (
        <section key={s.h}>
          <h2>{s.h}</h2>
          {s.p.map((para) => (
            <p key={para.slice(0, 40)}>
              <RichText text={para} />
            </p>
          ))}
        </section>
      ))}
      {guide.faq?.length ? (
        <section>
          <p className="kicker">Questions fréquentes</p>
          {guide.faq.map((f) => (
            <details className="qa" key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>
      ) : null}
      <p className="note">ProMarket est indépendant de HighLevel, LLC. Les prix plateforme cités sont les tarifs publics en dollars, hors usage, relevés en octobre 2026. Les textes décrivent une méthode d’installation. Ils ne sont pas un conseil juridique ou fiscal.</p>
      <p>
        La mise en œuvre est sur les pages <Link href="/services">Services</Link>, <Link href="/methode">Méthode</Link> et{" "}
        <Link href="/audit">Audit de stack</Link>. Le cadre francophone est résumé dans{" "}
        <Link href="/agence-gohighlevel-nantes">l’agence à Nantes</Link>.
      </p>
      <p><Link className="btn" href="/audit">Faire l’audit de ta stack</Link></p>
      {related.length ? (
        <nav aria-label="Articles liés">
          <p className="kicker">À lire ensuite</p>
          <div className="grid-2" style={{ marginTop: 12 }}>
            {related.map((g) => (
              <Link key={g.slug} href={`/guide/${g.slug}`} className="card" style={{ textDecoration: "none" }}>
                <div className="tag">{g.category}</div>
                <p className="card-title">{g.nav}</p>
                <p className="muted">{g.description}</p>
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </main>
  );
}
