/**
 * Renders public/og.png (1200 x 630) from an SVG composition.
 * Requires @resvg/resvg-js plus the two font files, installed into .oggen.
 *
 * Usage: node scripts/make-og.mjs
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { Resvg } = require("../.oggen/node_modules/@resvg/resvg-js");

const root = join(dirname(new URL(import.meta.url).pathname), "..");
const fontDir = join(root, ".oggen", "fonts");
mkdirSync(join(root, "public"), { recursive: true });

const hairline = Array.from({ length: 14 }, (_, index) => {
  const x = 88 + index * 88;
  return `<line x1="${x}" y1="0" x2="${x}" y2="630" stroke="#FFFFFF" stroke-opacity="0.045"/>`;
}).join("");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#121614"/>
  ${hairline}

  <g transform="translate(72 54)" fill="none" stroke="#EDEFEA">
    <circle cx="16" cy="16" r="15" stroke-opacity="0.4" stroke-width="1.2"/>
    <g stroke-width="1.3">
      <path d="M16 16c.2-5 2-8.5 5.6-9.4 2.4-.6 4.2 1 3.8 3.4-.5 4.2-4.8 6.2-9.4 6Z"/>
      <path d="M16 16c-4.4-2.5-6.8-5.4-6.1-9 .5-2.4 2.7-3.3 4.7-2 3.3 2.6 3.1 7.4 1.4 11Z"/>
      <path d="M16 16c4.7 1.5 7.5 3.5 7.5 7.2 0 2.4-2.1 3.6-4.2 2.5-3.8-2-4.2-6.2-3.3-9.7Z"/>
    </g>
    <circle cx="16" cy="16" r="1.8" fill="#1C7A5B" stroke="none"/>
  </g>
  <g font-family="Archivo" font-weight="600" fill="#F4F3EE">
    <text x="114" y="58" font-size="17" letter-spacing="2.6">SAI KIRAN</text>
  </g>
  <g font-family="IBM Plex Mono" fill="#EDEFEA">
    <text x="114" y="76" font-size="10.5" letter-spacing="2.4" fill-opacity="0.42">POULTRY EQUIPMENTS</text>
    <text x="1128" y="64" text-anchor="end" font-size="11" letter-spacing="2.2" fill-opacity="0.4">MANUFACTURER-DIRECT · SINCE 2009</text>
  </g>
  <line x1="72" y1="102" x2="1128" y2="102" stroke="#FFFFFF" stroke-opacity="0.13"/>

  <g transform="translate(72 208)" fill="none" stroke="#EDEFEA" stroke-opacity="0.45" stroke-width="1.5">
    <path d="M0 108 206 34 412 108"/>
    <path d="M0 108v126h412V108"/>
    <path d="M206 34v200" stroke-opacity="0.12"/>
    <path d="M0 186h412" stroke-opacity="0.14"/>
  </g>
  <g transform="translate(72 208)" stroke="#4E9077" fill="none">
    <path d="M4 120C110 104 300 152 402 132" stroke-width="1.3" stroke-opacity="0.45"/>
    <path d="M4 150C120 142 300 190 402 168" stroke-width="1.3" stroke-opacity="0.3"/>
    <path d="M4 182C120 192 300 214 402 198" stroke-width="1.3" stroke-opacity="0.22"/>
    <rect x="398" y="118" width="16" height="44" stroke="#5AA487" stroke-opacity="0.65"/>
    <rect x="398" y="170" width="16" height="44" stroke="#5AA487" stroke-opacity="0.65"/>
    <rect x="0" y="120" width="5" height="42" fill="#4E9077" fill-opacity="0.35" stroke="none"/>
  </g>
  <g font-family="IBM Plex Mono" fill="#EDEFEA" font-size="10.5" letter-spacing="2">
    <text x="72" y="490" fill-opacity="0.4">EC TUNNEL HOUSE · 120 × 40 FT · 6,400 BIRDS</text>
  </g>

  <g font-family="IBM Plex Mono" fill="#5AA487">
    <text x="600" y="216" font-size="12" letter-spacing="3.2">PROVEN POULTRY AUTOMATION</text>
  </g>
  <rect x="600" y="234" width="46" height="2" fill="#1C7A5B"/>

  <g font-family="Archivo" fill="#F4F3EE" font-weight="600" font-size="43" letter-spacing="-1.4">
    <text x="600" y="310">Feeding, drinking and</text>
    <text x="600" y="366">climate control for</text>
    <text x="600" y="422">commercial poultry farms.</text>
  </g>

  <g font-family="IBM Plex Mono" fill="#EDEFEA" font-size="12" letter-spacing="1.6">
    <text x="600" y="466" fill-opacity="0.45">44,500 CFM CONE FANS · 7090 COOLING PADS</text>
  </g>

  <line x1="72" y1="506" x2="1128" y2="506" stroke="#FFFFFF" stroke-opacity="0.14"/>
  <g font-family="Archivo" fill="#EDEFEA" font-size="17" font-weight="600" letter-spacing="1.1">
    <text x="72" y="552">SAI KIRAN POULTRY EQUIPMENTS</text>
  </g>
  <g font-family="IBM Plex Mono" fill="#EDEFEA" font-size="11" letter-spacing="2">
    <text x="72" y="578" fill-opacity="0.42">MANUFACTURER · SANGAREDDY, TELANGANA</text>
    <text x="1128" y="552" text-anchor="end" fill-opacity="0.55">saikiranequipments.in</text>
  </g>
</svg>`;

const resvg = new Resvg(svg, {
  fitTo: { mode: "width", value: 1200 },
  font: {
    fontFiles: [
      join(fontDir, "Archivo.ttf"),
      join(fontDir, "IBMPlexMono-Regular.ttf"),
    ],
    loadSystemFonts: false,
    defaultFontFamily: "Archivo",
  },
});

writeFileSync(join(root, "public", "og.png"), resvg.render().asPng());
console.log("wrote public/og.png");
