export const guides = [
  {
    slug: "prix-gohighlevel-france",
    title: "GoHighLevel : mise à disposition, sans grille",
    h1: "GoHighLevel avec Promarket : pas de grille publiée",
    description:
      "Promarket met GoHighLevel à disposition. Frais de setup, puis un abonnement mensuel pour les outils et la maintenance. Aucun montant n’est publié ici.",
    category: "Offre",
    date: "2026-10-06",
    updated: "2026-11-19",
    reading: "6 min",
    nav: "Mise à disposition",
    related: ["saas-mode-gohighlevel-france", "gohighlevel-france", "migration-kajabi-gohighlevel"],
    bridges: ["/services", "/migration-gohighlevel", "/contact"],
    keywords: ["gohighlevel", "mise à disposition GoHighLevel", "Promarket GoHighLevel"],
    lead: "Ce guide ne donne pas un tarif. Promarket fournit l’outil GoHighLevel. Le modèle est un setup, puis un abonnement mensuel pour la mise à disposition des outils et la maintenance.",
    sections: [
      {
        h: "Ce que le site ne publie pas",
        p: [
          "Les montants ne figurent pas sur promarket.fr. Ni une grille de setup, ni un suivi à l’heure, ni un barème de la plateforme. Le détail chiffré se traite à partir de la situation, après le formulaire, pas dans un article.",
          "Deux temps suffisent à décrire le modèle. Des frais de setup couvrent la mise en place. Un abonnement mensuel couvre ensuite la mise à disposition des outils et la maintenance.",
        ],
      },
      {
        h: "L’outil est mis à disposition par Promarket",
        p: [
          "GoHighLevel est fourni et mis à disposition par Promarket, dans cet abonnement. Promarket n’est pas l’éditeur du logiciel. Une indisponibilité de la plateforme n’est pas une panne du site. La maintenance porte sur le compte configuré : pipelines, formulaires, calendriers, automatisations, Social Planner, messagerie, transfert et agent.",
          "L’offre complète est décrite sur la page [Offre](/services). La demande passe par le [formulaire](/contact).",
        ],
      },
      {
        h: "Ce qui fait varier le périmètre",
        p: [
          "Le setup n’a pas le même contenu selon ce qu’il y a déjà. Un compte à implanter, un historique à reprendre depuis Kajabi, Systeme.io ou ActiveCampaign, une messagerie WhatsApp à connecter, un agent à brancher : ce sont des morceaux du même parcours, pas des offres séparées.",
          "L’usage des messages, au-delà du socle, dépend du volume réel. On ne le devine pas dans un article, et on ne le convertit pas ici en un chiffre. La bascule, quand le catalogue vient d’ailleurs, est décrite sur la page [Transfert](/migration-gohighlevel).",
        ],
      },
    ],
    faq: [
      {
        q: "Quel est le tarif publié par Promarket ?",
        a: "Il n’y en a pas. Le modèle est des frais de setup, puis un abonnement mensuel pour la mise à disposition des outils et la maintenance.",
      },
      {
        q: "Qui fournit l’outil GoHighLevel ?",
        a: "Promarket. L’outil est mis à disposition dans l’abonnement mensuel. Promarket n’est pas l’éditeur du logiciel.",
      },
      {
        q: "Le formulaire est-il un devis chiffré ?",
        a: "Non. Il sert à décrire la situation, ou à être rappelé. Il n’y a pas de prise de rendez-vous sur le site.",
      },
    ],
  },
  {
    slug: "migration-kajabi-gohighlevel",
    title: "Migration Kajabi vers GoHighLevel",
    h1: "Migration Kajabi vers GoHighLevel, sans couper les accès",
    description:
      "Alternative à Kajabi : contacts, cours, emails et paiements. L’ordre de migration vers GoHighLevel, avec un compte élève de test avant le changement de domaine.",
    category: "Migration",
    date: "2026-10-06",
    updated: "2026-10-20",
    reading: "8 min",
    nav: "Migration Kajabi",
    related: ["espace-membres-gohighlevel", "delivrabilite-email-gohighlevel", "migration-systeme-io-gohighlevel"],
    bridges: ["/migration-gohighlevel", "/crm-coachs", "/methode"],
    keywords: ["migration kajabi gohighlevel", "alternative kajabi", "migration Kajabi GoHighLevel"],
    lead: "La migration Kajabi vers GoHighLevel est une alternative à Kajabi, pas un export magique. Kajabi reste un bon espace membres. Il coince dès que le CRM, les relances et le checkout doivent vivre ailleurs.",
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
          "Un catalogue simple — un espace, une liste, un checkout — se traite ensemble. Dix offres, des cohortes et des abonnements mêlés se phasent par produit. L’ancien outil reste la référence jusqu’à ce que le produit suivant soit testé. Le parcours complet, au-delà de Kajabi, est sur la page [Migration vers GoHighLevel](/migration-gohighlevel).",
        ],
      },
      {
        h: "Ce qui part, ce qui se reconstruit",
        p: [
          "Décider d’une alternative à Kajabi se fait offre par offre, pas au nom de l’outil. Si les élèves achètent une méthode, des modules, un drip et un accès coupé au bon moment suffisent souvent dans GoHighLevel. S’ils achètent une application de formation, avec quiz lourds et certificats, quitter Kajabi pour un abonnement abîme le produit. Le guide [espace membres](/guide/espace-membres-gohighlevel) tient cette frontière. Le quotidien d’un coach qui n’a pas de catalogue de cours est sur [CRM pour coachs](/crm-coachs).",
          "Le tarif de la plateforme n’est pas l’argument, et il n’est pas publié ici. On compare le temps de réécrire les pages et les automations à ce que l’outil actuel t’oblige déjà à maintenir à la main. La demande passe par le [formulaire](/contact). Le modèle, setup puis abonnement mensuel, est dans le guide [mise à disposition](/guide/prix-gohighlevel-france).",
        ],
        table: {
          caption: "Lecture opérationnelle d’une migration Kajabi. Rien ici ne se colle par un bouton unique.",
          head: ["Élément", "Ce qu’on en fait"],
          rows: [
            ["Contacts, tags, produits", "Export, puis traduction en champs et en étapes"],
            ["Pages et automations visuelles", "Reconstruction à partir de l’offre, pas un clone"],
            ["Progression leçon par leçon", "Non rejouée. On ouvre les modules déjà payés"],
            ["Abonnement déjà sur Stripe", "On le relie. On ne le ressaisit pas"],
            ["Paiement porté seulement par Kajabi", "Liste à part, avec une date de fin, pour éviter le double débit"],
            ["Domaine de l’espace", "En dernier. Le TTL est baissé avant le jour J"],
            ["Mail aux élèves", "Après qu’un compte test a ouvert un module et s’est reconnecté"],
            ["Certificats et quiz avancés", "À trancher avant : les garder sur Kajabi, ou accepter de les perdre"],
          ],
        },
        steps: [
          "Écris une ligne par offre : prix, paiement, élèves actifs, domaine, ce qui est déjà sur Stripe.",
          "Traduis les tags larges en champs : offre achetée, date d’accès, statut de paiement.",
          "Recrée l’offre dans l’espace membres et règle le drip sur la date d’achat, ou sur la date de cohorte si c’est un groupe.",
          "Fais payer une offre de test à un élève fictif. Il ouvre un module, voit le drip suivant, se déconnecte, se reconnecte.",
          "Pose SPF, DKIM et DMARC sur le domaine d’envoi, puis écris d’abord aux acheteurs récents. Le mode d’emploi est dans le guide [délivrabilité](/guide/delivrabilite-email-gohighlevel).",
          "Baisse le TTL, bascule le domaine, garde Kajabi ouvert en lecture, et seulement ensuite préviens la liste.",
          "Pendant les jours d’après, traite les accès manquants et les paiements refusés avant d’éteindre l’ancien espace.",
        ],
        bullets: [
          "Importer toute la base et annoncer la migration le soir même. Le domaine d’envoi part en spam, et les inactifs n’avaient rien à apprendre.",
          "Ouvrir le nouveau checkout avant d’avoir listé les abonnements Kajabi encore vivants. La même personne est débitée deux fois.",
          "Couper Kajabi le jour du DNS. Les favoris et les anciens mails n’ont plus de porte.",
          "Promettre que la progression fine sera identique. Elle ne se rejoue pas. On le dit avant la signature.",
          "Choisir un montage de revente pour un seul catalogue. Tant que tu ne rebillis personne, le compte tient sans SaaS mode. Le cadre est dans le guide [mise à disposition](/guide/prix-gohighlevel-france).",
        ],
        checks: [
          "Chaque offre a une ligne : prix, type de paiement, élèves actifs, domaine.",
          "Les abonnements Stripe en cours sont identifiés et ne seront pas recréés à la main.",
          "Un compte élève de test a ouvert un module, reçu le drip et s’est reconnecté.",
          "Le domaine d’envoi est authentifié avant le premier message à la liste.",
          "Les acheteurs récents sont séparés des inactifs.",
          "Kajabi reste lisible le temps que les anciens liens trouvent encore une porte.",
          "Le consentement email, et surtout SMS, est documenté avant toute relance. Une liste Kajabi n’est pas une liste SMS. Voir le guide [RGPD](/guide/rgpd-gohighlevel-france).",
        ],
      },
    ],
    faq: [
      {
        q: "GoHighLevel est-il une alternative à Kajabi ?",
        a: "Pour une formation faite de modules, d’un drip et d’un accès lié au paiement, oui, souvent. Pour une plateforme pédagogique avec quiz avancés et certificats complexes, non. On tranche avant de migrer, pas après le DNS.",
      },
      {
        q: "Mes élèves vont-ils perdre leurs progrès ?",
        a: "La progression fine Kajabi ne se rejoue pas à l’identique. On documente l’offre active et on ouvre les modules déjà achetés. C’est un sujet à trancher avant la signature, pas le jour du DNS.",
      },
      {
        q: "Comment se déroule une migration Kajabi vers GoHighLevel ?",
        a: "Un catalogue simple se traite ensemble. Au-delà d’une dizaine d’offres, on phase par produit. L’ancien outil reste la référence jusqu’au test du produit suivant.",
      },
      {
        q: "Faut-il prévenir les élèves avant le test ?",
        a: "Non. Le mail de bascule part quand un compte test a ouvert un module et quand Kajabi répond encore. Prévenir plus tôt, c’est envoyer vers une porte qui n’ouvre pas le bon cours.",
      },
      {
        q: "Puis-je garder Kajabi pour les cours et GoHighLevel pour le CRM ?",
        a: "Quelques semaines, pour basculer produit par produit. Pas comme architecture finale : deux outils d’accès, ce sont deux sources de vérité, et des élèves qui ne savent plus où entrer.",
      },
    ],
  },
  {
    slug: "migration-systeme-io-gohighlevel",
    title: "Migration Systeme.io vers GoHighLevel",
    h1: "Alternative Systeme.io : migrer vers GoHighLevel sans casser l’envoi",
    description:
      "Migration Systeme.io vers GoHighLevel : tunnels, tags, formations et emails. L’alternative tient si la liste est triée avant le premier envoi.",
    category: "Migration",
    date: "2026-10-06",
    updated: "2026-10-20",
    reading: "8 min",
    nav: "Migration Systeme.io",
    related: ["delivrabilite-email-gohighlevel", "migration-kajabi-gohighlevel", "gohighlevel-vs-activecampaign"],
    bridges: ["/migration-gohighlevel", "/crm-coachs", "/agence-gohighlevel-nantes"],
    keywords: ["migration systeme.io gohighlevel", "alternative systeme.io", "Systeme.io GoHighLevel"],
    lead: "L’alternative Systeme.io que tu cherches, c’est souvent une migration Systeme.io vers GoHighLevel. Systeme.io suffit pour lancer. Il coince quand le pipeline, le SMS et le suivi doivent vivre avec les tunnels.",
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
          "Le mail de bascule part quand un compte test a ouvert un module et quand l’ancien espace répond encore. Le lien, l’expéditeur et le domaine d’envoi sont ceux qui ont été authentifiés. Le mode d’emploi est dans le guide [délivrabilité](/guide/delivrabilite-email-gohighlevel). Le calendrier général, s’il y a plusieurs outils, est sur la page [Migration](/migration-gohighlevel). Le siège de celui qui le fait est à Nantes, le travail reste à distance : [agence](/agence-gohighlevel-nantes).",
        ],
      },
      {
        h: "L’ordre d’une alternative qui tient",
        p: [
          "Systeme.io et GoHighLevel ne se comparent pas sur le logo. Tu quittes un outil de lancement pour un compte qui doit aussi porter le rendez-vous, la relance et l’accès au cours. Si ton activité est un opt-in et une newsletter, changer n’apporte rien. Si le lead se perd entre le tunnel, l’email et l’agenda, la page [CRM pour coachs](/crm-coachs) décrit le quotidien visé. Le modèle de mise à disposition est dans le guide [dédié](/guide/prix-gohighlevel-france). Aucun montant n’y est publié.",
          "Le même principe vaut si une partie du catalogue est encore sur Kajabi : on ne mélange pas les deux bascules le même jour. Le guide [migration Kajabi](/guide/migration-kajabi-gohighlevel) a son propre test élève. Ici, le risque numéro un est la liste.",
        ],
        table: {
          caption: "Ce qu’une migration Systeme.io déplace vraiment.",
          head: ["Morceau", "Geste"],
          rows: [
            ["Acheteurs des 90 derniers jours", "Premier import, premier pipeline, premiers envois"],
            ["Ouvreurs habituels", "Deuxième vague, une fois le domaine chaud"],
            ["Inactifs et imports sans origine", "On ne les relance pas pour annoncer l’outil"],
            ["Tags trop larges", "Un champ ou une étape, pas un tag dupliqué"],
            ["Page qui convertit", "Même objet (opt-in, vente ou rendez-vous), texte réécrit, pas un clone"],
            ["Order bump et upsell", "Recâblés et payés en test avant la mise en ligne"],
            ["Pixels et domaine de tracking", "Le jour de la page, pas trois semaines après"],
            ["Formation evergreen", "Drip à partir de la date d’achat"],
            ["Cohorte", "Date du groupe écrite dans le contact"],
          ],
        },
        steps: [
          "Exporte la liste avec la source de chaque segment : formulaire, webinaire, achat, vieil import.",
          "Raye les contacts dont tu ne peux pas expliquer l’origine. Le guide [RGPD](/guide/rgpd-gohighlevel-france) dit pourquoi un tag « intéressé » ne suffit pas.",
          "Traduis les tags en étapes réelles : nouveau lead, appel prévu, offre envoyée, client, perdu.",
          "Reconstruis une page, un objet, une URL. Vérifie que le domaine du tunnel ne concurrence pas le domaine du site.",
          "Paie l’offre de test, bumps compris, avec une carte de test. L’upsell ne doit plus pointer vers l’ancien checkout.",
          "Authentifie le domaine d’envoi, envoie aux acheteurs récents, puis seulement aux engagés.",
          "Ouvre les modules déjà payés, préviens quand les deux portes fonctionnent, garde Systeme.io lisible le temps de la bascule.",
        ],
        bullets: [
          "Relancer toute la base le jour de l’import, depuis un domaine neuf, pour « dire bonjour ».",
          "Garder vingt variantes de la même page. Google ne sait pas laquelle montrer, et toi non plus.",
          "Laisser un upsell sur l’ancien paiement. La vente s’arrête au moment où elle devrait continuer.",
          "Demander à un élève de racheter pour retrouver un module déjà payé.",
          "Rester six mois avec Systeme.io et GoHighLevel qui captent tous les deux les mêmes formulaires.",
        ],
        checks: [
          "Chaque segment a une source écrite, pas seulement un tag.",
          "Les inactifs ne sont pas dans le premier envoi.",
          "Une page = un objet. Le titre décrit une seule offre.",
          "Le paiement de test, bumps compris, aboutit au bon accès.",
          "Les pixels sont posés le jour où la page est en ligne.",
          "SPF, DKIM et DMARC sont verts avant le broadcast.",
          "L’ancien espace répond encore le jour du mail de bascule.",
        ],
      },
    ],
    faq: [
      {
        q: "GoHighLevel est-il une alternative à Systeme.io ?",
        a: "Oui quand tu as besoin d’un pipeline, de rendez-vous et d’un suivi dans le même compte que les tunnels. Non si Systeme.io ne porte qu’une newsletter et un opt-in qui convertissent déjà.",
      },
      {
        q: "Puis-je garder Systeme.io pour les tunnels et GoHighLevel pour le CRM ?",
        a: "Oui, quelques semaines. Non comme architecture cible. Deux outils de capture, c’est deux sources de vérité et des leads qui n’arrivent nulle part.",
      },
      {
        q: "Par quoi commence la migration Systeme.io ?",
        a: "Par le tri de la liste, pas par l’import. Acheteurs récents, engagés, inactifs. Relancer les inactifs pour annoncer le nouvel outil abîme le domaine.",
      },
      {
        q: "Faut-il cloner les tunnels ?",
        a: "Non. On reprend l’offre, la preuve et le checkout. Une page qui convertit a un objet. Vingt copies du même message se cannibalisent.",
      },
      {
        q: "Les élèves perdent-ils la formation ?",
        a: "On ouvre les modules déjà payés et on teste un compte avant le mail. Le drip evergreen part de la date d’achat. Une cohorte part de la date du groupe, écrite dans le contact.",
      },
    ],
  },
  {
    slug: "gohighlevel-vs-activecampaign",
    title: "GoHighLevel vs ActiveCampaign",
    h1: "GoHighLevel vs ActiveCampaign : email, ou système complet",
    description:
      "GoHighLevel vs ActiveCampaign : segments et délivrabilité d’un côté, pipeline, rendez-vous, pages et espace membres de l’autre. Quand rester, quand basculer.",
    category: "Comparatif",
    date: "2026-10-06",
    updated: "2026-10-20",
    reading: "7 min",
    nav: "ActiveCampaign",
    related: ["delivrabilite-email-gohighlevel", "prix-gohighlevel-france", "migration-systeme-io-gohighlevel"],
    bridges: ["/migration-gohighlevel", "/crm-coachs", "/services"],
    keywords: ["gohighlevel vs activecampaign", "GoHighLevel vs ActiveCampaign", "alternative ActiveCampaign"],
    lead: "GoHighLevel vs ActiveCampaign n’est pas un duel de logos. ActiveCampaign est un moteur d’email. GoHighLevel est un système. Tu restes si l’email suffit. Tu bascules si le lead se perd entre les outils.",
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
          "Le coût caché est la reconstruction des automations. Une séquence de 40 e-mails se réécrit. On ne migre pas pour gratter un abonnement. On migre pour n’avoir plus qu’une source de vérité.",
          "Le symptôme qui justifie la bascule, c’est le lead qui se perd entre deux outils. Le formulaire est sur une page, le mail part d’ailleurs, le rendez-vous est dans un troisième compte, et personne ne voit l’étape commerciale. GoHighLevel a un intérêt ici : le contact, le créneau, la séquence et le paiement vivent au même endroit. Ce n’est pas un argument de tarif. Le modèle de mise à disposition, sans montant, est dans le guide [dédié](/guide/prix-gohighlevel-france).",
          "Compter les zaps avant de signer. Chaque automatisation ActiveCampaign devient un workflow à réécrire, avec ses conditions, ses délais et ses sorties. On migre les scénarios qui servent encore, pas les brouillons de 2021. La page [Migration](/migration-gohighlevel) décrit l’ordre : inventaire, reconstruction, bascule, hypercare. Changer d’outil un vendredi soir, sans cette carte, casse la vente de la semaine. Quand le sujet n’est pas l’email mais le rendez-vous, la relance et l’accès au cours, c’est la page [CRM pour coachs](/crm-coachs).",
        ],
      },
      {
        h: "Comparer sur le travail, pas sur la brochure",
        p: [
          "Le tableau sert à décider, pas à déclarer un vainqueur. ActiveCampaign gagne tant que le métier est d’écrire au bon segment. GoHighLevel devient utile quand le même contact doit aussi prendre un rendez-vous, payer, et ouvrir un module. Promarket ne publie pas de montant pour GoHighLevel. On ne publie pas non plus un tarif ActiveCampaign : il dépend de ta liste et de ton plan, et il se lit sur ta facture, pas dans un comparatif figé.",
          "Deux choses que le duel ne tranche pas. D’abord la langue : aucun des deux n’est un logiciel français. Tes pages et tes mails peuvent l’être. Ensuite la facture de tes clients : elle se rédige dans ta société, en euros, que l’email parte d’ActiveCampaign ou de GoHighLevel. Si tu revends des accès, ce n’est plus un sujet d’email, c’est le [SaaS mode](/guide/saas-mode-gohighlevel-france). Si tu hésites encore sur l’outil de départ, le sommaire est dans le [guide](/guide).",
          "La bascule, si elle a lieu, suit la page [Migration](/migration-gohighlevel). Le domaine d’envoi se prépare avec le guide [délivrabilité](/guide/delivrabilite-email-gohighlevel). Une liste qui vient de Systeme.io se trie avant, comme dans le guide [Systeme.io](/guide/migration-systeme-io-gohighlevel).",
        ],
        table: {
          caption: "GoHighLevel vs ActiveCampaign : ce que chaque outil porte vraiment. Les cases « à côté » sont les outils que tu paies déjà en plus.",
          head: ["Besoin", "ActiveCampaign", "GoHighLevel"],
          rows: [
            ["Segments, scoring, attentes d’ouverture", "C’est son métier", "Possible, moins fin sur l’email seul"],
            ["Pipeline et étapes commerciales", "Limité, souvent à côté", "Dans le compte"],
            ["Prise de rendez-vous", "En général un autre outil", "Calendrier dans le contact"],
            ["Pages et checkout", "En général un autre outil", "Pages et paiement dans le compte"],
            ["Espace membres et drip", "En général un autre outil", "Cours dans le même compte, avec des limites"],
            ["SMS et téléphone", "Selon le plan et les connecteurs", "À l’usage, via le portefeuille"],
            ["Délivrabilité", "Ne rattrape pas une base froide", "Ne rattrape pas une base froide"],
            ["Reconstruction des scénarios", "Inutile si tu restes", "Chaque automation utile se réécrit"],
          ],
        },
        steps: [
          "Liste les outils réellement ouverts ce mois-ci : email, agenda, pages, paiement, espace membres, connecteurs.",
          "Pour chacun, note ce qui casse quand il est en panne. Si seul l’email manque, rester est raisonnable.",
          "Compte les automations encore déclenchées sur 90 jours. Les brouillons ne se migrent pas.",
          "Estime le volume d’envoi et la part d’acheteurs. Une bascule commence par eux, pas par toute la base.",
          "Ajoute le temps de réécriture. Le setup se précise après le [formulaire](/contact), pas dans ce comparatif. Aucun montant n’est publié sur le site.",
          "Si tu bascules, authentifie le domaine avant le premier envoi et garde ActiveCampaign lisible le temps du test.",
        ],
        bullets: [
          "Migrer pour « économiser l’abonnement » alors que les séquences marchent et qu’il n’y a pas de pipeline.",
          "Croire que GoHighLevel réparera des ouvertures déjà basses. Le DNS et la liste décident, pas le logo.",
          "Réécrire quarante scénarios d’un coup, y compris ceux que personne ne déclenche plus.",
          "Couper ActiveCampaign le vendredi où le nouveau domaine n’a encore envoyé qu’un test.",
          "Comparer deux factures d’outils différents comme si elles couvraient le même travail.",
        ],
        checks: [
          "Tu sais si le problème est l’email, ou le lead qui se perd entre les outils.",
          "Les scénarios encore utiles sont listés, avec leur déclencheur.",
          "La base acheteurs / ouvreurs / inactifs est écrite avant tout import.",
          "Le domaine d’envoi prévu est identifié, distinct du domaine du tunnel s’il le faut.",
          "Aucun montant n’est publié sur le site. Le modèle est un setup, puis un abonnement mensuel.",
          "Un humain reste capable d’envoyer depuis l’ancien outil tant que le test n’est pas passé.",
        ],
      },
    ],
    faq: [
      {
        q: "GoHighLevel remplace-t-il ActiveCampaign ?",
        a: "Il peut remplacer l’email en même temps que l’agenda, les pages et l’accès au cours. Il ne le remplace pas mieux si ton seul métier est une newsletter déjà bien segmentée.",
      },
      {
        q: "La délivrabilité baisse-t-elle après la migration ?",
        a: "Elle baisse si tu changes de domaine d’envoi et que tu relances toute la base le jour 1. Elle tient si tu chauffes le domaine et si tu n’envoies d’abord qu’aux acheteurs et aux ouvreurs.",
      },
      {
        q: "Faut-il tout migrer le même jour ?",
        a: "Non. On peut laisser ActiveCampaign envoyer quelques semaines, le temps de réécrire les scénarios utiles. Deux sources de capture, en revanche, ne doivent pas durer.",
      },
      {
        q: "Le comparatif se joue-t-il sur le tarif ?",
        a: "Non. On ne migre pas pour gratter un abonnement. On migre pour une seule source de vérité. Promarket ne publie pas de montant.",
      },
      {
        q: "Qui doit rester sur ActiveCampaign ?",
        a: "Celui dont le système est une newsletter et un tunnel simple, avec des séquences qui fonctionnent. Changer lui coûterait une réécriture sans rien réunir d’autre.",
      },
    ],
  },
  {
    slug: "saas-mode-gohighlevel-france",
    title: "GoHighLevel SaaS mode",
    h1: "GoHighLevel SaaS mode : facturer des clients en euros",
    description:
      "Le SaaS mode GoHighLevel : sous-comptes, rebilling, facture en euros. Ce qu’il faut écrire dans tes CGV. Chez Promarket, l’outil est mis à disposition.",
    category: "Agence",
    date: "2026-10-06",
    updated: "2026-10-20",
    reading: "8 min",
    nav: "SaaS mode",
    related: ["prix-gohighlevel-france", "gohighlevel-france", "rgpd-gohighlevel-france"],
    bridges: ["/agence-gohighlevel-nantes", "/services", "/crm-coachs"],
    keywords: ["gohighlevel saas mode", "SaaS mode GoHighLevel", "marque blanche GoHighLevel France"],
    sources: [
      { label: "Documentation HighLevel sur le SaaS mode", href: "https://help.gohighlevel.com/support/solutions/articles/155000001156-highlevel-pricing-guide" },
      { label: "Rebilling et SaaS mode, guide facturation du 22 août 2026", href: "https://help.gohighlevel.com/support/solutions/articles/155000001156-highlevel-pricing-guide" },
    ],
    lead: "Le GoHighLevel SaaS mode n’est pas un thème. C’est, sur le plan Agency Pro, la possibilité de faire payer tes sous-comptes par ta société, sous ta marque, en euros.",
    sections: [
      {
        h: "Ce que le plan débloque",
        p: [
          "Sur Agency Pro, tu peux créer des sous-comptes, appliquer un snapshot, et faire payer l’accès via Stripe sous ta marque. Le client voit ton produit, pas le logo HighLevel, si le white label est configuré.",
          "Unlimited permet des sous-comptes illimités, mais pas le rebilling avec marge ni le SaaS mode. Beaucoup d’agences se trompent de plan à ce moment-là.",
          "Un snapshot est une photo de compte : pipelines, champs, workflows, calendriers. Tu l’appliques à un sous-compte neuf pour ne pas reconstruire à la main. Il ne copie pas les contacts du client précédent, et il ne remplace pas les textes. Chaque client a son offre, ses prix, son domaine. Le snapshot pose la structure. Le contenu se relit.",
          "Le white label se vérifie sur le portail, les mails système et le domaine custom. Tant qu’un écran de connexion montre encore la marque HighLevel, le client n’est pas « sous ta marque ». Ce que Promarket met à disposition, sans grille publiée, est dans le guide [dédié](/guide/prix-gohighlevel-france).",
        ],
      },
      {
        h: "La réalité française",
        p: [
          "Ton client veut une facture en euros, un RIB ou un prélèvement Stripe, des CGV à ton nom. Chez Promarket, l’outil est mis à disposition : le client ne va pas ouvrir l’outil de son côté. Si tu revends toi-même des accès, ta société facture le client, et tu ne recopies pas la facture de l’éditeur sur la sienne.",
          "Ça suppose une société qui peut encaisser. Ce n’est pas un réglage dans l’outil, c’est un sujet de facturation. ProMarket opère ce montage pour des infopreneurs et, sur une offre séparée, pour des instituts.",
          "Concrètement, le client paie ta société, en euros, pour l’accès ou la prestation, avec la TVA si tu es assujetti. Il ne paie pas l’éditeur du logiciel. Tu ne présentes pas une facture de l’éditeur comme si c’était la sienne. Chez Promarket, cette mise à disposition est l’abonnement mensuel, après le setup.",
          "Encaisser suppose une structure qui peut émettre cette facture. Le siège de MCA, la société qui porte Promarket, est à Nantes. Ça ne change pas le droit applicable à ton client : c’est ta société, tes CGV, ton support. Chez Promarket, l’outil est mis à disposition dans l’[offre](/services), pas ouvert à part. Le cadre général est dans [GoHighLevel en France](/guide/gohighlevel-france), et la façon dont on travaille à distance est sur [l’agence à Nantes](/agence-gohighlevel-nantes).",
        ],
      },
      {
        h: "Ce qu’il ne faut pas prometre",
        p: [
          "Tu n’es pas éditeur de GoHighLevel. Les CGV doivent le dire. Une panne HighLevel n’est pas une panne de ton code. Le support plateforme reste chez HighLevel ; ton support, c’est le setup, les snapshots et l’exploitation.",
          "Écris dans les conditions ce que le client achète : un accès configuré, un accompagnement, un sous-compte. Pas une licence dont tu serais l’éditeur. Quand la plateforme est indisponible, tu peux constater, relayer, contourner un envoi. Tu ne corrects pas le code de HighLevel. Le dire avant la vente évite une dispute le jour d’une panne.",
          "Le support que tu vends se limite à ce que tu maîtrises : le snapshot, les workflows, le domaine, les accès, la lecture du pipeline. Une question qui relève de l’éditeur du logiciel remonte à son support, avec le numéro de compte. Mélanger les deux files fait croire au client que tu es l’éditeur. Les [CGV Promarket](/cgv) disent que l’outil est mis à disposition, et que Promarket n’est pas l’éditeur. Fais la même distinction dans les tiennes.",
        ],
      },
      {
        h: "Ce que le SaaS mode débloque, et ce qu’il ne débloque pas",
        p: [
          "Le SaaS mode, la création automatique de sous-comptes et le rebilling avec marge sont liés au plan qui les débloque. Un plan qui ouvre des sous-comptes illimités ne porte pas forcément le SaaS mode. Chez Promarket, cette mécanique n’est pas une grille publiée : l’outil est mis à disposition dans l’[offre](/services). Le cadre sans montant est dans le guide [mise à disposition](/guide/prix-gohighlevel-france).",
          "HighLevel décrit le SaaS mode comme la vente d’abonnements depuis ton site, avec création de compte sans geste manuel, et la refacturation de l’usage. Ça ne fait pas de toi l’éditeur du logiciel. Ça ne transforme pas la facture américaine en facture française. Ta société encaisse le client. HighLevel encaisse ta société. Un coach qui n’a qu’un business n’a pas besoin de ce montage : la page [CRM pour coachs](/crm-coachs) lui suffit, souvent sur Starter.",
        ],
        table: {
          caption: "Lecture des montages pour quelqu’un qui veut revendre un accès. Sans montant : Promarket n’en publie pas.",
          head: ["Question", "Un seul business", "Sous-comptes sans SaaS mode", "SaaS mode"],
          rows: [
            ["Sous-comptes", "Limité", "Ouverts", "Ouverts"],
            ["Rebilling téléphone et email", "Non", "Sans marge", "Avec marge, si le plan le permet"],
            ["SaaS mode", "Non", "Non", "Oui"],
            ["Création automatique de sous-comptes", "Non", "Non", "Oui"],
            ["Tu factures le client en euros", "Prestation à part", "Prestation à part", "Accès via ta société, si le montage est en place"],
          ],
        },
        steps: [
          "Vérifie le plan. Sans Agency Pro, tu peux vendre une prestation. Tu n’actives pas le SaaS mode.",
          "Écris qui facture le client : ta société, en euros, avec la TVA si tu es assujetti. Le client ne règle pas l’éditeur du logiciel.",
          "Prépare un snapshot : pipelines, champs, workflows, calendriers. Il ne copie pas les contacts d’un autre client, et les textes se relisent.",
          "Branche le domaine du portail et contrôle l’écran de connexion, les mails système et le nom affiché. Tant que la marque HighLevel apparaît, le client n’est pas sous la tienne.",
          "Règle le rebilling des usages que tu refactures. La marge, quand elle existe, se pose dans les réglages ou le configurateur SaaS, pas dans un tableur à part.",
          "Fais créer un sous-compte de test, avec un paiement de test, avant d’ouvrir la porte à un client réel.",
          "Pose dans tes conditions ce que le client achète, qui assure le support plateforme, et ce qui se passe si HighLevel est indisponible.",
        ],
        bullets: [
          "Appeler « SaaS mode » un simple changement de logo, sans la création de sous-compte et l’encaissement.",
          "Recopier une facture de l’éditeur sur la facture du client.",
          "Promettre que tu es l’éditeur, ou que tu corriges le code de la plateforme.",
          "Appliquer un snapshot sans relire les prix, le domaine et les textes de l’offre précédente.",
          "Oublier le [RGPD](/guide/rgpd-gohighlevel-france) : tes clients restent responsables de leurs contacts, et toi du tien. Le DPA HighLevel ne signe pas leur consentement.",
        ],
        checks: [
          "Le compte est bien sur Agency Pro, pas seulement sur un plan à sous-comptes illimités.",
          "La société qui encaisse peut émettre une facture en euros.",
          "Les CGV disent que tu n’es pas l’éditeur de GoHighLevel.",
          "L’écran de connexion du sous-compte de test ne montre plus la marque HighLevel, si c’est ce que tu vends.",
          "Le snapshot ne contient aucun contact d’un autre client.",
          "Le support que tu vends est listé : setup, workflows, domaine, lecture du pipeline. Le support plateforme est ailleurs.",
          "Aucun montant de plateforme n’est recopié ici, ni converti pour « faire simple ».",
        ],
      },
    ],
    faq: [
      {
        q: "Qu’est-ce que le SaaS mode GoHighLevel ?",
        a: "C’est, sur le plan Agency Pro, la vente d’accès sous ta marque : création de sous-comptes et rebilling de l’usage, y compris avec une marge. HighLevel te facture la plateforme. Ta société facture le client.",
      },
      {
        q: "Puis-je rebiller sans Agency Pro ?",
        a: "Tu peux facturer une prestation à côté. Le SaaS mode et le rebilling avec marge ne s’activent pas sur tous les plans. Un plan à sous-comptes illimités peut permettre un rebilling sans marge, sans être le SaaS mode.",
      },
      {
        q: "Le client paie-t-il en euros ?",
        a: "Il paie ta société, dans la devise de ta facture. Chez Promarket, l’outil est mis à disposition dans l’abonnement mensuel. On ne recopie pas une facture de l’éditeur sur celle du client.",
      },
      {
        q: "La marque blanche est-elle le SaaS mode ?",
        a: "Non. La marque blanche, c’est ce que le client voit : logo, domaine, mails. Le SaaS mode, c’est la façon d’encaisser et de créer le sous-compte. L’un sans l’autre laisse soit un logo HighLevel, soit une facture que tu ne maîtrises pas.",
      },
      {
        q: "Un coach seul a-t-il besoin du SaaS mode ?",
        a: "Non, s’il n’a qu’un business et personne à rebiller. Starter couvre ce cas. Le SaaS mode sert à revendre des accès, pas à suivre ses propres clients.",
      },
    ],
  },
  {
    slug: "rgpd-gohighlevel-france",
    title: "GoHighLevel RGPD : email et SMS",
    h1: "GoHighLevel et le RGPD : email, SMS, bases en France",
    description:
      "GoHighLevel RGPD : qui est responsable, comment prouver un consentement, ce que la CNIL distingue entre particuliers et professionnels, et le DPA HighLevel.",
    category: "Conformité",
    date: "2026-10-06",
    updated: "2026-10-20",
    reading: "8 min",
    nav: "RGPD",
    related: ["delivrabilite-email-gohighlevel", "prix-gohighlevel-france", "gohighlevel-france"],
    bridges: ["/migration-gohighlevel", "/agence-gohighlevel-nantes", "/crm-coachs"],
    keywords: ["gohighlevel rgpd", "RGPD GoHighLevel", "SMS GoHighLevel France"],
    sources: [
      { label: "CNIL, prospection par courriel, SMS et MMS, 10 juin 2026", href: "https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique" },
      { label: "DPA HighLevel, mis à jour en juillet 2026", href: "https://www.gohighlevel.com/data-processing-agreement" },
      { label: "Aide HighLevel sur la confidentialité et le RGPD", href: "https://help.gohighlevel.com/support/solutions/articles/48001210915-gdpr-compliance-and-data-privacy" },
    ],
    lead: "GoHighLevel et le RGPD : l’outil héberge, toi tu restes responsable de traitement pour tes contacts en France. Aucun workflow ne signe le consentement à ta place.",
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
          "L’usage rappelle la limite mieux qu’un paragraphe juridique. Le SMS et WhatsApp ne se confondent pas avec l’abonnement de mise à disposition. WhatsApp ajoute une couche : template approuvé, opt-in propre, et la fenêtre de 24 heures pour la conversation libre. Un envoi marketing hors template est rejeté par Meta, même si ta base est propre. Le modèle sans montant est dans le guide [mise à disposition](/guide/prix-gohighlevel-france).",
        ],
      },
      {
        h: "Sous-traitance",
        p: [
          "HighLevel est un sous-traitant américain. Il te faut leur DPA, une mention dans ta politique de confidentialité, et une idée claire de ce que tu exportes. Ce guide n’est pas un avis juridique. C’est la checklist qu’on applique avant d’allumer un workflow.",
          "Liste ce qui part dans le compte : nom, email, téléphone, historique d’achat, notes d’appel. Chaque champ inutile est une donnée de trop. Les exports CSV qu’on se « garde sous le coude » sur un drive personnel sont aussi un traitement. On les date, on les limite, on les efface quand la migration est finie.",
          "La politique de confidentialité nomme HighLevel comme sous-traitant, avec le lien vers leur DPA, et dit combien de temps tu gardes un prospect qui n’achète pas. Trois ans après le dernier échange est la durée que ProMarket retient pour les demandes reçues via le site. La tienne peut différer. Écris-la avant le premier import, pas après une plainte. Le contexte français du compte est repris dans [GoHighLevel en France](/guide/gohighlevel-france). Si l’import fait partie d’une bascule, cette checklist se lit avec la page [Migration](/migration-gohighlevel), avant le premier workflow.",
        ],
      },
      {
        h: "Ce que la CNIL écrit, et ce que le compte doit garder",
        p: [
          "La page de la CNIL sur la prospection par courriel, SMS, MMS et automate d’appel, mise à jour le 10 juin 2026, pose le cadre. Pour des particuliers, le consentement vient avant le message commercial. Il est libre, spécifique, éclairé et univoque : une case dédiée, pas précochée, et l’acceptation des conditions générales ne suffit pas. Deux exceptions sont écrites : le client existant, pour des produits ou services similaires de la même entreprise ; et la prospection non commerciale. La CNIL rappelle qu’un simple compte en ligne n’est pas une vente. Créer un accès sur ton espace ne te donne pas le droit de prospecter comme si la personne avait acheté.",
          "Pour des professionnels, la même page indique que la prospection peut reposer sur l’intérêt légitime quand l’objet a un rapport avec la profession de la personne, à condition qu’elle ait été informée et qu’elle puisse s’opposer. Les adresses génériques du type contact@ ou info@, qui visent une personne morale, ne suivent pas le même régime. Chaque message, dans tous les cas, identifie l’émetteur et offre un refus simple. Ce guide n’est pas un avis d’avocat. La page à lire est celle de la CNIL, pas un résumé de forum.",
          "Côté outil, le DPA de HighLevel, mis à jour en juillet 2026, dit que HighLevel agit comme sous-traitant des données client, et comme sous-traitant ultérieur si toi-même tu traites pour le compte d’un autre. Le client du logiciel reste responsable. Le transfert hors UE s’appuie, dans ce DPA, sur les clauses contractuelles types. HighLevel indique par ailleurs, sur sa page d’aide, être certifié au cadre EU-US Data Privacy Framework. Tu cites ces documents dans ta politique. Tu ne les remplaces pas par une phrase du type « GoHighLevel est conforme ». La délivrabilité, elle, est un autre sujet : un envoi légal peut quand même finir en spam. Le guide est ici : [délivrabilité](/guide/delivrabilite-email-gohighlevel).",
        ],
        table: {
          caption: "À quoi correspond chaque geste dans le compte. Ce n’est pas une base légale automatique.",
          head: ["Situation", "Ce qu’il te faut avant d’écrire"],
          rows: [
            ["Particulier qui n’a jamais acheté", "Consentement préalable, case dédiée non précochée, preuve datée"],
            ["Client qui a déjà acheté", "Message sur des offres similaires, information au moment de la collecte, opposition facile"],
            ["Simple création de compte, sans achat", "Pas l’exception « client ». La CNIL le dit expressément"],
            ["Professionnel, message en lien avec son métier", "Information et droit d’opposition. L’intérêt légitime ne dispense pas de le dire"],
            ["Adresse générique contact@ d’une société", "Régime distinct, décrit par la CNIL pour les personnes morales"],
            ["SMS ou MMS commercial", "Même logique que l’email, avec une preuve propre au numéro. Une liste email ne suffit pas"],
            ["Refus ou STOP", "Sortie du workflow, trace gardée, pas de prochaine campagne"],
          ],
        },
        steps: [
          "Écris en une phrase pourquoi tu as le droit d’écrire à ce segment. Si tu n’y arrives pas, le workflow reste éteint.",
          "Range la preuve dans le contact : source, date, URL du formulaire, texte exact de la case.",
          "Sépare les canaux. L’opt-in email n’ouvre pas le SMS. L’opt-in SMS n’ouvre pas WhatsApp.",
          "Règle les heures d’envoi sur l’heure de Paris, pas sur le fuseau du compte créé aux États-Unis.",
          "Teste le lien de désinscription et le STOP. Le contact doit sortir du prochain envoi.",
          "Nomme HighLevel dans ta politique, avec le lien vers le DPA de juillet 2026, et la durée de conservation des prospects.",
          "Efface les exports CSV de migration une fois la bascule finie. Un fichier « au cas où » est encore un traitement.",
        ],
        bullets: [
          "Importer une vieille liste et la sms-er parce qu’elle a déjà reçu des emails.",
          "Considérer qu’un compte élève, sans paiement, vaut une relation commerciale.",
          "Laisser une case précochée, ou cacher le consentement dans les conditions générales.",
          "Envoyer un SMS à 6 h ou à 22 h parce que le fuseau du compte est ailleurs.",
          "Croire que le DPA de HighLevel remplace ta politique et ta base légale.",
        ],
        checks: [
          "La base légale du segment est écrite avant l’activation du workflow.",
          "La preuve (date, page, texte de la case) est dans le contact, pas dans un souvenir.",
          "Les listes email et SMS sont distinctes.",
          "Le STOP et le lien de désinscription ont été testés.",
          "La politique cite HighLevel comme sous-traitant et donne le DPA.",
          "La durée de conservation d’un prospect qui n’achète pas est écrite. Celle de ProMarket, pour les demandes du site, est de trois ans après le dernier échange. La tienne peut différer.",
          "Les exports de la [migration](/migration-gohighlevel) ont une date de destruction.",
        ],
      },
    ],
    faq: [
      {
        q: "GoHighLevel est-il « conforme RGPD » à ma place ?",
        a: "Non. Le DPA de juillet 2026 décrit HighLevel comme sous-traitant. Tu restes responsable de traitement pour tes contacts. L’outil ne choisit pas ta base légale.",
      },
      {
        q: "Puis-je importer une vieille liste Kajabi et l’envoyer par SMS ?",
        a: "Seulement si tu peux prouver le consentement SMS. Une liste email n’est pas une liste SMS. Le guide de migration ne change pas cette règle.",
      },
      {
        q: "Un élève qui a ouvert un compte a-t-il consenti à la prospection ?",
        a: "Pas par ce seul geste. La CNIL indique qu’une création de compte n’est pas une vente, et que l’exception « client existant » suppose un achat ou une prestation.",
      },
      {
        q: "Le régime est-il le même pour un particulier et un professionnel ?",
        a: "Non. Les particuliers : consentement préalable pour la prospection commerciale par email ou SMS. Les professionnels : l’intérêt légitime est possible si le message a un rapport avec leur profession, avec une information et un droit d’opposition.",
      },
      {
        q: "Où est le contrat de sous-traitance ?",
        a: "Le Customer Data Processing Addendum de HighLevel est public et a été mis à jour en juillet 2026. Ta politique de confidentialité doit le mentionner. Ce guide ne le remplace pas.",
      },
    ],
  },
  {
    slug: "espace-membres-gohighlevel",
    title: "Espace membres GoHighLevel et formation",
    h1: "Espace membres GoHighLevel : y héberger une formation",
    description:
      "Espace membres GoHighLevel : modules, drip, accès coupé si le paiement échoue. Et ce que « formation GoHighLevel » veut dire quand on parle du logiciel, pas des cours.",
    category: "Produit",
    date: "2026-10-06",
    updated: "2026-10-20",
    reading: "8 min",
    nav: "Espace membres",
    related: ["migration-kajabi-gohighlevel", "prix-gohighlevel-france", "gohighlevel-france"],
    bridges: ["/crm-coachs", "/migration-gohighlevel", "/agence-gohighlevel-nantes"],
    keywords: ["espace membres gohighlevel", "formation gohighlevel", "GoHighLevel vs Kajabi"],
    sources: [
      { label: "Fonctions Courses et Communities, documentation HighLevel", href: "https://www.gohighlevel.com/pricing" },
      { label: "Programme de certification HighLevel, page d’aide de l’éditeur", href: "https://help.gohighlevel.com/support/solutions/articles/155000001156-highlevel-pricing-guide" },
    ],
    lead: "L’espace membres GoHighLevel sert à héberger ta formation : modules, drip, accès lié au paiement. Une formation GoHighLevel, au sens « apprendre le logiciel », est un autre sujet, et ce n’est pas un cours ProMarket.",
    sections: [
      {
        h: "Ce qu’il fait bien",
        p: [
          "Offres, modules, drip à partir de la date d’achat, accès coupé si le paiement échoue, communauté simple. Pour un programme de 6 à 40 leçons, c’est assez, et c’est dans le même compte que le CRM.",
          "L’intérêt n’est pas le lecteur vidéo. C’est le lien entre achat, tag, onboarding et accès. Plus de Zapier entre le checkout et l’ouverture du module.",
          "Le parcours propre ressemble à ceci. Le paiement réussi pose un tag et une date. Le workflow ouvre l’offre correspondante, envoie le mail d’accès, et crée la tâche d’onboarding si ton accompagnement en a une. Si le prélèvement échoue, l’accès se ferme. Tu n’as plus à vérifier un tableur le lundi matin pour savoir qui a encore le droit d’entrer.",
          "Pour un coach ou un formateur, c’est souvent le morceau qui manquait au CRM : le client n’est pas seulement une opportunité, c’est quelqu’un qui doit ouvrir une leçon. La page [CRM pour coachs](/crm-coachs) décrit cet assemblage. Le portail se sert sur ton domaine, avec ton nom, une fois le branding posé. Si les cours sont encore sur Kajabi, on ne coupe pas cet accès pour aller plus vite : la page [Migration](/migration-gohighlevel) impose le compte test avant le mail aux élèves.",
        ],
      },
      {
        h: "Ce qu’il fait mal",
        p: [
          "Quiz avancés, certificats complexes, commentaires façon école, apps mobiles natives de formation : Kajabi ou un LMS dédié restent plus confortables. Si ta promesse produit est la plateforme pédagogique, ne migre pas pour le prix.",
          "Les vidéos lourdes se servent mieux depuis un hébergeur externe intégré que depuis un upload brut sans stratégie de poids.",
          "Pose la question avant de migrer : tes élèves achètent-ils l’accès à une méthode, ou achètent-ils une application de formation ? Dans le premier cas, des modules, un drip et un accès coupé au bon moment suffisent. Dans le second, quitter Kajabi pour économiser un abonnement abîme le produit. Le guide [migration Kajabi](/guide/migration-kajabi-gohighlevel) part de cette distinction.",
          "Côté vidéo, un fichier très lourd téléversé sans réflexion se charge mal sur un téléphone, et il alourdit la page. Un hébergeur externe, intégré dans la leçon, te laisse gérer le poids, les sous-titres et le remplacement d’un cours sans reconstruire l’offre. Le poids des vidéos ne change pas le modèle de mise à disposition, décrit sans montant dans le guide [dédié](/guide/prix-gohighlevel-france).",
        ],
      },
      {
        h: "Deux sens de « formation GoHighLevel »",
        p: [
          "La requête mélange deux questions. La première : est-ce que je mets ma formation dans GoHighLevel ? La page tarifs publique liste les cours (Courses) et les communautés parmi les fonctions du socle. Elle ne publie pas un nombre maximum de leçons. Pour un programme de 6 à 40 leçons, avec un drip et un accès coupé si le paiement échoue, le portail suffit souvent, et il vit dans le même compte que le [CRM pour coachs](/crm-coachs). Si la promesse est une application de formation, le guide [migration Kajabi](/guide/migration-kajabi-gohighlevel) dit de ne pas partir pour le prix.",
          "La seconde question : où apprendre le logiciel ? L’éditeur propose son propre programme de certification. C’est un produit de l’éditeur, pas une formation Promarket. Promarket n’est pas un organisme de formation et ne vend pas de cours pour apprendre l’outil. On implante le compte, on transfère, on règle l’envoi. Le cadre est sur [l’agence à Nantes](/agence-gohighlevel-nantes), le travail est à distance.",
        ],
        table: {
          caption: "Ce que l’espace membres porte, et ce qu’il vaut mieux laisser ailleurs.",
          head: ["Besoin", "Dans GoHighLevel", "Ailleurs, si c’est le produit"],
          rows: [
            ["Modules et leçons", "Oui", "Inutile de doubler"],
            ["Drip à partir de la date d’achat", "Oui", "Une cohorte demande une date de groupe dans le contact"],
            ["Accès coupé si le paiement échoue", "Oui, c’est l’intérêt du lien avec le CRM", "Un LMS séparé exige un connecteur"],
            ["Communauté simple", "Listée sur la page tarifs", "Une communauté très outillée se juge à part"],
            ["Quiz avancés, certificats complexes", "Pas le point fort", "Kajabi ou un LMS dédié"],
            ["Application mobile native de formation", "Pas le portail web", "À ne pas promettre"],
            ["Apprendre à utiliser GoHighLevel", "Le compte ne forme pas tout seul", "Certification de l’éditeur, pas une formation Promarket"],
          ],
        },
        steps: [
          "Écris ce que l’élève achète : une méthode, ou une application de formation. La réponse décide de la migration.",
          "Liste les offres, le nombre de leçons, le drip (date d’achat ou date de cohorte) et la règle d’accès si le paiement échoue.",
          "Pose le domaine et le nom du portail avant de montrer un écran à un élève. Ils doivent voir ton espace.",
          "Relie le paiement au tag, à la date et à l’ouverture du module. Plus de tableur le lundi pour savoir qui a le droit d’entrer.",
          "Héberge les vidéos lourdes là où tu maîtrises le poids et les sous-titres, puis intègre-les dans la leçon.",
          "Crée un élève de test : paiement, mail d’accès, module, drip suivant, déconnexion, reconnexion. La page [Migration](/migration-gohighlevel) interdit d’écrire à la liste avant ce test.",
          "Si tu voulais en réalité une formation pour apprendre le logiciel, arrête ici : regarde la certification HighLevel, pas un setup.",
        ],
        bullets: [
          "Migrer un catalogue Kajabi uniquement pour baisser un abonnement, alors que le produit est la plateforme pédagogique.",
          "Téléverser des vidéos très lourdes sans regarder le mobile. La leçon s’ouvre mal, la page s’alourdit.",
          "Ouvrir l’accès à la main « en attendant » que le paiement soit branché. Le lundi, personne ne sait qui est à jour.",
          "Laisser la marque HighLevel sur l’écran de connexion alors que tu as vendu « ton » espace.",
          "Appeler « formation GoHighLevel » le setup ProMarket. Ce n’est pas un cours, et ce n’est pas la certification de l’éditeur.",
        ],
        checks: [
          "L’offre tient en modules, drip et accès, ou tu as assumé de garder un LMS.",
          "La date qui ouvre la leçon 1 est écrite : achat, ou cohorte.",
          "L’échec de paiement ferme l’accès, et un test l’a prouvé.",
          "Le portail est sur ton domaine, avec ton nom.",
          "Un élève fictif a fait le parcours complet avant tout mail à la liste.",
          "Les vidéos ont un poids tenable sur téléphone.",
          "Tu ne vends pas la certification HighLevel comme si c’était la tienne, ni l’inverse.",
        ],
      },
    ],
    faq: [
      {
        q: "L’espace membres GoHighLevel remplace-t-il Kajabi ?",
        a: "Pour une formation de quelques leçons à quelques dizaines de leçons, avec drip et accès lié au paiement, souvent oui. Pour des quiz avancés, des certificats complexes ou une application pédagogique, non.",
      },
      {
        q: "Qu’est-ce qu’une formation GoHighLevel ?",
        a: "Si tu parles de tes cours : c’est l’espace membres. Si tu parles d’apprendre le logiciel : c’est la certification de l’éditeur, pas une formation Promarket. On implante le compte.",
      },
      {
        q: "Mes élèves verront-ils GoHighLevel ?",
        a: "Pas si le domaine custom et le branding du portail sont en place. Ils voient ton espace, sur ton domaine. On le vérifie sur l’écran de connexion, pas sur une promesse.",
      },
      {
        q: "Le drip peut-il suivre une cohorte ?",
        a: "Oui, si la date du groupe est un champ du contact. Pour une offre evergreen, c’est la date d’achat qui ouvre la leçon 1. Mélanger les deux ouvre les mauvais modules.",
      },
      {
        q: "Le poids des vidéos change-t-il la mise à disposition ?",
        a: "Non. Une vidéo trop lourde dégrade la lecture. Elle ne change pas le modèle : frais de setup, puis un abonnement mensuel. Promarket ne publie pas de montant.",
      },
    ],
  },
  {
    slug: "delivrabilite-email-gohighlevel",
    title: "Délivrabilité email GoHighLevel",
    h1: "Délivrabilité email GoHighLevel : SPF, DKIM, DMARC",
    description:
      "Délivrabilité email sur GoHighLevel : authentifier le domaine, chauffer l’envoi, et ne pas relancer toute la base le jour de la migration.",
    category: "Email",
    date: "2026-10-06",
    updated: "2026-10-20",
    reading: "8 min",
    nav: "Délivrabilité",
    related: ["migration-systeme-io-gohighlevel", "rgpd-gohighlevel-france", "gohighlevel-vs-activecampaign"],
    bridges: ["/migration-gohighlevel", "/agence-gohighlevel-nantes", "/services"],
    keywords: ["délivrabilité email gohighlevel", "délivrabilité GoHighLevel", "SPF DKIM GoHighLevel"],
    sources: [
      { label: "Guide de facturation HighLevel, e-mail à l’usage", href: "https://help.gohighlevel.com/support/solutions/articles/155000001156-highlevel-pricing-guide" },
    ],
    lead: "La délivrabilité email sur GoHighLevel se joue avant le premier envoi de masse. SPF, DKIM et DMARC authentifient le domaine. Ils ne réparent pas une liste froide.",
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
      {
        h: "Poser les enregistrements, puis monter le volume",
        p: [
          "GoHighLevel peut envoyer sans outil d’e-mail séparé : c’est l’e-mail intégré. L’usage au-delà du socle se paie à part, et ce paiement ne garantit pas la boîte de réception : un envoi peut quand même tomber en indésirable. Promarket ne publie pas ce barème. Le modèle de mise à disposition est dans le guide [dédié](/guide/prix-gohighlevel-france).",
          "Le calendrier se cale sur la bascule, pas à côté. Pendant qu’on reconstruit les pages et les accès, le DNS d’envoi se pose. Le jour où le compte test fonctionne, les acheteurs récents reçoivent le premier vrai message. Le guide [GoHighLevel en France](/guide/gohighlevel-france) rappelle que les tutos américains sautent cette étape. Une [agence](/agence-gohighlevel-nantes) qui livre le compte sans ce voyant vert livre un compte muet.",
          "Une adresse IP dédiée est une option, réservée à certains plans. Elle ne remplace pas le warm-up. Elle donne une adresse d’envoi qui n’est pas partagée. Sur une liste froide, une IP dédiée se grille aussi. On n’en active pas une pour « réparer » un import raté.",
        ],
        table: {
          caption: "Les trois enregistrements, et ce qu’ils ne font pas.",
          head: ["Enregistrement", "Rôle", "Erreur fréquente"],
          rows: [
            ["SPF", "Liste les serveurs autorisés à envoyer pour le domaine", "Remplacer l’enregistrement et couper la boîte du quotidien"],
            ["DKIM", "Signe le message pour que la réception puisse le vérifier", "Croire que le domaine du tunnel suffit si l’envoi part d’un autre"],
            ["DMARC", "Dit quoi faire si SPF ou DKIM échoue", "Passer en rejet le premier jour, avant d’avoir observé"],
            ["Test Gmail et Outlook", "Montre où le message arrive vraiment", "S’envoyer un seul test puis lancer 20 000 contacts"],
            ["Warm-up", "Monte le volume en commençant par ceux qui ont une raison d’ouvrir", "« Réveiller » les inactifs le jour de la bascule"],
          ],
        },
        steps: [
          "Choisis le domaine d’envoi. S’il est différent du domaine du tunnel, authentifie celui qui envoie, pas seulement celui qui héberge la page.",
          "Édite le SPF pour ajouter GoHighLevel sans effacer le service qui envoie déjà ton courrier quotidien.",
          "Active DKIM et publie DMARC d’abord en surveillance. Le rejet vient quand tu as lu les rapports, pas le matin de la migration.",
          "Attends que le domaine soit marqué authentifié dans le compte. Sans ce voyant, on n’envoie pas.",
          "Envoie un message à une boîte Gmail et une boîte Outlook que tu ouvres toi-même. Si l’un des deux est en indésirable, on s’arrête.",
          "Premier volume : acheteurs récents seulement. Ensuite les ouvreurs habituels. Les inactifs restent en sommeil ou sortent.",
          "Relis l’objet, le texte, le lien de désinscription et le nom d’expéditeur. Le guide [RGPD](/guide/rgpd-gohighlevel-france) rappelle que le refus doit être simple.",
        ],
        bullets: [
          "Lancer une promo le soir de l’import, sur un domaine qui n’a jamais envoyé.",
          "Remplacer le SPF au lieu de l’éditer, et perdre les mails de la messagerie.",
          "Mettre DMARC en rejet avant d’avoir vu quels envois légitimes échouent.",
          "Compenser un test en spam par un volume plus gros. C’est l’inverse du remède.",
          "Acheter une IP dédiée pour une liste dont tu ne connais plus l’origine.",
          "Croire qu’un transfert depuis ActiveCampaign répare les ouvertures. Le comparatif est dans [GoHighLevel vs ActiveCampaign](/guide/gohighlevel-vs-activecampaign).",
        ],
        checks: [
          "SPF, DKIM et DMARC sont posés sur le domaine qui envoie.",
          "La messagerie habituelle fonctionne encore après la modification du SPF.",
          "Le compte affiche le domaine comme authentifié.",
          "Un test Gmail et un test Outlook sont arrivés en boîte de réception.",
          "Le premier envoi ne contient que des acheteurs récents.",
          "L’objet ne promet pas un gain miracle, le lien de désinscription est visible, l’expéditeur est le tien.",
          "Les inactifs ne servent pas à annoncer la [migration](/migration-gohighlevel).",
        ],
      },
    ],
    faq: [
      {
        q: "SPF, DKIM et DMARC suffisent-ils ?",
        a: "Ils disent aux boîtes que le domaine a le droit d’envoyer et quoi faire en cas d’échec. Ils ne rattrapent pas une liste importée sans tri, ni un objet criard.",
      },
      {
        q: "Faut-il un domaine d’envoi séparé ?",
        a: "Oui si le domaine principal porte déjà le site et que tu envoies beaucoup. Un sous-domaine dédié, du type news.tondomaine.fr, isole le risque. Authentifier le domaine du tunnel ne règle pas l’envoi s’il part d’ailleurs.",
      },
      {
        q: "Par qui commence le warm-up ?",
        a: "Par les acheteurs récents, en petit volume. Puis les ouvreurs. Les inactifs attendent, ou sortent. Importer des milliers de contacts et lancer une promo le soir même grille le domaine.",
      },
      {
        q: "Une IP dédiée améliore-t-elle la délivrabilité ?",
        a: "Elle isole ta réputation. Elle ne répare pas une base froide. Le warm-up reste obligatoire.",
      },
      {
        q: "L’email GoHighLevel est-il illimité ?",
        a: "Non. L’e-mail au-delà du socle est à l’usage. Cet usage n’a rien à voir avec la boîte de réception : un envoi peut quand même être classé en indésirable.",
      },
    ],
  },
  {
    slug: "gohighlevel-france",
    title: "GoHighLevel France : guide en français",
    h1: "GoHighLevel en France, expliqué en français",
    description:
      "GoHighLevel France, en français : ce qu’un expert vérifie (facture en euros, TVA, RGPD, SMS, SaaS mode). L’interface reste surtout en anglais. Le setup, non.",
    category: "Référence",
    date: "2026-10-06",
    updated: "2026-10-20",
    reading: "9 min",
    nav: "Guide France",
    related: ["prix-gohighlevel-france", "saas-mode-gohighlevel-france", "seo-geo-agent-ia-gohighlevel"],
    bridges: ["/agence-gohighlevel-nantes", "/migration-gohighlevel", "/crm-coachs"],
    keywords: ["gohighlevel", "gohighlevel france", "gohighlevel français", "expert gohighlevel"],
    lead: "GoHighLevel, en France et en français, ne se résume pas à traduire l’interface. L’outil est pensé aux États-Unis. Ici, le sujet est la facture, la délivrabilité, le droit, et l’accès de tes élèves.",
    sections: [
      {
        h: "Ce que GoHighLevel remplace",
        p: [
          "Pour un coach, un formateur ou une agence, GoHighLevel (GHL) réunit CRM, tunnels, emails, SMS, prise de rendez-vous, espace membres et paiements. L’alternative typique en France est un empilement Kajabi ou Systeme.io, plus ActiveCampaign, Calendly, Zapier et un page builder.",
          "Le gain n’est pas un abonnement comparé sur le papier. C’est une seule source de vérité : un lead, un pipeline, une séquence, un accès formation, un encaissement. Le modèle de mise à disposition, sans montant, est dans le guide [dédié](/guide/prix-gohighlevel-france).",
          "Deux lectures reviennent. Le coach ou le formateur veut que le rendez-vous, la relance et l’accès au cours vivent au même endroit : c’est la page [CRM pour coachs](/crm-coachs). Celui qui a déjà Kajabi, Systeme.io, ActiveCampaign ou un tunnel ailleurs veut surtout ne pas couper les accès : c’est la page [Migration](/migration-gohighlevel). Le siège de ProMarket est à Nantes, le travail est à distance. Le cadre est sur [l’agence](/agence-gohighlevel-nantes).",
        ],
      },
      {
        h: "Ce qui change en France",
        p: [
          "Tes clients attendent une facture en euros. Si tu es assujetti à la TVA, c’est ta société qui la collecte. Chez Promarket, l’outil GoHighLevel est mis à disposition. Le SaaS mode sert à revendre des sous-comptes sous ta marque, avec ton encaissement. Le montage, et ce qu’il ne faut pas promettre, est dans le guide [SaaS mode](/guide/saas-mode-gohighlevel-france).",
          "Les SMS vers les mobiles français se paient à l’usage et coûtent plus cher qu’un email. Une base importée puis relancée depuis un domaine froid finit en spam. Le [RGPD](/guide/rgpd-gohighlevel-france) s’applique : base légale, mentions, durée de conservation, sous-traitant HighLevel à documenter. Les tutos US n’écrivent pas cette partie. La délivrabilité se pose avant le premier envoi de masse : [SPF, DKIM, DMARC](/guide/delivrabilite-email-gohighlevel).",
          "L’interface reste surtout en anglais. Les pages, les e-mails, les automatisations et l’accompagnement peuvent être en français. Ça ne transforme pas l’éditeur en société française. Chez Promarket, l’outil est fourni et mis à disposition. Promarket n’est pas l’éditeur du logiciel.",
        ],
      },
      {
        h: "Pourquoi un opérateur francophone",
        p: [
          "Promarket fournit l’outil et le met à disposition. On implante le compte, on transfère sans couper les accès, on pose l’envoi, le CRM et les automatisations. L’ordre de bascule est sur la page [Méthode](/methode). L’offre, setup puis abonnement mensuel, est sur [Offre](/services).",
          "Le guide à côté détaille les [prix](/guide/prix-gohighlevel-france), les migrations [Kajabi](/guide/migration-kajabi-gohighlevel) et [Systeme.io](/guide/migration-systeme-io-gohighlevel), le comparatif [ActiveCampaign](/guide/gohighlevel-vs-activecampaign), le [SaaS mode](/guide/saas-mode-gohighlevel-france), le [RGPD](/guide/rgpd-gohighlevel-france), l’[espace membres](/guide/espace-membres-gohighlevel) et la [délivrabilité](/guide/delivrabilite-email-gohighlevel). C’est la couche opérationnelle, pas un catalogue d’affiliation.",
          "Les pages viennent avec le compte. Une page par offre, un sujet par URL, des paragraphes qu’une IA peut citer : c’est l’article [SEO, GEO et agents IA](/guide/seo-geo-agent-ia-gohighlevel), et la mise en place est dans l’[offre](/services). Un agent branché sur un pipeline vide n’a rien à qualifier.",
        ],
      },
      {
        h: "Ce qu’un expert GoHighLevel vérifie en premier",
        p: [
          "Quelqu’un qui implante GoHighLevel en France ne commence pas par les templates. Il vérifie le besoin de sous-comptes et de facturation, pas une brochure. Aucun montant n’est repris dans le guide [mise à disposition](/guide/prix-gohighlevel-france). Le flux d’argent : l’éditeur prélève dans sa devise, tes clients attendent des euros. Le [SaaS mode](/guide/saas-mode-gohighlevel-france) ne sert que si tu revends des accès. Le droit d’écrire : le guide [RGPD](/guide/rgpd-gohighlevel-france) tient la checklist, ce n’est pas un avis d’avocat. Le domaine d’envoi : [SPF, DKIM, DMARC](/guide/delivrabilite-email-gohighlevel) avant le premier envoi de masse. L’accès élève, si tu vends une formation : le guide [espace membres](/guide/espace-membres-gohighlevel).",
          "GoHighLevel en français, ça veut dire ceci : menus souvent en anglais, pages, mails, automatisations et accompagnement en français. Il n’existe pas, sur la page publique de l’éditeur, une « version française » du logiciel qu’un bouton activerait. Le présenter ainsi est faux. L’[agence GoHighLevel à Nantes](/agence-gohighlevel-nantes) fait ce travail à distance, pour des équipes francophones. Le siège est à Nantes.",
          "Les avis GoHighLevel que tu croises en ligne mélangent souvent trois choses : une vidéo d’affilié, un usage aux États-Unis, et un retour sur l’interface. Aucun de ces avis ne dit si ta facture, tes SMS et tes élèves tiennent en France. ProMarket ne publie pas d’avis clients sur cette page. On décrit une méthode. Tu juges l’outil sur les six vérifications ci-dessus, pas sur une note.",
        ],
        table: {
          caption: "Où lire la suite, selon la question. Une URL par sujet, pour ne pas tout mélanger.",
          head: ["Question", "Page"],
          rows: [
            ["Mise à disposition, sans grille", "[Mise à disposition](/guide/prix-gohighlevel-france)"],
            ["Quitter Kajabi", "[Migration Kajabi](/guide/migration-kajabi-gohighlevel)"],
            ["Quitter Systeme.io", "[Migration Systeme.io](/guide/migration-systeme-io-gohighlevel)"],
            ["Garder ou non ActiveCampaign", "[GoHighLevel vs ActiveCampaign](/guide/gohighlevel-vs-activecampaign)"],
            ["Revendre des sous-comptes", "[SaaS mode](/guide/saas-mode-gohighlevel-france)"],
            ["Écrire à des contacts français", "[RGPD](/guide/rgpd-gohighlevel-france)"],
            ["Arriver en boîte de réception", "[Délivrabilité](/guide/delivrabilite-email-gohighlevel)"],
            ["Héberger une formation", "[Espace membres](/guide/espace-membres-gohighlevel)"],
            ["Pipeline d’un coach ou d’un formateur", "[CRM pour coachs](/crm-coachs)"],
            ["Ordre de bascule, quel que soit l’outil", "[Migration GoHighLevel](/migration-gohighlevel)"],
          ],
        },
        steps: [
          "Dis si tu as un seul business ou des sous-comptes à facturer. Ça choisit le plan, pas l’inverse.",
          "Liste les outils actuels : espace membres, email, agenda, pages, connecteurs. S’ils ne se parlent plus, la page migration vient avant le setup.",
          "Écris qui a le droit de recevoir un email, et qui a le droit de recevoir un SMS. Les deux listes ne sont pas la même.",
          "Choisis le domaine d’envoi et prévois son authentification avant toute séquence.",
          "Si tu vends des cours, décide si l’espace membres suffit ou si le produit est la plateforme pédagogique.",
          "Seulement ensuite : pipelines, workflows, pages. Un compte vide décoré de scénarios ne qualifie personne.",
        ],
        bullets: [
          "Chercher un GoHighLevel « en français » qui serait un autre logiciel. L’interface reste surtout en anglais.",
          "Convertir un tarif étranger en euros et le présenter comme un tarif français officiel. Promarket n’en publie pas.",
          "Lire un avis américain comme s’il décrivait les SMS, la TVA et le RGPD.",
          "Ouvrir Agency Pro pour un coach qui ne rebille personne.",
          "Brancher un agent IA sur un pipeline qui n’a pas encore d’étapes.",
        ],
        checks: [
          "Tu sais quel plan correspond au nombre de sous-comptes et au besoin de facturer.",
          "La facture de tes clients est la tienne. Elle ne recopie pas celle de l’éditeur.",
          "La base légale d’écriture est identifiable avant le premier workflow.",
          "Le domaine d’envoi n’est pas « pour plus tard ».",
          "Les élèves, s’il y en a, ont un test d’accès prévu avant l’annonce.",
          "Tu as une page pour chaque décision, plutôt qu’un seul article qui promet tout.",
        ],
      },
    ],
    faq: [
      {
        q: "GoHighLevel existe-t-il en français ?",
        a: "L’interface est surtout en anglais. Les pages, les emails, les workflows et l’accompagnement peuvent être en français. C’est le setup qui est francophone, pas une version française de l’éditeur.",
      },
      {
        q: "Qu’est-ce qu’un expert GoHighLevel vérifie en France ?",
        a: "Le plan, la facture en euros, le droit d’écrire, le domaine d’envoi, l’accès aux cours, et seulement ensuite les automatisations. Pas les templates en premier.",
      },
      {
        q: "GoHighLevel a-t-il un tarif publié par Promarket ?",
        a: "Non. Promarket ne publie pas de montant. Le modèle est des frais de setup, puis un abonnement mensuel pour la mise à disposition des outils et la maintenance.",
      },
      {
        q: "Où sont les avis GoHighLevel ?",
        a: "Pas sur ce site. ProMarket ne publie pas d’avis clients. Les vidéos d’affiliés et les retours américains ne décrivent pas ta facture, tes SMS ni tes élèves. On juge l’outil sur la méthode, pas sur une note.",
      },
      {
        q: "Faut-il être à Nantes pour travailler avec ProMarket ?",
        a: "Non. Le siège est à Nantes, le travail est à distance. On intervient pour les équipes francophones en France, en Belgique, en Suisse et au Canada.",
      },
    ],
  },
  {
    slug: "seo-geo-agent-ia-gohighlevel",
    title: "SEO, GEO et agents IA sur GoHighLevel",
    h1: "SEO, GEO et agent IA sur un compte GoHighLevel",
    description:
      "Référencer un tunnel GoHighLevel, être cité par les IA, et brancher un agent qui écrit dans le pipeline. Trois métiers, dans cet ordre.",
    category: "Acquisition",
    date: "2026-10-06",
    updated: "2026-10-20",
    reading: "8 min",
    nav: "SEO, GEO, agents IA",
    related: ["gohighlevel-france", "delivrabilite-email-gohighlevel", "prix-gohighlevel-france"],
    bridges: ["/services", "/contact", "/crm-coachs"],
    keywords: ["SEO GoHighLevel", "GEO GoHighLevel", "agent IA GoHighLevel", "référencement funnel GHL"],
    lead: "Un tunnel qui convertit et une page que personne ne trouve, ce n’est pas un système. Le SEO amène Google. Le GEO rend la page citable. L’agent IA écrit dans le pipeline, ou ce n’est pas un agent.",
    sections: [
      {
        h: "SEO : des pages que Google peut lire",
        p: [
          "Les pages GoHighLevel sont souvent des one-pages lourdes, sans titre unique, sans balise canonique, sans maillage. Google indexe mal un tunnel cloné vingt fois avec le même H1. Chaque offre a une URL, un title, une meta description et un seul sujet. La mise en œuvre commerciale est dans l’[offre](/services).",
          "On relie le contenu qui explique (guide, articles, pages problèmes) aux pages qui vendent. Le domaine du tunnel et le domaine du site ne doivent pas se cannibaliser. La vitesse compte : une page pleine de scripts de tracking sans contenu ne se positionne pas sur « GoHighLevel France » ni sur ton offre. Le décor français, lui, est dans [GoHighLevel en France](/guide/gohighlevel-france).",
        ],
      },
      {
        h: "GEO : être cité par les IA",
        p: [
          "Le GEO (generative engine optimization) consiste à être repris par ChatGPT, Perplexity, Gemini ou les aperçus IA de Google. Ces moteurs citent les pages qui définissent un sujet clairement, datent les faits, répondent à des questions précises et nomment l’auteur.",
          "Un paragraphe flou du type « nous sommes les meilleurs » n’est pas citable. Un paragraphe qui dit qui met l’outil à disposition, quel montage débloque le SaaS mode, et qui l’écrit, l’est. On structure tes pages avec des définitions, une FAQ et des preuves, pas avec une liste de mots-clés. Le modèle sans montant est dans le guide [mise à disposition](/guide/prix-gohighlevel-france).",
        ],
      },
      {
        h: "Agents IA branchés sur le CRM",
        p: [
          "L’agent mis en place par Promarket est un Grok Bot connecté à GoHighLevel par MCP. L’équipe prospecte, publie, répond, suit les leads et fait le reporting. S’il ne met pas à jour le contact, ce n’est pas un agent, c’est un chat. Encore faut-il que le pipeline existe : pour un coach, c’est le sujet de [CRM pour coachs](/crm-coachs). Cet agent est distinct de l’agent conversationnel intégré à GoHighLevel.",
          "On le cadre : ce qu’il a le droit de dire, quand il passe la main à un humain, comment il gère un élève déjà client. Le scénario se teste sur un petit volume avant d’ouvrir le robinet. Le compte se pose d’abord, dans l’[offre](/services). L’agent en fait partie. Le décor français du compte est dans [GoHighLevel en France](/guide/gohighlevel-france).",
        ],
      },
      {
        h: "Trois couches, dans cet ordre",
        p: [
          "On ne branche pas un agent sur une page que Google ne peut pas lire, ni un article GEO sur un compte dont le pipeline est vide. La mise en œuvre est dans l’[offre](/services). Ici, c’est l’ordre. Le domaine du tunnel et le domaine du site ne doivent pas viser le même sujet avec le même titre. Une offre, une URL, un H1.",
          "Le même principe vaut pour ce site. Le [guide](/guide) oriente vers une page par décision : mise à disposition, migration, CRM, conformité. On ne publie pas de tarif. On lie. Une page qui veut tout classer ne classe rien. L’agent, lui, n’écrit que dans un pipeline déjà nommé, celui d’un [coach](/crm-coachs) ou d’un compte que le [transfert](/migration-gohighlevel) a rendu lisible.",
          "Une page citable dit une chose vérifiable : quel montage débloque le SaaS mode, comment se règle un envoi, qui écrit la page. Elle date les faits. Elle nomme l’auteur. Un paragraphe « nous sommes les meilleurs » n’est pas repris. Promarket ne publie pas de montant, et n’en convertit pas pour « faire simple ».",
        ],
        table: {
          caption: "SEO, GEO et agent : ce que chacun produit, et ce qu’il exige avant.",
          head: ["Couche", "Résultat visé", "Condition"],
          rows: [
            ["SEO", "Une page que Google peut indexer et classer", "Title, H1, canonique, un sujet, du texte, peu de scripts inutiles"],
            ["GEO", "Une page qu’une IA peut citer sans l’inventer", "Définition, date, FAQ, auteur, faits sourcés"],
            ["Agent IA", "Un lead qualifié, un créneau, une ligne dans le pipeline", "Étapes, champs, offre, et un humain quand le cas sort du cadre"],
          ],
        },
        steps: [
          "Donne à chaque offre une URL, un title et un seul H1. Supprime les clones qui répètent le même message.",
          "Écris le premier paragraphe comme une définition : ce que la page décide, pour qui, et ce qu’elle ne promet pas.",
          "Ajoute une FAQ dont les réponses tiennent seules, sans renvoyer à « contactez-nous » pour le fait principal.",
          "Relie la page qui explique à la page de l’[offre](/services), dans les deux sens.",
          "Pose le pipeline et les champs avant l’agent. Pour un coach, c’est le [CRM](/crm-coachs).",
          "Écris ce que l’agent a le droit de dire, et le cas où il passe la main. Teste sur un petit volume : les messages et l’agent ne partent pas en masse le premier jour.",
          "Relis plus tard. Une page datée qui cite un tarif n’a plus sa place : Promarket n’en publie pas.",
        ],
        bullets: [
          "Vingt tunnels avec le même H1. Google n’en choisit aucun clairement, et toi non plus.",
          "Coller un chat qui ne met pas à jour le contact, et l’appeler agent.",
          "Laisser l’agent promettre un prix, un délai ou un accès que le compte ne sait pas tenir.",
          "Remplir la page de scripts de tracking et d’un paragraphe de mots-clés. La vitesse et le texte comptent.",
          "Demander à une IA de « trouver des clients » alors que le domaine d’envoi n’est pas authentifié. L’agent ne répare pas la [délivrabilité](/guide/delivrabilite-email-gohighlevel).",
        ],
        checks: [
          "Chaque offre a une URL et un H1 uniques.",
          "Le premier paragraphe définit le sujet sans adjectif creux.",
          "La FAQ répond à la question, avec un fait daté quand il y a un chiffre.",
          "Le pipeline existe avant l’agent, avec les étapes réelles de la vente.",
          "La liste de ce que l’agent peut dire est écrite, ainsi que le passage à un humain.",
          "Le test porte sur un petit volume, parce que la voix et les SMS se paient à l’usage.",
          "Les pages ne citent pas de tarif. Le modèle de mise à disposition est dans le guide dédié, sans montant.",
        ],
      },
    ],
    faq: [
      {
        q: "Le SEO suffit-il sans GEO ?",
        a: "Non si tes prospects demandent déjà à une IA quel outil ou quel prestataire choisir. Le SEO reste la base. Le GEO reprend les mêmes pages, à condition qu’elles soient précises, datées et sourcées.",
      },
      {
        q: "L’agent IA remplace-t-il le setup GoHighLevel ?",
        a: "Non. Sans pipeline, sans champs et sans offre claire, l’agent invente. On pose d’abord le compte, ensuite l’agent.",
      },
      {
        q: "Un tunnel GoHighLevel peut-il se référencer ?",
        a: "Oui s’il a un sujet, un title, une canonique et du texte. Un clone répété vingt fois avec le même H1 s’indexe mal. Le domaine du tunnel ne doit pas viser le même sujet que le site.",
      },
      {
        q: "Que doit contenir une page pour être citée par une IA ?",
        a: "Une définition nette, des faits datés, une FAQ et un auteur. Un slogan n’est pas citable. Un paragraphe qui dit qui met l’outil à disposition, sans inventer un montant, l’est.",
      },
      {
        q: "L’agent peut-il envoyer des SMS tout de suite ?",
        a: "Pas à grande échelle. Le téléphone et l’IA sont à l’usage. On teste un petit volume, avec un droit d’écrire déjà établi, puis on ouvre le robinet.",
      },
    ],
  },
];

const MONTHS = [
  "janvier", "février", "mars", "avril", "mai", "juin",
  "juillet", "août", "septembre", "octobre", "novembre", "décembre",
];

export function formatLongDate(iso) {
  const [year, month, day] = iso.split("-").map(Number);
  return `${day} ${MONTHS[month - 1]} ${year}`;
}

function countWords(value) {
  return String(value || "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .split(/\s+/)
    .filter(Boolean).length;
}

export function guideWordCount(guide) {
  const parts = [guide.h1 || guide.title, guide.lead];
  for (const section of guide.sections || []) {
    parts.push(
      section.h,
      ...(section.p || []),
      ...(section.steps || []),
      ...(section.bullets || []),
      ...(section.checks || []),
    );
    if (section.table) {
      parts.push(section.table.caption || "", ...(section.table.head || []));
      for (const row of section.table.rows || []) parts.push(...row);
    }
  }
  for (const item of guide.faq || []) parts.push(item.q, item.a);
  return parts.reduce((total, part) => total + countWords(part), 0);
}

export function guideReading(guide) {
  return `${Math.max(1, Math.round(guideWordCount(guide) / 200))} min`;
}

export function getGuide(slug) {
  return guides.find((g) => g.slug === slug);
}
