import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

const PrintButton = () => {
  return (
    <Button variant="outline" className="flex gap-2">
      <Printer className="w-4 h-4" />
      Print
    </Button>
  );
};

export default PrintButton;
