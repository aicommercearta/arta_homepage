import type { Metadata } from "next";
import WalkthroughClient from "./WalkthroughClient";
import { CASE_STUDIES } from "./case-studies";

const PAGE_URL = "https://artaaicommerce.com/brands-walkthrough";
const SITE_URL = "https://artaaicommerce.com";
const OG_IMAGE = "https://artaaicommerce.com/video-pilot/01_arta_hq.png";

export const metadata: Metadata = {
  title: "Brands by Arta — A Walk Through the Studio | ARTA AI Commerce",
  description:
    "Scroll through seven brands built inside the Arta ecosystem — AYRSMELL, Bharat Yug, AYANALIFE, She Heals, Bodhi Life, Kissomatcha. From idea to scalable D2C brand, end-to-end.",
  keywords: [
    "Arta brands",
    "brand portfolio India",
    "D2C brands India",
    "ARTA AI Commerce",
    "AYRSMELL",
    "Bharat Yug",
    "AYANALIFE",
    "She Heals",
    "Bodhi Life",
    "Kissomatcha",
    "brand building India",
    "dropshipping brands",
    "creator-led commerce",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: "website",
    title: "Brands by Arta — A Walk Through the Studio",
    description:
      "Seven brands, one ecosystem. Walk through the brands Arta built — fragrance, jewellery, wellness, senior living, matcha.",
    url: PAGE_URL,
    siteName: "ARTA AI Commerce",
    locale: "en_IN",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: "ARTA studio — the workspace where Arta brands are built",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brands by Arta — A Walk Through the Studio",
    description: "Seven brands, one ecosystem. Walk through the brands Arta built.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD structured data: Organization + ItemList of brands + Breadcrumb.
// Content is all literal objects defined here — no user input, no fetched
// data — so JSON.stringify -> dangerouslySetInnerHTML is the standard
// Next.js pattern for JSON-LD and is safe here.
function buildJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ARTA AI Commerce",
    alternateName: "Arta",
    url: SITE_URL,
    logo: `${SITE_URL}/arta-logo-wordmark.svg`,
    email: "hello@artaaicommerce.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    description:
      "Brand infrastructure and AI commerce systems. Arta builds brands end-to-end and gives existing brand teams AI-powered operational tools.",
    sameAs: [],
  };

  const brandList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Brands built by Arta",
    description: "Seven brands built inside the Arta ecosystem.",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: Object.keys(CASE_STUDIES).length,
    itemListElement: Object.values(CASE_STUDIES).map((cs, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Brand",
        name: cs.brand,
        description: cs.promise,
        category: cs.category,
        image: `${SITE_URL}${cs.heroImage}`,
      },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Brands by Arta", item: PAGE_URL },
    ],
  };

  return [organization, brandList, breadcrumb];
}

export default function BrandsWalkthroughPage() {
  const jsonLd = buildJsonLd();

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <WalkthroughClient />
    </>
  );
}
