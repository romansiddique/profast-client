import React from 'react';

const ServicesCard = ({ icon, title, description }) => {
  return (
    <div className='bg-white p-6 rounded-lg shadow text-center flex flex-col'>
      <div className='text-4xl mb-4 mx-auto text-[#bbf705]'>
        {icon}
      </div>
      <h3 className='text-lg font-semibold mb-2'>{title}</h3>
      <p className='text-sm text-gray-600'>{description}</p>
    </div>
  );
};

export default ServicesCard;
