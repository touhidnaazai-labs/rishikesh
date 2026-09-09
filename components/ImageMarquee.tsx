import PropertyImage from "./PropertyImage";

type MarqueeImage = { src: string; alt: string };

/**
 * A slow, continuous horizontal strip of photos — pauses on hover, respects
 * prefers-reduced-motion (globally disabled via globals.css). Pure CSS
 * animation, no JS needed, so this stays a server component.
 */
export default function ImageMarquee({ images }: { images: MarqueeImage[] }) {
  // Duplicate the list so the loop is seamless.
  const loop = [...images, ...images];

  return (
    <div className="group relative overflow-hidden py-1 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <div className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused]">
        {loop.map((img, i) => (
          <div key={`${img.src}-${i}`} className="relative h-48 w-64 md:h-64 md:w-80 shrink-0 overflow-hidden">
            <PropertyImage src={img.src} alt={img.alt} fill sizes="320px" />
          </div>
        ))}
      </div>
    </div>
  );
}
