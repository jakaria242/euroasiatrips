import React from "react";
import { MapPin, Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const TourPakage = () => {
  const packages = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: ["Kathmandu", "Nepal", "Pokhara"],
      title: "NEPAL 5 NIGHTS 6 DAYS",
      subtitle: "NEPAL 5 NIGHTS 6 DAYS 2N Kathmandu 2N Pokhara 1N Nagarkot",
      duration: "6 Days",
      price: "28500",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: ["Kathmandu", "Nepal", "Pokhara"],
      title: "NEPAL 4 NIGHTS 5 DAYS",
      subtitle: "NEPAL 5 NIGHTS 6 DAYS 2N Kathmandu 2N Pokhara 1N Nagarkot",
      duration: "5 Days",
      price: "26500",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: ["Kathmandu", "Nepal"],
      title: "NEPAL 3 NIGHTS 4 DAYS",
      subtitle: "NEPAL 3 NIGHTS - 4 DAYS Kathmandu Heritage & Nature Tour",
      duration: "4 Days",
      price: "28500",
    },
  ];

  return (
    <div className="bg-[#EBF0F4] py-8">
      <div className="max-w-container px-3 sm:px-4 md:px-7 lg:mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-md shadow-lg overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative h-64 group overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                {/* Location Badge */}
                <div className="absolute bottom-4 left-4 text-white rounded-full px-3 py-1 flex items-center gap-1">
                                        <MapPin className="w-4 h-4 text-white" />
                  {pkg.location.map((loc, idx) => (
                    <Link
                      key={idx}
                      to={`/location/${loc.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-sm font-medium text-white  flex items-center gap-1 "
                    >

                      <p className="text-white hover:text-[#ff6b35] hover:underline">{loc}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <Link to="">
                  <h3 className="text-[20px] text-[rgb(13, 24, 33)] hover:text-[#ff6b35] font-marcellus  mb-3">
                    {pkg.title}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm pb-6 leading-relaxed border-b border-gray-200">
                  {pkg.subtitle}
                </p>

                {/* Price Section */}
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2 mt-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-600 font-medium">
                      {pkg.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[22px] sm:text-[26px] md:text-3xl  text-gray-800">
                      ৳ {pkg.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourPakage;
