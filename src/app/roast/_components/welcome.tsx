"use client";

import { TypeWriterRemove } from "@/app/_components/type-writer/remove";
import Image from "next/image";

interface WelcomeFieldProps {
  lexendClass: string;
  poppinsClass: string;
  texts: string[];
  currentIndex: number;
  isRemovingFinished: boolean;
  handleRemovingFinished: () => void;
}

const WelcomeField: React.FC<WelcomeFieldProps> = ({
  lexendClass,
  poppinsClass,
  texts,
  currentIndex,
  isRemovingFinished,
  handleRemovingFinished,
}) => {
  return (
    <div className="lg:w-4/6 flex items-center px-8 lg:px-12">
      {/* Dekstop */}
      <div className="hidden md:flex">
        <div className="w-full h-4/5 flex flex-row">
          <div className="w-3/5 flex items-center justify-center mb-20 mr-8">
            <Image src="/honest.png" alt="roast" width={230} height={230} />
          </div>
          <div className="flex justify-start items-center mb-20">
            <div className="flex flex-col">
              <div className="w-full min-h-[130px]">
                {!isRemovingFinished && (
                  <TypeWriterRemove
                    text={texts[currentIndex]}
                    speed={100}
                    removeSpeed={100}
                    className={`${lexendClass} text-primary_text font-medium text-[36px] 
                      lg:text-[50px] leading-none lg:leading-tight`}
                    onFinished={handleRemovingFinished}
                  />
                )}
              </div>
              <p
                className={`${poppinsClass} text-primary_text font-normal text-[12px] lg:text-[17px] 2xl:text-[20px] text-justify`}
              >
                This thing is 100% secure, anonymous, not a phishing, not a scam, not a fraud, not a
                trap, not a scheme, not a risk, not misleading, not a hoax, not spyware, not
                malware, not a lie, not intrusive, not unethical, and not dangerous.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden">
        <div className="w-full h-fit flex flex-col mt-8 items-center">
          <div className="flex flex-col">
            <div className="w-full min-h-[110px] text-center">
              {!isRemovingFinished && (
                <TypeWriterRemove
                  text={texts[currentIndex]}
                  speed={100}
                  removeSpeed={100}
                  className={`${lexendClass} text-primary_text font-medium text-[36px] 
                      lg:text-[50px]`}
                  onFinished={handleRemovingFinished}
                />
              )}
            </div>
            <div className="flex items-center justify-center mb-6">
              <Image src="/honest.png" alt="roast" width={100} height={100} />
            </div>
            <p className={`${poppinsClass} text-primary_text font-normal text-[14px] text-center`}>
              This thing is 100% secure, anonymous, not a phishing, not a scam, not a fraud, not a
              trap, not a scheme, not a risk, not misleading, not a hoax, not spyware, not malware,
              not a lie, not intrusive, not unethical, and not dangerous.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeField;
