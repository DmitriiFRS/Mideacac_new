import "./globals.css";
import type { Metadata } from "next";
import { Inter, Didact_Gothic } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const didact = Didact_Gothic({
  subsets: ["cyrillic-ext"],
  weight: "400",
  variable: "--font-Didact_Gothic",
});

export const metadata: Metadata = {
  title: "Midea CAC",
  description: "Midea CAC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${didact.variable}`}>
        <div className="wrapper">{children}</div>
      </body>
    </html>
  );
}
