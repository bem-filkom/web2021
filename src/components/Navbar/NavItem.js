import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { departments } from "../../utils/data";
import { motion } from "framer-motion";

const NavItem = ({ name, pathname, isOpen, setIsOpen }) => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownVariants = {
    hidden: {
      overflowY: "hidden",
      maxHeight: 0,
    },
    visible: {
      maxHeight: 200,
      overflowY: "scroll",
    },
  };

  const chevronVariants = {
    up: {
      rotate: 180,
    },
    down: {
      rotate: 0,
    },
    transition: {
      stiffness: 0,
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
          <motion.div
            initial="down"
            animate={dropdown ? "up" : "down"}
            variants={chevronVariants}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </motion.svg>
          </motion.div>
        </div>

        <motion.dl
          initial="hidden"
          animate={dropdown ? "visible" : "hidden"}
          transition={{ stiffness: 0 }}
          variants={dropdownVariants}
          className="relative md:absolute bg-purple w-full dropdown"
        >
          <dd
            className="uppercase cursor-pointer hover:bg-yellow flex h-auto text-left md:text-center font-aeonik text-orange-light text-sm"
            onClick={() => {
              setDropdown(false);
              setIsOpen(!isOpen);
            }}
          >
            <NavLink
              exact
              activeClassName="active-dropdown-item"
              to={`/kabinet`}
              className="w-full text-white px-8 md:px-0 py-2"
            >
              Struktur
            </NavLink>
          </dd>
          {departments.map((department) => (
            <dd
              key={department.id}
              className="uppercase cursor-pointer hover:bg-yellow flex h-auto text-left md:text-center font-aeonik text-orange-light text-sm"
              onClick={() => {
                setDropdown(false);
                setIsOpen(!isOpen);
              }}
            >
              <NavLink
                exact
                activeClassName="active-dropdown-item"
                to={`/kabinet/${department.id}`}
                className="w-full text-white px-8 md:px-0 py-2"
              >
                {department.id !== "wakilpresiden"
                  ? department.id
                  : "WAKIL PRESIDEN"}
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
