import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";

import { QuoteBanner, SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/lib/site";

import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-mono",
  weight: ["400", "500"],
});

const defaultTitle = "Poultry equipment manufacturer in Telangana";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${defaultTitle}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "poultry equipment manufacturer Telangana",
    "automatic pan feeder",
    "nipple drinking system",
    "50 inch exhaust fan",
    "EC poultry house",
    "broiler farm equipment Sangareddy",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: site.name,
    title: `${site.name} — ${defaultTitle}`,
    description: site.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Sai Kiran Poultry Equipments — feeding, drinking and climate control systems for commercial poultry farms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${defaultTitle}`,
    description: site.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#121614",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.legalName,
  url: site.url,
  description: site.description,
  foundingDate: String(site.established),
  telephone: site.phone.tel,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.office.lines[0],
    addressLocality: "Bollaram, Sangareddy",
    addressRegion: "Telangana",
    postalCode: "502325",
    addressCountry: "IN",
  },
  areaServed: ["Telangana", "Andhra Pradesh", "Karnataka", "Maharashtra", "India"],
  knowsAbout: [
    "Automatic pan feeding systems",
    "Nipple drinking systems",
    "Tunnel ventilation and evaporative cooling",
    "Environment controlled poultry housing",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phone.tel,
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["en", "te", "hi"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${archivo.variable} ${plexMono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only z-[60] focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:rounded-[6px] focus:bg-ink focus:px-4 focus:py-2.5 focus:text-[13px] focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <QuoteBanner />
        <SiteFooter />
        <JsonLd id="organization-schema" data={organizationSchema} />
      </body>
    </html>
  );
}
