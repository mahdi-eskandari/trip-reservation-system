import type { Metadata } from "next";
import { Poppins, Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "../components/Header"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RideEasy",
  description: "Bus reservation system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="ltr"
      className={`${poppins.variable} ${vazirmatn.variable}`}
    >

      <body>
        
        <Header />
        {children}
        
        </body>
    </html>
  );
}
