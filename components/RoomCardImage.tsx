"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import PropertyImage from "./PropertyImage";
import { RoomImage } from "@/data/rooms";

/**
 * Room card photo: cycles through the room's photos on hover (desktop) via
 * a crossfade, so the card feels alive without needing the visitor to
 * click through. Falls back to the first photo, statically, on touch
 * devices where there's no hover.
 */
export default function RoomCardImage({
  href,
  images,
  countLabel,
}: {
  href: string;
  images: RoomImage[];
  countLabel: string;
}) {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);

  function handleEnter() {
    setHovering(true);
  }
  function handleLeave() {
    setHovering(false);
    setIndex(0);
  }
  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (images.length <= 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    const next = Math.min(images.length - 1, Math.floor(ratio * images.length));
    if (next !== index) setIndex(next);
  }

  return (
    <Link
      href={href}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onMouseMove={handleMove}
      className="group relative block aspect-[4/3] overflow-hidden bg-charcoal"
    >
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
        <AnimatePresence mode="sync">
          <motion.div
            key={images[index].src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <PropertyImage
              src={images[index].src}
              alt={images[index].alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <span className="absolute top-4 left-4 bg-ivory/95 text-charcoal text-[11px] tracking-[0.14em] px-3 py-1.5">
        {countLabel}
      </span>

      {images.length > 1 && (
        <div className="absolute bottom-4 left-4 flex gap-1.5">
          {images.map((img, i) => (
            <span
              key={img.src}
              className={`h-1 rounded-full transition-all duration-300 ${
                hovering && i === index ? "w-6 bg-ivory" : "w-1.5 bg-ivory/50"
              }`}
            />
          ))}
        </div>
      )}
    </Link>
  );
}
