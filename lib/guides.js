export const guides = [
  {
    slug: "prix-gohighlevel-france",
    title: "Prix GoHighLevel en France : ce que tu paies vraiment",
    description:
      "Starter, Unlimited, Agency Pro, usage SMS et email : le coût réel de GoHighLevel pour un infopreneur ou une agence en France.",
    category: "Offre",
    date: "2026-10-06",
    reading: "7 min",
    nav: "Prix",
    related: ["saas-mode-gohighlevel-france", "gohighlevel-france", "migration-kajabi-gohighlevel"],
    keywords: ["prix GoHighLevel", "tarif GoHighLevel France", "GoHighLevel SaaS mode"],
    lead: "Le prix affiché n’est pas la facture. En France, le vrai coût se joue entre le plan, l’usage et la façon de facturer tes clients.",
    sections: [
      {
        h: "Les trois plans publics",
        p: [
          "Au 6 octobre 2026, HighLevel affiche trois plans self-serve, en dollars, hors usage. Starter à 97 $/mois (ou 970 $/an) avec 3 sous-comptes. Unlimited à 297 $/mois (ou 2 970 $/an) avec sous-comptes illimités et rebilling téléphone / email sans marge. Agency Pro à 497 $/mois (ou 4 970 $/an) : c’est le plan qui débloque le SaaS mode, la création automatique de sous-comptes et le rebilling avec marge.",
          "L’essai public est de 14 jours. Certains affiliés allongent cette fenêtre. Ce n’est pas un quatrième plan, c’est une condition d’entrée.",
          "Le plan se choisit sur le nombre de sous-comptes et sur le besoin de facturer tes clients, pas sur une liste de fonctionnalités. Starter suffit pour un seul business. Unlimited ouvre des sous-comptes sans te laisser poser une marge sur l’usage. Agency Pro est le seul des trois qui débloque le SaaS mode. Le paiement annuel baisse le prix affiché par mois, et il sort la trésorerie d’un coup, toujours en dollars.",
          "Avant de comparer avec un outil français, garde les dollars en dollars et ajoute l’usage. Un plan qui t’oblige à garder un espace membres d’un côté et un outil d’email de l’autre n’est pas moins cher : tu paies plusieurs abonnements, plus le temps pour les faire se parler. Le détail du montage de facturation est dans le guide [SaaS mode](/guide/saas-mode-gohighlevel-france).",
        ],
      },
      {
        h: "Ce qui n’est pas dans l’abonnement",
        p: [
          "SMS, email marketing au-delà du fair use, appels et Voice AI sont facturés à l’usage. Une séquence de relance SMS sur une liste française peut coûter plus cher que l’abonnement si tu envoies comme tu envoies des emails.",
          "Les add-ons (application marque blanche, WhatsApp, AI Employee) s’ajoutent. Un infopreneur solo sur Starter reste souvent proche de 97 $ plus un peu d’email. Une agence qui rebille 15 clients en SaaS mode est sur Agency Pro, plus l’usage qu’elle refacture.",
          "Le fair use email a un plafond. Au-delà, l’envoi se paie. Une base large, relancée chaque semaine, peut dépasser le prix du plan. On le calcule avant d’écrire les workflows, pas à la première facture d’usage. Les SMS vers les mobiles français sont le poste qui surprend le plus : le coût unitaire rend une relance quotidienne absurde, même quand elle est autorisée.",
          "Chaque add-on se décide seul. Si ton offre promet « tout est inclus », sépare trois lignes : le setup, l’abonnement HighLevel, l’usage. Les mélanger dans un seul chiffre produit des malentendus. ProMarket ne vend pas la licence. Le prix d’installation est un autre document, chiffré après l’inventaire.",
        ],
      },
      {
        h: "Facturer depuis la France",
        p: [
          "HighLevel facture en dollars. Si tu revends l’accès en marque blanche, tes clients français attendent une facture en euros, avec TVA si tu es assujetti. Le SaaS mode sert à ça : le client paie ta société, pas HighLevel. Ce n’est disponible que sur Agency Pro.",
          "ProMarket ne vend pas la licence HighLevel comme si c’était notre logiciel. On installe, on migre, et on peut opérer le compte en marque blanche. Le prix du setup est séparé du prix de la plateforme.",
          "La TVA dépend de ta situation, pas d’un bouton dans l’outil. Si tu es assujetti, c’est ta facture qui la porte. Tu ne recopies pas la facture américaine en dollars sur la facture de ton client. Le SaaS mode permet d’encaisser en euros. Il ne transforme pas HighLevel en société française. Le cadre est repris dans [GoHighLevel en France](/guide/gohighlevel-france).",
          "Deux lectures de budget coexistent déjà chez ProMarket, et il ne faut pas les confondre. Le formulaire de la page [Audit](/audit) est gratuit : il compare l’ordre de grandeur des abonnements. L’audit payant décrit sur l’accueil est un forfait de 1 000 € HT, avec un livrable. Aucun des deux n’inclut la licence. La bascule elle-même, quand le catalogue vient d’ailleurs, est décrite sur la page [Migration](/migration-gohighlevel).",
        ],
      },
    ],
    faq: [
      {
        q: "GoHighLevel est-il moins cher que Kajabi + ActiveCampaign ?",
        a: "Souvent oui sur les abonnements outils, rarement si tu comptes le temps de reconstruction. Le gain vient de la consolidation, pas d’un prix magique.",
      },
      {
        q: "Faut-il le plan à 497 $ pour un seul business ?",
        a: "Non. Starter suffit pour un infopreneur qui n’a pas de clients à rebiller. Agency Pro devient utile dès que tu veux facturer des sous-comptes sous ta marque.",
      },
    ],
  },
  {
    slug: "migration-kajabi-gohighlevel",
    title: "Migrer de Kajabi vers GoHighLevel sans couper les accès",
    description:
      "Produits, élèves, emails et paiements : l’ordre de migration Kajabi vers GoHighLevel pour un infopreneur francophone.",
    category: "Migration",
    date: "2026-10-06",
    reading: "8 min",
    nav: "Migration Kajabi",
    related: ["espace-membres-gohighlevel", "delivrabilite-email-gohighlevel", "migration-systeme-io-gohighlevel"],
    keywords: ["migration Kajabi GoHighLevel", "alternative Kajabi France"],
    lead: "Kajabi est un bon espace membres. Il devient cher et fermé dès que le CRM, les relances et le checkout doivent vivre ailleurs.",
    sections: [
      {
        h: "Ce qui se transfère, ce qui se reconstruit",
        p: [
          "Les contacts, tags et produits s’exportent. Les pages Kajabi, les automations visuelles et les certificats ne se collent pas. Il faut reconstruire les parcours dans GHL, pas espérer un import magique.",
          "Les accès élèves sont le point sensible. On crée l’espace membres GHL, on mappe les offres, on teste un compte élève réel, puis seulement on bascule le domaine. L’ancien espace reste lisible le temps de la bascule.",
          "Commence par une carte : une ligne par offre, avec le prix, le type de paiement, le nombre d’élèves actifs et le domaine qui porte l’espace. Les tags Kajabi sont souvent trop larges pour devenir des étapes de pipeline. On les traduit en champs : offre achetée, date d’accès, statut de paiement. Le guide [espace membres](/guide/espace-membres-gohighlevel) dit ce que le portail GHL sait faire, et ce qu’il ne remplace pas.",
          "Le domaine ne bouge qu’en dernier. Baisse le TTL DNS avant le jour J, prépare la redirection, et garde Kajabi ouvert en lecture. Les élèves qui ont un favori ou un mail ancien doivent encore trouver une porte. Prévenir la liste avant ce test, c’est leur envoyer vers une page qui n’ouvre pas le bon module.",
        ],
      },
      {
        h: "Paiements et abonnements en cours",
        p: [
          "Les abonnements Stripe déjà en cours ne doivent pas être recréés à la main. On identifie ce qui est porté par Kajabi Payments et ce qui est déjà sur Stripe. Recréer un checkout sans couper l’ancien produit des doublons de facturation.",
          "La règle ProMarket : aucun email de bascule aux élèves avant qu’un compte test ait ouvert un module, reçu un drip et pu se reconnecter.",
          "Fais deux colonnes : paiements qui restent chez le prestataire actuel, et paiements que tu recrées. Un abonnement Stripe déjà vivant se relie, il ne se ressaisit pas. Un paiement Kajabi qui n’a pas d’équivalent Stripe se traite à part, avec une date de fin claire, sinon tu factures deux fois la même personne. Le checkout neuf n’est branché qu’une fois cette liste écrite.",
          "Le compte test n’est pas un aperçu admin. C’est un élève fictif qui paie une offre de test, reçoit le mail d’accès, ouvre un module, voit le drip suivant, se déconnecte et se reconnecte. S’il échoue, on ne touche pas au domaine. Cette séquence est la même que dans la [méthode](/methode), que le catalogue vienne de Kajabi ou d’un autre outil.",
        ],
      },
      {
        h: "Ordre des 14 jours",
        p: [
          "Jours 1-2 : inventaire offres, tags, domaines, DNS email. Jours 3-6 : pipelines, champs, espace membres, import contacts. Jours 7-10 : workflows de relance et d’onboarding, SPF/DKIM/DMARC. Jours 11-14 : paiement, pages de vente, redirection, hypercare.",
          "Le calendrier tient si le catalogue fait moins de dix offres. Au-delà, on phase par produit, pas par outil.",
          "L’email se prépare pendant la reconstruction, pas le matin de la bascule. SPF, DKIM et DMARC se posent sur le domaine d’envoi, puis on n’écrit d’abord qu’aux acheteurs récents. Le détail est dans le guide [délivrabilité](/guide/delivrabilite-email-gohighlevel). Importer toute la base Kajabi et annoncer la migration le soir même, c’est le plus sûr moyen de finir en spam.",
          "Quatorze jours, c’est le cas simple : un espace, une liste, un checkout. Dix offres, des cohortes et des abonnements mêlés demandent une phase par produit. L’ancien outil reste la référence jusqu’à ce que le produit suivant soit testé. Le parcours complet, au-delà de Kajabi, est sur la page [Migration vers GoHighLevel](/migration-gohighlevel).",
        ],
      },
    ],
    faq: [
      {
        q: "Mes élèves vont-ils perdre leurs progrès ?",
        a: "La progression fine Kajabi ne se rejoue pas à l’identique. On documente l’offre active et on ouvre les modules déjà achetés. C’est un sujet à trancher avant la signature, pas le jour du DNS.",
      },
    ],
  },
  {
    slug: "migration-systeme-io-gohighlevel",
    title: "Quitter Systeme.io pour GoHighLevel : le plan propre",
    description:
      "Tunnels, emails, formations et tags Systeme.io : comment migrer vers GoHighLevel sans casser la délivrabilité.",
    category: "Migration",
    date: "2026-10-06",
    reading: "7 min",
    nav: "Migration Systeme.io",
    related: ["delivrabilite-email-gohighlevel", "migration-kajabi-gohighlevel", "gohighlevel-vs-activecampaign"],
    keywords: ["Systeme.io GoHighLevel", "alternative Systeme.io"],
    lead: "Systeme.io suffit pour lancer. Il coince quand les pipelines, le SMS et le suivi commercial doivent vivre dans le même outil que les tunnels.",
    sections: [
      {
        h: "Le piège de l’export contacts",
        p: [
          "Exporter la liste et l’importer dans GHL est la partie facile, et la plus dangereuse. Une liste froide réimportée puis relancée depuis un nouveau domaine détruit la délivrabilité. On segmente d’abord : acheteurs 90 jours, engagés, inactifs.",
          "Les tags Systeme.io sont souvent trop larges. On les traduit en champs et en étapes de pipeline, pas en une forêt de tags dupliqués.",
          "Avant l’export, note la source de chaque segment : formulaire, webinaire, achat, import ancien. Un tag « intéressé » ne dit pas si la personne a acheté, ouvert un mail, ou seulement été ajoutée en 2022. On importe d’abord les acheteurs, on les range dans le pipeline, et on laisse les inactifs de côté. Les relancer pour « annoncer la migration » n’apporte rien et abîme le domaine.",
          "La traduction tag vers pipeline se fait sur une feuille, pas dans l’outil. Une étape = un geste commercial réel : nouveau lead, appel prévu, offre envoyée, client, perdu. Si deux tags voulaient dire la même chose, on n’en garde qu’un champ. Cette hygiène évite de reconstruire, dans GoHighLevel, le désordre qu’on quitte. Le même principe vaut pour une [migration Kajabi](/guide/migration-kajabi-gohighlevel).",
        ],
      },
      {
        h: "Tunnels et pages",
        p: [
          "On ne clone pas pixel par pixel. On reprend l’offre, la preuve, le checkout. Les order bumps et upsells se recâblent sur le paiement GHL ou Stripe. Les pixels Meta et le domaine de tracking passent en même temps que la page, pas trois semaines après.",
          "Une page Systeme.io qui convertit a souvent un objet précis : un opt-in, une vente, une prise de rendez-vous. On garde cet objet, on réécrit le titre pour qu’il décrive une seule offre, et on vérifie que le domaine du tunnel ne concurrence pas le domaine du site. Cloner vingt variantes avec le même message produit des URLs que Google ne sait pas départager.",
          "Le paiement se teste avec une vraie carte de test, bumps compris. Un upsell qui pointe encore vers l’ancien checkout coupe la vente au moment où elle devrait continuer. Les pixels se posent le jour de la mise en ligne de la page, avec le domaine de tracking, sinon les premières ventes ne remontent nulle part et tu optimises à l’aveugle.",
        ],
      },
      {
        h: "Formations",
        p: [
          "Les modules se recréent dans l’espace membres. Les drips se règlent sur la date d’achat, pas sur une date fixe, sauf si l’offre est une cohorte. On prévient les élèves le jour où les deux portes fonctionnent, pas quand une seule est prête.",
          "Pour une formation evergreen, la date d’achat ouvre la leçon 1, puis le drip suit. Pour une cohorte, la date est celle du groupe, et elle doit être écrite dans le champ du contact, pas devinée. On ouvre les modules déjà payés. On ne demande pas à un élève de racheter pour « retrouver l’accès ».",
          "Le mail de bascule part quand un compte test a ouvert un module et quand l’ancien espace répond encore. Le lien, l’expéditeur et le domaine d’envoi sont ceux qui ont été authentifiés. Le mode d’emploi est dans le guide [délivrabilité](/guide/delivrabilite-email-gohighlevel). Le calendrier général, s’il y a plusieurs outils, est sur la page [Migration](/migration-gohighlevel).",
        ],
      },
    ],
    faq: [
      {
        q: "Puis-je garder Systeme.io pour les tunnels et GHL pour le CRM ?",
        a: "Oui, quelques semaines. Non comme architecture cible. Deux outils de capture, c’est deux sources de vérité et des leads qui n’arrivent nulle part.",
      },
    ],
  },
  {
    slug: "gohighlevel-vs-activecampaign",
    title: "GoHighLevel ou ActiveCampaign pour un infopreneur",
    description:
      "CRM, automations, délivrabilité et prix : quand rester sur ActiveCampaign, quand tout passer sur GoHighLevel.",
    category: "Comparatif",
    date: "2026-10-06",
    reading: "6 min",
    nav: "ActiveCampaign",
    related: ["delivrabilite-email-gohighlevel", "prix-gohighlevel-france", "migration-systeme-io-gohighlevel"],
    keywords: ["GoHighLevel vs ActiveCampaign", "alternative ActiveCampaign"],
    lead: "ActiveCampaign est un excellent moteur d’email. GoHighLevel est un système d’exploitation. Ce n’est pas le même métier.",
    sections: [
      {
        h: "Là où ActiveCampaign gagne encore",
        p: [
          "La logique de segments, le scoring email et la délivrabilité sur des bases chaudes sont matures. Si ton business est une newsletter et un tunnel simple, changer d’outil ne rapporte rien.",
          "GHL n’est pas magiquement mieux en boîte de réception. SPF, DKIM, DMARC, volume et hygiene de liste décident. L’outil ne rattrape pas une base achetée.",
          "ActiveCampaign sait attendre, scorer, et ne parler qu’à ceux qui ont ouvert ou cliqué. Si c’est tout ton système, le garder est raisonnable. Tu n’as pas de pipeline à reconstruire, pas d’élèves à déplacer, pas de checkout à recâbler. Le coût du changement serait le temps de réécrire des séquences qui fonctionnent déjà.",
          "La boîte de réception ne dépend pas du logo de l’outil. Un domaine froid, une liste importée sans tri, un objet criard : le résultat est le même partout. Lis le guide [délivrabilité](/guide/delivrabilite-email-gohighlevel) avant de croire qu’un transfert va « réparer » les ouvertures. Une base achetée ne devient pas une base saine parce qu’elle change de logiciel.",
        ],
      },
      {
        h: "Là où la bascule se justifie",
        p: [
          "Dès que tu paies ActiveCampaign + Calendly + un page builder + Zapier + un espace membres, la facture et les ruptures entre outils coûtent plus que l’abonnement. GHL réunit pipeline, rendez-vous, pages, paiement et membership.",
          "Le coût caché est la reconstruction des automations. Une séquence de 40 emails se réécrit. On ne migre pas pour économiser 40 €. On migre pour n’avoir plus qu’une source de vérité.",
          "Le symptôme qui justifie la bascule, c’est le lead qui se perd entre deux outils. Le formulaire est sur une page, le mail part d’ailleurs, le rendez-vous est dans un troisième compte, et personne ne voit l’étape commerciale. GoHighLevel a un intérêt ici : le contact, le créneau, la séquence et le paiement vivent au même endroit. Ce n’est pas un argument de prix. Les ordres de grandeur d’abonnement sont dans le guide [prix](/guide/prix-gohighlevel-france).",
          "Compter les zaps avant de signer. Chaque automatisation ActiveCampaign devient un workflow à réécrire, avec ses conditions, ses délais et ses sorties. On migre les scénarios qui servent encore, pas les brouillons de 2021. La page [Migration](/migration-gohighlevel) décrit l’ordre : inventaire, reconstruction, bascule, hypercare. Changer d’outil un vendredi soir, sans cette carte, casse la vente de la semaine.",
        ],
      },
    ],
    faq: [
      {
        q: "La délivrabilité baisse-t-elle après la migration ?",
        a: "Elle baisse si tu changes de domaine d’envoi et que tu relances toute la base le jour 1. Elle tient si tu chauffes le domaine et si tu n’envoies d’abord qu’aux acheteurs et aux ouvreurs.",
      },
    ],
  },
  {
    slug: "saas-mode-gohighlevel-france",
    title: "SaaS mode GoHighLevel : facturer des clients en euros",
    description:
      "Agency Pro, rebilling, marque blanche et facture française : comment le SaaS mode GoHighLevel fonctionne pour une société en France.",
    category: "Agence",
    date: "2026-10-06",
    reading: "8 min",
    nav: "SaaS mode",
    related: ["prix-gohighlevel-france", "gohighlevel-france", "rgpd-gohighlevel-france"],
    keywords: ["SaaS mode GoHighLevel", "marque blanche GoHighLevel France"],
    lead: "Le SaaS mode n’est pas un thème. C’est la possibilité de faire payer tes sous-comptes par ta société, sous ta marque.",
    sections: [
      {
        h: "Ce que le plan débloque",
        p: [
          "Sur Agency Pro, tu peux créer des sous-comptes, appliquer un snapshot, et faire payer l’accès via Stripe sous ta marque. Le client voit ton produit, pas le logo HighLevel, si le white label est configuré.",
          "Unlimited permet des sous-comptes illimités, mais pas le rebilling avec marge ni le SaaS mode. Beaucoup d’agences se trompent de plan à ce moment-là.",
          "Un snapshot est une photo de compte : pipelines, champs, workflows, calendriers. Tu l’appliques à un sous-compte neuf pour ne pas reconstruire à la main. Il ne copie pas les contacts du client précédent, et il ne remplace pas les textes. Chaque client a son offre, ses prix, son domaine. Le snapshot pose la structure. Le contenu se relit.",
          "Le white label se vérifie sur le portail, les mails système et le domaine custom. Tant qu’un écran de connexion montre encore la marque HighLevel, le client n’est pas « sous ta marque ». Les tarifs des plans, et pourquoi Agency Pro n’est pas un luxe cosmétique, sont dans le guide [prix](/guide/prix-gohighlevel-france).",
        ],
      },
      {
        h: "La réalité française",
        p: [
          "Ton client veut une facture en euros, un RIB ou un prélèvement Stripe, des CGV à ton nom. HighLevel, lui, te facture en dollars. Le SaaS mode sépare les deux flux : tu paies la plateforme, tu factures le client.",
          "Ça suppose une société qui peut encaisser. Ce n’est pas un réglage dans l’outil, c’est un sujet de facturation. ProMarket opère ce montage pour des infopreneurs et, sur une offre séparée, pour des instituts.",
          "Concrètement, deux factures circulent. HighLevel facture ta société, en dollars, pour la plateforme et l’usage. Ta société facture le client, en euros, pour l’accès ou la prestation, avec la TVA si tu es assujetti. Le client ne paie pas HighLevel. Toi, tu ne présentes pas la facture américaine comme si c’était la sienne.",
          "Encaisser suppose une structure qui peut émettre cette facture. Ça ne change pas le droit applicable à ton client : c’est ta société, tes CGV, ton support. L’offre [instituts](/instituts) utilise le même principe de marque blanche, avec un périmètre cabine qui n’est pas celui des infopreneurs. Le cadre général est dans [GoHighLevel en France](/guide/gohighlevel-france).",
        ],
      },
      {
        h: "Ce qu’il ne faut pas prometre",
        p: [
          "Tu n’es pas éditeur de GoHighLevel. Les CGV doivent le dire. Une panne HighLevel n’est pas une panne de ton code. Le support plateforme reste chez HighLevel ; ton support, c’est le setup, les snapshots et l’exploitation.",
          "Écris dans les conditions ce que le client achète : un accès configuré, un accompagnement, un sous-compte. Pas une licence dont tu serais l’éditeur. Quand la plateforme est indisponible, tu peux constater, relayer, contourner un envoi. Tu ne corrects pas le code de HighLevel. Le dire avant la vente évite une dispute le jour d’une panne.",
          "Le support que tu vends se limite à ce que tu maîtrises : le snapshot, les workflows, le domaine, les accès, la lecture du pipeline. Une question de facturation HighLevel en dollars remonte à leur support, avec le numéro de compte. Mélanger les deux files fait croire au client que tu es l’éditeur. Les [CGV ProMarket](/cgv) séparent déjà la prestation et la licence. Fais la même séparation dans les tiennes.",
        ],
      },
    ],
    faq: [
      {
        q: "Puis-je rebiller sans Agency Pro ?",
        a: "Tu peux facturer une prestation à côté. Tu ne peux pas activer le SaaS mode et le rebilling avec marge sans Agency Pro.",
      },
    ],
  },
  {
    slug: "rgpd-gohighlevel-france",
    title: "RGPD et GoHighLevel : SMS, email, bases en France",
    description:
      "Consentement, preuve, durée de conservation et expéditeur SMS : le minimum RGPD quand GoHighLevel tourne pour des contacts français.",
    category: "Conformité",
    date: "2026-10-06",
    reading: "7 min",
    nav: "RGPD",
    related: ["delivrabilite-email-gohighlevel", "prix-gohighlevel-france", "gohighlevel-france"],
    keywords: ["RGPD GoHighLevel", "SMS GoHighLevel France"],
    lead: "GoHighLevel héberge. Toi, tu restes responsable de traitement pour tes contacts français. L’outil ne signe pas le consentement à ta place.",
    sections: [
      {
        h: "Base légale avant le workflow",
        p: [
          "Un workflow de relance n’est pas une base légale. Pour la prospection email, il faut un consentement ou une relation commerciale existante, selon le cas. Pour le SMS commercial, la barre est plus haute : opt-in explicite, et un stop qui marche.",
          "On stocke la preuve : source, date, formulaire, texte de la case. Un tag « intéressé » ne suffit pas en cas de contrôle ou de plainte.",
          "Avant d’allumer une séquence, écris en une phrase pourquoi tu as le droit d’écrire à ce segment. Acheteur d’une formation : la relation existe pour les messages liés à son accès. Inscrit à un webinaire via une case cochée : tu as le texte de la case, la date, la page. Liste collée depuis un tableur sans origine : tu n’envoies pas. Le workflow attend cette réponse. Il ne la crée pas.",
          "La preuve se range dans le contact : champ source, date, URL du formulaire, formulation exacte. Une capture du formulaire au moment de la collecte vaut mieux qu’un souvenir. Ce guide décrit la checklist qu’on applique. Ce n’est pas un avis d’avocat. La politique du site ProMarket est sur la page [Confidentialité](/confidentialite).",
        ],
      },
      {
        h: "SMS en France",
        p: [
          "L’expéditeur SMS doit être cohérent avec la marque. Les envois marketing vers des mobiles français se font sur des heures décentes, avec un lien de désinscription. Le coût unitaire rend les relances quotidiennes absurdes, même quand elles sont légales.",
          "WhatsApp n’est pas un canal fourre-tout. Le template, la fenêtre 24 h et l’opt-in sont des règles Meta, en plus du RGPD.",
          "Un STOP qui ne retire pas le contact de la prochaine campagne n’est pas un STOP. On teste le mot, on vérifie que le numéro sort du workflow, et on garde la trace du refus. Les heures d’envoi se règlent sur l’heure de Paris, pas sur le fuseau du compte créé aux États-Unis. Un SMS à 6 h ou à 22 h se voit, et il se plaint.",
          "Le coût rappelle la limite mieux qu’un paragraphe juridique. Le guide [prix](/guide/prix-gohighlevel-france) sépare l’abonnement et l’usage : le SMS n’est pas dans les 97 $. WhatsApp ajoute une couche : template approuvé, opt-in propre, et la fenêtre de 24 heures pour la conversation libre. Un envoi marketing hors template est rejeté par Meta, même si ta base est propre.",
        ],
      },
      {
        h: "Sous-traitance",
        p: [
          "HighLevel est un sous-traitant américain. Il te faut leur DPA, une mention dans ta politique de confidentialité, et une idée claire de ce que tu exportes. Ce guide n’est pas un avis juridique. C’est la checklist qu’on applique avant d’allumer un workflow.",
          "Liste ce qui part dans le compte : nom, email, téléphone, historique d’achat, notes d’appel. Chaque champ inutile est une donnée de trop. Les exports CSV qu’on se « garde sous le coude » sur un drive personnel sont aussi un traitement. On les date, on les limite, on les efface quand la migration est finie.",
          "La politique de confidentialité nomme HighLevel comme sous-traitant, avec le lien vers leur DPA, et dit combien de temps tu gardes un prospect qui n’achète pas. Trois ans après le dernier échange est la durée que ProMarket retient pour les demandes reçues via le site. La tienne peut différer. Écris-la avant le premier import, pas après une plainte. Le contexte français du compte est repris dans [GoHighLevel en France](/guide/gohighlevel-france).",
        ],
      },
    ],
    faq: [
      {
        q: "Puis-je importer une vieille liste Kajabi et la sms-er ?",
        a: "Seulement si tu peux prouver le consentement SMS. Une liste email n’est pas une liste SMS.",
      },
    ],
  },
  {
    slug: "espace-membres-gohighlevel",
    title: "Espace membres GoHighLevel : à la place de Kajabi ou non",
    description:
      "Cours, drip, accès et limites de l’espace membres GoHighLevel pour une formation francophone.",
    category: "Produit",
    date: "2026-10-06",
    reading: "6 min",
    nav: "Espace membres",
    related: ["migration-kajabi-gohighlevel", "prix-gohighlevel-france", "gohighlevel-france"],
    keywords: ["espace membres GoHighLevel", "GoHighLevel vs Kajabi"],
    lead: "L’espace membres GHL suffit pour la plupart des formations d’infopreneurs. Il ne remplace pas une plateforme pédagogique lourde.",
    sections: [
      {
        h: "Ce qu’il fait bien",
        p: [
          "Offres, modules, drip à partir de la date d’achat, accès coupé si le paiement échoue, communauté simple. Pour un programme de 6 à 40 leçons, c’est assez, et c’est dans le même compte que le CRM.",
          "L’intérêt n’est pas le lecteur vidéo. C’est le lien entre achat, tag, onboarding et accès. Plus de Zapier entre le checkout et l’ouverture du module.",
          "Le parcours propre ressemble à ceci. Le paiement réussi pose un tag et une date. Le workflow ouvre l’offre correspondante, envoie le mail d’accès, et crée la tâche d’onboarding si ton accompagnement en a une. Si le prélèvement échoue, l’accès se ferme. Tu n’as plus à vérifier un tableur le lundi matin pour savoir qui a encore le droit d’entrer.",
          "Pour un coach ou un formateur, c’est souvent le morceau qui manquait au CRM : le client n’est pas seulement une opportunité, c’est quelqu’un qui doit ouvrir une leçon. La page [CRM pour coachs](/crm-coachs) décrit cet assemblage. Le portail se sert sur ton domaine, avec ton nom, une fois le branding posé.",
        ],
      },
      {
        h: "Ce qu’il fait mal",
        p: [
          "Quiz avancés, certificats complexes, commentaires façon école, apps mobiles natives de formation : Kajabi ou un LMS dédié restent plus confortables. Si ta promesse produit est la plateforme pédagogique, ne migre pas pour le prix.",
          "Les vidéos lourdes se servent mieux depuis un hébergeur externe intégré que depuis un upload brut sans stratégie de poids.",
          "Pose la question avant de migrer : tes élèves achètent-ils l’accès à une méthode, ou achètent-ils une application de formation ? Dans le premier cas, des modules, un drip et un accès coupé au bon moment suffisent. Dans le second, quitter Kajabi pour économiser un abonnement abîme le produit. Le guide [migration Kajabi](/guide/migration-kajabi-gohighlevel) part de cette distinction.",
          "Côté vidéo, un fichier très lourd téléversé sans réflexion se charge mal sur un téléphone, et il alourdit la page. Un hébergeur externe, intégré dans la leçon, te laisse gérer le poids, les sous-titres et le remplacement d’un cours sans reconstruire l’offre. Le prix de la plateforme, lui, ne change pas selon le poids des vidéos : il est dans le guide [prix](/guide/prix-gohighlevel-france), hors usage email et SMS.",
        ],
      },
    ],
    faq: [
      {
        q: "Mes élèves verront-ils GoHighLevel ?",
        a: "Pas si le domaine custom et le branding du portail sont en place. Ils voient ton espace, sur ton domaine.",
      },
    ],
  },
  {
    slug: "delivrabilite-email-gohighlevel",
    title: "Délivrabilité email sur GoHighLevel : SPF, DKIM, DMARC",
    description:
      "Régler le domaine d’envoi GoHighLevel pour arriver en boîte de réception, pas en spam, après une migration.",
    category: "Email",
    date: "2026-10-06",
    reading: "6 min",
    nav: "Délivrabilité",
    related: ["migration-systeme-io-gohighlevel", "rgpd-gohighlevel-france", "gohighlevel-vs-activecampaign"],
    keywords: ["délivrabilité GoHighLevel", "SPF DKIM GoHighLevel"],
    lead: "Le premier envoi après une migration décide des semaines suivantes. On ne chauffe pas un domaine avec toute la base.",
    sections: [
      {
        h: "Les trois enregistrements",
        p: [
          "SPF autorise les serveurs d’envoi. DKIM signe le message. DMARC dit aux boîtes quoi faire si l’un des deux échoue. Les trois se posent sur le domaine d’envoi, pas sur le domaine du tunnel si ce n’est pas le même.",
          "On vérifie dans GHL que le domaine est authentifié avant le premier broadcast. Un test à soi-même sur Gmail et Outlook fait partie du setup, pas du bonus.",
          "SPF est une liste d’autorisés. Si tu ajoutes GoHighLevel sans garder le service qui envoie déjà (ta boîte, un autre outil), tu peux couper le courrier du quotidien. On édite l’enregistrement, on ne le remplace pas à l’aveugle. DKIM ajoute une signature que la boîte de réception peut vérifier. DMARC dit quoi faire en cas d’échec : d’abord une surveillance, pas un rejet brutal le premier jour.",
          "Le domaine du tunnel et le domaine d’envoi sont souvent deux choses. Authentifier l’un ne règle pas l’autre. Dans le compte, le domaine doit passer au vert avant l’envoi. Ensuite seulement, un message part vers une adresse Gmail et une adresse Outlook que tu ouvres toi-même. Si l’un des deux tombe dans le courrier indésirable, on s’arrête. On ne « compensera » pas avec un plus gros volume. Cette étape est dans toutes les [migrations](/migration-gohighlevel).",
        ],
      },
      {
        h: "Warm-up réel",
        p: [
          "Jour 1 : acheteurs récents, volume faible. Puis ouvreurs. Les inactifs attendent, ou sortent. Importer 20 000 contacts et lancer une promo le soir même est la façon la plus sûre de griller le domaine.",
          "Le contenu compte autant que le DNS. Un objet criard, une image seule, un lien raccourci douteux annulent un SPF parfait.",
          "Le warm-up est une montée, pas une cérémonie. D’abord les gens qui ont acheté récemment : ils ont une raison d’ouvrir, et leur réaction dit aux boîtes que le domaine est légitime. Ensuite les ouvreurs habituels. Les inactifs ne sont pas un réservoir à « réveiller » le jour de la bascule. Les sortir, ou les laisser en sommeil, protège ceux qui lisent encore.",
          "Regarde le message comme le ferait un filtre. Un objet qui promet un gain miracle, une image sans texte, trois liens raccourcis, une pièce jointe inattendue : le DNS n’annule pas ça. Écris comme à un client qui te connaît. Le lien de désinscription est visible. Le nom d’expéditeur est le tien. Si la liste vient d’un autre outil, le tri acheteurs / engagés / inactifs est décrit dans les guides [Systeme.io](/guide/migration-systeme-io-gohighlevel) et [RGPD](/guide/rgpd-gohighlevel-france) : une liste email n’est pas une autorisation d’écrire n’importe quoi, à n’importe qui.",
        ],
      },
    ],
    faq: [
      {
        q: "Faut-il un domaine d’envoi séparé ?",
        a: "Oui si le domaine principal porte déjà le site et que tu envoies beaucoup. Un sous-domaine dédié (news.tondomaine.fr) isole le risque.",
      },
    ],
  },
  {
    slug: "gohighlevel-france",
    title: "GoHighLevel en France : le guide de référence",
    description:
      "GoHighLevel pour les infopreneurs français : prix en dollars, facture en euros, TVA, RGPD, SMS, SaaS mode et ce qu’un setup francophone change vraiment.",
    category: "Référence",
    date: "2026-10-06",
    reading: "9 min",
    nav: "Guide France",
    related: ["prix-gohighlevel-france", "saas-mode-gohighlevel-france", "seo-geo-agent-ia-gohighlevel"],
    keywords: ["GoHighLevel France", "GHL France", "expert GoHighLevel francophone", "GoHighLevel infopreneur"],
    lead: "GoHighLevel est pensé aux États-Unis. En France, le sujet n’est pas le bouton : c’est la facture, la délivrabilité, le droit et la façon dont tes élèves gardent l’accès.",
    sections: [
      {
        h: "Ce que GoHighLevel remplace",
        p: [
          "Pour un coach, un formateur ou une agence, GoHighLevel (GHL) réunit CRM, tunnels, emails, SMS, prise de rendez-vous, espace membres et paiements. L’alternative typique en France est un empilement Kajabi ou Systeme.io, plus ActiveCampaign, Calendly, Zapier et un page builder.",
          "Le gain n’est pas un abonnement moins cher sur le papier. C’est une seule source de vérité : un lead, un pipeline, une séquence, un accès formation, un encaissement.",
        ],
      },
      {
        h: "Ce qui change en France",
        p: [
          "HighLevel facture en dollars, hors taxes américaines. Tes clients, eux, attendent une facture en euros. Si tu es assujetti à la TVA, c’est ta société qui la collecte, pas la plateforme. Le SaaS mode (plan Agency Pro) sert à revendre des sous-comptes sous ta marque, avec ton encaissement.",
          "Les SMS vers les mobiles français se paient à l’usage et coûtent plus cher qu’un email. Une base importée puis relancée depuis un domaine froid finit en spam. Le RGPD s’applique : base légale, mentions, durée de conservation, sous-traitant HighLevel à documenter. Les tutos US n’écrivent pas cette partie.",
        ],
      },
      {
        h: "Pourquoi un opérateur francophone",
        p: [
          "La plateforme se prend chez HighLevel. ProMarket ne revend pas la licence comme si c’était notre logiciel. On audite la stack, on migre sans couper les accès, on pose DNS, délivrabilité, CRM, workflows, espace membres et checkout.",
          "Le guide à côté détaille les prix, les migrations Kajabi et Systeme.io, le comparatif ActiveCampaign, le SaaS mode, le RGPD, l’espace membres et la délivrabilité. C’est la couche opérationnelle, pas un catalogue d’affiliation.",
        ],
      },
    ],
    faq: [
      {
        q: "GoHighLevel existe-t-il en français ?",
        a: "L’interface est surtout en anglais. L’accompagnement, les workflows, les pages et les emails peuvent être entièrement en français. C’est le setup qui est francophone, pas la marque HighLevel.",
      },
      {
        q: "Faut-il être en France pour travailler avec ProMarket ?",
        a: "Non. Le siège est à Nantes, le travail est à distance. On intervient pour les infopreneurs francophones en France, Belgique, Suisse et Canada.",
      },
    ],
  },
  {
    slug: "seo-geo-agent-ia-gohighlevel",
    title: "SEO, GEO et agents IA sur GoHighLevel",
    description:
      "Référencement des tunnels GoHighLevel, visibilité dans les réponses des IA (GEO) et agents qui qualifient, répondent et prennent les rendez-vous.",
    category: "Acquisition",
    date: "2026-10-06",
    reading: "8 min",
    nav: "SEO, GEO, agents IA",
    related: ["gohighlevel-france", "delivrabilite-email-gohighlevel", "prix-gohighlevel-france"],
    keywords: ["SEO GoHighLevel", "GEO GoHighLevel", "agent IA GoHighLevel", "référencement funnel GHL"],
    lead: "Un tunnel qui convertit et une page que personne ne trouve, ce n’est pas un système. Le SEO amène Google. Le GEO amène les réponses des IA. L’agent IA traite la demande sans que tu sois devant l’écran.",
    sections: [
      {
        h: "SEO : des pages que Google peut lire",
        p: [
          "Les pages GoHighLevel sont souvent des one-pages lourdes, sans titre unique, sans balise canonique, sans maillage. Google indexe mal un tunnel cloné vingt fois avec le même H1. Chaque offre a une URL, un title, une meta description et un seul sujet.",
          "On relie le contenu qui explique (guide, articles, pages problèmes) aux pages qui vendent. Le domaine du tunnel et le domaine du site ne doivent pas se cannibaliser. La vitesse compte : une page pleine de scripts de tracking sans contenu ne se positionne pas sur « GoHighLevel France » ni sur ton offre.",
        ],
      },
      {
        h: "GEO : être cité par les IA",
        p: [
          "Le GEO (generative engine optimization) consiste à être repris par ChatGPT, Perplexity, Gemini ou les aperçus IA de Google. Ces moteurs citent les pages qui définissent un sujet clairement, datent les faits, répondent à des questions précises et nomment l’auteur.",
          "Un paragraphe flou du type « nous sommes les meilleurs » n’est pas citable. Un paragraphe qui dit comment se facture GoHighLevel en France, quel plan débloque le SaaS mode, et qui l’écrit, l’est. On structure tes pages avec des définitions, une FAQ et des preuves, pas avec une liste de mots-clés.",
        ],
      },
      {
        h: "Agents IA branchés sur le CRM",
        p: [
          "Un agent IA dans GoHighLevel n’est pas un widget collé sur la page. Il qualifie un lead, pose les questions de ton process, propose un créneau, écrit dans le pipeline et déclenche la bonne séquence. S’il ne met pas à jour le contact, ce n’est pas un agent, c’est un chat.",
          "On le cadre : ce qu’il a le droit de dire, quand il passe la main à un humain, comment il gère un élève déjà client. Voice AI et SMS restent à l’usage, donc le scénario se teste sur un petit volume avant d’ouvrir le robinet.",
        ],
      },
    ],
    faq: [
      {
        q: "Le SEO suffit-il sans GEO ?",
        a: "Non si tes prospects demandent déjà à une IA quel outil ou quel prestataire choisir. Le SEO reste la base. Le GEO reprend les mêmes pages, à condition qu’elles soient précises et sourcées.",
      },
      {
        q: "L’agent IA remplace-t-il le setup GoHighLevel ?",
        a: "Non. Sans pipeline, sans champs et sans offre claire, l’agent invente. On pose d’abord le compte, ensuite l’agent.",
      },
    ],
  },
];

export function getGuide(slug) {
  return guides.find((g) => g.slug === slug);
}
