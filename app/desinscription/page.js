import { UnsubscribeForm } from "@/components/UnsubscribeForm";
import { site } from "@/lib/site";
import { emailFromQuery, messageForState, phoneFromQuery } from "@/lib/unsubscribe.mjs";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Désinscription",
  description: "Désinscription des messages Promarket : email, SMS, WhatsApp et appels.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default async function DesinscriptionPage({ searchParams }) {
  const params = await searchParams;
  const email = emailFromQuery(params?.email);
  const phone = phoneFromQuery(params?.phone);
  const state = messageForState(typeof params?.etat === "string" ? params.etat : "");

  return (
    <main className="wrap-s article">
      <p className="kicker">Contact</p>
      <h1>Désinscription</h1>
      <p className="lede">
        Choisis les canaux à couper : email, SMS, WhatsApp ou appels. La confirmation est la même que le contact soit
        déjà connu ou non.
      </p>
      {state?.ok ? (
        <div className="report" role="status">
          <p style={{ margin: 0 }}>{state.message}</p>
        </div>
      ) : (
        <UnsubscribeForm
          defaultEmail={email}
          defaultPhone={phone}
          initialError={state && !state.ok ? state.message : ""}
        />
      )}
      <p className="note">
        Un problème ? Écris à <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </main>
  );
}
