import Link from "next/link";

const personas = [
  ["Débutant sur GHL", "Nouveau sur GHL", "Setup complet", "Vous venez de souscrire à GoHighLevel ou vous y pensez. Vous avez besoin d’un setup propre dès le départ, sans passer des semaines à apprendre."],
  ["Déjà sur GHL, mais sous-utilisé", "Audit & optimisation", "Migration", "Vous payez GHL depuis des mois mais n’utilisez que 20 % de ses fonctionnalités. Il est temps d’en tirer la valeur réelle."],
  ["Migration depuis un autre outil", "Migration", "Zéro perte de data", "Vous venez de Systeme.io, ClickFunnels, Kajabi. Vous voulez migrer sans perdre vos contacts, emails et formations."],
] ;

const scopes = [
  ["DNS & domaines", "Connexion de votre domaine", "Configuration DNS, sous-domaines GHL, certificats SSL, redirections. Votre domaine branché proprement dès le départ.", ["Délégation de sous-domaine", "SSL automatique", "Redirections 301"]],
  ["Email & délivrabilité", "Infrastructure email solide", "SPF, DKIM, DMARC configurés. Warm-up progressif. Vos emails arrivent en boîte de réception.", ["SPF / DKIM / DMARC", "Warm-up du domaine d’envoi", "Tests anti-spam"]],
  ["CRM & pipeline", "Structure commerciale GHL", "Pipelines, étapes, champs personnalisés. Votre CRM reflète votre processus de vente réel.", ["Pipelines personnalisés", "Champs custom", "Tags et segments"]],
  ["Automatisations", "Workflows qui travaillent à votre place", "Séquences email, nurturing, onboarding, relances. Des workflows construits pour convertir.", ["Séquences de bienvenue", "Relances d’abandon", "Onboarding automatisé"]],
  ["Espace membres", "Vos formations en ligne", "Modules, leçons, accès par offre, progression. Vos cours vivent dans le même compte que la vente.", ["Structure de cours", "Accès par produit", "Drip content"]],
  ["Funnels & paiements", "Pages de vente et checkout", "Opt-in, vente, checkout Stripe. Order bumps, upsells, confirmation automatique.", ["Intégration Stripe", "Pages de vente", "Upsells et order bump"]],
] ;

const steps = [
  ["J+2", "Analyse de votre situation actuelle", "Audit de votre stack existante, de vos accès, de votre domaine et de vos emails.", ["Accès GHL", "DNS", "Email"]],
  ["J+5", "Plan de migration détaillé", "Étapes numérotées, dépendances identifiées, risques documentés.", ["Étapes", "Risques", "Dépendances"]],
  ["J+7", "Estimation du temps de travail", "Chaque tâche estimée. Vous avez une fourchette budgétaire avant de vous engager.", ["Estimation", "Budget"]],
  ["J+7", "Macro-planning de mise en production", "Un planning semaine par semaine. Vous savez quand le compte sera opérationnel.", ["Planning", "Jalons", "Livrables"]],
] ;

const faqs = [
  ["Je n’ai pas encore GoHighLevel. Est-ce que vous le fournissez ?", "Non. L’abonnement se prend directement chez HighLevel. ProMarket configure le compte. Nous sommes indépendants de HighLevel, LLC."],
  ["Combien de temps dure une migration depuis Systeme.io ou Kajabi ?", "Ça dépend du volume de contacts, de cours et de paiements. L’audit donne la fourchette. Les mises en production livrées vont de 48 h à trois semaines."],
  ["Que se passe-t-il si j’ai besoin d’aide après le setup ?", "Le suivi mensuel démarre à 300 € par mois, à partir de 3 h. Maintenance, évolutions et support, avec un suivi dans Copilot."],
  ["Travaillez-vous à distance uniquement ?", "Oui. Remote, depuis la France. Les accès se font sur votre sous-compte, rien ne transite par une machine partagée."],
  ["L’audit est-il déduit du setup si on continue ensemble ?", "Non. L’audit est un forfait à part, 1 000 € HT, avec un livrable. Le setup est chiffré ensuite, sur devis, selon le périmètre exact."],
] ;

