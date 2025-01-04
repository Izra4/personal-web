import React, { useState, useEffect } from 'react';
import { Lexend } from 'next/font/google';
import { TypeWriter } from '@/app/_components/type-writer';

const lexend = Lexend({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const Heading = () => {
  const [isTypeWriterDone, setIsTypeWriterDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTypeWriterDone(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col -space-y-4 lg:-space-y-6">
      <TypeWriter text="Heello, I'm" speed={100} className={`${lexend.className} text-primary_text font-medium text-[50px] lg:text-[75px]`} />
      
      <p
        className={`${lexend.className} text-secondary_text font-medium text-[50px] lg:text-[75px] transition-opacity ease-in duration-300 ${
          isTypeWriterDone ? 'opacity-100 animate-fade-in' : 'opacity-0'
        }`}
      >
        Izra
      </p>
    </div>
  );
};

export default Heading;
