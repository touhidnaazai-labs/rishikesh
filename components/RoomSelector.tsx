"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { BedDouble, Bath, Droplets, Snowflake, Users } from "lucide-react";
import PropertyImage from "./PropertyImage";
import { Room } from "@/data/rooms";
import { formatPrice } from "@/lib/format";

const featureIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Double bed": BedDouble,
  "Double occupancy": Users,
  "Attached bathroom": Bath,
  "Hot water": Droplets,
  "Air conditioning": Snowflake,
};

/**
 * Editorial room category selector for the homepage — a pill toggle
 * switches between room types, crossfading a large image and details
 * panel, instead of a static card grid. The full text detail (both
 * rooms, always in the DOM) still lives on /rooms for SEO/AEO.
 */
export default function RoomSelector({ rooms }: { rooms: Room[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const room = rooms[activeIndex];

  return (
    <div>
      <div className="flex gap-2 mb-10">
        {rooms.map((r, i) => (
          <button
            key={r.slug}
            onClick={() => setActiveIndex(i)}
            className={`px-5 py-2.5 text-xs tracking-[0.14em] border transition-colors ${
              i === activeIndex
                ? "bg-charcoal text-ivory border-charcoal"
                : "border-charcoal/20 text-charcoal/70 hover:border-charcoal"
            }`}
          >
            {r.type === "AC" ? "AC ROOM" : "NON-AC ROOM"}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 md:gap-14 items-stretch">
        <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden bg-charcoal">
          <AnimatePresence mode="wait">
            <motion.div
              key={room.slug}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <PropertyImage
                src={room.images[0].src}
                alt={room.images[0].alt}
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
              />
            </motion.div>
          </AnimatePresence>
          <span className="absolute top-4 left-4 z-10 bg-ivory/95 text-charcoal text-[11px] tracking-[0.14em] px-3 py-1.5">
            {room.count} ROOMS AVAILABLE
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={room.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            <p className="text-xs tracking-[0.25em] text-terracotta mb-3">
              {room.type === "AC" ? "AIR CONDITIONED" : "NON AIR CONDITIONED"}
            </p>
            <h3 className="font-display text-3xl md:text-4xl text-charcoal">{room.name}</h3>
            <p className="mt-4 text-charcoal/70 leading-relaxed">{room.summary}</p>

            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
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

            <p className="mt-6 font-display text-2xl text-charcoal">{formatPrice(room.price)}</p>

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
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
