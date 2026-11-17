export const site = {
  name: "Sai Kiran Poultry Equipments",
  shortName: "Sai Kiran",
  legalName: "Sai Kiran Poultry Equipments",
  tagline: "Poultry equipment manufacturer, Sangareddy, Telangana",
  description:
    "Manufacturer of automatic pan feeders, nipple drinking lines, 50-inch cone fans and turnkey environment-controlled poultry houses for commercial broiler and layer farms across Telangana.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://saikiranequipments.in").replace(/\/$/, ""),
  established: 2009,
  phone: {
    display: "+91 98765 43210",
    tel: "+919876543210",
    whatsapp: "919876543210",
  },
  email: "sales@saikiranequipments.in",
  hours: "Mon–Sat, 09:00–18:30 IST",
  office: {
    label: "Works & registered office",
    lines: [
      "Plot 14, Phase II, IDA Bollaram",
      "Sangareddy district, Telangana 502325",
    ],
  },
  warehouse: {
    label: "Dispatch warehouse",
    lines: [
      "Survey 118, NH-65 service road, Kothur",
      "Ranga Reddy district, Telangana 509228",
    ],
  },
} as const;

export function waLink(message: string): string {
  return `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  quote:
    "Hello Sai Kiran Poultry Equipments, I would like a quote for farm equipment.",
  turnkey:
    "Hello Sai Kiran Poultry Equipments, I would like a turnkey quote for an EC poultry house. Please share the shed parameters you need from me.",
  product: (name: string) =>
    `Hello Sai Kiran Poultry Equipments, I am interested in inquiring about ${name}. Please share pricing and bulk delivery details.`,
  brochure: (name: string) =>
    `Hello Sai Kiran Poultry Equipments, please send me the ${name} brochure and current pricing.`,
  service:
    "Hello Sai Kiran Poultry Equipments, I need spares or service support for equipment already installed on my farm.",
};

export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: "Products", href: "/products" },
  { label: "Turnkey solutions", href: "/turnkey-solutions" },
  { label: "Downloads", href: "/downloads" },
  { label: "About", href: "/about" },
];

export const footerNav = {
  catalog: [
    { label: "Feeding systems", href: "/products/feeding-systems" },
    { label: "Drinking systems", href: "/products/drinking-systems" },
    { label: "Climate control", href: "/products/climate-control" },
    { label: "Housing & turnkey", href: "/products/housing-turnkey" },
    { label: "Transport & accessories", href: "/products/transport-accessories" },
  ],
  company: [
    { label: "About the works", href: "/about" },
    { label: "Turnkey solutions", href: "/turnkey-solutions" },
    { label: "Brochures & manuals", href: "/downloads" },
    { label: "Contact & locations", href: "/contact" },
  ],
} as const;
