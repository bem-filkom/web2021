import React from "react";

const Profile = ({name, role}) => {
  return (
    <div className="flex flex-col font-marcellus text-center mt-2 flex-auto">
      <h4 className="text-purple text-2xl font-semibold mb-2">{name}</h4>
      <h5 className="text-xl">{role}</h5>
    </div>
  );
};

export default Profile;