import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Footer from "./../component/cryptik/footer";
import Navigation from "./../component/cryptik/navigation"

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Cryptic | One Stop solution for Crypto ",
  description: "A WORLD CLASS RENOUNED DESIGNER",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className="w-[100vw] overflow-x-hidden min-h-[100vh]">
      <body>
        {/* // className={`${geistSans.variable} ${geistMono.variable} antialiased`} */}
      
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
