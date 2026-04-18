"use client";
import { useRef } from "react";
import Hero from "@/components/hero/hero";
import InvoiceForm from "@/components/invoice/invoice-form";
import InvoicePreview from "@/components/invoice/invoice-preview";

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <div>
      <Hero />
      <hr className="my-12 border-t border-gray-200" />
      {/* max-w-7xl ensures it doesn't get too wide.
         lg:flex-row allows side-by-side on desktop.
         items-start prevents the preview from stretching vertically.
      */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 max-w-7xl mx-auto px-4 pb-20">
        <div className="w-full lg:w-137.5 shrink-0">
          <InvoiceForm contentRef={contentRef} />
        </div>

        {/* Right Side: Preview (Flexible but with a max-width) */}
        <div className="flex-1 w-full sticky top-10">
          <InvoicePreview ref={contentRef} />
        </div>
      </div>
    </div>
  );
}

// relative left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] w-screen my-12 border-t border-gray-200
