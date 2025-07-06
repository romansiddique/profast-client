import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './CustomerResponse.css'
import awladImg from '../../../../assets/image-upload-icon.png'
import testimonialQuote from '../../../../assets/reviewQuote.png'
import customerTop from '../../../../assets/customer-top.png'

const CustomerResponse = () => {
  const settings = {
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 3,
    arrows: false,
    dots: true,
    autoplay: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
  {
    name: "Sarah Khan",
    position: "Marketing Specialist",
    text: "This posture corrector has transformed my daily work life. I feel less back pain and more confident in my posture.",
    profileImg: awladImg
  },
  {
    name: "John Doe",
    position: "Fitness Trainer",
    text: "Great product for anyone who spends long hours sitting. It keeps my back straight and reduces my fatigue significantly.",
    profileImg: awladImg
  },
  {
    name: "Ayesha Rahman",
    position: "Software Engineer",
    text: "I’ve tried many posture correctors, but this one is the most comfortable and effective. Highly recommended!",
    profileImg: awladImg
  },
  {
    name: "Michael Smith",
    position: "Healthcare Consultant",
    text: "Excellent build quality and easy to wear. I noticed improvement in my posture within a few days of use.",
    profileImg: awladImg
  },
];


  return (
    <div className="mb-14">
      <div className="mb-5 flex justify-center items-center">
        <img src={customerTop} alt="" />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-2">What our customers are saying</h1>
        <p className="text-base font-medium">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>

      <div className="mt-5 p-5">
        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="p-10">
              <div className="p-5 bg-white rounded-lg">
                <div className="mb-2">
                  <img src={testimonialQuote} alt="" />
                </div>
                  <div>
                <p className="text-sm">{t.text}</p>
                <div className="border-[0.5px] my-4 border-dotted"></div>

                <div className="flex  items-center gap-3">
                  <img src={t.profileImg} alt="" className="w-8"/>
                  <div>
                    <h1 className="text-sm">{ t.name}</h1>
                    <p className="text-sm">{ t.position}</p>
                  </div>
                </div>
              </div>
              </div>
            
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomerResponse;
