"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="wrap">
      <nav className={open ? "nav open" : "nav"}>
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <img className="mark" src="/favicon.svg" alt="" />
          ProMarket
        </Link>
        <button type="button" className="nav-toggle" aria-expanded={open} aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          Menu
        </button>
        <div className="nav-links">
          <Link href="/guide">GoHighLevel</Link>
          <Link href="/#perimetre">Services</Link>
          <Link href="/#apropos">À propos</Link>
          <Link href="/referencement">SEO & GEO</Link>
          <a href="/#appel" className="btn" onClick={() => setOpen(false)}>
            Réserver un appel
          </a>
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
            Setup, migration et audit GoHighLevel. Indépendant de HighLevel, LLC. © {new Date().getFullYear()} Promarket.
            Promarket est une marque de MCA {site.legalForm} — SIREN {site.siren}.
          </p>
        </div>
        <div style={{ display: "grid", gap: 6 }}>
          <Link href="/guide">Guide</Link>
          <Link href="/referencement">SEO & GEO</Link>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/confidentialite">Confidentialité</Link>
          <Link href="/cgv">CGV</Link>
        </div>
      </div>
    </footer>
  );
}

export function CookieBar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("promarket-cookies")) setOpen(true);
  }, []);
  if (!open) return null;
  const choose = (value) => {
    localStorage.setItem("promarket-cookies", value);
    setOpen(false);
  };
  return (
    <div className="cookie" role="dialog" aria-label="Cookies">
      <p>
        Nous utilisons des cookies pour améliorer votre expérience. En continuant, vous consentez aux cookies. Refuser
        bloque les cookies non essentiels.
      </p>
      <div className="cookie-actions">
        <button type="button" className="btn ghost" onClick={() => choose("no")}>
          Refuser
        </button>
        <button type="button" className="btn" onClick={() => choose("ok")}>
          Confirmer
        </button>
      </div>
    </div>
  );
}
