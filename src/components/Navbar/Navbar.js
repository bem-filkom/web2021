import React, { useState, useEffect } from "react";
import NavList from "./NavList";
import NavLogo from "./NavLogo";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const home = location.pathname === "/";
  const [background, setBackground] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    hidden: { backgroundColor: "rgba(71, 30, 60, 0)" },
    visible: { backgroundColor: "#471F3C", transition: { duration: 0.5 } },
  };

  useEffect(() => {
    const toggleBackground = () => {
      if (window.scrollY > 80) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    };
    window.addEventListener("scroll", toggleBackground);
    return () => {
      window.removeEventListener("scroll", toggleBackground);
    };
  }, []);

  return (
    <>
      <motion.div
        initial={home ? "hidden" : "visible"}
        animate={home ? (background ? "visible" : "hidden") : "visible"}
        variants={variants}
        className={`flex-row px-4 ${
          home ? "fixed" : "sticky bg-purple"
        } w-full top-0 font-aeonik text-white z-20 hidden md:flex`}
      >
        <NavLogo isOpen={isOpen} setIsOpen={setIsOpen} />
        <NavList isOpen={isOpen} setIsOpen={setIsOpen} />
      </motion.div>
      <div
        className={`flex flex-col top-0 w-full ${
          home ? "fixed" : "sticky"
        } bg-purple md:hidden z-20`}
      >
        <NavLogo isOpen={isOpen} setIsOpen={setIsOpen} />
        <NavList isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default Navbar;
