import Link from "next/link";
import { GhlForm } from "@/components/GhlForm";

export const metadata = {
  title: "Demander une étude",
  description:
    "Formulaire Promarket pour décrire votre situation ou être rappelé. Pas de prise de rendez-vous sur le site.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="wrap article">
      <p className="crumb">
        <Link href="/">Accueil</Link>
        {" › "}
        Contact
      </p>
      <p className="kicker">Contact</p>
      <h1>Demander une étude</h1>
      <p className="lede">
        Le même formulaire sert à décrire votre situation ou à être rappelé. Il n’y a pas de prise de rendez-vous sur
        ce site. L’offre est décrite sur la page <Link href="/services">Offre</Link>.
      </p>
      <GhlForm />
    </main>
  );
}
