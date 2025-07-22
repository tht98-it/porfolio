// app/layout.tsx
import "./globals.scss";
import { Poppins } from "next/font/google";
import type { ReactNode } from "react";
import LayoutClient from "./layoutClient";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata = {
  title: "Tran Hoang | Full Stack Developer",
  description:
    "Tran Hoang | Full Stack Developer specializing in Next.js, React, and Node.js.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
