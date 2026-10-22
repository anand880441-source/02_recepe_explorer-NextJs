
import type { Metadata } from "next";
import Header from "../component/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Everyday Recipes",
  description: "Discover delicious recipes for everyday cooking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-stone-50 text-slate-800 antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
