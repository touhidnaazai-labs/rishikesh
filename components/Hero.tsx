"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import PropertyImage from "./PropertyImage";
import { BookStayButton } from "./CtaButtons";
import Link from "next/link";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll parallax: the background image drifts down more slowly than the
  // page scrolls past it, giving the hero depth as you scroll away from it.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 160]);

  return (
    <section ref={sectionRef} className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-charcoal">
      <motion.div
        className="absolute inset-0"
        style={{ y: parallaxY }}
        initial={{ scale: shouldReduceMotion ? 1 : 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <PropertyImage
          src="/images/hero/hero-1.jpg"
          alt="A double bed room at Hotel Chandreshwar, Rishikesh"
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-charcoal/20" />
        <div className="absolute inset-0 bg-charcoal/10" />
      </motion.div>

      <div className="relative z-10 flex h-full flex-col justify-end">
        <div className="container-editorial pb-28 md:pb-16">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-ivory/80 text-xs md:text-sm tracking-[0.3em] mb-5"
          >
            RISHIKESH • UTTARAKHAND
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ivory leading-[0.95] tracking-tight"
          >
            Hotel
            <br />
            Chandreshwar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="mt-6 font-display italic text-2xl md:text-3xl text-ivory/90"
          >
            Your Comfortable Stay in Rishikesh
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.75 }}
            className="mt-4 max-w-md text-ivory/70 text-sm md:text-base leading-relaxed"
          >
            AC &amp; Non-AC rooms in Chandreshwar Nagar, close to the heart of
            Rishikesh.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.75 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <BookStayButton size="lg" label="Book Your Stay" />
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 text-ivory text-sm tracking-wide border-b border-ivory/40 pb-1 hover:border-ivory transition-colors"
            >
              Explore Rooms
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-ivory/70"
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="size-5" aria-hidden />
        </motion.div>
      </motion.div>
    </section>
  );
}
