import "./globals.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Roboto } from "next/font/google";
import { useEffect, useState } from "react";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [userProfile, setUserProfile] = useState(null);
  /*
  useEffect(() = {

  })*/

  return (
    <html lang="it">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
