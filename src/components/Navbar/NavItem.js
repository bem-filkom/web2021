import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { departments } from "../../utils/data";

const NavItem = ({ name, pathname, isOpen, setIsOpen }) => {
  const [dropdown, setDropdown] = useState(true);

  if (name === "Kabinet") {
    return (
      <div
        className="relative"
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
      >
        <NavLink
          activeClassName="active"
          to={pathname}
          className="px-6 py-6 text-white text-xl relative hidden md:block"
          onClick={() => setDropdown(false)}
        >
          {name}
        </NavLink>
        {dropdown && (
          <dl className="absolute bg-purple w-full">
            {departments.map((department) => (
              <dd
                key={department.id}
                className="my-2 uppercase cursor-pointer hover:bg-yellow flex"
                onClick={() => setDropdown(false)}
              >
                <Link to={`/kabinet/${department.id}`} className='w-full'>{department.id}</Link>
              </dd>
            ))}
          </dl>
        )}
        <NavLink
          exact
          activeClassName="active"
          to={pathname}
          onClick={() => setIsOpen(!isOpen)}
          className="px-6 py-6 text-white text-xl relative md:hidden"
        >
          {name}
        </NavLink>
      </div>
    );
  }

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
