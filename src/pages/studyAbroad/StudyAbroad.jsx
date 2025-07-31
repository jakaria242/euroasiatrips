import React from 'react'
import VisaCard from '../../components/VisaCard'
import pic from '../../assets/images/usa.jpg'



const visaData = [
  {
    image: pic,
    title: 'USA',
  },

];

const StudyAbroad = () => {
  return (
        <section className="bg-[#EBF0F4] py-8">
      <div className="max-w-container px-3 sm:px-4 md:px-7 lg:mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center items-center">
          {visaData.map((visa, idx) => (
            <VisaCard key={idx} image={visa.image} title={visa.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StudyAbroad