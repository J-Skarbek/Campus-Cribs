import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Transition from "./transition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Campus Cribs",
  description: "Find your next Campus Apartment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${inter.className}`}
      >
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Transition>
            {children}
          </Transition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
