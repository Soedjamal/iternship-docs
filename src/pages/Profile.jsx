import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      {" "}
      <div className="hero bg-gradient-to-br from-pink-50 to-purple-300 items-start pt-[200px] min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse w-[400px]">
          <div>
            <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-br from-pink-400 to-purple-600 bg-clip-text text-transparent">
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
              </h4>
            </div>{" "}
            <h1 class="text-4xl md:text-5xl mt-10 font-bold bg-gradient-to-br from-pink-400 to-purple-600 bg-clip-text text-transparent">
              Contact me
            </h1>
            <div className="bio mt-4">
              <h4 className="text-lg text-zinc-600 font-bold flex items-center ">
                <FontAwesomeIcon icon={faEnvelope} />
                <p className="font-normal mx-4">shafirakeshya25@gmail.com</p>
              </h4>
              <h4 className="text-lg text-zinc-600 font-bold flex items-center ">
                <FontAwesomeIcon icon={faPhone} />
                <p className="font-normal mx-4">+62 8314 7334 686</p>
              </h4>{" "}
              <h4 className="text-lg text-zinc-600 font-bold flex items-center ">
                <FontAwesomeIcon icon={faInstagram} />
                <a
                  href="https://www.instagram.com/frkeshya?igsh=NG84bDRiMHMza3Jx"
                  className="font-normal mx-4 text-sky-700"
                >
                  @frkeshya
                </a>
              </h4>
            </div>{" "}
            <p className="py-6 text-zinc-600"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
