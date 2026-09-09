import { hotel } from "@/data/hotel";
import { siteUrl } from "@/data/site";

/**
 * Renders one or more JSON-LD <script> blocks. Only factual, confirmed
 * information is included — no invented reviews, ratings, stars, awards,
 * or opening year. Price range is omitted entirely while pricing is
 * unconfirmed (data/hotel.ts pricing fields are null).
 */
export function HotelStructuredData() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: hotel.name,
    description: hotel.shortDescription,
    url: siteUrl,
    telephone: hotel.contact.primaryPhoneDial,
    email: hotel.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${hotel.address.line1}, ${hotel.address.line2}, ${hotel.address.locality}`,
      addressLocality: hotel.address.city,
      addressRegion: hotel.address.state,
      postalCode: hotel.address.postalCode,
      addressCountry: "IN",
    },
    hasMap: hotel.googleMapsUrl,
    numberOfRooms: hotel.rooms.total,
    amenityFeature: [...hotel.amenitiesConfirmed, ...hotel.servicesConfirmed].map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
  };

  if (hotel.geo.verified) {
    data.geo = {
      "@type": "GeoCoordinates",
      latitude: hotel.geo.latitude,
      longitude: hotel.geo.longitude,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbStructuredData({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqStructuredData({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
