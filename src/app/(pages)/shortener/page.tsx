"use client";

import React from "react";
import Navbar from "../../_components/navigation";
import { Lexend, Poppins } from "next/font/google";
import Index from "./_components";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const lexend = Lexend({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const ShortenerPage: React.FC = () => {
  return (
    <div className="bg-primary min-h-screen flex flex-col">
      <title>Izra.me | Shortener</title>
      <Navbar />
      <Index lexend={lexend.className} poppins={poppins.className}></Index>
    </div>
  );
};

export default ShortenerPage;
