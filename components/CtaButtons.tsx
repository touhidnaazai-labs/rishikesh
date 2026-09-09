import Link from "next/link";
import clsx from "clsx";
import { Phone, MessageCircle } from "lucide-react";
import { hotel } from "@/data/hotel";
import { buildWhatsAppLink, buildTelLink } from "@/lib/booking";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-medium tracking-wide transition-colors duration-200 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-terracotta text-ivory hover:bg-brown",
  secondary: "bg-transparent border border-ivory/70 text-ivory hover:bg-ivory hover:text-charcoal",
  ghost: "bg-charcoal text-ivory hover:bg-brown",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

/** Primary conversion CTA: "Book Your Stay" -> booking inquiry page. */
export function BookStayButton({
  variant = "primary",
  size = "md",
  className,
  label = "Book Your Stay",
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
  label?: string;
}) {
  return (
    <Link href="/book" className={clsx(base, variants[variant], sizes[size], className)}>
      {label}
    </Link>
  );
}

/** Secondary CTA: "WhatsApp Us" -> opens wa.me with a pre-filled generic inquiry. */
export function WhatsAppButton({
  variant = "secondary",
  size = "md",
  className,
  label = "WhatsApp Us",
  message,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
  label?: string;
  message?: Parameters<typeof buildWhatsAppLink>[0];
}) {
  return (
    <a
      href={buildWhatsAppLink(message || {})}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(base, variants[variant], sizes[size], className)}
    >
      <MessageCircle className="size-4" aria-hidden />
      {label}
    </a>
  );
}

/** Third CTA: "Call Now" -> tel: link, primary phone by default. */
export function CallButton({
  variant = "ghost",
  size = "md",
  className,
  label = "Call Now",
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
  label?: string;
}) {
  return (
    <a href={buildTelLink()} className={clsx(base, variants[variant], sizes[size], className)}>
      <Phone className="size-4" aria-hidden />
      {label}
    </a>
  );
}

export const whatsappHref = () => buildWhatsAppLink({});
export const primaryTelHref = () => buildTelLink(hotel.contact.primaryPhoneDial);
