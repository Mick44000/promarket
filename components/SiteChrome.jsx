"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="wrap">
      <nav className={open ? "nav open" : "nav"}>
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <img className="mark" src="/favicon.svg" alt="ProMarket" title="ProMarket" />
          ProMarket
        </Link>
        <button type="button" className="nav-toggle" aria-expanded={open} aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          Menu
        </button>
        <div className="nav-links">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/audit" className="btn" onClick={() => setOpen(false)}>
            Audit de stack
          </Link>
        </div>
      </nav>
    </div>
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
