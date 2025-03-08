import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div
      className="menu bg-pink-50 bg-opacity-80 shadow-black drop-shadow-xl
      backdrop-blur-sm text-zinc-800 rounded-b-lg rounded-tr-none rounded-tl-none w-[100vw]"
    >
      <li>
        <Link to="/" className="font-semibold text-zinc-600">
          Home
        </Link>
      </li>
      <li>
        <details close>
          <summary className="font-semibold text-zinc-600">
            <Link to="/profile">Profile</Link>
          </summary>
          <ul>
            <li>
              <a href="#laporan-mugas">Dokumentasi</a>
            </li>
            <li>
              <a>Kesimpulan</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link to="/contact" className="font-semibold text-zinc-600">
          Contact
        </Link>
      </li>
    </div>
  );
};

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      {menu ? (
        <div className="transition-all duration-500 ease-in-out fixed top-16 left-0 z-10">
          <Menu />
        </div>
      ) : (
        <div className="transition-all duration-500 ease-in-out fixed top-[-100%] left-0 z-10">
          <Menu />
        </div>
      )}
      <div className="navbar z-10 bg-pink-50 bg-opacity-80 backdrop-blur-sm text-zinc-800 border-b-stone-400 border-[1px] fixed top-0">
        <div className="navbar-start">
          <div className="dropdown" onClick={() => setMenu(!menu)}>
            <div
              tabIndex={0}
              role="button"
              className="btn drop-shadow-none shadow-none btn-ghost btn-circle hover:bg-pink-100 text-zinc-800 border-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            {/* <ul */}
            {/*   tabIndex={0} */}
            {/*   className="menu menu-sm bg-pink-50 bg-opacity-90 dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow" */}
            {/* > */}
            {/*   <li> */}
            {/*     <a href="#">Homepage</a> */}
            {/*   </li> */}
            {/*   <li> */}
            {/*     <a href="#laporan-mugas">Dokumentasi Laporan Mugas</a> */}
            {/*   </li> */}
            {/*   <li> */}
            {/*     <a href="#laporan-kendeng">Dokumentasi Laporan Kendeng</a> */}
            {/*   </li> */}
            {/* </ul> */}
          </div>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />{" "}
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
