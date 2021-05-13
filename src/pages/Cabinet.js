import React from "react";
import PersonCard from "../components/PersonCard";
import Profile from "../components/Profile";
import Program from "../components/Program";
import Underline from "../components/Underline";

const Cabinet = () => {
  return (
    <div className='bg-gray'>
      <div className="max-w-5xl mx-auto pt-8">
        <div>
          <img
            src="/assets/pictures/wide-rectangle.jpg"
            alt="BPH"
            className="mx-auto"
          />
        </div>
        <div className="flex flex-row justify-around py-4">
          <Profile name="Salsabila Nur M." role="STAF" />
          <Profile name="Salsabila Nur M." role="STAF" />
          <Profile name="Salsabila Nur M." role="STAF" />
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-around max-w-6xl py-12 mx-auto">
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
      <div className="py-12">
        <h2 className="text-purple text-center text-5xl font-marcellus">
          Tupoksi
        </h2>
        <Underline/>
        <div className="max-w-5xl mx-auto bg-yellow-light rounded-xl mt-8 shadow-lg text-xl px-8 py-4">
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1
        </div>
      </div>
      <div className="py-12">
        <h2 className="text-purple text-center text-5xl font-marcellus">
          Program Kerja
        </h2>
        <Underline/>
        <div className="max-w-4xl mx-auto rounded-xl mt-4 text-xl px-8 py-4 justify-between flex flex-row flex-wrap">
          <Program name="PK2Maba" />
          <Program name="Web BEM FILKOM" />
          <Program name="Web BEM FILKOM" />
          <Program name="Web BEM FILKOM" />
          <Program name="Web BEM FILKOM" />
        </div>
      </div>
    </div>
  );
};

export default Cabinet;
