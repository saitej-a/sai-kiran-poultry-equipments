import type { Metadata } from "next";

import { Hero } from "@/components/hero/Hero";
import { CategoryBento } from "@/components/home/CategoryBento";
import { Bestsellers } from "@/components/home/Bestsellers";
import { Testimonials } from "@/components/home/Testimonials";
import { TurnkeyShowcase } from "@/components/home/TurnkeyShowcase";
import { WhyChoose } from "@/components/home/WhyChoose";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} — Poultry farm equipment manufacturer, Telangana`,
  description: site.description,
  alternates: { canonical: "/" },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  publisher: { "@id": `${site.url}/#organization` },
  inLanguage: "en-IN",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryBento />
      <TurnkeyShowcase />
      <WhyChoose />
      <Bestsellers />
      <Testimonials />
      <JsonLd id="website-schema" data={websiteSchema} />
    </>
  );
}
