import { InvoiceValues } from "@/types";
import CopyButton from "./copy-button";
import DownloadButton from "./download-button";
import PrintButton from "./print-button";
import ResetButton from "./reset-button";
import { RefObject } from "react";

type Props = {
  invoiceData: InvoiceValues;
  onReset: () => void;
  onPrint: () => void;
  printRef: RefObject<HTMLDivElement | null>;
};
const ActionBar = ({ invoiceData, onReset, onPrint, printRef }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <CopyButton invoiceData={invoiceData} />
        <PrintButton onPrint={onPrint}  />
        <DownloadButton invoiceData={invoiceData} printRef={printRef} />
      </div>
      <ResetButton onReset={onReset} />
    </div>
  );
};

export default ActionBar;
