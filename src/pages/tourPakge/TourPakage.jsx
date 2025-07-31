import React, { useEffect, useState } from "react";
import { MapPin, Clock, Calendar } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const TourPakage = () => {

    const [packages, setPackages] = useState([]);

    const navigate = useNavigate();



  
    useEffect(() => {
      const fetchPackage = async () => {
        try {
          const res = await axios.get("https://bdtravel.net/api/get-umrah-package-data");
          const packageData = res.data?.umrahPackageData?.data || [];
          setPackages(packageData);
          console.log(packages); // ✅ Corrected log
        } catch (error) {
          console.error("Failed to fetch Visa Data:", error);
        }
      };
  
      fetchPackage();
    }, []);
  
  

    const IMAGE_BASE_URL = "https://bdtravel.net/api/";

      const handleClick = (id) => {
    navigate(`/tourEnquiry/${id}`);
  };


  const packagess = [
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
      <div className="max-w-container px-3 sm:px-4 md:px-7 lg:px-8 2xl:mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => handleClick(pkg.id)}
              className="bg-white rounded-md shadow-lg overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative h-64 group overflow-hidden">
                <img
                  src={`${IMAGE_BASE_URL}${pkg.photo_1}`}
                  // alt={pkg.alt}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                {/* Location Badge */}
                {/* <div className="absolute bottom-4 left-4 text-white rounded-full px-3 py-1 flex items-center gap-1">
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
                </div> */}
              </div>

              {/* Content Section */}
              <div className="p-6">
                <Link to="">
                  <h3 className="text-[20px] text-[rgb(13, 24, 33)] hover:text-[#ff6b35] font-marcellus  mb-3">
                    {pkg.title}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm pb-6 leading-relaxed border-b border-gray-200" dangerouslySetInnerHTML={{ __html: pkg.post_details }}>
                  
                </p>

                {/* Price Section */}
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2 mt-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-600 font-medium">
                      {pkg.package_duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-[22px] sm:text-[26px] md:text-3xl  text-gray-800" dangerouslySetInnerHTML={{ __html: pkg.package_price }} >
                      {/* ৳ {} */}
                    </div>
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
