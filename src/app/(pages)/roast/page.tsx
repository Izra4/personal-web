"use client";

import { Lexend, Poppins } from "next/font/google";
import { useState, useEffect } from "react";
import Navbar from "../../_components/navigation";
import WelcomeField from "./_components/welcome";
import InputField from "./_components/input-field";

const lexend = Lexend({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const RoastPage = () => {
  const [isRemovingFinished, setIsRemovingFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const texts = [
    "Send Your Honest Thoughts Here!",
    "Feel Free to Roast Me!",
    "No Worries! This Is Secure!",
    "Your Secret is Safe With Me!",
  ];

  const handleRemovingFinished = () => {
    setIsRemovingFinished(true);
  };

  useEffect(() => {
    if (isRemovingFinished) {
      setTimeout(() => {
        setIsRemovingFinished(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 1000);
    }
  }, [isRemovingFinished, texts.length]);

  return (
    <div className="bg-primary w-screen min-h-screen lg:h-screen flex flex-col">
      <title>Izra.me | Roast</title>
      <Navbar />
      <div className="hidden md:flex flex-row w-full h-screen">
        <WelcomeField
          lexendClass={lexend.className}
          poppinsClass={poppins.className}
          texts={texts}
          currentIndex={currentIndex}
          isRemovingFinished={isRemovingFinished}
          handleRemovingFinished={handleRemovingFinished}
        />
        <InputField poppins={poppins.className} />
      </div>

      <div className="flex flex-col justify-start items-center w-full min-h-screen md:hidden">
        <WelcomeField
          lexendClass={lexend.className}
          poppinsClass={poppins.className}
          texts={texts}
          currentIndex={currentIndex}
          isRemovingFinished={isRemovingFinished}
          handleRemovingFinished={handleRemovingFinished}
        />
        <InputField poppins={poppins.className} />
      </div>
    </div>
  );
};

export default RoastPage;
