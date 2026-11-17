import Link from "next/link";
import type { ReactNode } from "react";

import { Icon } from "@/components/ui/Icon";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  action?: { label: string; href: string };
  tone?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${className}`}>
      <div className="max-w-2xl">
        <p className={`eyebrow ${dark ? "text-white/55" : ""}`}>
          <span className={`mr-3 inline-block h-px w-6 align-middle ${dark ? "bg-white/35" : "bg-ink/30"}`} />
          {eyebrow}
        </p>
        <h2 className={`h2 mt-4 ${dark ? "text-white" : ""}`}>{title}</h2>
        {description ? (
          <p className={`mt-4 max-w-xl text-[15px] leading-[1.7] ${dark ? "text-white/65" : "text-ink-soft"}`}>
            {description}
          </p>
        ) : null}
      </div>
      {action ? (
        <Link
          href={action.href}
          className={`group inline-flex shrink-0 items-center gap-2 border-b pb-1 text-[13px] font-medium transition-colors duration-200 ${
            dark
              ? "border-white/25 text-white hover:border-white/70"
              : "border-ink/25 text-ink hover:border-brand-600 hover:text-brand-600"
          }`}
        >
          {action.label}
          <Icon name="arrow-right" size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      ) : null}
    </div>
  );
}
