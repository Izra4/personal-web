"use client";

import { Lexend } from "next/font/google";
import { useEffect, useRef, useState } from "react";

// <input type="date" /> selalu output yyyy-mm-dd
const CORRECT_BIRTHDAY = "2007-11-29";

const lexend = Lexend({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function BirthdayAuthGate({ children }: { children: React.ReactNode }) {
  const [input, setInput] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState("");

  // 🎵 Ref audio yang preloaded
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // ⏳ Load audio sekali waktu auth page muncul
  useEffect(() => {
    const audio = new Audio("/music/hbd.mp3");

    audio.preload = "auto";
    audio.loop = true; // biar repeat
    audioRef.current = audio;

    // Optional: start decoding for zero lag
    audio.load();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (input === CORRECT_BIRTHDAY) {
      setAuthorized(true);
      setError("");

      // 🎧 DELAY 1 detik biar ga kaget
      setTimeout(() => {
        audioRef.current?.play().catch(() => {
          console.log("Autoplay blocked but will play after next user interaction");
        });
      }, 1000);
    } else {
      setError("sp luh kok salah tanggal...");
    }
  };

  return (
    <div className={`relative h-screen w-screen overflow-hidden ${lexend.className}`}>
      {/* 🎂 AUTH LAYER */}
      <div
        className={`
          absolute inset-0 flex items-center justify-center flex-col bg-[#FFDDE1]
          transition-opacity duration-700
          z-50
          ${authorized ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"}
        `}
      >
        <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center gap-4">
          <h1 className="text-2xl font-semibold text-[#642CA9]">Beneran lu ga ni?</h1>
          <p className="text-[#642CA9]">Coba tanggal ultah lu masukin sini</p>

          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3">
            <input
              type="date"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border border-gray-300 rounded-md px-4 py-2 text-center text-lg w-48"
            />

            <button
              type="submit"
              className="px-4 py-2 bg-[#642CA9] text-white rounded-md shadow-md hover:bg-[#4f2385]"
            >
              Submit
            </button>
          </form>

          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
      </div>

      {/* 🎉 BIRTHDAY PAGE */}
      <div
        className={`
          absolute inset-0
          transition-opacity duration-700
          ${authorized ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {children}
      </div>
    </div>
  );
}
