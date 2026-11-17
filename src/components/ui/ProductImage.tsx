import { iconPaths, type IconName } from "@/components/ui/Icon";

export const categoryGlyph: Record<string, IconName> = {
  "feeding-systems": "feed",
  "drinking-systems": "droplet",
  "climate-control": "wind",
  "housing-turnkey": "factory",
  "transport-accessories": "truck",
};

interface ProductImageProps {
  label: string;
  sku?: string;
  categorySlug?: string;
  view?: string;
  tone?: "light" | "dark";
  className?: string;
}

/**
 * Art-directed placeholder for studio product photography: sweep backdrop,
 * crop registration marks, a category line glyph and an explicit pending label.
 * The caption is HTML so it stays legible from carousel card to hero panel.
 */
export function ProductImage({
  label,
  sku = "SKPE",
  categorySlug = "feeding-systems",
  view = "Front view",
  tone = "light",
  className = "",
}: ProductImageProps) {
  const glyph = categoryGlyph[categorySlug] ?? "grid";
  const dark = tone === "dark";
  const ink = dark ? "#EDEFEA" : "#121614";
  const body = dark ? "#232A26" : "#EDEBE3";
  const fade = dark ? "#1A201D" : "#E6E3DA";
  const floor = dark ? "#151A17" : "#DCD9CF";
  const uid = `${sku}-${view}-${tone}`.replace(/[^a-z0-9]+/gi, "-").toLowerCase();

  return (
    <div
      role="img"
      aria-label={`${label}. Studio product photograph pending — labelled placeholder frame.`}
      className={`relative overflow-hidden ${dark ? "bg-[#1A201D]" : "bg-[#E3E0D7]"} ${className}`}
    >
      <svg viewBox="0 0 800 600" className="absolute inset-0 h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`sweep-${uid}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={body} />
            <stop offset="62%" stopColor={fade} />
            <stop offset="100%" stopColor={floor} />
          </linearGradient>
          <radialGradient id={`key-${uid}`} cx="0.32" cy="0.18" r="0.78">
            <stop offset="0%" stopColor={dark ? "#3C463F" : "#FBFAF5"} stopOpacity="0.85" />
            <stop offset="100%" stopColor={fade} stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="800" height="600" fill={`url(#sweep-${uid})`} />
        <rect width="800" height="600" fill={`url(#key-${uid})`} />

        <line x1="0" y1="452" x2="800" y2="452" stroke={ink} strokeOpacity="0.1" />
        <rect x="0" y="452" width="800" height="148" fill={floor} fillOpacity="0.55" />

        <g stroke={ink} strokeOpacity={dark ? 0.2 : 0.22} strokeWidth="1.25" fill="none">
          <path d="M60 96V60h36M704 60h36v36M740 504v36h-36M96 540H60v-36" />
        </g>

        <svg
          x="292"
          y="146"
          width="216"
          height="216"
          viewBox="0 0 24 24"
          fill="none"
          stroke={ink}
          strokeOpacity={dark ? 0.36 : 0.3}
          strokeWidth="0.34"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {iconPaths[glyph]}
        </svg>
      </svg>

      <div
        className={`absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 border-t px-3 py-2 ${
          dark ? "border-white/12 bg-[#101413]/85" : "border-ink/12 bg-[#EDEAE2]/92"
        }`}
      >
        <div className="min-w-0">
          <p
            className={`truncate font-mono text-[8px] uppercase tracking-[0.14em] sm:text-[8.5px] ${
              dark ? "text-white/55" : "text-ink/60"
            }`}
          >
            Product photograph — pending
          </p>
          <p
            className={`mt-0.5 truncate font-mono text-[7.5px] uppercase tracking-[0.1em] sm:text-[8px] ${
              dark ? "text-white/30" : "text-ink/35"
            }`}
          >
            {view}
          </p>
        </div>
        <p
          className={`shrink-0 font-mono text-[7.5px] uppercase tracking-[0.1em] sm:text-[8px] ${
            dark ? "text-white/55" : "text-ink/45"
          }`}
        >
          {sku}
        </p>
      </div>
    </div>
  );
}
