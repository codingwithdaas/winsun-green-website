export type ProjectCategory =
  | "Wind O&M"
  | "Wind BOP"
  | "Solar EPC"
  | "Solar O&M"
  | "SEM"
  | "Transformer";

export interface Project {
  client: string;
  capacity: string;
  location: string;
  scope: string;
  category: ProjectCategory;
}

export const projects: Project[] = [
  { client: "ReNew Power", capacity: "300 MW", location: "Maharashtra", scope: "Wind BOP", category: "Wind BOP" },
  { client: "ReNew Power", capacity: "140 MW", location: "Gujarat", scope: "Wind BOP", category: "Wind BOP" },
  { client: "ReNew Power", capacity: "150 MW", location: "Maharashtra", scope: "Wind BOP", category: "Wind BOP" },
  { client: "ReNew Power", capacity: "50.8 MW", location: "Maharashtra", scope: "Wind BOP", category: "Wind BOP" },
  { client: "ReNew Power", capacity: "35.2 MW", location: "Gujarat", scope: "Wind BOP", category: "Wind BOP" },
  { client: "ReNew Power", capacity: "118 MW", location: "Madhya Pradesh", scope: "WTG O&M — G97 & G114, 2.1 MW", category: "Wind O&M" },
  { client: "ReNew Power", capacity: "51 MW", location: "Rajasthan", scope: "WTG O&M — Regen 1.5 MW", category: "Wind O&M" },
  { client: "ReNew Power", capacity: "18 MW", location: "Madhya Pradesh", scope: "WTG O&M — Regen 1.5 MW", category: "Wind O&M" },
  { client: "Karma Energy / Kiran Gems", capacity: "18 MW", location: "Beed, Maharashtra", scope: "Wind O&M — Vestas RRB 600 KW", category: "Wind O&M" },
  { client: "HVK International / Pankaj Diamonds", capacity: "16.2 MW", location: "Gujarat", scope: "Wind O&M — Vestas RRB 600 KW", category: "Wind O&M" },
  { client: "Krishna Power / Siva Wind Power", capacity: "7.8 MW", location: "Satara", scope: "Wind O&M — Vestas RRB 600 KW", category: "Wind O&M" },
  { client: "Suyog Development Corp.", capacity: "1.4 MW", location: "Satara", scope: "Wind O&M — Vestas RRB 600 KW", category: "Wind O&M" },
  { client: "Tata Power", capacity: "1.5 MW", location: "Satara", scope: "Generator replacement", category: "Wind O&M" },
  { client: "Karma Energy", capacity: "600 KW", location: "Satara", scope: "Generator replacement", category: "Wind O&M" },
  { client: "Everrenew Energy", capacity: "850 KW", location: "Kolhapur", scope: "Blade repair", category: "Wind O&M" },

  { client: "ReNew Power", capacity: "50 MWp", location: "Madhya Pradesh", scope: "Solar I&C", category: "Solar EPC" },
  { client: "Eurja Energy", capacity: "17 MWp", location: "Pune", scope: "Solar I&C", category: "Solar EPC" },
  { client: "Mahagenco", capacity: "12 MWp", location: "Pune", scope: "Solar EPC", category: "Solar EPC" },
  { client: "Eligent Enterprise", capacity: "3 MWp", location: "Pune / Mahad", scope: "Solar I&C", category: "Solar EPC" },
  { client: "Titan Laboratory", capacity: "3 MWp", location: "Pune", scope: "Solar EPC (open access)", category: "Solar EPC" },
  { client: "Alfa Factory", capacity: "850 KWp", location: "Pune", scope: "Solar EPC", category: "Solar EPC" },
  { client: "Amplus Solar", capacity: "320 KWp", location: "Nashik", scope: "Solar I&C", category: "Solar EPC" },
  { client: "Borgaon site", capacity: "17 MWp", location: "Maharashtra", scope: "Solar I&C", category: "Solar EPC" },

  { client: "BVG India", capacity: "40 MWp", location: "Chhattisgarh", scope: "Solar O&M", category: "Solar O&M" },
  { client: "Saatvik Group", capacity: "12 MWp", location: "Odisha", scope: "Solar O&M", category: "Solar O&M" },
  { client: "Rayzon Energy", capacity: "7.5 MWp", location: "Surat", scope: "Solar O&M", category: "Solar O&M" },
  { client: "Saatvik Group", capacity: "3.14 MWp", location: "Raipur", scope: "Solar O&M", category: "Solar O&M" },
  { client: "Saatvik Group", capacity: "2.14 MWp", location: "Tamnar", scope: "Solar O&M", category: "Solar O&M" },
  { client: "Prosumers Solar", capacity: "2 MWp", location: "Pune", scope: "Solar O&M", category: "Solar O&M" },
  { client: "Prima Group", capacity: "980 KWp", location: "Pune", scope: "Solar O&M", category: "Solar O&M" },
  { client: "Alfa Factory", capacity: "850 KWp", location: "Pune", scope: "Solar O&M", category: "Solar O&M" },
  { client: "Cleanmax", capacity: "599 KWp", location: "Pune", scope: "Solar O&M", category: "Solar O&M" },
  { client: "Alfa Warehouse", capacity: "250 KWp", location: "Pune", scope: "Solar O&M", category: "Solar O&M" },
  { client: "Rama Industries", capacity: "230 KWp", location: "Pune", scope: "Solar O&M", category: "Solar O&M" },

  { client: "GRP Ltd.", capacity: "SEM", location: "Sangli, Maharashtra", scope: "Supply, erection & commissioning", category: "SEM" },
  { client: "New Melting Centre", capacity: "SEM", location: "Kagal, Maharashtra", scope: "Supply, erection & commissioning", category: "SEM" },

  { client: "LAMCO Transformers", capacity: "200kVA–25MVA", location: "Pan-India", scope: "Power transformer manufacturing", category: "Transformer" },
];

