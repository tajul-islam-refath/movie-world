import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import img from "../../assets/hero.jpg";
import { FaStar } from "react-icons/fa";
import { avgRating } from "../../utils/utiles";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

const RatedMovies = () => {
  const movies = useSelector((state) => state.user.movies);
  return (
    <section className="w-full min-h-[100%] bg-black py-10 px-2 relative">
      <div className="absolute left-0 top-0 bg-blue-400 w-[20%] h-full blur-[20rem]"></div>
      <div className="absolute right-0 top-0 bg-blue-400 w-[20%] h-full blur-[20rem]"></div>
      <div className="text-center">
        <h1 className="uppercase font-bold text-[1.4rem]">
          <span className="text-yellow-400">movies you </span>
          <span className="text-blue-600">rated</span>{" "}
        </h1>
      </div>
      <div className="h-[300px] mt-3 container mx-auto">
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
              <div className="w-full h-full overflow-hidden rounded-lg bg-gray-900">
                <img
                  src={movie?.image}
                  alt=""
                  className="w-full h-[160px] object-cover"
                />
                <div className="w-full font-semibold p-3">
                  <h3 className="text-white text-left uppercase">
                    {movie?.title}
                  </h3>
                  <span className="flex items-center gap-2 cursor-pointer text-white ">
                    <FaStar className="inline-block text-yellow-400 " />{" "}
                    {avgRating(movie?.ratings)}({movie?.ratings?.length})
                  </span>
                  <button className=" flex flex-row items-center gap-3 w-full bg-blue-600 text-[12px] uppercase text-white  rounded-full py-1 px-6 mt-2">
                    <IoAdd /> Watch List
                  </button>
                  <Link
                    to={`/movies/${movie?._id}`}
                    className="flex items-center gap-2 cursor-pointer text-[12px] mt-2 text-white ">
                    <MdOutlineSlowMotionVideo className="inline-block text-yellow-400 " />{" "}
                    Trailer
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RatedMovies;
