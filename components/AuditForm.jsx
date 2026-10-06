"use client";

import { useMemo, useState } from "react";
import { site } from "@/lib/site";

const TOOLS = [
  { id: "kajabi", label: "Kajabi", cost: 149 },
  { id: "systeme", label: "Systeme.io", cost: 47 },
  { id: "ac", label: "ActiveCampaign", cost: 79 },
  { id: "calendly", label: "Calendly", cost: 16 },
  { id: "zapier", label: "Zapier / Make", cost: 29 },
  { id: "cf", label: "ClickFunnels", cost: 99 },
];

export function AuditForm() {
  const [tools, setTools] = useState(["kajabi", "ac"]);
  const [list, setList] = useState("2000");
  const [membership, setMembership] = useState("oui");
  const [goal, setGoal] = useState("migration");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const estimate = useMemo(() => {
    const stack = TOOLS.filter((t) => tools.includes(t.id)).reduce((s, t) => s + t.cost, 0);
    const ghl = 97;
    const save = Math.max(stack - ghl, 0);
    const plan = goal === "rebill" ? "Agency Pro (497 $/mois) si tu factures des sous-comptes" : "Starter (97 $/mois) pour un seul business";
    return { stack, ghl, save, plan };
  }, [tools, goal]);

  function toggle(id) {
    setTools((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));
  }

  function submit(e) {
    e.preventDefault();
    const body = [
      `Nom: ${name}`,
      `Email: ${email}`,
      `Outils: ${tools.join(", ")}`,
      `Liste: ${list}`,
      `Espace membres: ${membership}`,
      `Objectif: ${goal}`,
      `Stack estimée: ${estimate.stack} €/mois`,
      `Écart vs Starter: ${estimate.save} €/mois`,
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Audit stack ProMarket")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="form" onSubmit={submit}>
      <div>
        <div className="tag">Outils actuels</div>
        <div className="pills" style={{ marginTop: 10 }}>
          {TOOLS.map((t) => (
            <label key={t.id} className="check" style={{ border: "1px solid var(--line)", borderRadius: 999, padding: "6px 10px", background: tools.includes(t.id) ? "#fff" : "transparent" }}>
              <input type="checkbox" checked={tools.includes(t.id)} onChange={() => toggle(t.id)} />
              {t.label}
            </label>
          ))}
        </div>
      </div>
      <label>
        Taille de liste
        <select value={list} onChange={(e) => setList(e.target.value)}>
          <option value="500">Moins de 500</option>
          <option value="2000">500 à 5 000</option>
          <option value="15000">5 000 à 30 000</option>
          <option value="30000">Plus de 30 000</option>
        </select>
      </label>
      <label>
        Espace membres ou formation active
        <select value={membership} onChange={(e) => setMembership(e.target.value)}>
          <option value="oui">Oui</option>
          <option value="non">Non</option>
        </select>
      </label>
      <label>
        Objectif
        <select value={goal} onChange={(e) => setGoal(e.target.value)}>
          <option value="migration">Migrer sans couper les accès</option>
          <option value="setup">Partir de zéro sur GoHighLevel</option>
          <option value="rebill">Revendre des sous-comptes (SaaS mode)</option>
        </select>
      </label>
      <div className="report">
        <div className="tag">Lecture immédiate</div>
        <p style={{ marginBottom: 6 }}>
          Stack outils cochée : environ <strong>{estimate.stack} €/mois</strong>. GoHighLevel Starter : <strong>97 $/mois</strong>, hors usage SMS/email.
        </p>
        <p style={{ margin: 0 }}>
          Écart d’abonnements : <strong>{estimate.save} €/mois</strong> avant reconstruction. Plan cible : {estimate.plan}.
          {Number(list) > 5000 ? " Liste large : warm-up obligatoire, pas de broadcast le jour 1." : ""}
          {membership === "oui" ? " Espace membres : test élève réel avant bascule DNS." : ""}
        </p>
      </div>
      <label>
        Prénom
        <input required value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email
        <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button className="btn" type="submit">Recevoir le diagnostic</button>
      {sent && <p className="note">Ton client mail s’ouvre avec le récap. Si rien ne part, écris à {site.email}.</p>}
      <p className="note">Estimation d’abonnements, pas un devis. Les prix HighLevel sont en dollars, hors usage. Aucun engagement.</p>
    </form>
  );
}
