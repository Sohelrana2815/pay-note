import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

const CopyButton = () => {
  return (
    <Button variant="outline" className="flex gap-2">
      <Copy className="w-4 h-4" />
      Copy Summary
    </Button>
  );
};

export default CopyButton;
