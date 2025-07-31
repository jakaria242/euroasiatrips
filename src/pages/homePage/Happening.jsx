import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import pln from '../../assets/images/svgexport-14.svg' 

const Happening = () => {
  return (
    <section className='bg-[#EBF0F4] py-[60px]'>
         <div className='max-w-container px-3 sm:px-4 md:px-7 lg:mx-auto'>
        <div className="text-center mb-8">
          <p className="text-[18px] sm:text-[29px] text-[rgb(13, 24, 33)] font-satisfy font-medium">
           What's happening!
          </p>
          <h2 className="text-[24px] sm:text-[29px] md:text-[37px] font-semibold font-marcellus text-[rgb(43, 41, 41)] mt-2 mb-2">
           Visa Services ⚡
          </h2>
          <p className="text-[16px] sm:text-[18px] md:text-[22px] font-dmSans text-[rgb(13, 24, 33)] max-w-[870px] mx-auto mt-3">
           Euroasia Trips is the best visa processing agency in Bangladesh for multiple purposes like touring and traveling, business, treatment, Umrah Hajj visa processing etc.
          </p>
           <p className='text-[18px] font-dmSans mt-12 mb-16'>No posts found!</p>
                       <Link
              to="/"
              className="px-8 py-1.5 bg-custom-blue-gradient rounded-full text-[19px] font-dmSans font-bold text-white inline-block"
            >
              <div className="flex justify-center items-center gap-4">
                <span>
                  <img src={pln} alt="" className='w-[20px]'/>
                </span>
                <p>All Visa Services</p>
              </div>
            </Link>
        </div>
         </div>
    </section>
  )
}

export default Happening