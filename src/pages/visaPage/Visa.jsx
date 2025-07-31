import React from 'react'
import VisaCard from '../../components/VisaCard';
import pic from '../../assets/images/11.jpeg'



const visaData = [
  {
    image: pic,
    title: 'USA Visa',
  },
  {
    image: pic,
    title: 'Canada Visa',
  },
  {
    image: pic,
    title: 'Australia Visa',
  },
  {
    image: pic,
    title: 'Turkey Sticker Visa',
  },
  {
    image: pic,
    title: 'UK Visa',
  },
  {
    image: pic,
    title: 'Brazil Visa',
  },
];


const Visa = () => {
  return (
        <section className="bg-[#eaf0f6] py-12">
      <div className="max-w-container px-3 sm:px-4 md:px-7 lg:mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center justify-items-center">
          {visaData.map((visa, idx) => (
            <VisaCard key={idx} image={visa.image} title={visa.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Visa