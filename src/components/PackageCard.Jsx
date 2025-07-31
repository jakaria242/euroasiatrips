import React from 'react';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const PackageCard = ({  image, title, description, locations, duration, price  }) => {
  return (
    <div className="w-full max-w-[360px] bg-white rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.1)] overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-[200px]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {/* Location Overlay */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-2">
          <p className="text-white text-sm flex items-center gap-1">
            <FaMapMarkerAlt className="text-white" />
            {locations}
          </p>
        </div>
      </div>

      {/* Info Section */}
      <div className="px-4 py-5">
        <h3 className="text-[15px] text-gray-800 font-semibold mb-1">{title}</h3>
        <p className="text-[14px] text-gray-600 leading-snug mb-4">{description}</p>

        <div className="flex justify-between items-center border-t pt-3 text-[14px]">
          <div className="flex items-center text-gray-600 gap-1">
            <FaClock className="text-red-500" />
            {duration}
          </div>
          <div className="text-gray-800 font-bold text-[18px]">৳ {price}</div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
