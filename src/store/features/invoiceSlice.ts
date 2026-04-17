import { defaultInvoiceData } from "@/lib/validators/invoice";
import { InvoiceValues } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: InvoiceValues = defaultInvoiceData;

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    setInvoiceData: (state, action: PayloadAction<InvoiceValues>) => {
      return { ...action.payload };
    },
    resetInvoice: () => initialState,
  },
});

export const { setInvoiceData, resetInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;
