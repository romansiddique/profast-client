import React from 'react';

const OurPromiseCard = ({ feature }) => {
  const { title, description, image } = feature;

  return (
    <div className='bg-white mb-2 flex items-center justify-start gap-4 p-5 rounded-lg '>
      
      {/* Image */}
      <div className="flex-shrink-0">
        <img src={image} alt="" className='w-[150px] h-[150px] object-contain rounded border border-dotted border-gray-300 p-2' />
      </div>

      {/* Divider */}
      <div className='hidden md:flex h-full items-center'>
        <div className='border-l-2 border-dotted border-gray-400 h-12 md:h-16 lg:h-20 ml-8'></div>
      </div>

      {/* Text */}
      <div className='ml-4'>
        <h1 className='text-xl font-bold mb-2'>{title}</h1>
        <p className='text-sm'>{description}</p>
      </div>

    </div>
  );
};

export default OurPromiseCard;
