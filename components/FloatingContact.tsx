"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Phone, X } from "lucide-react";
import { buildTelLink, buildWhatsAppLink } from "@/lib/booking";

/**
 * Floating call/WhatsApp button, bottom-right. Desktop/tablet only
 * (md and up) — on mobile the fixed bottom action bar already covers
 * Call/WhatsApp/Book, so this would just duplicate it.
 */
export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-end gap-2.5"
          >
            <a
              href={buildWhatsAppLink({})}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-ivory text-charcoal pl-4 pr-3 py-2.5 shadow-lg border border-charcoal/10 text-sm hover:bg-charcoal hover:text-ivory transition-colors"
            >
              WhatsApp Us
              <span className="flex size-8 items-center justify-center rounded-full bg-sage text-ivory shrink-0">
                <MessageCircle className="size-4" aria-hidden />
              </span>
            </a>
            <a
              href={buildTelLink()}
              className="flex items-center gap-2.5 bg-ivory text-charcoal pl-4 pr-3 py-2.5 shadow-lg border border-charcoal/10 text-sm hover:bg-charcoal hover:text-ivory transition-colors"
            >
              Call Now
              <span className="flex size-8 items-center justify-center rounded-full bg-terracotta text-ivory shrink-0">
                <Phone className="size-4" aria-hidden />
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close contact options" : "Contact Hotel Chandreshwar"}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        animate={open ? {} : { boxShadow: ["0 0 0 0 rgba(201,106,50,0.35)", "0 0 0 12px rgba(201,106,50,0)"] }}
        transition={open ? { duration: 0.2 } : { duration: 2, repeat: Infinity, ease: "easeOut" }}
        className="flex size-14 items-center justify-center rounded-full bg-terracotta text-ivory shadow-xl"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="close" initial={{ rotate: -45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 45, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="size-6" aria-hidden />
            </motion.span>
          ) : (
            <motion.span key="open" initial={{ rotate: 45, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -45, opacity: 0 }} transition={{ duration: 0.15 }}>
              <MessageCircle className="size-6" aria-hidden />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
