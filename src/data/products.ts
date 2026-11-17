import type {
  Brochure,
  Category,
  Product,
  Testimonial,
} from "@/types/product";

export const categories: Category[] = [
  {
    slug: "feeding-systems",
    name: "Feeding Systems",
    shortName: "Feeding",
    index: "01",
    description:
      "Pan and chain-disc feeding lines calculated per bird, per metre and per shed. Galvanised pipe that holds alignment over 90-metre runs, with anti-spill grills that keep feed in the pan and out of the litter.",
    blurb:
      "Feed is the single largest line item on a broiler P&L. A line that spills 2% of it costs more every cycle than the line itself.",
    highlights: ["50–70 birds per pan", "45 mm Z275 pipe", "Up to 300 m per drive"],
  },
  {
    slug: "drinking-systems",
    name: "Drinking Systems",
    shortName: "Drinking",
    index: "02",
    description:
      "Nipple lines, pressure regulators and bell drinkers built on virgin PVC and 304 stainless. Regulated flow from day-old chick through to lift, with dry litter and medication-ready headers.",
    blurb:
      "Water intake drives feed intake. A leaking line shows up three weeks later as wet litter, ammonia and a mortality bill.",
    highlights: ["80–90 ml/min flow", "SS 304 trigger pins", "120 m line runs"],
  },
  {
    slug: "climate-control",
    name: "Climate Control & Brooding",
    shortName: "Climate",
    index: "03",
    description:
      "50-inch cone fans, 7090 cellulose cooling pads and tunnel layouts specified against shed volume, bird load and Telangana summer design temperature — not against a catalogue page.",
    blurb:
      "Above 32°C a broiler stops eating. Airflow and pad area are engineering inputs, and we size both before quoting.",
    highlights: ["44,500 CFM cone fans", "7090 100 mm pads", "4-stage EC control"],
  },
  {
    slug: "housing-turnkey",
    name: "Housing & Turnkey",
    shortName: "Housing",
    index: "04",
    description:
      "From a 60 × 30 ft open house for a first-time entrant to a fully commissioned 120 × 40 ft tunnel EC shed. Structure, ventilation, feeding, drinking, electricals and controls arrive as one scope.",
    blurb:
      "One contractor, one commissioning date, one number to call when the first flock goes in. That is the whole proposition.",
    highlights: ["6,400-bird EC sheds", "21-day commissioning", "Single-point handover"],
  },
  {
    slug: "transport-accessories",
    name: "Transport & Accessories",
    shortName: "Transport",
    index: "05",
    description:
      "Ventilated crates, loading ramps and shed hardware rated for daily loading crews, 80-bar washdowns and monsoon humidity. The unglamorous parts that decide whether a lift arrives alive.",
    blurb:
      "Catching and transport losses are invisible in most farm budgets. They are 1–2% of every flock.",
    highlights: ["38% vent area", "8-crate stacking", "250 kg/m ramp rating"],
  },
];

