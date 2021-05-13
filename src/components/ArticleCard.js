import React from "react";

const ArticleCard = ({ image, description }) => {
  return (
    <div className="flex flex-col w-80 mx-auto my-4 gap-4">
      <div>
        <img src={image} alt="Article" className="w-full" />
      </div>
      <div className='text-justify'>{description}</div>
    </div>
  );
};

export default ArticleCard;
