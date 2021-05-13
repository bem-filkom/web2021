import React from "react";
import ArticleCard from "../components/ArticleCard";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";

const Home = () => {
  const svgVariants = {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: { duration: 1 },
    },
  };

  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

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
        }}
      >
        <div className="flex flex-col gap-2 font-marcellus">
          <h1 className="text-5xl">BEM FILKOM UB 2021</h1>
          <h3 className="text-3xl text-center">-Kabinet Mozaik Asa-</h3>
        </div>
        <div
          className="absolute bottom-16 text-2xl cursor-pointer"
          onClick={() =>
            scroller.scrollTo("sambutan", {
              smooth: true,
              duration: 600,
              delay: 200,
              offset: -75
            })
          }
        >
          <motion.i
            className="fas fa-chevron-down"
            animate={{ y: 16 }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              repeatType: "reverse",
            }}
          ></motion.i>
        </div>
      </div>
      <div id="sambutan">
        <div className="px-24 py-20 bg-purple flex flex-row gap-8">
          <div className="flex-none">
            <img
              src="https://paulsexcavations.com.au/wp-content/uploads/2017/11/dummy-image-1-300x298.jpg"
              className="w-80"
              alt="Presiden BEM"
            />
          </div>
          <div className="text-white font-aeonik text-lg flex-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and
          </div>
        </div>
        <div className="px-24 py-20 bg-purple flex flex-row gap-8">
          <div className="text-white font-aeonik text-lg flex-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and
          </div>
          <div className="flex-none">
            <img
              src="https://paulsexcavations.com.au/wp-content/uploads/2017/11/dummy-image-1-300x298.jpg"
              className="w-80"
              alt="Presiden BEM"
            />
          </div>
        </div>
      </div>
      <div className="px-24 py-16">
        <h2 className="text-purple text-center font-marcellus text-4xl font-bold">
          ARTIKEL
        </h2>
        <div className="flex flex-row flex-wrap mt-12">
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
        <div className="flex mt-12">
          <a className="px-8 py-2 text-lg font-marcellus rounded-full font-semibold bg-yellow-light border-2 border-black mx-auto">
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
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          className="mx-auto w-8/12 h-96"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default Home;
