import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/icon-logo.png';
import Car from '../assets/icon-logo.png';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import "swiper/css/pagination";

import {  Mousewheel, Pagination, Navigation} from "swiper";


function Splash() {
  return (
    <div className='bg-white w-full min-h-full'>
      <div>
        <Swiper
        rewind= {true}
        direction= {"horizontal"}
        slidesPerView={1}
        centeredSlides={true}
        mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination, Navigation]}
      >
      <SwiperSlide>
        <div>
          <img src={Logo} alt="logo" className='mx-auto w-64 mt-10' />
          <span className='font-large font-bold text-6xl text-lg items-center justify-center flex'>ON ROAD GAS DEMAND</span>
          <span className='font-medium text-lg items-center justify-center flex'>Pump It Anytime, Anywhere</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div><img src={Car} alt="car" className='mx-auto w-80'/></div>
        <div className='text-center mx-3'>
         This application helps to find nearby Gas Station easily and quickly when your exhausted during the road trip.
        It is difficult to find gas station while traveling, especially in unfamiliar areas. This app assists in overcoming this issue by
          providing Gas station Information and allowing you to contact them in an emergency without incurring additional fees.     
        </div>
      </SwiperSlide>
      <div className='flex items-center justify-center pt-10 cursor-pointer' />
      </Swiper>
      <span className='items-center justify-center flex pt-8 pb-10 overflow-hidden'>
        <Link to="/welcome">
        <button className='text-white rounded-md font-medium text-xl py-3 w-60 bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 hover:bg-gradient-to-r from-blue-800 via-sky-900 to-indigo-500 font-sans '>Get Started</button>
        </Link>
      </span>
       </div>
    </div>
  );
}

export default Splash;