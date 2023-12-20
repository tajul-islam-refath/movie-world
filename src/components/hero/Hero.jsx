import React from "react";
import "./hero.css";
import { useSelector } from "react-redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";
import heroImage from "../../assets/hd-wallpaper-jawan.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const movies = useSelector((state) => state.user.movies);
  return (
    <div className="hero flex  items-center">
      <div className="container min800:w-full mx-auto flex flex-row min800:flex-col items-center gap-20 min800:gap-10">
        <div className="w-[50%]">
          <h1 className="uppercase text-blue-500 text-[3.5rem] min800:text-[1.5rem] font-bold leading-none">
            Best Way Of Entertainment
          </h1>
          <h4 className="uppercase text-[2rem] min800:text-[1.5rem] font-bold leading-none text-white mt-6 min800:mt-2">
            Movies you demand at usd
            <br />
            <span className="text-yellow-400">10/month</span>
          </h4>
        </div>
        <div className="w-[50%]">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="hero-swiper">
            {movies?.map((movie) => (
              <SwiperSlide>
                <div className="h-full w-full relative">
                  <img src={movie?.image} alt="" className="absolute" />
                  <Link
                    to={`/movies/${movie?._id}`}
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 z-50 bg-blue-600 text-[12px] uppercase text-white  rounded-full py-1 px-6">
                    Watch Now
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
