import type { Metadata } from "next";
import Footer from "@/ui/Footer/Footer";
import Header from "@/ui/Header/Header";
import StoreProvider from "./StoreProvider";
import ThemeProvider from "./ui/ThemeProvider";
import GradientSVG from "./ui/common/GradientSVG";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/styles/globals.scss";

// https://stackoverflow.com/questions/78636740/how-to-specify-font-slant-slnt-when-using-nextjs

// for some reason loading font from a local file results in a different font on mobile than on desktop
// who knows why
// const inter = localFont({ src: "../fonts/Inter.woff2" });

//TODO: make a background of barely visible grid of computer circuit boards and write a blog post on how to do it

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
        <body>
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
