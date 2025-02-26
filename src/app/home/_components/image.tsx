import Image from "next/image";
import { useEffect, useState } from "react";

const ProfileImage = () => {
  const [isHeaderDone, setIsHeaderDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeaderDone(true);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Image
        src="/me.svg"
        alt="profile"
        width={400}
        height={400}
        className={`2xl:w-3/5 transition-opacity ease-in duration-300 ${isHeaderDone ? "opacity-100 animate-fade-in" : "opacity-0"}`}
      />
    </div>
  );
};

export default ProfileImage;
