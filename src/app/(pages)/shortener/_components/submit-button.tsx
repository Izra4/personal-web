"use client";

import { MouseEventHandler } from "react";

const SubmitButton = ({
  onClick,
  poppins,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
  poppins: string;
}) => {
  return (
    <div className="flex items-center justify-center mb-6 mt-6">
      <button
        type="button"
        onClick={onClick}
        className="group relative 2xl:h-12 2xl:w-48 h-10 w-1/2 overflow-hidden rounded-lg 
          bg-primary text-lg shadow hover:scale-110 transform transition duration-200
          active:scale-y-75"
      >
        <div className="absolute inset-0 w-3 bg-secondary_text transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span
          className={`${poppins} relative text-primary_text font-semibold group-hover:text-primary`}
        >
          Short it!
        </span>
      </button>
    </div>
  );
};

export default SubmitButton;
