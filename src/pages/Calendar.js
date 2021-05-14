import React from "react";
import Underline from "../components/Underline";

const Calendar = () => {
  return (
    <div
      style={{
        background:
          "radial-gradient(102.08% 403.83% at 0% 0%, rgba(192, 181, 146, 0.96) 3.65%, rgba(200, 189, 156, 0.7) 35.94%, rgba(208, 198, 167, 0.5) 67.71%, rgba(242, 242, 242, 0.69) 100%)",
      }}
    >
      <h2 className="text-purple text-center text-6xl font-marcellus pt-24">
        Kalender Kegiatan
      </h2>
      <Underline />
      <div className="mx-20 my-12 rounded-lg bg-gray h-screen"></div>
      <div>content</div>
    </div>
  );
};

export default Calendar;
