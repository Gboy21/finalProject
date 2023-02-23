import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ChevronRight from '../../assets/chevron-right-solid.svg';
import ArrowLeft from '../../assets/arrow-left-solid.svg';
import Bell from '../../assets/bell-solid.svg';
import { getUserFromLocalStorage } from '../../utils/auth';
import { getUserFromDb } from '../../firebase/services/user';
import {CgProfile} from 'react-icons/cg';
import {RiProfileLine} from 'react-icons/ri';
import {AiOutlineMail} from 'react-icons/ai';
import {RiPhoneFill} from 'react-icons/ri';
import {GrNext} from 'react-icons/gr';


const UserProfile = () => {

  const loggedInUser = getUserFromLocalStorage()
  const userId = loggedInUser.uid

  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [phone, setPhone] = useState('')
  const [password, setPassword] = useState(false);
  const [profile, setProfile] = useState(false);
  const [userData, setUserData] = useState()

  useEffect(() => {
    async function getUserdata() {
      try {
        const userData = await getUserFromDb(userId)
        setUserData(userData);
      } catch (error) {
        console.log('error getting', error)
      }
    }
    getUserdata()
  }, [userId])

  return (
    <>
      {userData && (<div className='text-primary'>
        <div className='flex justify-between items-center py-3 font-bold text-xl mx-3'>
          <Link to={"/user/home"}><span className='flex items-center gap-2'><img src={ArrowLeft} alt="" className='w-5 h-5' />Back</span></Link>
          <div className='flex gap-3 cursor-pointer items-center'>
            <span><img src={Bell} alt="Notification" className='w-6 h-6' /></span>
            <Link to={"/welcome"}>
              <span className='cursor-pointer border border-primary rounded-md p-1'>Logout</span>
            </Link>
          </div>
        </div>
        <h1 className='text-center py-10 text-2xl bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 text-transparent bg-clip-text font-bold'>{userData.userName}</h1>
        <div className='text-lg text-white rounded-lg flex flex-col gap-y-4 justify-center bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 px-3 py-5 mx-3'>
          <div>
            <CgProfile className='w-14 h-14 rounded-full'/>
            
          </div>
          <div className='flex gap-x-2 items-center'><span>
            <RiProfileLine className='w-6 h-6'/>
            {/* <img src={Username} alt="Name" className='w-6 h-6' /> */}
            </span>
            {userData.userName}
            </div>
          <div className='flex gap-x-2 items-center'>
            <span>
              <AiOutlineMail className='w-6 h-6'/>
              {/* <img src={Email} alt="Email" className='w-6 h-6' /> */}
              </span>
            {userData.email}</div>
          <div className='flex gap-x-2 items-cente'>
            <span>
              <RiPhoneFill className='w-6 h-6'/>
              {/* <img src={Phone} alt="Phone Number" className='w-6 h-6' /> */}
              </span>{userData.phoneNumber}</div>
          <div>
            <button className='rounded-md border-2 p-2 border-white w-48' onClick={() => setPassword(!password)}>Change Password</button>
          </div>
          <div>
            <button className='rounded-md border-2 p-2 border-white w-48' onClick={() => setProfile(!profile)}>Edit profile</button>
          </div>
        </div>
        <div className='rounded-lg text-lg text-white flex justify-between bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 px-3 py-5 mt-5 mx-3'>
          <span>Support</span>
          <span className='flex items-center gap-3'>+2507125242<span>
            <GrNext className='w-5 h-5 cursor-pointer scale-100 hover:scale-125'/>
            {/* <img src={ChevronRight} alt="" className='w-5 h-5 cursor-pointer scale-100 hover:scale-125' /> */}
            </span></span>
        </div>
        <span>Change Profile</span>
        {password && <div className='w-full bg-white top-0 absolute h-screen flex flex-col items-center justify-center'>
          <form action="#" className='absolute flex flex-col gap-y-4 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 rounded-md px-10 py-12 mx-3'>
            <div className='rounded-md border p-2 border-white bg-white'><input type="password" name="passoword" id="" placeholder='Current Password' className='outline-none bg-white w-full' /></div>
            <div className='rounded-md border p-2 border-white bg-white'><input type="password" name="passoword" id="" placeholder='New Password' className='outline-none bg-white w-full' /></div>
            <div className='rounded-md border p-2 border-white bg-white'><input type="password" name="passoword" id="" placeholder='Confirm Password' className='outline-none bg-white w-full' /></div>
            <span className='flex justify-between gap-2 font-bold'><button className='rounded-md border-2 p-2 border-white w-28 hover:bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 text-white' >Save</button>
              <button className='rounded-md border-2 p-2 border-white w-28 hover:bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 text-white' onClick={() => setPassword(!password)}>Cancel</button></span>
          </form>
        </div>
        }
        {profile && <div className='w-full bg-white top-0 absolute h-screen flex flex-col items-center justify-center'>

          <form action="#" className='absolute flex flex-col gap-y-4 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 rounded-md px-8 py-12 mx-3'>
            {/* onChange={(e) => setName(e.target.value)} onChange={(e) => setEmail(e.target.value)} onChange={(e) => setPhone(e.target.value)}  */}
            <div className='rounded-md border p-2 border-white bg-white'><input type="file" id="img" name="img" accept="image/*" placeholder='change profile' className='outline-none bg-white w-full' /></div>
            <div className='rounded-md border p-2 border-white bg-white'><input type="text" name="username" id="" placeholder='Name' defaultValue={userData.userName} className='outline-none bg-white w-full' /></div>
            <div className='rounded-md border p-2 border-white bg-white'><input type="email" name="email" id="" placeholder='Email' defaultValue={userData.email} className='outline-none bg-white w-full' /></div>
            <div className='rounded-md border p-2 border-white bg-white'><input type="number" name="phonenumber" id="" placeholder='Phone Number' defaultValue={userData.phoneNumber} className='outline-none bg-white w-full' /></div>
            <span className='flex justify-between gap-2 font-bold'><button className='rounded-md border-2 p-2 border-white w-28 hover:bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500'>Save</button>
              <button className='rounded-md border-2 p-2 border-white w-28 hover:bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500' onClick={() => setProfile(!profile)}>Cancel</button></span>
          </form>
        </div>
        }
      </div>)}
    </>

  );
}

export default UserProfile;