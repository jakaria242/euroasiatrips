
import React, { useState } from "react";
import { FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";

const destinations = [
  {
    group: "Thailand",
    places: ["Bangkok", "Pattaya"],
  },
  {
    group: "Nepal",
    places: ["Kathmandu", "Pokhara"],
  },
];

const Trip = () => {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  const handleSelect = (name) => {
    setSelected(name);
    setOpen(false);
  };

  const handleSearch = () => {
    alert(`Searching for: ${selected}`);
  };

  return (
    <section className="bg-[#eaf0f6] pt-6 pb-10">
      <div className="max-w-container px-3 sm:px-4 md:px-7 lg:mx-auto">
        <div className="text-center mb-8">
          <p className="text-[18px] sm:text-[29px] text-[rgb(13, 24, 33)] font-satisfy font-medium">
            Choose your trip
          </p>
          <h2 className="text-[24px] sm:text-[29px] md:text-[37px] font-semibold font-marcellus text-[rgb(43, 41, 41)] mt-2 mb-2">
            Featured Holiday Destinations
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[22px] font-dmSans text-[rgb(43, 41, 41)] max-w-[680px] mx-auto">
            To those who wish to experience one of the best holiday time ever, we are
            excited to offer unlimited fun is represented in a great way.
          </p>
        </div>

        {/* Dropdown Section */}
        <div className="flex justify-center">
          <div className="w-full bg-[#646667] p-[30px] rounded-lg md:rounded-full flex flex-col md:flex-row gap-y-6 items-center shadow-lg relative ">
            <div className="relative w-full">
              <button
                onClick={() => setOpen(!open)}
                className="w-full bg-white text-[15px] sm:text-[18px] text-[rgb(13, 24, 33)] font-dmSans text-left pl-10 pr-10 py-3 rounded-lg md:rounded-tl-full md:rounded-bl-full focus:outline-none relative transition-all duration-300 "
              >
                <FaMapMarkerAlt className="absolute left-3 top-3.5 text-gray-500" />
                {selected || "Choose Your Destination With Best Tour Package"}
                <FaChevronDown
                  className={`absolute right-3 top-3.5 text-gray-500 transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Content */}
              <div
                className={`absolute top-full w-full bg-white shadow-md rounded-md z-10 overflow-hidden transition-all duration-300 ease-in-out ${
                  open ? "max-h-96 mt-1" : "max-h-0"
                }`}
              >
                {destinations.map((group, groupIdx) => (
                  <div key={groupIdx}>
                    <div
                      className="px-4 py-2 text-[15px] font-semibold text-gray-700 bg-gray-50 border-b border-gray-100 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSelect(group.group)}
                    >
                      {group.group}
                    </div>
                    {group.places.map((place, placeIdx) => (
                      <div
                        key={placeIdx}
                        className="pl-8 pr-4 py-2 text-sm cursor-pointer hover:bg-gray-100 text-gray-800"
                        onClick={() => handleSelect(place)}
                      >
                        {place}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="w-full md:w-[100px] lg:w-[150px] px-6 py-[14px] bg-[#2D51A3] font-dmSans text-white rounded-lg md:rounded-tr-full md:rounded-br-full transition"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trip;
