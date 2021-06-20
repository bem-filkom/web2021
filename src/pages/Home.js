import React, { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import { motion } from "framer-motion";
import Underline from "../components/Underline";
import { HashLink } from "react-router-hash-link";
import PartnershipCarousel from "../components/PartnershipCarousel";
import { Fade, Slide } from "react-reveal";
import HashLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const override = css`
    position: absolute;
    left: 50%;
    bottom: 8rem;
    transform: translate(-50%, -50%);
  `;

  const variants = {
    up: {
      y: 0,
    },
    down: {
      y: 24,
      transition: {
        repeat: Infinity,
        duration: 0.8,
        repeatType: "reverse",
      },
    },
  };

  useEffect(() => {
    const fetchIGPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://bemfilkom-rest.vercel.app/web/ig");
        let { data } = await res.json();
        setLoading(false);
        data = data.posts.map((item) => ({
          ...item,
          thumbnail: `https://bib.actionsack.com/imageproxy?url=${encodeURIComponent(
            item.thumbnail
          )}`,
        }));
        setPosts(data.slice(0, 6));
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    fetchIGPosts();
  }, []);

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
            "linear-gradient(to right, rgba(184, 137, 47, 0.85), rgba(184, 137, 47, 0.65)), url('/assets/backgrounds/filkom.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Fade bottom>
          <div
            className="flex flex-col gap-4 md:gap-2 font-marcellus"
            style={{
              textShadow: " 1px 1px 8px rgb(36 37 47 / 25%)",
            }}
          >
            <h1 className="text-5xl md:text-7xl text-center">
              BEM FILKOM 2021
            </h1>
            <h3 className="text-3xl md:text-3xl text-center">
              — Kabinet Mozaik Asa —
            </h3>
          </div>
        </Fade>
        <div className=" text-2xl absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <HashLink smooth to="/#sambutan">
            <motion.img
              className="w-12"
              src="/assets/pictures/down-arrow.png"
              initial="up"
              animate="down"
              variants={variants}
            />
          </HashLink>
        </div>
      </div>
      <div id="sambutan" className="overflow-x-hidden">
        <div className="bg-purple">
          <div className="px-10 py-16 md:py-20 flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-12 max-w-8xl mx-auto">
            <Slide left>
              <div className="flex flex-col justify-center space-y-4 w-full md:w-3/12">
                <h3 className="text-yellow text-2xl font-semibold">
                  Sambutan Hangat
                </h3>
                <p className="text-white text-3xl">
                  Presiden dan Wakil Presiden
                </p>
              </div>
            </Slide>
            <div className="flex-none w-full md:w-4/12 flex items-center justify-center">
              <Fade>
                <img
                  src="/assets/kabinet/pres-wapres.jpg"
                  className="w-10/12 md:w-11/12"
                  alt="Presiden BEM"
                />
              </Fade>
            </div>
            <Slide right>
              <div className="text-white font-aeonik text-md flex-auto text-justify w-full md:w-5/12 flex flex-col justify-around space-y-4 md:space-y-2">
                <p className="text-yellow font-semibold">
                  Assalamu'alaikum wr wb. Shalom. Om Swastyastu. Namo Buddhaya
                  Rahayu.
                </p>
                <p>
                  Salam hangat dari kita yang terpisah jarak kebersamaan. Di era
                  ini, dihadapi dengan kehidupan normal yang baru, membuat
                  adaptasi menjadi langkah terbaik menyambung asa. Namun,
                  yakinlah bahwa melangkah bersama dalam sekat ruang yang ada,
                  menjadikan yang sempit meluas, gelap menerang dan dangkal
                  mendalam menciptakan mozaik dan merangkai asa tak terbatas
                  dari kehidupan.
                </p>
                <p className="text-yellow font-semibold">
                  BEM FILKOM 2021 - RANGKAI ASA BERSAMA!
                </p>
              </div>
            </Slide>
          </div>
        </div>
      </div>
      <div className="px-10 py-16 max-w-8xl mx-auto">
        <h2 className="text-purple text-center font-marcellus text-4xl font-bold">
          KABAR TERBARU
        </h2>
        <Underline />
        <div className="flex flex-row flex-wrap mt-4 ">
          {loading ? (
            <div className="relative h-80 w-full">
              <HashLoader color="#471F3C" loading={loading} css={override} />
              <div className="text-xl text-purple text-center mb-2 absolute bottom-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Loading...
              </div>
            </div>
          ) : (
            posts.map((post, idx) => <ArticleCard key={idx} {...post} />)
          )}
        </div>

        <div className="flex mt-8">
          <a
            href="https://www.instagram.com/bemfilkomub/"
            target="blank"
            className="px-8 py-2 text-lg font-marcellus rounded-full font-semibold bg-yellow-light border-2 border-black mx-auto"
          >
            Baca kabar lainnya &rarr;
          </a>
        </div>
      </div>
      <div className="bg-yellow py-12">
        <h2 className="text-white text-center font-marcellus text-4xl font-semibold">
          PARTNERSHIP
        </h2>
        <div className="mt-8">
          <PartnershipCarousel />
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
