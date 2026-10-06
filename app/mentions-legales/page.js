import { site } from "@/lib/site";

export const metadata = { title: "Mentions légales", robots: { index: false } };

export default function Mentions() {
  return (
    <main className="wrap-s article">
      <h1>Mentions légales</h1>
      <p>Le site {site.url.replace("https://", "")} est édité sous le nom {site.name}.</p>

      <h2>Éditeur du site</h2>
      <p>
        Dénomination de l’éditeur : [À compléter]
        <br />
        Forme juridique : [À compléter]
        <br />
        Capital social : [À compléter]
        <br />
        Siège social : [À compléter]
        <br />
        SIREN : [À compléter]
        <br />
        SIRET : [À compléter]
        <br />
        RCS : [À compléter]
      </p>
      <p>
        Contact : <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>Directeur de la publication</h2>
      <p>{site.founder}.</p>
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
        {site.name} est indépendant de HighLevel, LLC. GoHighLevel et HighLevel sont des marques de leur titulaire.{" "}
        {site.name} n’est pas responsable d’une indisponibilité de la plateforme.
      </p>
      <p>Les textes du guide sont fournis à titre opérationnel. Ils ne constituent pas un conseil juridique ou fiscal.</p>
    </main>
  );
}
