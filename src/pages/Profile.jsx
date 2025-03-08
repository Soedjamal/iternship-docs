import React from "react";
import { imageKendeng, imageMugas } from "../constant/imageDocs";

const Profile = () => {
  return (
    <>
      {" "}
      <div className="hero bg-gradient-to-br from-pink-50 to-purple-300 items-start pt-[200px] min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse w-[400px]">
          <div>
            <h1 class="text-5xl font-bold bg-gradient-to-br from-pink-400 to-purple-600 bg-clip-text text-transparent">
              Profile
            </h1>
            <div className="bio mt-4">
              <h4 className="text-lg text-zinc-600 font-bold flex">
                Nama :{" "}
                <p className="font-normal ml-2">Shafira Keshya Az Zahra</p>
              </h4>
              <h4 className="text-lg text-zinc-600 font-bold flex">
                Sekolah :{" "}
                <p className="font-normal ml-2">SMK Negeri 5 Kendal</p>
              </h4>{" "}
              <h4 className="text-lg text-zinc-600 font-bold flex">
                Jurusan :{" "}
                <p className="font-normal ml-2">Rekayasa Perangkat Lunak</p>
              </h4>{" "}
            </div>
            <p className="py-6 text-zinc-600">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <a href="#laporan-mugas" className="btn btn-wide btn-secondary">
              Lihat Dokumentasi
            </a>
          </div>
        </div>
      </div>
      <div
        id="laporan-mugas"
        className="hero pt-14 bg-pink-50 min-h-[80vh] items-start"
      >
        <div className="hero-content flex-col w-[400px]">
          <h1 class="text-4xl font-bold bg-gradient-to-br from-sky-400 to-purple-600 bg-clip-text text-transparent">
            Dokumentasi Laporan Mugas
          </h1>
          <div className="">
            <div className="carousel rounded-box">
              {imageMugas.map((img, i) => (
                <div className="carousel-item w-auto h-[400px]" key={i}>
                  <img
                    src={img}
                    alt="Burger"
                    loading="lazy"
                    className="object-cover h-full w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        id="laporan-kendeng"
        className="hero pt-14 bg-gradient-to-tl from-pink-50 to-purple-200 min-h-screen items-start"
      >
        <div className="hero-content flex-col w-[400px]">
          <h1 class="text-4xl font-bold bg-gradient-to-br from-sky-400 to-purple-600 bg-clip-text text-transparent">
            Dokumentasi Laporan Kendeng
          </h1>
          <div className="">
            <div className="carousel rounded-box">
              {imageKendeng.map((img, i) => (
                <div className="carousel-item w-auto h-[400px]" key={i}>
                  <img
                    src={img}
                    alt="Burger"
                    loading="lazy"
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
