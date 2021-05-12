import React from "react";

const Card = ({ image, description }) => {
  return (
    <div className="flex flex-col w-80 mx-auto">
      <div>
        <img src={image} alt="Article Image" className="w-full" />
      </div>
      <div>{description}</div>
    </div>
  );
};

export default Card;
