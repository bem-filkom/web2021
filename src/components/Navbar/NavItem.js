import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ name, pathname, isOpen, setIsOpen }) => {
  return (
    <>
      <NavLink
        exact
        activeClassName="active"
        to={pathname}
        className="px-6 py-6 text-white text-xl relative hidden md:block"
      >
        {name}
      </NavLink>
      <NavLink
        exact
        activeClassName="active"
        to={pathname}
        onClick={() => setIsOpen(!isOpen)}
        className="px-6 py-6 text-white text-xl relative md:hidden"
      >
        {name}
      </NavLink>
    </>
  );
};

export default NavItem;
