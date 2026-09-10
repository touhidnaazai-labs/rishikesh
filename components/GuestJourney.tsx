"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { PhoneCall, DoorOpen, Compass, RefreshCw } from "lucide-react";

type Step = {
  index: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const steps: Step[] = [
  {
    index: "01",
    title: "Arrive",
    description: "Call or WhatsApp ahead — the hotel team confirms your room and is ready when you get to Chandreshwar Nagar.",
    icon: PhoneCall,
  },
  {
    index: "02",
    title: "Settle In",
    description: "A clean double-bed room, AC or Non-AC, with an attached bathroom and hot water waiting.",
    icon: DoorOpen,
  },
  {
    index: "03",
    title: "Explore Rishikesh",
    description: "Ghats, bridges, ashrams and markets are all within reach — see our Rishikesh guide for planning it.",
    icon: Compass,
  },
  {
    index: "04",
    title: "Come Back Anytime",
    description: "Same direct line, same personal team — booking your next stay is just a call or message away.",
    icon: RefreshCw,
  },
];

// Individual step: its own useInView + animate, matching the pattern
// that reliably triggers elsewhere (CountUp, ClipReveal) rather than
// the whileInView prop with a raw target object, which proved flaky
// for at least one sibling case in this project.
function JourneyStep({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const shouldReduceMotion = useReducedMotion();
  const hiddenX = shouldReduceMotion ? 0 : -20;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: hiddenX }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: hiddenX }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="relative z-10 flex size-12 items-center justify-center rounded-full bg-ivory border border-charcoal/15 mb-5">
        <step.icon className="size-5 text-terracotta" aria-hidden />
      </div>
      <p className="font-display text-sm text-terracotta/70 mb-1">{step.index}</p>
      <h3 className="font-display text-2xl text-charcoal mb-2">{step.title}</h3>
      <p className="text-sm text-charcoal/60 leading-relaxed max-w-[260px]">{step.description}</p>
    </motion.div>
  );
}

export default function GuestJourney() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-100px 0px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="container-editorial py-24 md:py-32">
      <motion.div
        ref={headingRef}
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
        animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: shouldReduceMotion ? 0 : 24 }}
        transition={{ duration: 0.7 }}
        className="max-w-xl mb-16 md:mb-20"
      >
        <p className="text-xs tracking-[0.25em] text-terracotta mb-4">THE STAY</p>
        <h2 className="font-display text-4xl md:text-5xl text-charcoal text-balance">
          What Staying at Hotel Chandreshwar Looks Like
        </h2>
      </motion.div>

      <div className="relative">
        {/* Connecting line */}
        <div
          aria-hidden
          className="hidden md:block absolute top-6 left-0 right-0 h-px bg-charcoal/10"
        />
        <div className="grid md:grid-cols-4 gap-10 md:gap-6">
          {steps.map((step, i) => (
            <JourneyStep key={step.title} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
