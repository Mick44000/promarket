import { site } from "@/lib/site";

export const metadata = { title: "Confidentialité", robots: { index: false } };

export default function Privacy() {
  return (
    <main className="wrap-s article">
      <h1>Politique de confidentialité</h1>
      <p>Responsable de traitement : {site.editor}, {site.address}, {site.email}.</p>
      <p>
        Le site affiche un formulaire de contact hébergé par GoHighLevel. Les champs observés sont le prénom, le nom,
        l’e-mail, le téléphone et une case d’acceptation d’être contacté. Ces informations servent à répondre à la
        demande. Base légale : intérêt légitime et mesures précontractuelles. Durée : 3 ans après le dernier échange,
        sauf obligation comptable plus longue.
      </p>
      <p>
        L’envoi part vers le compte GoHighLevel de Promarket. Aucun compte n’est créé sur ce site. Les journaux
        d’hébergement Vercel peuvent contenir l’adresse IP, conservés selon la politique de l’hébergeur.
      </p>
      <p>Tu peux demander accès, rectification ou suppression à {site.email}. Réclamation : CNIL, cnil.fr.</p>
    </main>
  );
}
