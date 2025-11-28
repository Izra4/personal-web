"use client";

import { createContext, useContext, useRef, useState, useEffect } from "react";

interface MusicContextType {
  audioRef: React.RefObject<HTMLAudioElement>;
  playing: boolean;
  toggleMusic: () => void;
  playMusic: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider = ({ children }: { children: React.ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement>(null!); // RefObject (not deprecated)
  const [playing, setPlaying] = useState(false);

  // Load music once
  useEffect(() => {
    const audio = new Audio("/music/hbd.mp3");
    audio.loop = true;
    audio.preload = "auto";

    audioRef.current = audio;
    audio.load();
  }, []);

  const playMusic = () => {
    audioRef.current
      ?.play()
      .then(() => setPlaying(true))
      .catch(() => console.log("Autoplay blocked"));
  };

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <MusicContext.Provider value={{ audioRef, playing, toggleMusic, playMusic }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const ctx = useContext(MusicContext);
  if (!ctx) throw new Error("useMusic must be used inside <MusicProvider>");
  return ctx;
};
