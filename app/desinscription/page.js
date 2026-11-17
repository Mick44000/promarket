import { UnsubscribeForm } from "@/components/UnsubscribeForm";
import { site } from "@/lib/site";
import { emailFromQuery, messageForState } from "@/lib/unsubscribe.mjs";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Désinscription",
  description: "Désinscription des emails Promarket.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default async function DesinscriptionPage({ searchParams }) {
  const params = await searchParams;
  const email = emailFromQuery(params?.email);
  const state = messageForState(typeof params?.etat === "string" ? params.etat : "");

  return (
    <main className="wrap-s article">
      <p className="kicker">Emails</p>
      <h1>Désinscription</h1>
      <p className="lede">
        Indique l’adresse à retirer des emails Promarket. La confirmation est la même que l’adresse soit déjà connue ou
        non.
      </p>
      {state?.ok ? (
        <div className="report" role="status">
          <p style={{ margin: 0 }}>{state.message}</p>
        </div>
      ) : (
        <UnsubscribeForm defaultEmail={email} initialError={state && !state.ok ? state.message : ""} />
      )}
      <p className="note">
        Un problème ? Écris à <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </main>
  );
}
