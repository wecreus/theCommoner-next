import type { Metadata } from "next";
import Footer from "@/app/ui/footer/footer";
import Header from "@/app/ui/header/header";
import localFont from 'next/font/local';
import "./globals.scss";

// https://stackoverflow.com/questions/78636740/how-to-specify-font-slant-slnt-when-using-nextjs
const inter = localFont({ src: '../fonts/Inter.woff2' })

export const metadata: Metadata = {
  metadataBase: new URL("https://commoner.vercel.app/"),
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
      <head>
        {/* <link
          rel="stylesheet"
          href="//fonts.googleapis.com/css2?family=Inter:slnt,wght@-8,100..900&display=swap"
        /> */}
      </head>
      <body className={`theme1 ${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
