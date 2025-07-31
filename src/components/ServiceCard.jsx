import React, { useEffect, useState } from "react";
import sv1 from "../assets/images/svgexport-7.svg";
const colors = [
  "text-green-500",
  "text-red-500",
  "text-blue-500",
  "text-yellow-500",
];

function ServiceCard({ icon, title, showLive = false }) {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    if (!showLive) return;

    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [showLive]);

  return (
    <div className="relative bg-gradient-to-b from-[#00AEEF] to-[#2D51A3] text-white shadow-lg rounded-[7px] p-[60px] w-full xs:w-[350px] sm:w-[400px] md:w-[350px] xl:w-[380px] 2xl-w-[480px] flex flex-col items-center justify-center">
      {showLive && (
        <div
          className={`absolute top-1 right-1 bg-white px-10 py-1 text-[18px] font-semibold font-dmSans rounded ${colors[colorIndex]} transition-colors duration-500`}
        >
          Live
        </div>
      )}

      <div className="w-[80px]">
        <img src={icon} alt="" className="w-full h-full object-cover" />
      </div>

      <h3 className=" text-[22px] sm:text-[27px] md:text-[30px] font-bold font-marcellus mt-8">{title}</h3>
    </div>
  );
}

export default ServiceCard;
