import React from "react";
import { Link } from "react-router-dom";

const Navlogo = ({ isOpen, setIsOpen }) => {
  return (
    <div className="w-full px-4 md:px-0 md:w-auto flex flex-none flex-row justify-between md:justify-start relative">
      <Link to="/">
        <img
          src="/assets/pictures/logo-bem-without-text.png"
          alt="logo bem"
          className="w-20"
        />
      </Link>
      <div className="my-auto text-xl md:hidden">
        <i
          className="fas fa-bars text-white"
          onClick={() => setIsOpen(!isOpen)}
        ></i>
      </div>
    </div>
  );
};

export default Navlogo;
