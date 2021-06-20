import React from "react";
import {Fade} from "react-reveal";

const ArticleCard = ({thumbnail, link, title, date}) => {
  return (
    <Fade bottom>
      <a href={link}  className="flex flex-col mx-auto my-4 w-full md:w-80" >
        <div style={{backgroundImage : `url("${thumbnail}")`}} className='bg-cover bg-center h-80 hidden md:block'/>
        <img src={thumbnail} alt={title} className="w-full rounded-t-lg block md:hidden"/>
        <div className="flex flex-col flex-grow items-center content-center justify-center bg-purple p-6 space-y-2 rounded-b-lg overflow-hidden">
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
        </div>
      </a>
    </Fade>
  );
};

export default ArticleCard;
