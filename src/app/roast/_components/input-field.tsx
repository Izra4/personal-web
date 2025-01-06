"use client";

import ReviewForm from "./form";
import SendButton from "./button";

const InputField = ({poppins}:{poppins:string}) => {
  return (
    <div className="flex justify-center items-center w-full lg:w-2/5 2xl:w-2/6 p-10 lg:p-12 2xl:p-24">
      {/* Desktop */}
      <div className="hidden md:flex w-full h-full">
        <div className="flex flex-col items-center justify-center h-full w-full bg-[#DED8CF] rounded-2xl shadow-xl p-8 2xl:p-10">
          <div className="flex flex-col w-full h-full">
            <ReviewForm poppins={poppins}></ReviewForm>
            <SendButton poppins={poppins} onClick={() => console.log("Send button clicked!")} />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden w-full h-full">
        <div className="flex flex-col items-center justify-center h-full w-full bg-[#DED8CF] rounded-2xl shadow-xl p-8 2xl:p-10">
          <div className="flex flex-col w-full h-full">
            <ReviewForm poppins={poppins}></ReviewForm>
            <SendButton poppins={poppins} onClick={() => console.log("Send button clicked!")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputField;
