import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bars from "../../assets/bars-solid.svg";
import bell from "../../assets/bell-solid.svg";
import Message from "../../assets/forum.svg";
import home from "../../assets/house-solid.svg";
import Logo from "../../assets/icon-logo.png";
import logout from "../../assets/logout.svg";
import user from "../../assets/user-solid.svg";
import xmark from "../../assets/xmark-solid.svg";
import { logoutUser } from "../../firebase/services/authentication";
import { removeUserFromLocalStorage } from "../../utils/auth";
import {AiFillHome} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {RiMessageLine} from 'react-icons/ri';
import {IoIosLogOut} from 'react-icons/io';
import {IoIosNotificationsOutline} from 'react-icons/io';
import {GrClose} from 'react-icons/gr';

function Sidebar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  async function handleLogout() {
    await logoutUser();
    removeUserFromLocalStorage();
    navigate("/welcome");
  }

  return (
    <div>
      <div className="flex justify-between px-3 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500  h-16 items-center">
        <div onClick={() => setShow(!show)} className={"cursor-pointer"}>
          <img src={bars} alt="Menu" className="w-8 h-8" />
        </div>
        <div className="flex items-center gap-x-3">
          <span>
            <IoIosNotificationsOutline alt="Notification" className="w-8 h-8"/>
            
          </span>
          <span>
            <img src={Logo} alt="Gas Demand" className="w-40 h-40" id="logoPic" />
          </span>
        </div>
      </div>
      {show && (
        <div className="bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 absolute top-0 px-5 h-full w-auto flex flex-col gap-y-10">
          <span onClick={() => setShow(!show)} className={"self-end cursor-pointer"}>
            <GrClose alt="CloseMenu" className="w-12 h-12 pt-4" />
           
          </span>
          <ul className="flex flex-col text-xl text-white gap-y-5">
            <Link to="/company/home">
              <li className="flex items-center gap-x-4">
                <span>
                  <AiFillHome className="w-6 h-6"/>
                  
                </span>
                Home
              </li>
            </Link>
            <Link to="/company/profile">
              <li className="flex items-center gap-x-4">
                <span>
                  <CgProfile alt="Home" className="w-6 h-6"/>
                
                </span>
                Profile
              </li>
            </Link>
            <Link to="/company/request">
              <li className="flex items-center gap-x-3">
                <span>
                  <RiMessageLine alt="Home" className="w-7 h-7"/>
                  
                </span>
                Request
              </li>
            </Link>
            <button onClick={handleLogout}>
              <li className="flex items-center gap-x-2">
                <span>
                  <IoIosLogOut alt="Home" className="w-8 h-8"/>
                  
                </span>
                Logout
              </li>
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
