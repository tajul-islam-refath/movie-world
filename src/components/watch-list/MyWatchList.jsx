import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";

import MovieCard from "../card/MovieCard";
const MyWatchList = () => {
  const movies = useSelector((state) => state.user.watchList);
  return (
    <section className="w-full min-h-[100%] bg-black py-10 px-2 relative">
      <div className="absolute left-0 top-0 bg-blue-400 w-[20%] h-full blur-[20rem]"></div>
      <div className="absolute right-0 top-0 bg-blue-400 w-[20%] h-full blur-[20rem]"></div>
      <div className="container mx-auto">
        <h1 className="uppercase font-bold text-[1.4rem]">
          <span className="text-white">Your</span>{" "}
          <span className="text-yellow-400"> Watch-List </span>
        </h1>
        <div className="h-[300px] mt-3">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              400: {
                slidesPerView: 2,
              },
              639: {
                slidesPerView: 3,
              },
              865: {
                slidesPerView: 4,
              },
              1000: {
                slidesPerView: 5,
              },
              1500: {
                slidesPerView: 6,
              },
              1700: {
                slidesPerView: 7,
              },
            }}
            className="upcomming-swipper">
            {movies?.map((movie) => (
              <SwiperSlide>
                <MovieCard movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default MyWatchList;
