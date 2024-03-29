import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Welcome to getMeThis!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}, bg-[#eee]`}>{children}</body>
    </html>
  );
}
