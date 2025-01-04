"use client";

import { useState, useEffect } from "react";

const useTypeWriter = (text: string, speed: number) => {
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setCurrentText((prev) => prev + text.charAt(i));
      i++;
      if (i === text.length) {
        clearInterval(interval);
      }
    }, speed);
  
    return () => clearInterval(interval);
  }, [text, speed]);
  

  return currentText;
}

export const TypeWriter = ({ text, speed, className}: { text: string; speed: number; className?: string }) => {
  const currentText = useTypeWriter(text, speed);

  return <p className={className}>{currentText}</p>;
}