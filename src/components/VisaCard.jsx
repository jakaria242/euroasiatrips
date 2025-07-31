import React from 'react';

const VisaCard = ({ image, title }) => {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.15)] w-full max-w-[400px] p-2">
      <div className="w-full h-[200px]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-3 text-left">
        <h3 className="text-[22px] xs:text-[25.5px] sm:text-[28] md:text-[32px] font-marcellus font-semibold text-[rgb(13,24,33)] uppercase">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default VisaCard;
