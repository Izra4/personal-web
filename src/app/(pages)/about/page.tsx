"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "../../_components/navigation";

const bootMessages = [
  "Booting up...",
  ".",
  "Loading system files...",
  "Initializing environment...",
  "Welcome to My Terminal About Page!",
  "Type '-h' to see available commands.",
];

export default function Terminal() {
  const [logs, setLogs] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [booting, setBooting] = useState(true);
  const [currentBootIndex, setCurrentBootIndex] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showLoading, setShowLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentBootIndex < bootMessages.length) {
      const timeoutId = setTimeout(() => {
        setLogs((prev) => [...prev, bootMessages[currentBootIndex]]);

        if (currentBootIndex === 0) {
          setShowLoading(true);
        }

        if (currentBootIndex === 0) {
          return;
        }

        if (currentBootIndex === bootMessages.length - 2) {
          setLogs([]);
          setLogs((prev) => [...prev, bootMessages[currentBootIndex]]);
        }

        setCurrentBootIndex((prev) => prev + 1);
      }, 500);

      return () => clearTimeout(timeoutId);
    } else {
      setBooting(false);
    }
  }, [currentBootIndex]);

  // Loading animation effect
  useEffect(() => {
    if (showLoading) {
      const totalSteps = 100;
      const intervalTime = 15;

      const loadingInterval = setInterval(() => {
        setLoadingProgress((prev) => {
          if (prev >= totalSteps) {
            clearInterval(loadingInterval);
            setShowLoading(false);
            setCurrentBootIndex((prev) => prev + 1);
            return 0;
          }
          return prev + 1;
        });
      }, intervalTime);

      return () => clearInterval(loadingInterval);
    }
  }, [showLoading]);

  const getLoadingBar = () => {
    const totalWidth = 100;
    const progress = Math.min(loadingProgress, totalWidth);
    const equals = "=".repeat(progress);
    const spaces = " ".repeat(totalWidth - progress);
    return `[${equals}${spaces}] ${Math.round((progress / totalWidth) * 100)}%`;
  };

  const handleCommand = (cmd: string) => {
    let output = "Unknown command. Type 'h' for help.";
    switch (cmd) {
      case "h":
        output =
          "Available commands: \n" +
          "- h    : Show help\n" +
          "- about: About me\n" +
          "- clear: Clear screen\n" +
          "- exp  : View experiences";
        break;
      case "about":
        output = "Hello! I'm a developer passionate about building cool stuff.";
        break;
      case "exp":
        output =
          "I've worked on a few projects, here are some of them:\n" +
          "- Aman.in  : The project that used to secure the document, using AES encryption to handle the data.\n" +
          "- Sisuka.id: The project for donation, selling merchandise\n" +
          "- Growbiz  : E-Learning project with course integration, using Midtrans as payment gateway\n" +
          "- BEST     : Web profile for Brawijaya Esport (UKM UB), ";
        break;
      case "clear":
        setLogs([]);
        return;
      default:
        break;
    }
    setLogs((prev: string[]) => [...prev, `$ ${cmd}`, output]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !booting) {
      handleCommand(input);
      setInput("");
    }
  };

  // Function to handle clicks on the terminal area
  const handleTerminalClick = () => {
    if (!booting && inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Function to format output text with line breaks and preserved spaces
  const formatOutput = (text: string) => {
    return text.split("\n").map((line, i) => (
      <div key={i} style={{ whiteSpace: "pre" }}>
        {line}
      </div>
    ));
  };

  return (
    <div className="bg-primary min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <div
        ref={terminalRef}
        className="bg-black text-white font-mono p-4 h-screen overflow-y-auto font-sm"
        onClick={handleTerminalClick}
      >
        {logs.map((log, index) => (
          <div key={index}>{formatOutput(log)}</div>
        ))}

        {showLoading && <div style={{ whiteSpace: "pre" }}>{getLoadingBar()}</div>}

        {!booting && (
          <div className="flex">
            <span className="mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-black text-green-500 outline-none w-full"
              autoFocus
            />
          </div>
        )}
      </div>
    </div>
  );
}
