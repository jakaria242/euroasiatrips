import React from "react";
import { Link } from "react-router-dom";

const DestinationCard = ({img, text}) => {
  return (
    <div className="w-full sm:w-[360px] h-[250px] overflow-hidden relative group">
      <Link to="">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover transform transition-transform duration-[1000ms] group-hover:scale-125"
        />

        <div
          className="absolute inset-0  z-10 flex justify-center items-end pb-3"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(6, 22, 38, 0.2) 40%, #061626 100%)",
          }}
        >
          <h2 className="text-[22px] xs:text-[28px] sm:text-[34px] md:text-[40px] lg:text-[45px] text-white font-marcellus hover:text-[#00AEEF] inline-block capitalize">
            {text}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default DestinationCard;
