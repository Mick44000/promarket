import Link from "next/link";
import { OfferCta } from "@/components/OfferCta";
import { RelatedContent } from "@/components/RelatedContent";
import { formatLongDate } from "@/lib/guides";
import { site } from "@/lib/site";

const published = "2026-11-20";
const path = "/realisations/mon-courtier-assure";
const headline = "Mon Courtier Assure, courtier en assurance à Nantes";
const description =
  "Étude de cas Promarket : le site de Mon Courtier Assure, courtier à Nantes. Pages, blog, présence locale, GoHighLevel et Grok Bot. Sans tarif ni garantie.";

export const metadata = {
  title: "Étude de cas Mon Courtier Assure, courtier à Nantes",
  description,
  alternates: { canonical: path },
  openGraph: {
    title: "Étude de cas Mon Courtier Assure, courtier à Nantes",
    description,
    type: "article",
    url: path,
    locale: "fr_FR",
    publishedTime: published,
  },
};

export default function MonCourtierAssureCasePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished: published,
    dateModified: published,
    inLanguage: "fr-FR",
    author: { "@type": "Organization", name: "Promarket", url: site.url },
    publisher: { "@type": "Organization", name: "Promarket", url: site.url },
    mainEntityOfPage: `${site.url}${path}`,
  };

  return (
    <main className="wrap-s article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <p className="crumb">
        <Link href="/">Accueil</Link>
        {" › "}
        <Link href="/realisations">Réalisations</Link>
        {" › "}
        Mon Courtier Assure
      </p>
      <p className="kicker">Réalisation</p>
      <h1>{headline}</h1>
      <p className="meta">
        <span>{`Publié le ${formatLongDate(published)}`}</span>
      </p>
      <p className="lede">
        Promarket a développé le site public du cabinet,{" "}
        <a href="https://moncourtierassure.fr/">le courtier Mon Courtier Assure</a>. L’adresse publique, après
        redirection du www et du http, est https://moncourtierassure.fr/. Cette page décrit ce qui s’y voit :
        l’accueil, les pages, le blog, la page locale et les liens de contact. Elle décrit ensuite le travail web et
        marketing. Elle ne reprend ni les contrats, ni les garanties, ni les tarifs, ni les organismes.
      </p>

      <section>
        <h2>Ce que montre l’accueil</h2>
        <p>
          Le titre de l’onglet est « Courtier en assurance à Nantes | Mon courtier assure ». Le H1 est « Courtier en
          assurance de proximité à Nantes ». Le premier paragraphe présente un courtier en assurance de proximité à
          Nantes, inscrit à l’ORIAS sous le numéro 19006576. Il indique le siège : 2 Place Jean V, bureau 3. Il indique
          aussi le mode d’échange : sur rendez-vous, par téléphone ou en visio.
        </p>
        <p>
          L’accueil range le site en trois sujets, chacun avec sa page : mutuelle santé, prévoyance, assurance
          emprunteur. Plus bas, un bloc « Quelle est votre situation ? » liste des pages par cadre, une adresse par
          situation. Le même accueil nomme Aymeric Chantrel, CEO et fondateur, et parle d’une équipe restreinte. Un
          bloc « Où se trouve le cabinet ? » répète l’adresse nantaise, le téléphone et le fait que les rendez-vous se
          font en visio ou par téléphone.
        </p>
        <p>
          Le menu et le pied de page proposent le téléphone, WhatsApp, un formulaire de rappel, un plan, et les pages
          Contact et « Le cabinet à Nantes ». Cette étude s’arrête à cette carte du site. Elle ne reprend pas ce que
          les pages de sujet écrivent sur les couvertures.
        </p>
      </section>

      <section>
        <h2>Le blog</h2>
        <p>
          La page Blog s’intitule « Ce que l’on explique avant de comparer ». Elle affiche la phrase « 85 notes de
          cabinet. Dix guides essentiels, puis l’archive. » Les notes sont rangées par thème. Les titres de thème lus
          sur cette page sont la mutuelle santé, la prévoyance, les contrats collectifs, l’assurance emprunteur,
          l’assurance auto, l’assurance habitation, l’assurance professionnelle, et le choix d’un courtier. Dans chaque
          thème, les guides essentiels précèdent l’archive.
        </p>
        <p>
          Un filtre d’années propose 2026, 2025, 2024 et 2023. Chaque carte montre le thème, le mois, une durée de
          lecture et un titre, puis un lien « Lire le guide ». Une note ouverte pour vérifier le gabarit, « Quand une
          IA vous oriente vers un courtier : que vérifier », est signée « Par Aymeric Chantrel, gérant de Mon courtier
          assure », avec une date de publication et une date de mise à jour.
        </p>
        <p>
          La page Blog dit à quoi servent ces textes : une question entendue en rendez-vous, par téléphone ou en visio,
          écrite avant d’ouvrir un devis. Elle dit aussi que ces guides ne remplacent pas un devis, et qu’une note
          éclaire une question sans décrire le dossier de la personne. Le contenu des notes n’est pas recopié ici.
        </p>
      </section>

      <section>
        <h2>La page locale</h2>
        <p>
          La page « Le cabinet à Nantes » a pour H1 « Mon courtier assure à Nantes : le cabinet, sa fiche Google, le
          rendez-vous ». Elle dit qu’il y a un seul siège, au 2 Place Jean V, bureau 3, 44000 Nantes, et pas d’agence
          dans chaque commune. Elle nomme des communes de Loire-Atlantique — Rezé, Saint-Herblain, Orvault, Vertou,
          Carquefou, Saint-Nazaire, et d’autres — pour dire qu’aucune n’a un second siège. Le premier échange se fait
          par téléphone ou en visio, sur rendez-vous, en Loire-Atlantique comme dans le reste de la France. La page
          dit qu’on ne reçoit pas au siège et qu’on ne se déplace pas.
        </p>
        <p>
          La même page explique comment vérifier le cabinet : l’inscription ORIAS 19006576, le nom Mon courtier assure
          SARL, et le nom d’Aymeric Chantrel. Elle renvoie à la fiche Google pour confirmer l’adresse du siège. Elle
          écrit que les avis publics, s’il y en a, sont ceux laissés sur cette fiche, et que le cabinet ne les rédige
          pas sur la page. Le site ouvre Google Maps sur une recherche au nom du cabinet et à l’adresse du siège. Le
          pied de page a un lien « Voir le plan » et un lien « Ouvrir la fiche Google » sur l’accueil.
        </p>
      </section>

      <section>
        <h2>Contact et réseaux</h2>
        <p>
          La page Contact a pour H1 « Demander un rappel ». Elle répète le cadre : sur rendez-vous, rappel par
          téléphone ou visio, pas de rendez-vous au bureau. Le formulaire, l’appel et WhatsApp sont les trois portes
          affichées. L’adresse du siège et le numéro ORIAS y figurent encore. Le pied de page, sur les pages
          consultées, relie WhatsApp, Facebook, Instagram, la page LinkedIn de l’entreprise et le profil LinkedIn
          d’Aymeric Chantrel.
        </p>
        <p>
          Ces adresses sont des liens sortants du site. Cette étude ne décrit pas ce qui est publié sur ces comptes.
          Elle constate qu’ils sont proposés depuis le site public.
        </p>
      </section>

      <section>
        <h2>Ce que Promarket a mis en place</h2>
        <p>
          Le site public décrit le cabinet. Il ne nomme pas les outils du développement ni du marketing. Ce qui suit
          est le travail de Promarket. Ce n’est pas une mention lue sur moncourtierassure.fr.
        </p>
        <p>
          Promarket a développé le site. La construction s’est faite avec Cursor. Le référencement SEO et le GEO
          portent sur la forme visible : une URL par sujet, un titre par page, un blog de notes datées, une page
          locale pour le siège nantais. Le renforcement de la présence locale est cette page Nantes, le lien vers la
          fiche Google et le plan, et le rappel, sur le site, qu’il n’y a qu’un siège.
        </p>
        <p>
          Les articles du blog sont générés avec Grok Bot. La gestion des réseaux sociaux est aussi faite avec Grok
          Bot. La signature lue sur une note reste celle d’Aymeric Chantrel : le site ne dit pas, sur la note, quel
          outil a produit le texte. GoHighLevel sert de CRM et d’outil d’automatisation, le même outil que Promarket
          met à disposition dans son <Link href="/services">offre</Link>. Grok Bot est l’agent IA de ce projet, pour
          le contenu du blog et pour les réseaux. La stack tient en ces deux briques.
        </p>
      </section>

      <section>
        <h2>Demander une étude du même ordre</h2>
        <p>
          Un projet qui réunit un site, un blog, une page locale, un CRM et un agent sur le contenu se cadre dans
          l’<Link href="/services">offre</Link> Promarket. Cette offre ne publie ni prix ni délai. La demande se décrit
          dans le <Link href="/contact">formulaire de contact</Link>.
        </p>
        <p>
          <OfferCta />
        </p>
      </section>

      <RelatedContent hrefs={["/services", "/contact", "/methode"]} label="Pages liées" />
    </main>
  );
}
