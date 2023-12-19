import React from "react";
import "./hero.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";

import heroImage from "../../assets/hd-wallpaper-jawan.jpg";

const Hero = () => {
  return (
    <div className="hero flex  items-center">
      <div className="container mx-auto flex items-center gap-20">
        <div className="w-[50%]">
          <h1 className="uppercase text-blue-500 text-[3.5rem] font-bold leading-none">
            Best Way Of Entertainment
          </h1>
          <h4 className="uppercase text-[2rem] font-bold leading-none text-white mt-6">
            Movies you demand at usd
            <br />
            <span className="text-yellow-400">10/month</span>
          </h4>
        </div>
        <div className="w-[50%]">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className="rounded-lg h-full w-full relative">
                <img src={heroImage} alt="" className="absolute" />
                <button className="absolute bottom-1 left-1/2 -translate-x-1/2 z-50 bg-blue-600 text-[12px] uppercase text-white  rounded-full py-1 px-6">
                  Watch Now
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-lg h-full w-full">
                <img src={heroImage} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-lg h-full w-full">
                <img src={heroImage} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
