const InvoicePreview = () => {
  return (
    <div className="flex justify-center min-h-screen rounded-md">
      {/* A4 Page Container */}
      <div className="w-[210mm] min-h-[297mm] bg-white p-[15mm] shadow-2xl flex flex-col font-sans text-slate-800 print:shadow-none print:p-0">
        {/* Header: Logo and Business Info */}
        <div className="flex justify-between items-start border-b-2 border-orange-500 pb-6 mb-8">
          <div className="flex gap-6 items-center">
            {/* Logo Placeholder */}
            <div className="w-24 h-24 bg-zinc-200 flex items-center justify-center rounded border border-dashed border-zinc-400">
              <span className="text-xs text-zinc-500">Logo</span>
            </div>

            <div>
              <h1 className="text-3xl font-extrabold text-orange-600 tracking-tight uppercase">
                Business Name
              </h1>
              <div className="mt-1 text-sm space-y-0.5 font-medium">
                <p>Phone: 16793</p>
                <p>Email: webteam@business.com</p>
                <p>https://www.business.com.bd</p>
              </div>
            </div>
          </div>

          <div className="text-right">
            <h2 className="text-xl font-bold uppercase text-zinc-500">
              Invoice
            </h2>
            <p className="text-sm font-semibold mt-1">#INV-2026-001</p>
            <p className="text-sm">Date: 18/04/2026</p>
          </div>
        </div>

        {/* Client Details Section */}
        <div className="grid grid-cols-2 gap-8 mb-8 text-sm">
          <div className="border border-zinc-300 p-4 rounded-sm">
            <h3 className="font-bold uppercase text-zinc-400 border-b mb-2 pb-1">
              Bill To:
            </h3>
            <p className="font-bold text-lg">Client Name</p>
            <p>client.email@example.com</p>
            <p>+880 1XXX-XXXXXX</p>
          </div>
        </div>

        {/* Main Items Table (Bordered Edges) */}
        <div className="grow">
          <table className="w-full border-collapse border border-zinc-400">
            <thead>
              <tr className="bg-zinc-50 text-sm uppercase text-zinc-600">
                <th className="border border-zinc-400 p-3 text-left w-1/2 font-bold">
                  Item Description
                </th>
                <th className="border border-zinc-400 p-3 text-center font-bold">
                  Qty
                </th>
                <th className="border border-zinc-400 p-3 text-right font-bold">
                  Unit Price
                </th>
                <th className="border border-zinc-400 p-3 text-right font-bold">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Sample Rows */}
              {[1, 2, 3].map((_, i) => (
                <tr key={i} className="text-sm h-12">
                  <td className="border border-zinc-400 px-3 py-2">
                    Product or Service Name {i + 1}
                  </td>
                  <td className="border border-zinc-400 px-3 py-2 text-center">
                    1
                  </td>
                  <td className="border border-zinc-400 px-3 py-2 text-right">
                    10,000৳
                  </td>
                  <td className="border border-zinc-400 px-3 py-2 text-right font-medium">
                    10,000৳
                  </td>
                </tr>
              ))}
              {/* Empty Space Rows to Fill Height */}
              {[...Array(8)].map((_, i) => (
                <tr key={`empty-${i}`} className="h-10">
                  <td className="border border-zinc-400"></td>
                  <td className="border border-zinc-400"></td>
                  <td className="border border-zinc-400"></td>
                  <td className="border border-zinc-400"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Totals and Summary Section */}
        <div className="flex justify-end mt-6">
          <div className="w-1/3">
            <table className="w-full border-collapse border border-zinc-400 text-sm">
              <tbody>
                <tr>
                  <td className="border border-zinc-400 p-2 font-semibold">
                    Sub Total:
                  </td>
                  <td className="border border-zinc-400 p-2 text-right">
                    30,000৳
                  </td>
                </tr>
                <tr>
                  <td className="border border-zinc-400 p-2 font-semibold text-zinc-500">
                    Tax Rate:
                  </td>
                  <td className="border border-zinc-400 p-2 text-right">5%</td>
                </tr>
                <tr>
                  <td className="border border-zinc-400 p-2 font-semibold text-zinc-500">
                    Discount:
                  </td>
                  <td className="border border-zinc-400 p-2 text-right text-red-600">
                    -500৳
                  </td>
                </tr>
                <tr className="bg-zinc-100">
                  <td className="border border-zinc-400 p-2 font-bold text-lg">
                    Total:
                  </td>
                  <td className="border border-zinc-400 p-2 text-right font-bold text-lg">
                    31,000৳
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer / Notes */}
        <div className="mt-12 pt-4 border-t border-zinc-200 text-xs text-zinc-400 italic">
          <p>
            Notes: Please make all checks payable to the business name above.
            Thank you for your business!
          </p>
          <p className="mt-4 text-center font-normal">
            This is a computer-generated invoice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvoicePreview;
