import React from "react";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import ArrowLeft from "../../assets/arrow-left-solid.svg";
import Bell from "../../assets/bell-solid.svg";
import { getAllCompaniesFromDb } from "../../firebase/services/company";


function Company() {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const handleDataFetch = async () => {
      const allCompanies = await getAllCompaniesFromDb();
      setCompanies(allCompanies);
      console.log(allCompanies);
    };
    handleDataFetch();
  }, []);


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
        Company
      </h1>
      <div className="mx-3 mt-10 overflow-x-scroll">
        <table className="border-2 border-black table-auto">
          <thead>
            <tr>
              <th className="border border-black p-2">Name</th>
              <th className="border border-black p-2">Phone Number</th>
              <th className="border border-black p-2">Email</th>
              <th className="border border-black p-2">Address</th>
              <th className="border border-black p-2">Avaliable Hours</th>
              <th className="border border-black p-2">Location</th>
              <th className="border border-black p-2">Services</th>
              <th className="border border-black p-2">Status</th>
              <th className="border border-black p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="inline-block p-2 ">SP Kicukiro</td>
              <td className="p-2 border border-black">0786744553</td>
              <td className="p-2 border border-black ">sprwanda@gmail.com</td>
              <td className="text-blue-700 border border-black">kk10st</td>
              <td className="p-2 border border-black ">24</td>
              <td className="p-2 border border-black ">Kicukiro</td>
              <td className="p-2 border border-black ">Fuel Refill</td>
              <td className="p-2 border border-black " id="pending">Pending</td>
              <td className="p-2 text-blue-700 border border-black">
                <button className="hover:underline">Edit</button> &nbsp;&nbsp;
                <button className="hover:underline">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Company;
