import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrowLeft from "../../assets/arrow-left-solid.svg";
import Bell from "../../assets/bell-solid.svg";
import {CgProfile} from 'react-icons/cg';
import {RiProfileLine} from 'react-icons/ri';
import {AiOutlineMail} from 'react-icons/ai';
import {RiPhoneFill} from 'react-icons/ri';
import {GrNext} from 'react-icons/gr';
import {MdLocationOn} from 'react-icons/md';
import {AiOutlineClockCircle} from 'react-icons/ai';

const UserProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState(false);
  const [profile, setProfile] = useState(false);
  useEffect(() => { }, [email, phone, name]);
  return (
    <div className="text-primary">
      <div className="flex items-center justify-between py-3 mx-3 text-xl font-bold">
        <Link to={"/company/home"}>
          <span className="flex items-center gap-2 ">
            <img src={ArrowLeft} alt="" className="w-5 h-5" />
            Back
          </span>
        </Link>
        <div className="flex items-center gap-3 cursor-pointer">
          <span>
            <img src={Bell} alt="Notification" className="w-6 h-6" />
          </span>
          <span className="p-1 border rounded-md cursor-pointer border-primary">Logout</span>
        </div>
      </div>
      <h1 className="text-center py-10 text-2xl bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 text-transparent bg-clip-text font-bold ">
        Gas Station Name
      </h1>
      <div className="text-lg rounded-lg flex flex-col gap-y-4 justify-center bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 px-3 py-5 mx-3">
        <div>
        <CgProfile className='w-14 h-14 rounded-full'/>
        </div>
        <div className="flex items-center gap-x-2 text-white">
          <span>
          <RiProfileLine className='w-6 h-6'/>
          </span>
          SP Rwanda
        </div>
        <div className="flex items-center gap-x-2 text-white">
          <span>
          <AiOutlineMail className='w-6 h-6'/>
          </span>
          sprwanda@gmail.com
        </div>
        <div className="flex gap-x-2 items-center text-white">
          <span>
          <RiPhoneFill className='w-6 h-6'/>
          </span>
          0786374821
        </div>
        <div className="flex items-center gap-x-2 text-white">
          <span>
            <MdLocationOn alt="Location" className="w-6 h-6"/>
            
          </span>
          kN 8 Ave
        </div>
        <div className="flex items-center gap-x-2 text-white">
          <span>
            < AiOutlineClockCircle alt="Hours" className="w-6 h-6"/>
            
          </span>
          24 hrs Everyday
        </div>
        <div>
          <button
            className="rounded-md text-white border-2 p-2 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 w-48 hover:bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500"
            onClick={() => setPassword(!password)}
          >
            Change Password
          </button>
        </div>
        <div>
          <button
            className="rounded-md text-white border-2 p-2 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 w-48 hover:bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500"
            onClick={() => setProfile(!profile)}
          >
            Edit profile
          </button>
        </div>
      </div>
      <div className="rounded-lg text-white text-lg flex justify-between bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 px-3 py-5 mt-5 mx-3">
        <span>Support</span>
        <span className="flex items-center gap-3">
          +25078674453
          <span>
          <GrNext className='w-5 h-5 cursor-pointer scale-100 hover:scale-125'/>
          </span>
        </span>
      </div>
      {password && (
        <div className="absolute top-0 flex flex-col items-center justify-center w-full h-screen bg-white">
          <form
            action="#"
            className="absolute flex flex-col gap-y-4 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 rounded-md px-10 py-12 mx-3"
          >
            <div className="rounded-md border p-2 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 bg-white">
              <input
                type="password"
                name="passoword"
                id=""
                placeholder="Current Password"
                className="w-full bg-white outline-none"
              />
            </div>
            <div className="rounded-md border p-2 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 bg-white">
              <input
                type="password"
                name="passoword"
                id=""
                placeholder="New Password"
                className="w-full bg-white outline-none"
              />
            </div>
            <div className="rounded-md border p-2 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 bg-white">
              <input
                type="password"
                name="passoword"
                id=""
                placeholder="Confirm Password"
                className="w-full bg-white outline-none"
              />
            </div>
            <span className="flex justify-between gap-2 font-bold">
              <button className="rounded-md border-2 p-2 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 w-28 hover:bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 text-white">Save</button>
              <button
                className="rounded-md border-2 text-white p-2 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 w-28 hover:bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500"
                onClick={() => setPassword(!password)}
              >
                Cancel
              </button>
            </span>
          </form>
        </div>
      )}
      {profile && (
        <div className="absolute top-0 flex flex-col items-center justify-center w-full h-screen bg-white">
          <form
            action="#"
            className="absolute flex flex-col gap-y-4 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 rounded-md px-8 py-12 mx-3"
          >
            <div className="rounded-md border p-2 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 bg-white">
              <input
                type="file"
                id="img"
                name="img"
                accept="image/*"
                placeholder="change profile"
                className="w-full bg-white outline-none"
              />
            </div>
            <div className="rounded-md border p-2 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 bg-white">
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="username"
                id=""
                placeholder="Company Name"
                className="w-full bg-white outline-none"
              />
            </div>
            <div className="rounded-md border p-2 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 bg-white">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id=""
                placeholder="Email"
                className="w-full bg-white outline-none"
              />
            </div>
            <div className="rounded-md border p-2 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 bg-white">
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                name="phonenumber"
                id=""
                placeholder="Phone Number"
                className="w-full bg-white outline-none"
              />
            </div>
            <span className="flex justify-between gap-2 font-bold">
              <button className="rounded-md border-2 p-2 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 w-28 hover:bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500">Save</button>
              <button
                className="rounded-md border-2 p-2 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 w-28 hover:bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500"
                onClick={() => setProfile(!profile)}
              >
                Cancel
              </button>
            </span>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
