import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-purple pt-8 px-12 md:px-24">
      <div className="flex flex-wrap flex-row pb-8 justify-between">
        <div className="w-full sm:px-4 xs:w-1/2 md:w-1/3 text-2xl my-6">
          <h3 className="text-yellow  mb-4 font-marcellus">Hubungi Kami</h3>
          <div className="text-white text-lg">
            <p>Gedung C1.2 Fakultas Ilmu Komputer</p>
            <p>Universitas Brawijaya</p>
            <p>Jalan Veteran Nomor 8, Lowokwaru, Malang, Jawa Timur 65145</p>
          </div>
        </div>
        <div className="w-full sm:px-4 xs:w-1/2 md:w-1/3 text-2xl my-6">
          <h3 className="text-yellow  mb-4 font-marcellus">Ikuti Kami</h3>
          <div className="flex">
            <div className="text-white flex flex-row flex-wrap gap-x-4 text-3xl md:text-4xl">
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
        <div className="w-full sm:px-4 xs:w-1/2 md:w-1/3 text-2xl my-6">
          <h3 className="text-yellow  mb-4 font-marcellus">Tautan Terkait</h3>
          <div>
            <dl className="text-white text-lg">
              <dd>
                <Link to="/">
                  <i className="fas fa-arrow-right"></i> Mozaik Asa 2021
                </Link>
              </dd>
              <dd>
                <Link to="/">
                  <i className="fas fa-arrow-right"></i> Elaborasi Makna 2020
                </Link>
              </dd>
              <dd>
                <Link to="/">
                  <i className="fas fa-arrow-right"></i> Atmabara 2019
                </Link>
              </dd>
              <dd>
                <Link to="/">
                  <i className="fas fa-arrow-right"></i> Adhitakarya 2018
                </Link>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="text-center text-white py-4 font-aeonik border-t-2 border-white">
        Copyright &copy; 2021 BEM FILKOM UB Kabinet Mozaik Asa | Biro
        Pengembangan Informasi &amp; Teknologi
      </div>
    </footer>
  );
};

export default Footer;
