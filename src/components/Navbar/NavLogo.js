import React from "react";
import { Link } from "react-router-dom";

const Navlogo = () => {
  return (
    <Link to="/" className="w-20 flex-none">
      <img
        src="/assets/pictures/logo-bem-without-text.png"
        alt="logo bem"
        className="w-full"
      />
    </Link>
  );
};

export default Navlogo;
