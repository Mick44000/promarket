import Link from "next/link";
import { OfferCta } from "@/components/OfferCta";
import { offerFaqs, offerSteps } from "@/lib/offer";

export const metadata = {
  title: { absolute: "Offre GoHighLevel complète : outil, WhatsApp et agent IA | ProMarket" },
  description:
    "Promarket fournit GoHighLevel, l’implante, connecte WhatsApp, transfère les données et met en place un agent IA Grok Bot. Setup, puis un abonnement mensuel.",
  alternates: { canonical: "/" },
  keywords: ["GoHighLevel", "WhatsApp GoHighLevel", "agent IA", "Grok Bot", "Promarket"],
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: offerFaqs.map(([q, a]) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          }),
        }}
      />
      <section className="wrap hero">
        <div>
          <p className="crumb">
            <Link href="/">Accueil</Link>
            {" › "}
            Offre
          </p>
          <p className="badge">
            <i />
            Une seule offre
          </p>
          <h1>
            Une offre complète,
            <br />
            de l’outil <span className="accent">à l’agent</span>
          </h1>
          <p className="lede">
            Promarket fournit GoHighLevel, l’implante, connecte WhatsApp, transfère vos données et met en place un
            agent IA Grok Bot relié au compte. Des frais de setup, puis un abonnement mensuel pour la mise à disposition
            des outils et la maintenance.
          </p>
          <div className="hero-actions">
            <OfferCta />
            <OfferCta alt ghost />
          </div>
        </div>
        <aside className="dash" aria-label="Les six composantes de l’offre">
          <div className="dash-top">
            <div>
              <p className="dash-kicker">Parcours</p>
              <strong>De l’outil au suivi</strong>
            </div>
          </div>
          <ol className="activity" style={{ listStyle: "none" }}>
            {offerSteps.map((step) => (
              <li key={step.id}>
                <span>
                  {step.n} {step.title}
                </span>
              </li>
            ))}
          </ol>
        </aside>
      </section>

      <section className="band" id="parcours">
        <div className="wrap">
          <p className="kicker">Parcours</p>
          <h2>Six composantes, bout en bout.</h2>
          <p className="lede">
            Ce n’est pas un menu de prestations à assembler. Le détail de chaque étape est sur la page{" "}
            <Link href="/services">Offre</Link>. La façon de transférer les données est sur la page{" "}
            <Link href="/methode">Méthode</Link>.
          </p>
          <div className="grid-2" style={{ marginTop: 22 }}>
            {offerSteps.map((step) => (
              <article className="card" key={step.id} id={step.id}>
                <p className="step-index">{step.n}</p>
                <h3>{step.title}</h3>
                <p className="muted">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band dark" id="modele">
        <div className="wrap">
          <p className="kicker">Modèle</p>
          <h2>Frais de setup, puis un abonnement mensuel.</h2>
          <p className="lede">
            Le setup couvre la mise en place : l’outil, l’implantation, WhatsApp, le transfert des données et l’agent.
            L’abonnement mensuel couvre ensuite la mise à disposition des outils et la maintenance. Les montants ne sont
            pas publiés ici.
          </p>
          <div className="grid-2" style={{ marginTop: 22 }}>
            <article className="card">
              <p className="scope-label">Au démarrage</p>
              <h3 style={{ marginTop: 8 }}>Frais de setup</h3>
              <p className="muted">
                La mise en place du compte, de la messagerie, du transfert et de l’agent. Le périmètre se précise à
                partir de votre situation.
              </p>
            </article>
            <article className="card">
              <p className="scope-label">Ensuite</p>
              <h3 style={{ marginTop: 8 }}>Abonnement mensuel</h3>
              <p className="muted">
                La mise à disposition des outils et la maintenance, avec le suivi du compte. La désinscription par canal
                est déjà en place.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="band" id="pour-qui">
        <div className="wrap">
          <p className="kicker">Pour qui</p>
          <h2>Coachs, formateurs, business en ligne.</h2>
          <p className="lede">
            L’offre est la même pour un coach, un formateur ou un business en ligne qui veut un seul compte pour le
            CRM, les messages et le suivi. Le siège est à Nantes. Le travail se fait à distance, en français, pour des
            équipes en France, en Belgique, en Suisse et au Canada. Le cadre local est sur la page{" "}
            <Link href="/agence-gohighlevel-nantes">agence</Link>. Le quotidien d’un coach est sur{" "}
            <Link href="/crm-coachs">coachs et formateurs</Link>.
          </p>
        </div>
      </section>

      <section className="band" id="apropos" style={{ paddingTop: 0 }}>
        <div className="wrap about">
          <picture>
            <source
              type="image/webp"
              srcSet="/aymeric-480.webp 480w, /aymeric.webp 800w"
              sizes="(max-width: 860px) min(420px, 92vw), 200px"
            />
            <img
              src="/aymeric.jpg"
              srcSet="/aymeric-480.jpg 480w, /aymeric.jpg 800w"
              sizes="(max-width: 860px) min(420px, 92vw), 200px"
              width={800}
              height={781}
              alt="Aymeric Chantrel, fondateur de ProMarket"
              title="Aymeric Chantrel, fondateur de ProMarket"
              loading="lazy"
              decoding="async"
            />
          </picture>
          <div>
            <p className="kicker">À propos</p>
            <h2>Aymeric Chantrel</h2>
            <p className="lede">
              Partenaire technique. Vous gardez la conduite de votre activité. Promarket pose le compte, la messagerie,
              le transfert et l’agent — à distance, depuis Nantes.
            </p>
          </div>
        </div>
      </section>

      <section className="band" id="faq">
        <div className="wrap wrap-s">
          <p className="kicker">Questions fréquentes</p>
          <h2>Ce que l’offre comprend</h2>
          <div style={{ marginTop: 12 }}>
            {offerFaqs.map(([q, a]) => (
              <details className="qa" key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="band ink" id="contact">
        <div className="wrap" style={{ display: "flex", justifyContent: "space-between", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
          <div>
            <p className="kicker">Suite</p>
            <h2>Décrivez votre situation</h2>
            <p className="muted">
              Le formulaire sert à demander une étude ou à être rappelé. Il n’y a pas de prise de rendez-vous sur ce
              site.
            </p>
          </div>
          <div className="hero-actions" style={{ marginTop: 0 }}>
            <OfferCta />
            <OfferCta alt ghost />
          </div>
        </div>
      </section>
    </main>
  );
}
