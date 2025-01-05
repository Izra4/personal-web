import { useState, useEffect } from "react";
import { Lexend } from 'next/font/google';
import { TypeWriter } from '@/app/_components/type-writer/add';
import { TypeWriterRemove } from "@/app/_components/type-writer/remove";

const lexend = Lexend({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const Heading = () => {
  const [isFirstFinished, setIsFirstFinished] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = ["Izra", "Backend Developer", "InfraTech Enthusiast", "Weebs", "Kidding"];

  const handleFirstFinished = () => {
    setIsFirstFinished(true);
  };

  // Cycle through next texts every 3 seconds
  useEffect(() => {
    if (isFirstFinished) {
      const intervalId = setInterval(() => {
        setCurrentTextIndex((prevIndex) => {
          // If we reach the end of the texts array, reset back to 0
          if (prevIndex + 1 === texts.length) {
            return 0; // Reset to "Izra"
          }
          return prevIndex + 1; // Move to the next text
        });
      }, 3000); // 3 seconds interval

      return () => clearInterval(intervalId); // Clean up the interval when done
    }
  }, [isFirstFinished, currentTextIndex, texts.length]);

  return (
    <div className="flex flex-col -space-y-4 lg:-space-y-6">
      <TypeWriter 
        text="Hello, I'm" 
        speed={100} 
        className={`${lexend.className} text-primary_text font-medium text-[50px] lg:text-[75px]`} 
        onFinished={handleFirstFinished}
      />
      
      {isFirstFinished && (
        <>
          <TypeWriterRemove 
            text={"Test Remove"} 
            speed={100} 
            removeSpeed={100} 
            className={`${lexend.className} text-primary_text font-medium text-[50px] lg:text-[75px]`}
            onFinished={}/>
        </>
      )}
    </div>
  );
};

export default Heading;
