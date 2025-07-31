import React from 'react'
import DestinationCard from '../../components/DestinationCard'
import pic from "../../assets/images/d1.jpg";
import pic2 from "../../assets/images/n1.jpg";


const data = [
    {
        id: 0,
        img: pic,
        text: "Thiland",
    },
    {
        id: 1,
        img: pic2,
        text: "Nepal"
    },


]

const Destinations = () => {
  return (
    <section className='py-[60px] bg-[#F1E5DB]'>
        <div className="max-w-container px-3 sm:px-4 md:px-7 lg:mx-auto">
                    <h3 className="text-[18px] sm:text-[29px] font-medium font-satisfy text-[rgb(13, 24, 33)] text-center">
          Travel the world
        </h3>
        <h3 className="text-[24px] sm:text-[29px] md:text-[37px] font-semibold font-marcellus text-[rgb(13, 24, 33)] text-center mt-[15px]">
          Top Destinations
        </h3>
        <div className='mt-[20px] flex flex-wrap justify-center md:justify-start md:justify-items-start  items-center  gap-6'>
              {
                data.map((item,i)=>(
                    <div key={item.id}><DestinationCard img={item.img} text={item.text}/></div>
                ))
              }
        </div>
        </div>
    </section>
  )
}

export default Destinations