import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { striger ,roboto} from "./fonts";

export const metadata = {
  title: "IEEECS Recruitments Portal '24",
  description:
    "IEEECS best club fr",
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(striger.variable,roboto.variable)}> {/* add fonts here */}
        <Analytics />
      </body>
    </html>
  );
}
