import React, { useState, useEffect } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const Description = () => {
  const [isHeaderDone, setIsHeaderDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeaderDone(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <p
        className={`${poppins.className} text-primary_text font-medium text-justify leading-7
      transition-opacity ${isHeaderDone ? "opacity-100 animate-fade-in" : "opacity-0"} lg:-mt-2`}
      >
        A backend developer with experience in building and managing efficient, scalable server-side
        applications. I also have a strong interest in infrastructure and devsecops. I enjoy
        optimizing development workflows through automation and integration while ensuring the
        systems I build are secure and reliable throughout their lifecycle. With a deep
        understanding of modern technologies and tools, I am committed to delivering innovative,
        efficient, and sustainable solutions.
      </p>
      <p
        className={`${poppins.className} text-primary_text font-medium text-justify
      transition-opacity ${isHeaderDone ? "opacity-100 animate-fade-in-delay" : "opacity-0"} mt-7 text-xs`}
      >
        *Generated by Ai hehe, but it&apos;s based on true story tho :&apos;D
      </p>
    </div>
  );
};

export default Description;
