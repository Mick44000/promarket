import { AuditForm } from "@/components/AuditForm";

export const metadata = {
  title: "Audit stack gratuit",
  description: "Audit gratuit ProMarket : compare Kajabi, Systeme.io, ActiveCampaign et GoHighLevel, et vois si une migration a du sens.",
};

export default function AuditPage() {
  return (
    <main className="wrap article">
      <p className="kicker">Audit</p>
      <h1>Sept questions. L’écart de stack, tout de suite.</h1>
      <p className="lede">Coche tes outils. Tu vois l’ordre de grandeur avant d’envoyer le diagnostic.</p>
      <div style={{ marginTop: 24, maxWidth: 680 }}>
        <AuditForm />
      </div>
    </main>
  );
}