export default function HomePage() {
  return (
    <main>
      <section className="wrap hero">
        <div>
          <p className="crumb">
            <Link href="/">Accueil</Link>
            {" › "}
            GoHighLevel
          </p>
          <p className="badge">
            <i />
            Expert GoHighLevel certifié
          </p>
          <h1>
            Votre GHL,
            <br />
            configuré
            <br />
            par un <span className="accent">vrai expert</span>
          </h1>
          <p className="lede">
            Installation, migration, automatisations, espace membres — je prends en charge l’intégralité de votre setup
            GoHighLevel pour que vous soyez opérationnel rapidement.
          </p>
          <div className="hero-actions">
            <Link className="btn" href="/audit">
              Démarrer avec un audit →
            </Link>
            <a className="btn ghost" href="#perimetre">
              Voir ce qui est inclus
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <b>48h</b>
              <span>Mise en prod. standard</span>
            </div>
            <div>
              <b>+120</b>
              <span>Projets GHL livrés</span>
            </div>
            <div>
              <b>100%</b>
              <span>Remote · France</span>
            </div>
          </div>
        </div>
        <aside className="dash" aria-label="Aperçu d’un sous-compte GoHighLevel">
          <div className="dash-top">
            <div>
              <p className="dash-kicker">GoHighLevel — sous-compte ProMarket</p>
              <strong>Dashboard client</strong>
            </div>
            <span className="live">
              <i />
              Live
            </span>
          </div>
          <div className="dash-metrics">
            <div>
              <b>347</b>
              <span>Contacts</span>
            </div>
            <div>
              <b>12</b>
              <span>Opportunités</span>
            </div>
            <div>
              <b>94%</b>
              <span>Délivrabilité</span>
            </div>
          </div>
          <p className="pipe-title">Pipeline — Offre principale</p>
          <div className="pipe">
            <div>
              <h3>Prospect</h3>
              <div className="deal">
                <b>Sophie M.</b>
                <span>2 400 €</span>
              </div>
              <div className="deal">
                <b>Jean-Paul R.</b>
                <span>1 800 €</span>
              </div>
            </div>
            <div>
              <h3>Appel</h3>
              <div className="deal">
                <b>Marie C.</b>
                <span>3 200 €</span>
              </div>
            </div>
            <div>
              <h3>Signé</h3>
              <div className="deal">
                <b>Lucas B.</b>
                <span>4 900 €</span>
              </div>
            </div>
          </div>
          <ul className="activity">
            <li>
              Séquence onboarding déclenchée
              <time>2 min</time>
            </li>
            <li>
              Nouveau contact — Lucas B.
              <time>14 min</time>
            </li>
            <li>
              RDV confirmé — Sophie M.
              <time>1 h</time>
            </li>
          </ul>
        </aside>
      </section>

      <section className="band" id="pour-qui" style={{ paddingTop: 10 }}>
        <div className="wrap">
          <p className="kicker">Pour qui</p>
          <h2>Vous êtes au bon endroit si…</h2>
          <p className="lede">
            GoHighLevel est puissant, et dense. Je m’adresse aux créateurs qui ont besoin d’un setup solide, pas d’une
            formation de 40 h.
          </p>
          <div className="grid-3" style={{ marginTop: 22 }}>
            {personas.map(([title, a, b, text]) => (
              <article className="card" key={title}>
                <h3>{title}</h3>
                <p className="muted">{text}</p>
                <div className="chips">
                  <span>{a}</span>
                  <span>{b}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band dark" id="perimetre">
        <div className="wrap">
          <p className="kicker">Périmètre</p>
          <h2>Ce que je configure pour vous</h2>
          <p className="lede">Chaque projet commence par un audit. Voici les blocs couverts — tout ou partie, selon votre situation.</p>
          <div className="grid-3" style={{ marginTop: 22 }}>
            {scopes.map(([label, title, text, ticks]) => (
              <article className="card" key={label}>
                <p className="scope-label">{label}</p>
                <h3 style={{ marginTop: 8 }}>{title}</h3>
                <p className="muted">{text}</p>
                <ul className="ticks">
                  {ticks.map((tick) => (
                    <li key={tick}>{tick}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band" id="methode">
        <div className="wrap">
          <p className="kicker">La méthode</p>
          <h2>On commence toujours par l’audit</h2>
          <p className="lede">
            1 000 € HT. Un livrable concret avant de dépenser un euro de plus. Vous savez ce qui doit être fait, dans quel
            ordre, et pour quel budget.
          </p>
          <div className="grid-2" style={{ marginTop: 22 }}>
            {steps.map(([when, title, text, chips]) => (
              <article className="card" key={title}>
                <p className="when">{when}</p>
                <h3>{title}</h3>
                <p className="muted">{text}</p>
                <div className="chips">
                  {chips.map((chip) => (
                    <span key={chip}>{chip}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="hero-actions">
            <Link className="btn" href="/audit">
              Commander l’audit →
            </Link>
          </div>
        </div>
      </section>

      <section className="band" id="apropos" style={{ paddingTop: 0 }}>
        <div className="wrap about">
          <img src="/aymeric.jpg" alt="Aymeric Chantrel, fondateur de ProMarket" />
          <div>
            <p className="kicker">À propos</p>
            <h2>Aymeric Chantrel</h2>
            <p className="lede">
              Partenaire technique, pas coach business. Vous gardez la méthode. Je pose le CRM, les tunnels, l’espace
              membres, les paiements et les relances — à distance, depuis Nantes.
            </p>
          </div>
        </div>
      </section>

      <section className="band dark" id="tarifs">
        <div className="wrap">
          <p className="kicker">Tarification</p>
          <h2>Un modèle simple et transparent</h2>
          <p className="lede">Vous commencez toujours par l’audit. La suite dépend de ce qu’on trouve.</p>
          <div className="prices" style={{ marginTop: 22 }}>
            <article className="price">
              <p className="flag">Étape 1</p>
              <h3>Audit & préconisation</h3>
              <p className="amount">1 000 €</p>
              <p className="muted">HT. Livrable complet en 7 jours. Forfait fixe.</p>
              <ul className="ticks">
                <li>Analyse de votre stack</li>
                <li>Plan de migration détaillé</li>
                <li>Macro-planning de production</li>
              </ul>
            </article>
            <article className="price featured">
              <p className="flag">Le plus choisi · Étape 2</p>
              <h3>Setup & mise en production</h3>
              <p className="amount">Sur devis</p>
              <p className="muted">Exécution du plan. Forfait fixé après l’audit, selon le périmètre.</p>
              <ul className="ticks">
                <li>Configuration GHL complète</li>
                <li>DNS, email, espace membres</li>
                <li>Livraison en 48 h – 3 semaines</li>
              </ul>
            </article>
            <article className="price">
              <p className="flag">Suivi mensuel</p>
              <h3>Retainer maintenance</h3>
              <p className="amount">300 €</p>
              <p className="muted">Par mois. À partir de 3 h. Maintenance, évolutions, support.</p>
              <ul className="ticks">
                <li>Heures dédiées chaque mois</li>
                <li>Suivi via Copilot</li>
                <li>Réactivité cadrée</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="band" id="faq">
        <div className="wrap wrap-s">
          <p className="kicker">Questions fréquentes</p>
          <h2>Ce qu’on me demande souvent</h2>
          <div style={{ marginTop: 12 }}>
            {faqs.map(([q, a]) => (
              <details className="qa" key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="band ink" id="appel">
        <div className="wrap" style={{ display: "flex", justifyContent: "space-between", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
          <div>
            <p className="kicker">Prêt ?</p>
            <h2>Commençons par comprendre votre situation</h2>
            <p className="muted">
              Un appel de 30 minutes, gratuit, sans engagement. On fait le point sur votre stack, et je vous dis si GHL est
              la bonne option.
            </p>
          </div>
          <div className="hero-actions" style={{ marginTop: 0 }}>
            <a className="btn" href="mailto:contact@promarket.fr?subject=Appel%20ProMarket">
              Réserver un appel gratuit
            </a>
            <Link className="btn ghost" href="/audit">
              Commander l’audit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
