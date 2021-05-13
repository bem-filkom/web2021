import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-purple pt-8 px-24">
      <div className="flex flex-wrap flex-row pb-8 justify-between">
        <div className="w-80 text-2xl my-6">
          <h3 className="text-yellow  mb-4 font-marcellus">
            Hubungi Kami
          </h3>
          <div className="text-white text-lg">
            <p>Jl. jalan-jalan bersamamu</p>
            <p> Malang 089680819046 </p>
            <p> (OVO boleh lah) </p>
          </div>
        </div>
        <div className="w-80 text-2xl my-6">
          <h3 className="text-yellow  mb-4 font-marcellus">
            Ikuti Kami
          </h3>
          <div className="flex">
            <div className="text-white flex flex-row gap-x-4 text-5xl">
              <div>
                <i className="fab fa-instagram"></i>
              </div>
              <div>
                <i className="fab fa-tiktok"></i>
              </div>
              <div>
                <i className="fab fa-line"></i>
              </div>
              <div>
                <i className="fab fa-youtube"></i>
              </div>
              <div>
                <i className="fab fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 text-2xl my-6">
          <h3 className="text-yellow  mb-4 font-marcellus">
            Tautan Terkait
          </h3>
          <div>
            <dl className="text-white text-lg">
              <dd>
                <Link to='/'>
                  <i className="fas fa-arrow-right"></i> Mozaik Asa 2021
                </Link>
              </dd>
              <dd>
                <Link to='/'>
                  <i className="fas fa-arrow-right"></i> Elaborasi Makna 2020
                </Link>
              </dd>
              <dd>
                <Link to='/'>
                  <i className="fas fa-arrow-right"></i> Atmabara 2019
                </Link>
              </dd>
              <dd>
                <Link to='/'>
                  <i className="fas fa-arrow-right"></i> Adhitakarya 2018
                </Link>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className='text-center text-white py-6 font-aeonik border-t-2 border-white'>
        Copyright &copy; 2021 BEM FILKOM UB Kabinet Mozaik Asa | Biro Pengembangan
        Informasi &amp; Teknologi
      </div>
    </footer>
  );
};

export default Footer;
