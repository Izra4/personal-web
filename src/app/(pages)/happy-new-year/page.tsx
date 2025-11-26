"use client";

import BirthdayAuthGate from "./_components/AuthGate";

import { Lexend } from "next/font/google";
import { useState } from "react";

const lexend = Lexend({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

// Generate balloons
const generateBalloons = (count: number) => {
  const colors = [
    { bg: "#FF89C0", string: "#FFB6D9" },
    { bg: "#FFD966", string: "#FFEAA9" },
    { bg: "#88C6FF", string: "#B5DBFF" },
    { bg: "#FF6B9D", string: "#FFB3D1" },
    { bg: "#A78BFA", string: "#C4B5FD" },
    { bg: "#FCA5A5", string: "#FED7D7" },
    { bg: "#6EE7B7", string: "#A7F3D0" },
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 90 + 5,
    width: Math.random() * 4 + 8,
    height: Math.random() * 6 + 12,
    duration: Math.random() * 4 + 8, // 8 – 12s
    delay: Math.random() * 5,
    swayDuration: Math.random() * 3 + 3, // 3 – 6s
    pulseDuration: Math.random() * 2 + 2, // 2 – 4s
    rotateDuration: Math.random() * 4 + 4, // 4 – 8s
    rotStart: Math.random() * -8, // -8° start
    rotEnd: Math.random() * 8, // +8° end
    scaleStart: 0.9 + Math.random() * 0.1, // 0.9–1.0
    scaleEnd: 0.9 + Math.random() * 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));
};

const BirthdayPage = () => {
  const [balloons] = useState(() => generateBalloons(15));

  const restartAnimation = (e: React.AnimationEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.classList.add("reset");
    requestAnimationFrame(() => {
      el.classList.remove("reset");
    });
  };

  return (
    <BirthdayAuthGate>
      <div className="h-screen w-screen bg-[#FFDDE1] flex flex-row relative overflow-hidden">
        <div className="absolute top-4 left-4 z-50">
          <a href="/home">
            <img src="logo.svg" alt="Logo" className="w-8 h-8 object-contain drop-shadow-lg" />
          </a>
        </div>

        <div className="banner-container">
          <div className="banner-flag" style={{ backgroundColor: "#FFB3BD" }}></div>
          <div className="banner-flag" style={{ backgroundColor: "#FFD889" }}></div>
          <div className="banner-flag" style={{ backgroundColor: "#AFCBFF" }}></div>
          <div className="banner-flag" style={{ backgroundColor: "#C8A2FF" }}></div>
          <div className="banner-flag" style={{ backgroundColor: "#FFB3BD" }}></div>
          <div className="banner-flag" style={{ backgroundColor: "#FFD889" }}></div>
          <div className="banner-flag" style={{ backgroundColor: "#AFCBFF" }}></div>
        </div>

        {/* BALLOONS */}
        {balloons.map((b) => (
          <div
            key={b.id}
            className="absolute bottom-0 pointer-events-none"
            style={{
              left: `${b.left}%`,
              animationDelay: `${b.delay}s`,
            }}
          >
            {/* ROTATE wrapper */}
            <div
              className="rotateWrapper"
              style={
                {
                  "--rotateDuration": `${b.rotateDuration}s`,
                  "--rot-start": b.rotStart,
                  "--rot-end": b.rotEnd,
                } as never
              }
            >
              {/* SWAY wrapper */}
              <div
                className="swayWrapper"
                style={{ "--swayDuration": `${b.swayDuration}s` } as never}
              >
                {/* PULSE wrapper */}
                <div
                  className="pulseWrapper"
                  style={{ "--pulseDuration": `${b.pulseDuration}s` } as never}
                >
                  {/* FLOAT wrapper (ini yang naik) */}
                  <div
                    className="balloon floatWrapper rounded-full relative will-change-transform"
                    style={
                      {
                        width: `${b.width * 4}px`,
                        height: `${b.height * 4}px`,
                        backgroundColor: b.color.bg,
                        "--duration": `${b.duration}s`,
                        "--scaleStart": b.scaleStart,
                        "--scaleEnd": b.scaleEnd,
                      } as never
                    }
                    onAnimationIteration={restartAnimation}
                  >
                    <div
                      className="absolute left-1/2 top-full -translate-x-1/2"
                      style={{
                        width: "2px",
                        height: "40px",
                        backgroundColor: b.color.string,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <title>Happy Birthday, Keyla!</title>

        <div className="w-3/4 h-full flex justify-start items-center">
          <div className="w-3/4 bg-gray-50 p-8 rounded-r-3xl shadow-xl">
            <h1 className={`${lexend.className} text-[#642CA9] text-5xl font-semibold ml-12`}>
              Happy 18th Birthday, <br />
              Keyla Azzelia Putri! <span className="text-lg">a.k.a JAMET</span>
            </h1>
          </div>
        </div>

        <div className="w-1/4 h-full bg-black flex flex-row">
          <div className="w-4/5 h-full bg-white overflow-hidden relative z-10">
            <div className="flex flex-col animate-[scrollLoop_12s_linear_infinite]">
              <div className="space-y-6 p-6">
                <div className="w-full h-64 rounded-lg bg-cover bg-center bg-no-repeat bg-[url('/hbd/p1.jpeg')]"></div>
                <div className="w-full h-64 rounded-lg bg-cover bg-center bg-no-repeat bg-[url('/hbd/p2.jpeg')]"></div>
                <div className="w-full h-64 rounded-lg bg-cover bg-center bg-no-repeat bg-[url('/hbd/p3.jpeg')]"></div>
                <div className="w-full h-64 rounded-lg bg-cover bg-center bg-no-repeat bg-[url('/hbd/p4.jpeg')]"></div>
              </div>

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
              className={`${lexend.className} text-[#642CA9] text-2xl font-bold [writing-mode:vertical-rl] bg-gray-50 py-4 px-2 rounded-lg shadow-lg`}
            >
              Si Jamet Ulang Tahun
            </p>
          </div>
        </div>
        <div className="purple-glow" style={{ top: "-150px", left: "-150px" }}></div>
        <div className="purple-glow" style={{ top: "-150px", right: "-150px" }}></div>
        <div className="purple-glow" style={{ bottom: "-150px", left: "-150px" }}></div>
        <div className="purple-glow" style={{ bottom: "-150px", right: "-150px" }}></div>

        <div className="rainbow-wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path
              fill="#FFB3BD" /* pink pastel */
              fillOpacity="0.45"
              d="M0,20 C360,120 720,0 1440,80 L1440,120 L0,120 Z"
            />
            <path
              fill="#FFD889" /* yellow pastel */
              fillOpacity="0.45"
              d="M0,60 C360,160 720,40 1440,100 L1440,120 L0,120 Z"
            />
            <path
              fill="#AFCBFF" /* blue pastel */
              fillOpacity="0.45"
              d="M0,40 C360,140 720,20 1440,90 L1440,120 L0,120 Z"
            />
            <path
              fill="#C8A2FF" /* purple pastel */
              fillOpacity="0.45"
              d="M0,70 C360,170 720,50 1440,110 L1440,120 L0,120 Z"
            />
          </svg>
        </div>
      </div>
    </BirthdayAuthGate>
  );
};

export default BirthdayPage;
