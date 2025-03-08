import React from "react";
import { Link } from "react-router-dom";

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
            <Link to="/documentation" className="btn btn-wide btn-secondary">
              Lihat Dokumentasi
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
