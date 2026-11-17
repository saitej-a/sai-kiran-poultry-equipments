import type { ReactNode, SVGProps } from "react";

export type IconName =
  | "arrow-right"
  | "arrow-up-right"
  | "chevron-down"
  | "chevron-right"
  | "menu"
  | "close"
  | "phone"
  | "mail"
  | "pin"
  | "clock"
  | "download"
  | "whatsapp"
  | "shield"
  | "droplet"
  | "wind"
  | "thermometer"
  | "layers"
  | "wrench"
  | "truck"
  | "ruler"
  | "bolt"
  | "feed"
  | "grid"
  | "check"
  | "document"
  | "factory";

export const iconPaths: Record<IconName, ReactNode> = {
  "arrow-right": <path d="M4 12h15M13 6l6 6-6 6" />,
  "arrow-up-right": <path d="M7 17 17 7M8 7h9v9" />,
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  "chevron-right": <path d="m9 6 6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  phone: (
    <path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  download: <path d="M12 4v10m0 0 4-4m-4 4-4-4M4 18v2h16v-2" />,
  whatsapp: (
    <>
      <path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.5L3.5 20.5l1.3-4.3A8.5 8.5 0 1 1 20.5 11.8Z" />
      <path d="M8.8 9c.2 2.2 2.4 4.4 4.6 4.6l1.2-1.2 2 .9v1.4c0 .5-.5.9-1 .9-4.7-.3-8.4-4-8.7-8.7 0-.5.4-.9.9-.9h1.4l.9 2L8.8 9Z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 2.5v5.7c0 4.3-2.9 7.4-7 9.3-4.1-1.9-7-5-7-9.3V5.5L12 3Z" />
      <path d="m9 11.8 2.2 2.2L15.4 10" />
    </>
  ),
  droplet: <path d="M12 3.5c3 3.6 5.5 6.4 5.5 9.3a5.5 5.5 0 0 1-11 0c0-2.9 2.5-5.7 5.5-9.3Z" />,
  wind: <path d="M3 8.5h9.5a2.5 2.5 0 1 0-2.5-2.5M3 12h13.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h6.5" />,
  thermometer: (
    <>
      <path d="M14 14.6V5.5a2 2 0 0 0-4 0v9.1a4.2 4.2 0 1 0 4 0Z" />
      <path d="M12 9.5v5.8" />
    </>
  ),
  layers: <path d="m12 3 8 4-8 4-8-4 8-4Zm8 9-8 4-8-4m16 4.5-8 4-8-4" />,
  wrench: (
    <path d="M15.5 3.5a5 5 0 0 0-4.2 7.7L4 18.5 5.5 20l7.3-7.3A5 5 0 0 0 20.5 8l-3 1.2-2.2-2.2 1.2-3Z" />
  ),
  truck: (
    <>
      <path d="M3 6h10v10H3zM13 9h4l3 3.2V16h-7" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
    </>
  ),
  ruler: (
    <>
      <rect x="2.5" y="8.5" width="19" height="7" rx="1" />
      <path d="M7 8.5v3M11 8.5v4M15 8.5v3M19 8.5v4" />
    </>
  ),
  bolt: <path d="M13.5 3 6 13.5h4.5L10 21l7.5-10.5H13L13.5 3Z" />,
  feed: (
    <>
      <path d="M12 3v9" />
      <circle cx="12" cy="15.5" r="4.5" />
      <circle cx="12" cy="15.5" r="1.4" />
    </>
  ),
  grid: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" />
      <rect x="13.5" y="3.5" width="7" height="7" />
      <rect x="3.5" y="13.5" width="7" height="7" />
      <rect x="13.5" y="13.5" width="7" height="7" />
    </>
  ),
  check: <path d="m4.5 12.5 4.8 4.8L19.5 7" />,
  document: (
    <>
      <path d="M6 3.5h7.5L19 9v11.5H6V3.5Z" />
      <path d="M13 3.5V9h5.5M9 13h7M9 16.5h5" />
    </>
  ),
  factory: (
    <>
      <path d="M3 20.5V9.5l5 3v-3l5 3v-3l5 3v8H3Z" />
      <path d="M7 20.5v-3.5h3v3.5M15 17.5h2" />
    </>
  ),
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

export function Icon({ name, size = 18, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {iconPaths[name]}
    </svg>
  );
}
