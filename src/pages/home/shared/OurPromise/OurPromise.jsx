import React from 'react';
import imgTracking from '../../../../assets/live-tracking.png'
import deliveryMan from '../../../../assets/tiny-deliveryman.png'
import safeDelivery from '../../../../assets/safe-delivery.png'
import OurPromiseCard from './OurPromiseCard';

const features = [
  {
    title: 'Live Parcel Tracking',
    description: 'Track your parcel location in real time for full transparency and peace of mind.',
    image: imgTracking,
  },
  {
    title: '24/7 Support',
    description: 'Our dedicated support team is available anytime to assist your delivery needs.',
    image: safeDelivery,
  },
  {
    title: '100% Safe Delivery',
    description: 'We ensure safe and secure delivery of your parcels every time.',
    image: deliveryMan,
  },
];


const OurPromise = () => {
  return (
    <div className='mb-14'>
      {
        features.map((feature, index) => <OurPromiseCard key={index} feature={feature}></OurPromiseCard>)
      }
    </div>
  );
};

export default OurPromise;