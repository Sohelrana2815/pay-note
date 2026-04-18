import CopyButton from "./copy-button";
import DownloadButton from "./download-button";
import PrintButton from "./print-button";
import ResetButton from "./reset-button";
interface ActionBarProps {
  contentRef: React.RefObject<HTMLDivElement | null>;
}
const ActionBar = ({ contentRef }: ActionBarProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <CopyButton />
        <PrintButton contentRef={contentRef} />
        {/* <DownloadButton /> */}
        <ResetButton />
      </div>
    </div>
  );
};

export default ActionBar;
