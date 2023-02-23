import { Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Bell from "../../assets/bell-solid.svg";
import Logo from "../../assets/icon-logo.png";
import { logoutUser } from "../../firebase/services/authentication";
import { getAllCompaniesFromDb } from "../../firebase/services/company";
import { getAllUsersFromDb } from "../../firebase/services/user";
import { removeUserFromLocalStorage } from "../../utils/auth";

const AdminHome = () => {
  const [companies, setCompanies] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const handleDataFetch = async () => {
      const allUsers = await getAllUsersFromDb();
      setUsers(allUsers);
      const allCompanies = await getAllCompaniesFromDb();
      setCompanies(allCompanies);
    };
    handleDataFetch();
  }, []);

  const navigate = useNavigate();

  async function handleLogout() {
    await logoutUser();
    removeUserFromLocalStorage();
    navigate("/welcome");
  }
  return (
    <div>
      <div className="flex justify-between items-center py-3 font-bold text-xl px-3 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 h-16">
        <div>
          <img src={Logo} alt="Gas Demand" id="logoPic" className="w-40" />
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <span>
            <img src={Bell} alt="Notification" className="w-6 h-6" />
          </span>
          <button onClick={handleLogout}>
            <span className="p-1 font-normal border rounded-md cursor-pointer border-primary text-white">
              Logout
            </span>
          </button>
        </div>
      </div>
      <Typography className="bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 text-transparent bg-clip-text font-bold text-2xl my-10 text-center">
        Admin Dashboard
      </Typography>
      <span className="grid grid-cols-2 gap-2 font-bold mx-3">
        <button className="rounded-md border-2 p-4 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 hover:scale-95 duration-300 h-32 flex flex-col justify-center items-start gap-2">
          <Link to="/admin/company">
            <span className="flex flex-col items-start">
              <span className="text-white">3</span>
              <span className="text-white">View All Gas Station</span>
            </span>
          </Link>
        </button>
        <button className="rounded-md border-2 p-4 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 hover:scale-95 duration-300 h-32 flex flex-col justify-center items-start gap-2">
          <Link to="/admin/user">
            <span className="flex flex-col items-start">
              <span className="text-white">2</span>
              <span className="text-white">View All User</span>
            </span>
          </Link>
        </button>
        <button className="rounded-md border-2 p-4 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 hover:scale-95 duration-300 h-32 flex flex-col justify-center items-start gap-2">
          <Link to="/admin/request">
            <span className="flex flex-col items-start">
              <span className="text-white">3</span>
              <span className="text-white">Total Request</span>
            </span>
          </Link>
        </button>
        <button className="rounded-md border-2 p-4 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 hover:scale-95 duration-300 h-32 flex flex-col justify-center items-start gap-2">
          <Link to="">
            <span className="flex flex-col items-start">
              <span className="text-white">3</span>
              <span className="text-white">Received Request</span>
            </span>
          </Link>
        </button>
        <button className="rounded-md border-2 p-4 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 hover:scale-95 duration-300 h-32 flex flex-col justify-center items-start gap-2">
          <Link to="">
            <span className="flex flex-col items-start">
              <span className="text-white">1</span>
              <span className="text-white">Pending Request</span>
            </span>
          </Link>
        </button>
        <button className="rounded-md border-2 p-4 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 hover:scale-95 duration-300 h-32 flex flex-col justify-center items-start gap-2">
          <Link to="">
            <span className="flex flex-col items-start">
              <span className="text-white">2</span>
              <span className="text-white">Approved Request</span>
            </span>
          </Link>
        </button>
      </span>
    </div>
  );
};

export default AdminHome;
