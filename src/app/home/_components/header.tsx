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
  const [isTypingFinished, setIsTypingFinished] = useState(false);
  const [isRemovingFinished, setIsRemovingFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const texts = [
    "Izra", 
    "Backend Dev",
    "Infra Enthusiast",
    "Single",
    "Weebs (kidding)"
  ];

  const handleTypingFinished = () => {
    setIsTypingFinished(true);
  };

  const handleRemovingFinished = () => {
    setIsRemovingFinished(true);
  };

  useEffect(() => {
    if (isTypingFinished && isRemovingFinished) {
      setTimeout(() => {
        setIsTypingFinished(false);
        setIsRemovingFinished(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 1000);
    }
  }, [isTypingFinished, isRemovingFinished, texts.length]);

  return (
    <div className="flex flex-col -space-y-4 lg:-space-y-6">
      <TypeWriter 
        text="Hello, I'm" 
        speed={100} 
        className={`${lexend.className} text-primary_text font-medium text-[50px] lg:text-[75px]`} 
        onFinished={handleTypingFinished}
      />
      
      <div className="min-h-[120px]">
        {isTypingFinished && !isRemovingFinished && (
          <TypeWriterRemove 
            text={texts[currentIndex]} 
            speed={100} 
            removeSpeed={100} 
            className={`${lexend.className} text-secondary_text font-medium text-[50px] lg:text-[75px] leading-none lg:leading-normal`} 
            onFinished={handleRemovingFinished}
          />
        )}
      </div>
    </div>
  );
};

export default Heading;
