import Link from "next/link";

export const metadata = {
  title: "Services migration et setup GoHighLevel",
  description: "Migration Kajabi, Systeme.io, ActiveCampaign, setup espace membres, délivrabilité, SaaS mode, SEO, GEO et agents IA. Accompagnement francophone ProMarket.",
  alternates: { canonical: "/services" },
};

const offers = [
  ["Migration", "Kajabi, Systeme.io ou ActiveCampaign vers un compte GoHighLevel, contacts segmentés, accès élèves testés avant le DNS.", "/migration-gohighlevel", "Voir la migration"],
  ["Setup from scratch", "Domaine, pipelines, tunnels, checkout Stripe, workflows d’onboarding. Pour un lancement qui n’a pas encore d’outil.", "/crm-coachs", "CRM pour coachs"],
  ["Délivrabilité", "SPF, DKIM, DMARC, sous-domaine d’envoi, plan de warm-up. On ne relance pas les inactifs le jour 1.", "/guide/delivrabilite-email-gohighlevel", "Lire le guide email"],
  ["SaaS mode", "Pour ceux qui facturent des sous-comptes. Agency Pro, snapshot, encaissement en euros via ta société. Page instituts à part.", "/guide/saas-mode-gohighlevel-france", "Lire le SaaS mode"],
  ["SEO, GEO et agents IA", "Pages indexables, contenus citables par les IA, agent qui qualifie et écrit dans le CRM GoHighLevel.", "/referencement", "Voir le référencement"],
];

export default function ServicesPage() {
  return (
    <main className="wrap article">
      <p className="kicker">Services</p>
      <h1>On installe la machine. Tu gardes l’expertise.</h1>
      <p className="lede">Pas de coaching business. Un partenaire technique GoHighLevel, à distance, en français.</p>
      <p>
        L’ordre de bascule est sur la page <Link href="/methode">Méthode</Link>. Le siège est à Nantes, le détail local
        est sur <Link href="/agence-gohighlevel-nantes">l’agence</Link>. Les centres laser et instituts ne sont pas dans
        ce parcours : ils ont une <Link href="/instituts">offre séparée</Link>.
      </p>
      <div className="grid-2" style={{ marginTop: 24 }}>
        {offers.map(([t, d, href, label]) => (
          <article className="card" key={t}>
            <h2 style={{ fontSize: 28 }}>{t}</h2>
            <p className="muted">{d}</p>
            <p><Link href={href}>{label}</Link></p>
          </article>
        ))}
      </div>
      <p style={{ marginTop: 28 }}>
        Le sommaire des articles est dans le <Link href="/guide">guide</Link>. Pour situer ta stack avant un échange, passe
        par l’<Link href="/audit">audit gratuit</Link>.
      </p>
      <p style={{ marginTop: 28 }}><Link className="btn" href="/audit">Décrire ta stack</Link></p>
    </main>
  );
}
