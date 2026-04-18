"use client";
import { Button } from "@/components/ui/button";
import { resetInvoice } from "@/store/features/invoiceSlice";
import { useAppDispatch } from "@/store/hooks";
import { RotateCcw } from "lucide-react";

const ResetButton = () => {
  const dispatch = useAppDispatch();
  return (
    <Button
      variant="ghost"
      type="button"
      className="text-muted-foreground hover:text-destructive flex gap-2"
      onClick={() => dispatch(resetInvoice())}
    >
      <RotateCcw className="w-4 h-4" />
      Reset Form
    </Button>
  );
};

export default ResetButton;
