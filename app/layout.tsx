import "./globals.css";
import type { Metadata } from "next";
import { Inter, Didact_Gothic, Poiret_One } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const didact = Didact_Gothic({
  subsets: ["cyrillic-ext"],
  weight: "400",
});
const poiret = Poiret_One({
  subsets: ["cyrillic"],
  weight: ["400"],
  variable: "--font-Poiret_One",
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
      <body className={`${didact.className}`}>
        <div className="wrapper">{children}</div>
      </body>
    </html>
  );
}
