import React from "react";
import ArticleCard from "../components/ArticleCard";
import { motion } from "framer-motion";
import Underline from "../components/Underline";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <motion.div
      id="landing-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="min-h-screen flex justify-center items-center text-white relative"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(71, 30, 60, 0.72),rgba(71, 30, 60, 0.72)),url('/assets/backgrounds/filkom.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition:'center'
        }}
      >
        <div className="flex flex-col gap-4 md:gap-2 font-marcellus">
          <h1 className="text-4xl md:text-5xl text-center">
            BEM FILKOM UB 2021
          </h1>
          <h3 className="text-2xl md:text-3xl text-center">
            -Kabinet Mozaik Asa-
          </h3>
        </div>
        <div className=" text-2xl absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <HashLink smooth to="/#sambutan">
            <motion.img
              animate={{ y: 24 }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                repeatType: "reverse",
              }}
              src="/assets/pictures/down-arrow.png"
              className="w-12 "
            />
          </HashLink>
        </div>
      </div>
      <div id="sambutan">
        <div className="px-12 md:px-24 py-16 md:py-20 bg-purple flex flex-col sm:flex-row gap-8">
          <div className="flex-none">
            <img
              src="https://paulsexcavations.com.au/wp-content/uploads/2017/11/dummy-image-1-300x298.jpg"
              className="w-full md:w-60 lg:w-80 mx-auto"
              alt="Presiden BEM"
            />
          </div>
          <div className="text-white font-aeonik text-lg flex-auto text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
          </div>
        </div>
        <div className="px-12 md:px-24 py-16 md:py-20 bg-purple flex flex-col-reverse sm:flex-row gap-8 ">
          <div className="text-white font-aeonik text-lg flex-auto text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
          </div>
          <div className="flex-none">
            <img
              src="https://paulsexcavations.com.au/wp-content/uploads/2017/11/dummy-image-1-300x298.jpg"
              className="w-full md:w-60 lg:w-80 mx-auto"
              alt="Presiden BEM"
            />
          </div>
        </div>
      </div>
      <div className="px-12 md:px-24 py-16">
        <h2 className="text-purple text-center font-marcellus text-4xl font-bold">
          ARTIKEL
        </h2>
        <Underline />
        <div className="flex flex-row flex-wrap mt-4 ">
          <ArticleCard
            image="https://dummyimage.com/wsxga"
            description="only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum industry. Lorem Ipsum
            has been the industry's standard dummy text ever"
          />
          <ArticleCard
            image="https://dummyimage.com/wsxga"
            description="only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum industry. Lorem Ipsum
            has been the industry's standard dummy text ever"
          />
          <ArticleCard
            image="https://dummyimage.com/wsxga"
            description="only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum industry. Lorem Ipsum
            has been the industry's standard dummy text ever"
          />
        </div>
        <div className="flex mt-8">
          <a
            href="https://www.instagram.com"
            target="blank"
            className="px-8 py-2 text-lg font-marcellus rounded-full font-semibold bg-yellow-light border-2 border-black mx-auto"
          >
            Read More
          </a>
        </div>
      </div>
      <div className="bg-yellow py-12">
        <h2 className="text-white text-center font-marcellus text-4xl font-semibold">
          PARTNERSHIP
        </h2>
        <div className="mt-8">
          <img
            src="https://dummyimage.com/vga"
            alt="Article"
            className="w-80 mx-auto"
          />
        </div>
      </div>
      <div className="py-16 bg-pink-light">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.4264334819277!2d112.61231751459947!3d-7.954807294270353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7882798282a3fd%3A0x1bca73cef46dbaa3!2sBEM%20FILKOM%20UB!5e0!3m2!1sen!2sid!4v1620894336692!5m2!1sen!2sid"
          title="gmaps"
          style={{ border: 0 }}
          loading="lazy"
          className="mx-auto px-6 md:px-0 w-full md:w-8/12 h-96"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default Home;
