import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carousel1 from "../../../../assets/banner/banner1.png";
import carousel2 from "../../../../assets/banner/banner2.png";
import carousel3 from "../../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <div className=" h-[40vh] lg:h-[70vh] w-full rounded-sm mb-14">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        dynamicHeight={false}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        className="rounded-sm"
      >
        <div>
          <img src={carousel1} className=" h-[40vh] lg:h-[70vh] w-full lg:object-cover  rounded-sm" />
        </div>
        <div>
          <img src={carousel2} className=" h-[40vh] lg:h-[70vh] w-full lg:object-cover  rounded-sm" />
        </div>
        <div>
          <img src={carousel3} className=" h-[40vh] lg:h-[70vh] w-full  lg:object-cover rounded-sm" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
