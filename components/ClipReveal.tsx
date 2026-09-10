"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

/**
 * Reveals its children (typically a large image) with a directional
 * clip-path wipe rather than a plain fade — a more editorial entrance
 * for hero-adjacent photography. Falls back to a simple fade when the
 * viewer has prefers-reduced-motion set.
 *
 * Uses the useInView hook + `animate` (like CountUp.tsx) rather than
 * the declarative `whileInView` prop — whileInView proved unreliable
 * here: the clip-path could get stuck at its fully-clipped initial
 * state and never transition, which also prevented the wrapped
 * next/image from ever loading.
 */
export default function ClipReveal({
  children,
  className,
  direction = "left",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "up";
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const shouldReduceMotion = useReducedMotion();

  const clipFrom =
    direction === "left"
      ? "inset(0 100% 0 0)"
      : direction === "right"
        ? "inset(0 0 0 100%)"
        : "inset(100% 0 0 0)";

  const hiddenState = shouldReduceMotion ? { opacity: 0 } : { clipPath: clipFrom, opacity: 1 };
  const visibleState = shouldReduceMotion ? { opacity: 1 } : { clipPath: "inset(0 0 0 0)", opacity: 1 };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hiddenState}
      animate={inView ? visibleState : hiddenState}
      transition={{ duration: shouldReduceMotion ? 0.6 : 1.1, delay, ease: [0.65, 0, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}
