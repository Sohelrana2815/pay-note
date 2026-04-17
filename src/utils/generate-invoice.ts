export const generateInvoiceNumber = (prefix: string = "INV"): string => {
  const now = new Date();
  const datePart = now.toISOString().split("T")[0].replace(/-/g, "").slice(2);
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${datePart}-${random}`;
};

// INV-240417-kj8f

