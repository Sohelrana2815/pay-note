import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

const DownloadButton = () => {
  return (
    <Button className="flex gap-2">
      <FileDown className="w-4 h-4" />
      Download PDF
    </Button>
  );
};

export default DownloadButton;
