import Image from 'next/image';

interface DevelopmentProps {
    lexend: string,
    poppins: string
}

export default function Development({lexend, poppins}: DevelopmentProps) {
  return (
    <div className='flex justify-center w-full h-full'>
        <div className='flex justify-between items-center w-5/6 h-full flex-col'>
          <div className='mt-8 text-center 2xl:mt-24'>
            <p className={`${lexend} text-primary_text font-semibold text-2xl lg:text-4xl`}>
              This page is currently under development
            </p>
            <p className={`${lexend} text-primary_text font-semibold text-2xl lg:text-4xl`}>
              Please visit again later
            </p>
          </div>
          <div>
            <Image src="/lazy.svg" alt="lazy" width={650} height={650} layout=''/>
          </div>
          <div className={`${poppins} text-primary_text font-normal text-xs mb-8 2xl:m-24 mt-6 md:mt-0`}>
            <p className='text-center'>*Tbh, just too lazy to designs</p>
            <p className='text-center'>contact me if you want to design the pages (ofc, unpaid)</p>
          </div>
        </div>
      </div>
  );
};
