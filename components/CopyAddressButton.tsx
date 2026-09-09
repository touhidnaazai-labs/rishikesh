"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { hotel } from "@/data/hotel";

export default function CopyAddressButton() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(hotel.address.full);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard API unavailable — fail silently, address is visible on page
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 border border-charcoal/20 px-5 py-3 text-sm text-charcoal hover:border-charcoal transition-colors"
    >
      {copied ? <Check className="size-4 text-sage" aria-hidden /> : <Copy className="size-4" aria-hidden />}
      {copied ? "Address Copied" : "Copy Address"}
    </button>
  );
}
