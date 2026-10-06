export const site = {
  name: "ProMarket",
  url: "https://promarket.fr",
  email: "contact@promarket.fr",
  phone: "",
  editor: "MCA",
  brand: "Promarket",
  legalForm: "SARL",
  capital: "1 000 €",
  siren: "853091262",
  siret: "85309126200032",
  rcs: "Nantes 853 091 262",
  naf: "66.22Z",
  address: "Bureau 3, 2 place Jean V, 44100 Nantes, France",
  founder: "Aymeric Chantrel",
};

export const nav = [
  { href: "/guide", label: "GoHighLevel" },
  { href: "/services", label: "Services" },
  { href: "/methode", label: "Méthode" },
  { href: "/referencement", label: "SEO & GEO" },
];

export const indexableRoutes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/agence-gohighlevel-nantes", changeFrequency: "monthly", priority: 0.8 },
  { path: "/migration-gohighlevel", changeFrequency: "monthly", priority: 0.8 },
  { path: "/crm-coachs", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "weekly", priority: 0.8 },
  { path: "/methode", changeFrequency: "monthly", priority: 0.7 },
  { path: "/guide", changeFrequency: "weekly", priority: 0.8 },
  { path: "/audit", changeFrequency: "monthly", priority: 0.7 },
  { path: "/instituts", changeFrequency: "monthly", priority: 0.6 },
  { path: "/referencement", changeFrequency: "monthly", priority: 0.7 },
];
