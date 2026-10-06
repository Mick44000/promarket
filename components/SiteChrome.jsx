import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Header() {
  return (
    <div className="wrap">
      <nav className="nav">
        <Link href="/" className="brand">
          <img className="mark" src="/favicon.svg" alt="" />
          ProMarket
        </Link>
        <div className="nav-links">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/audit" className="btn">
            Audit gratuit
          </Link>
        </div>
      </nav>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="site">
      <div className="wrap foot">
        <div>
          <strong style={{ color: "var(--ink)" }}>{site.name}</strong>
          <p style={{ margin: "6px 0 0", maxWidth: 460 }}>
            Migration et setup GoHighLevel pour infopreneurs francophones. Indépendant de HighLevel, LLC.
            Marque de {site.editor}, {site.legalForm} — SIREN {site.siren}.
          </p>
        </div>
        <div style={{ display: "grid", gap: 6 }}>
          <Link href="/guide">Guide</Link>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/confidentialite">Confidentialité</Link>
          <Link href="/cgv">CGV</Link>
        </div>
      </div>
    </footer>
  );
}
