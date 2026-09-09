import type { Metadata } from "next";
import { MapPin, Navigation, Phone } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import PropertyImage from "@/components/PropertyImage";
import CopyAddressButton from "@/components/CopyAddressButton";
import { BookStayButton, WhatsAppButton } from "@/components/CtaButtons";
import { hotel } from "@/data/hotel";

export const metadata: Metadata = {
  title: "Location — Hotel in Chandreshwar Nagar, Rishikesh",
  description:
    "Hotel Chandreshwar is located near Durga Mandir, Dayanand Ashram Road, Chandreshwar Nagar, Rishikesh. Get directions, call, or WhatsApp the hotel directly.",
  alternates: { canonical: "/location" },
};

export default function LocationPage() {
  return (
    <div className="pt-28 md:pt-36 pb-24 md:pb-32">
      <div className="container-editorial">
        <Breadcrumbs items={[{ name: "Location", url: "/location" }]} />

        <Reveal className="max-w-2xl mt-6 mb-14">
          <p className="text-xs tracking-[0.25em] text-terracotta mb-4">LOCATION</p>
          <h1 className="font-display text-5xl md:text-6xl text-charcoal text-balance">
            Hotel in Chandreshwar Nagar, Rishikesh
          </h1>
          <p className="mt-6 text-charcoal/70 leading-relaxed">
            Hotel Chandreshwar sits in Chandreshwar Nagar, near Durga Mandir and
            Dayanand Ashram Road — a residential, quieter part of Rishikesh that
            still keeps you within reach of the town&rsquo;s ghats, markets and main
            attractions.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 mb-20 md:mb-28">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden bg-charcoal/5">
              <iframe
                title="Hotel Chandreshwar location map"
                src={hotel.googleMapsEmbedUrl}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col justify-center">
            <div className="flex items-start gap-3 mb-6">
              <MapPin className="size-5 text-terracotta mt-1 shrink-0" aria-hidden />
              <address className="not-italic text-charcoal/80 leading-relaxed">
                {hotel.address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={hotel.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-terracotta text-ivory px-5 py-3 text-sm hover:bg-brown transition-colors"
              >
                <Navigation className="size-4" aria-hidden />
                Get Directions
              </a>
              <CopyAddressButton />
              <a
                href={`tel:${hotel.contact.primaryPhoneDial}`}
                className="inline-flex items-center gap-2 border border-charcoal/20 px-5 py-3 text-sm text-charcoal hover:border-charcoal transition-colors"
              >
                <Phone className="size-4" aria-hidden />
                Call Hotel
              </a>
              <WhatsAppButton
                variant="secondary"
                className="!border-charcoal/20 !text-charcoal hover:!bg-charcoal hover:!text-ivory"
                label="WhatsApp Hotel"
              />
            </div>

            <p className="mt-8 text-sm text-charcoal/50 leading-relaxed">
              Coordinates and exact walking distances to specific ghats are being
              confirmed with the owner — use &ldquo;Get Directions&rdquo; above for the most
              accurate route from wherever you&rsquo;re starting.
            </p>
          </Reveal>
        </div>

        {/* Local SEO content block */}
        <Reveal className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-20">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-5">
              Why Stay in Chandreshwar Nagar
            </h2>
            <p className="text-charcoal/70 leading-relaxed">
              Chandreshwar Nagar is a residential neighbourhood near Durga Mandir
              on Dayanand Ashram Road — a calmer alternative to staying right at
              the busiest ghats, while still being a straightforward auto-rickshaw
              or short walk from central Rishikesh.
            </p>
            <p className="mt-4 text-charcoal/70 leading-relaxed">
              Whether you&rsquo;re visiting for the Ganga, a yoga programme, a family
              trip, or simply passing through on a longer Uttarakhand itinerary,
              Hotel Chandreshwar offers 10 double-bed rooms (7 AC, 3 Non-AC),
              each with an attached bathroom and hot water, and direct booking by
              phone or WhatsApp — no third-party platform required.
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <div className="relative aspect-[4/3] w-full max-w-sm overflow-hidden border border-charcoal/10 shadow-sm">
              <PropertyImage
                src="/images/property/exterior-1.jpg"
                alt="Hotel Chandreshwar building exterior in Chandreshwar Nagar, Rishikesh"
                fill
                sizes="(min-width: 768px) 384px, 100vw"
              />
            </div>
          </div>
        </Reveal>

        <Reveal className="text-center bg-[#efe9dd] py-16 px-6">
          <h2 className="font-display text-3xl md:text-4xl text-charcoal">Book a Room Nearby</h2>
          <p className="mt-3 text-charcoal/70">Direct booking — call, WhatsApp, or send an enquiry.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <BookStayButton size="lg" label="Book Nearby" />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
