# Plan de pages d’atterrissage — ProMarket

Audit Labrika du 6 octobre 2026 : des groupes de requêtes (Google France, intention B2B, coachs, formateurs, business en ligne, TPE/PME) n’ont pas de page dédiée. Ce document propose les URLs à créer. Il ne les crée pas toutes.

Trois pages sont déjà en ligne dans le dépôt, parce qu’elles portent une intention distincte du guide et qu’elles maillent l’existant :

- `/agence-gohighlevel-nantes` — agence à Nantes et cadre francophone
- `/migration-gohighlevel` — intention « je veux quitter mon outil »
- `/crm-coachs` — intention « CRM pour coach / formateur »

Le guide (`/guide` et les articles) reste la couche d’explication. Une nouvelle page commerciale ne doit pas répéter un article avec les mêmes H1. Mieux vaut renforcer l’article existant que d’ouvrir une URL jumelle.

Prix, noms de clients et statistiques : ne rien inventer. Les seuls montants publiables sont ceux déjà sur le site (diagnostic en ligne gratuit, audit écrit 1 000 € HT, suivi 300 €/mois à partir de 3 h, offres instituts 3 900 € + 247 €/mois et 5 900 € + 397 €/mois, tarifs publics HighLevel en dollars cités dans le guide, relevés en octobre 2026).

## Déjà couvert par une URL existante

| Intention | URL à garder | Ne pas créer |
| --- | --- | --- |
| Référence GoHighLevel France | `/guide/gohighlevel-france` | une deuxième « homepage France » |
| Prix / tarif | `/guide/prix-gohighlevel-france` | une page prix qui recopierait les plans |
| Kajabi → GHL | `/guide/migration-kajabi-gohighlevel` | |
| Systeme.io → GHL | `/guide/migration-systeme-io-gohighlevel` | |
| ActiveCampaign | `/guide/gohighlevel-vs-activecampaign` | |
| SaaS mode, marque blanche | `/guide/saas-mode-gohighlevel-france` | |
| RGPD, SMS | `/guide/rgpd-gohighlevel-france` | |
| Espace membres | `/guide/espace-membres-gohighlevel` | |
| Délivrabilité | `/guide/delivrabilite-email-gohighlevel` | |
| SEO, GEO, agent IA | `/referencement` et `/guide/seo-geo-agent-ia-gohighlevel` | |
| Instituts, centres laser | `/instituts` | |
| Audit de stack | `/audit` | |

## Pages proposées, pas encore construites

À n’ouvrir qu’une par une, avec un texte utile, un title et un H1 uniques, une canonique, une entrée dans `lib/site.js` (`indexableRoutes`) et au moins un lien contextuel depuis une page proche. Pas de génération en série.

### 1. `/gohighlevel-formateurs`

- Title : GoHighLevel pour les formateurs
- H1 : GoHighLevel pour une formation en ligne, sans second outil d’accès
- Meta : Espace membres, drip, paiement et relances dans le même compte. Pour les formateurs francophones qui veulent arrêter d’empiler un LMS et un CRM.
- Requêtes : GoHighLevel formation, outil formation coach, alternative Kajabi formateur
- Pourquoi plus tard : `/crm-coachs` couvre déjà coachs et formateurs. Ouvrir celle-ci seulement si la Search Console montre une intention « formation / LMS » distincte de « CRM ».
- Plan : différence coaching / formation ; ce que l’espace membres fait ; lien vers `/guide/espace-membres-gohighlevel`, `/migration-gohighlevel`, `/crm-coachs`, `/audit`
- Maillage : crm-coachs, guide espace membres, migration Kajabi

### 2. `/gohighlevel-tpe`

- Title : GoHighLevel pour une TPE
- H1 : Un seul compte pour le suivi commercial d’une petite structure
- Meta : Pipeline, rendez-vous et relances GoHighLevel pour une TPE francophone. Sans grille de métiers inventée : on part de votre processus.
- Requêtes : CRM TPE, GoHighLevel PME, logiciel suivi commercial petite entreprise
- Pourquoi plus tard : ne pas prétendre à tous les secteurs. La page doit dire ce qu’on refuse (gros catalogues, besoins hors CRM) autant que ce qu’on pose.
- Plan : gestes communs (prospect, rendez-vous, relance) ; ce qui n’est pas inclus (licence, conseil métier) ; lien instituts si l’activité est une cabine ; audit
- Maillage : `/crm-coachs`, `/services`, `/instituts`, `/audit`

### 3. `/tunnel-de-vente-gohighlevel`

- Title : Tunnel de vente sur GoHighLevel
- H1 : Un tunnel, une offre, une URL
- Meta : Pages d’opt-in, de vente et de paiement sur GoHighLevel, reliées au CRM. Comment éviter les tunnels clonés qui se cannibalisent.
- Requêtes : tunnel de vente GoHighLevel, funnel GHL, page de vente GoHighLevel
- Plan : un objet par page ; checkout Stripe ; order bump seulement s’il existe déjà dans l’offre ; pixels le jour de la mise en ligne ; lien SEO
- Maillage : `/services`, `/referencement`, `/guide/seo-geo-agent-ia-gohighlevel`, `/migration-gohighlevel`

### 4. `/automatisation-gohighlevel`

