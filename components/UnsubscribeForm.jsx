"use client";

import { useState } from "react";

const RETRY = "Cette demande n’a pas abouti. Réessaie plus tard.";
const MISSING = "Indique un email ou un numéro de téléphone.";
const CHANNEL = "Choisis au moins un canal.";

const OPTIONS = [
  { id: "email", label: "Email" },
  { id: "sms", label: "SMS" },
  { id: "whatsapp", label: "WhatsApp" },
  { id: "appels", label: "Appels téléphoniques" },
];

const ALL = OPTIONS.map((option) => option.id);

export function UnsubscribeForm({ defaultEmail = "", defaultPhone = "", initialError = "" }) {
  const [email, setEmail] = useState(defaultEmail);
  const [phone, setPhone] = useState(defaultPhone);
  const [channels, setChannels] = useState(ALL);
  const [tout, setTout] = useState(true);
  const [honeypot, setHoneypot] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(initialError);
  const [done, setDone] = useState("");

  function toggleTout(checked) {
    setTout(checked);
    setChannels(checked ? ALL : []);
  }

  function toggleChannel(id, checked) {
    const next = checked ? [...channels, id] : channels.filter((item) => item !== id);
    setChannels(next);
    setTout(ALL.every((item) => next.includes(item)));
  }

  async function submit(event) {
    event.preventDefault();
    if (pending) return;
    setError("");
    if (!email.trim() && !phone.trim()) {
      setError(MISSING);
      return;
    }
    if (channels.length === 0) {
      setError(CHANNEL);
      return;
    }
    setPending(true);
    try {
      const response = await fetch("/api/desinscription", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          phone,
          canaux: channels,
          tout,
          canaux_presents: "1",
          pm_hp: honeypot,
        }),
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
      <div className="form-row">
        <label>
          Email
          <input
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            spellCheck={false}
            maxLength={254}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Téléphone
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            spellCheck={false}
            maxLength={32}
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </label>
      </div>
      <p className="note" style={{ margin: 0 }}>
        Email ou téléphone : au moins l’un des deux. Le numéro français (06…, +33…, 0033…) est accepté.
      </p>
      <fieldset className="channels">
        <legend>Canaux à couper</legend>
        <label className="check">
          <input
            name="tout"
            type="checkbox"
            value="oui"
            checked={tout}
            onChange={(event) => toggleTout(event.target.checked)}
          />
          Tout
        </label>
        {OPTIONS.map((option) => (
          <label className="check" key={option.id}>
            <input
              name="canaux"
              type="checkbox"
              value={option.id}
              checked={channels.includes(option.id)}
              onChange={(event) => toggleChannel(option.id, event.target.checked)}
            />
            {option.label}
          </label>
        ))}
      </fieldset>
      <input type="hidden" name="canaux_presents" value="1" />
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
