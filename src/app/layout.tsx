import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import StoreProvider from "@/providers/StoreProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PayNote - Simple Invoice Generator",
  description:
    "Create and manage your invoices with ease using PayNote, the simple invoice generator designed for freelancers and small businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body suppressHydrationWarning>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
