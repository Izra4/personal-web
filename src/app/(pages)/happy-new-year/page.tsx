"use client";

import BirthdayAuthGate from "./_components/AuthGate";
import html2canvas from "html2canvas";
import { Lexend } from "next/font/google";
import { useRef, useState } from "react";
import { useMusic } from "./_components/music-context";

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
  const { toggleMusic, playing } = useMusic();
  const [wishOpen, setWishOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [wishText, setWishText] = useState("");
  const [addressInput, setAddressInput] = useState(false);
  const [address, setAddress] = useState("");
  const [addressStatus, setAddressStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [addressError, setAddressError] = useState("");

  const openAddressModal = () => {
    setAddressStatus("idle");
    setAddressError("");
    setAddressInput(true);
  };

  const closeAddressModal = () => {
    setAddressStatus("idle");
    setAddressError("");
    setAddressInput(false);
  };

  const downloadCard = async () => {
    if (!cardRef.current) return;

    const canvas = await html2canvas(cardRef.current, {
      scale: 2, // biar high-resolution
      backgroundColor: null,
    });

    const dataUrl = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = "wish-card.png";
    link.click();
  };

  const restartAnimation = (e: React.AnimationEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.classList.add("reset");
    requestAnimationFrame(() => {
      el.classList.remove("reset");
    });
  };

  const submitAddress = async () => {
    const trimmedAddress = address.trim();
    if (!trimmedAddress) {
      setAddressStatus("error");
      setAddressError("Please enter an address before sending.");
      return;
    }

    setAddressStatus("loading");
    setAddressError("");

    try {
      const response = await fetch("/api/address", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address: trimmedAddress }),
      });

      if (!response.ok) {
        const message = await response.text();
        throw new Error(message || "Failed to send address.");
      }

      setAddressStatus("success");
      setAddress("");
    } catch (error) {
      setAddressStatus("error");
      setAddressError(error instanceof Error ? error.message : "Failed to send address.");
    }
  };

  return (
    <BirthdayAuthGate>
      <div className="h-screen w-screen bg-[#FFDDE1] flex flex-row relative overflow-hidden">
        <div className="absolute top-4 left-4 z-50 flex flex-row items-center space-x-4">
          <a href="/home">
            <img src="logo.svg" alt="Logo" className="w-8 h-8 object-contain drop-shadow-lg" />
          </a>
          <button
            onClick={toggleMusic}
            className="py-2 px-2 bg-[#7232c0] hover:bg-[#642CA9] transition-all duration-200 active:scale-90 rounded-lg text-white"
          >
            {playing ? "Berisik ah, matiin" : "Pengen berisik"}
          </button>
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
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => setWishOpen(true)}
              className="ml-4 px-4 py-2 bg-[#642CA9] text-white rounded-lg shadow-md hover:bg-[#57228c] transition active:scale-95"
            >
              Make a Wish ✨
            </button>
            <button
              onClick={openAddressModal}
              className="ml-4 px-4 py-2 bg-[#642CA9] text-white rounded-lg shadow-md hover:bg-[#57228c] transition active:scale-95"
            >
              Send me a Gift!
            </button>
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
                <div className="w-full h-64 rounded-lg bg-cover bg-center bg-no-repeat bg-[url('/hbd/p5.jpeg')]"></div>
                <div className="w-full h-64 rounded-lg bg-cover bg-center bg-no-repeat bg-[url('/hbd/p6.jpeg')]"></div>
              </div>

              <div className="space-y-6 p-6">
                <div className="w-full h-64 rounded-lg bg-cover bg-center bg-no-repeat bg-[url('/hbd/p1.jpeg')]"></div>
                <div className="w-full h-64 rounded-lg bg-cover bg-center bg-no-repeat bg-[url('/hbd/p2.jpeg')]"></div>
                <div className="w-full h-64 rounded-lg bg-cover bg-center bg-no-repeat bg-[url('/hbd/p3.jpeg')]"></div>
                <div className="w-full h-64 rounded-lg bg-cover bg-center bg-no-repeat bg-[url('/hbd/p4.jpeg')]"></div>
                <div className="w-full h-64 rounded-lg bg-cover bg-center bg-no-repeat bg-[url('/hbd/p5.jpeg')]"></div>
                <div className="w-full h-64 rounded-lg bg-cover bg-center bg-no-repeat bg-[url('/hbd/p6.jpeg')]"></div>
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
        {wishOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999]"
            onClick={() => setWishOpen(false)}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl p-6 relative animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
                onClick={() => setWishOpen(false)}
              >
                ×
              </button>

              <div
                ref={cardRef}
                className="w-[400px] bg-[#FFDDE1] rounded-2xl p-6 shadow-xl relative"
              >
                {/* Decorative background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ffb8c9] to-[#ffd8e1] opacity-40" />

                <h2
                  className={`${lexend.className} relative text-2xl font-semibold text-[#642CA9] mb-4`}
                >
                  My Birthday Wish 🎀
                </h2>

                <p className="relative text-sm text-gray-700 leading-relaxed mb-8">
                  {wishText ||
                    "Write your wish below... Anything, for yourself, your family, or... for us? AWOKOWAKK JAMET BEUT SIAL"}
                </p>

                <p className="absolute bottom-4 left-6 text-xs text-[#642CA9]/60 ">— from myself</p>
              </div>

              {/* INPUT AREA */}
              <textarea
                className="mt-4 w-full h-28 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#642CA9] outline-none"
                placeholder="Write your wish..."
                value={wishText}
                onChange={(e) => setWishText(e.target.value)}
              />
              <p className="text-red-500 text-xs">
                *Relax, your wishes wont be shared to me (izra).
              </p>

              {/* Buttons */}
              <div className="mt-4 flex gap-3">
                <button
                  onClick={downloadCard}
                  className="flex-1 bg-[#642CA9] text-white py-2 rounded-lg shadow-md hover:bg-[#53228a] transition active:scale-95"
                >
                  Download Wish Card
                </button>

                <button
                  onClick={() => setWishOpen(false)}
                  className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 active:scale-95"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {addressInput && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999]"
            onClick={closeAddressModal}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl p-6 relative animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
                onClick={closeAddressModal}
              >
                ×
              </button>
              <p className="text-gray-700">
                Sending a gift is impossible without knowing your address, so write it down below!
              </p>
              <textarea
                className="mt-4 w-full h-28 p-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#642CA9] outline-none"
                placeholder="Send me your address here... (the address that you use for shipping things)"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <p className="text-xs text-red-500">Make sure jangan salah anjir</p>
              <div className="mt-2 w-full flex flex-col justify-center items-center space-y-2">
                <button
                  onClick={submitAddress}
                  disabled={addressStatus === "loading"}
                  className="flex-1 bg-[#642CA9] px-12 text-white py-2 rounded-lg shadow-md hover:bg-[#53228a] transition active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {addressStatus === "loading" ? "Sending..." : "Send"}
                </button>
                {addressStatus === "success" && (
                  <p className="text-green-600 text-sm">
                    Address sent! Thank you 🎁, your present will arrive within a week.
                  </p>
                )}
                {addressStatus === "error" && addressError && (
                  <p className="text-red-500 text-sm">{addressError}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </BirthdayAuthGate>
  );
};

export default BirthdayPage;
