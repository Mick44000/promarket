import Link from "next/link";
import { OfferCta } from "@/components/OfferCta";
import { RelatedContent } from "@/components/RelatedContent";
import { formatLongDate } from "@/lib/guides";
import { site } from "@/lib/site";

const published = "2026-11-20";
const path = "/realisations/fenua-spot";
const headline = "Fenua Spot, l’annuaire de la Polynésie française";
const description =
  "Fenua Spot, l’annuaire de la Polynésie française développé par Promarket : accueil, fiches, agenda, et la stack GoHighLevel, Grok Bot, Supabase, Vercel et GitHub.";

export const metadata = {
  title: "Étude de cas Fenua Spot, annuaire de Polynésie française",
  description,
  alternates: { canonical: path },
  openGraph: {
    title: "Étude de cas Fenua Spot, annuaire de Polynésie française",
    description,
    type: "article",
    url: path,
    locale: "fr_FR",
    publishedTime: published,
  },
};

export default function FenuaSpotCasePage() {
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
        Fenua Spot
      </p>
      <p className="kicker">Réalisation</p>
      <h1>{headline}</h1>
      <p className="meta">
        <span>{`Publié le ${formatLongDate(published)}`}</span>
      </p>
      <p className="lede">
        Promarket a développé{" "}
        <a href="https://fenuaspot.com">l’annuaire Fenua Spot</a>, le site public de la Polynésie française. Cette page
        décrit ce qui est visible en production : l’accueil, les rubriques, les fiches, l’agenda, les guides, la météo
        et la carte. Elle décrit ensuite la stack du projet. Elle ne contient pas de témoignage.
      </p>

      <section>
        <h2>Ce que montre l’accueil</h2>
        <p>
          L’accueil affiche le titre « L’annuaire de la Polynésie française » et la formule « Trouve ton Fenua ». Le
          texte d’accompagnement parle de pros vérifiés, d’activités et de spots, île par île. La question « Fenua
          Spot, c’est quoi ? » est répondue sur la même page : un annuaire local de Polynésie française, des fiches
          d’établissements classées par archipel, par île et par catégorie, avec des contacts et une carte. La réponse
          précise aussi le périmètre : pas un tour-opérateur, pas un GDS hôtelier.
        </p>
        <p>
          Une version anglaise de l’accueil est en ligne, avec le titre « The directory of French Polynesia » et les
          mêmes rubriques. Le bloc « Que veux-tu faire ? » range l’annuaire par envie : Dormir (hôtels, pensions,
          villas), Activités (plongée, bateau, randonnée guidée, excursions), Spots (plages, points de vue, snorkeling
          libre), Manger (restaurants, snacks, tables locales), Se déplacer (voitures, scooters, bateaux, transferts),
          Se détendre (spas, massages, bien-être), Services (agences, artisans, quotidien) et Sortir (concerts, fêtes,
          expositions, nightlife). Un lien propose de parcourir tout l’annuaire, île par île.
        </p>
      </section>

      <section>
        <h2>Archipels, îles et pages</h2>
        <p>
          Le territoire est présenté sous le titre « Un Fenua, cinq archipels ». L’accueil affiche les mentions « 118
          îles » et « 5 archipels ». Les cinq noms sont les Îles de la Société (lagons, Moorea, Bora Bora), les Tuamotu
          (atolls et passes), les Marquises (îles hautes et vallées), les Australes (baleines et falaises) et les
          Gambier (lagon et perles).
        </p>
        <p>
          Pour les Îles de la Société, la liste des îles principales sur l’accueil comprend Tahiti, Moorea, Tetiaroa,
          Maiao, Huahine, Raiatea, Taha’a, Bora Bora, Maupiti et Tupai. Des pages existent par archipel et par île. La
          page Moorea consultée s’intitule « Que faire à Moorea, l’île sœur de Tahiti ». Elle rassemble des activités,
          des hébergements et un bloc de rendez-vous sur l’île. Plusieurs cartes y portent la mention « Fiche
          vérifiée ».
        </p>
      </section>

      <section>
        <h2>Les fiches et le contact direct</h2>
        <p>
          Trois fiches ouvertes montrent le même gabarit. Aimeo Lodge est un hébergement à Moorea, Aloe Cafe un
          café-restaurant à Vaitape (Bora Bora), Air Tahiti une fiche transport à Faa’a. On y lit le nom, l’archipel,
          l’île, la catégorie, un texte « À propos », un bloc Contact et un bloc Localisation. Aloe Cafe et Air Tahiti
          indiquent la commune. Aimeo Lodge et Aloe Cafe affichent « Vérifié ». La fiche Air Tahiti consultée ne
          l’affichait pas. Les trois portent une date de mise à jour. Sur Aimeo Lodge, le téléphone est derrière
          « Afficher le n° ».
        </p>
        <p>
          L’accueil indique que chaque fiche montre les moyens de contact choisis par le professionnel : téléphone,
          WhatsApp, site, réseaux. Pour un restaurant ou une pension à Moorea, la même page décrit le geste : ouvrir la
          page de l’île, filtrer Restauration ou Hébergement, puis écrire ou appeler le gérant.
        </p>
        <p>
          La page Dormir rassemble pensions, hôtels et locations dans une seule catégorie, Hébergement. Les fiches s’y
          voient ensemble, dix par page, puis se resserrent par archipel et par île. Le texte dit d’écrire au gérant
          depuis la fiche : Fenua Spot ne prend pas la nuit à sa place. Le prix de la nuit n’est affiché que s’il est
          écrit sur la fiche. Sinon, il se demande au téléphone. Une nuit réservée sur une île ne suit pas le visiteur
          sur l’île suivante.
        </p>
        <p>
          Sur la mise à jour, l’accueil répond que chaque établissement en ligne est publié depuis la base du site, que
          les gérants mettent à jour via l’Espace pro, et que les horaires comme les tarifs restent de leur
          responsabilité. Un appel confirme. À la question de passer par Booking ou TripAdvisor, la page répond non :
          l’intérêt affiché est le contact direct, y compris pour les pensions et les artisans absents des plateformes
          mondiales.
        </p>
      </section>

      <section>
        <h2>Agenda, guides, météo et carte</h2>
        <p>
          L’accueil comporte une section « À l’agenda ». L’introduction parle de concerts, de marchés et de courses de
          va’a pour les prochaines semaines. La page des événements s’intitule « Agenda des événements en Polynésie
          française ». Son chapô décrit les concerts, les marchés, les régates et les rendez-vous à Tahiti, Moorea et
          dans les îles, mois par mois. Les entrées consultées donnent le nom, le lieu, l’île et les dates :
          expositions, cérémonies, courses, salons, spectacles.
        </p>
        <p>
          Les guides ont une page intitulée « Guides du fenua ». Elle indique que chaque guide renvoie vers les fiches
          de l’annuaire. L’accueil les présente en deux temps. « Avant de partir » couvre visa et entrée, saison, santé
          et vaccins, argent en francs Pacifique, vols et arrivée à Tahiti. « Sur place » couvre les déplacements entre
          les îles, les urgences, internet et le téléphone, les pharmacies, le respect du lagon et de la culture.
        </p>
        <p>
          La page Météo et mer affiche le vent, la pluie, les nuages et la houle, île par île. La page consultée
          détaille Tahiti et liste des îles de la Société. Elle attribue les données à Open-Meteo, indique l’heure de
          mise à jour en heure de Tahiti, et écrit que ce n’est pas le bulletin officiel. Avant une traversée, une
          passe ou une sortie lagon, la page demande de confirmer avec le skipper de l’île.
        </p>
        <p>
          La page Carte consultée est celle de Moorea. Le texte dit qu’un clic sur un établissement centre Google Maps
          sur le spot, et que le lien Itinéraire ouvre l’application Google Maps.
        </p>
      </section>

      <section>
        <h2>La stack du projet</h2>
        <p>
          Promarket a construit Fenua Spot avec la stack qui suit. Ces outils ne sont pas nommés sur le site public.
        </p>
        <p>
          GoHighLevel sert de CRM et d’outil d’automatisation. C’est l’outil que Promarket met à disposition dans son{" "}
          <Link href="/services">offre</Link> : le compte, les échanges, les automatisations.
        </p>
        <p>
          Grok Bot désigne les agents IA qui gèrent le contenu et les opérations. L’accueil continue d’afficher que le
          gérant met sa fiche à jour dans l’Espace pro, et que les horaires comme les tarifs restent de sa
          responsabilité.
        </p>
        <p>
          Supabase est la base de données. L’accueil dit que les établissements en ligne sont publiés depuis la base du
          site. La base utilisée par Promarket est Supabase. Vercel héberge le site et déploie la production. GitHub
          porte le code.
        </p>
      </section>

      <section>
        <h2>Demander une étude du même ordre</h2>
        <p>
          Un projet qui réunit un CRM, une base, un site public et des agents sur le contenu et les opérations se cadre
          dans l’<Link href="/services">offre</Link> Promarket. Cette offre ne publie ni prix ni délai. La demande se
          décrit dans le <Link href="/contact">formulaire de contact</Link>.
        </p>
        <p>
          <OfferCta />
        </p>
      </section>

      <RelatedContent hrefs={["/services", "/contact", "/methode"]} label="Pages liées" />
    </main>
  );
}
