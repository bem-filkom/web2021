import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ name, pathname }) => {
  return (
    <NavLink
      exact
      activeClassName="active"
      to={pathname}
      className="px-6 py-6 text-white text-xl relative"
    >
      {name}
    </NavLink>
  );
};

export default NavItem;
