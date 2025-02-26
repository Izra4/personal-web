"use client";

import React, { useState } from "react";
import Navbar from "../_components/navigation";
import { Lexend, Poppins } from "next/font/google";
import Input from "./_components/input";
import SubmitButton from "./_components/submit-button";
import Image from "next/image";

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
  const [longURL, setLongURL] = useState("");
  const [customURL, setCustomURL] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(longURL);
    console.log(customURL);
  };

  return (
    <div className="bg-primary w-screen min-h-screen lg:h-screen flex flex-col">
      <Navbar />
      <div className="mt-12 flex justify-center items-center flex-col">
        <div className="mb-8">
          <p className={`${lexend.className} text-primary_text text-center text-2xl font-semibold`}>
            Shorten the
            <span className="text-secondary_text"> URL </span>
            you’ve here,
            <br />
            you can also
            <span className="text-secondary_text"> customize </span> it!
          </p>
        </div>
        <div className={`${poppins.className} bg-[#F9FAFB] w-1/3 h-fit mt-4 rounded-xl shadow-lg`}>
          <form className="flex flex-col w-full h-full text-primary_text font-medium text-md px-8 mt-6">
            <Input
              poppinsClass={poppins.className}
              id={"longURL"}
              name={"longURL"}
              label={"Your long URL here"}
              placeholder={"looooong url"}
              value={longURL}
              onChange={(e) => {
                setLongURL(e.target.value);
              }}
            />
            <Input
              poppinsClass={poppins.className}
              id={"customURL"}
              name={"customURL"}
              label={"Your custom URL here"}
              placeholder={"rekomendasi-film-2025"}
              value={customURL}
              onChange={(e) => {
                setCustomURL(e.target.value);
              }}
            />
            <div className="flex justify-center items-center mt-3">
              <Image src={"/decor.svg"} alt={""} width={150} height={150} layout=""></Image>
            </div>
            <SubmitButton onClick={handleSubmit} poppins={poppins.className}></SubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShortenerPage;
