import React from "react";

const About = () => {
  return (
    <div
      style={{
        background:
          "radial-gradient(102.08% 403.83% at 0% 0%, rgba(192, 181, 146, 0.96) 3.65%, rgba(200, 189, 156, 0.7) 35.94%, rgba(208, 198, 167, 0.5) 67.71%, rgba(242, 242, 242, 0.69) 100%)",
      }}
    >
      <div className="py-52 text-center text-purple font-marcellus">
        <h2 className="text-4xl mb-4">TENTANG</h2>
        <h1 className="text-5xl">BEM FILKOM UB 2021</h1>
      </div>
      <div className="w-9/12 mx-auto ">
        <div
          className="rounded-2xl flex flex-row px-16 py-12 gap-x-4"
          style={{ background: "rgba(242, 238, 225, 0.6)" }}
        >
          <div className="flex-shrink-0">
            <img
              src="/assets/pictures/logo-transparent.png"
              alt="Logo BEM"
              className="w-80"
            />
          </div>
          <div className="text-2xl text-purple my-auto">
            Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer Universitas
            Brawijaya (BEM FILKOM UB) merupakan bla bla bla aaaaaaaa
            aaaaaaaaaaaaa aaaaaaaa aaaaaaaaaa aaaaaaaaaaa aaa aaaaaa aaaaaaaaa
            aaaa aaaa aaaaa aaaaa
          </div>
        </div>
      </div>
      <div className="mt-20 px-24 py-12 text-purple bg-yellow">
        <h2 className="text-4xl text-right font-marcellus border-b-2 border-purple pb-4">
          VISI
        </h2>
        <p className="text-2xl px-16 py-8 font-aeonik">
          BEM FILKOM UB Sebagai wadah multi arti sehingga terwujudnya kolaborasi
          aksi untuk FILKOM, Brawijaya, dan Indonesia
        </p>
      </div>
      <div className="px-24 py-12 text-purple bg-gray">
        <h2 className="text-4xl font-marcellus border-b-2 border-purple pb-4">
          MISI
        </h2>
        <p className="text-2xl py-8 font-aeonik">
          <ul className="list-decimal pl-6">
            <li>
              Membangun internal BEM FILKOM UB yang berporos profesionalitas
              berlandaskan kekeluargaan
            </li>
            <li>
              Mewujudkan pelayanan advokasi yang responsif dan kredibel demi
              kesejahteraan mahasiswa
            </li>
            <li>
              Menciptakan wadah untuk mahasiswa agar mencapai aktualisasi diri
              agar terciptanya aksi prestasi
            </li>

            <li>
              Menginisiasikan pergerakan mahasiswa yang strategis dan dinamis
            </li>
            <li>
              Mengkolaborasikan seluruh elemen FILKOM UB secara komprehensif{" "}
            </li>
          </ul>
        </p>
      </div>
      <div className="flex flex-row ">
        <div className="w-1/2 bg-purple px-8 py-16 flex flex-col">
          <h2 className="text-4xl font-marcellus text-white border-b-2 border-white pb-4">
            ARAH GERAK
          </h2>
          <div className="h-60"></div>
        </div>
        <div className="w-1/2 bg-yellow px-8 py-16 flex flex-col">
          <h2 className="text-4xl font-marcellus text-purple border-b-2 border-purple pb-4 ml-auto">
            BUDAYA KERJA
          </h2>
          <div className="h-60"></div>
        </div>
      </div>
      <div className="bg-pink-light flex flex-col justify-center items-center py-20 gap-y-6 text-purple">
        <h3 className="italic font-aeonik text-2xl">MOZAIK ASA</h3>
        <h2 className='font-marcellus text-4xl'>"RANGKAI ASA BERSAMA!"</h2>
      </div>
    </div>
  );
};

export default About;
