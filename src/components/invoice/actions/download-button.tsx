import { Button } from "@/components/ui/button";
import { InvoiceValues } from "@/types";
import { FileDown } from "lucide-react";
import { RefObject } from "react";
type Props = {
  invoiceData: InvoiceValues;
  printRef: RefObject<HTMLDivElement | null>;
};

const DownloadButton = ({ invoiceData, printRef }: Props) => {
  const handleDownload = async () => {
    const element = printRef.current;
    if (!element) return;

    const { default: html2canvas } = await import("html2canvas");
    const { default: jsPDF } = await import("jspdf");

    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true,
      backgroundColor: "#ffffff",
      logging: false,
    });

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * pageWidth) / canvas.width;
    pdf.addImage(
      canvas.toDataURL("image/png"),
      "PNG",
      0,
      0,
      pageWidth,
      imgHeight,
    );
    pdf.save(`${invoiceData.invoiceNumber || "invoice"}.pdf`);
  };
  return (
    <Button onClick={handleDownload} className="flex gap-2">
      <FileDown className="w-4 h-4" />
      Download PDF
    </Button>
  );
};

export default DownloadButton;
