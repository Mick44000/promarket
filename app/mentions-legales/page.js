import { site } from "@/lib/site";

export const metadata = { title: "Mentions légales", robots: { index: false } };

export default function Mentions() {
  return (
    <main className="wrap-s article">
      <h1>Mentions légales</h1>
      <p>Le site {site.url} est édité par {site.editor}, {site.legalForm} au capital de {site.capital}, SIREN {site.siren}, siège {site.address}. Marque exploitée : {site.brand}. Directeur de la publication : {site.founder}.</p>
      <p>Contact : {site.email}.</p>
      <p>Hébergement du site reconstruit : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
      <p>ProMarket est indépendant de HighLevel, LLC. GoHighLevel et HighLevel sont des marques de leur titulaire. ProMarket utilise la plateforme en marque blanche et applique des templates et snapshots. ProMarket n’est pas responsable d’une indisponibilité de la plateforme HighLevel.</p>
      <p>Les textes du guide sont fournis à titre opérationnel et ne constituent pas un conseil juridique ou fiscal.</p>
    </main>
  );
}
