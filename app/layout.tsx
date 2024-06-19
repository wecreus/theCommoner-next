import type { Metadata } from "next";
import Footer from "@/app/ui/Footer/Footer";
import Header from "@/app/ui/Header/Header";
import StoreProvider from "./StoreProvider";
import ThemeProvider from "./ui/ThemeProvider";
import GradientSVG from "./ui/common/GradientSVG";
import "@/styles/globals.scss";

// https://stackoverflow.com/questions/78636740/how-to-specify-font-slant-slnt-when-using-nextjs

// for some reason loading font from a local file results in a different font on mobile than on desktop
// who knows why
// const inter = localFont({ src: "../fonts/Inter.woff2" });

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
        </head>
        <body >
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
