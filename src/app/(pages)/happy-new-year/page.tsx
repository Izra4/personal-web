"use client";

import { Lexend, Poppins } from "next/font/google";

const lexend = Lexend({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const BirthdayPage = () => {
  return (
    <div className="h-screen w-screen bg-[#FFDDE1] flex flex-row relative overflow-hidden">
      <div className="absolute bottom-0 left-[20%]">
        <div className="w-10 h-14 bg-[#FF89C0] rounded-full animate-[balloonFloat_7s_linear_infinite] relative">
          <div className="w-1 h-10 bg-[#FFB6D9] absolute left-1/2 top-full -translate-x-1/2"></div>
        </div>
      </div>

      {/* BALON 2 */}
      <div className="absolute bottom-0 left-[50%]">
        <div className="w-12 h-16 bg-[#FFD966] rounded-full animate-[balloonFloat_9s_linear_infinite] relative">
          <div className="w-1 h-10 bg-[#FFEAA9] absolute left-1/2 top-full -translate-x-1/2"></div>
        </div>
      </div>

      {/* BALON 3 */}
      <div className="absolute bottom-0 left-[80%]">
        <div className="w-9 h-12 bg-[#88C6FF] rounded-full animate-[balloonFloat_8s_linear_infinite] relative">
          <div className="w-1 h-10 bg-[#B5DBFF] absolute left-1/2 top-full -translate-x-1/2"></div>
        </div>
      </div>
      <title>Happy Birthday, Keyla!</title>

      <div className="w-3/4 h-full flex justify-start items-center">
        <div className="w-3/4 bg-gray-50">
          <h1
            className={`${lexend.className} font-lexend text-[#642CA9] text-5xl font-semibold ml-12`}
          >
            Happy 18th Birthday, Keyla Azzelia Putri! <span className="text-lg">a.k.a JAMET</span>
          </h1>
        </div>
      </div>

      <div className="w-1/4 h-full bg-black flex flex-row">
        {/* BAGIAN KIRI – FOTO AUTO SCROLL */}
        <div className="w-4/5 h-full bg-white overflow-hidden relative">
          <div className="flex flex-col animate-[scrollLoop_12s_linear_infinite]">
            {/* SET 1 (foto asli) */}
            <div className="space-y-6 p-6">
              <div className="w-full h-64 rounded-lg bg-cover bg-center bg-no-repeat bg-[url('/hbd/p1.jpeg')]"></div>
              <div className="w-full h-64 rounded-lg bg-cover bg-center bg-no-repeat bg-[url('/hbd/p2.jpeg')]"></div>
              <div className="w-full h-64 rounded-lg bg-cover bg-center bg-no-repeat bg-[url('/hbd/p3.jpeg')]"></div>
              <div className="w-full h-64 rounded-lg bg-cover bg-center bg-no-repeat bg-[url('/hbd/p4.jpeg')]"></div>
            </div>

            {/* SET 2 (DUPLICATE UNTUK LOOP MULUS) */}
            <div className="space-y-6 p-6">
              <div className="w-full h-64 rounded-lg bg-cover bg-center bg-no-repeat bg-[url('/hbd/p1.jpeg')]"></div>
              <div className="w-full h-64 rounded-lg bg-cover bg-center bg-no-repeat bg-[url('/hbd/p2.jpeg')]"></div>
              <div className="w-full h-64 rounded-lg bg-cover bg-center bg-no-repeat bg-[url('/hbd/p3.jpeg')]"></div>
              <div className="w-full h-64 rounded-lg bg-cover bg-center bg-no-repeat bg-[url('/hbd/p4.jpeg')]"></div>
            </div>
          </div>
        </div>

        <div className="w-1/5 h-full bg-[#FFDDE1] flex items-center justify-center">
          <p
            className={`${lexend.className} text-[#642CA9] text-3xl font-bold [writing-mode:vertical-rl] bg-gray-50 py-2 px-1`}
          >
            Si Jamet Ulang Tahun
          </p>
        </div>
      </div>
    </div>
  );
};

export default BirthdayPage;
