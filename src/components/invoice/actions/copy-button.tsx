import { Button } from "@/components/ui/button";
import { InvoiceValues } from "@/types";
import { Copy } from "lucide-react";

type Props = {
  invoiceData: InvoiceValues;
};

const CopyButton = ({ invoiceData }: Props) => {
  const handleCopy = () => {
    const items = invoiceData.items
      .map((it) => `  • ${it.itemName} × ${it.itemQuantity} @ ৳${it.itemPrice}`)
      .join("\n");
    const subtotal = invoiceData.items.reduce(
      (s, it) => s + it.itemQuantity * Number(it.itemPrice || 0),
      0,
    );
    const text = [
      `${invoiceData.type || "INVOICE"} — #${invoiceData.invoiceNumber || ""}`,
      `Date: ${invoiceData.date ? new Date(invoiceData.date).toLocaleDateString("en-GB") : "—"}`,
      `From: ${invoiceData.businessName || "—"}`,
      `To: ${invoiceData.clientName || "—"} | ${invoiceData.clientEmail || ""} | ${invoiceData.clientPhone || ""}`,
      `\nItems:\n${items}`,
      `\nTotal: ৳${subtotal.toLocaleString()}`,
      invoiceData.paymentMethod ? `Payment: ${invoiceData.paymentMethod}` : "",
      invoiceData.notes ? `Notes: ${invoiceData.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    navigator.clipboard.writeText(text).then(() => alert("Copied!"));
  };

  return (
    <Button variant="outline" className="flex gap-2" onClick={handleCopy}>
      <Copy className="w-4 h-4" />
      Copy Summary
    </Button>
  );
};

export default CopyButton;
