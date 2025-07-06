import React from 'react';

const WorksCard = ({ work }) => {
  const {icon, title, description} = work
  return (
    <div>
      <div className='bg-white p-8 rounded-lg h-48 lg:h-40'>
        <div className='text-4xl'>
          { icon}
        </div>
        <h3 className='text-[16px] font-bold my-1'>{ title}</h3>
        <p className='text-[14px]'>{ description}</p>
      </div>
    </div>
  );
};

export default WorksCard;