import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
