import React from "react";
import logoo from "../../assets/images/euroasia.svg";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Tips = () => {
  return (
    <section className="bg-custom-blue-gradient py-[70px]">
      <div className="max-w-container px-3 sm:px-4 md:px-7 lg:mx-auto">
        <div className="w-full flex flex-col lg:flex-row justify-between">
          <div className="">
            <h3 className="text-[22px] xs:text-[25px] sm:text-[29px] md:text-[31px] lg:text-[35px] font-satisfy text-white text-center lg:text-left">
              Welcome to Euroasia Trips
            </h3>
            <p className="text-[14px] sm:text-[18px] font-dmSans mt-4 text-white w-full lg:w-[450px] xl:w-[600px] text-justify mb-14">
              Euro Asia are a renowned Country Largest destination Management
              company. We taking care of Outbound tour & inbound tour . It also
              provide worldwide Hotel booking services from a dedicated
              department. It’s one of B2C and B2B Company in the market. We are
              very well connected with different services provide like the
              HOTELS, TRANSPORTS, RESTAURANTS, MUSEUMS, GUIDES, AIRLINES ,
              CRUISES as well as we also main good relation with different
              related government offices like ministry of civil aviation ,
              Bangladesh Projoton corporation for smooth running the tours . We
              have strong counterpart Europe , Egypt , UAE, QATR , CHINA ,
              MALAYSIA , SINGAPORE , THAILAND , INDIA , NEPAL & CHINA & Many
              More countries . Glory Air Travel’ is the part of Euro Asia. Glory
              Air Travels have good connection of our national carrier
              Bangladesh Biman , Domestic & International Airlines offices .
              Glory Air travel provide Complete worldwide ticket solution. We
              are committed to prove our client Granted services all the way. We
              offer special deal on Hotel reservation & Tour Packages all over
              the world.
            </p>

         <div className="flex justify-center items-center lg:justify-start">
                      <Link
              to="/"
              className="px-4 py-1.5 border border-white rounded-full text-[19px] font-dmSans font-bold text-white hover:text-[#2d51a3] bg-transparent hover:bg-white transition duration-300 inline-block "
            >
              <div className="flex justify-center items-center gap-2 ">
                <p>Read More</p>
                <span>
                  <IoIosArrowForward />{" "}
                </span>
              </div>
            </Link>
         </div>
          </div>
          <div className="w-full py-10 xs:py-14 sm:py-16 md:py-20 lg:w-[600px] lg:h-[550px] overflow-hidden bg-white flex justify-center items-center rounded-lg mt-6">
            <img src={logoo} alt="" className="w-[200px] xs:w-[250] sm:w-[300px] md:w-[320px] lg:w-[360px] object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips;
