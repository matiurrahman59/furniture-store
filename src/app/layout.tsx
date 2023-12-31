import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import NavBar from "@/components/navBar";

const mainFont = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mainFont.variable} bg-white font-sans overflow-x-hidden`}>
        <div className="mx-auto w-full max-w-[1200px] md:w-11/12 xl:w-full">
          <NavBar />
          <main className="p-4 md:px-0 mb-14 sm:mb-5 min-h-[80vh]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

