import React from 'react';
import Marquee from 'react-fast-marquee';
import cus1 from '../../../../assets/brands/amazon.png';
import cus2 from '../../../../assets/brands/casio.png';
import cus3 from '../../../../assets/brands/moonstar.png';
import cus4 from '../../../../assets/brands/randstad.png';
import cus5 from '../../../../assets/brands/start-people 1.png';
import cus6 from '../../../../assets/brands/start.png';

const brands = [cus1, cus2, cus3, cus4, cus5, cus6];

const HopeCustomers = () => {
  return (
    <div className='mb-14'>
      <h1 className='text-3xl font-extrabold text-center'>We've helped thousands of sales teams</h1>
      <div className='flex justify-center items-center'>
        <Marquee className='mt-8' pauseOnHover={true} gradient={false} speed={40}>
        {[...brands, ...brands].map((brand, index) => (
          <img
            key={index}
            src={brand}
            alt=""
            className='mr-20 w-[100px] h-[30px]'
          />
        ))}
      </Marquee>
      </div>
    </div>
  );
};

export default HopeCustomers;
