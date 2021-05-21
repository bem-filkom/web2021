import React from "react";
import Slider from "react-slick";

const PartnershipCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 8000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1204,
        settings: {
          slidesToShow: 1,
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
    <div className='px-12 md:px-24'>
      <Slider {...settings}>
        <div>
          <img src="/assets/partnership/dqlab.png" className="mx-auto py-8" />
        </div>
        <div>
          <img src="/assets/partnership/teknologi-id.png" className="mx-auto py-8" />
        </div>
      </Slider>
    </div>
  );
};

export default PartnershipCarousel;
