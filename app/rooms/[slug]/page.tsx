import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Snowflake, BedDouble, Bath, Droplets } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import PropertyImage from "@/components/PropertyImage";
import { BookStayButton, WhatsAppButton } from "@/components/CtaButtons";
import { rooms, getRoomBySlug } from "@/data/rooms";
import { formatPrice } from "@/lib/format";

const featureIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Double bed": BedDouble,
  "Attached bathroom": Bath,
  "Hot water": Droplets,
  "Air conditioning": Snowflake,
};

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) return {};
  return {
    title: `${room.name} — Hotel Chandreshwar, Rishikesh`,
    description: room.summary,
    alternates: { canonical: `/rooms/${room.slug}` },
  };
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) notFound();

  return (
    <div className="pt-28 md:pt-36">
      <div className="container-editorial">
        <Breadcrumbs items={[{ name: "Rooms", url: "/rooms" }, { name: room.name, url: `/rooms/${room.slug}` }]} />
      </div>

      {/* Large photography */}
      <section className="container-editorial mt-8 grid md:grid-cols-3 gap-2">
        <div className="md:col-span-2 relative aspect-[4/3] md:aspect-[16/11] overflow-hidden">
          <PropertyImage src={room.images[0].src} alt={room.images[0].alt} fill priority sizes="(min-width: 768px) 66vw, 100vw" />
        </div>
        <div className="grid grid-rows-2 gap-2">
          {room.images.slice(1, 3).map((img) => (
            <div key={img.src} className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
              <PropertyImage src={img.src} alt={img.alt} fill sizes="33vw" />
            </div>
          ))}
        </div>
      </section>

      <section className="container-editorial py-16 md:py-24 grid md:grid-cols-[1.4fr_1fr] gap-14">
        <Reveal>
          <p className="text-xs tracking-[0.25em] text-terracotta mb-4">
            {room.type === "AC" ? "AIR CONDITIONED" : "NON AIR CONDITIONED"} · {room.count} ROOMS AVAILABLE
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-charcoal">{room.heading}</h1>
          {room.description.map((para) => (
            <p key={para} className="mt-5 text-charcoal/70 leading-relaxed max-w-xl">
              {para}
            </p>
          ))}

          <h2 className="font-display text-2xl text-charcoal mt-10 mb-5">Facilities</h2>
          <ul className="grid grid-cols-2 gap-4 max-w-md">
            {room.features.map((feature) => {
              const Icon = featureIcons[feature] ?? BedDouble;
              return (
                <li key={feature} className="flex items-center gap-2.5 text-sm text-charcoal/80">
                  <Icon className="size-4 text-sage" aria-hidden />
                  {feature}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border border-charcoal/10 p-8 sticky top-28">
            <p className="text-xs tracking-[0.2em] text-charcoal/50 mb-2">TARIFF</p>
            <p className="text-charcoal font-display text-2xl">{formatPrice(room.price)}</p>
            <div className="mt-6 flex flex-col gap-3">
              <BookStayButton size="lg" label="Book This Room" className="w-full" />
              <WhatsAppButton size="lg" label="Ask on WhatsApp" className="w-full" message={{ roomType: room.type === "AC" ? "ac" : "non-ac" }} />
            </div>
            <p className="mt-5 text-xs text-charcoal/50 leading-relaxed">
              No online payment yet — every booking is confirmed personally by the
              hotel team over call or WhatsApp.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
