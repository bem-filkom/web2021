import React from "react";
import PersonCard from "../components/PersonCard";
import Profile from "../components/Profile";
import Program from "../components/Program";
import Underline from "../components/Underline";
import { motion } from "framer-motion";
import Ribbon from "../components/Ribbon/Ribbon";

const Cabinet = () => {
  return (
    <motion.div
      className="bg-gray"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Ribbon
        primaryTitle="KEBIROAN"
        secondaryTitle="PENGEMBANGAN INFORMASI &amp; TEKNOLOGI"
      />
      <div className="max-w-5xl px-12 md:px-24 mx-auto pt-12">
        <div>
          <img
            src="/assets/pictures/wide-rectangle.jpg"
            alt="BPH"
            className="mx-auto"
          />
        </div>
        <div className="flex flex-row flex-wrap justify-around py-4 gap-x-2 gap-y-4">
          <Profile name="Salsabila Nur M." role="STAF" />
          <Profile name="Salsabila Nur M." role="STAF" />
          <Profile name="Salsabila Nur M." role="STAF" />
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-around px-12 md:px-24 max-w-6xl py-12 mx-auto">
        <PersonCard
          photo={"/assets/pictures/rectangle.png"}
          name="Salsabila Nur M."
          role="STAF"
        />
        <PersonCard
          photo={"/assets/pictures/rectangle.png"}
          name="Salsabila Nur M."
          role="STAF"
        />
        <PersonCard
          photo={"/assets/pictures/rectangle.png"}
          name="Salsabila Nur M."
          role="STAF"
        />
      </div>
      <div className="py-8 md:py-12 px-8 md:px-24">
        <h2 className="text-purple text-center text-5xl font-marcellus">
          Tupoksi
        </h2>
        <Underline />
        <div className="max-w-5xl mx-auto bg-yellow-light rounded-xl mt-8 shadow-lg text-xl px-4 md:px-8 py-4">
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </div>
      </div>
      <div className="py-12">
        <h2 className="text-purple text-center text-5xl font-marcellus">
          Program Kerja
        </h2>
        <Underline />
        <div className="max-w-4xl mx-auto rounded-xl mt-4 text-xl px-8 py-4 justify-between flex flex-row flex-wrap">
          <Program name="PK2Maba" />
          <Program name="Web BEM FILKOM" />
          <Program name="Web BEM FILKOM" />
          <Program name="Web BEM FILKOM" />
          <Program name="Web BEM FILKOM" />
        </div>
      </div>
    </motion.div>
  );
};

export default Cabinet;
