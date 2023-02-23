import { Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import company from "../assets/company-enterprise-icon.webp";
import admin from "../assets/icon-admin.png";
import logo from "../assets/icon-logo.png";
import user from "../assets/User_Icon.png";

function Welcome() {
  return (
    <>
    <div className="welcome-home">
      <div className="justify-center h-screen font-bold text-gray-900">
        <Link to="/">
          <img src={logo} alt="logo" className="w-64 h-40 mx-auto" />
        </Link>
        <div className="flex flex-col items-center pb-6 gap-y-10">
          <Typography className="bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 text-transparent bg-clip-text font-bold text-2xl">
           ON ROAD GAS DEMAND
          </Typography>
          <Link to="/user/login">
            <div className="h-20 w-40 flex flex-col gap-y-2 justify-center items-center rounded-lg bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 hover:scale-110 duration-300 text-white">
              <span>
                <img src={user} alt="avatar" className="w-6 h-6" />
              </span>
              USER
            </div>
          </Link>
          <Link to="/company/login">
            <div className="w-40 h-20 flex flex-col gap-y-2 justify-center items-center rounded-lg bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 to-[#5588a399] hover:scale-110 duration-300 text-white">
              <span>
                <img src={company} alt="avatar" className="w-6 h-6" />
              </span>
              GAS STATION
            </div>
          </Link>
          <Link to="/admin/login">
            <div className="w-40 h-20 flex flex-col gap-y-2 justify-center items-center rounded-lg bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 to-[#5588a399] hover:scale-110 duration-300 text-white">
              <span>
                <img src={admin} alt="avatar" className="w-6 h-6" />
              </span>
              ADMIN
            </div>
          </Link>
        </div>
      </div>
      </div>
    </>
  );
}

export default Welcome;
