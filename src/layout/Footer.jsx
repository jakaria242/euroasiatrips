import React from "react";
import { FaFacebookF, FaYoutube, FaFacebookMessenger } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#F5F5F4] text-gray-800 pt-10 border-t border-gray-300">
      <div className="max-w-container px-3 sm:px-4 md:px-7 lg:mx-auto">
        <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-12 gap-10 pb-8 justify-center xs:justify-between sm:justify-center">
          {/* Office Address */}
          <div className="md:col-span-4">
            <h3 className="text-[18px] xs:text-[21px] sm:text-[23.5px] md:text-[26px] font-medium font-marcellus text-[#0d1821] mb-8">
              Office Address
            </h3>
            <p className="text-[13px] xs:text-[15.5px] sm:text-[17.2px] md:text-[18px] font-dmSans text-[#0d1821] mb-2">
              Ka–8 (1st Floor), Bashundhara R/A (Main Gate), Ainuddin Munshi
              Road, Vatara Dhaka, Dhaka, Bangladesh, 1229
            </p>
            <p className="font-bold text-[13px] xs:text-[15.5px] sm:text-[17.2px] md:text-[18px]font-dmSans text-[#0d1821]">
              Hotline : (+88) 01940–181860
            </p>
            <p className="font-bold text-[13px] xs:text-[15.5px] sm:text-[17.2px] md:text-[18px] font-dmSans text-[#0d1821]">
              Email:{" "}
              <Link
                href="mailto:visa@euroasiatrips.com"
                className="text-[#0d1821]"
              >
                visa@euroasiatrips.com
              </Link>
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-14">
              <Link
                to="#"
                className="bg-white p-2 rounded-full shadow text-[#00AEEF]"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="#"
                className="bg-white p-2 rounded-full shadow text-[#00AEEF]"
              >
                <FaXTwitter />
              </Link>
              <Link
                to="#"
                className="bg-white p-2 rounded-full shadow text-[#00AEEF]"
              >
                <FaYoutube />
              </Link>
              <Link
                to="#"
                className="bg-white p-2 rounded-full shadow text-[#00AEEF]"
              >
                <FaFacebookMessenger />
              </Link>
            </div>
          </div>

          {/* About */}
          <div className="md:col-span-3">
            <h3 className="text-[18px] xs:text-[21px] sm:text-[23.5px] md:text-[26px] font-medium font-marcellus text-[#0d1821] mb-3">
              About
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="#" className="text-[13px] xs:text-[15.5px] sm:text-[17.2px] md:text-[18px] font-dmSans text-[#0d1821]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-[13px] xs:text-[15.5px] sm:text-[17.2px] md:text-[18px] font-dmSans text-[#0d1821]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-[13px] xs:text-[15.5px] sm:text-[17.2px] md:text-[18px]font-dmSans text-[#0d1821]">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link to="#" className="text-[13px] xs:text-[15.5px] sm:text-[17.2px] md:text-[18px] font-dmSans text-[#0d1821]">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Visa Assistance */}
          <div className="md:col-span-3">
            <h3 className="text-[18px] xs:text-[21px] sm:text-[23.5px] md:text-[26px] font-medium font-marcellus text-[#0d1821] mb-3">
              Visa Assistance
            </h3>
            <p className="text-[13px] xs:text-[15.5px] sm:text-[17.2px] md:text-[18px] font-dmSans text-[#0d1821]">
              DUBAI (UAE)
            </p>
          </div>

          {/* Tour Type */}
          <div className="md:col-span-2">
            <h3 className="text-[14px] xs:text-[21px] sm:text-[23.5px] md:text-[26px] font-medium font-marcellus text-[#0d1821] mb-3">
              Tour Type
            </h3>
            {/* Empty column for now */}
          </div>
        </div>


      </div>
      <div className="border-t border-gray-300 pb-2">
        <div className="max-w-container px-3 sm:px-4 md:px-7 lg:mx-auto">
                    <div className="flex justify-between items-center px-6 py-4 text-sm max-w-7xl mx-auto">
          <p>Copyright © 2024 Euro Asia</p>
          <div className="flex gap-2">
            <img
              src="https://img.icons8.com/color/48/visa.png"
              alt="Visa"
              className="h-6"
            />
            <img
              src="https://img.icons8.com/color/48/mastercard-logo.png"
              alt="Mastercard"
              className="h-6"
            />
            <img
              src="https://img.icons8.com/color/48/amex.png"
              alt="Amex"
              className="h-6"
            />
            <img
              src="https://img.icons8.com/color/48/paypal.png"
              alt="Paypal"
              className="h-6"
            />
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
