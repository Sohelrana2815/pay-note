import { defaultInvoiceData } from "@/lib/validators/invoice";
import { InvoiceValues } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    ...defaultInvoiceData,
    resetToggle: 0,
  },
  reducers: {
    setInvoiceData: (state, action: PayloadAction<InvoiceValues>) => {
      return { ...state, ...action.payload };
    },
    resetInvoice: (state) => {
      state.resetToggle += 1;
    },
  },
});

export const { setInvoiceData, resetInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;
