import React from "react";

const PersonCard = ({ photo, name, role }) => {
  return (
    <div className="flex flex-col w-64 ">
      <div>
        <img src={photo} alt="Member Photo" className="w-full" />
      </div>
      <div className="flex flex-col font-marcellus text-center mt-2">
        <h4 className="text-purple text-2xl font-semibold">{name}</h4>
        <h5 className="text-xl">{role}</h5>
      </div>
    </div>
  );
};

export default PersonCard;
