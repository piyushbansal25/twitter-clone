import News from "@/components/News";
import SessionWrapper from "@/components/SessionWrapper";
import Sidebar from "@/components/Sidebar";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Twitter clone App",
  description: "Making twitter clone using next.js ",
};

export default function RootLayout({ children }) {
  return (
      <SessionWrapper>
        <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-between max-w-6xl mx-auto">
          <div className="hidden sm:inline border-r h-screen"><Sidebar></Sidebar></div>
          <div>{children}</div>
          <div className="lg:flex-col p-3 h-screen border-l hidden lg:flex w-[24rem]">
            <div className="sticky top-0 bg-white py-2 ">
              <input type='text' placeholder='Search' className="bg-gray-100 border border-gray-200 rounded-3xl text-sm w-full px-4 py-2"/>
            </div>
            <News/></div>
        </div>
    </body>
    </html>
      </SessionWrapper>
       
  
   
  );s
}
