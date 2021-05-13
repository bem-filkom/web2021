import React from "react";
import "./Ribbon.css";

const Ribbon = ({ primaryTitle, secondaryTitle }) => {
  return (
    <div className='ribbon-wrapper w-9/12 mx-auto relative z-10'>
      <div className="ribbon text-center my-8 py-6 relative rounded-lg">
        <h3 className="text-white text-3xl font-aeonik">{primaryTitle}</h3>
        <h1 className="text-yellow text-4xl font-marcellus">
          {secondaryTitle}
        </h1>
      </div>
    </div>
  );
};

export default Ribbon;
