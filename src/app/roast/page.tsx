"use client";

import Image from "next/image";
import Navbar from "../_components/navigation";
import { TypeWriterRemove } from "../_components/type-writer/remove";
import { useState, useEffect } from "react";
import { Lexend, Poppins } from "next/font/google";

const lexend = Lexend({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
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
      <Navbar/>
      <div className="flex flex-row w-full h-screen">

        {/* Welcome Field */}
        <div className="w-4/6 flex items-center px-12">
          <div className="w-full h-4/5 flex flex-row">

            <div className="w-3/5 flex items-center justify-center mb-32 mr-8">
              <Image src="/honest.png" alt="roast" width={500} height={500} />
            </div>

            <div className="flex justify-start items-center mb-32">
              <div className="flex flex-col ">
                <div className="w-full min-h-[130px]">
                  {!isRemovingFinished && (
                    <TypeWriterRemove 
                      text={texts[currentIndex]} 
                      speed={100} 
                      removeSpeed={100} 
                      className={`${lexend.className} text-primary_text font-medium text-[50px] 
                      lg:text-[50px] leading-none lg:leading-tight`} 
                      onFinished={handleRemovingFinished}
                    />
                  )}
                </div>

                <p className={`${poppins.className} text-primary_text font-normal text-[12px] lg:text-[17px] 2xl:text-[20px] text-justify mr-6 2xl:mr-8`}>
                    This thing is 100% secure, anonymous, not a phishing, not a scam, not a fraud, 
                    not a trap, not a scheme, not a risk, not misleading, not a hoax, not spyware, 
                    not malware, not a lie, not intrusive, not unethical, and not dangerous.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Input Field*/}
        <div className="bg-blue-300">

        </div>
      </div>
    </div>
  );
};

export default RoastPage;
