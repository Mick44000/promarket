import Link from "next/link";

export const metadata = {
  title: "Services migration et setup GoHighLevel",
  description: "Migration Kajabi, Systeme.io, ActiveCampaign, setup espace membres, délivrabilité, SaaS mode, SEO, GEO et agents IA. Accompagnement francophone ProMarket.",
  alternates: { canonical: "/services" },
};

const offers = [
  ["Migration", "Kajabi, Systeme.io ou ActiveCampaign vers un compte GoHighLevel, contacts segmentés, accès élèves testés avant le DNS."],
  ["Setup from scratch", "Domaine, pipelines, tunnels, checkout Stripe, workflows d’onboarding. Pour un lancement qui n’a pas encore d’outil."],
  ["Délivrabilité", "SPF, DKIM, DMARC, sous-domaine d’envoi, plan de warm-up. On ne relance pas les inactifs le jour 1."],
  ["SaaS mode", "Pour ceux qui facturent des sous-comptes. Agency Pro, snapshot, encaissement en euros via ta société. Page instituts à part."],
  ["SEO, GEO et agents IA", "Pages indexables, contenus citables par les IA, agent qui qualifie et écrit dans le CRM GoHighLevel."],
];

export default function ServicesPage() {
  return (
    <main className="wrap article">
      <p className="kicker">Services</p>
      <h1>On installe la machine. Tu gardes l’expertise.</h1>
      <p className="lede">Pas de coaching business. Un partenaire technique GoHighLevel, à distance, en français.</p>
      <div className="grid-2" style={{ marginTop: 24 }}>
        {offers.map(([t, d]) => (
          <article className="card" key={t}>
            <h2 style={{ fontSize: 28 }}>{t}</h2>
            <p className="muted">{d}</p>
          </article>
        ))}
      </div>
      <p style={{ marginTop: 28 }}><Link className="btn" href="/audit">Décrire ta stack</Link></p>
    </main>
  );
}
