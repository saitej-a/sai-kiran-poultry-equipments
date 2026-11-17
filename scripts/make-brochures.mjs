/**
 * Generates the placeholder PDF brochures served from /brochures.
 * Each file is a single-page document with the brochure title, scope and a
 * contents summary so download links resolve until the printed artwork lands.
 *
 * Usage: node scripts/make-brochures.mjs
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const root = join(dirname(new URL(import.meta.url).pathname), "..", "public", "brochures");
mkdirSync(root, { recursive: true });

const docs = [
  {
    file: "master-catalogue.pdf",
    title: "Master Product Catalogue 2026",
    meta: "SAI KIRAN POULTRY EQUIPMENTS / CATALOGUE / 48 PAGES",
    lines: [
      "Feeding systems: pan lines, chain-disc conveyors, hoppers and drive units.",
      "Drinking systems: 360-degree nipple lines, regulators, bell drinkers.",
      "Climate control: 36 and 50 inch cone fans, 7090 cooling pads, EC controls.",
      "Housing and turnkey: 60 x 30 ft open house to 120 x 40 ft tunnel house.",
      "Transport and accessories: ventilated crates, loading ramps, shed hardware.",
    ],
  },
  {
    file: "company-profile.pdf",
    title: "Company Profile & Manufacturing Standards",
    meta: "SAI KIRAN POULTRY EQUIPMENTS / PROFILE / 12 PAGES",
    lines: [
      "Works: 18,000 sq ft fabrication and assembly bay, IDA Bollaram, Sangareddy.",
      "Established 2009. Twenty-two people across sizing, production and installation.",
      "Inspection: sheet thickness, Z275 certification, UV masterbatch, fan balance.",
      "Warranty: 24 months on drives, 5 years on moulded pans and crates.",
    ],
  },
  {
    file: "feeding-systems.pdf",
    title: "Feeding Systems - Pan & Chain-Disc Lines",
    meta: "SAI KIRAN POULTRY EQUIPMENTS / SPEC SHEET / 8 PAGES",
    lines: [
      "Pan feeder: 330 / 360 mm pan, 50-70 birds per pan, 45 mm Z275 line pipe.",
      "Line limits: 90 m per drive on pan lines, 300 m per drive on chain-disc.",
      "Feed wastage by grill type, measured across a 42-day cycle.",
      "Spacing tables by bird age and target live weight.",
    ],
  },
  {
    file: "drinking-systems.pdf",
    title: "Drinking Systems - Nipple & Bell",
    meta: "SAI KIRAN POULTRY EQUIPMENTS / SPEC SHEET / 8 PAGES",
    lines: [
      "Nipple line: SS 304 double-seal pin, 80-90 ml/min at 25 cm water column.",
      "Regulator: 0-40 kPa diaphragm, holds +/-0.5 kPa across 120 m.",
      "Bell drinker: 360 mm, 4.5 litre, 80-100 broilers per unit.",
      "Header sizing and medication dosing notes.",
    ],
  },
  {
    file: "climate-control.pdf",
    title: "Climate Control - Fans, Pads & Tunnel Design",
    meta: "SAI KIRAN POULTRY EQUIPMENTS / SPEC SHEET / 16 PAGES",
    lines: [
      "50 inch cone fan: 44,500 CFM at 0 Pa, 38,200 CFM at 12.5 Pa.",
      "36 inch wall fan: 20,600 CFM at 0 Pa on a 0.55 kW motor.",
      "7090 pad: 86-92% saturation efficiency, 100 mm and 150 mm sheet.",
      "Worked tunnel layout: 120 x 40 ft shed, 4 fans, 480 sq ft pad, 6,400 birds.",
    ],
  },
  {
    file: "turnkey-ec-spec.pdf",
    title: "Turnkey EC House - Specification Sheet",
    meta: "SAI KIRAN POULTRY EQUIPMENTS / HOUSING / 6 PAGES",
    lines: [
      "Structure: pre-engineered GI truss, 1.2 mm, insulated roof sheet.",
      "Ventilation: 4 x 50 inch cone fans, 178,000 CFM, 4-stage EC controller.",
      "Cooling: 480 sq ft of 7090 pad, inlet face velocity 1.8 m/s.",
      "Power: 3-phase, 12 kW connected load, 5 kVA backup recommended.",
      "Handover: 45 days from site handover, 48-hour live commissioning run.",
    ],
  },
  {
    file: "open-house-package.pdf",
    title: "Open House Package - Rural Entrepreneur",
    meta: "SAI KIRAN POULTRY EQUIPMENTS / HOUSING / 6 PAGES",
    lines: [
      "Shed: 60 x 30 ft, 1,800 sq ft, 2,200 broilers at 0.82 sq ft per bird.",
      "Ventilation: 2 x 36 inch wall fans, side curtain and ridge vent.",
      "Supply: single-phase 2.2 kW, manual changeover, gravity water header.",
      "Install and commissioning: 21 days from site handover.",
    ],
  },
  {
    file: "installation-manual.pdf",
    title: "Installation & Maintenance Manual",
    meta: "SAI KIRAN POULTRY EQUIPMENTS / MANUAL / 24 PAGES",
    lines: [
      "Line levelling tolerances for pan and nipple lines.",
      "Regulator setting by bird age, with flow test procedure.",
      "Pad water balance, bleed-off rates and between-flock cleaning.",
      "Fan bearing service intervals and shutter inspection.",
      "Power-cut procedure and manual override sequence.",
    ],
  },
];

const escape = (value) =>
  value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");

const text = (x, y, size, font, value, colour = "0 0 0") =>
  `BT ${colour} rg /${font} ${size} Tf 1 0 0 1 ${x} ${y} Tm (${escape(value)}) Tj ET`;

function buildContent(doc) {
  const body = [
    text(56, 748, 9, "F2", "SAI KIRAN POULTRY EQUIPMENTS", "1 1 1"),
    text(56, 726, 22, "F1", doc.title.replace(/\s\u2014\s/g, " - "), "1 1 1"),
    text(56, 704, 8, "F2", doc.meta, "0.72 0.85 0.79"),
    text(56, 660, 10, "F2", "CONTENTS", "0.32 0.36 0.33"),
    ...doc.lines.map((line, index) => text(56, 636 - index * 22, 10, "F2", "- " + line)),
    text(56, 118, 9, "F2", "Manufacturer-direct. IDA Bollaram, Sangareddy, Telangana 502325.", "0.32 0.36 0.33"),
    text(56, 102, 9, "F2", "+91 98765 43210  /  sales@saikiranequipments.in", "0.32 0.36 0.33"),
    text(56, 86, 8, "F2", "Dimensions in mm unless stated. Specifications subject to shed sizing.", "0.42 0.46 0.43"),
  ].join("\n");

  return [
    "0.07 0.086 0.078 rg 0 682 595 160 re f",
    "0.086 0.416 0.306 rg 0 678 595 4 re f",
    "0.95 0.949 0.933 rg 0 0 595 78 re f",
    body,
  ].join("\n");
}

function buildPdf(doc) {
  const content = buildContent(doc);
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>",
    `<< /Length ${Buffer.byteLength(content, "latin1")} >>\nstream\n${content}\nendstream`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>",
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [];

  objects.forEach((object, index) => {
    offsets[index] = Buffer.byteLength(pdf, "latin1");
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefStart = Buffer.byteLength(pdf, "latin1");
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;

  return Buffer.from(pdf, "latin1");
}

for (const doc of docs) {
  writeFileSync(join(root, doc.file), buildPdf(doc));
  console.log(`wrote public/brochures/${doc.file}`);
}
