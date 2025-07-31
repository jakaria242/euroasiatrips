import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Euroasia-logo-2.png";
import { allNavs } from "./allNavs";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="py-2 xs:py-[15px] bg-headBg">
      <div className="max-w-container px-3 sm:px-4 md:px-6 lg:mx-auto ">
        <div className="flex justify-between items-center">
          <div className="w-[40%] xs:w-[30%]">
            <Link to="/">
              <img src={logo} alt="Not found" className="w-full xs:w-[180px]" />
            </Link>
          </div>

          <div className="w-[60%] xs:w-[70%] flex justify-end items-center ">
            <div className="hidden md:block">
              <ul className="flex justify-center items-center md:gap-4 lg:gap-8">
                {allNavs.map((nav) => (
                  <li key={nav.id}>
                    <Link
                      to={nav.path}
                      className="text-[18px] text-[#0d1821] hover:text-[#e63946] font-marcellus transition capitalize"
                    >
                      {nav.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-[26px] sm:text-4xl text-[#e63946]"
              >
                {menuOpen ? <AiOutlineMenu /> : <AiOutlineMenu />}
              </button>
            </div>

            {/* Mobile Menu Items */}
          </div>
        </div>
        <div className="md:hidden">
          <div
            className={` overflow-hidden transition-all duration-500 ease-in-out ${
              menuOpen ? "max-h-[500px] mt-4" : "max-h-0"
            }`}
          >
            <ul className="flex flex-col items-start gap-4  px-4 py-2 bg-[#fff9f4]">
              {allNavs.map((nav) => (
                <li key={nav.id} className="w-full border-b border-[#d4d6d9]">
                  <Link
                    to={nav.path}
                    className="block w-full pb-2 text-base text-[#0d1821] hover:text-[#e63946] font-marcellus transition capitalize"
                    onClick={() => setMenuOpen(false)} // menu auto close on click
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
