import React from "react";
import "./Ribbon.css";

const Ribbon = ({ primaryTitle, secondaryTitle }) => {
  return (
    <div className='ribbon-wrapper w-10/12 md:w-9/12 mx-auto relative z-10'>
      <div className="ribbon text-center my-4 md:my-8 px-4 py-3 md:py-6 relative rounded-lg">
        <h3 className="text-yellow text-2xl md:text-2xl font-marcellus">
          {secondaryTitle}
        </h3>
        <h1 className="text-white text-xl md:text-3xl font-aeonik">{primaryTitle}</h1>
      </div>
    </div>
  );
};

export default Ribbon;
