import { site } from "@/lib/site";

export const metadata = { title: "Mentions légales", robots: { index: false } };

export default function Mentions() {
  return (
    <main className="wrap-s article">
      <h1>Mentions légales</h1>
      <p>Promarket est une marque de MCA {site.legalForm}.</p>

      <h2>Éditeur du site</h2>
      <p>
        Le site {site.url.replace("https://", "")} est édité par <strong>MCA</strong>, société à responsabilité limitée
        ({site.legalForm}) au capital de {site.capital}.
      </p>
      <p>
        Nom commercial : Mon courtier assure, Promarket.
        <br />
        Siège social : {site.address}.
        <br />
        SIREN : 853 091 262 — SIRET du siège : 853 091 262 00032.
        <br />
        RCS {site.rcs}.
        <br />
        Code APE / NAF : {site.naf} (activités des agents et courtiers d’assurances).
        <br />
        Gérant : Aymeric Chantrel.
      </p>
      <p>
        Source :{" "}
        <a href="https://annuaire-entreprises.data.gouv.fr/entreprise/mca-mon-courtier-assure-promarket-mca-853091262">
          Annuaire des entreprises
        </a>
        .
      </p>

      <h2>Directeur de la publication</h2>
      <p>Aymeric Chantrel, gérant de MCA {site.legalForm}.</p>
      <p>
        Contact : <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>Hébergement</h2>
      <p>
        Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis —{" "}
        <a href="https://vercel.com">vercel.com</a>.
      </p>

      <h2>Marques et indépendance</h2>
      <p>
        Promarket est une marque exploitée par MCA {site.legalForm}. Le site est indépendant de HighLevel, LLC.
        GoHighLevel et HighLevel sont des marques de leur titulaire. MCA n’est pas responsable d’une indisponibilité de
        la plateforme.
      </p>
      <p>Les textes du guide sont fournis à titre opérationnel. Ils ne constituent pas un conseil juridique ou fiscal.</p>
    </main>
  );
}
