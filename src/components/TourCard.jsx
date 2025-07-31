import React from 'react';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TourCard = ({ image, title, locations, duration, price }) => {
  return (
    <div className="bg-[#FFF9F4] rounded-md overflow-hidden w-full max-w-[335px] border border-gray-200">
      <div className='w-[335px] h-[195px]'>
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="px-4 py-5">
        <Link to=''>
          <h3 className="text-[16px] xs:text-[18px] sm:text-[20px] text-[rgb(13, 24, 33)] hover:text-[#ff6b35] font-marcellus font-semibold mb-3">
            {title}
          </h3>
        </Link>

<div className='flex items-center gap-4 border-b border-gray-200 pb-4'>
          <div className="flex items-start text-gray-600 text-sm ">
          <FaMapMarkerAlt className="mr-1 text-[#02AFEF] mt-[2px]" />
          <ul className="flex flex-wrap gap-1">
            {locations.map((loc, index) => (
              <li key={index}>
                <Link to="#" className="hover:underline text-[12px] xs:text-[14px] font-dmSans text-gray-700 hover:text-[#ff6b35]">
                  {loc}{index !== locations.length - 1 ? ',' : ''}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center text-gray-600 text-sm">
          <FaClock className="mr-1 text-[#02AFEF]" />
          <span>{duration}</span>
        </div>
</div>

        <div className="flex justify-between items-center  pt-3">
          <span className="text-[22px] xs:text-[25px] sm:text-[27px] md:text-[30px] font-dmSans font-bold text-gray-800">৳ {price}</span>
          <button className="bg-[#2D51A3] text-white px-5 py-2 text-sm font-dmSans rounded-full">
            Book Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
