import { useState, useEffect, useMemo } from "react";

const useTypeWriter = (text: string, speed: number, onFinished?: () => void) => {
  const [index, setIndex] = useState(0);
  const displayText = useMemo(() => text.slice(0, index), [index, text]);

  useEffect(() => {
    if (index >= text.length) {
      if (onFinished) onFinished(); // Trigger callback when finished
      return;
    }

    const timeoutId = setTimeout(() => {
      setIndex((i) => i + 1);
    }, speed);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [index, text, speed, onFinished]);

  return displayText;
};

export const TypeWriter = ({
  text,
  speed,
  className,
  onFinished,
}: {
  text: string;
  speed: number;
  className?: string;
  onFinished?: () => void;
}) => {
  const currentText = useTypeWriter(text, speed, onFinished);

  return <p className={className}>{currentText}</p>;
};
