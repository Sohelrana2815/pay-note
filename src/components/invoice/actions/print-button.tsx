// @/components/invoice/actions/print-button.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import { useReactToPrint } from "react-to-print";
interface PrintButtonProps {
  contentRef: React.RefObject<HTMLDivElement | null>;
}
const PrintButton = ({ contentRef }: PrintButtonProps) => {
  const handlePrint = useReactToPrint({
    contentRef: contentRef, // v3 এর সঠিক নিয়ম
    documentTitle: "Invoice",
  });

  return (
    <Button
      type="button"
      variant="outline"
      className="flex gap-2"
      onClick={() => handlePrint()}
    >
      <Printer className="w-4 h-4" />
      Print
    </Button>
  );
};

export default PrintButton;
