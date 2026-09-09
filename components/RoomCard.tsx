import Link from "next/link";
import { Snowflake, BedDouble, Bath, Droplets } from "lucide-react";
import RoomCardImage from "./RoomCardImage";
import { Room } from "@/data/rooms";
import { formatPrice } from "@/lib/format";

const featureIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Double bed": BedDouble,
  "Attached bathroom": Bath,
  "Hot water": Droplets,
  "Air conditioning": Snowflake,
};

export default function RoomCard({ room, reverse = false }: { room: Room; reverse?: boolean }) {
  return (
    <article
      className={`grid md:grid-cols-2 gap-8 md:gap-14 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
    >
      <RoomCardImage
        href={`/rooms/${room.slug}`}
        images={room.images}
        countLabel={`${room.count} ROOMS AVAILABLE`}
      />

      <div>
        <p className="text-xs tracking-[0.25em] text-terracotta mb-3">
          {room.type === "AC" ? "AIR CONDITIONED" : "NON AIR CONDITIONED"}
        </p>
        <h3 className="font-display text-3xl md:text-4xl text-charcoal">{room.name}</h3>
        <p className="mt-4 text-charcoal/70 leading-relaxed max-w-md">{room.summary}</p>

        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
          {room.features.map((feature) => {
            const Icon = featureIcons[feature] ?? BedDouble;
            return (
              <li key={feature} className="flex items-center gap-2 text-sm text-charcoal/80">
                <Icon className="size-4 text-sage" aria-hidden />
                {feature}
              </li>
            );
          })}
        </ul>

        <p className="mt-6 text-sm text-charcoal/60">{formatPrice(room.price)}</p>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href={`/rooms/${room.slug}`}
            className="inline-flex items-center justify-center border border-charcoal px-6 py-3 text-sm tracking-wide text-charcoal hover:bg-charcoal hover:text-ivory transition-colors"
          >
            View Room
          </Link>
          <Link
            href={`/book?roomType=${room.type === "AC" ? "ac" : "non-ac"}`}
            className="inline-flex items-center justify-center bg-terracotta px-6 py-3 text-sm tracking-wide text-ivory hover:bg-brown transition-colors"
          >
            Book This Room
          </Link>
        </div>
      </div>
    </article>
  );
}
