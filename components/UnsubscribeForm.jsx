"use client";

import { useState } from "react";

const RETRY = "Cette demande n’a pas abouti. Réessaie plus tard.";

export function UnsubscribeForm({ defaultEmail = "", initialError = "" }) {
  const [email, setEmail] = useState(defaultEmail);
  const [confirm, setConfirm] = useState(true);
  const [honeypot, setHoneypot] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(initialError);
  const [done, setDone] = useState("");

  async function submit(event) {
    event.preventDefault();
    if (pending) return;
    setPending(true);
    setError("");
    try {
      const response = await fetch("/api/desinscription", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, confirm, pm_hp: honeypot }),
      });
      const data = await response.json().catch(() => null);
      const message = data && typeof data.message === "string" ? data.message : RETRY;
      if (data?.ok) setDone(message);
      else setError(message);
    } catch {
      setError(RETRY);
    } finally {
      setPending(false);
    }
  }

  if (done) {
    return (
      <div className="report" role="status">
        <p style={{ margin: 0 }}>{done}</p>
      </div>
    );
  }

  return (
    <form className="form" method="post" action="/api/desinscription" onSubmit={submit}>
      <label>
        Email
        <input
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          spellCheck={false}
          required
          maxLength={254}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label className="check">
        <input
          name="confirm"
          type="checkbox"
          value="oui"
          checked={confirm}
          required
          onChange={(event) => setConfirm(event.target.checked)}
        />
        Je ne veux plus recevoir d’emails de Promarket
      </label>
      <div className="hp" aria-hidden="true">
        <label>
          Laisser vide
          <input
            name="pm_hp"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </label>
      </div>
      <button className="btn" type="submit" disabled={pending} aria-busy={pending}>
        {pending ? "Envoi…" : "Confirmer la désinscription"}
      </button>
      {error ? (
        <p className="note" role="alert" style={{ margin: 0 }}>
          {error}
        </p>
      ) : null}
    </form>
  );
}
