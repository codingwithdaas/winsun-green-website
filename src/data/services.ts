export type ServiceId = "wind" | "solar" | "om" | "sem" | "transformer";

export const servicesOverview = [
  {
    id: "wind" as ServiceId,
    icon: "Wind",
    title: "Wind energy",
    description: "EPC, O&M, generator replacement & blade refurbishment.",
    href: "/services#wind",
  },
  {
    id: "solar" as ServiceId,
    icon: "Sun",
    title: "Solar energy",
    description: "Ground-mount & rooftop EPC, O&M, SCADA monitoring.",
    href: "/services#solar",
  },
  {
    id: "om" as ServiceId,
    icon: "Wrench",
    title: "O&M services",
    description: "Comprehensive, semi-comprehensive & tailor-made OMS packages.",
    href: "/services#om",
  },
  {
    id: "sem" as ServiceId,
    icon: "Gauge",
    title: "SEM solutions",
    description: "Special energy meter supply, install, commissioning & net-metering liaison.",
    href: "/services#sem",
  },
  {
    id: "transformer" as ServiceId,
    icon: "Zap",
    title: "Transformers",
    description: "LAMCO-manufactured power & distribution transformers, 200kVA–25MVA.",
    href: "/services#transformer",
  },
] as const;

export const windServices = {
  eyebrow: "01 · Wind energy solutions",
  title: "Comprehensive wind EPC & O&M",
  description:
    "WinSun specialises in O&M contracts that cover every aspect of a wind investment — minimising risk, maximising uptime, regardless of brand, technology or original EPC.",
  bullets: [
    "Wind EPC & BOP services",
    "Generator de-erection, replacement & refurbishment",
    "Blade refurbishment via skylift (crane-less)",
    "Gearbox endoscopy & repairs",
    "Drone-based blade & tower inspection",
    "Remote real-time monitoring & performance optimisation",
  ],
  stats: [
    { value: "300 MW", label: "single largest wind BOP contract" },
    { value: "7", label: "turbine OEMs supported" },
    { value: "600KW–2.1MW", label: "turbine class range serviced" },
  ],
  contracts: [
    { client: "ReNew Power", capacity: "300 MW", location: "Maharashtra", scope: "Wind BOP" },
    { client: "ReNew Power", capacity: "140 MW", location: "Gujarat", scope: "Wind BOP" },
    { client: "ReNew Power", capacity: "118 MW", location: "Madhya Pradesh", scope: "WTG O&M — G97 & G114, 2.1 MW" },
    { client: "ReNew Power", capacity: "51 MW", location: "Rajasthan", scope: "WTG O&M — Regen 1.5 MW" },
    { client: "Karma Energy / Kiran Gems", capacity: "18 MW", location: "Beed, Maharashtra", scope: "Wind O&M — Vestas RRB 600 KW" },
    { client: "Tata Power", capacity: "1.5 MW", location: "Satara", scope: "Generator replacement" },
  ],
} as const;

export const solarServices = {
  eyebrow: "02 · Solar energy solutions",
  title: "Ground-mount, rooftop & full-lifecycle O&M",
  description:
    "One of India's established independent solar operators, covering EPC delivery through daily SCADA-monitored O&M.",
  bullets: [
    "Ground-mounted & rooftop solar EPC",
    "Daily SCADA monitoring & DGR reporting",
    "Module thermography & I-V curve testing",
    "Wet & dry module cleaning cycles",
    "Inverter, LT & HT panel testing",
    "Monthly JMR, RCA & safety incident reporting",
  ],
  stats: [
    { value: "50 MWp", label: "largest single solar EPC" },
    { value: "40 MWp", label: "largest O&M contract (BVG India)" },
    { value: "11+", label: "active solar O&M sites" },
  ],
  contracts: [
    { client: "ReNew Power", capacity: "50 MWp", location: "Madhya Pradesh", scope: "Solar I&C" },
    { client: "Eurja Energy", capacity: "17 MWp", location: "Pune", scope: "Solar EPC" },
    { client: "BVG India", capacity: "40 MWp", location: "Chhattisgarh", scope: "Solar O&M" },
    { client: "Saatvik Group", capacity: "12 MWp", location: "Odisha", scope: "Solar O&M" },
    { client: "Rayzon Energy", capacity: "7.5 MWp", location: "Surat", scope: "Solar O&M" },
    { client: "Cleanmax", capacity: "599 KWp", location: "Pune", scope: "Solar O&M" },
  ],
} as const;

