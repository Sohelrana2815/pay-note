import { invoiceSchema, itemSchema } from "@/schemas/zodSchema";
import z from "zod";

export type InvoiceValues = z.infer<typeof invoiceSchema>;

export type InvoiceItem = z.infer<typeof itemSchema>;
