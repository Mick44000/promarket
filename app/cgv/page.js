import { site } from "@/lib/site";

export const metadata = { title: "CGV", robots: { index: false } };

export default function Cgv() {
  return (
    <main className="wrap-s article">
      <h1>Conditions de vente</h1>
      <p>Les prestations de setup, migration et accompagnement sont vendues sous le nom {site.name}. L’éditeur (dénomination, forme et siège) est indiqué dans les mentions légales : [À compléter]. L’audit en ligne est gratuit et sans engagement.</p>
      <p>La licence GoHighLevel, ses usages SMS, email et voix, restent facturés par HighLevel, LLC ou via le dispositif de rebilling convenu. Ce n’est pas un abonnement édité par ProMarket.</p>
      <p>Les délais de 14 jours supposent un catalogue simple et des accès fournis à temps. Les offres instituts (Solo, Équipe) font l’objet d’un bon de commande distinct.</p>
      <p>Droit applicable : droit français. Tribunal du ressort du siège de l’éditeur ([À compléter]), sauf disposition d’ordre public.</p>
    </main>
  );
}
