import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-purple pt-10 px-24">
      <div className="flex flex-row pb-8">
        <div className="w-4/12 text-2xl">
          <h3 className="text-yellow  mb-4 font-marcellus">
            Hubungi Kami
          </h3>
          <div className="text-white text-lg">
            <p>Jl. jalan-jalan bersamamu</p>
            <p> Malang 089680819046 </p>
            <p> (OVO boleh lah) </p>
          </div>
        </div>
        <div className="w-4/12 text-2xl">
          <h3 className="text-yellow  mb-4 font-marcellus">
            Ikuti Kami
          </h3>
          <div className="flex">
            <div className="text-white flex flex-row gap-x-4 text-5xl">
              <div>
                <i class="fab fa-instagram"></i>
              </div>
              <div>
                <i class="fab fa-tiktok"></i>
              </div>
              <div>
                <i class="fab fa-line"></i>
              </div>
              <div>
                <i class="fab fa-youtube"></i>
              </div>
              <div>
                <i class="fab fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/12 text-2xl">
          <h3 className="text-yellow  mb-4 font-marcellus">
            Tautan Terkait
          </h3>
          <div>
            <dl className="text-white text-lg">
              <dd>
                <Link>
                  <i class="fas fa-arrow-right"></i> Mozaik Asa 2021
                </Link>
              </dd>
              <dd>
                <Link>
                  <i class="fas fa-arrow-right"></i> Elaborasi Makna 2020
                </Link>
              </dd>
              <dd>
                <Link>
                  <i class="fas fa-arrow-right"></i> Atmabara 2019
                </Link>
              </dd>
              <dd>
                <Link>
                  <i class="fas fa-arrow-right"></i> Adhitakarya 2018
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
