import type { Metadata } from "next";
import Footer from "@/ui/Footer/Footer";
import Header from "@/ui/Header/Header";
import StoreProvider from "./StoreProvider";
import ThemeProvider from "./ui/ThemeProvider";
import GradientSVG from "./ui/common/GradientSVG";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/styles/globals.scss";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700", "900"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://commoner.vercel.app/"),
  title: {
    template: "%s | theCommoner",
    default: "theCommoner",
  },
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
          <meta name="darkreader-lock" />
        </head>
        <body className={lato.className}>
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
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </StoreProvider>
  );
}
