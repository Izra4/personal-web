import React from 'react';
import Navbar from '../_components/navigation/index';
import { Poppins, Lexend } from 'next/font/google';
import Image from 'next/image';

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
    <div className="flex flex-col -space-y-4 lg:-space-y-6">
      <p className={`${lexend.className} text-primary_text font-medium text-[50px] lg:text-[75px]`}>
        Hello, I&apos;am
      </p>
      <p className={`${lexend.className} text-secondary_text font-medium text-[50px] lg:text-[75px]`}>
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

const DashboardPage = () => {
  return (
    <div className="bg-primary w-screen min-h-screen lg:h-screen flex flex-col">
      <Navbar />
      {/* Desktop */}
      <div className='hidden lg:flex w-full h-screen'>
        <div className="flex flex-row w-full h-full">
          <div className="flex flex-col max-w-3xl 2xl:max-w-5xl px-20 pt-16">
            <div className='2xl:mt-36'>
              <Heading />

              <Description />
            </div>
          </div>
          <div className='w-full h-full flex justify-center items-center'>
            <Image src="/me.svg" alt="profile" width={400} height={400} className="2xl:w-3/5"/>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className='lg:hidden flex justify-center items-center'>
        <div className="flex flex-col max-w-3xl 2xl:max-w-5xl px-10 pt-4">
          <Heading />

          <div className=' w-full flex justify-center items-center'>
            <Image src="/me.svg" alt="profile" width={400} height={400} className=""/>
          </div>
              
          <Description />
        </div>
      </div>

    </div>
  );
};

export default DashboardPage;
