"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion, animate } from "framer-motion";

/**
 * Animates a number counting up from 0 when it scrolls into view.
 * `value` can include a non-numeric suffix (e.g. via the `suffix` prop) —
 * for genuinely non-numeric stats (like "Direct"), just render the text
 * directly instead of using this component.
 */
export default function CountUp({
  value,
  suffix = "",
  duration = 1.4,
  className,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    // Reduced motion: skip the tween entirely and just show the final
    // value once it's in view — no animation, so no need for an
    // animate() controller.
    if (!inView || shouldReduceMotion) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, duration, shouldReduceMotion]);

  const shown = shouldReduceMotion ? value : display;

  return (
    <span ref={ref} className={className}>
      {inView || shouldReduceMotion ? shown : 0}
      {suffix}
    </span>
  );
}
