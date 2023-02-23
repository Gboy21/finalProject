import React from "react";
import Sidebar from "../../components/Layouts/Sidebar";

const CompanyHome = () => {
  return (
    <div>
      <Sidebar />
      <h1 className="bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 text-transparent bg-clip-text font-bold text-2xl text-center py-10">
        GAS Station Dashboard
      </h1>
      <div>
        <span className='grid grid-cols-2 gap-2 font-bold mx-3'>
          <button className='rounded-md border-2 p-4 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 hover:scale-95 duration-300 h-32 flex flex-col justify-center items-start gap-2'>
            <span className="text-white">
              3
            </span>
            <span className="text-white">Total Request</span>
          </button>
          <button className='rounded-md border-2 p-4 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 hover:scale-95 duration-300 h-32 flex flex-col justify-center items-start gap-2'>
            <span className="text-white">
              3
            </span>
            <span className="text-white">Received Request</span>
          </button>
          <button className='rounded-md border-2 p-4 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 hover:scale-95 duration-300 h-32 flex flex-col justify-center items-start gap-2'>
            <span className="text-white">
              1
            </span>
            <span className="text-white">Pending Request</span>
          </button>
          <button className='rounded-md border-2 p-4 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 hover:scale-95 duration-300 h-32 flex flex-col justify-center items-start gap-2'>
            <span className="text-white">
              2
            </span>
            <span className="text-white">Approved Request</span>
          </button>
        </span>
      </div>
    </div>
  );
};

export default CompanyHome;