export const omPackages = [
  {
    title: "Comprehensive OMS",
    points: [
      "Unscheduled maintenance of wind & solar",
      "Cleaning, grass cutting, seasonal tilt, consumable & spare support for solar",
      "SS and HV/EHV maintenance",
      "Value-added services (thermography, I-V curve testing etc.)",
      "Monitoring and reporting",
      "MBD insurance",
      "Consumable and spare support",
      "Corrective / preventive maintenance",
      "Covers all expenses and MBD works package",
    ],
  },
  {
    title: "Semi-comprehensive OMS",
    points: [
      "Covers basic O&M and MBD in client's scope",
      "Provision of technical manpower (engineers and/or technicians) as required by the client",
      "Corrective / preventive maintenance",
    ],
  },
  {
    title: "Tailor-made OMS package",
    points: ["Package designed entirely around the client's specific requirements"],
  },
] as const;

export const semServices = {
  eyebrow: "03 · SEM solutions",
  title: "Special Energy Meter — supply to liaison",
  description:
    "Expertise in supply, erection and commissioning of SEM for commercial & industrial (C&I) clients, including net-metering liaison work.",
  bullets: [
    "SEM supply & installation",
    "Commissioning & testing",
    "Net-metering liaison with discoms",
    "Ongoing maintenance & support",
  ],
  deployments: [
    { client: "GRP Ltd.", location: "Sangli, Maharashtra" },
    { client: "New Melting Centre", location: "Kagal, Maharashtra" },
  ],
} as const;

export const transformerServices = {
  eyebrow: "04 · Transformer solutions — by LAMCO",
  title: "BIS-ISO certified manufacturing, in-house",
  description:
    "LAMCO Transformers Pvt. Ltd., WinSun's manufacturing arm since 2016, with 1,000+ installations and 20+ years of combined transformer expertise.",
  bullets: [
    "Power transformers — up to 25 MVA",
    "Solar transformers — up to 20 MVA",
    "Wind transformers — up to 5 MVA",
    "Distribution & compact substations — up to 1,600 kVA",
    "Dry-type & dual-ratio / furnace transformers",
  ],
  stats: [
    { value: "200kVA–25MVA", label: "manufacturing range" },
    { value: "11/22/33kV", label: "voltage classes" },
    { value: "1,000+", label: "installations to date" },
  ],
  products: [
    { name: "Power transformers", range: "Up to 25 MVA" },
    { name: "Solar transformers", range: "Up to 20 MVA" },
    { name: "Wind transformers", range: "Up to 5 MVA" },
    { name: "Substation transformers", range: "Up to 20 MVA" },
    { name: "Compact sub-station", range: "Up to 1,600 kVA" },
    { name: "Distribution transformers", range: "Up to 630 kVA" },
    { name: "Dry type transformers", range: "Up to 1,250 kVA" },
    { name: "Dual ratio & furnace transformers", range: "Up to 2,500 kVA" },
  ],
} as const;

export const specialServices = [
  "Asset management services",
  "Blade refurbishment & reconditioning",
  "Endoscopy of gearbox & repairs",
  "Generator de-re-erection & repairs",
  "Large corrective — crane-less solution for erection & derection",
  "Yield enhancement through innovation",
  "Health audit & due diligence of turbines",
  "Tower torquing / LEP work",
  "Drone inspections of WTG & PV panel",
  "Transformers onsite servicing and repairs",
  "Operations & maintenance of wind and solar energy farms",
  "Special energy meter — installation and net metering liaison work",
  "Wind mast turnkey projects",
  "Sale and purchase of wind mill and solar system",
] as const;
