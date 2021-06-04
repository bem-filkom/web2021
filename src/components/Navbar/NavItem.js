import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { departments } from "../../utils/data";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";
import { motion } from "framer-motion";

const NavItem = ({ name, pathname, isOpen, setIsOpen }) => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownVariants = {
    hidden: {
      overflowY: 'hidden',
      maxHeight: 0,
    },
    visible: {
      maxHeight: 200,
      overflowY: 'scroll'
    },
  };

  if (name === "Kabinet") {
    return (
      <div
        className="relative cursor-pointer"
        onClick={() => {
          setDropdown(!dropdown);
        }}
      >
        <div className="px-8 md:px-6 py-6 text-white text-xl relative flex items-center ">
          {name}&nbsp;
          <KeyboardArrowDownRoundedIcon />
        </div>

        <motion.dl
          initial="hidden"
          animate={dropdown ? "visible" : "hidden"}
          transition={{ stiffness: 0 }}
          variants={dropdownVariants}
          className="relative md:absolute bg-purple w-full"
        >
          {departments.map((department) => (
            <dd
              key={department.id}
              className="px-8 md:px-0 py-2 uppercase cursor-pointer hover:bg-yellow flex h-auto text-left md:text-center font-aeonik text-orange-light text-sm"
              onClick={() => {
                setDropdown(false);
                setIsOpen(!isOpen);
              }}
            >
              <NavLink
                exact
                activeClassName="active-dropdown-item"
                to={`/kabinet/${department.id}`}
                className="w-full text-white"
              >
                {department.id}
              </NavLink>
            </dd>
          ))}
        </motion.dl>
      </div>
    );
  }

  return (
    <>
      <NavLink
        exact
        activeClassName="active"
        to={pathname}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="px-8 md:px-6 py-6 text-left text-white text-xl relative"
      >
        {name}
      </NavLink>
    </>
  );
};

export default NavItem;
