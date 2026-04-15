import { z } from "zod";

export const invoiceTypes = ["invoice", "receipt"] as const;

// 1. Define the item schema first

export const itemSchema = z.object({
  itemName: z.string().min(3, "Item name is required"),
  quantity: z.coerce.number().min(1, "Quantity must be at least 1"),
  price: z.coerce.number().min(0, "Price cannot be negative"),
});

// 2. Define the main schema

export const invoiceSchema = z.object({
  type: z.enum(invoiceTypes),
  invoiceNumber: z.string().min(3, "Invoice Number is required"),
  date: z.coerce.date(),
  // 3. Business and client details
  businessName: z.string().min(3, "Business name is required"),
  logoUrl: z.url("Invalid URL").optional().or(z.literal("")),
  clientName: z.string().min(3, "Client Name is required"),
  clientEmail: z.email("Invalid email").optional().or(z.literal("")),

  // Nested Array
  items: z.array(itemSchema).min(1, "At least one item is required"),

  // Adjustments
  taxRate: z.coerce.number().default(0),
  dsiCountRate: z.coerce.number().default(0),
  paymentMethod: z.string().optional(),
  notes: z.string().optional(),
});
