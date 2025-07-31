import React from "react";
import ServiceCard from "../../components/ServiceCard";
import sv1 from "../../assets/images/svgexport-6.svg";
import sv2 from "../../assets/images/svgexport-7.svg";
import sv3 from "../../assets/images/svgexport-8.svg";
import sv4 from "../../assets/images/svgexport-9.svg";
import sv5 from "../../assets/images/svgexport-10.svg";
import sv6 from "../../assets/images/svgexport-11.svg";

const Services = () => {
  const cardData = [
    {
      id: 0,
      icon: sv1,
      title: "Air Ticket",
      showLive: true,
    },
    {
      id: 1,
      icon: sv2,
      title: "Visa",
      showLive: false,
    },
    {
      id: 2,
      icon: sv3,
      title: "Tour Package",
      showLive: false,
    },
    {
      id: 3,
      icon: sv4,
      title: "Study Abroad",
      showLive: false,
    },
    {
      id: 4,
      icon: sv5,
      title: "Hotel Booking",
      showLive: false,
    },
    {
      id: 5,
      icon: sv6,
      title: "Travel Insurance",
      showLive: false,
    },
  ];
  return (
    <section className=" pt-[40px] sm:pt-[50px] md:pt-[60] lg:pt-[80px] pb-[34px] xs:pb-[46px] sm:pb-[55px] lg:pb-[60px]  bg-[#EBF0F4]">
      <div className="max-w-container px-3 sm:px-4 md:px-7 lg:mx-auto">
        <h3 className="text-[18px] sm:text-[29px] font-medium font-satisfy text-[rgb(13, 24, 33)] text-center">
          Our Services
        </h3>
        <h3 className="text-[24px] sm:text-[21px] md:text-[37px] font-semibold font-marcellus text-[rgb(13, 24, 33)] text-center mt-[15px]">
          We Boost Your Bottom Line
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center md:justify-around mt-4 md:mt-6 gap-y-5 gap-x-4 md:gap-x-4 md:gap-y-6">
          {cardData.map((card, index) => (
            <ServiceCard
              key={index}
              icon={card.icon}
              title={card.title}
              showLive={card.showLive}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
