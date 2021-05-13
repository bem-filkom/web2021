import React from "react";
import { NAVBAR_ITEMS } from "../../utils/constants";
import NavItem from "./NavItem";
import { motion, useAnimation } from "framer-motion";

const NavList = ({ isOpen, setIsOpen }) => {
  const controls = useAnimation();

  if (isOpen) {
    controls.start({
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    });
  } else {
    controls.start({
      x: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    });
  }

  return (
    <>
      <motion.div
        className="hidden md:flex text-center justify-around 
    w-auto relative flex-row ml-auto"
      >
        {NAVBAR_ITEMS.map((item, idx) => (
          <NavItem key={idx} name={item.name} pathname={item.pathname} />
        ))}
      </motion.div>
      <motion.div
        animate={controls}
        className="flex md:hidden bg-green-500 w-full text-center justify-around mt-20 absolute flex-col mx-auto nav-list"
      >
        {NAVBAR_ITEMS.map((item, idx) => (
          <NavItem key={idx} name={item.name} pathname={item.pathname} />
        ))}
      </motion.div>
    </>
  );
};

export default NavList;
