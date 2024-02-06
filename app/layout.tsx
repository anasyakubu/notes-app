import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Logo from "../public/vercel.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Notes 📝",
  description: "My Notes is a platform for Notes management",
  icons: {
    icon: Logo,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
