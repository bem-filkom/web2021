import React from "react";
import { Fade } from "react-reveal";

const ArticleCard = ({ image, description }) => {
  const cutPostDescription = (description) => {
    return description.split(" ").slice(0, 28).join(" ") + "...";
  };

  return (
    <Fade bottom>
      <div className="flex flex-col w-full md:w-80 mx-auto my-4 gap-4">
        <div>
          <img src={image} alt="Article" className="w-full" />
        </div>
        <div className="text-justify">{cutPostDescription(description)}</div>
      </div>
    </Fade>
  );
};

export default ArticleCard;
