import { site } from "@/lib/site";

export const metadata = { title: "Confidentialité", robots: { index: false } };

export default function Privacy() {
  return (
    <main className="wrap-s article">
      <h1>Politique de confidentialité</h1>
      <p>Responsable de traitement : {site.name}. Éditeur : [À compléter]. Adresse : [À compléter]. Contact : {site.email}.</p>
      <p>Le site collecte les informations que tu envoies via l’audit (identité, email, description de stack) pour répondre à ta demande. Base légale : intérêt légitime et mesures précontractuelles. Durée : 3 ans après le dernier échange, sauf obligation comptable plus longue.</p>
      <p>L’audit s’ouvre dans ton client mail. Aucun compte n’est créé sur ce site. Les journaux d’hébergement Vercel peuvent contenir l’adresse IP, conservés selon la politique de l’hébergeur.</p>
      <p>Tu peux demander accès, rectification ou suppression à {site.email}. Réclamation : CNIL, cnil.fr.</p>
    </main>
  );
}
