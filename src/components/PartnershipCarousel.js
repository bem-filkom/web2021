import React from "react";
import Slider from "react-slick";
import { partnerships } from "../utils/constants";

const PartnershipCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1204,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-12 md:px-24">
      <Slider {...settings}>
        {partnerships.map((partnership, idx) => (
          <div key={idx}>
            <img
              src={`/assets/partnership/${partnership}.png`}
              alt="partnership"
              className="m-auto py-8 w-56"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnershipCarousel;
