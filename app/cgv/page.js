import { site } from "@/lib/site";

export const metadata = { title: "CGV", robots: { index: false } };

export default function Cgv() {
  return (
    <main className="wrap-s article">
      <h1>Conditions de vente</h1>
      <p>Les prestations de setup, migration et accompagnement sont vendues par {site.editor} ({site.brand}), après devis ou bon de commande écrit. L’audit en ligne est gratuit et sans engagement.</p>
      <p>La licence GoHighLevel, ses usages SMS, email et voix, restent facturés par HighLevel, LLC ou via le dispositif de rebilling convenu. Ce n’est pas un abonnement édité par ProMarket.</p>
      <p>Les délais de 14 jours supposent un catalogue simple et des accès fournis à temps. Les offres instituts (Solo, Équipe) font l’objet d’un bon de commande distinct.</p>
      <p>Droit applicable : droit français. Tribunaux du ressort du siège, sauf disposition d’ordre public.</p>
    </main>
  );
}
