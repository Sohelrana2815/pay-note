// @/components/invoice/actions/copy-button.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useAppSelector } from "@/store/hooks";
import { useState } from "react";

const CopyButton = () => {
  const [copied, setCopied] = useState(false);

  // 1. Get the current live data from Redux
  const data = useAppSelector((state) => state.invoice);

  const handleCopy = async () => {
    // 2. Calculate the Final Total (Sync with your Preview logic)
    const subtotal = data.items.reduce(
      (acc, item) => acc + item.itemQuantity * item.itemPrice,
      0,
    );
    const taxAmount = subtotal * ((data.taxRate ?? 0) / 100);
    const discountAmount = subtotal * ((data.discount ?? 0) / 100);
    const finalTotal = subtotal + taxAmount - discountAmount;

    // 3. Format the Summary String
    const summary = `
Invoice Summary:
----------------
Client: ${data.clientName || "N/A"}
Date: ${data.date || "N/A"}
Total: ${finalTotal.toLocaleString("en-US", { minimumFractionDigits: 2 })} USD
    `.trim();

    // 4. Copy to Clipboard
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset icon after 2 seconds
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      className="flex gap-2 transition-all"
      onClick={handleCopy}
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-600" />
      ) : (
        <Copy className="w-4 h-4" />
      )}
      {copied ? "Copied!" : "Copy Summary"}
    </Button>
  );
};

export default CopyButton;
