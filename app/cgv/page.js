import { site } from "@/lib/site";

export const metadata = { title: "CGV", robots: { index: false } };

export default function Cgv() {
  return (
    <main className="wrap-s article">
      <h1>Conditions de vente</h1>
      <p>
        Les prestations sont vendues par {site.editor} ({site.brand}), après bon de commande écrit. Elles portent sur
        une offre complète : mise à disposition de l’outil GoHighLevel, implantation, connexion de WhatsApp, transfert
        des données, mise en place de l’agent IA, puis maintenance.
      </p>
      <p>
        La facturation se fait en deux temps : des frais de setup, puis un abonnement mensuel pour la mise à disposition
        des outils et la maintenance. Les montants figurent sur le bon de commande. Ils ne sont pas publiés sur le site.
      </p>
      <p>
        L’outil GoHighLevel est mis à disposition par Promarket. Promarket n’est pas l’éditeur du logiciel (HighLevel,
        LLC).
      </p>
      <p>Droit applicable : droit français. Tribunaux du ressort du siège, sauf disposition d’ordre public.</p>
    </main>
  );
}
