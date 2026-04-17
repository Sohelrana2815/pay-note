import { InvoiceValues } from "@/types";

export const defaultInvoiceData: InvoiceValues = {
  type: "Invoice" as const,
  businessName: "",
  logoUrl: "",
  invoiceNumber: "",
  date: new Date(),

  clientName: "",
  clientEmail: "",
  clientPhone: "",

  items: [
    {
      itemName: "",
      itemQuantity: 1,
      itemPrice: 0,
    },
  ],

  taxRate: 0,
  discount: 0,

  paymentMethod: "",
  notes: "",
};