export const products: Product[] = [
  {
    id: "prod-1",
    sku: "SKPE-FEED-PF360",
    slug: "automatic-broiler-pan-feeder",
    name: "Automatic Broiler Pan Feeder System",
    category: "Feeding Systems",
    categorySlug: "feeding-systems",
    shortDescription:
      "Adjustable 360° pan feeding line for day-old chicks through to lift, with an anti-scratch grill lip and zero feed spillage into the litter.",
    description:
      "The Sai Kiran pan feeder runs a 360-degree flood-feed pan on a 45 mm hot-dip galvanised line, driven by a 0.75 kW geared motor. Grill height adjusts through five positions so the same pan serves a 120 g chick and a 2.4 kg bird without changing hardware. The anti-waste lip is moulded into the pan, not clipped on, so it survives washdown and loading crews. Pans are moulded from virgin polypropylene with a 2.5% UV masterbatch and are warranted for five years against sunlight embrittlement.",
    image: "/images/products/pan-feeder.svg",
    advantages: [
      "Five-position feed window from 12 mm to 60 mm depth, set without tools",
      "Anti-scratch grill lip moulded into the pan body to stop feed being raked into litter",
      "Virgin PP with 2.5% UV masterbatch — rated for five Telangana summers",
      "Optional pan-level sensor shuts the line off when a pan backs up, so feed is not ground to dust",
    ],
    specifications: [
      { label: "Pan diameter", value: "330 mm / 360 mm" },
      { label: "Grill type", value: "Open-grid, 14 / 16 partitions" },
      { label: "Bird capacity", value: "50–70 broilers per pan" },
      { label: "Line pipe", value: "45 mm hot-dip galvanised, Z275, 2 mm wall" },
      { label: "Drive", value: "0.75 kW geared motor, 3-phase / single-phase" },
      { label: "Maximum line length", value: "90 m per drive" },
      { label: "Hopper capacity", value: "45 kg / 70 kg" },
      { label: "Pan material", value: "100% virgin polypropylene, UV stabilised" },
      { label: "Warranty", value: "24 months drive, 5 years pans" },
    ],
    brochureUrl: "/brochures/feeding-systems.pdf",
    isFeatured: true,
  },
  {
    id: "prod-2",
    sku: "SKPE-DRINK-NS360",
    slug: "double-seal-nipple-drinking-system",
    name: "360° Double-Seal Nipple Drinking System",
    category: "Drinking Systems",
    categorySlug: "drinking-systems",
    shortDescription:
      "Stainless steel 360° nipple line with double-seal pin, ±0.5 kPa regulation and snap-fit drop cups that keep litter dry.",
    description:
      "A 304 stainless trigger pin seated in a double-seal housing gives a chick water from any approach angle within the first hour of placement, and stops dripping the moment the bird steps away. Water is carried in 22 × 22 mm virgin PVC square pipe and regulated by a diaphragm unit that holds ±0.5 kPa across a 120-metre run, so the last nipple flows like the first. The full line dismantles without tools for flushing and medication cycles.",
    image: "/images/products/nipple-drinker.svg",
    advantages: [
      "360-degree trigger pin — a day-old chick can drink without learning the angle",
      "Double-seal SS 304 pin holds zero drip at 40 kPa line pressure",
      "Snap-fit drop cups release by hand for daily flushing and disinfection",
      "Diaphragm regulator holds ±0.5 kPa over 120 m, four lines per regulator",
    ],
    specifications: [
      { label: "Trigger pin", value: "SS 304, 4.2 mm, double seal" },
      { label: "Flow rate", value: "80–90 ml/min at 25 cm column" },
      { label: "Birds per nipple", value: "8–12 broilers / 10–15 layers" },
      { label: "Line pipe", value: "Virgin PVC square, 22 × 22 mm" },
      { label: "Regulator", value: "0–40 kPa diaphragm, ±0.5 kPa" },
      { label: "Drop cup", value: "Polypropylene, 65 mm, snap-fit" },
      { label: "Maximum line length", value: "120 m, 4 lines per regulator" },
      { label: "Supply", value: "500 L gravity header or 1.5 HP pump" },
    ],
    brochureUrl: "/brochures/drinking-systems.pdf",
    isFeatured: true,
  },
  {
    id: "prod-3",
    sku: "SKPE-CLIM-F50",
    slug: "50-inch-heavy-duty-exhaust-cone-fan",
    name: "50-Inch Heavy Duty Exhaust Cone Fan",
    category: "Climate Control & Brooding",
    categorySlug: "climate-control",
    shortDescription:
      "44,500 CFM cone fan with centrifugal shutter, Z275 galvanised housing and IP55 motor for tunnel-ventilated EC houses.",
    description:
      "Built for tunnel sheds in 40°C-plus summers, the 50-inch cone fan moves 44,500 CFM at zero static pressure and still holds 38,200 CFM at 12.5 Pa — the figure that matters once pads, shutters and ducting are in the circuit. The centrifugal shutter opens against airflow and closes flat, giving a 100% seal that stops back-draught through idle fans in winter. Blades are balanced as an assembly before dispatch, which is why the bearings run quiet past the third season.",
    image: "/images/products/exhaust-fan.svg",
    advantages: [
      "Centrifugal shutter closes to a full seal — no winter back-draught through idle fans",
      "38,200 CFM retained at 12.5 Pa static pressure, rated with the pad bank in circuit",
      "IP55 motor with sealed bearings, wired for 3-phase or single-phase supply",
      "Blade assembly balanced before dispatch to hold ≤ 68 dB(A) at one metre",
    ],
    specifications: [
      { label: "Blade size", value: "50 in / 1270 mm, 3-blade stainless" },
      { label: "Airflow", value: "44,500 CFM @ 0 Pa / 38,200 CFM @ 12.5 Pa" },
      { label: "Motor", value: "1.1 kW (1.5 HP), 3-phase / single-phase" },
      { label: "Speed", value: "560 rpm" },
      { label: "Housing", value: "Hot-dip galvanised sheet, Z275, 1.2 mm" },
      { label: "Shutter", value: "Centrifugal, 100% closing" },
      { label: "Noise", value: "≤ 68 dB(A) at 1 m" },
      { label: "Wall opening", value: "1,400 × 1,400 mm" },
      { label: "Protection", value: "IP55 motor, Class F insulation" },
    ],
    brochureUrl: "/brochures/climate-control.pdf",
    isFeatured: true,
  },
  {
    id: "prod-4",
    sku: "SKPE-DRINK-BELL36",
    slug: "jumbo-bell-drinker-36cm",
    name: "Jumbo Bell Drinker, 360 mm",
    category: "Drinking Systems",
    categorySlug: "drinking-systems",
    shortDescription:
      "4.5-litre hanging bell drinker for open houses and brooder guards, moulded in UV-stabilised virgin polypropylene.",
    description:
      "The 360 mm jumbo bell is the workhorse drinker for open houses where a nipple line is not yet justified. A stainless spring and brass seat hold a constant 18 mm water ring at 0.5–1.5 bar, and the bowl twists off without tools for scrubbing. Three-point hanging adjustment sets the lip height from 50 mm at placement to 450 mm at lift, keeping water above the litter line as birds grow.",
    image: "/images/products/bell-drinker.svg",
    advantages: [
      "4.5 L bowl serves 80–100 broilers between refills",
      "Stainless spring and brass seat hold a constant water ring from 0.5 to 1.5 bar",
      "Twist-lock bowl releases by hand for washdown, no spanner required",
      "Three-point hang sets lip height from 50 mm to 450 mm as birds grow",
    ],
    specifications: [
      { label: "Bell diameter", value: "360 mm" },
      { label: "Capacity", value: "4.5 litres" },
      { label: "Birds per drinker", value: "80–100 broilers" },
      { label: "Material", value: "Virgin PP, UV stabilised" },
      { label: "Valve", value: "SS spring, brass seat" },
      { label: "Operating pressure", value: "0.5–1.5 bar, reducer recommended" },
      { label: "Height adjustment", value: "50–450 mm" },
      { label: "Mounting", value: "Three-point chain hang or leg stand" },
    ],
    brochureUrl: "/brochures/drinking-systems.pdf",
  },
  {
    id: "prod-5",
    sku: "SKPE-FEED-CD45",
    slug: "chain-disc-conveyor-feeder",
    name: "Chain-Disc Conveyor Feeding Line",
    category: "Feeding Systems",
    categorySlug: "feeding-systems",
    shortDescription:
      "300-metre chain-disc line at 30 m/min for layer and breeder sheds, with timer and light-sensor dosing control.",
    description:
      "Where pan lines stop making sense past 90 metres, the chain-disc conveyor takes over. A 45 mm galvanised tube carries a nylon disc chain at 30 m/min and delivers 1,150 kg per hour across runs up to 300 metres, including 90-degree corners. Feed depth is set at the hopper gate and held by the chain, so the far end of the shed gets the same ration as the near end. Control is a 24-hour timer with a dawn/dusk light sensor so feeding starts before the birds do.",
    image: "/images/products/chain-feeder.svg",
    advantages: [
      "300 m per drive with 90° corner wheels — one motor serves a full layer shed",
      "Nylon 6 discs and galvanised tube resist the damp feed caking that stalls mild-steel lines",
      "Hopper gate sets ration depth once, and the chain holds it to the far end",
      "Timer plus light sensor starts the first feed before dawn, when birds are most active",
    ],
    specifications: [
      { label: "Line pipe", value: "45 mm galvanised, 2 mm wall" },
      { label: "Chain speed", value: "30 m/min" },
      { label: "Throughput", value: "1,150 kg/hour" },
      { label: "Stocking", value: "55–60 broilers per metre of line" },
      { label: "Maximum line length", value: "300 m per drive, 90° corners" },
      { label: "Drive", value: "0.75 kW with 1:60 gearbox" },
      { label: "Corner wheel", value: "Nylon 6, 240 mm" },
      { label: "Control", value: "24 h timer with light sensor, 8 slots" },
    ],
    brochureUrl: "/brochures/feeding-systems.pdf",
  },
  {
    id: "prod-6",
    sku: "SKPE-HOUSE-EC120",
    slug: "ec-house-turnkey-120x40",
    name: "Turnkey EC House — 120 × 40 ft",
    category: "Housing & Turnkey",
    categorySlug: "housing-turnkey",
    shortDescription:
      "A commissioned 4,800 sq ft tunnel-ventilated house for 6,400 broilers: structure, fans, pads, feeding, drinking, electricals and controls.",
    description:
      "A 120 × 40 ft pre-engineered galvanised structure, closed on both sides and insulated under the sheet, with four 50-inch cone fans on the end wall and 480 sq ft of 7090 pad on the opposite face. Feeding and drinking are laid out to the 6,400-bird stocking plan, and a four-stage EC controller runs ventilation, cooling and brooding from one panel. We hand over after a live 48-hour run with your first flock placed, not on the day the last bolt is tightened.",
    image: "/images/products/ec-house.svg",
    advantages: [
      "Single scope: civil, structure, ventilation, feeding, drinking, electricals and controls",
      "Four-stage EC controller with brooding curve and alarm dial-out on temperature drift",
      "Insulated roof and closed side walls hold a 3–4°C tighter band than an open house",
      "48-hour live commissioning run before handover, with your staff trained on the panel",
    ],
    specifications: [
      { label: "Shed size", value: "120 × 40 ft (4,800 sq ft)" },
      { label: "Bird capacity", value: "6,400 broilers at 0.75 sq ft/bird" },
      { label: "Ventilation", value: "4 × 50 in cone fans, 178,000 CFM" },
      { label: "Cooling pad", value: "480 sq ft, 7090 cellulose, 100 mm" },
      { label: "Feeding", value: "2 lines × 48 pans, 45 mm galvanised" },
      { label: "Drinking", value: "6 lines × 58 nipples, 4 regulators" },
      { label: "Structure", value: "Pre-engineered GI truss, 1.2 mm, insulated roof" },
      { label: "Power", value: "3-phase, 12 kW connected, 5 kVA backup" },
      { label: "Commissioning", value: "45 days from site handover" },
    ],
    brochureUrl: "/brochures/turnkey-ec-spec.pdf",
    isFeatured: true,
  },
  {
    id: "prod-7",
    sku: "SKPE-HOUSE-OPEN60",
    slug: "rural-entrepreneur-open-house-60x30",
    name: "Rural Entrepreneur Open House — 60 × 30 ft",
    category: "Housing & Turnkey",
    categorySlug: "housing-turnkey",
    shortDescription:
      "A 1,800 sq ft first-cycle package for 2,200 broilers on single-phase power, with manual overrides on every powered line.",
    description:
      "Designed for a first-time entrant with a single-phase connection and an unreliable feeder. Two 36-inch wall fans handle air changes, ridge vent and side curtain handle the rest, and every powered line has a manual override so a power cut costs minutes rather than a flock. The package includes structure, brooder guards, feeding, drinking and a gravity header tank, installed and commissioned in 21 days.",
    image: "/images/products/open-house.svg",
    advantages: [
      "Runs on a single-phase 2.2 kW load — no transformer deposit before the first flock",
      "Manual winch and gravity header keep feed and water moving through a power cut",
      "Open-side curtain and ridge vent give passive air changes when fans are off",
      "21-day install and commissioning, priced as one package rather than six quotations",
    ],
    specifications: [
      { label: "Shed size", value: "60 × 30 ft (1,800 sq ft)" },
      { label: "Bird capacity", value: "2,200 broilers at 0.82 sq ft/bird" },
      { label: "Ventilation", value: "2 × 36 in wall fans, 41,200 CFM" },
      { label: "Air inlet", value: "Side curtain + ridge vent" },
      { label: "Feeding", value: "1 line × 24 pans, 45 mm galvanised" },
      { label: "Drinking", value: "3 lines × 26 nipples, gravity header" },
      { label: "Structure", value: "GI pipe 2 in, steel truss, asbestos-free sheet" },
      { label: "Power", value: "Single-phase, 2.2 kW, manual changeover" },
      { label: "Commissioning", value: "21 days from site handover" },
    ],
    brochureUrl: "/brochures/open-house-package.pdf",
  },
  {
    id: "prod-8",
    sku: "SKPE-CLIM-PAD7090",
    slug: "cooling-pad-7090-cellulose",
    name: "7090 Cellulose Cooling Pad",
    category: "Climate Control & Brooding",
    categorySlug: "climate-control",
    shortDescription:
      "100 mm 7090 flute pad with 86–92% evaporative efficiency and phenolic resin bind, cut to your pad wall dimensions.",
    description:
      "Imported 7090 cellulose sheet, 45/45-degree flutes at 7 mm and 9 mm, bonded with phenolic resin and treated against rot and UV. At 1.5–2.0 m/s face velocity the pad drops incoming air by 8–12°C in dry Telangana heat while holding static pressure under 18 Pa. Sheets are cut to your opening with a 10 mm expansion allowance and shipped with the water distribution header and gutter profile.",
    image: "/images/products/cooling-pad.svg",
    advantages: [
      "86–92% evaporative efficiency at 1.5–2.0 m/s face velocity",
      "Phenolic resin bind resists the algae and softening that collapse cheap pads in two seasons",
      "Cut to your pad-wall opening with a 10 mm expansion allowance",
      "Ships with distribution header, gutter profile and end caps as one set",
    ],
    specifications: [
      { label: "Thickness", value: "100 mm / 150 mm" },
      { label: "Flute geometry", value: "45°/45°, 7 mm / 9 mm" },
      { label: "Evaporative efficiency", value: "86–92%" },
      { label: "Face velocity", value: "1.5–2.0 m/s" },
      { label: "Static pressure drop", value: "12–18 Pa" },
      { label: "Material", value: "Cellulose with phenolic resin, UV treated" },
      { label: "Sheet sizes", value: "600 × 1500 / 600 × 1800 mm" },
      { label: "Water flow", value: "6 L/min per metre of width" },
    ],
    brochureUrl: "/brochures/climate-control.pdf",
  },
  {
    id: "prod-9",
    sku: "SKPE-TRANS-CR14",
    slug: "ventilated-poultry-transport-crate",
    name: "Ventilated Poultry Transport Crate",
    category: "Transport & Accessories",
    categorySlug: "transport-accessories",
    shortDescription:
      "12–14 bird crate in 3 mm virgin PP with 38% open vent area, stackable eight high and rated for 80-bar washdown.",
    description:
      "Moulded in one piece from 3 mm virgin polypropylene, the crate carries 12–14 birds at 2.0–2.5 kg with a 38% open vent area across all four faces. Crates stack eight high without racking, and the interlock holds the stack through a loaded turn. They take an 80-bar washdown and repeated caustic cycles without stress-cracking at the corner radii, which is where cheap crates fail first.",
    image: "/images/products/transport-crate.svg",
    advantages: [
      "38% open vent area across four faces — measurable drop in DOA counts on summer runs",
      "One-piece 3 mm virgin PP mould with radiused corners that survive caustic washdown",
      "Eight-high stack interlock holds through a loaded turn without racking",
      "4.8 kg tare keeps payload on the truck and off the axle limit",
    ],
    specifications: [
      { label: "Dimensions", value: "1,050 × 550 × 280 mm" },
      { label: "Birds per crate", value: "12–14 at 2.0–2.5 kg" },
      { label: "Material", value: "Virgin PP, 3 mm wall" },
      { label: "Vent open area", value: "38% of total surface" },
      { label: "Stack load", value: "8 crates high" },
      { label: "Temperature range", value: "−10 °C to 65 °C" },
      { label: "Washdown", value: "Up to 80 bar, caustic tolerant" },
      { label: "Tare weight", value: "4.8 kg" },
    ],
    brochureUrl: "/brochures/transport-accessories.pdf",
  },
  {
    id: "prod-10",
    sku: "SKPE-TRANS-RAMP30",
    slug: "aluminium-poultry-loading-ramp",
    name: "Aluminium Poultry Loading Ramp",
    category: "Transport & Accessories",
    categorySlug: "transport-accessories",
    shortDescription:
      "3 m aluminium ramp with SS 304 anti-slip deck, 900 mm mesh rail and adjustable height for crate trolleys.",
    description:
      "A 3-metre 6063-T5 aluminium ramp rated at 250 kg per metre, decked in 1.2 mm SS 304 anti-slip sheet and railed to 900 mm with 25 mm mesh. The lower leg adjusts from 900 mm to 1,400 mm to meet any truck bed without blocks under the feet. At 38 kg two people move it, and the folding hinge clears a standard shed door.",
    image: "/images/products/loading-ramp.svg",
    advantages: [
      "250 kg/m rated deck carries a loaded crate trolley, not just foot traffic",
      "SS 304 anti-slip deck and 900 mm mesh rail keep handlers and crates on the ramp",
      "Adjustable 900–1,400 mm leg meets any truck bed without packing blocks",
      "38 kg tare and folding hinge — two people can reposition it mid-load",
    ],
    specifications: [
      { label: "Length", value: "3,000 mm / 4,200 mm" },
      { label: "Width", value: "600 mm clear" },
      { label: "Load rating", value: "250 kg per metre" },
      { label: "Frame", value: "Aluminium 6063-T5, 2 mm" },
      { label: "Deck", value: "SS 304 anti-slip, 1.2 mm" },
      { label: "Rail", value: "900 mm with 25 mm mesh" },
      { label: "Height range", value: "900–1,400 mm adjustable leg" },
      { label: "Tare weight", value: "38 kg" },
    ],
    brochureUrl: "/brochures/transport-accessories.pdf",
  },
  {
    id: "prod-11",
    sku: "SKPE-CLIM-F36",
    slug: "36-inch-wall-exhaust-fan",
    name: "36-Inch Wall Exhaust Fan",
    category: "Climate Control & Brooding",
    categorySlug: "climate-control",
    shortDescription:
      "20,600 CFM wall fan for open houses and brooder rooms, 0.55 kW motor with ABS shutter and IP55 protection.",
    description:
      "The 36-inch wall fan is the standard air-change unit for open houses, brooder rooms and service areas where a full tunnel installation is not justified. It delivers 20,600 CFM on a 0.55 kW motor, so two units run off a domestic single-phase supply without tripping. The ABS shutter and galvanised frame resist monsoon humidity, and the blade set is removable from the front for cleaning between flocks.",
    image: "/images/products/wall-fan.svg",
    advantages: [
      "20,600 CFM on 0.55 kW — two fans run on a domestic single-phase supply",
      "ABS shutter and galvanised frame hold up through monsoon humidity",
      "Front-removable blade set for cleaning between flocks, no dismounting",
      "IP55 motor with sealed bearings and a two-speed or variable-speed option",
    ],
    specifications: [
      { label: "Blade size", value: "36 in / 914 mm" },
      { label: "Airflow", value: "20,600 CFM @ 0 Pa" },
      { label: "Motor", value: "0.55 kW (0.75 HP), single / three-phase" },
      { label: "Housing", value: "Galvanised frame with ABS shutter" },
      { label: "Noise", value: "≤ 62 dB(A) at 1 m" },
      { label: "Wall opening", value: "1,000 × 1,000 mm" },
      { label: "Control", value: "Two-speed switch or VFD" },
      { label: "Protection", value: "IP55" },
    ],
    brochureUrl: "/brochures/climate-control.pdf",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "We replaced two leaking bell lines with the nipple system across both sheds. Litter stayed dry through the monsoon for the first time, and the ammonia smell that used to hit us at the door was gone by the second week. My litter man now sells to the same buyer every cycle instead of discounting wet cake.",
    name: "Ramesh Reddy",
    role: "Broiler farmer, two sheds",
    location: "Nalgonda district, Telangana",
    scale: "12,000 birds per shed",
    metrics: [
      { label: "FCR", value: "1.62 → 1.54" },
      { label: "Mortality", value: "4.1% → 2.6%" },
    ],
  },
  {
    quote:
      "I run 18,000 layers and the feed bill is the whole business. The chain-disc line was the first equipment I bought where the supplier asked for my shed length and bird count before quoting. Feed at the far end is the same depth as at the hopper, and the spillage that used to collect under the pans is simply not there.",
    name: "B. Srinivas",
    role: "Layer farmer",
    location: "Siddipet district, Telangana",
    scale: "18,000 layers, 2 sheds",
    metrics: [
      { label: "Feed saved", value: "1.8 t / month" },
      { label: "Labour", value: "3 → 1 per shed" },
    ],
  },
  {
    quote:
      "Our village supply drops four or five times a week in May. The open house package came with a manual winch on the feed line and a gravity tank for water, so a cut costs us a few minutes, not a flock. In the 2024 summer we lost 40 birds across the whole cycle against 300-plus the year before.",
    name: "K. Anjaiah",
    role: "First-cycle entrant, open house",
    location: "Khammam district, Telangana",
    scale: "2,200 birds, 60 × 30 ft",
    metrics: [
      { label: "Summer losses", value: "300 → 40 birds" },
      { label: "Payback", value: "2.5 cycles" },
    ],
  },
];

