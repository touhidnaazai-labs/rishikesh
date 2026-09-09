import Link from "next/link";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { buildTelLink, buildWhatsAppLink } from "@/lib/booking";

/**
 * Fixed bottom mobile action bar: CALL | WHATSAPP | BOOK.
 * Hidden on md+ (desktop already has clear header/hero CTAs).
 * Server component — plain links, no client JS needed.
 */
export default function MobileActionBar() {
  return (
    <nav
      aria-label="Quick booking actions"
      className="fixed inset-x-0 bottom-0 z-50 flex md:hidden border-t border-charcoal/10 bg-ivory/95 backdrop-blur supports-[backdrop-filter]:bg-ivory/90 shadow-[0_-4px_16px_rgba(25,24,23,0.08)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={buildTelLink()}
        className="flex flex-1 flex-col items-center gap-1 py-2.5 text-[11px] font-medium text-charcoal active:bg-charcoal/5"
      >
        <Phone className="size-5" aria-hidden />
        Call
      </a>
      <a
        href={buildWhatsAppLink({})}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 flex-col items-center gap-1 py-2.5 text-[11px] font-medium text-charcoal border-x border-charcoal/10 active:bg-charcoal/5"
      >
        <MessageCircle className="size-5" aria-hidden />
        WhatsApp
      </a>
      <Link
        href="/book"
        className="flex flex-1 flex-col items-center gap-1 py-2.5 text-[11px] font-semibold text-ivory bg-terracotta active:bg-brown"
      >
        <CalendarCheck className="size-5" aria-hidden />
        Book
      </Link>
    </nav>
  );
}
