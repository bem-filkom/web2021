import React from "react";
import {Fade} from "react-reveal";

const ArticleCard = ({thumbnail, link, title, date}) => {
  return (
    <Fade bottom>
      <div className="flex flex-col w-full md:w-80 mx-auto my-4">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={thumbnail} alt="Article" className="w-full rounded-t-lg"/>
        </a>
        <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col flex-grow items-center content-center justify-center bg-purple p-6 space-y-2 rounded-b-lg overflow-hidden">
          <span
            className="flex overflow-hidden text-pink text-center font-aeonik text-sm font-semibold"
          >
            {date}
          </span>
          <h2
            style={{
              "display": "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              "overflow": "hidden"
            }}
            className="overflow-hidden text-yellow text-center font-aeonik text-xl font-semibold leading-snug"
          >
            {title}
          </h2>
        </a>
      </div>
    </Fade>
  );
};

export default ArticleCard;
