import React from "react";
import merchantImg from "../../../../assets/location-merchant.png";
import merchantBgCard from "../../../../assets/be-a-merchant-bg.png"


const MerchantCard = () => {
  return (
    <div>
      <div className="border my-14 border-dotted border-gray-400"></div>
      <div data-aos='zoom-in'>

        <div className="p-20 bg-[#03373D] max-w-4/5 mx-auto mb-14 bg-no-repeat rounded-xl " style={{backgroundImage: `url(${merchantBgCard})`}}>
        <div className="flex justify-center items-center  " >
        
        <div className="flex-1">
          <h1 className="text-white text-2xl font-semibold mb-4">Merchant and Customer Satisfaction is Our First Priority</h1>
          <p className="text-white text-base">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <div className="mt-4">
            <button className="bg-[#CAEB66] p-2 rounded-full font-semibold mr-4">Become a Merchant</button>
            <button className="border-2 border-[#CAEB66] p-2  rounded-full text-[#CAEB66] font-medium">Earn with Profast Courier</button>
          </div>
        </div>

        <div className="flex-1">
          <img src={merchantImg} alt=""/>
        </div>
      </div>
      </div>
      </div>
      
    </div>
  );
};

export default MerchantCard;
