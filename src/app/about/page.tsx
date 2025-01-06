import React from 'react';
import Navbar from '../_components/navigation';
import { Lexend, Poppins } from 'next/font/google';
import Development from '../_components/development';

const poppins = Poppins({
  weight: [
    '100', '200', '300', '400', 
    '500', '600', '700', '800', '900'
  ],
  subsets: ['latin'],
  display: 'swap',
});

const lexend = Lexend({
  weight: [
    '100', '200', '300', '400', 
    '500', '600', '700', '800', '900'
  ],
  subsets: ['latin'],
  display: 'swap',
});

const AboutPage: React.FC = () => {
  return (
    <div className="bg-primary w-screen min-h-screen lg:h-screen flex flex-col">
      <Navbar/>
      <Development lexend={lexend.className} poppins={poppins.className}/>
    </div>
  );
};

export default AboutPage;