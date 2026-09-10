"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import clsx from "clsx";
import { mainNav } from "@/data/site";
import { hotel } from "@/data/hotel";
import { buildTelLink, buildWhatsAppLink } from "@/lib/booking";
import { BookStayButton } from "./CtaButtons";

const iconHover = { scale: 1.08 };
const iconTap = { scale: 0.94 };

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Close the mobile menu on navigation. Adjusted during render (React's
  // recommended pattern) rather than in an effect, to avoid a cascading
  // render from setState-in-effect.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !isHome || open;

  // Clicking the logo while already on "/" is a same-route navigation,
  // which Next.js skips entirely — including its usual scroll-to-top —
  // so nothing happens. Scroll up manually in that case.
  function handleLogoClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 sm:top-9 z-40 transition-colors duration-300",
        solid ? "bg-ivory/95 backdrop-blur shadow-[0_2px_16px_rgba(25,24,23,0.06)]" : "bg-transparent"
      )}
    >
      <div className="container-editorial flex items-center justify-between py-4 md:py-5">
        <Link href="/" onClick={handleLogoClick} className="flex flex-col leading-none group">
          <span
            className={clsx(
              "font-display text-lg md:text-xl tracking-[0.18em] transition-colors",
              solid ? "text-charcoal" : "text-ivory"
            )}
          >
            HOTEL
          </span>
          <span
            className={clsx(
              "font-display text-lg md:text-xl tracking-[0.18em] -mt-1 transition-colors",
              solid ? "text-terracotta" : "text-ivory"
            )}
          >
            CHANDRESHWAR
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {mainNav.slice(1).map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "group relative py-1 text-sm tracking-wide transition-colors",
                  solid ? "text-charcoal" : "text-ivory"
                )}
              >
                {link.label}
                <span
                  className={clsx(
                    "absolute left-0 -bottom-0.5 h-px bg-terracotta transition-all duration-300 ease-out",
                    active ? "w-full" : "w-0 group-hover:w-full"
                  )}
                  aria-hidden
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${hotel.contact.primaryPhoneDial}`}
            className={clsx(
              "hidden xl:flex items-center gap-2 text-sm transition-colors hover:opacity-70 mr-1",
              solid ? "text-charcoal" : "text-ivory"
            )}
          >
            <Phone className="size-4" aria-hidden />
            {hotel.contact.primaryPhone}
          </a>

          <motion.a
            href={buildTelLink()}
            aria-label="Call Hotel Chandreshwar"
            title="Call Now"
            whileHover={iconHover}
            whileTap={iconTap}
            className={clsx(
              "flex size-10 items-center justify-center rounded-full border transition-colors",
              solid
                ? "border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-ivory"
                : "border-ivory/50 text-ivory hover:bg-ivory hover:text-charcoal"
            )}
          >
            <Phone className="size-4" aria-hidden />
          </motion.a>

          <motion.a
            href={buildWhatsAppLink({})}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Hotel Chandreshwar"
            title="WhatsApp Us"
            whileHover={iconHover}
            whileTap={iconTap}
            className={clsx(
              "flex size-10 items-center justify-center rounded-full border transition-colors",
              solid
                ? "border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-ivory"
                : "border-ivory/50 text-ivory hover:bg-ivory hover:text-charcoal"
            )}
          >
            <MessageCircle className="size-4" aria-hidden />
          </motion.a>

          <BookStayButton size="md" />
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={clsx("lg:hidden p-2 -mr-2 transition-colors", solid ? "text-charcoal" : "text-ivory")}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-charcoal/10 bg-ivory">
          <nav className="container-editorial flex flex-col py-4">
            {mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-charcoal text-base border-b border-charcoal/5 last:border-none"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="mt-4 inline-flex items-center justify-center bg-terracotta text-ivory py-3 text-sm font-medium tracking-wide"
            >
              Book Your Stay
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
