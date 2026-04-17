import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
type Props = {
  onPrint: () => void;
};

const PrintButton = ({ onPrint }: Props) => {
  return (
    <Button variant="outline" className="flex gap-2"onClick={onPrint}>
      <Printer className="w-4 h-4" />
      Print
    </Button>
  );
};

export default PrintButton;
