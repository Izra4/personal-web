import { useState, useEffect, useMemo } from "react";

const useTypeWriter = (
  text: string,
  speed: number,
  removeSpeed: number,
  onFinished?: () => void,
) => {
  const [index, setIndex] = useState(0);
  const [removing, setRemoving] = useState(false);
  const [startedRemoving, setStartedRemoving] = useState(false); // Untuk menandai apakah sudah ada jeda 2 detik
  const displayText = useMemo(() => text.slice(0, index), [index, text]);

  useEffect(() => {
    if (index === text.length && !startedRemoving) {
      const timeoutId = setTimeout(() => {
        setStartedRemoving(true);
      }, 2000);

      return () => clearTimeout(timeoutId);
    }

    if (startedRemoving && !removing) {
      setRemoving(true);
    }

    if (removing && index > 0) {
      const timeoutId = setTimeout(() => {
        setIndex((i) => i - 1);
      }, removeSpeed);

      return () => clearTimeout(timeoutId);
    }

    if (!removing && index < text.length) {
      const timeoutId = setTimeout(() => {
        setIndex((i) => i + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    }

    if (index === 0 && removing && onFinished) {
      onFinished();
    }
  }, [index, text, speed, removeSpeed, removing, startedRemoving, onFinished]);

  return displayText;
};

export const TypeWriterRemove = ({
  text,
  speed,
  removeSpeed,
  className,
  onFinished,
}: {
  text: string;
  speed: number;
  removeSpeed: number;
  className?: string;
  onFinished?: () => void;
}) => {
  const currentText = useTypeWriter(text, speed, removeSpeed, onFinished);

  return <p className={className}>{currentText}</p>;
};
