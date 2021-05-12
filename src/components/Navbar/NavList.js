import React from "react";
import { NAVBAR_ITEMS } from "../../utils/constants";
import NavItem from "./NavItem";

const NavList = () => {
  return (
    <div className='flex flex-row ml-auto'>
      {NAVBAR_ITEMS.map((item, idx) => (
        <NavItem key={idx} name={item.name} pathname={item.pathname}/>
      ))}
    </div>
  );
};

export default NavList;