import React from 'react';
import { CiDeliveryTruck, CiLocationOn, CiMoneyBill } from 'react-icons/ci';
import { FaBuilding } from 'react-icons/fa';
import WorksCard from './WorksCard';

const Works = () => {


  const works = [
  {
    icon: <CiDeliveryTruck />,
    title: 'Pickup Delivery',
    description: 'Fast and reliable pickup and delivery services.'
  },
  {
    icon: <CiMoneyBill />,
    title: 'Cash On Delivery',
    description: 'Pay easily after receiving your parcel.'
  },
  {
    icon: <CiLocationOn />,
    title: 'Delivery Hub',
    description: 'Convenient hubs for quick parcel drop and pickup.'
  },
  {
    icon: <FaBuilding />,
    title: 'Booking SME & Corporate',
    description: 'Flexible solutions for businesses and corporates.'
  },
];

  return (
    <div className='mb-14'>
      <h1 className='text-3xl font-semibold mb-8'>How its works</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
        {
        works.map((work, index) => <WorksCard key={index} work={work}></WorksCard>)
      }
      </div>
      
    </div>
  );
};

export default Works;