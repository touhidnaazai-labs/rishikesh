import Link from "next/link";
import PropertyImage from "./PropertyImage";
import { Room } from "@/data/rooms";
import { formatPrice } from "@/lib/format";

/**
 * Compact card-grid room teaser for the homepage — photo, name, one-line
 * summary, price/tariff note, View + Book. The full editorial room
 * sections (data + features + description) live on /rooms; this is
 * intentionally a smaller "quick pick" variant, not a duplicate of it.
 */
export default function RoomTeaserCard({ room }: { room: Room }) {
  return (
    <div className="group bg-ivory border border-charcoal/10 overflow-hidden">
      <Link href={`/rooms/${room.slug}`} className="relative block aspect-[4/3] overflow-hidden">
        <span className="absolute top-3 left-3 z-10 bg-terracotta text-ivory text-[10px] tracking-[0.12em] px-2.5 py-1">
          {room.type === "AC" ? "AC ROOM" : "NON-AC ROOM"}
        </span>
        <PropertyImage
          src={room.images[0].src}
          alt={room.images[0].alt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="p-5">
        <h3 className="font-display text-xl text-charcoal">{room.name}</h3>
        <p className="mt-1.5 text-sm text-charcoal/60 leading-snug">{room.summary}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-xs text-charcoal/50">{formatPrice(room.price)}</span>
          <Link
            href={`/rooms/${room.slug}`}
            className="shrink-0 border border-charcoal/20 px-4 py-2 text-xs tracking-wide text-charcoal hover:bg-charcoal hover:text-ivory transition-colors"
          >
            View Room
          </Link>
        </div>
      </div>
    </div>
  );
}
