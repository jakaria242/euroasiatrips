import React, { useEffect, useState } from 'react'
import VisaCard from '../../components/VisaCard';
import pic from '../../assets/images/11.jpeg'
import axios from 'axios';



const visa = [
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
  const [visaPackages, setVisaPackages] = useState([]);

  useEffect(() => {
    const fetchVisa = async () => {
      try {
        const res = await axios.get("https://bdtravel.net/api/get-visa-package-data");
        const visaData = res.data?.visaPackageData || [];
        setVisaPackages(visaData);
        console.log(visaData); // ✅ Corrected log
      } catch (error) {
        console.error("Failed to fetch Visa Data:", error);
      }
    };

    fetchVisa();
  }, []);

  console.log(visaPackages);
  


  return (
        <section className="bg-[#eaf0f6] py-12">
      <div className="max-w-container px-3 sm:px-4 md:px-7 lg:mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center justify-items-center">
          {visaPackages.map((visa, idx) => (
              <VisaCard
                key={idx}
                image={visa.image || visa.pic}
                title={visa.continent}
              />
            ))}
        </div>
      </div>
    </section>
  )
}

export default Visa