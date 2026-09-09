"use client";

import { useState, FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CalendarCheck, CalendarDays, Users, BedDouble } from "lucide-react";

type Props = {
  /** Compact = hero card (no name/phone/message, just the quick check). */
  compact?: boolean;
  defaultRoomType?: string;
  className?: string;
};

/**
 * Booking inquiry widget. There is no live PMS/inventory yet, so this never
 * claims real-time availability — submitting routes to /book with the
 * chosen dates/guests/room pre-filled, where the full inquiry (WhatsApp +
 * website form) is sent.
 */
export default function BookingInquiryPanel({ compact = false, defaultRoomType = "any", className }: Props) {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [roomType, setRoomType] = useState(defaultRoomType);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    if (guests) params.set("guests", guests);
    if (roomType) params.set("roomType", roomType);
    router.push(`/book?${params.toString()}`);
  }

  const today = new Date().toISOString().slice(0, 10);

  return (
    <form
      onSubmit={handleSubmit}
      className={
        className ??
        "grid grid-cols-2 md:grid-cols-5 gap-px bg-charcoal/10 border border-charcoal/10 shadow-xl"
      }
    >
      <Field label="Check-in" icon={CalendarDays}>
        <input
          type="date"
          min={today}
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="w-full bg-ivory pl-8 pr-3 py-3 text-sm text-charcoal outline-none"
          aria-label="Check-in date"
        />
      </Field>
      <Field label="Check-out" icon={CalendarDays}>
        <input
          type="date"
          min={checkIn || today}
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="w-full bg-ivory pl-8 pr-3 py-3 text-sm text-charcoal outline-none"
          aria-label="Check-out date"
        />
      </Field>
      <Field label="Guests" icon={Users}>
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full bg-ivory pl-8 pr-3 py-3 text-sm text-charcoal outline-none"
          aria-label="Number of guests"
        >
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>
              {n} Guest{n > 1 ? "s" : ""}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Room Preference" icon={BedDouble}>
        <select
          value={roomType}
          onChange={(e) => setRoomType(e.target.value)}
          className="w-full bg-ivory pl-8 pr-3 py-3 text-sm text-charcoal outline-none"
          aria-label="Room preference"
        >
          <option value="any">No Preference</option>
          <option value="ac">AC Double Bed Room</option>
          <option value="non-ac">Non-AC Double Bed Room</option>
        </select>
      </Field>
      <button
        type="submit"
        className="flex items-center justify-center gap-2 bg-terracotta text-ivory text-sm font-medium tracking-wide py-3.5 px-4 hover:bg-brown transition-colors col-span-2 md:col-span-1"
      >
        <CalendarCheck className="size-4" aria-hidden />
        {compact ? "Check Availability" : "Continue"}
      </button>
    </form>
  );
}

function Field({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <label className="relative bg-ivory flex flex-col">
      <span className="px-4 pt-2 text-[10px] tracking-[0.14em] text-charcoal/50">{label.toUpperCase()}</span>
      <Icon className="absolute left-3 bottom-3 size-3.5 text-terracotta pointer-events-none" aria-hidden />
      {children}
    </label>
  );
}

export function useBookingDefaultsFromSearchParams() {
  const params = useSearchParams();
  return {
    checkIn: params.get("checkIn") || "",
    checkOut: params.get("checkOut") || "",
    guests: params.get("guests") || "2",
    roomType: params.get("roomType") || "any",
  };
}
