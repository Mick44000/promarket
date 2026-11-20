export const site = {
  name: "ProMarket",
  url: "https://promarket.fr",
  email: "contact@promarket.fr",
  phone: "",
  editor: "MCA",
  brand: "Promarket",
  legalForm: "EURL",
  capital: "1 000 €",
  siren: "853091262",
  siret: "85309126200032",
  rcs: "Nantes 853 091 262",
  naf: "66.22Z",
  address: "Bureau 3, 2 place Jean V, 44100 Nantes, France",
  founder: "Aymeric Chantrel",
};

// Formulaire GoHighLevel « Contactez nous » du sous-compte Promarket.
// Tous les CTA du site pointent vers la page qui embarque cet identifiant.
export const ghlForm = {
  id: "nk7SwUp8ocxz5FZlz3GV",
  name: "Contactez nous",
};

export const cta = {
  href: "/contact",
  label: "Demander une étude",
  alt: "Être rappelé",
};

export const nav = [
  { href: "/services", label: "Offre" },
  { href: "/methode", label: "Méthode" },
  { href: "/guide", label: "Guide" },
];

// Indexable pages only. The unsubscribe page is a noindex utility and stays out.
export const indexableRoutes = [
  { path: "/", changeFrequency: "weekly", priority: 1, lastModified: "2026-11-19" },
  { path: "/services", changeFrequency: "weekly", priority: 0.9, lastModified: "2026-11-19" },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7, lastModified: "2026-11-19" },
  { path: "/methode", changeFrequency: "monthly", priority: 0.7, lastModified: "2026-11-19" },
  { path: "/migration-gohighlevel", changeFrequency: "monthly", priority: 0.7, lastModified: "2026-11-19" },
  { path: "/crm-coachs", changeFrequency: "monthly", priority: 0.7, lastModified: "2026-11-19" },
  { path: "/agence-gohighlevel-nantes", changeFrequency: "monthly", priority: 0.7, lastModified: "2026-11-19" },
  { path: "/guide", changeFrequency: "weekly", priority: 0.8, lastModified: "2026-11-19" },
  { path: "/realisations", changeFrequency: "monthly", priority: 0.6, lastModified: "2026-11-20" },
  { path: "/realisations/fenua-spot", changeFrequency: "monthly", priority: 0.7, lastModified: "2026-11-20" },
  { path: "/realisations/mon-courtier-assure", changeFrequency: "monthly", priority: 0.7, lastModified: "2026-11-20" },
];
