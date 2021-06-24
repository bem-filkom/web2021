import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navlogo = ({ isOpen, setIsOpen }) => {
  return (
    <div className="w-full px-4 md:px-0 md:w-auto flex flex-none flex-row justify-between md:justify-start relative">
      <Link to="/" onClick={() => setIsOpen(false)}>
        <img
          src="/assets/pictures/logo-bem-without-text.png"
          style={{
            filter: "drop-shadow(0px 0px 3px rgba(255,255,255,0.3)",
          }}
          alt="logo bem"
          className="w-20"
        />
      </Link>
      <div
        className="mt-7 text-xl md:hidden flex flex-col relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.span
          animate={isOpen ? { rotate: 45, top: 6 } : { rotate: 0, top: 0 }}
          className="bg-white h-1 w-8 relative rounded-md"
        ></motion.span>
        <motion.span
          animate={
            isOpen
              ? { left: 100, opacity: 0, top: 6 }
              : { left: 0, opacity: 1, top: 6 }
          }
          className="bg-white h-1 w-8 relative rounded-md"
        ></motion.span>
        <motion.span
          animate={isOpen ? { rotate: -45, top: -0.6 } : { rotate: 0, top: 12 }}
          className="bg-white h-1 w-8 relative rounded-md"
        ></motion.span>
      </div>
    </div>
  );
};

export default Navlogo;
