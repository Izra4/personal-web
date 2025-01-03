import React from 'react';
import Navbar from '../_components/navbar';
import { Poppins, Lexend } from 'next/font/google';
import Image from 'next/image';

// Import font
const poppins = Poppins({
  weight: [
    '100', '200', '300', '400',
    '500', '600', '700', '800', '900',
  ],
  subsets: ['latin'],
  display: 'swap',
});

const lexend = Lexend({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

const Heading = () => {
  return (
    <div className="flex flex-col -space-y-6">
      <p className={`${lexend.className} text-primary_text font-medium text-[75px]`}>
        Hello, I&apos;am
      </p>
      <p className={`${lexend.className} text-secondary_text font-medium text-[75px]`}>
        Izra
      </p>
    </div>
  );
};

const Description = () => {
  return (
    <p className={`${poppins.className} text-primary_text font-medium text-justify leading-7`}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, nunc et cursus
      congue, justo ligula feugiat odio, vel malesuada odio nisi ac metus. Integer sagittis lectus
      et nisi vulputate, sit amet auctor felis tincidunt. Nulla facilisi. Sed vehicula orci at
      turpis hendrerit, a interdum purus pellentesque. Aliquam erat volutpat. Sed pharetra nisl at
      magna dictum, at fermentum tortor pharetra
    </p>
  );
};

// Halaman Utama
const DashboardPage = () => {
  return (
    <div className="bg-primary w-screen h-screen flex flex-col">
      <Navbar />
      <div className="w-full h-full flex flex-row">
        <div className="flex flex-col max-w-3xl px-20 pt-16">
          <Heading />

          <Description />
        </div>
        <div className='pt-14 pl-8'>
          <Image src="/me.svg" alt="profile" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
