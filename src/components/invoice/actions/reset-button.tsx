import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

type Props = {
  onReset: () => void;
};

const ResetButton = ({ onReset }: Props) => {
  return (
    <Button
      variant="ghost"
      type="button"
      onClick={onReset}
      className="text-muted-foreground hover:text-destructive flex gap-2"
    >
      <RotateCcw className="w-4 h-4" />
      Reset Form
    </Button>
  );
};

export default ResetButton;
