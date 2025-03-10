import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>

        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.instagram.com/frkeshya?igsh=NG84bDRiMHMza3Jx">
              <FontAwesomeIcon className="text-3xl" icon={faInstagram} />
            </a>
          </div>
        </nav>
        <div className="relative bottom-0 w-full px-8 py-4 flex justify-center border-t-zinc-600 border-t-[2px]">
          <h4 className="font-bold text-center">
            &copy; {new Date().getFullYear()} Shafira Keshya Az Zahra,
            <br />
            All Rights Reserved{" "}
          </h4>
        </div>
      </footer>
    </>
  );
};

export default Footer;
