import React, { useState, useEffect } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: [
    '100', '200', '300', '400',
    '500', '600', '700', '800', '900',
  ],
  subsets: ['latin'],
  display: 'swap',
});

const Description = () => {
  const [isHeaderDone, setIsHeaderDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeaderDone(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <p
      className={`${poppins.className} text-primary_text font-medium text-justify leading-7
      transition-opacity ease-in duration-300 ${isHeaderDone ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, nunc et cursus
      congue, justo ligula feugiat odio, vel malesuada odio nisi ac metus. Integer sagittis lectus
      et nisi vulputate, sit amet auctor felis tincidunt. Nulla facilisi. Sed vehicula orci at
      turpis hendrerit, a interdum purus pellentesque. Aliquam erat volutpat. Sed pharetra nisl at
      magna dictum, at fermentum tortor pharetra: THIS IS TEST FOR DEPLOYMENT
    </p>
  );
};

export default Description;
