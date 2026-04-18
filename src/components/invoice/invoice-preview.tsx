"use client";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import { format } from "date-fns";
import { forwardRef } from "react";
const InvoicePreview = forwardRef<HTMLDivElement>((props, ref) => {
  // 1. Get the live data from Redux
  const data = useAppSelector((state) => state.invoice);
  // 2. Calculate Totals
  const subtotal = data.items.reduce(
    (acc, item) => acc + item.itemQuantity * item.itemPrice,
    0,
  );

  // 3. Tax Rate

  const taxAmount = subtotal * ((data.taxRate ?? 0) / 100);
  const discountAmount = subtotal * ((data.discount ?? 0) / 100);
  const finalTotal = subtotal + taxAmount - discountAmount;
  // URL Validation Helper
  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      {/* A4 Page Container - Proper sizing */}
      <div
        ref={ref}
        id="invoice-print-area"
        className="w-[210mm] min-h-[297mm] bg-white p-8 my-8 shadow-2xl flex flex-col font-sans text-slate-800 print:w-full print:min-h-0 print:shadow-none print:m-0 print:p-12"
      >
        {/* Header: Logo and Business Info */}
        <div className="flex justify-between items-start border-b-2 border-orange-500 pb-4 mb-6">
          <div className="flex gap-4 items-center">
            {/* Logo - Smaller to fit better */}
            <div
              className={`w-20 h-20 bg-zinc-200 flex items-center justify-center rounded border border-zinc-400 overflow-hidden shrink-0 ${data.logoUrl ? "" : "border-dashed"}`}
            >
              {data.logoUrl && isValidUrl(data.logoUrl) ? (
                <Image
                  src={data.logoUrl}
                  alt="Logo"
                  width={80}
                  height={80}
                  unoptimized
                  className="object-contain"
                />
              ) : (
                <span className="text-[9px] uppercase text-zinc-400 font-bold">
                  No Logo
                </span>
              )}
            </div>

            <div>
              <h1 className="text-2xl font-extrabold text-orange-600 tracking-tight uppercase leading-tight">
                {data.businessName || "Your Business Name"}
              </h1>
            </div>
          </div>

          <div className="text-right text-sm shrink-0">
            <h2 className="text-xl font-bold text-zinc-400 uppercase tracking-widest">
              {data.type || "Invoice"}
            </h2>
            <p className="text-xs font-semibold mt-1">{data.invoiceNumber}</p>
            <p className="text-xs">
              Date: {format(data.date || new Date(), "dd/MM/yyyy")}
            </p>
          </div>
        </div>

        {/* Client Details Section - Reduced margins */}
        <div className="grid grid-cols-2 gap-6 mb-6 text-sm">
          <div className="border border-zinc-300 p-3 rounded-sm">
            <h3 className="font-bold uppercase text-xs text-zinc-400 border-b mb-2 pb-1">
              Bill To:
            </h3>
            <p className="font-bold text-base">
              {data.clientName || "Client Name"}
            </p>
            <p className="text-xs">{data.clientEmail || "Email"}</p>
            <p className="text-xs">{data.clientPhone || "Phone"}</p>
          </div>
        </div>

        {/* Main Items Table - Compact spacing */}
        <div className="grow">
          <table className="w-full border-collapse border border-zinc-400 text-xs">
            <thead>
              <tr className="bg-zinc-50 text-xs uppercase text-zinc-600">
                <th className="border border-zinc-400 p-2 text-left w-1/2 font-bold">
                  Item Description
                </th>
                <th className="border border-zinc-400 p-2 text-center font-bold">
                  Qty
                </th>
                <th className="border border-zinc-400 p-2 text-right font-bold">
                  Unit Price
                </th>
                <th className="border border-zinc-400 p-2 text-right font-bold">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {data.items?.map((item, i) => (
                <tr key={i} className="text-xs">
                  <td className="border border-zinc-400 px-2 py-1.5">
                    {item.itemName || "Item Name"}
                  </td>
                  <td className="border border-zinc-400 px-2 py-1.5 text-center">
                    {item.itemQuantity || 1}
                  </td>
                  <td className="border border-zinc-400 px-2 py-1.5 text-right">
                    {item.itemPrice
                      ? item.itemPrice.toLocaleString("en-US") + " USD"
                      : "0 USD"}
                  </td>
                  <td className="border border-zinc-400 px-2 py-1.5 text-right font-medium">
                    {(
                      (item.itemQuantity || 1) * (item.itemPrice || 0)
                    ).toLocaleString("en-US")}{" "}
                    USD
                  </td>
                </tr>
              ))}
              {/* Empty Space Rows */}
              {data.items?.length < 5 &&
                Array.from({ length: 5 - data.items?.length }).map((_, i) => (
                  <tr key={`empty-${i}`} className="h-8">
                    <td className="border border-zinc-400"></td>
                    <td className="border border-zinc-400"></td>
                    <td className="border border-zinc-400"></td>
                    <td className="border border-zinc-400"></td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {/* Totals Section - Compact */}
        <div className="flex justify-end mt-4">
          <div className="w-1/3 min-w-50">
            <table className="w-full border-collapse border border-zinc-400 text-xs">
              <tbody>
                <tr>
                  <td className="border border-zinc-400 p-1.5 font-semibold">
                    Sub Total:
                  </td>
                  <td className="border border-zinc-400 p-1.5 text-right">
                    {subtotal.toLocaleString("en-US")} USD
                  </td>
                </tr>
                <tr>
                  <td className="border border-zinc-400 p-1.5 font-semibold text-zinc-500">
                    Tax ({data.taxRate ? data.taxRate + "%" : "0%"})
                  </td>
                  <td className="border border-zinc-400 p-1.5 text-right">
                    {taxAmount.toLocaleString("en-US")} USD
                  </td>
                </tr>
                <tr>
                  <td className="border border-zinc-400 p-1.5 font-semibold text-zinc-500">
                    Discount ({data.discount ? data.discount + "%" : "0%"})
                  </td>
                  <td className="border border-zinc-400 p-1.5 text-right text-red-600">
                    {discountAmount.toLocaleString("en-US")} USD
                  </td>
                </tr>
                <tr className="bg-zinc-100">
                  <td className="border border-zinc-400 p-1.5 font-bold text-sm">
                    Total:
                  </td>
                  <td className="border border-zinc-400 p-1.5 text-right font-bold text-sm">
                    {finalTotal.toLocaleString("en-US")} USD
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer - Compact */}
        <div className="mt-6 pt-3 border-t border-zinc-200 text-xs text-zinc-400 italic">
          <p className="max-w-xs">{data.notes && `Notes: ${data.notes}`}</p>
          <p>{data.paymentMethod && `Payment Method: ${data.paymentMethod}`}</p>
        </div>
      </div>
    </div>
  );
});
InvoicePreview.displayName = "InvoicePreview";
export default InvoicePreview;
