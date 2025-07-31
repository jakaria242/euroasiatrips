import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import axios from "axios";

import pic1 from "../../assets/images/luxor-2-min.jpg";
import pic2 from "../../assets/images/luxor-3-min.jpg";

const banners = [
  { id: 1, image: pic1 },
  { id: 2, image: pic2 },
];

const BannerSection = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await axios.get("https://bdtravel.net/api/get-homepage-data");
        const countryData = res.data?.getCountryData || [];
        setCountries(countryData);
        console.log(countryData);
        
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    };

    fetchCountries();
  }, []);
  
  //  console.log(countries);


  return (
    <div className="relative w-full  overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full h-[350px] xs:h-[400px] sm:h-[480px] banner-slide">
              <img
                src={banner.image}
                alt={`Banner ${banner.id}`}
                className="w-full h-full object-cover zoom-effect"
              />

              {/* Overlay */}
              <div className="absolute inset-0 banner-overlay z-10 "  />

              {/* Text content */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
                <h2 className="text-[26px] xs:text-[32px] sm:text-[42px] md:[52px] lg:text-[62px] xl:text-[78px]  font-semibold font-marcellus  capitalize">
                  Get Your Visa Faster
                </h2>
                <p className="text-[18px] sm:text-[20px] md:text-[20.5px] lg:text-[25px] font-marcellus mt-1 mb-6 w-full sm:max-w-[400px] md:max-w-[800px] lg:max-w-[900px]" >
                  EuroAsia are a renowned Country Largest destination Management company. <br />
                  We are committed to prove our client Granted services all the way.
                </p>

                {/* Dropdown box */}
                <div className="bg-gradient-to-r from-[#2D51A3] to-[#00AEEF] px-[50px] py-[30px] rounded-[15px] border-[5px] border-dashed border-white max-w-[900px] w-full appearance-none">
                  <select className="w-full px-4 py-3 rounded text-black text-[18px] focus:bg-transparent appearance-none focus:outline-none border border-[#d4d6d9]">
                    <option className=" font-dmSans text-[rgb(13, 24, 33)]">Please select a country</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSection;



