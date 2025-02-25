import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

import Header from "@/components/shared/header";
import { Title } from "@/components/shared/title/title";
import { Filter } from "@/components/shared/title/filter";

const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased`}>
        {children}
        <main className="pt-[31px] ">
          <div className="container">
            <div className="main flex flex-col justify-center">
              <Header />
              <Title />
              <main className="main">
                <Filter/>
              </main>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
