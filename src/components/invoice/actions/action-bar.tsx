import CopyButton from "./copy-button";
import DownloadButton from "./download-button";
import PrintButton from "./print-button";
import ResetButton from "./reset-button";

type Props = {
  onReset: () => void;
};

const ActionBar = ({ onReset }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <CopyButton />
        <PrintButton />
        <DownloadButton />
      </div>
      <ResetButton onReset={onReset} />
    </div>
  );
};

export default ActionBar;
