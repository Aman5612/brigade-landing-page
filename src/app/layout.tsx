import type { Metadata } from "next";
import { Bentham, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const bentham = Bentham({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bentham",
});

export const metadata: Metadata = {
  title: "BrigadeReap",
  description: "Early atage startup ecosystem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bentham.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
