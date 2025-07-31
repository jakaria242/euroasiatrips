import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdSmartDisplay } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-[15px] bg-headBg border-b-[0.5px] border-[#d4d6d9]">
      <div className="max-w-container px-3 sm:px-4 md:px-7 lg:mx-auto">
        <div className="flex flex-wrap xs:flex-nowrap justify-center xs:justify-between items-center gap-x-4 gap-y-2">
          <Link
            to="visa@euroasiatrips.com "
            className="text-[#2b2929] font-medium text-[12.96px] font-dmSans order-2 xs:order-1 hover:underline"
          >
            visa@euroasiatrips.com
          </Link>
          <div className=" flex items-center gap-3 order-1 xs:order-2">
            <Link to="#" className="p-[7px] rounded-full bg-white text-[11px] align-middle shadow-[rgba(27,31,35,0.04)_0px_1px_0px,rgba(255,255,255,0.25)_0px_1px_0px_inset]">
              <FaFacebook className="text-[16px] text-[#00AEEF]" />
            </Link>
            <Link to="#" className="p-[7px] rounded-full bg-white text-[11px] align-middle shadow-[rgba(27,31,35,0.04)_0px_1px_0px,rgba(255,255,255,0.25)_0px_1px_0px_inset]">
              <FaXTwitter  className="text-[16px] text-[#00AEEF]" />
            </Link>
            <Link to="#" className="p-[7px] rounded-full bg-white text-[11px] align-middle shadow-[rgba(27,31,35,0.04)_0px_1px_0px,rgba(255,255,255,0.25)_0px_1px_0px_inset]">
              <MdSmartDisplay  className="text-[16px] text-[#00AEEF]" />
            </Link>
            <Link to="#" className="p-[7px] rounded-full bg-white text-[11px] align-middle shadow-[rgba(27,31,35,0.04)_0px_1px_0px,rgba(255,255,255,0.25)_0px_1px_0px_inset]">
              <IoLogoWhatsapp  className="text-[16px] text-[#00AEEF]" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
