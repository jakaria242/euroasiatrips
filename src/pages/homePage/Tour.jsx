import React from 'react';
import TourCard from '../../components/TourCard';
import pic1 from '../../assets/images/n3.jpg'
import pic2 from '../../assets/images/n4.jpg'
import pic3 from '../../assets/images/n5.jpg'

const tours = [
  {
    image: pic1,
    title: 'NEPAL 3 NIGHTS 2 DAYS',
    locations: ['Singapore'],
    duration: '5 Days',
    price: 39000,
  },
  {
    image: pic2,
    title: 'Test Tour',
    locations: ['Bangkok', 'Pattaya', 'Thailand'],
    duration: '5 Days',
    price: 0,
  },
  {
    image: pic3,
    title: 'NEPAL 5 NIGHTS 6 DAYS',
    locations: ['Kathmandu', 'Nepal', 'Pokhara'],
    duration: '6 Days',
    price: 28500,
  },
];

const Tour = () => {
  return (
<section className='bg-[#eaf0f6] py-12'>
  <div className='max-w-container px-3 sm:px-4 md:px-7 lg:mx-auto'>
    <div className=" flex flex-wrap justify-center gap-6">
              {tours.map((tour, idx) => (
        <TourCard key={idx} {...tour} />
      ))}
    </div>
</div>
</section>
  );
};

export default Tour;
