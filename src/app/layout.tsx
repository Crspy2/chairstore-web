import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://chairstore.vip"),
    title: "ChairStore",
    description: "Powerful, secure, and undetected cheats for a fair price. ChairStore is dedicated to providing" +
      "customers with tools to make their games easier to win.",
    authors: [{ name: "Crspy" }],
    keywords: ["cheats", "chair", "linear", "klar", "alphacheats", "lethal", "spoofer"],
    icons: "/chairstore.png",
    openGraph: {
        type: "website",
        url: "https://chairstore.vip",
        title: "ChairStore",
        description: "Powerful, secure, and undetected cheats for a fair price. ChairStore is dedicated to providing" +
            "customers with tools to make their games easier to win.",
        siteName: "ChairStore",
        images: [{
            url: "/chairstore.png",
        }],
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