export const brochures: Brochure[] = [
  {
    title: "Master Product Catalogue 2026",
    description:
      "Every feeding, drinking, climate and transport line we manufacture, with dimensions, capacities and material grades.",
    file: "/brochures/master-catalogue.pdf",
    format: "PDF",
    pages: "48 pages",
    size: "6.2 MB",
    group: "Catalogues",
  },
  {
    title: "Company Profile & Manufacturing Standards",
    description:
      "Our Sangareddy works, galvanising and moulding partners, inspection points and the warranty terms behind each line.",
    file: "/brochures/company-profile.pdf",
    format: "PDF",
    pages: "12 pages",
    size: "1.8 MB",
    group: "Catalogues",
  },
  {
    title: "Feeding Systems — Pan & Chain-Disc",
    description:
      "Pan spacing tables, line-length limits, drive selection and the calculated feed wastage for each grill type.",
    file: "/brochures/feeding-systems.pdf",
    format: "PDF",
    pages: "8 pages",
    size: "1.1 MB",
    group: "Product sheets",
  },
  {
    title: "Drinking Systems — Nipple & Bell",
    description:
      "Flow rates against line pressure, nipples per bird by age, regulator placement and header sizing.",
    file: "/brochures/drinking-systems.pdf",
    format: "PDF",
    pages: "8 pages",
    size: "1.0 MB",
    group: "Product sheets",
  },
  {
    title: "Climate Control — Fans, Pads & Tunnel Design",
    description:
      "CFM tables at working static pressure, pad area calculations and a worked tunnel layout for a 120 × 40 ft shed.",
    file: "/brochures/climate-control.pdf",
    format: "PDF",
    pages: "16 pages",
    size: "2.4 MB",
    group: "Product sheets",
  },
  {
    title: "Turnkey EC House — Specification Sheet",
    description:
      "Scope matrix for the 120 × 40 ft tunnel house: structure, insulation, fan count, pad area, controls and power.",
    file: "/brochures/turnkey-ec-spec.pdf",
    format: "PDF",
    pages: "6 pages",
    size: "0.9 MB",
    group: "Product sheets",
  },
  {
    title: "Open House Package — Rural Entrepreneur",
    description:
      "The 60 × 30 ft first-cycle package, single-phase load list, manual overrides and the 21-day install schedule.",
    file: "/brochures/open-house-package.pdf",
    format: "PDF",
    pages: "6 pages",
    size: "0.8 MB",
    group: "Product sheets",
  },
  {
    title: "Installation & Maintenance Manual",
    description:
      "Line levelling, regulator setting, pad water balance, fan bearing service and the between-flock checklist.",
    file: "/brochures/installation-manual.pdf",
    format: "PDF",
    pages: "24 pages",
    size: "3.1 MB",
    group: "Technical manuals",
  },
];

