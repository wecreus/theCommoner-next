import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/app/ui/footer/footer";
import Header from "@/app/ui/header/header";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "theCommoner",
  description: "Portfolio website made by Danylo Riabchuk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} theme1`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
