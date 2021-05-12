import React from "react";

const Home = () => {
  return (
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
      <div className="absolute bottom-20 text-2xl">
        <i className="fas fa-chevron-down"></i>
      </div>
    </div>
  );
};

export default Home;
