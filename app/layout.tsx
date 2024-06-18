import type { Metadata } from "next";
import Footer from "@/app/ui/footer/Footer";
import Header from "@/app/ui/header/Header";
import localFont from "next/font/local";
import StoreProvider from "./StoreProvider";
import ThemeProvider from "./ui/ThemeProvider";
import GradientSVG from "./ui/GradientSVG";
import "@/styles/globals.scss";

// https://stackoverflow.com/questions/78636740/how-to-specify-font-slant-slnt-when-using-nextjs
const inter = localFont({ src: "../fonts/Inter.woff2" });

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
    <StoreProvider>
      <html lang="en">
        <head>
          {/* <link
          rel="stylesheet"
          href="//fonts.googleapis.com/css2?family=Inter:slnt,wght@-8,100..900&display=swap"
        /> */}
        </head>
        <body className={inter.className}>
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
            <GradientSVG
              idCSS={"gBaseColors"}
              endColor={"var(--support)"}
              startColor={"var(--secondary)"}
              rotation={"45"}
            />
            <GradientSVG
              idCSS={"iconGradient"}
              startColor={"#ffffff"}
              endColor={"#ffffff88"}
              rotation={"0"}
            />
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
