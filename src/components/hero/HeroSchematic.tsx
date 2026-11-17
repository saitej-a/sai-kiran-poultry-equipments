import type { SVGProps } from "react";

const AIRFLOW = [
  "M94 212C198 192 300 250 456 232",
  "M94 250C200 242 318 300 456 266",
  "M94 296C210 318 330 252 456 300",
  "M94 340C220 360 340 302 456 332",
];

const PANS = [150, 216, 282, 348, 414];
const NIPPLES = [132, 166, 200, 234, 268, 302, 336, 370, 404, 438];

interface LineProps extends SVGProps<SVGPathElement> {
  d: string;
  delay: number;
}

function Line({ d, delay, ...props }: LineProps) {
  return (
    <path
      d={d}
      pathLength={1}
      className="draw-in"
      style={{ animationDelay: `${delay}s` }}
      {...props}
    />
  );
}

function Note({
  delay,
  className,
  children,
  ...props
}: SVGProps<SVGGElement> & { delay: number }) {
  return (
    <g className="fade-in" style={{ animationDelay: `${delay}s` }} {...props}>
      {children}
    </g>
  );
}

export function HeroSchematic() {
  return (
    <svg
      viewBox="0 82 560 354"
      className="block h-auto w-full"
      role="img"
      aria-label="Section drawing of a 120 by 40 foot tunnel-ventilated poultry house: cooling pad on the inlet wall, pan feeding line, nipple drinking line, and four 50-inch cone fans drawing air along the shed."
    >
      <defs>
        <marker
          id="air-arrow"
          viewBox="0 0 8 8"
          refX="6.5"
          refY="4"
          markerWidth="5.5"
          markerHeight="5.5"
          orient="auto-start-reverse"
        >
          <path d="M0.5 0.5 7 4 0.5 7.5" fill="none" stroke="#5AA487" strokeWidth="1.1" />
        </marker>
        <pattern id="pad-hatch" width="5" height="5" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="0" y2="5" stroke="#4E9077" strokeWidth="1" strokeOpacity="0.55" />
        </pattern>
      </defs>

      {/* structure */}
      <g stroke="#EDEFEA" strokeOpacity="0.62" strokeWidth="1.35" fill="none">
        <Line d="M88 186 280 116 468 186" delay={0.05} />
        <Line d="M88 186V370M468 186V370M88 370H468" delay={0.15} />
        <Line d="M88 186H468" delay={0.28} strokeOpacity="0.2" />
        <Line d="M280 116V370" delay={0.34} strokeOpacity="0.1" strokeDasharray="4 6" />
      </g>

      {/* cooling pad */}
      <g>
        <rect
          x="83"
          y="196"
          width="10"
          height="140"
          fill="url(#pad-hatch)"
          stroke="#4E9077"
          strokeOpacity="0.85"
          strokeWidth="1"
          className="fade-in"
          style={{ animationDelay: "0.5s" }}
        />
        <Note
          delay={0.66}
          fill="#EDEFEA"
          fillOpacity="0.5"
          fontFamily="var(--font-plex-mono), monospace"
          fontSize="9.4"
          letterSpacing="1.1"
        >
          <g transform="translate(78 332) rotate(-90)">
            <text x="0" y="0">COOLING PAD · 480 FT²</text>
          </g>
        </Note>
      </g>

      {/* fans */}
      <g>
        {[236, 300].map((cy, index) => (
          <g key={cy} stroke="#EDEFEA" strokeOpacity="0.55" fill="none">
            <rect
              x="448"
              y={cy - 26}
              width="40"
              height="52"
              strokeOpacity="0.22"
              className="fade-in"
              style={{ animationDelay: `${0.7 + index * 0.08}s` }}
            />
            <circle
              cx="468"
              cy={cy}
              r="21"
              strokeWidth="1.2"
              className="fade-in"
              style={{ animationDelay: `${0.74 + index * 0.08}s` }}
            />
            <g
              strokeWidth="1"
              strokeOpacity="0.75"
              className="fade-in"
              style={{ animationDelay: `${0.8 + index * 0.08}s` }}
            >
              <path d={`M468 ${cy}c0-9 4-14 10-14 4 0 6 3 5 6-2 5-9 7-15 8Z`} />
              <path d={`M468 ${cy}c-8-4-12-9-10-14 2-3 6-3 8-1 3 4 3 10 2 15Z`} />
              <path d={`M468 ${cy}c8 4 11 10 9 14-2 3-6 3-8 1-3-3-2-10-1-15Z`} />
            </g>
            <circle
              cx="468"
              cy={cy}
              r="2.2"
              fill="#EDEFEA"
              fillOpacity="0.6"
              stroke="none"
              className="fade-in"
              style={{ animationDelay: `${0.86 + index * 0.08}s` }}
            />
          </g>
        ))}
      </g>

      {/* feeding line */}
      <g>
        <Line d="M106 252H446" delay={0.5} stroke="#4E9077" strokeOpacity="0.9" strokeWidth="1.8" />
        <Note
          delay={0.62}
          stroke="#EDEFEA"
          strokeOpacity="0.5"
          fill="none"
          strokeWidth="1.1"
        >
          {PANS.map((x) => (
            <g key={x}>
              <path d={`M${x} 252v9`} />
              <circle cx={x} cy="270" r="8" />
              <circle cx={x} cy="270" r="3" strokeOpacity="0.3" />
            </g>
          ))}
        </Note>
        <Note
          delay={0.68}
          fontFamily="var(--font-plex-mono), monospace"
          fontSize="9.4"
          letterSpacing="1"
          fill="#EDEFEA"
          fillOpacity="0.55"
        >
          <text x="106" y="240">PAN FEED LINE · 45 MM</text>
        </Note>
      </g>

      {/* drinking line */}
      <g>
        <Line d="M106 306H446" delay={0.58} stroke="#EDEFEA" strokeOpacity="0.55" strokeWidth="1.3" />
        <Note delay={0.72} stroke="#4E9077" strokeOpacity="0.8" strokeWidth="1.1" fill="none">
          {NIPPLES.map((x) => (
            <g key={x}>
              <path d={`M${x} 306v8`} />
              <circle cx={x} cy="316" r="2.1" />
            </g>
          ))}
        </Note>
        <Note
          delay={0.78}
          fontFamily="var(--font-plex-mono), monospace"
          fontSize="9.4"
          letterSpacing="1"
          fill="#EDEFEA"
          fillOpacity="0.55"
        >
          <text x="106" y="338">NIPPLE LINE · SS 304</text>
        </Note>
      </g>

      {/* airflow */}
      <g stroke="#5AA487" fill="none">
        {AIRFLOW.map((d, index) => (
          <Line
            key={`base-${d}`}
            d={d}
            delay={0.9 + index * 0.07}
            strokeWidth="1.1"
            strokeOpacity="0.32"
            markerEnd="url(#air-arrow)"
          />
        ))}
        {AIRFLOW.map((d, index) => (
          <path
            key={`dash-${d}`}
            d={d}
            strokeWidth="2.1"
            strokeOpacity="0.85"
            strokeDasharray="2 30"
            strokeLinecap="round"
            className="animate-airflow"
            style={{ animationDelay: `${index * 0.9}s` }}
          />
        ))}
      </g>

      {/* dimensions */}
      <g stroke="#EDEFEA" strokeOpacity="0.28" strokeWidth="1" fill="none">
        <Line d="M88 392V402M468 392V402M88 398H468" delay={1.05} />
      </g>
      <Note
        delay={1.12}
        fill="#EDEFEA"
        fillOpacity="0.45"
        fontFamily="var(--font-plex-mono), monospace"
        fontSize="9.4"
        letterSpacing="1.2"
        textAnchor="middle"
      >
        <text x="278" y="418">120 FT · 4,800 FT² · 6,400 BIRDS</text>
      </Note>
    </svg>
  );
}
