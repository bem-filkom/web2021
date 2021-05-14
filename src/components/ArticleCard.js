import { motion } from "framer-motion";
import React from "react";

const ArticleCard = ({ image, description }) => {
  return (
    <motion.div
      variants={{
        hidden: { y: -100, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      className="flex flex-col w-full md:w-80 mx-auto my-4 gap-4"
    >
      <div>
        <img src={image} alt="Article" className="w-full" />
      </div>
      <div className="text-justify">{description}</div>
    </motion.div>
  );
};

export default ArticleCard;
