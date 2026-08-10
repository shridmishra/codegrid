import { WDXL_Lubrifont_SC, Instrument_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

const wdxlLubrifont = WDXL_Lubrifont_SC({
  variable: "--font-wdxl-lubrifont",
  subsets: ["latin"],
  weight: "400",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Clip-Mask Page Transition | Codegrid",
  description: "Clip-Mask Page Transition | Codegrid",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${wdxlLubrifont.variable} ${instrumentSans.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
