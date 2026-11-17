import Link from "next/link";

interface LogoProps {
  tone?: "light" | "dark";
  className?: string;
}

export function Logo({ tone = "light", className = "" }: LogoProps) {
  const dark = tone === "dark";

  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="Sai Kiran Poultry Equipments — home"
    >
      <span
        className={`grid h-8 w-8 shrink-0 place-items-center rounded-[4px] ${
          dark ? "bg-white text-ink" : "bg-ink text-white"
        }`}
      >
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.45" strokeWidth="1.3" />
          <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
            <path d="M12 12c.1-3.1 1.3-5.3 3.5-5.9 1.5-.4 2.6.7 2.4 2.2-.3 2.6-3 3.9-5.9 3.7Z" />
            <path d="M12 12c-2.7-1.6-4.2-3.4-3.8-5.7.3-1.5 1.7-2.1 2.9-1.2 2.1 1.6 1.9 4.6.9 6.9Z" />
            <path d="M12 12c2.9.9 4.7 2.2 4.7 4.5 0 1.5-1.3 2.3-2.6 1.6-2.4-1.2-2.7-3.9-2.1-6.1Z" />
          </g>
          <circle cx="12" cy="12" r="1.2" fill="currentColor" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-[13.5px] font-semibold uppercase tracking-[0.16em] ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          Sai Kiran
        </span>
        <span
          className={`mt-[5px] font-mono text-[8.5px] uppercase tracking-[0.2em] ${
            dark ? "text-white/55" : "text-ink-mute"
          }`}
        >
          Poultry Equipments
        </span>
      </span>
    </Link>
  );
}
