export interface Client {
  name: string;
  logo?: string;
}

export const clients: Client[] = [
  { name: "ReNew Power", logo: "/clients/ReNew-Power-Logo.png" },
  { name: "Tata Power", logo: "/clients/Tata-Power-Logo.png" },
  { name: "Voltas (A Tata Enterprise)", logo: "/clients/Voltas-Tata-Logo.png" },
  { name: "Greenko", logo: "/clients/Greenko-Logo.png" },
  { name: "Polycab", logo: "/clients/Polycab-Logo.jpg" },
  { name: "Bajaj", logo: "/clients/Bajaj-Logo.png" },
  { name: "GRP Ltd.", logo: "/clients/GRP-Logo.png" },
  { name: "Laxmi Organic Industries", logo: "/clients/Laxmi-Organic-Industries-LTD-Logo.jpg" },
  { name: "Karma Energy", logo: "/clients/Karma-Energy-Logo.png" },
  { name: "Saatvik", logo: "/clients/Saatvik-Logo.png" },
  { name: "Varroc", logo: "/clients/Varroc-Logo.png" },
  { name: "Rama Industries", logo: "/clients/Rama-Industries-Logo.png" },
  { name: "Nyati", logo: "/clients/Nyati-Logo.png" },
  { name: "CLP India", logo: "/clients/CLP-India-Logo.png" },
  { name: "Apraava Energy", logo: "/clients/Apraava-Energy-Logo.png" },
  { name: "Pidilite", logo: "/clients/Pidilite-Logo.png" },
  { name: "Agrawal Group", logo: "/clients/Agrawal-Group-Logo.png" },
  { name: "New Melting Centre", logo: "/clients/New-Melting-Centre-Logo.png" },
  { name: "Alfa Biomed India", logo: "/clients/Alfa-Biomed-India-Logo.png" },
  { name: "KPS", logo: "/clients/KPS-Logo.png" },
  { name: "Siva Windturbine India", logo: "/clients/Siva-Windturbine-India-Logo.png" },
  { name: "Everrenew Energy", logo: "/clients/Everrenew-Energy-Logo.png" },
];

export const clientIndustries = [
  "Independent power producers",
  "Diamond & gems manufacturing",
  "Chemicals & specialty industrials",
  "Consumer durables & electricals",
  "Cable & wire manufacturing",
  "Adhesives & construction chemicals",
  "Real estate & hospitality",
  "Foundries & metal casting",
] as const;
