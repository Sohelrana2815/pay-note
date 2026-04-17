"use client";

import { InvoiceValues } from "@/types";
import { forwardRef } from "react";

interface InvoicePreviewProps {
  data: InvoiceValues;
}

/**
 * InvoicePreview
 *
 * The inner white `<div ref={ref}>` is the EXACT element that:
 *  - renders as the live preview
 *  - gets captured by html2canvas for PDF download
 *  - gets sent to react-to-print for printing
 *
 * Design: inspired by Star Tech Ltd invoice — clean header, ruled table,
 * accent-colored column headers, bold total row.
 */
const InvoicePreview = forwardRef<HTMLDivElement, InvoicePreviewProps>(
  ({ data }, ref) => {
    if (!data) return null;
    const subtotal = (data.items ?? []).reduce(
      (sum, item) => sum + item.itemQuantity * (Number(item.itemPrice) || 0),
      0,
    );

    return (
      /* ── Outer card: screen-only chrome (shadow, rounded border, bg) ── */
      <div className="rounded-xl border border-gray-200 shadow-lg bg-gray-100 p-3">
        {/*
         * ── Printable / capturable region ──────────────────────────────
         * Keep this div pure white with NO outer shadow/border so that
         * html2canvas and react-to-print both get a clean A4-like surface.
         */}
        <div
          ref={ref}
          className="bg-white w-full"
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            minHeight: "842px", // A4 height approximation at 96dpi
          }}
        >
          {/* ══════════════════════════════════════════════════════════════
              HEADER — logo left, company info right (mirrors Star Tech)
          ══════════════════════════════════════════════════════════════ */}
          <div className="flex items-start justify-between px-10 pt-10 pb-6">
            {/* Left: Logo + Business Name */}
            <div className="flex items-center gap-4">
              {data.logoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={data.logoUrl}
                  alt="Business logo"
                  className="h-16 w-16 object-contain"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              ) : (
                /* Placeholder box when no logo is provided */
                <div
                  className="h-16 w-16 flex items-center justify-center rounded"
                  style={{ background: "#b91c1c" }}
                >
                  <span className="text-white text-xs font-bold text-center leading-tight px-1">
                    {data.businessName
                      ? data.businessName.slice(0, 3).toUpperCase()
                      : "BIZ"}
                  </span>
                </div>
              )}

              <div>
                <h1
                  className="text-3xl font-extrabold tracking-tight leading-none"
                  style={{ color: "#b91c1c" }}
                >
                  {data.businessName || (
                    <span className="text-gray-300">Your Business</span>
                  )}
                </h1>
                {/* Document type badge below business name */}
                <span
                  className="inline-block mt-1 text-xs font-semibold uppercase tracking-widest px-2 py-0.5 rounded"
                  style={{ background: "#1f2937", color: "#fff" }}
                >
                  {data.type || "INVOICE"}
                </span>
              </div>
            </div>

            {/* Right: Contact / Invoice meta */}
            <div className="text-right text-sm" style={{ color: "#374151" }}>
              {data.clientEmail && (
                <p className="font-medium">
                  <span className="font-bold">Email:</span> {data.clientEmail}
                </p>
              )}
              {data.clientPhone && (
                <p>
                  <span className="font-bold">Phone:</span> {data.clientPhone}
                </p>
              )}
              {/* Invoice # and date as URL-style line, like Star Tech's site URL */}
              <p className="mt-1 text-xs" style={{ color: "#6b7280" }}>
                Invoice #{data.invoiceNumber || "—"} &nbsp;|&nbsp;{" "}
                {data.date && !isNaN(new Date(data.date).getTime())
                  ? new Date(data.date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })
                  : "—"}
              </p>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              BILLED TO — thin separator then client info
          ══════════════════════════════════════════════════════════════ */}
          <div
            className="mx-10 mb-6 pb-4"
            style={{ borderBottom: "1.5px solid #e5e7eb" }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-1"
              style={{ color: "#9ca3af" }}
            >
              Billed To
            </p>
            <p className="text-base font-bold" style={{ color: "#111827" }}>
              {data.clientName || (
                <span className="text-gray-300">Client Name</span>
              )}
            </p>
            {data.clientEmail && (
              <p className="text-sm" style={{ color: "#6b7280" }}>
                {data.clientEmail}
              </p>
            )}
            {data.clientPhone && (
              <p className="text-sm" style={{ color: "#6b7280" }}>
                {data.clientPhone}
              </p>
            )}
          </div>

          {/* ══════════════════════════════════════════════════════════════
              ITEMS TABLE — exact Star Tech layout:
              Component | Product Name | Price | (subtotal column)
          ══════════════════════════════════════════════════════════════ */}
          <div className="px-10">
            <table
              className="w-full"
              style={{
                borderCollapse: "collapse",
                border: "1px solid #d1d5db",
              }}
            >
              {/* Column headers — gray background, muted text, like Star Tech */}
              <thead>
                <tr style={{ background: "#f3f4f6" }}>
                  <th
                    className="text-left text-xs font-semibold uppercase tracking-wider px-4 py-3"
                    style={{
                      color: "#9ca3af",
                      border: "1px solid #d1d5db",
                      width: "5%",
                    }}
                  >
                    #
                  </th>
                  <th
                    className="text-left text-xs font-semibold uppercase tracking-wider px-4 py-3"
                    style={{
                      color: "#9ca3af",
                      border: "1px solid #d1d5db",
                      width: "45%",
                    }}
                  >
                    Product Name
                  </th>
                  <th
                    className="text-right text-xs font-semibold uppercase tracking-wider px-4 py-3"
                    style={{
                      color: "#9ca3af",
                      border: "1px solid #d1d5db",
                      width: "15%",
                    }}
                  >
                    Qty
                  </th>
                  <th
                    className="text-right text-xs font-semibold uppercase tracking-wider px-4 py-3"
                    style={{
                      color: "#9ca3af",
                      border: "1px solid #d1d5db",
                      width: "17.5%",
                    }}
                  >
                    Unit Price
                  </th>
                  <th
                    className="text-right text-xs font-semibold uppercase tracking-wider px-4 py-3"
                    style={{
                      color: "#9ca3af",
                      border: "1px solid #d1d5db",
                      width: "17.5%",
                    }}
                  >
                    Total
                  </th>
                </tr>
              </thead>

              <tbody>
                {data?.items.map((item, i) => {
                  const lineTotal =
                    item.itemQuantity * (Number(item.itemPrice) || 0);
                  const isEven = i % 2 === 0;
                  return (
                    <tr
                      key={i}
                      style={{ background: isEven ? "#fff" : "#f9fafb" }}
                    >
                      {/* Row number */}
                      <td
                        className="px-4 py-3 text-sm text-center"
                        style={{
                          color: "#9ca3af",
                          border: "1px solid #e5e7eb",
                        }}
                      >
                        {i + 1}
                      </td>
                      {/* Product name — left aligned, prominent */}
                      <td
                        className="px-4 py-3 text-sm"
                        style={{
                          color: "#111827",
                          border: "1px solid #e5e7eb",
                        }}
                      >
                        {item.itemName || (
                          <span style={{ color: "#d1d5db" }}>—</span>
                        )}
                      </td>
                      {/* Qty */}
                      <td
                        className="px-4 py-3 text-sm text-right"
                        style={{
                          color: "#374151",
                          border: "1px solid #e5e7eb",
                        }}
                      >
                        {item.itemQuantity}
                      </td>
                      {/* Unit price */}
                      <td
                        className="px-4 py-3 text-sm text-right"
                        style={{
                          color: "#374151",
                          border: "1px solid #e5e7eb",
                        }}
                      >
                        ${Number(item.itemPrice || 0).toLocaleString("en-BD")}
                      </td>
                      {/* Line total */}
                      <td
                        className="px-4 py-3 text-sm text-right font-semibold"
                        style={{
                          color: "#111827",
                          border: "1px solid #e5e7eb",
                        }}
                      >
                        ${lineTotal.toLocaleString("en-BD")}
                      </td>
                    </tr>
                  );
                })}

                {/* ── TOTAL ROW — mirrors Star Tech bold bottom row ── */}
                <tr style={{ background: "#f3f4f6" }}>
                  <td
                    colSpan={4}
                    className="px-4 py-3 text-right text-sm font-bold uppercase tracking-wider"
                    style={{ color: "#111827", border: "1px solid #d1d5db" }}
                  >
                    Total:
                  </td>
                  <td
                    className="px-4 py-3 text-right text-sm font-extrabold"
                    style={{ color: "#b91c1c", border: "1px solid #d1d5db" }}
                  >
                    ${subtotal.toLocaleString("en-BD")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              FOOTER — payment method + notes
          ══════════════════════════════════════════════════════════════ */}
          {(data.paymentMethod || data.notes) && (
            <div
              className="flex justify-between gap-8 mx-10 mt-8 pt-6 pb-10"
              style={{ borderTop: "1px solid #e5e7eb" }}
            >
              {data.paymentMethod && (
                <div>
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color: "#9ca3af" }}
                  >
                    Payment Method
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "#374151" }}
                  >
                    {data.paymentMethod}
                  </p>
                </div>
              )}
              {data.notes && (
                <div className="text-right max-w-xs">
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color: "#9ca3af" }}
                  >
                    Notes
                  </p>
                  <p className="text-sm" style={{ color: "#6b7280" }}>
                    {data.notes}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════
              BOTTOM STRIP — subtle brand strip like Star Tech URL footer
          ══════════════════════════════════════════════════════════════ */}
          {/* <div
            className="mt-auto px-10 py-3 flex justify-between items-center text-xs"
            style={{
              background: "#1f2937",
              color: "#9ca3af",
              marginTop: "auto",
            }}
          >
            <span>{data.businessName || "Your Business"}</span>
            <span>
              Invoice #{data.invoiceNumber || "—"} &nbsp;·&nbsp;{" "}
              {data.date && !isNaN(new Date(data.date).getTime())
                ? new Date(data.date).toLocaleDateString("en-GB")
                : "—"}
            </span>
          </div> */}
        </div>
      </div>
    );
  },
);

InvoicePreview.displayName = "InvoicePreview";
export default InvoicePreview;
