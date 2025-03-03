import { MouseEventHandler } from "react";

const Modal = ({
  poppins,
  modalData,
  handleCloseModal,
}: {
  poppins: string;
  modalData: string;
  handleCloseModal: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className={`${poppins} flex justify-center items-center flex-col p-4`}>
      {/* Judul */}
      <div
        className={`flex font-semibold w-full bg-[#9EE493] rounded-md bg-opacity-50 p-2 mb-2 justify-center items-center`}
      >
        <p className="text-center">
          Your
          <span className="text-secondary_text whitespace-normal"> simple URL </span> <br />
          is created and ready to use!
        </p>
      </div>

      {/* Konten */}
      <div className="flex justify-start items-start flex-col w-full relative">
        <p className="mb-1 text-sm font-semibold">Your short URL is:</p>
        <div className="w-full px-3 py-4 rounded-lg shadow-inner bg-slate-100">
          <p>
            <strong>{modalData}</strong>
          </p>
        </div>
        <div className="flex justify-end items-end w-full">
          <button
            className="px-4 py-2 mt-4 font-semibold bg-slate-100 hover:bg-slate-300 
                           rounded-md text-primary_text outline-none focus:ring-4 ring-secondary_text 
                           shadow-lg transform active:scale-75 transition-all duration-300 ease-in-out text-sm"
            onClick={() => navigator.clipboard.writeText(modalData)}
          >
            Copy
          </button>
        </div>
      </div>

      {/* Close Button */}
      <div className="w-full bg-red-400 mt-4 rounded-md flex justify-center items-center flex-col">
        <strong className="text-white font-semibold text-xl mt-1">Warning!!!</strong>
        <p className="font-sm text-center text-xs mt-2 mb-1 px-2 text-white">
          Since there&apos;s no authentication feature, please copy the link <br /> before close
          this pop-up. You won&apos;t find it anymore. Except you ask me...
        </p>
      </div>
      <div className="w-full flex justify-end items-end">
        <button
          onClick={handleCloseModal}
          className="px-4 py-2 bg-red-500 hover:bg-red-700 font-semibold rounded-md text-white mt-2 
                         text-xs transition-all duration-300 ease-in-out"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
