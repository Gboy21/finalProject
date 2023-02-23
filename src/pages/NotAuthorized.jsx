import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/icon-logo.png";

import "swiper/css";
import "swiper/css/pagination";

function NotAuthorized() {
  return (
    <div className="w-full min-h-full bg-white">
      <div>
        <div>
          <div>
          </div>
          <img src={Logo} alt="logo" className="w-64 mx-auto mt-10" />
        </div>
        <p className="flex items-center justify-center px-4 pt-10 text-xl font-bold text-center text-red-400">
          {" "}
          You are not authorised to view this page
        </p>
        <div className="flex items-center justify-center pt-10 cursor-pointer" />
        <span className="flex items-center justify-center pt-8 pb-10 overflow-hidden">
          <Link to="/welcome">
            <button className="rounded-md font-medium text-xl py-3 w-60 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 to-[#5588a399] hover:bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 to-[#5588a399] font-sans">
              Back to home
            </button>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default NotAuthorized;
