import React from "react";
import { NAVBAR_ITEMS } from "../../utils/constants";
import NavItem from "./NavItem";
import { motion, useAnimation } from "framer-motion";

const NavList = ({ isOpen, setIsOpen }) => {
  const controls = useAnimation();

  if (isOpen) {
    controls.start({
      left: 0,
    });
  } else {
    controls.start({
      left: "-100%",
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
        initial={{ left: "-100%" }}
        animate={controls}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex md:hidden bg-purple w-full text-center justify-around mt-20 absolute flex-col mx-auto nav-list"
      >
        {NAVBAR_ITEMS.map((item, idx) => (
          <NavItem key={idx} name={item.name} pathname={item.pathname} isOpen = {isOpen} setIsOpen = {setIsOpen}/>
        ))}
      </motion.div>
    </>
  );
};

export default NavList;