export const projectFilters: { label: string; value: ProjectCategory | "All" }[] = [
  { label: "All projects", value: "All" },
  { label: "Wind O&M", value: "Wind O&M" },
  { label: "Wind BOP", value: "Wind BOP" },
  { label: "Solar EPC", value: "Solar EPC" },
  { label: "Solar O&M", value: "Solar O&M" },
  { label: "SEM", value: "SEM" },
  { label: "Transformers", value: "Transformer" },
];

export const featuredProjects: Project[] = [
  { client: "ReNew Power", capacity: "300 MW", location: "Maharashtra", scope: "Wind BOP", category: "Wind BOP" },
  { client: "ReNew Power", capacity: "50 MWp", location: "Madhya Pradesh", scope: "Solar I&C", category: "Solar EPC" },
  { client: "BVG India", capacity: "40 MWp", location: "Chhattisgarh", scope: "Solar O&M", category: "Solar O&M" },
];

export const assetsForSale = {
  wind: {
    title: "Wind projects for sale",
    total: "112.8",
    states: [
      { state: "Maharashtra", capacity: "49.3" },
      { state: "Gujarat", capacity: "14.2" },
      { state: "Madhya Pradesh", capacity: "9.3" },
      { state: "Rajasthan", capacity: "20.7" },
      { state: "Karnataka", capacity: "9.7" },
      { state: "Andhra Pradesh", capacity: "9.6" },
    ],
    note: "Private land · commissioned 2006–2019 · sale to board / group capex or opex",
  },
  solar: {
    title: "Solar projects for sale",
    total: "140",
    states: [
      { state: "Maharashtra", capacity: "50" },
      { state: "Gujarat", capacity: "20" },
      { state: "Madhya Pradesh", capacity: "10" },
      { state: "Rajasthan", capacity: "10" },
      { state: "Karnataka", capacity: "50" },
    ],
    note: "Private land · commissioned 2006–2024 · sale to board / group capex or opex",
  },
} as const;

export const assetManagementByState = [
  { state: "Gujarat", site: "Surajbari", serviceType: "WTG & BOP O&M", model: "Vestas RRB V47", capacityMW: 15.6, type: "Wind" },
  { state: "Gujarat", site: "Babariya", serviceType: "Sub-Station & 33kV HT line O&M", model: "NA", capacityMW: 35.2, type: "Wind" },
  { state: "Gujarat", site: "Otha phase 1&2", serviceType: "Sub-Station & 33kV HT line O&M", model: "NA", capacityMW: 20, type: "Solar" },
  { state: "Gujarat", site: "Otha phase 1&2", serviceType: "Sub-Station & 33kV HT line O&M", model: "NA", capacityMW: 140, type: "Wind" },
  { state: "Maharashtra", site: "Ahmednagar", serviceType: "WTG & BOP O&M", model: "Vestas RRB V47", capacityMW: 19.8, type: "Wind" },
  { state: "Maharashtra", site: "Satara", serviceType: "WTG O&M", model: "Vestas RRB V47", capacityMW: 7.8, type: "Wind" },
  { state: "Maharashtra", site: "Satara", serviceType: "WTG O&M", model: "Gamesa Ae59", capacityMW: 1.8, type: "Wind" },
  { state: "Maharashtra", site: "Satara", serviceType: "WTG O&M", model: "Leitner LTW-77", capacityMW: 1.5, type: "Wind" },
  { state: "Maharashtra", site: "Dhule", serviceType: "WTG OMS Support", model: "Suzlon S66", capacityMW: 5, type: "Wind" },
  { state: "Maharashtra", site: "Beed", serviceType: "Substation & 33kV HT line O&M", model: "NA", capacityMW: 52.8, type: "Wind" },
  { state: "Maharashtra", site: "Satara", serviceType: "O&M", model: "NA", capacityMW: 1.8, type: "Solar" },
  { state: "Karnataka", site: "Bableshwar", serviceType: "WTG O&M Support", model: "SGRE G-97 & G-114", capacityMW: 10, type: "Wind" },
  { state: "Karnataka", site: "Bapuram", serviceType: "WTG O&M Support", model: "SGRE G-97 & G-114", capacityMW: 50, type: "Wind" },
  { state: "Karnataka", site: "Nirlooti", serviceType: "WTG O&M Support", model: "SGRE G-97 & G-114", capacityMW: 15, type: "Wind" },
  { state: "Karnataka", site: "Belagavi", serviceType: "O&M", model: "Ground", capacityMW: 10, type: "Solar" },
  { state: "Madhya Pradesh", site: "Amba", serviceType: "WTG & BOP O&M", model: "NA", capacityMW: 118, type: "Wind" },
  { state: "Rajasthan", site: "—", serviceType: "WTG O&M Support", model: "Gamesa G97 & G114", capacityMW: 29, type: "Wind" },
  { state: "Rajasthan", site: "—", serviceType: "WTG O&M Support", model: "Gamesa G97 & G114", capacityMW: 4.9, type: "Wind" },
  { state: "Chhattisgarh", site: "Raipur", serviceType: "O&M", model: "Rooftop", capacityMW: 8, type: "Solar" },
  { state: "Chhattisgarh", site: "Tamnar", serviceType: "O&M", model: "Rooftop", capacityMW: 10.5, type: "Solar" },
  { state: "Odisha", site: "Angul", serviceType: "O&M", model: "Rooftop", capacityMW: 20, type: "Solar" },
];
