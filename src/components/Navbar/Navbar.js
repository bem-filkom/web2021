import React from "react";
import NavList from "./NavList";
import NavLogo from "./NavLogo";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const home = location.pathname === "/";
  return (
    <div
      className={`flex flex-row px-4 ${
        home ? "fixed" : "sticky"
      } w-full top-0 font-aeonik text-white  z-10`}
    >
      <NavLogo />
      <NavList />
    </div>
  );
};

export default Navbar;
