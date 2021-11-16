import React from "react";
import { Fade } from "react-reveal";
import Underline from "../components/Underline";

const ComPro = () => {
  return (
    <div className="text-center text-purple font-marcellus">
      <Fade bottom>
        <div className="py-12">
          <h1 className="text-5xl relative">Company Profile</h1>
          <Underline />
        </div>
      </Fade>
      <iframe
        id="compro"
        title='compro'
        src="https://www.flipbookpdf.net/web/site/88660d32b2ac4bd7586c8faac95a3b49b3460894202111.pdf.html"
        frameborder="0"
        webkitAllowFullScreen
        mozallowfullscreen
        allowFullScreen
        className="mx-auto"
      ></iframe>
    </div>
  );
};

export default ComPro;
