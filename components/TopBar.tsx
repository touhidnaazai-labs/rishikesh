import { MapPin, Phone, Mail } from "lucide-react";
import { hotel } from "@/data/hotel";

/**
 * Slim utility bar above the main header — address/phone/email, always
 * visible. No social icons: no social profiles have been confirmed yet
 * (see data/hotel.ts `socials`), so nothing is linked there rather than
 * guessing or fabricating accounts.
 */
export default function TopBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 hidden sm:block bg-charcoal text-ivory/80 text-xs">
      <div className="container-editorial flex items-center justify-between h-9">
        <div className="flex items-center gap-5 truncate">
          <span className="flex items-center gap-1.5 truncate">
            <MapPin className="size-3.5 shrink-0" aria-hidden />
            <span className="truncate">{hotel.address.locality}, {hotel.address.city}</span>
          </span>
          <a href={`mailto:${hotel.contact.email}`} className="hidden md:flex items-center gap-1.5 hover:text-terracotta transition-colors">
            <Mail className="size-3.5" aria-hidden />
            {hotel.contact.email}
          </a>
        </div>
        <a href={`tel:${hotel.contact.primaryPhoneDial}`} className="flex items-center gap-1.5 hover:text-terracotta transition-colors shrink-0">
          <Phone className="size-3.5" aria-hidden />
          {hotel.contact.primaryPhone}
        </a>
      </div>
    </div>
  );
}
