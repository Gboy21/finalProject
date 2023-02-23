import React from "react";
import { Link } from "react-router-dom";
import ArrowLeft from "../../assets/arrow-left-solid.svg";
import Bell from "../../assets/bell-solid.svg";

const Request = () => {
  return (
    <>
      <div className="flex items-center justify-between py-3 mx-3 text-xl font-bold">
        <Link to={"/admin"}>
          <span className="flex items-center gap-2">
            <img src={ArrowLeft} alt="" className="w-5 h-5" />
            Back
          </span>
        </Link>
        <div className="flex items-center gap-3 cursor-pointer">
          <span>
            <img src={Bell} alt="Notification" className="w-6 h-6" />
          </span>
          <Link to={"/welcome"}>
            <span className="p-1 border rounded-md cursor-pointer border-primary">Logout</span>
          </Link>
        </div>
      </div>
      <h1 className="text-center pt-10 text-2xl bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 to-[#5588a399] text-transparent bg-clip-text font-bold">
        Request
      </h1>
      <div className="mx-3 mt-10 overflow-x-scroll">
        <table className="border-2 border-black table-auto">
          <thead>
            <tr>
              <th className="border border-black">Gas Station Name</th>
              <th className="inline-block p-2 border border-black w-max">User Name</th>
              <th className="border border-black">Services</th>
              <th className="border border-black">Feedback</th>
              <th className="border border-black">Rating</th>
              <th className="border border-black">Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="inline-block p-2 ">SP Kicukiro</td>
              <td className="p-2 border border-black">Gilbert</td>
              <td className="inline-block p-2 border border-black w-max">Fuel Refill</td>

              <td className="text-blue-700 border border-black">kk10st</td>
            </tr>
            <tr>
              <td className="inline-block p-2 border border-black w-max">I can't thank you how much helped me</td>
              <td className="p-2 border border-black ">Noella</td>
              <td className="inline-block p-2 border border-black w-max">Diesel Refill</td>

              <td className="text-blue-700 border border-black">kk10st</td>
            </tr>
            <tr>
              <td className="inline-block p-2 w-max">Lake Sonatubes</td>
              <td className="p-2 border border-black">Christine</td>
              <td className="inline-block p-2 border border-black w-max">Diesel Refill</td>
              <td className="text-blue-700 border border-black">kk10st</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Request;
