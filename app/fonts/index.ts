import localFont from "next/font/local";
import {Roboto} from "next/font/google";

export const striger = localFont({
  src: "./STRIGER.otf",
  variable: "--font-striger",
});

export const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});