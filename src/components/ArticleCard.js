import { motion } from "framer-motion";
import React from "react";
import { Fade } from "react-reveal";

const ArticleCard = ({ image, description }) => {
  return (
    <Fade bottom>
      <div className="flex flex-col w-full md:w-80 mx-auto my-4 gap-4">
        <div>
          <img src={image} alt="Article" className="w-full" />
        </div>
        <div className="text-justify">{description}</div>
      </div>
    </Fade>
  );
};

export default ArticleCard;