- Title : Automatisations GoHighLevel
- H1 : Des workflows qui suivent le processus, pas l’inverse
- Meta : Séquences d’accueil, relances et onboarding dans GoHighLevel. Ce qu’on écrit, ce qu’on ne déclenche pas tant que la base et le domaine ne sont pas prêts.
- Requêtes : automatisation GoHighLevel, workflow GHL, scénario email GoHighLevel
- Plan : trois workflows utiles (bienvenue, rendez-vous, échec de paiement) ; lien délivrabilité et RGPD ; pas de promesse de « machine à vendre »
- Maillage : `/services`, `/guide/delivrabilite-email-gohighlevel`, `/guide/rgpd-gohighlevel-france`, `/crm-coachs`

### 5. `/migration-clickfunnels-gohighlevel`

- Title : Migrer de ClickFunnels vers GoHighLevel
- H1 : Quitter ClickFunnels : pages, paiements, puis seulement le domaine
- Meta : Ce qui se reconstruit quand on passe de ClickFunnels à GoHighLevel. Checkout, order bumps et domaine, sans cloner le tunnel tel quel.
- Requêtes : ClickFunnels GoHighLevel, alternative ClickFunnels France
- Pourquoi une page et pas seulement un paragraphe : ClickFunnels est déjà cité sur l’accueil et l’audit, mais aucun article ne porte cette intention. À écrire sur le même modèle que les guides Kajabi et Systeme.io.
- Plan : ce qui ne s’importe pas ; Stripe ; pixels ; lien méthode
- Maillage : `/migration-gohighlevel`, `/methode`, `/guide/migration-systeme-io-gohighlevel`

### 6. `/agent-ia-gohighlevel`

- Title : Agent IA dans GoHighLevel
- H1 : Un agent qui écrit dans le pipeline, ou ce n’est pas un agent
- Meta : Qualification, rendez-vous et passage à un humain, branchés au CRM GoHighLevel. Ce que l’agent a le droit de dire.
- Requêtes : agent IA GoHighLevel, chatbot GHL, Voice AI GoHighLevel
- Pourquoi plus tard : `/referencement` et l’article SEO/GEO/agent couvrent déjà le sujet. Nouvelle URL seulement si l’intention « agent » se sépare clairement du SEO dans la Search Console.
- Plan : cadre (questions autorisées, main à un humain, test sur petit volume) ; usage facturé à part ; lien audit
- Maillage : `/referencement`, `/guide/seo-geo-agent-ia-gohighlevel`, `/services`

### 7. `/marque-blanche-gohighlevel`

- Title : GoHighLevel en marque blanche
- H1 : Marque blanche : le client voit votre offre, pas l’éditeur
- Meta : Snapshot, domaine, facture en euros. Ce que le SaaS mode GoHighLevel permet à une société française, et ce qu’il ne faut pas promettre.
- Requêtes : marque blanche GoHighLevel, SaaS mode France, revendre GoHighLevel
- Pourquoi plus tard : l’article SaaS mode est déjà la référence. Une page commerciale n’a de sens que pour l’intention « je veux revendre des sous-comptes », distincte de la lecture du guide.
- Plan : Agency Pro uniquement ; deux flux de facturation ; CGV ; lien instituts si le client final est un centre
- Maillage : `/guide/saas-mode-gohighlevel-france`, `/guide/prix-gohighlevel-france`, `/instituts`, `/agence-gohighlevel-nantes`

## Hors dépôt (DNS, Vercel, Search Console)

À faire en dehors du code. Le dépôt ne peut pas terminer ces points.

1. **Domaine principal Vercel.** `promarket.fr` doit rester le domaine de production. `www.promarket.fr` doit rediriger vers lui, pas servir une deuxième copie. Aujourd’hui `https://www` et `http://promarket.fr` arrivent déjà en un saut (308). Le dépôt ajoute une 301 de secours si une requête `www` atteint encore l’application (`vercel.json` et `next.config.mjs`).
2. **Le double saut `http://www`.** `http://www.promarket.fr` fait 308 vers `https://www.promarket.fr`, puis 308 vers `https://promarket.fr`. Le premier saut est la mise à niveau HTTPS du même hôte, imposée par Vercel avant le code du projet. Aucun redirect du dépôt ne le voit. Pour un seul saut : redirection web chez OVH du hôte `www` vers `https://promarket.fr`, en retirant le `www` du projet Vercel seulement si le certificat et la redirection HTTPS sont bien portés par OVH. Sinon on garde le comportement actuel, déjà correct pour `https://www`.
3. **Zone DNS OVH.** L’apex et le `www` doivent pointer vers Vercel, sans page parking ni ancien site GoHighLevel qui répondrait encore sur un autre enregistrement. Les URLs `/auditmarketing`, `/contact`, `/gohighlevel`, `/microsoft`, `/module`, `/siteweb`, `/mentions-legales726363` étaient des 404 : le dépôt les envoie en 301 vers la page actuelle la plus proche. Elles ne vivent pas dans un second sitemap à maintenir chez OVH.
4. **Search Console.** Après déploiement, renvoyer `https://promarket.fr/sitemap.xml`. Les anciennes URLs doivent montrer la 301, pas un 404. Ne pas indexer `promarket-ochre.vercel.app` : le middleware pose `noindex` dès que l’hôte n’est pas `promarket.fr`.
5. **Confidentialité et CGV.** Elles restent en `noindex` (pages légales). Elles ne sont pas dans le sitemap. Ne pas les passer en indexable pour « gagner » des URLs.
