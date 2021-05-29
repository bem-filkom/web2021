import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { departments } from "../../utils/data";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";

const NavItem = ({ name, pathname, isOpen, setIsOpen }) => {
  const [dropdown, setDropdown] = useState(false);

  if (name === "Kabinet") {
    return (
      <div
        className="relative cursor-pointer"
        onClick={() => setDropdown(!dropdown)}
      >
        <div className="px-8 md:px-6 py-6 text-white text-xl relative flex items-center ">
          {name} <KeyboardArrowDownRoundedIcon />
        </div>
        {dropdown && (
          <dl className="relative md:absolute bg-purple w-full">
            {departments.map((department) => (
              <dd
                key={department.id}
                className="mb-3 uppercase cursor-pointer hover:bg-yellow flex text-left px-8 font-aeonik text-orange-light"
                onClick={() => setDropdown(false)}
              >
                <Link to={`/kabinet/${department.id}`} className="w-full">
                  {department.id}
                </Link>
              </dd>
            ))}
          </dl>
        )}
      </div>
    );
  }

  return (
    <>
      <NavLink
        exact
        activeClassName="active"
        to={pathname}
        onClick={() => setIsOpen(!isOpen)}
        className="px-8 md:px-6 py-6 text-left text-white text-xl relative"
      >
        {name}
      </NavLink>
    </>
  );
};

export default NavItem;