export interface ShedParameter {
  shed: string;
  area: string;
  fans: string;
  pad: string;
  capacity: string;
  density: string;
}

export const shedParameters: ShedParameter[] = [
  {
    shed: "60 × 30 ft",
    area: "1,800 sq ft",
    fans: "2 × 36 in",
    pad: "Not required (open)",
    capacity: "2,200 birds",
    density: "0.82 sq ft/bird",
  },
  {
    shed: "100 × 40 ft",
    area: "4,000 sq ft",
    fans: "4 × 50 in",
    pad: "400 sq ft",
    capacity: "5,200 birds",
    density: "0.77 sq ft/bird",
  },
  {
    shed: "120 × 40 ft",
    area: "4,800 sq ft",
    fans: "4 × 50 in",
    pad: "480 sq ft",
    capacity: "6,400 birds",
    density: "0.75 sq ft/bird",
  },
  {
    shed: "200 × 40 ft",
    area: "8,000 sq ft",
    fans: "8 × 50 in",
    pad: "800 sq ft",
    capacity: "10,500 birds",
    density: "0.76 sq ft/bird",
  },
];

export const turnkeyComparison: { label: string; ec: string; open: string }[] = [
  {
    label: "Shed envelope",
    ec: "Closed on four sides, insulated roof, air-locked entry",
    open: "Open sides with winched curtain, ridge vent",
  },
  {
    label: "Ventilation",
    ec: "Tunnel: 4 × 50 in cone fans, 178,000 CFM, 4-stage control",
    open: "2 × 36 in wall fans, passive curtain and ridge air changes",
  },
  {
    label: "Cooling",
    ec: "480 sq ft of 7090 pad, 8–12 °C drop at the inlet",
    open: "Fans and shade only; performance tracks ambient",
  },
  {
    label: "Stocking density",
    ec: "0.75 sq ft per bird — 6,400 birds in 4,800 sq ft",
    open: "0.82 sq ft per bird — 2,200 birds in 1,800 sq ft",
  },
  {
    label: "FCR band",
    ec: "1.48 – 1.58 across the year",
    open: "1.58 – 1.72, wider in April–June",
  },
  {
    label: "Mortality band",
    ec: "2.0 – 3.0% per cycle",
    open: "3.5 – 6.0% per cycle, heat-dependent",
  },
  {
    label: "Labour per shed",
    ec: "2 people per 6,400 birds",
    open: "2 people per 2,200 birds",
  },
  {
    label: "Power",
    ec: "3-phase, 12 kW connected, 5 kVA backup recommended",
    open: "Single-phase, 2.2 kW, manual changeover",
  },
  {
    label: "Install and commissioning",
    ec: "45 days from site handover",
    open: "21 days from site handover",
  },
  {
    label: "Capex band (equipment + structure)",
    ec: "₹1,050 – ₹1,250 per sq ft",
    open: "₹480 – ₹620 per sq ft",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((product) => product.categorySlug === slug);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.isFeatured);
}
