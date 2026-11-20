import Link from "next/link";
import { OfferCta } from "@/components/OfferCta";
import { RelatedContent } from "@/components/RelatedContent";
import { formatLongDate } from "@/lib/guides";
import { site } from "@/lib/site";

const published = "2026-11-20";
const path = "/realisations/my-goddess-revolution";
const headline = "My Goddess Revolution, formations et annuaire de praticiennes";
const description =
  "Étude de cas Promarket : le site My Goddess Revolution. Formations, annuaire, agenda, inscriptions, GoHighLevel et Claude. Sans promesse de méthode.";

export const metadata = {
  title: "Étude de cas My Goddess Revolution, formations et annuaire",
  description,
  alternates: { canonical: path },
  openGraph: {
    title: "Étude de cas My Goddess Revolution, formations et annuaire",
    description,
    type: "article",
    url: path,
    locale: "fr_FR",
    publishedTime: published,
  },
};

export default function MyGoddessRevolutionCasePage() {
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
        My Goddess Revolution
      </p>
      <p className="kicker">Réalisation</p>
      <h1>{headline}</h1>
      <p className="meta">
        <span>{`Publié le ${formatLongDate(published)}`}</span>
      </p>
      <p className="lede">
        Promarket a outillé le site public de{" "}
        <a href="https://mygoddessrevolution.com/">la communauté My Goddess Revolution</a>. L’adresse publique,
        après redirection, est https://mygoddessrevolution.com/. Le www en https et le http nu y renvoient
        directement. Le http avec www passe par le www en https, puis vers la même adresse. Cette page décrit le
        menu, les formations, la vidéo, la masterclass, l’annuaire, l’agenda et les pages de vente. Elle décrit
        ensuite l’automatisation. Elle ne reprend pas les promesses de méthode, ni les citations, ni les tarifs
        d’accompagnement.
      </p>

      <section>
        <h2>Ce que montre l’accueil</h2>
        <p>
          L’accueil est au nom de Goddess Revolution®. Le titre de l’onglet nomme aussi Marine Cayol. Plus bas, un
          bloc la présente comme CEO. Le menu propose Accueil, Formations, Annuaire, Événements et Qui suis-je. Un
          lien « Vidéo gratuite » est dans le même bandeau. La page relie aussi un profil Facebook, un compte
          Instagram et une chaîne YouTube. Aucun lien WhatsApp n’apparaît sur les pages consultées.
        </p>
        <p>
          Le menu Formations mène vers des pages de vente sur le sous-domaine market.mygoddessrevolution.com. Quatre
          formations sont nommées : Belly Revolution®, Drain Revolution®, Rose Revolution® et la méthode LKE®. Une
          cinquième adresse, sur le même sous-domaine, est une page de vidéo de vente. L’accueil indique qu’une
          praticienne formée rejoint l’annuaire Goddess Revolution. Cette phrase décrit l’accès à l’annuaire. Elle
          n’est pas reprise ici au-delà de ce fait.
        </p>
        <p>
          L’accueil affiche trois compteurs, tels quels : « 3000 + », « 27 Pays » et « 10 ANS D’expertise ». Ce sont
          des mentions de la page. Ce ne sont pas des résultats mesurés par Promarket. Un bandeau est libellé « VU
          DANS ». Les visuels de ce bandeau n’ont pas de légende textuelle : aucun média n’est nommé dans l’article.
        </p>
      </section>

      <section>
        <h2>La vidéo et la masterclass</h2>
        <p>
          Un bloc de l’accueil demande un email pour ouvrir une vidéo. Le libellé lu est « Entre ton email pour
          accéder à la vidéo complète ». À côté : « REGARDER LA VIDEO GRATUITEMENT », puis « Gratuit · Sans engagement ·
          Accès immédiat ». Le formulaire est le point d’entrée visible. La page ne dit pas ce qui est
          fait de l’adresse ensuite.
        </p>
        <p>
          Le même bandeau annonce une masterclass offerte, les 14, 15 et 16 septembre, à 20 h, avec le bouton « Je
          réserve ma place ». Le lien ouvre une page d’inscription sur event.mygoddessrevolution.com. Cette page
          répète « Masterclass offerte », « 3 jours · 14, 15 & 16 septembre 2026 », « Lives de 1 heure », « 100% en ligne · Zoom » et « Offerte ». Les boutons lus sont « Je réserve ma place » et « Inscription ici ».
        </p>
        <p>
          La page d’inscription porte une limite, écrite sur la page : la masterclass ne forme pas à la médecine et
          ne se substitue à aucun soin médical. Le contenu des trois soirées n’est pas repris ici. L’objet de cette
          étude est le tunnel d’inscription, pas le programme.
        </p>
      </section>

      <section>
        <h2>L’annuaire des praticiennes</h2>
        <p>
          L’annuaire est un site à part, https://annuaire.mygoddessrevolution.com/. Le titre de l’onglet est «
          Annuaire des Praticiens Certifiés – My Goddess Revolution ». La description affichée pour le partage dit :
          « Retrouvez tous les praticiens et formateurs certifiés My Goddess Revolution près de chez vous. » Elle
          cite Belly Revolution et Drain Revolution comme noms de formations. Le titre rendu de la page est «
          Annuaire des Praticiens & Formateurs », avec la phrase « Retrouvez tous les praticiens certifiés My
          Goddess Revolution près de chez vous ».
        </p>
        <p>
          Le menu Annuaire de l’accueil pointe vers ce sous-domaine. La page agenda, de son côté, construit des
          liens vers des fiches de la forme /annuaire/ suivi d’un identifiant. Aucun volume de fiches n’est affiché
          en toutes lettres sur les pages lues. Aucun nombre de praticiennes n’est donc ajouté ici, en dehors du
          compteur « 3000 + » déjà cité sur l’accueil.
        </p>
      </section>

      <section>
        <h2>L’agenda et les pages de vente</h2>
        <p>
          La page /evenements a pour titre d’onglet « Agenda Formations Belly & Drain — Goddess Revolution® | Dates
          2026 ». Le H1 est « Agenda Goddess 2026 : Belly, Drain & Masterclass ». Le texte d’introduction dit que la
          page rassemble les dates de formation Belly Revolution®, Drain Revolution® et LKE, en France et à
          l’international. Les dates sont affichées sur la page. Cette étude n’en recopie pas la liste.
        </p>
        <p>
          Le sitemap du domaine principal, https://mygoddessrevolution.com/sitemap.xml, contient quatre adresses :
          l’accueil, /evenements, /about et /mentions-legales. L’annuaire, les pages de vente et la page
          d’inscription de la masterclass sont sur d’autres hôtes. Ils n’y figurent pas.
        </p>
        <p>
          La page de vente Belly Revolution®, sur market.mygoddessrevolution.com/belly-revolution, nomme la formation
          dans le titre de l’onglet. Elle affiche « 400€ TTC », « Non soumis à TVA » et « Paiement jusqu’à 6x ». Elle
          liste aussi « Obtention de l’attestation de fin de formation », « Accès aux groupes privés de la
          communauté », l’accès à une plateforme de formation continue, et l’« annuaire praticien Goddess
          Revolution® ». Le mot communauté est celui de cette page. Les autres formations ont leur page sur le même
          sous-domaine : drain-revolution, rose-revolution et lke.
        </p>
        <p>
          Le menu Qui suis-je ouvre /about. Cette page présente Marine Cayol et indique deux publications aux
          éditions Trédaniel, un livre et un oracle. Le parcours personnel et les citations de la page ne sont pas
          repris. L’entrée Contact du menu pointe vers /contact. Au moment de la lecture, cette adresse répondait
          404.
        </p>
      </section>

      <section>
        <h2>Ce que Promarket a mis en place</h2>
        <p>
          Les pages publiques décrivent les formations, l’annuaire et les inscriptions. Elles ne nomment pas les
          outils. La réponse HTTP de l’accueil porte l’en-tête x-ghl-serve-region. Ce qui suit est le travail de
          Promarket. Ce n’est pas un paragraphe lu sur mygoddessrevolution.com.
        </p>
        <p>
          La stack est GoHighLevel, pour le CRM et l’automatisation, et Claude, connecté à GoHighLevel par MCP.
          Claude sert d’agent sur cet outillage. Le même GoHighLevel est celui que Promarket met à disposition dans
          son <Link href="/services">offre</Link>. Les pages publiques ne documentent ni Claude, ni MCP.
        </p>
        <p>
          Le travail couvre l’automatisation des webinaires, le tunnel de vente, la vente et les contrats, l’annuaire
          des praticiennes, l’enrichissement des emails, la gestion des réunions récurrentes et l’intégration
          WhatsApp. Côté site, les surfaces lues sont le formulaire email de la vidéo, les pages de vente, la page
          d’inscription de la masterclass, l’annuaire et l’agenda. L’enrichissement des emails, les contrats, les
          réunions récurrentes et WhatsApp ne sont pas libellés sur ces écrans. WhatsApp, en particulier, n’a pas de
          lien sur les pages consultées.
        </p>
      </section>

      <section>
        <h2>Demander une étude du même ordre</h2>
        <p>
          Un projet qui réunit un tunnel, un annuaire, un agenda et un CRM se cadre dans l’
          <Link href="/services">offre</Link> Promarket. Cette offre ne publie ni prix ni délai. La demande se décrit
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
